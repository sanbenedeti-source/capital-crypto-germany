import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '../../../lib/supabase-admin';
import { sendLeadEmail, sendAutoReply } from '../../../lib/mail';

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

    if (!name || !email || !phone) {
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

    // SEND TO CRM
    try {
      const crmRes = await fetch(process.env.CRM_API_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.CRM_API_TOKEN}`,
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          platform,
          wallet,
          transactionHash,
          description,
          source: 'website',
        }),
      });

      const crmText = await crmRes.text();

      console.log('CRM STATUS:', crmRes.status);
      console.log('CRM RESPONSE:', crmText);

      if (!crmRes.ok) {
        console.error('CRM REQUEST FAILED');
      }
    } catch (err) {
      console.error('CRM ERROR:', err);
    }

    await sendLeadEmail({
      name,
      email,
      phone,
      platform,
      wallet,
      transactionHash,
      description,
    });

    await sendAutoReply({
      fullName: name,
      email,
    });

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