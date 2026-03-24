// Investor brief request email template
export function generateBriefRequestEmail(
  investorName: string,
  briefTitle: string,
  message?: string
): { subject: string; html: string } {
  return {
    subject: `Brief Request: ${briefTitle}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #1B4332; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1B4332; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #FAF9F6; }
          .details { background: white; padding: 15px; border-radius: 4px; margin: 15px 0; }
          .label { font-weight: bold; color: #B8956B; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Murivest</h1>
          </div>
          <div class="content">
            <h2>New Brief Request</h2>
            <div class="details">
              <p><span class="label">Investor:</span> ${investorName}</p>
              <p><span class="label">Brief:</span> ${briefTitle}</p>
              ${message ? `<p><span class="label">Message:</span> ${message}</p>` : ''}
            </div>
            <p>Please respond to this request within 24 hours.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }
}

// Admin notification for brief request
export function generateBriefRequestAdminEmail(
  investorName: string,
  investorEmail: string,
  briefTitle: string,
  message?: string
): { subject: string; html: string } {
  return {
    subject: `New Brief Request from ${investorName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #1B4332; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .content { padding: 20px; background: #FAF9F6; }
          .details { background: white; padding: 15px; border-radius: 4px; margin: 15px 0; }
          .label { font-weight: bold; color: #B8956B; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="content">
            <h2>New Brief Request</h2>
            <div class="details">
              <p><span class="label">Investor Name:</span> ${investorName}</p>
              <p><span class="label">Investor Email:</span> ${investorEmail}</p>
              <p><span class="label">Brief:</span> ${briefTitle}</p>
              ${message ? `<p><span class="label">Message:</span> ${message}</p>` : ''}
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
  }
}