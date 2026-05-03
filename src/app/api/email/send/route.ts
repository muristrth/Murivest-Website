import { NextRequest, NextResponse } from 'next/server';
import { sendSequenceEmail } from '@/app/lib/email';
import { sendEmailSchema } from '@/lib/validations';
import { supabaseAdmin } from '@/app/lib/supabase';

function isAuthorized(request: NextRequest): boolean {
  const token = request.headers.get('x-admin-token');
  return token === process.env.ADMIN_SECRET_TOKEN;
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const result = sendEmailSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: 'Validation failed', details: result.error.flatten() }, { status: 400 });
    }

    const { leadId, sequenceStep, customSubject, customBody } = result.data;

    const { data: lead } = await supabaseAdmin.from('leads').select('*').eq('id', leadId).single();
    if (!lead) return NextResponse.json({ error: 'Lead not found' }, { status: 404 });

    const emailResult = await sendSequenceEmail(lead.email, sequenceStep, lead, customSubject, customBody);

    await supabaseAdmin.from('email_events').insert({
      lead_id: leadId,
      sequence_step: sequenceStep,
      subject: customSubject || `Sequence: ${sequenceStep}`,
      status: emailResult.success ? 'sent' : 'failed',
      sent_at: new Date().toISOString(),
      error_msg: emailResult.error || null,
    });

    return NextResponse.json({
      success: emailResult.success,
      message: emailResult.success ? 'Email sent successfully' : emailResult.error,
    });
  } catch (err) {
    console.error('[email send API] Error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}