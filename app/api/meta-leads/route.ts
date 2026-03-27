import { NextRequest, NextResponse } from "next/server";
import { createLeadAndSyncCRM } from "@/lib/lead-service";

const VERIFY_TOKEN = process.env.META_VERIFY_TOKEN!;
const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN!;

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
          `https://graph.facebook.com/v23.0/${leadgenId}?fields=field_data&access_token=${META_ACCESS_TOKEN}`,
          { cache: "no-store" }
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

        const fullName =
          fields.full_name ||
          fields.name ||
          `${fields.first_name || ""} ${fields.last_name || ""}`.trim();

        const email = fields.email || "";
        const phone = fields.phone_number || fields.phone || "";

        const extraDescription = Object.entries(fields)
          .map(([key, value]) => `${key}: ${value}`)
          .join(" | ");

        const result = await createLeadAndSyncCRM({
          source: "Facebook",
          name: fullName,
          email,
          phone,
          platform: fields["Über welche Art von Plattform lief die Investition?"] || "Meta Lead",
          wallet: "",
          transactionHash: "",
          description: extraDescription || "Lead from Meta Ads",
        });

        console.log("META CRM RESULT:", result);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("META WEBHOOK ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}