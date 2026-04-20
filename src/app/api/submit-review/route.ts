import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendEmail } from '@/lib/email';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { claimId, reviewUrl } = await req.json();

    if (!claimId || !reviewUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Update claim with review URL
    const { data: claim, error } = await supabase
      .from('book_claims')
      .update({
        review_url: reviewUrl,
        status: 'review_submitted',
        review_submitted_at: new Date().toISOString()
      })
      .eq('id', claimId)
      .select()
      .single();

    if (error || !claim) {
      return NextResponse.json(
        { error: 'Claim not found' },
        { status: 404 }
      );
    }

    // Notify admin (you) that a review is pending verification
    await sendEmail({
      to: process.env.SMTP_FROM_EMAIL!, // Your email
      subject: `New review pending verification — ${claim.name}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;">
          <h2 style="color:#1B4332;">New Book Claim — Review Submitted</h2>
          <table style="width:100%;border-collapse:collapse;margin:20px 0;">
            <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Name</strong></td><td style="padding:8px;border:1px solid #ddd;">${claim.name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Email</strong></td><td style="padding:8px;border:1px solid #ddd;">${claim.email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Amazon Profile</strong></td><td style="padding:8px;border:1px solid #ddd;">${claim.amazon_profile}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Review URL</strong></td><td style="padding:8px;border:1px solid #ddd;"><a href="${reviewUrl}">${reviewUrl}</a></td></tr>
          </table>
          <a href="https://your-site.com/admin/reviews" style="display:inline-block;background:#B8956B;color:#1B4332;padding:12px 24px;text-decoration:none;font-weight:bold;border-radius:2px;">
            Verify in Dashboard →
          </a>
        </div>
      `
    });

    // Send user confirmation
    await sendEmail({
      to: claim.email,
      subject: 'Review received — Verification in progress',
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#2C2C2C;">
          <h1 style="color:#1B4332;font-size:24px;">Review Submitted</h1>
          <p>Hi ${claim.name},</p>
          <p>We received your review URL and are verifying it now. You will receive your Kindle edition within 24 hours.</p>
          <div style="background:#F5F4F0;padding:16px;border-left:3px solid #B8956B;margin:20px 0;">
            <p style="margin:0;font-size:14px;"><strong>Review URL:</strong> <a href="${reviewUrl}" style="color:#B8956B;">${reviewUrl}</a></p>
          </div>
          <p style="font-size:12px;color:#666;margin-top:40px;">— Mark Muriithi, Murivest Realty Group</p>
        </div>
      `
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Submit review error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}