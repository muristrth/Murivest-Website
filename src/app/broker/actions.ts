'use server'

import nodemailer from 'nodemailer'

export async function submitBrokerLead(formData: FormData) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const name = (formData.get('name') as string) || ''
    const firm = (formData.get('firm') as string) || ''
    const email = (formData.get('email') as string) || ''
    const phone = (formData.get('phone') as string) || ''
    const ownerInfo = (formData.get('ownerInfo') as string) || ''
    const assetClass = (formData.get('assetClass') as string) || ''
    const location = (formData.get('location') as string) || ''
    const askingPrice = (formData.get('askingPrice') as string) || ''
    const currency = (formData.get('currency') as string) || 'KES'
    const annualIncome = (formData.get('annualIncome') as string) || ''
    const mandateStatus = (formData.get('mandateStatus') as string) || ''
    const notes = (formData.get('notes') as string) || ''

    // Handle file attachments
    const attachments: { filename: string; content: Buffer; contentType: string }[] = []
    const files = formData.getAll('attachments')
    
    for (const file of files) {
      if (file instanceof File && file.size > 0) {
        const bytes = await file.arrayBuffer()
        attachments.push({
          filename: file.name,
          content: Buffer.from(bytes),
          contentType: file.type,
        })
      }
    }

    const formattedPrice = askingPrice ? `${currency} ${Number(askingPrice).toLocaleString()}` : 'Not specified'

    // ─── 1. EMAIL TO MURIVEST TEAM ───
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@murivest.co.ke',
      to: 'capital@murivest.co.ke',
      replyTo: email,
      subject: `Broker Lead: ${assetClass} — ${location} — ${name}`,
      text: `
NEW BROKER LEAD SUBMISSION

Broker Details
--------------
Name:   ${name}
Firm:   ${firm || 'N/A'}
Email:  ${email}
Phone:  ${phone}

Asset Overview
--------------
Owner Info:     ${ownerInfo}
Asset Class:    ${assetClass}
Location:       ${location}
Asking Price:   ${formattedPrice}
Annual Income:  ${annualIncome ? currency + ' ' + Number(annualIncome).toLocaleString() : 'Not provided'}
Mandate Status: ${mandateStatus}

Notes
-----
${notes || 'None'}

Files Attached: ${attachments.length}
      `,
      html: `
        <div style="font-family: Georgia, 'Times New Roman', serif; color: #2C2C2C; max-width: 640px; line-height: 1.6;">
          <div style="border-bottom: 1px solid #E5E2DC; padding-bottom: 16px; margin-bottom: 24px;">
            <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.3em; color: #8B7355; margin: 0 0 8px;">Murivest Realty</p>
            <h2 style="font-size: 24px; font-weight: normal; margin: 0;">New Broker Lead</h2>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
            <tr>
              <td style="padding: 6px 0; color: #5A5A5A; width: 160px; vertical-align: top;">Broker</td>
              <td style="padding: 6px 0;"><strong>${name}</strong>${firm ? `<br/><span style="color: #5A5A5A;">${firm}</span>` : ''}</td>
            </tr>
            <tr><td style="padding: 6px 0; color: #5A5A5A;">Email</td><td style="padding: 6px 0;">${email}</td></tr>
            <tr><td style="padding: 6px 0; color: #5A5A5A;">Phone</td><td style="padding: 6px 0;">${phone}</td></tr>
          </table>

          <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: #8B7355; border-bottom: 1px solid #E5E2DC; padding-bottom: 8px; margin-bottom: 16px;">Asset Details</p>
          
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
            <tr><td style="padding: 6px 0; color: #5A5A5A; width: 160px;">Owner Info</td><td style="padding: 6px 0;">${ownerInfo}</td></tr>
            <tr><td style="padding: 6px 0; color: #5A5A5A;">Asset Class</td><td style="padding: 6px 0;">${assetClass}</td></tr>
            <tr><td style="padding: 6px 0; color: #5A5A5A;">Location</td><td style="padding: 6px 0;">${location}</td></tr>
            <tr><td style="padding: 6px 0; color: #5A5A5A;">Asking Price</td><td style="padding: 6px 0;"><strong>${formattedPrice}</strong></td></tr>
            <tr><td style="padding: 6px 0; color: #5A5A5A;">Annual Income</td><td style="padding: 6px 0;">${annualIncome ? currency + ' ' + Number(annualIncome).toLocaleString() : '<span style="color: #B0ADA6;">Not provided</span>'}</td></tr>
            <tr><td style="padding: 6px 0; color: #5A5A5A;">Mandate</td><td style="padding: 6px 0;">${mandateStatus}</td></tr>
          </table>

          ${notes ? `
          <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: #8B7355; border-bottom: 1px solid #E5E2DC; padding-bottom: 8px; margin-bottom: 16px;">Additional Notes</p>
          <p style="font-size: 14px; color: #5A5A5A; white-space: pre-line; margin-bottom: 24px;">${notes.replace(/\n/g, '<br/>')}</p>
          ` : ''}

          <p style="font-size: 12px; color: #B0ADA6; border-top: 1px solid #E5E2DC; padding-top: 16px;">
            Submitted via murivest.co.ke/broker &middot; ${attachments.length} file(s) attached
          </p>
        </div>
      `,
      attachments,
    })

    // ─── 2. CONFIRMATION EMAIL TO BROKER ───
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@murivest.co.ke',
      to: email,
      replyTo: 'capital@murivest.co.ke',
      subject: 'Property Received — Murivest Realty',
      text: `
Dear ${name},

Thank you for registering your lead with Murivest Realty.

We have received the following details:

Asset:        ${assetClass} in ${location}
Asking Price: ${formattedPrice}
Mandate:      ${mandateStatus}

What happens next:
1. Our origination team will review your submission within 24 hours.
2. A senior advisor will contact you to discuss mandate protection and next steps.
3. If the asset qualifies, we will work with you to package it for our institutional buyer network.

Your introduction is protected under our co-broke policy. We do not circumvent brokers.

If you have any questions, reply to this email or contact us directly at capital@murivest.co.ke.

Best regards,
Murivest Capital Markets Team
      `,
      html: `
        <div style="font-family: Georgia, 'Times New Roman', serif; color: #2C2C2C; max-width: 560px; line-height: 1.6; margin: 0 auto;">
          <div style="border-bottom: 1px solid #E5E2DC; padding-bottom: 20px; margin-bottom: 32px; text-align: center;">
            <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.4em; color: #8B7355; margin: 0 0 12px;">Murivest Realty</p>
            <h2 style="font-size: 22px; font-weight: normal; margin: 0;">Property Received</h2>
          </div>

          <p style="font-size: 15px; color: #2C2C2C; margin-bottom: 24px;">Dear ${name},</p>
          
          <p style="font-size: 14px; color: #5A5A5A; font-weight: 300; margin-bottom: 24px;">
            Thank you for registering your lead with Murivest Realty. We have received your submission and our origination team is now reviewing it.
          </p>

          <div style="background: #F8F7F4; border: 1px solid #E5E2DC; padding: 20px; margin-bottom: 28px;">
            <p style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; color: #8B7355; margin: 0 0 12px;">Your Submission</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr><td style="padding: 4px 0; color: #5A5A5A; width: 120px;">Asset</td><td style="padding: 4px 0; color: #2C2C2C;">${assetClass}</td></tr>
              <tr><td style="padding: 4px 0; color: #5A5A5A;">Location</td><td style="padding: 4px 0; color: #2C2C2C;">${location}</td></tr>
              <tr><td style="padding: 4px 0; color: #5A5A5A;">Price</td><td style="padding: 4px 0; color: #2C2C2C;"><strong>${formattedPrice}</strong></td></tr>
              <tr><td style="padding: 4px 0; color: #5A5A5A;">Mandate</td><td style="padding: 4px 0; color: #2C2C2C;">${mandateStatus}</td></tr>
            </table>
          </div>

          <p style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; color: #8B7355; margin: 0 0 16px;">What Happens Next</p>
          
          <div style="margin-bottom: 28px;">
            <div style="display: flex; gap: 16px; margin-bottom: 16px;">
              <div style="width: 28px; height: 28px; border: 1px solid #8B7355; display: flex; align-items: center; justify-content: center; font-size: 11px; color: #8B7355; flex-shrink: 0;">1</div>
              <div>
                <p style="font-size: 13px; color: #2C2C2C; margin: 0 0 2px;">Review</p>
                <p style="font-size: 12px; color: #5A5A5A; font-weight: 300; margin: 0;">Our origination team reviews your submission within 24 hours.</p>
              </div>
            </div>
            <div style="display: flex; gap: 16px; margin-bottom: 16px;">
              <div style="width: 28px; height: 28px; border: 1px solid #8B7355; display: flex; align-items: center; justify-content: center; font-size: 11px; color: #8B7355; flex-shrink: 0;">2</div>
              <div>
                <p style="font-size: 13px; color: #2C2C2C; margin: 0 0 2px;">Qualification Call</p>
                <p style="font-size: 12px; color: #5A5A5A; font-weight: 300; margin: 0;">A senior advisor contacts you to discuss mandate protection and next steps.</p>
              </div>
            </div>
            <div style="display: flex; gap: 16px;">
              <div style="width: 28px; height: 28px; border: 1px solid #8B7355; display: flex; align-items: center; justify-content: center; font-size: 11px; color: #8B7355; flex-shrink: 0;">3</div>
              <div>
                <p style="font-size: 13px; color: #2C2C2C; margin: 0 0 2px;">Packaging</p>
                <p style="font-size: 12px; color: #5A5A5A; font-weight: 300; margin: 0;">If the asset qualifies, we work with you to present it to our institutional buyer network.</p>
              </div>
              </div>
          </div>

          <div style="border-top: 1px solid #E5E2DC; padding-top: 20px; margin-bottom: 24px;">
            <p style="font-size: 13px; color: #5A5A5A; font-weight: 300; margin: 0 0 8px;">
              <strong style="color: #2C2C2C;">Your introduction is protected.</strong> We operate under a strict co-broke policy. We do not circumvent brokers.
            </p>
          </div>

          <p style="font-size: 13px; color: #5A5A5A; font-weight: 300; margin-bottom: 24px;">
            If you have any questions, reply to this email or contact us directly at <a href="mailto:capital@murivest.co.ke" style="color: #8B7355; text-decoration: none;">capital@murivest.co.ke</a>.
          </p>

          <p style="font-size: 14px; color: #2C2C2C; margin-bottom: 4px;">Best regards,</p>
          <p style="font-size: 13px; color: #8B7355; margin: 0;">Murivest Capital Markets Team</p>

          <div style="border-top: 1px solid #E5E2DC; margin-top: 32px; padding-top: 16px;">
            <p style="font-size: 11px; color: #B0ADA6; margin: 0;">
              Murivest Realty &middot; 14th Floor, The Lofts, Riverside Drive, Westlands, Nairobi<br/>
              <a href="https://murivest.co.ke" style="color: #8B7355; text-decoration: none;">murivest.co.ke</a>
            </p>
          </div>
        </div>
      `,
    })

    return { success: true, message: 'Lead submitted successfully' }
  } catch (err) {
    console.error('Broker lead submission error:', err)
    return { success: false, message: 'Failed to send. Please try again or email capital@murivest.co.ke directly.' }
  }
}