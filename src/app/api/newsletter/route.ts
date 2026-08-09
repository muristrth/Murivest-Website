import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465', 10),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Internal notification (refined design)
    await transporter.sendMail({
      from: `"Murivest Intelligence" <${process.env.SMTP_USER}>`,
      to: process.env.NEWSLETTER_EMAIL || process.env.CONTACT_EMAIL || 'info@murivest.co.ke',
      subject: `New Subscriber: ${email}`,
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>New Subscriber</title>
  <style>
    body { margin: 0; padding: 0; background: #f7f5f0; font-family: 'Georgia', 'Times New Roman', serif; color: #2c2c2c; }
    .container { max-width: 560px; margin: 40px auto; background: #ffffff; border-top: 4px solid #8B6914; }
    .header { padding: 32px 40px 24px; border-bottom: 1px solid #e8e3da; }
    .logo { font-size: 13px; letter-spacing: 0.22em; text-transform: uppercase; color: #8B6914; margin-bottom: 8px; }
    .title { font-size: 22px; font-weight: 600; color: #1f1f1f; margin: 0; }
    .content { padding: 32px 40px; }
    .stat { display: inline-block; min-width: 110px; padding: 12px 16px; background: #faf9f7; border: 1px solid #e8e3da; margin-right: 16px; margin-bottom: 16px; text-align: center; }
    .stat-number { font-size: 24px; font-weight: 700; color: #8B6914; line-height: 1.2; }
    .stat-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #6a6a6a; margin-top: 4px; }
    .footer { padding: 24px 40px; border-top: 1px solid #e8e3da; background: #faf9f7; font-size: 12px; color: #7a7a7a; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">Murivest Research</div>
      <h1 class="title">New Newsletter Subscriber</h1>
    </div>
    <div class="content">
      <p style="font-size:15px; line-height:1.6; margin:0 0 20px;">
        A new subscriber has joined the Murivest Market Intelligence newsletter.
      </p>
      <table style="width:100%; margin-bottom:24px;">
        <tr>
          <td style="padding:8px 0; font-size:14px; color:#5a5a5a;">Email</td>
          <td style="padding:8px 0; font-size:14px; font-weight:600;">${email}</td>
        </tr>
        <tr>
          <td style="padding:8px 0; font-size:14px; color:#5a5a5a;">Subscribed</td>
          <td style="padding:8px 0; font-size:14px;">${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}</td>
        </tr>
      </table>
      <div class="stat">
        <div class="stat-number">1</div>
        <div class="stat-label">New Subscriber</div>
      </div>
      <div class="stat">
        <div class="stat-number">NBO</div>
        <div class="stat-label">Market</div>
      </div>
    </div>
    <div class="footer">
      <strong>Murivest Realty Group</strong> – Institutional Commercial Real Estate<br />
      Westlands Business District, Nairobi, Kenya
    </div>
  </div>
</body>
</html>`,
    });

    // 2. Welcome email (institutional style)
    await transporter.sendMail({
      from: `"Murivest Realty Group" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Welcome to Murivest Market Intelligence',
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Welcome to Murivest Research</title>
  <style>
    body { margin: 0; padding: 0; background: #f7f5f0; font-family: Arial, Helvetica, sans-serif; color: #2c2c2c; line-height: 1.7; }
    .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-top: 4px solid #8B6914; }
    .header { padding: 40px 48px 32px; border-bottom: 1px solid #e8e3da; }
    .eyebrow { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #8B6914; margin-bottom: 12px; }
    .title { font-size: 26px; line-height: 1.3; font-weight: 600; color: #1c1c1c; margin: 0; }
    .content { padding: 36px 48px; }
    p { margin: 0 0 18px; color: #3e3e3e; font-size: 15px; }
    .section-title { font-size: 13px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: #8B6914; margin: 28px 0 14px; padding-bottom: 8px; border-bottom: 1px solid #e8e3da; }
    ul { margin: 0 0 24px; padding-left: 20px; }
    li { margin-bottom: 10px; color: #4a4a4a; font-size: 14px; }
    .button { display: inline-block; padding: 14px 28px; background: #1f1f1f; color: #ffffff !important; text-decoration: none; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; margin-top: 8px; }
    .footer { padding: 28px 48px; border-top: 1px solid #e8e3da; background: #faf9f7; }
    .footer p { font-size: 13px; color: #6a6a6a; margin-bottom: 8px; }
    .small { font-size: 11px; color: #8a8a8a; }
    @media (max-width: 600px) { .header, .content, .footer { padding: 28px 24px; } .title { font-size: 22px; } p, li { font-size: 14px; } }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="eyebrow">Murivest Research</div>
      <h1 class="title">Subscription Confirmed</h1>
    </div>
    <div class="content">
      <p>Thank you for subscribing to Murivest market updates and commercial real estate research.</p>
      <p>You will periodically receive proprietary analysis covering investment activity, pricing trends, development pipelines, and capital market movements across Kenya's property sector.</p>
      
      <div class="section-title">Coverage Areas</div>
      <ul>
        <li>Commercial office and mixed-use markets</li>
        <li>Residential pricing and rental trends</li>
        <li>Land and infrastructure corridors</li>
        <li>Investment transaction activity</li>
        <li>Hospitality and alternative asset classes</li>
      </ul>
      
      <p>Our research is prepared for investors, developers, occupiers, and institutions monitoring East African real estate markets.</p>
      
      <a href="https://www.murivest.com/research" class="button">View Latest Research</a>
      
      <p class="small" style="margin-top:28px;">This email was sent following a newsletter subscription request submitted through the Murivest website. You may unsubscribe at any time.</p>
    </div>
    <div class="footer">
      <p><strong>Murivest Realty Group</strong></p>
      <p>Westlands Business District<br />Nairobi, Kenya</p>
      <p>+254 115 277 610<br />info@murivest.co.ke</p>
    </div>
  </div>
</body>
</html>`,
    });

    // 3. First newsletter email: Absa Towers exclusive invitation (Agora Financial / Jason Capital style)
    await transporter.sendMail({
      from: `"Murivest Intelligence" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Your Exclusive Invitation: Absa Towers — Nairobi CBD\'s Best Kept Institutional Secret',
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Your Exclusive Invitation: Absa Towers</title>
  <style>
    body { margin: 0; padding: 0; background: #f5f5f3; font-family: 'Georgia', 'Times New Roman', serif; color: #1a1a1a; line-height: 1.8; }
    .container { max-width: 620px; margin: 40px auto; background: #ffffff; border-top: 5px solid #8B6914; }
    .header { padding: 42px 48px 32px; border-bottom: 1px solid #e0dbd0; background: #faf9f7; }
    .eyebrow { font-size: 11px; letter-spacing: 0.20em; text-transform: uppercase; color: #8B6914; margin-bottom: 12px; }
    .title { font-size: 28px; line-height: 1.3; font-weight: 700; color: #1c1c1c; margin: 0; }
    .subtitle { font-size: 15px; color: #5a5a5a; margin-top: 10px; font-style: italic; }
    .content { padding: 40px 48px; }
    h2 { font-size: 20px; font-weight: 700; color: #1c1c1c; margin: 32px 0 16px; padding-bottom: 8px; border-bottom: 1px solid #e8e3da; }
    p { margin: 0 0 20px; font-size: 15px; color: #2c2c2c; }
    .lead { font-size: 17px; color: #1a1a1a; font-weight: 600; }
    .highlight-box { background: #fdfaf3; border-left: 4px solid #8B6914; padding: 20px 24px; margin: 24px 0; }
    .highlight-box p { margin: 0; font-size: 14px; color: #4a4a4a; }
    .stat-grid { display: table; width: 100%; margin: 24px 0; }
    .stat-row { display: table-row; }
    .stat-cell { display: table-cell; width: 33%; padding: 16px 12px; text-align: center; border: 1px solid #e8e3da; }
    .stat-number { font-size: 26px; font-weight: 700; color: #8B6914; }
    .stat-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #6a6a6a; margin-top: 4px; }
    .cta-button { display: inline-block; padding: 16px 36px; background: #8B6914; color: #ffffff !important; text-decoration: none; font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 700; margin-top: 12px; }
    .footer { padding: 28px 48px; border-top: 1px solid #e0dbd0; background: #faf9f7; font-size: 12px; color: #7a7a7a; }
    .footer p { font-size: 12px; color: #7a7a7a; margin-bottom: 6px; }
    @media (max-width: 600px) { .header, .content, .footer { padding: 28px 24px; } .title { font-size: 24px; } }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="eyebrow">Murivest Intelligence · Exclusive Invitation</div>
      <h1 class="title">Absa Towers — Nairobi CBD's Best Kept Institutional Secret</h1>
      <p class="subtitle">How Kenya's UHNWI are deploying capital into income-producing commercial assets on Loita Street while sitting on their 10-acre Runda estate or Muthaiga golf course.</p>
    </div>
    <div class="content">
      <p class="lead">Dear Discerning Investor,</p>
      
      <p>Allow me to paint the scene...</p>
      
      <p>You're in your Range Rover... the windows are rolled down. Pleasant music softly plays in the background. You quietly drum your fingers to the rhythm as you soak in the warm rays of the sun across your 10-acre Runda estate.</p>
      
      <p>Your driver is taking you exactly where you need to be. All you have to do right now is... <em>relax</em>... and allow yourself to adjust to the incredible Nairobi climate.</p>
      
      <p>The air is warm and inviting. You feel energized by the cool breeze and the faint smell of leather.</p>
      
      <p>You breathe it in as deep as you can...</p>
      
      <p>And stop.</p>
      
      <p>Something is missing... you feel... lighter in a way.</p>
      
      <p>For the first time in as long as you can remember, you realize... the anxiety you had about your capital...</p>
      
      <p>That constant nagging anxiety about the shilling... inflation... the state of the Kenyan economy...</p>
      
      <p>The national debt... currency depreciation... unemployment rates... the constant barrage of things you "should" be worrying about, according to the mainstream media...</p>
      
      <p>... <em>Whatever</em> it is...</p>
      
      <p>It seems a thousand... no...</p>
      
      <p>A <em>million</em> miles away...</p>
      
      <p>And it's floating further away by the second.</p>
      
      <p>Those nights full of tossing and turning about where to park your KSh 500M. They're a distant memory now.</p>
      
      <p>You let it all slip away from your mind... and you smile.</p>
      
      <p>"We're here," your driver says, sounding just as excited for you as you are.</p>
      
      <p>You see the gates of the Kenya International Conference Centre (KICC) in the distance.</p>
      
      <p>Your excitement begins to build as you realize...</p>
      
      <p>It's real. <em>And this is just the beginning.</em></p>
      
      <p>While passing through Loita Street, you see a happy family entering the Absa Towers lobby on your left. On your right, a security guard salutes quietly as he monitors the entrance.</p>
      
      <p>A little further... a lush landscaped courtyard, jampacked with bright, tropical vegetation.</p>
      
      <p>The air softens even more... the city hum is close.</p>
      
      <p>A little further... professional tenants stream in and out between tropical flowers, brush and trees. Your driver tells you there are over 600 parking bays in this complex alone...</p>
      
      <p>Oh, and the Nairobi Expressway connection too...</p>
      
      <p>A little further... you pull into the Absa Towers entrance...</p>
      
      <p>You step out of the car and walk toward the imposing, inviting building...</p>
      
      <p>You freeze.</p>
      
      <p>A panoramic view opens itself up above you up the tower...</p>
      
      <p>You gaze up... <em>awestruck</em> by the scale...</p>
      
      <p>Floors of premium office space that flow on forever... gorgeous institutional finishes... bright, energetic professionals... dramatic CBD skyline views... reclining bankers... tan expatriates... investors spotting the opportunity...</p>
      
      <p>The relaxed way everyone is walking, talking, closing deals...</p>
      
      <p>You can see <em>everything.</em></p>
      
      <p>It's almost as if the entire Nairobi financial district opened up... just for you.</p>
      
      <p>You made it.</p>
      
      <p>You walk inside the Absa Towers lobby. You are greeted by a friendly property manager who says,</p>
      
      <p>"We've been expecting you."</p>
      
      <p>They hand you your due diligence folder... and welcome you to your next institutional acquisition.</p>
      
      <h2>The Secret "Beyond First-World" Income-Producing Asset</h2>
      
      <p>What I just described to you is <em>my</em> experience pulling into this hidden crown jewel in the Nairobi CBD...</p>
      
      <p>And wondering what it would be like to own it outright.</p>
      
      <p>What <em>would</em> it be like, you ask?</p>
      
      <p>Well...</p>
      
      <p>Imagine for a moment... institutional-grade rental yield... a sublime CBD location... peace of mind from sovereign-grade tenancy... time to rest, think and reflect on your portfolio... a small community of blue-chip tenants... boardroom cocktails... five-star property management... dramatic cityfront and skyline views...</p>
      
      <p>Everyday passive income that is nearly impossible to find in the daily grind of Kenyan retail investment.</p>
      
      <div class="highlight-box">
        <p>"Ninety-five percent of Kenyan investors are chasing residential plots. Obscene concentration in speculative land is a uniquely Kenyan retail investor problem."<br />— Murivest Advisory Director</p>
      </div>
      
      <p>That's exactly why a few of my colleagues identified Absa Towers so many years ago. They wanted an asset that they themselves wouldn't mind parking KSh 2 billion into.</p>
      
      <p>And that's also why they didn't design this as just a short-term flip...</p>
      
      <p>They carefully positioned Absa Towers as a <em>generational income engine.</em></p>
      
      <div class="stat-grid">
        <div class="stat-row">
          <div class="stat-cell">
            <div class="stat-number">99.8%</div>
            <div class="stat-label">Occupancy Rate</div>
          </div>
          <div class="stat-cell">
            <div class="stat-number">17</div>
            <div class="stat-label">Storeys</div>
          </div>
          <div class="stat-cell">
            <div class="stat-number">600+</div>
            <div class="stat-label">Parking Bays</div>
          </div>
        </div>
      </div>
      
      <p>An <em>asset class</em>... a few Kenyan UHNWI realized they could access and <em>chose</em> to deploy capital into.</p>
      
      <p>An <em>asset class</em>... very few people in the entire East African retail market can even begin to comprehend.</p>
      
      <p>An <em>asset class</em>... you deserve, if only you'd reach out, grab it and let yourself own it.</p>
      
      <p>It really is that easy.</p>
      
      <p>Which is why many of my colleagues... family offices... and institutional partners have all come to Absa Towers and decided to call it a core holding... make it a portfolio anchor... or lock it in for purposes of a "yield fortress"...</p>
      
      <p>... Some have even acquired the entire building as an investment that could have the ability to double... triple... or even quadruple their capital in the long haul as the Nairobi CBD tightens.</p>
      
      <p>I know what you might be thinking... If it's so great, why doesn't <em>everyone</em> buy it? Why aren't investors flocking there in droves? Why don't you hear about it on the mainstream property portals?</p>
      
      <p>Well, for the most part, it has remained the Nairobi CBD's best-kept secret.</p>
      
      <a href="https://wa.me/254115277610" class="cta-button">Request Investment Memo</a>
      
      <p style="margin-top:28px; font-size:13px; color:#6a6a6a;">This exclusive research is available only to Murivest Intelligence subscribers. Forward this email to a colleague who should be aware of this opportunity.</p>
    </div>
    <div class="footer">
      <p><strong>Murivest Realty Group</strong></p>
      <p>Westlands Business District, Nairobi, Kenya</p>
      <p>+254 115 277 610 | info@murivest.co.ke</p>
      <p style="margin-top:12px; font-size:10px;">You received this email because you subscribed to Murivest Market Intelligence. To unsubscribe, reply with "Unsubscribe" in the subject line.</p>
    </div>
  </div>
</body>
</html>`,
    });

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}