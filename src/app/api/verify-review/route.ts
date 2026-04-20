import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendEmail } from '@/lib/email';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { claimId, action, reviewUrl, adminKey } = await req.json();

    // Simple admin protection (use a proper auth system in production)
    if (adminKey !== process.env.ADMIN_SECRET_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (action === 'submit_review') {
      // User submitted their review URL via reply or form
      const { error } = await supabase
        .from('book_claims')
        .update({ 
          review_url: reviewUrl,
          status: 'review_submitted',
          review_submitted_at: new Date().toISOString()
        })
        .eq('id', claimId);

      if (error) throw error;
      return NextResponse.json({ success: true, message: 'Review submitted for verification' });
    }

    if (action === 'approve') {
      // Admin manually verified the review on Amazon
      const { data: claim, error: fetchError } = await supabase
        .from('book_claims')
        .select('*')
        .eq('id', claimId)
        .single();

      if (fetchError || !claim) {
        return NextResponse.json({ error: 'Claim not found' }, { status: 404 });
      }

      // Update status
      await supabase
        .from('book_claims')
        .update({ 
          status: 'verified',
          verified_at: new Date().toISOString()
        })
        .eq('id', claimId);

      // Send the book via SMTP with download link
      await sendEmail({
        to: claim.email,
        subject: 'Your Kindle edition is here — Verified',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Your Book Delivery</title>
          </head>
          <body style="margin:0;padding:0;background-color:#FAF9F6;font-family:Georgia,'Times New Roman',serif;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FAF9F6;">
              <tr>
                <td align="center" style="padding:40px 20px;">
                  <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #e5e5e5;">
                    <tr>
                      <td style="padding:40px 40px 20px;border-bottom:2px solid #B8956B;">
                        <p style="margin:0;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#B8956B;font-family:system-ui,sans-serif;">Verified & Delivered</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:40px;text-align:center;">
                        <h1 style="margin:0 0 24px;font-size:32px;color:#1B4332;">Your book is ready</h1>
                        
                        <p style="margin:0 0 32px;font-size:16px;line-height:1.7;color:#2C2C2C;">
                          Your Amazon review has been verified. Here is your copy of <strong>Trial & Error To Wealth Creation</strong>.
                        </p>
                        
                        <a href="${process.env.BOOK_DOWNLOAD_URL}" 
                           style="display:inline-block;background:#B8956B;color:#1B4332;padding:16px 40px;text-decoration:none;font-weight:700;font-size:14px;letter-spacing:0.1em;text-transform:uppercase;font-family:system-ui,sans-serif;border-radius:2px;">
                          Download Kindle Edition
                        </a>
                        
                        <div style="margin-top:32px;padding:24px;background:#F5F4F0;border-left:4px solid #1A237E;text-align:left;">
                          <p style="margin:0 0 10px;font-size:12px;text-transform:uppercase;letter-spacing:0.15em;color:#1A237E;font-family:system-ui,sans-serif;font-weight:600;">
                            Reading Access
                          </p>
                          <p style="margin:0;font-size:14px;line-height:1.7;color:#2C2C2C;font-family:system-ui,sans-serif;">
                            1. Click the link above to open the digital manuscript.<br>
                            2. View directly within your browser or the Google Drive mobile app.<br>
                            3. Note: This document is provided for secure viewing only; downloading and printing have been disabled to protect the intellectual property.
                          </p>
                        </div>
                        
                        <p style="margin:32px 0 0;font-size:14px;line-height:1.6;color:#666;">
                          <em>The system works. Let's build.</em><br>
                          — Mark Muriithi
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:24px 40px;background:#1B4332;text-align:center;">
                        <p style="margin:0;font-size:11px;color:#FAF9F6/60;font-family:system-ui,sans-serif;letter-spacing:0.05em;">
                          Murivest Realty Group · <a href="https://murivest.co.ke" style="color:#B8956B;text-decoration:none;">murivest.co.ke</a>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `
      });

      // Mark as delivered
      await supabase
        .from('book_claims')
        .update({ 
          status: 'delivered',
          delivered_at: new Date().toISOString()
        })
        .eq('id', claimId);

      return NextResponse.json({ 
        success: true, 
        message: `Book delivered to ${claim.email}` 
      });
    }

    if (action === 'reject') {
      await supabase
        .from('book_claims')
        .update({ 
          status: 'rejected',
          notes: reviewUrl // reuse field for rejection reason
        })
        .eq('id', claimId);

      // Optional: Send rejection email
      await sendEmail({
        to: claimId.email,
        subject: 'Regarding your book claim',
        html: `<p>We were unable to verify your review. Please ensure you left a review on the correct book and reply with the direct URL.</p>`
      });

      return NextResponse.json({ success: true, message: 'Claim rejected' });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });

  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}