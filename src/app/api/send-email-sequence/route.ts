/**
 * /api/send-email-sequence
 *
 * This route is called by a cron job (e.g., Vercel Cron, GitHub Actions, or an external scheduler).
 * Set it to run every hour. It checks for scheduled emails that are due and sends them.
 *
 * Vercel Cron config (vercel.json):
 * {
 *   "crons": [{ "path": "/api/send-email-sequence", "schedule": "0 * * * *" }]
 * }
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendEmail } from '@/lib/email';
import { getEmail2IdentityTrigger, getEmail3ReviewGateway } from '@/components/emails/sequence';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(req: NextRequest) {
  // Secure with a secret so only your cron job can trigger it
  const cronSecret = req.headers.get('x-cron-secret');
  if (cronSecret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Fetch emails scheduled for now or in the past that haven't been sent
    const { data: pendingEmails, error } = await supabase
      .from('email_sequence')
      .select('*')
      .lte('scheduled_at', new Date().toISOString())
      .eq('sent', false)
      .limit(50); // process in batches

    if (error) throw error;
    if (!pendingEmails || pendingEmails.length === 0) {
      return NextResponse.json({ message: 'No emails to send', sent: 0 });
    }

    let sentCount = 0;
    const errors: string[] = [];

    for (const scheduled of pendingEmails) {
      try {
        let subject = '';
        let html = '';

        if (scheduled.email_number === 2) {
          subject = 'Most people won\'t finish this…';
          html = getEmail2IdentityTrigger(scheduled.name);
        } else if (scheduled.email_number === 3) {
          subject = 'For the few who actually read it';
          html = getEmail3ReviewGateway(scheduled.name);
        } else {
          continue;
        }

        await sendEmail({ to: scheduled.email, subject, html });

        // Mark as sent
        await supabase
          .from('email_sequence')
          .update({ sent: true, sent_at: new Date().toISOString() })
          .eq('id', scheduled.id);

        sentCount++;
      } catch (err) {
        console.error(`Failed to send email ${scheduled.id}:`, err);
        errors.push(scheduled.id);
      }
    }

    return NextResponse.json({
      message: 'Sequence processed',
      sent: sentCount,
      errors: errors.length > 0 ? errors : undefined,
    });

  } catch (error) {
    console.error('Email sequence error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}