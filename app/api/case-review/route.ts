import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '../../../lib/supabase-admin';

export async function POST(req: Request) {
  try {
    const supabaseAdmin = getSupabaseAdmin();
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

    const { data, error } = await supabaseAdmin
      .from('leads')
      .insert([
        {
          name,
          email,
          phone,
          platform,
          wallet,
          transaction_hash: transactionHash,
          description,
        },
      ])
      .select('id')
      .single();

    if (error) {
      console.error('SUPABASE INSERT ERROR:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to save lead.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      leadId: data.id,
    });
  } catch (error) {
    console.error('CASE REVIEW API ERROR:', error);
    return NextResponse.json(
      { error: 'Server error.' },
      { status: 500 }
    );
  }
}