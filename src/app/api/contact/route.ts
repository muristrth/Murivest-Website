import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  investmentRange: string;
  propertyType: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content for internal team
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Investment Inquiry - Murivest Realty Group</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Inter:wght@300;400;500;600&display=swap');
            
            body { 
              font-family: 'Inter', Arial, sans-serif; 
              line-height: 1.6; 
              color: #1a1a1a; 
              margin: 0; 
              padding: 0; 
              background-color: #f8f9fb;
            }
            .container { 
              max-width: 650px; 
              margin: 0 auto; 
              background: #ffffff;
              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            .header { 
              background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
              padding: 40px 30px; 
              text-align: center;
              position: relative;
              overflow: hidden;
            }
            .header::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" patternUnits="userSpaceOnUse" width="100" height="100"><circle cx="20" cy="20" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="80" cy="40" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="40" cy="80" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
              opacity: 0.3;
            }
            .logo { 
              position: relative;
              z-index: 2;
            }
            .logo img {
              max-height: 60px;
              width: auto;
            }
            .header h1 { 
              font-family: 'Playfair Display', serif;
              color: #ffffff; 
              margin: 20px 0 10px 0;
              font-size: 28px;
              font-weight: 700;
              position: relative;
              z-index: 2;
            }
            .header p { 
              color: #e5e5e5; 
              margin: 0;
              font-size: 16px;
              font-weight: 300;
              position: relative;
              z-index: 2;
            }
            .content { 
              padding: 40px 30px; 
              background: #ffffff;
            }
            .priority-banner {
              background: linear-gradient(90deg, #d4af37, #f4d03f);
              color: #1a1a1a;
              padding: 15px 25px;
              margin: -40px -30px 30px -30px;
              text-align: center;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 1px;
              font-size: 14px;
            }
            .field { 
              margin-bottom: 25px;
              border-bottom: 1px solid #f0f0f0;
              padding-bottom: 15px;
            }
            .field:last-child {
              border-bottom: none;
              margin-bottom: 0;
            }
            .label { 
              font-weight: 600; 
              color: #1a1a1a;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 8px;
            }
            .value { 
              padding: 15px 20px; 
              background: #f8f9fb; 
              border-left: 4px solid #d4af37;
              font-size: 16px;
              color: #2d2d2d;
            }
            .investment-highlight {
              background: linear-gradient(135deg, #f8f9fb, #e8f4f8);
              border: 2px solid #d4af37;
              border-radius: 8px;
              padding: 20px;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">
                <img src="/logo.png" alt="Murivest Realty Group" />
              </div>
              <h1>High-Priority Investment Inquiry</h1>
              <p>Strategic Partnership Opportunity</p>
            </div>

            <div class="content">
              <div class="priority-banner">
                🔥 New International Investor Lead - Immediate Attention Required
              </div>

              <div class="field">
                <div class="label">Investor Name:</div>
                <div class="value">${body.name}</div>
              </div>

              <div class="field">
                <div class="label">Contact Email:</div>
                <div class="value">${body.email}</div>
              </div>

              ${body.phone ? `
              <div class="field">
                <div class="label">Direct Phone:</div>
                <div class="value">${body.phone}</div>
              </div>
              ` : ''}

              ${body.investmentRange ? `
              <div class="investment-highlight">
                <div class="label">💰 Investment Capital Range:</div>
                <div class="value" style="background: transparent; border: none; padding: 10px 0; font-size: 18px; font-weight: 600; color: #d4af37;">${body.investmentRange}</div>
              </div>
              ` : ''}

              ${body.propertyType ? `
              <div class="field">
                <div class="label">Property Investment Focus:</div>
                <div class="value">${body.propertyType}</div>
              </div>
              ` : ''}

              ${body.message ? `
              <div class="field">
                <div class="label">Investment Inquiry Details:</div>
                <div class="value">${body.message.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="label">Inquiry Received:</div>
                <div class="value">${new Date().toLocaleString('en-KE', {
                  timeZone: 'Africa/Nairobi',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })} (EAT)</div>
              </div>

              <div style="margin-top: 30px; padding: 20px; background: #1a1a1a; color: white; text-align: center; border-radius: 8px;">
                <p style="margin: 0; font-weight: 600; font-size: 16px;">⚡ ACTION REQUIRED: Contact within 2 hours for optimal conversion</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Enhanced confirmation email to investor
    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Welcome to Murivest Realty Group - Premium Investment Opportunities</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Inter:wght@300;400;500;600&display=swap');
            
            body { 
              font-family: 'Inter', Arial, sans-serif; 
              line-height: 1.7; 
              color: #1a1a1a; 
              margin: 0; 
              padding: 0; 
              background-color: #f8f9fb;
            }
            .container { 
              max-width: 700px; 
              margin: 0 auto; 
              background: #ffffff;
              box-shadow: 0 15px 40px rgba(0,0,0,0.1);
            }
            .header { 
              background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
              padding: 50px 40px; 
              text-align: center;
              position: relative;
              overflow: hidden;
            }
            .header::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><radialGradient id="luxury" cx="50%" cy="50%"><stop offset="0%" stop-color="%23d4af37" stop-opacity="0.1"/><stop offset="100%" stop-color="%23ffffff" stop-opacity="0.05"/></radialGradient></defs><rect width="200" height="200" fill="url(%23luxury)"/></svg>');
            }
            .logo { 
              position: relative;
              z-index: 2;
              margin-bottom: 20px;
            }
            .logo img {
              max-height: 70px;
              width: auto;
            }
            .header h1 { 
              font-family: 'Playfair Display', serif;
              color: #ffffff; 
              margin: 0;
              font-size: 36px;
              font-weight: 700;
              position: relative;
              z-index: 2;
              text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            }
            .header .tagline { 
              color: #d4af37; 
              margin: 15px 0 0 0;
              font-size: 18px;
              font-weight: 300;
              position: relative;
              z-index: 2;
              text-transform: uppercase;
              letter-spacing: 2px;
            }
            .content { 
              padding: 50px 40px; 
              background: #ffffff;
            }
            .welcome-badge {
              background: linear-gradient(135deg, #d4af37, #f4d03f);
              color: #1a1a1a;
              padding: 20px 30px;
              margin: -50px -40px 40px -40px;
              text-align: center;
              font-weight: 600;
              font-size: 16px;
            }
            .greeting {
              font-size: 20px;
              margin-bottom: 25px;
              color: #1a1a1a;
            }
            .greeting strong {
              font-family: 'Playfair Display', serif;
              font-size: 24px;
              color: #d4af37;
            }
            .value-proposition {
              background: linear-gradient(135deg, #f8f9fb, #ffffff);
              border: 1px solid #e5e5e5;
              border-radius: 12px;
              padding: 35px;
              margin: 35px 0;
              text-align: center;
              position: relative;
            }
            .value-proposition::before {
              content: '👑';
              font-size: 48px;
              position: absolute;
              top: -24px;
              left: 50%;
              transform: translateX(-50%);
              background: white;
              padding: 0 15px;
            }
            .value-proposition h3 {
              font-family: 'Playfair Display', serif;
              font-size: 28px;
              color: #1a1a1a;
              margin: 20px 0 15px 0;
              font-weight: 700;
            }
            .benefits {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 25px;
              margin: 40px 0;
            }
            .benefit {
              text-align: center;
              padding: 25px 20px;
              background: #f8f9fb;
              border-radius: 8px;
              border-top: 4px solid #d4af37;
            }
            .benefit-icon {
              font-size: 32px;
              margin-bottom: 15px;
            }
            .benefit h4 {
              font-family: 'Playfair Display', serif;
              font-size: 18px;
              margin: 0 0 10px 0;
              color: #1a1a1a;
            }
            .benefit p {
              font-size: 14px;
              color: #666;
              margin: 0;
            }
            .cta-section {
              background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
              color: white;
              padding: 40px;
              margin: 40px -40px;
              text-align: center;
            }
            .cta-buttons {
              display: flex;
              gap: 20px;
              justify-content: center;
              flex-wrap: wrap;
              margin-top: 25px;
            }
            .cta-button {
              background: linear-gradient(135deg, #d4af37, #f4d03f);
              color: #1a1a1a;
              padding: 15px 30px;
              text-decoration: none;
              border-radius: 6px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 1px;
              font-size: 14px;
              transition: transform 0.3s ease;
            }
            .cta-button:hover {
              transform: translateY(-2px);
            }
            .cta-button.secondary {
              background: transparent;
              color: #d4af37;
              border: 2px solid #d4af37;
            }
            .footer { 
              padding: 40px; 
              background: #f8f9fb; 
              border-top: 1px solid #e5e5e5;
              text-align: center;
            }
            .footer-logo {
              margin-bottom: 25px;
            }
            .contact-info {
              margin: 25px 0;
              font-size: 16px;
              color: #1a1a1a;
            }
            .contact-info strong {
              font-family: 'Playfair Display', serif;
              color: #d4af37;
              font-size: 18px;
            }
            .social-links {
              margin-top: 30px;
            }
            .social-links a {
              color: #1a1a1a;
              text-decoration: none;
              margin: 0 15px;
              font-size: 16px;
              font-weight: 500;
              transition: color 0.3s ease;
            }
            .social-links a:hover {
              color: #d4af37;
            }
            .exclusive-badge {
              background: linear-gradient(45deg, #1a1a1a, #d4af37);
              color: white;
              padding: 8px 20px;
              border-radius: 20px;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin: 20px 0;
              display: inline-block;
            }
            @media (max-width: 600px) {
              .benefits {
                grid-template-columns: 1fr;
              }
              .cta-buttons {
                flex-direction: column;
                align-items: center;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">
                <img src="/logo.png" alt="Murivest Realty Group" />
              </div>
              <h1>MURIVEST REALTY GROUP</h1>
              <p class="tagline">Exclusive Investment Partners</p>
            </div>

            <div class="content">
              <div class="welcome-badge">
                🌟 Welcome to Our Exclusive Investment Circle
              </div>

              <div class="greeting">
                Dear <strong>${body.name}</strong>,
              </div>

              <p>Thank you for your distinguished interest in Murivest Realty Group. As a strategic partner to high-net-worth individuals and institutional investors, we recognize the caliber of investor who seeks our exclusive opportunities.</p>

              <div class="exclusive-badge">
                Exclusive Partnership Invitation
              </div>

              <div class="value-proposition">
                <h3>Your Gateway to Premium Real Estate Investment</h3>
                <p style="font-size: 18px; color: #666; margin: 0;">Join an elite circle of international investors who have discovered Kenya's most lucrative property investment opportunities through our curated portfolio.</p>
              </div>

              <div class="benefits">
                <div class="benefit">
                  <div class="benefit-icon">🏆</div>
                  <h4>Exclusive Deals</h4>
                  <p>Access to off-market properties and pre-launch developments</p>
                </div>
                <div class="benefit">
                  <div class="benefit-icon">📈</div>
                  <h4>Proven Returns</h4>
                  <p>Track record of 15-25% annual ROI for our premium clients</p>
                </div>
                <div class="benefit">
                  <div class="benefit-icon">🌍</div>
                  <h4>International Focus</h4>
                  <p>Specialized service for global investors and expatriates</p>
                </div>
                <div class="benefit">
                  <div class="benefit-icon">🔒</div>
                  <h4>Secure Investments</h4>
                  <p>Full legal compliance and transparent transaction processes</p>
                </div>
              </div>

              <div class="cta-section">
                <h3 style="font-family: 'Playfair Display', serif; font-size: 28px; margin-bottom: 15px;">Ready to Begin Your Investment Journey?</h3>
                <p style="font-size: 18px; margin-bottom: 25px; opacity: 0.9;">Our senior investment consultants will contact you within 24 hours to discuss your portfolio strategy.</p>
                
                <div class="cta-buttons">
                  <a href="https://www.murivest.co.ke/" class="cta-button">Explore Investment Opportunities</a>
                  <a href="tel:+254115277610" class="cta-button secondary">Schedule Consultation</a>
                </div>
              </div>

              <p style="margin-top: 40px;">In the meantime, we invite you to explore our comprehensive portfolio and learn why discerning investors choose Murivest as their trusted partner in East Africa's most dynamic real estate market.</p>

              <p style="font-size: 18px; font-family: 'Playfair Display', serif; text-align: center; margin-top: 40px; color: #d4af37;">
                <em>"Excellence in Investment. Legacy in Real Estate."</em>
              </p>

              <p style="margin-top: 40px;">
                Warm regards,<br><br>
                <strong style="font-family: 'Playfair Display', serif; font-size: 20px; color: #1a1a1a;">The Murivest Executive Team</strong><br>
                <em>Strategic Investment Partners</em>
              </p>
            </div>

            <div class="footer">
              <div class="footer-logo">
                <img src="/logo.png" alt="Murivest Realty Group" style="max-height: 50px;" />
              </div>
              
              <div class="contact-info">
                <strong>MURIVEST REALTY GROUP</strong><br>
                Westlands Business District, Nairobi, Kenya<br><br>
                <strong>Direct Line:</strong> +254 115 277 610<br>
                <strong>Email:</strong> info@murivest.co.ke<br>
                <strong>Website:</strong> <a href="https://www.murivest.co.ke/" style="color: #d4af37; text-decoration: none;">www.murivest.co.ke</a>
              </div>

              <div class="social-links">
                <a href="https://instagram.com/murivest_realty/">Instagram</a> |
                <a href="https://www.linkedin.com/company/murivest-realty-group">LinkedIn</a> |
                <a href="https://www.youtube.com/@MurivestRealty">YouTube</a>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; font-size: 12px; color: #999;">
                This email was sent to a valued investment prospect. If you believe you received this in error, please contact us immediately.
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to internal team
    await transporter.sendMail({
      from: `"Murivest Investment Portal" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'info@murivest.co.ke',
      subject: `🔥 HIGH-PRIORITY: New International Investment Inquiry from ${body.name}`,
      text: `New Investment Inquiry - URGENT FOLLOW-UP REQUIRED\n\nInvestor: ${body.name}\nEmail: ${body.email}\nInvestment Range: ${body.investmentRange}\nPhone: ${body.phone}\n\nMessage: ${body.message}`,
      html: htmlContent,
    });

    // Send confirmation email to investor
    await transporter.sendMail({
      from: `"Murivest Realty Group" <${process.env.SMTP_USER}>`,
      to: body.email,
      subject: 'Welcome to Murivest Realty Group - Your Premium Investment Journey Begins',
      text: `Dear ${body.name},\n\nWelcome to Murivest Realty Group - your gateway to premium real estate investment opportunities in Kenya.\n\nOur investment consultants will contact you within 24 hours to discuss your investment goals.\n\nVisit us: https://www.murivest.co.ke/\nCall: +254 115 277 610\n\nBest regards,\nThe Murivest Executive Team`,
      html: confirmationHtml,
    });

    return NextResponse.json(
      { message: 'Investment inquiry submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Investment inquiry submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process your inquiry. Please contact us directly.' },
      { status: 500 }
    );
  }
}