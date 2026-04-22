/**
 * emails/sequence.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * EMAIL SEQUENCE — VALUE-FIRST FUNNEL
 * Trial & Error To Wealth Creation by Mark Muriithi / Murivest Realty Group
 *
 * Model: Book delivered instantly → review is a privilege, not a condition
 *
 * Copywriting frameworks:
 *   Jason Capital    Status / identity framing, future pacing
 *   David Ogilvy     Specificity, curiosity headlines, benefit leads
 *   Grant Cardone    Integrity = execution capacity
 *   Andres Contreras Assumptive close, short sentences, urgency without pressure
 *   HBR Tone         Professional, data-driven, peer-to-peer
 *
 * EMAIL 1 (Immediate)  Delivery + reading protocol — Chapter 23 first
 * EMAIL 2 (Day 5)      Review cheat sheet — 3 questions, 90-second protocol
 * EMAIL 3 (Day 14)     Final loop — opportunity cost, Insider consequence
 *
 * PALETTE (murivest.co.ke brand):
 *   Forest Green  #1B4332   primary
 *   Gold Brown    #C9973A   accent / CTA
 *   Ivory bg      #F8F6F1
 *   Body text     #2C2C2C
 *   Muted text    #6B6B6B
 *   Border        #E8E6E1
 * ─────────────────────────────────────────────────────────────────────────────
 */

const BOOK_URL = process.env.BOOK_DOWNLOAD_URL ?? "";
const AMAZON_REVIEW_URL =
  "https://www.amazon.com/review/create-review?asin=B0GXQTMZCK";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://murivest.co.ke";

// ─── Design Tokens ────────────────────────────────────────────────────────────

const font = {
  serif: `Georgia, 'Playfair Display', 'Times New Roman', serif`,
  sans: `'DM Sans', system-ui, -apple-system, sans-serif`,
};

const color = {
  bg: "#F8F6F1",
  forest: "#1B4332",
  forestDark: "#0d2318",
  gold: "#C9973A",
  white: "#FFFFFF",
  body: "#2C2C2C",
  muted: "#6B6B6B",
  border: "#E8E6E1",
};

// ─── Email Shell ──────────────────────────────────────────────────────────────

const shell = (innerHtml: string): string => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Murivest | Trial &amp; Error To Wealth Creation</title>
  <!--[if mso]><noscript><xml><o:OfficeDocumentSettings>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings></xml></noscript><![endif]-->
</head>
<body style="margin:0;padding:0;background:${color.bg};-webkit-text-size-adjust:100%;font-family:${font.sans};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
    style="background:${color.bg};">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <!-- CARD -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0"
          style="max-width:600px;width:100%;background:${color.white};border:1px solid ${color.border};">

          <!-- GOLD TOP BAR -->
          <tr>
            <td style="height:4px;background:${color.gold};font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- HEADER -->
          <tr>
            <td style="padding:28px 40px 20px;border-bottom:1px solid ${color.border};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0;font-family:${font.serif};font-size:22px;
                      color:${color.forest};letter-spacing:0.02em;">
                      Muriithi<span style="color:${color.gold};">.</span>
                    </p>
                  </td>
                  <td align="right">
                    <p style="margin:0;font-family:${font.sans};font-size:10px;
                      letter-spacing:0.2em;text-transform:uppercase;
                      color:${color.gold};font-weight:700;">
                      Murivest Realty Group
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- BODY -->
          ${innerHtml}

          <!-- FOOTER -->
          <tr>
            <td style="padding:24px 40px;background:${color.forestDark};">
              <p style="margin:0;font-family:${font.sans};font-size:11px;
                color:rgba(248,246,241,0.4);letter-spacing:0.05em;">
                &copy; ${new Date().getFullYear()} Murivest Realty Group &middot;
                <a href="${SITE_URL}" style="color:${color.gold};text-decoration:none;">
                  murivest.co.ke
                </a>
              </p>
              <p style="margin:6px 0 0;font-family:${font.sans};font-size:10px;
                color:rgba(248,246,241,0.25);letter-spacing:0.04em;">
                You received this because you claimed the free book. &middot;
                <a href="#" style="color:rgba(248,246,241,0.3);text-decoration:underline;">
                  Unsubscribe
                </a>
              </p>
            </td>
          </tr>

        </table>
        <!-- /CARD -->

      </td>
    </tr>
  </table>
</body>
</html>
`;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const ctaBtn = (href: string, label: string): string => `
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="background:${color.gold};">
      <a href="${href}"
        style="display:inline-block;padding:16px 36px;font-family:${font.sans};
        font-size:12px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;
        color:${color.forest};text-decoration:none;">
        ${label} &rarr;
      </a>
    </td>
  </tr>
</table>`;

const ghostBtn = (href: string, label: string): string => `
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="border:1px solid rgba(27,67,50,0.2);">
      <a href="${href}"
        style="display:inline-block;padding:13px 28px;font-family:${font.sans};
        font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;
        color:rgba(27,67,50,0.6);text-decoration:none;">
        ${label}
      </a>
    </td>
  </tr>
</table>`;

const divider = (): string => `
<tr>
  <td style="padding:0 40px;">
    <div style="height:1px;background:${color.border};"></div>
  </td>
</tr>`;

const signOff = (closing: string, ps?: string): string => `
<tr>
  <td style="padding:32px 40px 40px;">
    <p style="margin:0 0 4px;font-family:${font.serif};font-size:15px;
      color:${color.muted};font-style:italic;">${closing}</p>
    <p style="margin:0;font-family:${font.sans};font-size:14px;
      color:${color.forest};font-weight:600;">— Mark Muriithi</p>
    <p style="margin:0;font-family:${font.sans};font-size:11px;
      color:${color.muted};letter-spacing:0.05em;">
      Founder &amp; CEO, Murivest Realty Group
    </p>
    ${
      ps
        ? `<p style="margin:16px 0 0;font-family:${font.sans};font-size:11px;
        color:${color.muted};font-style:italic;line-height:1.6;">${ps}</p>`
        : ""
    }
  </td>
</tr>`;

// ─────────────────────────────────────────────────────────────────────────────
// EMAIL 1 — Instant delivery
// Sent: immediately on form submit
// Goal: Get them to open Chapter 23 within the first 30 minutes
// ─────────────────────────────────────────────────────────────────────────────

export function getEmail1Delivery(name: string): string {
  const body = `
    <!-- SALUTATION -->
    <tr>
      <td style="padding:40px 40px 0;">
        <p style="margin:0 0 8px;font-family:${font.sans};font-size:11px;
          letter-spacing:0.25em;text-transform:uppercase;
          color:${color.gold};font-weight:700;">
          Book Delivered
        </p>
        <h1 style="margin:0 0 20px;font-family:${font.serif};font-size:30px;
          color:${color.forest};line-height:1.15;font-weight:400;">
          Here is your copy, ${name}.<br>
          <em>Don&rsquo;t wait for the email&nbsp;&mdash; download now.</em>
        </h1>
      </td>
    </tr>

    <!-- DOWNLOAD CTA — above the fold, immediate -->
    <tr>
      <td style="padding:0 40px 12px;">
        ${ctaBtn(BOOK_URL, "Download Your Copy Now")}
        <p style="margin:10px 0 0;font-family:${font.sans};font-size:11px;
          color:${color.muted};">
          Link is active. Open in browser or download to any device.
        </p>
      </td>
    </tr>

    ${divider()}

    <!-- READING PROTOCOL -->
    <tr>
      <td style="padding:32px 40px 0;">
        <p style="margin:0 0 6px;font-family:${font.sans};font-size:11px;
          letter-spacing:0.2em;text-transform:uppercase;
          color:${color.forest};font-weight:700;opacity:0.5;">
          Before you open it
        </p>
        <h2 style="margin:0 0 16px;font-family:${font.serif};font-size:22px;
          color:${color.forest};font-weight:400;line-height:1.3;">
          Do not read from page one.
        </h2>
        <p style="margin:0 0 16px;font-family:${font.sans};font-size:15px;
          line-height:1.8;color:${color.body};">
          Most books reward sequential reading. This one rewards strategic reading.
        </p>
        <p style="margin:0 0 20px;font-family:${font.sans};font-size:15px;
          line-height:1.8;color:${color.body};">
          Start with <strong style="color:${color.forest};">
          Chapter 23: The Westlands Deal.</strong>
        </p>
      </td>
    </tr>

    <!-- WESTLANDS CALLOUT -->
    <tr>
      <td style="padding:0 40px 32px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="background:${color.bg};border-left:4px solid ${color.gold};
              padding:20px 24px;">
              <p style="margin:0 0 10px;font-family:${font.sans};font-size:11px;
                letter-spacing:0.2em;text-transform:uppercase;
                color:${color.gold};font-weight:700;">
                Chapter 23 includes:
              </p>
              <p style="margin:0;font-family:${font.sans};font-size:13px;
                line-height:2;color:${color.body};">
                A real acquisition &middot; Term sheet &middot; IRR model
                &middot; Three financial scenarios<br>
                Year 1 cash flow reality &middot; Complete commercial property teardown
              </p>
            </td>
          </tr>
        </table>
        <p style="margin:16px 0 0;font-family:${font.sans};font-size:14px;
          line-height:1.8;color:${color.muted};">
          Read that chapter first. If the framework doesn&rsquo;t shift how you evaluate
          assets within 20 pages, reply to this email. I&rsquo;ll want to understand why.
        </p>
        <p style="margin:12px 0 0;font-family:${font.sans};font-size:14px;
          line-height:1.8;color:${color.body};">
          Then go back to Chapter 1 &mdash; or jump to Chapter 26 for the
          <strong>KES 500 Million Portfolio Roadmap</strong> (Years 1&ndash;3, 3&ndash;7, 7&ndash;12).
        </p>
      </td>
    </tr>

    ${divider()}

    <!-- WHAT ARRIVES NEXT -->
    <tr>
      <td style="padding:32px 40px 0;">
        <p style="margin:0 0 16px;font-family:${font.sans};font-size:11px;
          letter-spacing:0.2em;text-transform:uppercase;
          color:${color.forest};font-weight:700;opacity:0.5;">
          What Arrives Next
        </p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid ${color.border};">
              <p style="margin:0;font-family:${font.sans};font-size:13px;color:${color.body};">
                <span style="color:${color.gold};font-weight:700;">Day 5:</span>
                Your 90-second Review Cheat Sheet &mdash; three questions that make
                writing your Amazon review effortless.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 0;">
              <p style="margin:0;font-family:${font.sans};font-size:13px;color:${color.body};">
                <span style="color:${color.forest};font-weight:600;">Week 3:</span>
                One invitation to view a live Murivest commercial property analysis &mdash;
                active deal, real numbers, no obligation.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    ${signOff(
      "The system works. Let&rsquo;s build.",
      "P.S. &mdash; If the download link encounters any issues, reply directly to this email. I monitor this inbox personally."
    )}
  `;

  return shell(body);
}

// ─────────────────────────────────────────────────────────────────────────────
// EMAIL 2 — Day 5 · Identity Trigger
// Sent: 5 days after claim
// Goal: Convert non-reviewers through maximum simplicity
// ─────────────────────────────────────────────────────────────────────────────

export function getEmail2IdentityTrigger(name: string): string {
  const body = `
    <!-- SALUTATION -->
    <tr>
      <td style="padding:40px 40px 24px;">
        <p style="margin:0 0 8px;font-family:${font.sans};font-size:11px;
          letter-spacing:0.25em;text-transform:uppercase;
          color:${color.gold};font-weight:700;">
          Day 5 &middot; The Review Protocol
        </p>
        <h1 style="margin:0 0 20px;font-family:${font.serif};font-size:28px;
          color:${color.forest};line-height:1.2;font-weight:400;">
          90 seconds.<br>
          <em>That&rsquo;s all this requires.</em>
        </h1>
        <p style="margin:0;font-family:${font.sans};font-size:15px;
          line-height:1.8;color:${color.body};">
          ${name}, you&rsquo;re either deep into the Westlands Deal chapter &mdash;
          or you&rsquo;ve already applied the IRR logic to one of your own assets.
          Either way: thank you.
        </p>
      </td>
    </tr>

    <!-- IDENTITY RE-TRIGGER -->
    <tr>
      <td style="padding:0 40px 32px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="background:${color.forest};padding:24px 28px;">
              <p style="margin:0 0 10px;font-family:${font.serif};font-size:17px;
                color:#F8F6F1;font-style:italic;line-height:1.6;">
                &ldquo;The difference between a consumer and an operator isn&rsquo;t
                what they read. It&rsquo;s what they do with it.&rdquo;
              </p>
              <p style="margin:0;font-family:${font.sans};font-size:10px;
                letter-spacing:0.2em;text-transform:uppercase;color:${color.gold};">
                &mdash; Trial &amp; Error To Wealth Creation, Chapter 21
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- CHEAT SHEET HEADER -->
    <tr>
      <td style="padding:0 40px 8px;">
        <p style="margin:0 0 6px;font-family:${font.sans};font-size:11px;
          letter-spacing:0.2em;text-transform:uppercase;
          color:${color.forest};font-weight:700;opacity:0.5;">
          Your Pledge Fulfillment Protocol (3 Steps)
        </p>
      </td>
    </tr>

    <!-- STEP 1 -->
    <tr>
      <td style="padding:0 40px 12px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="background:${color.bg};border:1px solid ${color.border};
              padding:20px 24px;">
              <p style="margin:0 0 8px;font-family:${font.sans};font-size:11px;
                letter-spacing:0.2em;text-transform:uppercase;
                color:${color.gold};font-weight:700;">Step 1</p>
              <p style="margin:0 0 12px;font-family:${font.sans};font-size:14px;
                color:${color.body};line-height:1.7;">
                Click directly to the Amazon review page &mdash; no searching required:
              </p>
              ${ctaBtn(AMAZON_REVIEW_URL, "Leave Your Amazon Review")}
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- STEP 2 — Three questions -->
    <tr>
      <td style="padding:0 40px 12px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="background:${color.bg};border:1px solid ${color.border};
              padding:20px 24px;">
              <p style="margin:0 0 12px;font-family:${font.sans};font-size:11px;
                letter-spacing:0.2em;text-transform:uppercase;
                color:${color.gold};font-weight:700;">
                Step 2 &mdash; Answer ONE of these in the review box
              </p>

              <!-- Q1 -->
              <table role="presentation" width="100%" cellpadding="0"
                cellspacing="0" border="0" style="margin-bottom:12px;">
                <tr>
                  <td valign="top" width="24" style="padding-top:2px;">
                    <div style="width:20px;height:20px;background:${color.gold};
                      text-align:center;line-height:20px;">
                      <span style="font-family:${font.sans};font-size:10px;
                        font-weight:700;color:${color.forest};">1</span>
                    </div>
                  </td>
                  <td style="padding-left:12px;">
                    <p style="margin:0;font-family:${font.sans};font-size:13px;
                      color:${color.body};line-height:1.7;">
                      <strong>What is one framework you will actually implement?</strong><br>
                      <span style="color:${color.muted};font-size:12px;">
                        Example: The 8-Step Acquisition Guide. The 10-Year Rule.
                        The Trust &rarr; HoldCo &rarr; OpCo structure.
                        Chapter 23&rsquo;s IRR model.
                      </span>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Q2 -->
              <table role="presentation" width="100%" cellpadding="0"
                cellspacing="0" border="0" style="margin-bottom:12px;">
                <tr>
                  <td valign="top" width="24" style="padding-top:2px;">
                    <div style="width:20px;height:20px;background:${color.forest};
                      text-align:center;line-height:20px;">
                      <span style="font-family:${font.sans};font-size:10px;
                        font-weight:700;color:#F8F6F1;">2</span>
                    </div>
                  </td>
                  <td style="padding-left:12px;">
                    <p style="margin:0;font-family:${font.sans};font-size:13px;
                      color:${color.body};line-height:1.7;">
                      <strong>What number or data point surprised you most?</strong><br>
                      <span style="color:${color.muted};font-size:12px;">
                        Example: Nairobi commercial cap rates.
                        The Year 1 Westlands cash flow figure.
                        The 10-year compounding model in Chapter 13.
                      </span>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Q3 -->
              <table role="presentation" width="100%" cellpadding="0"
                cellspacing="0" border="0">
                <tr>
                  <td valign="top" width="24" style="padding-top:2px;">
                    <div style="width:20px;height:20px;background:${color.border};
                      text-align:center;line-height:20px;">
                      <span style="font-family:${font.sans};font-size:10px;
                        font-weight:700;color:${color.forest};">3</span>
                    </div>
                  </td>
                  <td style="padding-left:12px;">
                    <p style="margin:0;font-family:${font.sans};font-size:13px;
                      color:${color.body};line-height:1.7;">
                      <strong>Who should read this next?</strong><br>
                      <span style="color:${color.muted};font-size:12px;">
                        Example: Any founder sitting on idle capital. Any professional
                        buying residential units as an &ldquo;investment&rdquo;
                        without running IRR.
                      </span>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- STEP 3 -->
    <tr>
      <td style="padding:0 40px 32px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="background:${color.bg};border:1px solid ${color.border};
              padding:16px 24px;">
              <p style="margin:0 0 6px;font-family:${font.sans};font-size:11px;
                letter-spacing:0.2em;text-transform:uppercase;
                color:${color.gold};font-weight:700;">Step 3</p>
              <p style="margin:0;font-family:${font.sans};font-size:13px;
                color:${color.body};line-height:1.6;">
                Give it the star rating the content deserves. Not what you think I want.
                An honest 3-star review from a serious investor carries more weight than
                a performative 5-star from someone who skimmed.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    ${divider()}

    <!-- WHY THIS MATTERS -->
    <tr>
      <td style="padding:32px 40px 0;">
        <p style="margin:0 0 6px;font-family:${font.sans};font-size:11px;
          letter-spacing:0.2em;text-transform:uppercase;
          color:${color.forest};font-weight:700;opacity:0.5;">
          Why This Matters &mdash; To Both of Us
        </p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td width="50%" valign="top" style="padding-right:20px;">
              <p style="margin:0 0 6px;font-family:${font.sans};font-size:12px;
                font-weight:700;color:${color.forest};">For you:</p>
              <p style="margin:0;font-family:${font.sans};font-size:13px;
                line-height:1.7;color:${color.body};">
                Your honest review keeps you on the Murivest Insider List.
                The next deal analysis &mdash; a live commercial property underwriting
                &mdash; goes out in approximately two weeks.
              </p>
            </td>
            <td width="50%" valign="top"
              style="padding-left:20px;border-left:1px solid ${color.border};">
              <p style="margin:0 0 6px;font-family:${font.sans};font-size:12px;
                font-weight:700;color:${color.forest};">For me:</p>
              <p style="margin:0;font-family:${font.sans};font-size:13px;
                line-height:1.7;color:${color.body};">
                Your honest assessment helps other Kenyan founders and investors
                find this framework. That is the only marketing this book will ever have.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    ${signOff(
      "Read well. Build bigger.",
      `P.S. &mdash; If you&rsquo;re stuck and genuinely don&rsquo;t know what to write,
      reply with one word: <strong style="color:${color.forest};">STUCK</strong>.
      I&rsquo;ll send you a pre-written template you can edit in 60 seconds.
      I do not want you to fail this over writer&rsquo;s block.`
    )}
  `;

  return shell(body);
}

// ─────────────────────────────────────────────────────────────────────────────
// EMAIL 3 — Day 14 · Final Loop
// Sent: 14 days after claim
// Goal: Final recovery — opportunity cost framing, clean exit if needed
// ─────────────────────────────────────────────────────────────────────────────

export function getEmail3ReviewGateway(name: string): string {
  const body = `
    <!-- SALUTATION -->
    <tr>
      <td style="padding:40px 40px 24px;">
        <p style="margin:0 0 8px;font-family:${font.sans};font-size:11px;
          letter-spacing:0.25em;text-transform:uppercase;
          color:${color.gold};font-weight:700;">
          Day 14 &middot; Final Loop
        </p>
        <h1 style="margin:0 0 20px;font-family:${font.serif};font-size:28px;
          color:${color.forest};line-height:1.2;font-weight:400;">
          ${name}, this is the last email<br>
          <em>about your reading commitment.</em>
        </h1>
        <p style="margin:0;font-family:${font.sans};font-size:15px;
          line-height:1.8;color:${color.body};">
          I&rsquo;m not following up because of obligation. I&rsquo;m following up because
          the operators who engage with this material are the ones who build the most
          interesting portfolios &mdash; and I&rsquo;d like to know who you are.
        </p>
      </td>
    </tr>

    <!-- ACCOUNT STATUS -->
    <tr>
      <td style="padding:0 40px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="background:${color.bg};border:1px solid ${color.border};
              padding:20px 24px;">
              <p style="margin:0 0 12px;font-family:${font.sans};font-size:11px;
                letter-spacing:0.2em;text-transform:uppercase;
                color:${color.forest};font-weight:700;opacity:0.5;">
                Your Status
              </p>
              <table role="presentation" width="100%" cellpadding="0"
                cellspacing="0" border="0">
                ${[
                  { label: "Book delivered", done: true },
                  { label: "Review Cheat Sheet sent (Day 5)", done: true },
                  { label: "Amazon review posted", done: false },
                ]
                  .map(
                    (item) => `
                  <tr>
                    <td style="padding:6px 0;border-bottom:1px solid ${color.border};">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td width="20" valign="middle">
                            <span style="font-family:${font.sans};font-size:13px;
                              color:${item.done ? color.gold : "rgba(27,67,50,0.2)"};">
                              ${item.done ? "✓" : "○"}
                            </span>
                          </td>
                          <td style="padding-left:10px;">
                            <span style="font-family:${font.sans};font-size:13px;
                              color:${item.done ? color.body : "rgba(27,67,50,0.4)"};">
                              ${item.label}
                            </span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>`
                  )
                  .join("")}
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- THREE SCENARIOS — Contreras framing -->
    <tr>
      <td style="padding:0 40px 24px;">
        <p style="margin:0 0 12px;font-family:${font.sans};font-size:14px;
          font-weight:600;color:${color.forest};">
          Three possible scenarios:
        </p>

        <!-- Scenario 1 -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
          border="0" style="margin-bottom:10px;">
          <tr>
            <td style="border-left:3px solid ${color.gold};padding:12px 16px;
              background:${color.bg};">
              <p style="margin:0 0 4px;font-family:${font.sans};font-size:12px;
                font-weight:700;color:${color.forest};">
                You haven&rsquo;t finished the book yet.
              </p>
              <p style="margin:0;font-family:${font.sans};font-size:13px;
                color:${color.muted};line-height:1.6;">
                That&rsquo;s fine. The review window is 14 days from
                <em>completion</em>, not from download.
                Save this email and come back when you&rsquo;re done.
                Good reading takes time.
              </p>
            </td>
          </tr>
        </table>

        <!-- Scenario 2 -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
          border="0" style="margin-bottom:10px;">
          <tr>
            <td style="border-left:3px solid ${color.forest};padding:12px 16px;
              background:${color.bg};">
              <p style="margin:0 0 4px;font-family:${font.sans};font-size:12px;
                font-weight:700;color:${color.forest};">
                You finished and forgot to review.
              </p>
              <p style="margin:0 0 12px;font-family:${font.sans};font-size:13px;
                color:${color.muted};line-height:1.6;">
                This happens. It&rsquo;s a two-minute fix.
              </p>
              ${ctaBtn(AMAZON_REVIEW_URL, "Post Your Review Now — 90 Seconds")}
            </td>
          </tr>
        </table>

        <!-- Scenario 3 -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="border-left:3px solid ${color.border};padding:12px 16px;
              background:${color.bg};">
              <p style="margin:0 0 4px;font-family:${font.sans};font-size:12px;
                font-weight:700;color:${color.forest};">
                The book didn&rsquo;t deliver the value you expected.
              </p>
              <p style="margin:0;font-family:${font.sans};font-size:13px;
                color:${color.muted};line-height:1.6;">
                That&rsquo;s honest feedback I&rsquo;d rather have than silence.
                Reply to this email and tell me why. I read every response.
                An honest critical assessment helps me more than a hollow review.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- INTEGRITY FRAME -->
    <tr>
      <td style="padding:0 40px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="background:${color.forest};padding:24px 28px;">
              <p style="margin:0 0 10px;font-family:${font.serif};font-size:16px;
                color:#F8F6F1;font-style:italic;line-height:1.6;">
                &ldquo;The size of your integrity on small commitments is an exact
                predictor of your execution on large ones. Commercial real estate
                deals require both.&rdquo;
              </p>
              <p style="margin:0;font-family:${font.sans};font-size:10px;
                letter-spacing:0.2em;text-transform:uppercase;color:${color.gold};">
                &mdash; Grant Cardone Principle: Integrity at Scale
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- CONSEQUENCE — opportunity cost framing -->
    <tr>
      <td style="padding:0 40px 24px;">
        <p style="margin:0 0 12px;font-family:${font.sans};font-size:14px;
          color:${color.body};line-height:1.7;">
          If I don&rsquo;t receive your review &mdash; or a direct reply &mdash;
          after this email, your Insider List access will be closed.
        </p>
        <p style="margin:0 0 12px;font-family:${font.sans};font-size:14px;
          color:${color.body};line-height:1.7;">
          This is not a punishment. The Insider List exists for one reason:
          to give serious operators a competitive information advantage.
          That advantage is diminished if it reaches people who don&rsquo;t
          execute on small commitments.
        </p>
        <p style="margin:0;font-family:${font.sans};font-size:14px;
          color:${color.body};line-height:1.7;">
          The next deal alert &mdash; a live commercial property analysis
          with full financials &mdash; goes out in approximately 10 days.
          <strong style="color:${color.forest};">
            You don&rsquo;t want to miss it while busy missing something smaller.
          </strong>
        </p>
      </td>
    </tr>

    <!-- PRIMARY CTA -->
    <tr>
      <td style="padding:0 40px 12px;">
        ${ctaBtn(AMAZON_REVIEW_URL, "Fulfil the Commitment — Post the Review")}
      </td>
    </tr>

    ${divider()}

    ${signOff(
      "Your move.",
      `P.S. &mdash; If you have questions about the book, the framework, or a specific
      deal you&rsquo;re evaluating &mdash; reply to this email directly.
      The inbox is monitored. This offer stands regardless of whether
      you&rsquo;ve reviewed yet.`
    )}
  `;

  return shell(body);
}