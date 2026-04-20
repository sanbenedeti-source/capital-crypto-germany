import { createClient } from "@supabase/supabase-js";

type LeadInput = {
  source: string;
  name: string;
  email: string;
  phone: string;
  platform?: string;
  wallet?: string;
  transactionHash?: string;
  description?: string;
};

function normalizePhone(phone: string) {
  return String(phone || "").replace(/[^\d+]/g, "").trim();
}

function toE164(phone: string) {
  let p = normalizePhone(phone);

  if (!p) return "";

  if (p.startsWith("067") || p.startsWith("068") || p.startsWith("069")) {
    p = "+355" + p.slice(1);
  } else if (p.startsWith("+3550")) {
    p = "+355" + p.slice(5);
  } else if (p.startsWith("015") || p.startsWith("016") || p.startsWith("017")) {
    p = "+49" + p.slice(1);
  } else if (p.startsWith("+490")) {
    p = "+49" + p.slice(4);
  } else if (!p.startsWith("+")) {
    p = `+${p}`;
  }

  return p;
}

function splitName(fullName: string) {
  const parts = String(fullName || "").trim().split(" ").filter(Boolean);

  return {
    fname: parts[0] || "Lead",
    lname: parts.length > 1 ? parts.slice(1).join(" ") : "Website",
  };
}

export async function createLeadAndSyncCRM(input: LeadInput) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const crmApiToken = process.env.CRM_API_TOKEN;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error("Missing Supabase environment variables");
  }

  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

  const { fname, lname } = splitName(input.name);
  const fullphone = toE164(input.phone);

  const notes = [
    input.platform ? `Platform: ${input.platform}` : "",
    input.wallet ? `Wallet: ${input.wallet}` : "",
    input.transactionHash ? `Transaction Hash: ${input.transactionHash}` : "",
    input.description ? `Description: ${input.description}` : "",
  ]
    .filter(Boolean)
    .join(" | ");

  const { data: insertedLead, error: insertError } = await supabase
    .from("leads")
    .insert({
      name: input.name,
      email: input.email,
      phone: fullphone,
      platform: input.platform || "",
      wallet: input.wallet || "",
      transaction_hash: input.transactionHash || "",
      description: input.description || "",
      crm_status: "pending",
      crm_message: "",
      crm_lead_id: "",
      crm_autologin: "",
      crm_password: "",
    })
    .select()
    .single();

  if (insertError) {
    throw new Error(`Supabase insert failed: ${insertError.message}`);
  }

  // Nëse CRM token mungon, mos e rrëzo formën.
  if (!crmApiToken) {
    await supabase
      .from("leads")
      .update({
        crm_status: "failed",
        crm_message: "CRM_API_TOKEN is missing",
      })
      .eq("id", insertedLead.id);

    return {
      dbLead: insertedLead,
      dbOk: true,
      crmOk: false,
      crmData: { message: "CRM_API_TOKEN is missing" },
    };
  }

  const crmUrl = `https://tracking.etech.quest/api/v3/integration?api_token=${crmApiToken}`;
  const linkId = "2980";

  const params = new URLSearchParams();
  params.append("fname", fname);
  params.append("lname", lname);
  params.append("email", input.email);
  params.append("fullphone", fullphone);
  params.append("ip", "0.0.0.0");
  params.append("country", "DE");
  params.append("language", "de");
  params.append("link_id", linkId);
  params.append("funnel", "Capital Crypto Germany Website");
  params.append("source", input.source);
  params.append("domain", "capitalcryptogermany.com");
  params.append("description", notes);

  let crmOk = false;
  let crmData: any = null;

  try {
    const crmRes = await fetch(crmUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
      cache: "no-store",
    });

    const crmText = await crmRes.text();
    console.log("CRM STATUS:", crmRes.status);
console.log("CRM RESPONSE:", crmText);

    crmData = crmText;
    try {
      crmData = JSON.parse(crmText);
    } catch {}

    crmOk = crmRes.ok && crmData?.success !== false;

    await supabase
      .from("leads")
      .update({
        crm_status: crmOk ? "sent" : "failed",
        crm_message:
          typeof crmData === "object"
            ? crmData?.message || null
            : String(crmData),
        crm_lead_id: crmData?.id ? String(crmData.id) : null,
        crm_autologin: crmData?.autologin || null,
        crm_password: crmData?.password || null,
      })
      .eq("id", insertedLead.id);
  } catch (crmError: any) {
    crmOk = false;
    crmData = { message: crmError?.message || "CRM request failed" };

    await supabase
      .from("leads")
      .update({
        crm_status: "failed",
        crm_message: crmData.message,
      })
      .eq("id", insertedLead.id);
  }

  return {
    dbLead: insertedLead,
    dbOk: true,
    crmOk,
    crmData,
  };
}