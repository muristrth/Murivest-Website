// M-Pesa payment confirmation email
export function generateMpesaConfirmationEmail(
  name: string,
  amount: number,
  phone: string,
  transactionId: string
): { subject: string; html: string } {
  return {
    subject: 'Payment Received - Murivest',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #1B4332; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1B4332; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #FAF9F6; }
          .amount { font-size: 32px; font-weight: bold; color: #B8956B; text-align: center; margin: 20px 0; }
          .details { background: white; padding: 15px; border-radius: 4px; margin: 15px 0; }
          .label { font-weight: bold; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Murivest</h1>
          </div>
          <div class="content">
            <h2>Payment Confirmation</h2>
            <p>Hello ${name},</p>
            <p>We have received your payment. Here are the details:</p>
            <div class="amount">KES ${amount.toLocaleString()}</div>
            <div class="details">
              <p><span class="label">Transaction ID:</span> ${transactionId}</p>
              <p><span class="label">Phone Number:</span> ${phone}</p>
              <p><span class="label">Date:</span> ${new Date().toLocaleString()}</p>
            </div>
            <p>Your payment is being verified. You will receive confirmation once verified.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }
}

// Admin notification for M-Pesa payment
export function generateMpesaAdminNotification(
  amount: number,
  phone: string,
  transactionId: string,
  userEmail: string
): { subject: string; html: string } {
  return {
    subject: `New M-Pesa Payment: KES ${amount.toLocaleString()}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #1B4332; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .content { padding: 20px; background: #FAF9F6; }
          .urgent { background: #B8956B; color: white; padding: 10px; text-align: center; font-weight: bold; margin-bottom: 15px; }
          .details { background: white; padding: 15px; border-radius: 4px; margin: 15px 0; }
          .label { font-weight: bold; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="content">
            <div class="urgent">ACTION REQUIRED</div>
            <h2>New M-Pesa Payment Received</h2>
            <div class="details">
              <p><span class="label">Amount:</span> KES ${amount.toLocaleString()}</p>
              <p><span class="label">Transaction ID:</span> ${transactionId}</p>
              <p><span class="label">Phone:</span> ${phone}</p>
              <p><span class="label">User Email:</span> ${userEmail}</p>
              <p><span class="label">Time:</span> ${new Date().toLocaleString()}</p>
            </div>
            <p>Please verify this payment and update the order status.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }
}