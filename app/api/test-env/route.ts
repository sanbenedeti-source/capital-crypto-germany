import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ELNOPY_API_URL: process.env.ELNOPY_API_URL ?? null,
    ELNOPY_LINK_ID: process.env.ELNOPY_LINK_ID ?? null,
    SMTP_HOST: process.env.SMTP_HOST ?? null,
  });
}