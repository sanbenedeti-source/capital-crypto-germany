import { NextRequest, NextResponse } from "next/server";
import { createLeadAndSyncCRM } from "@/lib/lead-service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = await createLeadAndSyncCRM({
      source: "Website",
      name: String(body.name || "").trim(),
      email: String(body.email || "").trim(),
      phone: String(body.phone || "").trim(),
      platform: String(body.platform || "").trim(),
      wallet: String(body.wallet || "").trim(),
      transactionHash: String(body.transactionHash || "").trim(),
      description: String(body.description || "").trim(),
    });

    return NextResponse.json({
      success: true,
      message: result.crmOk
        ? "Lead saved to Supabase and sent to CRM"
        : "Lead saved but CRM failed",
      crmOk: result.crmOk,
    });

  } catch (error: any) {
    console.error("SEND-LEAD ERROR:", error);

    return NextResponse.json(
      { success: false, error: error?.message || "Server error" },
      { status: 500 }
    );
  }
}