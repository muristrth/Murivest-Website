// pages/api/send-loi.js  (Next.js Pages Router)
// OR app/api/send-loi/route.js for App Router — see note at bottom

import nodemailer from "nodemailer";

// ── Transporter ────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,       // smtp.gmail.com
  port: Number(process.env.SMTP_PORT), // 465
  secure: process.env.SMTP_SECURE === "true", // true
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ── Email Templates ────────────────────────────────────────────────────
function loiHtml(loiText, propertyName, purchaser) {
  const escaped = loiText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Letter of Intent — ${propertyName || "Property"}</title></head>
<body style="margin:0;padding:0;background:#f8f7f4;font-family:'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f7f4;padding:40px 20px;">
    <tr><td align="center">
      <table width="620" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #e8e2d6;border-radius:8px;overflow:hidden;">
        <!-- Header -->
        <tr>
          <td style="background:#1a1916;padding:24px 32px;">
            <div style="color:#c8a96e;font-family:Georgia,serif;font-size:22px;margin-bottom:4px;">Murivest</div>
            <div style="color:#9a9589;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">Investment Desk · Capital Markets</div>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <h2 style="font-family:Georgia,serif;font-size:20px;font-weight:400;color:#1a1916;margin:0 0 8px;">Letter of Intent Received</h2>
            <p style="font-size:14px;color:#9a9589;margin:0 0 24px;">
              ${purchaser ? `<strong>${purchaser}</strong> has submitted an indicative offer.` : "An indicative offer has been submitted."}
              ${propertyName ? `<br>Property: <strong>${propertyName}</strong>` : ""}
            </p>
            <div style="background:#faf9f7;border:1px solid #e8e2d6;border-radius:8px;padding:24px;font-size:12px;line-height:1.9;color:#1a1916;">
              ${escaped}
            </div>
            <p style="font-size:11px;color:#b0a898;margin:24px 0 0;line-height:1.7;">
              This Letter of Intent is non-binding and indicative only. Prepared in accordance with 
              LSK Conditions of Sale (Kenya). Binding terms are established only upon execution of 
              a formal Sale Agreement.<br>
              Governing law: Republic of Kenya.
            </p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f8f7f4;border-top:1px solid #e8e2d6;padding:20px 32px;text-align:center;">
            <div style="font-size:12px;color:#9a9589;">
              Murivest Investment Desk · capital@murivest.co.ke<br>
              <a href="https://murivest.com" style="color:#c8a96e;text-decoration:none;">murivest.com</a>
            </div>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function confirmHtml(loiText, investorEmail, propertyName) {
  const escaped = loiText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Your LOI has been submitted — Murivest</title></head>
<body style="margin:0;padding:0;background:#f8f7f4;font-family:'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f7f4;padding:40px 20px;">
    <tr><td align="center">
      <table width="620" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #e8e2d6;border-radius:8px;overflow:hidden;">
        <tr>
          <td style="background:#1a1916;padding:24px 32px;">
            <div style="color:#c8a96e;font-family:Georgia,serif;font-size:22px;margin-bottom:4px;">Murivest</div>
            <div style="color:#9a9589;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">Investment Desk · Capital Markets</div>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <h2 style="font-family:Georgia,serif;font-size:20px;font-weight:400;color:#1a1916;margin:0 0 8px;">
              LOI Submitted Successfully
            </h2>
            <p style="font-size:14px;color:#9a9589;margin:0 0 24px;line-height:1.7;">
              Thank you. Your Letter of Intent${propertyName ? ` for <strong>${propertyName}</strong>` : ""} has been received by the Murivest Investment Desk. 
              Our team will review your offer and be in touch within 2 business days.<br><br>
              A copy of your LOI is included below for your records.
            </p>
            <div style="background:#faf9f7;border:1px solid #e8e2d6;border-radius:8px;padding:24px;font-size:12px;line-height:1.9;color:#1a1916;">
              ${escaped}
            </div>
            <div style="margin-top:24px;padding:16px;background:#fefcf7;border:1px solid #e8dfc0;border-radius:8px;">
              <p style="font-size:13px;color:#1a1916;margin:0 0 8px;"><strong>What happens next?</strong></p>
              <ul style="font-size:13px;color:#9a9589;margin:0;padding-left:20px;line-height:1.8;">
                <li>Our Investment Desk reviews your LOI</li>
                <li>We will contact you to discuss the offer and next steps</li>
                <li>Upon agreement, a formal Sale Agreement will be drafted</li>
                <li>Log in to your <a href="https://murivest.com/dashboard" style="color:#c8a96e;">investor dashboard</a> to track deal progress</li>
              </ul>
            </div>
            <p style="font-size:11px;color:#b0a898;margin:24px 0 0;line-height:1.7;">
              Questions? Contact us at <a href="mailto:capital@murivest.co.ke" style="color:#c8a96e;">capital@murivest.co.ke</a><br>
              This LOI is non-binding and indicative only. Governing law: Republic of Kenya.
            </p>
          </td>
        </tr>
        <tr>
          <td style="background:#f8f7f4;border-top:1px solid #e8e2d6;padding:20px 32px;text-align:center;">
            <div style="font-size:12px;color:#9a9589;">
              Murivest Investment Desk · capital@murivest.co.ke<br>
              <a href="https://murivest.com" style="color:#c8a96e;text-decoration:none;">murivest.com</a>
            </div>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── Handler (Pages Router) ─────────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { loiText, investorEmail, propertyName, purchaser } = req.body;

  if (!loiText || !investorEmail) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const subject = `LOI — ${propertyName || "Property Acquisition"} | Murivest Capital`;
  const fromField = `"${process.env.SMTP_FROM_NAME || "Murivest Investment Desk"}" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`;

  try {
    // 1. Send to Investment Desk
    await transporter.sendMail({
      from: fromField,
      to: process.env.INVESTMENT_DESK_EMAIL || "capital@murivest.co.ke",
      subject,
      html: loiHtml(loiText, propertyName, purchaser),
      text: loiText,
      replyTo: investorEmail,
    });

    // 2. Send confirmation + copy to investor
    await transporter.sendMail({
      from: fromField,
      to: investorEmail,
      subject: `[Confirmed] Your LOI has been submitted — ${propertyName || "Murivest Capital"}`,
      html: confirmHtml(loiText, investorEmail, propertyName),
      text: `Your LOI has been submitted to Murivest Investment Desk.\n\n${loiText}`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("SMTP error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}

/* ─── App Router version (app/api/send-loi/route.js) ─────────────────

import { NextResponse } from "next/server";
// ... (same transporter + template code above) ...

export async function POST(request) {
  const body = await request.json();
  // same logic as handler above
  try {
    await transporter.sendMail({ ... });
    await transporter.sendMail({ ... });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

─────────────────────────────────────────────────────────────────────── */