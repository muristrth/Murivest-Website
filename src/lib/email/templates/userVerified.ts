// User verification approved email template
export function generateUserVerifiedEmail(
  name: string,
  status: 'verified' | 'premium'
): { subject: string; html: string } {
  const statusLabel = status === 'premium' ? 'Premium Member' : 'Verified Investor'
  const accessLevel = status === 'premium' 
    ? 'Full access to all content, including premium off-market deals and exclusive briefings'
    : 'Access to verified investor content and standard market reports'

  return {
    subject: `Your Investor Status Has Been Updated - Murivest`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #1B4332; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1B4332; color: white; padding: 30px 20px; text-align: center; }
          .content { padding: 30px 20px; background: #FAF9F6; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">Murivest</h1>
          </div>
          <div class="content">
            <h2>Congratulations, ${name}!</h2>
            <p>Your investor verification has been approved. You now have <strong>${statusLabel}</strong> status.</p>
            <p>Your Access Level: ${accessLevel}</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }
}

// User verification rejected email
export function generateUserRejectedEmail(
  name: string,
  reason: string
): { subject: string; html: string } {
  return {
    subject: 'Verification Update - Murivest',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #1B4332; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1B4332; color: white; padding: 30px 20px; text-align: center; }
          .content { padding: 30px 20px; background: #FAF9F6; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">Murivest</h1>
          </div>
          <div class="content">
            <h2>Verification Update</h2>
            <p>Hello ${name},</p>
            <p>Additional Information Required: ${reason}</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }
}

// API route export wrapper
export async function sendUserVerifiedEmail(
  _name: string,
  _status: 'verified' | 'premium'
): Promise<boolean> {
  console.log('User verified email would be sent')
  return true
}