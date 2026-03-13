/**
 * src/app/api/mpesa-confirmation/route.ts — FULL REVISED
 * ─────────────────────────────────────────────────────────────────────────────
 * Handles M-Pesa confirmation message submission for hard copy orders.
 * → Sends investor "payment confirmed" email with shipping address + FlipHTML5
 * → Sends internal urgent dispatch alert with shipping address + M-Pesa message
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function createTransporter() {
  return nodemailer.createTransport({
    host:   process.env.SMTP_HOST!,
    port:   parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });
}

/* ── Investor payment confirmed email ────────────────────────────────────── */
function paymentConfirmedEmail(data: {
  name: string; email: string; company: string;
  shippingAddress: string; mpesaMessage: string; flipUrl: string;
}) {
  const firstName = data.name.split(' ')[0];
  return {
    subject: `Payment Confirmed — Physical Copy Dispatching Within 12–24h · Murivest Realty`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#F2EDE0;font-family:'Georgia',serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F2EDE0;padding:32px 16px;">
  <tr><td align="center">
  <table width="100%" style="max-width:580px;background:#F9F6EF;border-radius:3px;overflow:hidden;box-shadow:0 4px 24px rgba(4,14,28,0.12);border:1px solid rgba(196,158,76,0.2);">

    <!-- Header -->
    <tr><td style="background:linear-gradient(135deg,#071828 0%,#0A2540 55%,#0d3160 100%);padding:32px 36px 28px;border-bottom:3px solid #C49E4C;">
      <p style="margin:0 0 8px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#C49E4C;font-family:Arial,sans-serif;">◆ &nbsp; Payment Confirmed · Hard Copy Order &nbsp; ◆</p>
      <h1 style="margin:0;font-size:22px;font-weight:700;color:#F9F6EF;line-height:1.2;">Nairobi Private Commercial Asset Brief</h1>
    </td></tr>

    <!-- Confirmation banner -->
    <tr><td style="background:linear-gradient(135deg,#8B1A1A,#A52020);padding:18px 36px;border-bottom:2px solid rgba(196,158,76,0.4);">
      <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#fff;line-height:1.5;">
        ✓ &nbsp; Payment Received · Physical Copy Dispatching Within 12–24 Hours
      </p>
    </td></tr>

    <!-- Body -->
    <tr><td style="padding:32px 36px 0;">
      <p style="margin:0 0 16px;font-size:15px;color:#2d2416;line-height:1.7;">Dear ${firstName},</p>
      <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:14px;color:#5a4e3a;line-height:1.75;">
        We have received your M-Pesa payment confirmation for the <em>Nairobi Private Commercial Asset Brief</em> physical edition.
        <strong style="color:#0A2540;">Your copy will be dispatched within 12–24 hours</strong> of payment verification.
      </p>
    </td></tr>

    <!-- Delivery address -->
    <tr><td style="padding:0 36px 20px;">
      <table width="100%" style="background:rgba(10,37,64,0.04);border:1px solid rgba(10,37,64,0.1);border-radius:2px;">
        <tr><td style="padding:10px 14px;font-family:Arial,sans-serif;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:#0A2540;font-weight:700;border-bottom:1px solid rgba(10,37,64,0.08);">📦 &nbsp; Dispatch Address</td></tr>
        <tr><td style="padding:10px 14px;font-family:Arial,sans-serif;font-size:13px;color:#0A2540;font-weight:600;line-height:1.6;">${data.shippingAddress || 'As confirmed on your order form'}</td></tr>
      </table>
    </td></tr>

    <!-- Payment reference -->
    <tr><td style="padding:0 36px 20px;">
      <table width="100%" style="background:rgba(10,37,64,0.04);border:1px solid rgba(10,37,64,0.1);border-radius:2px;">
        <tr><td style="padding:10px 14px;font-family:Arial,sans-serif;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:#0A2540;font-weight:700;border-bottom:1px solid rgba(10,37,64,0.08);">Payment Reference</td></tr>
        <tr><td style="padding:10px 14px;font-family:'Courier New',monospace;font-size:12px;color:#0A2540;line-height:1.6;word-break:break-all;">${data.mpesaMessage}</td></tr>
      </table>
    </td></tr>

    <!-- Digital access CTA -->
    <tr><td style="padding:0 36px 24px;">
      <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:14px;color:#5a4e3a;line-height:1.75;">In the meantime, your <strong>digital edition is available for immediate reading</strong>:</p>
      <table cellpadding="0" cellspacing="0">
        <tr><td style="background:linear-gradient(135deg,#0A2540,#0d3160);border-radius:2px;border-bottom:3px solid #C49E4C;">
          <a href="${data.flipUrl}" target="_blank" style="display:inline-block;padding:14px 28px;color:#F9F6EF;text-decoration:none;font-family:Arial,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;">
            Read Digital Edition Now &nbsp;→
          </a>
        </td></tr>
      </table>
    </td></tr>

    <!-- Delivery timeline -->
    <tr><td style="padding:0 36px 32px;">
      <p style="margin:0 0 10px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:#7a6a52;border-bottom:1px solid rgba(10,37,64,0.1);padding-bottom:8px;">Physical Copy Delivery Timeline</p>
      <ul style="margin:0;padding-left:18px;font-family:Arial,sans-serif;font-size:13px;color:#5a4e3a;line-height:1.9;">
        <li>Our team will verify your payment within 2–4 hours</li>
        <li>You will receive a dispatch confirmation email with tracking details</li>
        <li>Physical copy delivered to your confirmed address within 12–24 hours</li>
        <li>Contact us on WhatsApp or email for any delivery queries</li>
      </ul>
    </td></tr>

    <!-- Signature -->
    <tr><td style="padding:0 36px 32px;border-top:1px solid rgba(10,37,64,0.08);">
      <p style="margin:20px 0 4px;font-size:14px;color:#0A2540;font-weight:700;">Murivest Realty Ltd</p>
      <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#7a6a52;line-height:1.6;">
        Institutional Real Estate Intelligence · Nairobi, Kenya<br>
        <a href="mailto:investments@murivest.co.ke" style="color:#C49E4C;text-decoration:none;">investments@murivest.co.ke</a>
      </p>
    </td></tr>

    <!-- Footer -->
    <tr><td style="background:#EFE9DC;padding:14px 36px;border-top:1px solid rgba(10,37,64,0.1);">
      <p style="margin:0;font-family:Arial,sans-serif;font-size:9.5px;color:#7a6a52;line-height:1.6;">
        This message confirms receipt of payment for the Nairobi Private Commercial Asset Brief physical edition. Not a solicitation or offer to purchase securities. ABSA Paybill 303030 · Account 2048650433.
      </p>
    </td></tr>

  </table>
  </td></tr>
</table>
</body>
</html>`,
  };
}

/* ── Internal payment alert ──────────────────────────────────────────────── */
function internalPaymentAlert(data: {
  name: string; email: string; phone?: string; company: string;
  shippingAddress: string; mpesaMessage: string;
}) {
  const rows = [
    ['Investor Name', data.name],
    ['Email',         data.email],
    ['Phone',         data.phone || 'N/A'],
    ['Company',       data.company],
    ['Delivery Address', data.shippingAddress || '⚠️ Not provided'],
  ];

  return {
    subject: `⚠️ [PAYMENT CONFIRMED] ${data.name} · ${data.company} — Dispatch Physical Copy`,
    html: `
<table style="font-family:Arial,sans-serif;font-size:13px;color:#1a1a1a;max-width:540px;border-collapse:collapse;">
  <tr><td style="background:#8B1A1A;padding:16px 20px;color:#fff;font-size:15px;font-weight:700;border-bottom:3px solid #C49E4C;">
    ⚠️ Payment Confirmed — Dispatch Physical Copy
  </td></tr>
  <tr><td style="padding:20px;">
    <p style="margin:0 0 16px;font-size:14px;line-height:1.6;">A hard copy order has been confirmed with M-Pesa payment. Please arrange dispatch within 12–24 hours.</p>

    ${rows.map(([k, v]) => `
      <div style="display:flex;gap:8px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #eee;">
        <strong style="min-width:140px;color:#0A2540;flex-shrink:0;">${k}:</strong>
        <span style="word-break:break-word;">${v}</span>
      </div>`).join('')}

    <div style="background:#FFF3CD;border:1px solid #FFC107;padding:14px;border-radius:3px;margin:14px 0;">
      <strong>M-Pesa Confirmation Message:</strong><br>
      <span style="font-family:'Courier New',monospace;font-size:12px;word-break:break-all;line-height:1.6;">${data.mpesaMessage}</span>
    </div>

    <div style="background:#d4edda;border:1px solid #28a745;padding:14px;border-radius:3px;margin-bottom:14px;">
      ✅ Digital copy has been sent to the investor automatically.<br><br>
      📦 <strong>ACTION REQUIRED:</strong><br>
      Verify M-Pesa payment and dispatch physical copy within 12–24 hours to:<br><br>
      <strong style="font-size:14px;color:#0A2540;line-height:1.6;">${data.shippingAddress || 'Address not provided — contact investor'}</strong>
    </div>

    <p style="margin:0;font-size:11px;color:#666;">Paybill: 303030 · Account: 2048650433 · ABSA Bank Kenya</p>
  </td></tr>
</table>`,
  };
}

/* ── Route handler ───────────────────────────────────────────────────────── */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, shippingAddress, mpesaMessage, flipUrl } = body;

    if (!name || !email || !mpesaMessage) {
      return NextResponse.json({ success: false, error: 'Missing required fields.' }, { status: 400 });
    }

    const transporter  = createTransporter();
    const resolvedFlip = flipUrl || process.env.FLIPHTML5_URL || '#';

    // 1. Investor payment confirmed email
    const investorTpl = paymentConfirmedEmail({
      name, email, company,
      shippingAddress: shippingAddress || '',
      mpesaMessage,
      flipUrl: resolvedFlip,
    });
    await transporter.sendMail({
      from:    process.env.SMTP_FROM,
      to:      email,
      subject: investorTpl.subject,
      html:    investorTpl.html,
    });

    // 2. Internal urgent dispatch alert
    const alertTpl = internalPaymentAlert({
      name, email, phone, company,
      shippingAddress: shippingAddress || 'Not provided',
      mpesaMessage,
    });
    await transporter.sendMail({
      from:    process.env.SMTP_FROM,
      to:      process.env.ALERT_EMAIL,
      subject: alertTpl.subject,
      html:    alertTpl.html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[NPCAB] mpesa-confirmation error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}