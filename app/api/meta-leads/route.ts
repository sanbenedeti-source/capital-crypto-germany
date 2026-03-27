import { NextRequest, NextResponse } from "next/server";

const VERIFY_TOKEN = process.env.META_VERIFY_TOKEN!;
const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN!;
const ELNOPY_API_URL = process.env.ELNOPY_API_URL!;
const ELNOPY_LINK_ID = process.env.ELNOPY_LINK_ID!;

function normalizePhone(phone: string) {
  return phone.replace(/\s+/g, "").trim();
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json({ error: "Verification failed" }, { status: 403 });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.object !== "page") {
      return NextResponse.json({ ok: true });
    }

    for (const entry of body.entry || []) {
      for (const change of entry.changes || []) {
        if (change.field !== "leadgen") continue;

        const leadgenId = change.value?.leadgen_id;
        if (!leadgenId) continue;

        const metaRes = await fetch(
          `https://graph.facebook.com/v23.0/${leadgenId}?fields=field_data,created_time&access_token=${META_ACCESS_TOKEN}`,
          { method: "GET" }
        );

        const metaLead = await metaRes.json();

        if (!metaRes.ok) {
          console.error("META ERROR:", metaLead);
          continue;
        }

        const fields: Record<string, string> = {};

        for (const item of metaLead.field_data || []) {
          fields[item.name] = item.values?.[0] || "";
        }

        const fullName = fields.full_name || fields.name || "";
        const nameParts = fullName.trim().split(" ").filter(Boolean);

        const fname =
          fields.first_name ||
          nameParts[0] ||
          "Lead";

        const lname =
          fields.last_name ||
          (nameParts.length > 1 ? nameParts.slice(1).join(" ") : "Meta");

        const email = (fields.email || "").trim();
        const fullphone = normalizePhone(fields.phone_number || fields.phone || "");

        const payload = {
          fname,
          lname,
          email,
          fullphone,
          ip: "0.0.0.0",
          country: "DE",
          language: "de",
          link_id: ELNOPY_LINK_ID,
          funnel: "Capital Crypto Germany",
          source: "Facebook",
        };

        console.log("ELNOPY PAYLOAD:", payload);

        const elnopyRes = await fetch(ELNOPY_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const elnopyText = await elnopyRes.text();

        let elnopyData: unknown = elnopyText;
        try {
          elnopyData = JSON.parse(elnopyText);
        } catch {
          // keep raw text
        }

        console.log("ELNOPY RESPONSE:", elnopyData);

        if (!elnopyRes.ok) {
          console.error("ELNOPY HTTP ERROR:", elnopyData);
        }
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("WEBHOOK ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}