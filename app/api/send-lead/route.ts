import { NextRequest, NextResponse } from "next/server";

const ELNOPY_API_URL = process.env.ELNOPY_API_URL!;
const ELNOPY_LINK_ID = process.env.ELNOPY_LINK_ID!;

function normalizePhone(phone: string) {
  return String(phone || "").replace(/\s+/g, "").trim();
}

function splitName(fullName: string) {
  const parts = String(fullName || "").trim().split(" ").filter(Boolean);

  return {
    fname: parts[0] || "Lead",
    lname: parts.length > 1 ? parts.slice(1).join(" ") : "Website",
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = normalizePhone(body.phone || "");
    const platform = String(body.platform || "").trim();
    const wallet = String(body.wallet || "").trim();
    const transactionHash = String(body.transactionHash || "").trim();
    const description = String(body.description || "").trim();

    const { fname, lname } = splitName(name);

    const payload = {
      fname,
      lname,
      email,
      fullphone: phone,
      ip: "0.0.0.0",
      country: "DE",
      language: "de",
      link_id: ELNOPY_LINK_ID,
      funnel: "Capital Crypto Germany Website",
      source: "Website",

      // fusha ekstra që mund t’i shohësh në logs / endpoint nëse pranohen
      notes: [
        platform ? `Platform: ${platform}` : "",
        wallet ? `Wallet: ${wallet}` : "",
        transactionHash ? `Transaction Hash: ${transactionHash}` : "",
        description ? `Description: ${description}` : "",
      ]
        .filter(Boolean)
        .join(" | "),
    };

    console.log("SEND-LEAD PAYLOAD:", payload);

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
      // lëre si text nëse nuk është JSON
    }

    console.log("SEND-LEAD RESPONSE:", elnopyData);

    if (!elnopyRes.ok) {
      return NextResponse.json(
        {
          error: "Failed to send lead to ELNOPY",
          details: elnopyData,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead sent successfully",
      data: elnopyData,
    });
  } catch (error) {
    console.error("SEND-LEAD ERROR:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}