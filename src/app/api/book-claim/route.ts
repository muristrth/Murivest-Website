import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendEmail } from '@/lib/email';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, amazonProfile } = body;

    if (!name || !email || !amazonProfile) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check for existing claim
    const { data: existing } = await supabase
      .from('book_claims')
      .select('id, status')
      .eq('email', email.toLowerCase().trim())
      .maybeSingle();

    if (existing) {
      return NextResponse.json(
        { error: 'You have already claimed this book. Check your email or contact support.' },
        { status: 409 }
      );
    }

    // Insert new claim
    const { data: claim, error } = await supabase
      .from('book_claims')
      .insert([
        {
          name,
          email: email.toLowerCase().trim(),
          amazon_profile: amazonProfile,
          status: 'pending'
        }
      ])
      .select()
      .single();

    if (error) throw error;

    // Send step-by-step instructions email
    await sendEmail({
      to: email,
      subject: 'Your free book claim — Next: Leave a review on Amazon',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your Book Claim</title>
        </head>
        <body style="margin:0;padding:0;background-color:#FAF9F6;font-family:Georgia,'Times New Roman',serif;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FAF9F6;">
            <tr>
              <td align="center" style="padding:40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #e5e5e5;">
                  <tr>
                    <td style="padding:40px 40px 20px;border-bottom:2px solid #B8956B;">
                      <p style="margin:0;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#B8956B;font-family:system-ui,sans-serif;">Murivest Realty Group</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:40px;">
                      <h1 style="margin:0 0 24px;font-size:28px;color:#1B4332;line-height:1.2;">Your book is waiting, ${name}</h1>
                      
                      <p style="margin:0 0 20px;font-size:16px;line-height:1.7;color:#2C2C2C;">
                        Thank you for claiming your free Kindle edition of <strong style="color:#1B4332;">Trial & Error To Wealth Creation</strong>.
                      </p>
                      
                      <div style="background:#F5F4F0;padding:24px;border-left:3px solid #B8956B;margin:24px 0;">
                        <h3 style="margin:0 0 16px;font-size:16px;color:#1B4332;font-family:system-ui,sans-serif;text-transform:uppercase;letter-spacing:0.05em;">What to do now</h3>
                        <ol style="margin:0;padding-left:20px;font-size:15px;line-height:1.8;color:#2C2C2C;">
                          <li style="margin-bottom:8px;"><strong>Go to Amazon</strong> and leave your honest review</li>
                          <li style="margin-bottom:8px;"><strong>Copy your review URL</strong> from "Your Account" → "Your Reviews"</li>
                          <li><strong>Return to our site</strong> and paste the URL to claim your book</li>
                        </ol>
                      </div>
                      
                      <a href="https://www.amazon.com/review/create-review?asin=B0GXQTMZCK" 
                         style="display:inline-block;background:#FF9900;color:#1B4332;padding:16px 32px;text-decoration:none;font-weight:bold;font-size:14px;letter-spacing:0.05em;text-transform:uppercase;font-family:system-ui,sans-serif;border-radius:2px;margin:16px 0;">
                        Leave Review on Amazon →
                      </a>
                      
                      <p style="margin:20px 0 0;font-size:15px;line-height:1.7;color:#2C2C2C;">
                        Once we verify your review, you will receive the Kindle file within 24 hours.
                      </p>
                      
                      <p style="margin:0;font-size:14px;line-height:1.6;color:#666;margin-top:40px;">
                        <em>The system works. Let's build.</em><br>
                        — Mark Muriithi
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:24px 40px;background:#1B4332;text-align:center;">
                      <p style="margin:0;font-size:11px;color:#FAF9F6/60;font-family:system-ui,sans-serif;letter-spacing:0.05em;">
                        © ${new Date().getFullYear()} Murivest Realty Group · <a href="https://murivest.co.ke" style="color:#B8956B;text-decoration:none;">murivest.co.ke</a>
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

    return NextResponse.json({
      success: true,
      claimId: claim.id,
      message: 'Check your email for the Amazon review link.'
    });

  } catch (error) {
    console.error('Book claim error:', error);
    return NextResponse.json(
      { error: 'Unable to process your claim. Please try again.' },
      { status: 500 }
    );
  }
}