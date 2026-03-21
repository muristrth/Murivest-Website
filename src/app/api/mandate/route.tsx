import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    console.log('Received mandate data:', {
      vendorName: data.vendorName,
      email: data.email,
      titleNumber: data.titleNumber
    });

    // Validate required fields
    const requiredFields = ['vendorName', 'vendorId', 'email', 'phone', 
                           'titleNumber', 'location', 'price', 'commission'];
    
    for (const field of requiredFields) {
      if (!data[field] || data[field].toString().trim() === '') {
        console.error(`Missing required field: ${field}`);
        return NextResponse.json(
          { success: false, error: `${field} is required` }, 
          { status: 400 }
        );
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' }, 
        { status: 400 }
      );
    }

    // Generate mandate reference
    const mandateRef = `ATS-${data.titleNumber.replace(/\//g, '').slice(-5)}-${Date.now().toString().slice(-6)}`;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify transporter connection
    try {
      await transporter.verify();
      console.log('SMTP transporter verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { success: false, error: 'Email service temporarily unavailable' }, 
        { status: 503 }
      );
    }

    // Email recipients
    const sellerEmail = data.email;
    const companyEmail = 'murivestrealty@gmail.com';
    
    console.log('Sending emails to:', { seller: sellerEmail, company: companyEmail });

    // HTML Email Template - Old Money Aesthetic
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Authority to Sell - ${mandateRef}</title>
        <style>
          @media only screen and (max-width: 600px) {
            .container { width: 100% !important; padding: 20px !important; }
            .header { padding: 30px 20px !important; }
            .content { padding: 30px 20px !important; }
            .reference-box { padding: 20px !important; }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; background-color: #FAF9F6; font-family: Georgia, 'Times New Roman', serif; color: #2C2C2C;">
        
        <!-- Header -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1B4332; padding: 50px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" class="container">
                <tr>
                  <td style="text-align: center; padding: 20px;">
                    <p style="color: #B8956B; font-size: 11px; margin: 0 0 10px 0; font-weight: 500; letter-spacing: 3px; text-transform: uppercase; font-family: Arial, sans-serif;">
                      Murivest Realty Limited
                    </p>
                    <h1 style="color: #FAF9F6; font-size: 32px; margin: 0; font-weight: 400; letter-spacing: 1px; font-style: italic;">
                      Authority to Sell
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- Main Content -->
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center" style="padding: 40px 0;">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border: 1px solid #E8E6E1;" class="container">
                <tr>
                  <td style="padding: 50px;" class="content">
                    
                    <!-- Reference Box -->
                    <table width="100%" style="background-color: #FAF9F6; border-left: 3px solid #B8956B; margin-bottom: 40px;" class="reference-box">
                      <tr>
                        <td style="padding: 25px;">
                          <p style="margin: 0; color: #1B4332; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; font-family: Arial, sans-serif;">
                            Mandate Reference
                          </p>
                          <p style="margin: 8px 0 0 0; color: #B8956B; font-size: 22px; font-weight: 500; letter-spacing: 2px; font-family: 'Courier New', monospace;">
                            ${mandateRef}
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Salutation -->
                    <p style="color: #2C2C2C; font-size: 16px; margin: 0 0 25px 0; line-height: 1.6; font-weight: 400;">
                      Dear <strong style="color: #1B4332;">${data.vendorName}</strong>,
                    </p>

                    <p style="color: #2C2C2C; font-size: 15px; margin: 0 0 25px 0; line-height: 1.8; font-weight: 400;">
                      We acknowledge receipt of your formal mandate instructing Murivest Realty Limited 
                      to act as your exclusive agent in the sale of the hereinafter described property. 
                      This communication serves as confirmation of our appointment and the terms governing 
                      our professional engagement.
                    </p>

                    <!-- Section Divider -->
                    <table width="100%" style="margin: 35px 0;">
                      <tr>
                        <td style="border-bottom: 1px solid #E8E6E1; padding-bottom: 15px;">
                          <h2 style="color: #1B4332; font-size: 14px; margin: 0; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; font-family: Arial, sans-serif;">
                            Vendor Information
                          </h2>
                        </td>
                      </tr>
                    </table>
                    
                    <table width="100%" style="margin-bottom: 30px;">
                      <tr>
                        <td width="50%" style="padding: 12px 0; border-bottom: 1px solid #F5F4F0;">
                          <p style="margin: 0; color: #2C2C2C; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-family: Arial, sans-serif;">Legal Name</p>
                          <p style="margin: 5px 0 0 0; color: #1B4332; font-size: 15px; font-weight: 400;">${data.vendorName}</p>
                        </td>
                        <td width="50%" style="padding: 12px 0; border-bottom: 1px solid #F5F4F0;">
                          <p style="margin: 0; color: #2C2C2C; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-family: Arial, sans-serif;">Identification</p>
                          <p style="margin: 5px 0 0 0; color: #1B4332; font-size: 15px; font-weight: 400;">${data.vendorId}</p>
                        </td>
                      </tr>
                      <tr>
                        <td width="50%" style="padding: 12px 0; border-bottom: 1px solid #F5F4F0;">
                          <p style="margin: 0; color: #2C2C2C; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-family: Arial, sans-serif;">Contact</p>
                          <p style="margin: 5px 0 0 0; color: #1B4332; font-size: 15px; font-weight: 400;">${data.phone}</p>
                        </td>
                        <td width="50%" style="padding: 12px 0; border-bottom: 1px solid #F5F4F0;">
                          <p style="margin: 0; color: #2C2C2C; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-family: Arial, sans-serif;">Email</p>
                          <p style="margin: 5px 0 0 0; color: #1B4332; font-size: 15px; font-weight: 400;">${data.email}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Property Section -->
                    <table width="100%" style="margin: 35px 0;">
                      <tr>
                        <td style="border-bottom: 1px solid #E8E6E1; padding-bottom: 15px;">
                          <h2 style="color: #1B4332; font-size: 14px; margin: 0; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; font-family: Arial, sans-serif;">
                            Property Particulars
                          </h2>
                        </td>
                      </tr>
                    </table>
                    
                    <table width="100%" style="margin-bottom: 30px;">
                      <tr>
                        <td width="50%" style="padding: 12px 0; border-bottom: 1px solid #F5F4F0;">
                          <p style="margin: 0; color: #2C2C2C; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-family: Arial, sans-serif;">Title Number</p>
                          <p style="margin: 5px 0 0 0; color: #1B4332; font-size: 15px; font-weight: 400;">${data.titleNumber}</p>
                        </td>
                        <td width="50%" style="padding: 12px 0; border-bottom: 1px solid #F5F4F0;">
                          <p style="margin: 0; color: #2C2C2C; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-family: Arial, sans-serif;">Location</p>
                          <p style="margin: 5px 0 0 0; color: #1B4332; font-size: 15px; font-weight: 400;">${data.location}</p>
                        </td>
                      </tr>
                      <tr>
                        <td width="50%" style="padding: 12px 0; border-bottom: 1px solid #F5F4F0;">
                          <p style="margin: 0; color: #2C2C2C; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-family: Arial, sans-serif;">Listing Price</p>
                          <p style="margin: 5px 0 0 0; color: #1B4332; font-size: 15px; font-weight: 400;">KES ${parseInt(data.price || '0').toLocaleString()}</p>
                        </td>
                        <td width="50%" style="padding: 12px 0; border-bottom: 1px solid #F5F4F0;">
                          <p style="margin: 0; color: #2C2C2C; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-family: Arial, sans-serif;">Commission</p>
                          <p style="margin: 5px 0 0 0; color: #1B4332; font-size: 15px; font-weight: 400;">${data.commission}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Authorization Statement -->
                    <table width="100%" style="background-color: #FAF9F6; border: 1px solid #E8E6E1; margin: 35px 0;">
                      <tr>
                        <td style="padding: 30px;">
                          <p style="margin: 0; color: #1B4332; font-size: 13px; line-height: 1.8; font-style: italic; font-weight: 400;">
                            By this mandate, the Vendor confirms possession of legal authority to dispose of 
                            the aforementioned property and authorizes Murivest Realty Limited to commence 
                            marketing activities immediately upon execution of this document. All information 
                            herein provided is warranted to be true and accurate.
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Notice Box -->
                    <table width="100%" style="background-color: #FEFCF9; border-left: 3px solid #B8956B; margin: 35px 0;">
                      <tr>
                        <td style="padding: 20px;">
                          <p style="margin: 0 0 10px 0; color: #1B4332; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-family: Arial, sans-serif;">
                            Administrative Notice
                          </p>
                          <p style="margin: 0; color: #2C2C2C; font-size: 13px; line-height: 1.6; font-weight: 400;">
                            Prior to finalizing documentation, our legal team will verify the Property Title 
                            Number against official records to confirm ownership authenticity and legal capacity.
                          </p>
                        </td>
                      </tr>
                    </table>

                    <p style="color: #2C2C2C; font-size: 13px; margin: 30px 0 0 0; text-align: center; font-style: italic; font-weight: 400;">
                      This electronic record constitutes a binding acknowledgment of marketing commencement 
                      and shall be retained for compliance purposes.
                    </p>

                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- Footer -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1B4332; padding: 40px 0; margin-top: 40px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" class="container">
                <tr>
                  <td style="text-align: center; padding-bottom: 20px;">
                    <p style="color: #B8956B; font-size: 14px; margin: 0 0 5px 0; font-weight: 500; letter-spacing: 2px; font-family: Arial, sans-serif; text-transform: uppercase;">
                      Murivest Realty Limited
                    </p>
                    <p style="color: #FAF9F6; font-size: 12px; margin: 0; font-weight: 300; letter-spacing: 1px; font-family: Arial, sans-serif;">
                      Licensed Real Estate Agency · Estate Agents Registration Board Kenya
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="border-top: 1px solid #2D5A45; padding-top: 20px; text-align: center;">
                    <p style="margin: 0 0 8px 0; color: #FAF9F6; font-size: 12px; font-weight: 400; font-family: Arial, sans-serif;">
                      <strong style="color: #B8956B; font-weight: 500;">Office:</strong> Westlands, Nairobi, Kenya
                    </p>
                    <p style="margin: 0 0 8px 0; color: #FAF9F6; font-size: 12px; font-weight: 400; font-family: Arial, sans-serif;">
                      <strong style="color: #B8956B; font-weight: 500;">Investments:</strong> 
                      <a href="mailto:investments@murivest.co.ke" style="color: #FAF9F6; text-decoration: none;">investments@murivest.co.ke</a> · +254 729 170 156
                    </p>
                    <p style="margin: 20px 0 0 0; color: #FAF9F6/60; font-size: 10px; line-height: 1.6; font-family: Arial, sans-serif; opacity: 0.7;">
                      CONFIDENTIAL: This communication contains privileged information intended solely for the named recipient. 
                      Unauthorized disclosure is prohibited. This mandate acknowledgment does not constitute a final sales agreement.
                    </p>
                    <p style="margin: 15px 0 0 0; color: #FAF9F6/60; font-size: 10px; font-family: Arial, sans-serif; opacity: 0.7;">
                      © ${new Date().getFullYear()} Murivest Realty Limited. All Rights Reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

      </body>
      </html>
    `;

    // Send email to seller and CC company
    const mailOptions = {
      from: {
        name: 'Murivest Realty',
        address: process.env.SMTP_USER || 'investments@murivest.co.ke'
      },
      to: sellerEmail,
      cc: companyEmail,
      subject: `Authority to Sell Mandate – ${mandateRef}`,
      html: htmlTemplate,
      priority: "high" as const,
      headers: {
        'X-Mandate-Ref': mandateRef,
        'X-Priority': '1',
        'Importance': 'high'
      }
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', {
      messageId: info.messageId,
      mandateRef: mandateRef,
      accepted: info.accepted,
      rejected: info.rejected
    });

    return NextResponse.json({ 
      success: true, 
      mandateReference: mandateRef,
      message: 'Mandate executed and email sent successfully'
    });

  } catch (error) {
    console.error('Mandate execution failed:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process mandate. Please try again.' }, 
      { status: 500 }
    );
  }
}