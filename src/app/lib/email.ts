import nodemailer from 'nodemailer';
import { Lead } from '@/app/types/lead';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const FROM = `"${process.env.SMTP_FROM_NAME || 'Murivest Investment Desk'}" <${process.env.SMTP_USER}>`;
const DESK_EMAIL = process.env.INVESTMENT_DESK_EMAIL || process.env.SMTP_USER || 'murivestrealty@gmail.com';
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://murivest.co.ke';
const WA_LINK = `https://wa.me/254729170156`;

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');
  body{margin:0;padding:0;background:#FAF9F6;font-family:'Jost','Source Sans 3',Georgia,sans-serif;color:#1A1A1A;}
  .wrap{max-width:620px;margin:0 auto;background:#fff;}
  .hdr{background:#1B4332;padding:44px 40px;text-align:center;}
  .hdr-eyebrow{color:#B8956B;font-size:11px;letter-spacing:.2em;text-transform:uppercase;margin:0 0 10px;}
  .hdr h1{color:#FAF9F6;font-family:'Cormorant Garamond',Georgia,serif;font-size:28px;font-weight:600;margin:0;letter-spacing:-.02em;line-height:1.3;}
  .body{padding:44px 40px;}
  .greeting{font-family:'Cormorant Garamond',Georgia,serif;font-size:22px;color:#1B4332;margin:0 0 22px;}
  p{font-size:15px;line-height:1.75;color:#3A3A3A;margin:0 0 18px;}
  .box{background:#F8F7F4;border-left:3px solid #B8956B;padding:22px 26px;margin:28px 0;}
  .box p{margin:0;font-size:14px;}
  .steps{list-style:none;padding:0;margin:0;}
  .steps li{display:flex;gap:14px;padding:12px 0;border-bottom:1px solid #EEECE8;font-size:14px;align-items:flex-start;}
  .steps li:last-child{border-bottom:none;}
  .step-num{background:#B8956B;color:#fff;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0;margin-top:1px;}
  .step-txt strong{color:#1B4332;display:block;margin-bottom:2px;}
  .cta{display:inline-block;background:#1B4332;color:#FAF9F6 !important;text-decoration:none;padding:15px 34px;font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;margin:20px 0;}
  .cta:hover{background:#0D3326;}
  .cta-wa{display:inline-block;background:#25D366;color:#fff !important;text-decoration:none;padding:15px 34px;font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;margin:20px 0 20px 12px;}
  .divider{height:1px;background:#EEECE8;margin:28px 0;}
  .contact-row{font-size:14px;line-height:2;color:#4A4A4A;}
  .contact-row a{color:#1B4332;text-decoration:none;}
  .ftr{background:#1A1A1A;color:#9A9A9A;padding:30px 40px;text-align:center;font-size:11px;line-height:1.8;}
  .ftr a{color:#B8956B;text-decoration:none;}
  .disclaimer{margin-top:16px;font-size:10px;color:#6A6A6A;line-height:1.6;}
`;

function baseTemplate(content: string): string {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${CSS}</style></head><body><div class="wrap">${content}<div class="ftr"><p>Murivest Realty Group Ltd. · Westlands, Nairobi</p><p>NBO · London · Dubai · Uganda · South Africa</p><p style="margin-top:14px;"><a href="${APP_URL}/privacy">Privacy Policy</a> · <a href="${APP_URL}/terms">Terms of Engagement</a></p><p class="disclaimer">Murivest Realty Group is an independent real estate advisory firm. We do not offer unlicensed financial products or pool capital from the general public. All engagements are mandate-only and subject to KYC/AML verification.</p></div></div></body></html>`;
}

export type SequenceStep = 'welcome' | 'mandate_brief' | 'follow_up_1' | 'follow_up_2' | 'final_call' | 'newsletter' | 'manual';

interface EmailPayload { subject: string; html: string; text: string; }

function welcomeEmail(lead: Lead): EmailPayload {
  return {
    subject: 'Your Mandate Access Request — Murivest Investment Desk',
    text: `Dear ${lead.first_name} ${lead.last_name},\n\nThank you for your mandate access request. The Investment Desk will respond within 48 hours.\n\nWhatsApp: ${WA_LINK}\nEmail: ${DESK_EMAIL}`,
    html: baseTemplate(`
      <div class="hdr"><p class="hdr-eyebrow">Murivest Realty Group</p><h1>Mandate Access Request Received</h1></div>
      <div class="body">
        <p class="greeting">Dear ${lead.first_name} ${lead.last_name},</p>
        <p>Thank you for your interest in Murivest's mandate-only commercial real estate opportunities. Your inquiry has been logged by the Investment Desk and is under review.</p>
        <div class="box"><p><strong>What happens next:</strong> Our team will review your profile and respond within 48 hours. All mandate access is by invitation only and subject to executed NDA and KYC verification.</p></div>
        <p>Here is how we work with qualified capital partners:</p>
        <ul class="steps">
          <li><span class="step-num">1</span><span class="step-txt"><strong>NDA Execution</strong>Mutual confidentiality agreement sent to you</span></li>
          <li><span class="step-num">2</span><span class="step-txt"><strong>Mandate Brief</strong>Pre-underwritten asset documentation</span></li>
          <li><span class="step-num">3</span><span class="step-txt"><strong>Data Room Access</strong>Full financial and legal due diligence materials</span></li>
          <li><span class="step-num">4</span><span class="step-txt"><strong>Site Visit</strong>Arranged at your convenience</span></li>
          <li><span class="step-num">5</span><span class="step-txt"><strong>LOI to SPA</strong>Standardised, lawyer-aligned documentation</span></li>
        </ul>
        <p style="margin-top:28px;">We do not present deals that are not LOI-ready. Every mandate has completed forensic title audit, tenant covenant review, and exit pathway engineering.</p>
        <div class="divider"></div>
        <p>For immediate assistance, reach the Investment Desk directly:</p>
        <div class="contact-row">
          <a href="${WA_LINK}" class="cta-wa">WhatsApp Investment Desk</a>
          <a href="mailto:${DESK_EMAIL}" class="cta">Email Investment Desk</a>
        </div>
        <p style="font-size:12px;color:#9A9A9A;margin-top:24px;">Reference: ${lead.id}</p>
      </div>
    `),
  };
}

function mandateBriefEmail(lead: Lead): EmailPayload {
  return {
    subject: 'Current Pipeline — Pre-Underwritten Mandates (Q2 2026)',
    text: `Dear ${lead.first_name},\n\nHere is a preview of current pre-underwritten mandates. Full data room access upon NDA execution.\n\nContact: ${DESK_EMAIL}`,
    html: baseTemplate(`
      <div class="hdr"><p class="hdr-eyebrow">Current Pipeline · Q2 2026</p><h1>Pre-Underwritten Mandates</h1></div>
      <div class="body">
        <p class="greeting">Dear ${lead.first_name},</p>
        <p>As promised, here is a preview of our current pre-underwritten mandates. Full data room access is available upon NDA execution.</p>
        <div style="border:1px solid #EEECE8;padding:22px;margin:20px 0;">
          <span style="background:#B8956B;color:#fff;font-size:10px;padding:4px 10px;letter-spacing:.12em;text-transform:uppercase;">Grade A Office</span>
          <h3 style="font-family:'Cormorant Garamond',serif;color:#1B4332;font-size:18px;margin:12px 0 6px;">Basl House — Nairobi CBD</h3>
          <p style="margin:0 0 10px;font-size:13px;color:#6B6B6B;">1,764 sqm · Fully tenanted · Title verified · Ardhisasa-cleared</p>
          <p style="font-size:22px;font-weight:700;color:#1B4332;margin:0 0 8px;">KES 190M <span style="font-size:14px;color:#9A9A9A;font-weight:400;">(~$1.4M)</span></p>
          <p style="font-size:13px;color:#4A4A4A;margin:0;">Net Yield: <strong>8.2%</strong> &nbsp;|&nbsp; WAULT: <strong>5+ years</strong></p>
        </div>
        <div style="border:1px solid #EEECE8;padding:22px;margin:20px 0;">
          <span style="background:#1B4332;color:#B8956B;font-size:10px;padding:4px 10px;letter-spacing:.12em;text-transform:uppercase;">Logistics</span>
          <h3 style="font-family:'Cormorant Garamond',serif;color:#1B4332;font-size:18px;margin:12px 0 6px;">Mlolongo Warehouse — Mombasa Road</h3>
          <p style="margin:0 0 10px;font-size:13px;color:#6B6B6B;">Strategic industrial corridor · High-demand logistics node</p>
          <p style="font-size:22px;font-weight:700;color:#1B4332;margin:0 0 8px;">KES 80M <span style="font-size:14px;color:#9A9A9A;font-weight:400;">(~$600K)</span></p>
          <p style="font-size:13px;color:#4A4A4A;margin:0;">Net Yield: <strong>9.5%</strong> &nbsp;|&nbsp; Entry point for diaspora collectives</p>
        </div>
        <div style="border:1px solid #EEECE8;padding:22px;margin:20px 0;">
          <span style="background:#B8956B;color:#fff;font-size:10px;padding:4px 10px;letter-spacing:.12em;text-transform:uppercase;">Mixed-Use</span>
          <h3 style="font-family:'Cormorant Garamond',serif;color:#1B4332;font-size:18px;margin:12px 0 6px;">Lumen Square — Westlands, Shivachi Road</h3>
          <p style="margin:0 0 10px;font-size:13px;color:#6B6B6B;">Prime commercial office · Institutional tenant base · Exit mapped</p>
          <p style="font-size:22px;font-weight:700;color:#1B4332;margin:0 0 8px;">KES 430M <span style="font-size:14px;color:#9A9A9A;font-weight:400;">(~$3.2M)</span></p>
          <p style="font-size:13px;color:#4A4A4A;margin:0;">Net Yield: <strong>8.4%</strong> &nbsp;|&nbsp; WAULT: <strong>4 years</strong></p>
        </div>
        <div class="divider"></div>
        <p>These mandates are not publicly listed. Availability is subject to mandate execution and qualified investor verification.</p>
        <a href="mailto:${DESK_EMAIL}?subject=Private Briefing Request — Murivest Mandate" class="cta">Schedule Private Briefing</a>
        <a href="${WA_LINK}?text=I%20would%20like%20to%20schedule%20a%20briefing%20on%20the%20mandate%20pipeline" class="cta-wa">WhatsApp Now</a>
      </div>
    `),
  };
}

function followUp1Email(lead: Lead): EmailPayload {
  return {
    subject: 'Quick question — what is driving your timing?',
    text: `Dear ${lead.first_name},\n\nFollowing up on your mandate access request. What is driving your interest in East African real estate — yield, diversification, currency hedging, or legacy planning?\n\nReply to this email or WhatsApp: ${WA_LINK}`,
    html: baseTemplate(`
      <div class="hdr"><p class="hdr-eyebrow">Murivest Investment Desk</p><h1>Following Up On Your Inquiry</h1></div>
      <div class="body">
        <p class="greeting">Dear ${lead.first_name},</p>
        <p>I wanted to follow up on your mandate access request. A quick question to better serve you:</p>
        <div class="box"><p style="font-size:16px;line-height:1.6;"><strong>Are you looking at East African real estate for yield, diversification, currency hedging, or legacy planning?</strong><br><br>This shapes which mandates I send you.</p></div>
        <p>Our current pipeline ranges from $600K to $10M tickets across Grade A office, logistics, and hospitality assets — each pre-underwritten and LOI-ready.</p>
        <p>Simply reply to this email with your priority, and I will personally curate the right mandate for your review.</p>
        <a href="mailto:${DESK_EMAIL}?subject=Re: Mandate inquiry — ${lead.first_name} ${lead.last_name}" class="cta">Reply to Investment Desk</a>
        <a href="${WA_LINK}?text=Hi%2C%20I%27m%20${encodeURIComponent(lead.first_name)}%20and%20I%27m%20interested%20in%20discussing%20mandates" class="cta-wa">WhatsApp Instead</a>
      </div>
    `),
  };
}

function followUp2Email(lead: Lead): EmailPayload {
  return {
    subject: 'One allocation slot remaining — Basl House (Nairobi CBD)',
    text: `${lead.first_name}, the Basl House mandate has one remaining slot. Two investors are reviewing data room materials. Reply to reserve a 48-hour exclusive window.`,
    html: baseTemplate(`
      <div class="hdr" style="background:#0D3326;"><p class="hdr-eyebrow">Mandate Alert</p><h1>One Slot Remaining — Basl House</h1></div>
      <div class="body">
        <p class="greeting">${lead.first_name},</p>
        <p>The Basl House mandate (KES 190M, 8.2% net yield, Nairobi CBD) has one remaining allocation slot. Two qualified investors are currently reviewing data room materials.</p>
        <div class="box" style="background:#1B4332;border-color:#B8956B;"><p style="color:#FAF9F6;font-size:15px;"><strong style="color:#B8956B;">If you are actively allocating capital</strong>, I can reserve a 48-hour exclusive review window for your due diligence team.</p></div>
        <p>This is not manufactured urgency. Mandate slots are genuinely limited to preserve deal integrity and maintain investor exclusivity.</p>
        <a href="mailto:${DESK_EMAIL}?subject=Exclusive Review Window — Basl House" class="cta">Reserve Exclusive Window</a>
        <a href="${WA_LINK}?text=Hi%2C%20I%27d%20like%20to%20reserve%20the%20Basl%20House%20exclusive%20review%20window" class="cta-wa">WhatsApp to Confirm</a>
      </div>
    `),
  };
}

function finalCallEmail(lead: Lead): EmailPayload {
  return {
    subject: 'No pressure — shall I pause your mandate alerts?',
    text: `Dear ${lead.first_name}, no pressure. Reply "not now" to pause or "active" to stay in our pipeline. We will check in again in 90 days either way.`,
    html: baseTemplate(`
      <div class="hdr"><p class="hdr-eyebrow">Murivest Investment Desk</p><h1>Checking In</h1></div>
      <div class="body">
        <p class="greeting">Dear ${lead.first_name},</p>
        <p>I have not heard back regarding the mandate pipeline I shared. No pressure — timing is personal in capital allocation.</p>
        <p>Two options:</p>
        <ul class="steps">
          <li><span class="step-num" style="background:#6B6B6B;">A</span><span class="step-txt"><strong>Reply "not now"</strong>I will pause your mandate alerts and check back in 90 days with new inventory.</span></li>
          <li><span class="step-num">B</span><span class="step-txt"><strong>Reply "active"</strong>I will prioritise your access to the next pre-underwritten mandate before it reaches the wider list.</span></li>
        </ul>
        <p style="margin-top:24px;">Either way, I respect your decision and your inbox.</p>
        <a href="mailto:${DESK_EMAIL}?subject=Re: Mandate alerts — ${lead.first_name}" class="cta">Reply to Investment Desk</a>
      </div>
    `),
  };
}

function newsletterEmail(lead: Lead): EmailPayload {
  return {
    subject: 'Q2 2026 Market Intelligence — Nairobi Commercial Real Estate',
    text: `Dear ${lead.first_name},\n\nOur Q2 2026 Nairobi commercial real estate intelligence pack is now available. Key metrics: prime office vacancy 4.1%, logistics yield 9.5%, $340M YTD institutional inflows.\n\nContact: ${DESK_EMAIL}`,
    html: baseTemplate(`
      <div class="hdr"><p class="hdr-eyebrow">Market Intelligence · Q2 2026</p><h1>Nairobi Commercial Real Estate</h1></div>
      <div class="body">
        <p class="greeting">Dear ${lead.first_name},</p>
        <p>Our Q2 2026 commercial real estate intelligence report is now available. Key highlights from the Nairobi market:</p>
        <ul class="steps">
          <li><span class="step-num">▲</span><span class="step-txt"><strong>Prime office vacancy: 4.1%</strong>Tightest availability in 3 years</span></li>
          <li><span class="step-num">▲</span><span class="step-txt"><strong>Logistics yield: 9.5%</strong>Yield compression of -40bps QoQ signals rising demand</span></li>
          <li><span class="step-num">→</span><span class="step-txt"><strong>New supply pipeline: 2.3M sqm</strong>Coming to market 2026–2028</span></li>
          <li><span class="step-num">▲</span><span class="step-txt"><strong>Institutional inflows: $340M YTD</strong>Cross-border capital accelerating</span></li>
        </ul>
        <div class="box"><p>We currently have 3 pre-underwritten mandates available for qualified investors. Pipeline remains open for review by prior registrants.</p></div>
        <a href="${APP_URL}/mandate-access?ref=newsletter" class="cta">View Current Mandates</a>
        <a href="${WA_LINK}" class="cta-wa">WhatsApp Investment Desk</a>
      </div>
    `),
  };
}

function internalAlertEmail(lead: Lead): EmailPayload {
  const scoreColor = lead.lead_score >= 75 ? '#C0392B' : lead.lead_score >= 55 ? '#E67E22' : '#B8956B';
  return {
    subject: `🚨 New Lead [Score: ${lead.lead_score}] — ${lead.first_name} ${lead.last_name} (${lead.investor_type})`,
    text: `New lead: ${lead.first_name} ${lead.last_name}\nEmail: ${lead.email}\nPhone: ${lead.phone}\nCapital: ${lead.deployable_capital}\nTimeline: ${lead.investment_timeline}\nType: ${lead.investor_type}\nLocation: ${lead.city}, ${lead.country}\nScore: ${lead.lead_score}/100\nSource: ${lead.referral_source}`,
    html: baseTemplate(`
      <div class="hdr" style="background:#0D3326;"><p class="hdr-eyebrow">New Lead Alert</p><h1>${lead.first_name} ${lead.last_name}</h1></div>
      <div class="body">
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;">
          <div style="background:${scoreColor};color:#fff;padding:12px 20px;font-size:28px;font-weight:700;">${lead.lead_score}</div>
          <div><p style="margin:0;font-size:13px;color:#6B6B6B;">LEAD SCORE</p><p style="margin:4px 0 0;font-size:16px;font-weight:600;color:#1B4332;">${lead.investor_type} · ${lead.deployable_capital}</p></div>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${[
            ['Name', `${lead.first_name} ${lead.last_name}`],
            ['Email', lead.email],
            ['Phone', lead.phone],
            ['Location', `${lead.city}, ${lead.country}`],
            ['Company', lead.company_name],
            ['Title', lead.job_title],
            ['Capital', lead.deployable_capital],
            ['Timeline', lead.investment_timeline],
            ['Source', lead.referral_source],
          ].map(([k, v]) => `<tr><td style="padding:10px 0;border-bottom:1px solid #EEECE8;color:#6B6B6B;width:35%;">${k}</td><td style="padding:10px 0;border-bottom:1px solid #EEECE8;font-weight:600;color:#1A1A1A;">${v}</td></tr>`).join('')}
        </table>
        ${lead.message ? `<div class="box" style="margin-top:20px;"><p><strong>Message:</strong> ${lead.message}</p></div>` : ''}
        <div style="margin-top:24px;"><a href="${APP_URL}/admin2/leads/${lead.id}" class="cta">View in Dashboard</a></div>
      </div>
    `),
  };
}

export async function sendSequenceEmail(
  to: string,
  step: SequenceStep,
  lead: Lead,
  customSubject?: string,
  customBody?: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    let payload: EmailPayload;
    if (step === 'manual' && customSubject && customBody) {
      payload = {
        subject: customSubject,
        html: baseTemplate(`<div class="hdr"><p class="hdr-eyebrow">Murivest Investment Desk</p><h1>Message from Investment Desk</h1></div><div class="body"><p class="greeting">Dear ${lead.first_name},</p>${customBody.split('\n').map(p => `<p>${p}</p>`).join('')}<div class="divider"></div><p style="font-size:13px;color:#9A9A9A;">Murivest Investment Desk · <a href="mailto:${DESK_EMAIL}">${DESK_EMAIL}</a></p></div>`),
        text: customBody,
      };
    } else {
      const templates: Record<SequenceStep, (l: Lead) => EmailPayload> = {
        welcome: welcomeEmail,
        mandate_brief: mandateBriefEmail,
        follow_up_1: followUp1Email,
        follow_up_2: followUp2Email,
        final_call: finalCallEmail,
        newsletter: newsletterEmail,
        manual: () => ({ subject: '', html: '', text: '' }),
      };
      payload = templates[step](lead);
    }

    await transporter.sendMail({ from: FROM, to, subject: payload.subject, html: payload.html, text: payload.text });
    return { success: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    console.error(`[email] Failed to send ${step} to ${to}:`, msg);
    return { success: false, error: msg };
  }
}

export async function sendInternalAlert(lead: Lead): Promise<void> {
  try {
    const payload = internalAlertEmail(lead);
    await transporter.sendMail({ from: FROM, to: DESK_EMAIL, subject: payload.subject, html: payload.html, text: payload.text });
  } catch (err) {
    console.error('[email] Failed to send internal alert:', err);
  }
}

export async function sendEmail({
  to,
  subject,
  html,
  text,
  replyTo,
}: {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    await transporter.sendMail({
      from: FROM,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ""),
      replyTo,
    });

    return { success: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown email error";
    console.error(`[email] Failed to send email to ${to}:`, msg);

    return {
      success: false,
      error: msg,
    };
  }
}

export async function verifySmtpConnection(): Promise<boolean> {
  try { await transporter.verify(); return true; } catch { return false; }
}