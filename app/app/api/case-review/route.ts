import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      platform,
      wallet,
      transactionHash,
      description,
    } = body;

    if (!name || !email || !description) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        platform,
        wallet,
        transactionHash,
        description,
      },
    });

    return NextResponse.json({
      success: true,
      leadId: lead.id,
    });
  } catch (error) {
    console.error('CASE REVIEW API ERROR:', error);
    return NextResponse.json(
      { error: 'Server error.' },
      { status: 500 }
    );
  }
}