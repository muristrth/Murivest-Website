import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

const emailBody = `
### AUTHORITY TO SELL – FORMAL ACKNOWLEDGMENT
**Reference:** ATS-${data.titleNumber.slice(-5)}-${new Date().getFullYear()}

This email serves as an official confirmation that **Murivest Realty Limited** has been granted the formal authority to market and facilitate the sale of the property detailed below.

---

### 1. VENDOR INFORMATION (The Seller)
* **Full Name:** ${data.vendorName}
* **Identification No:** ${data.vendorId}
* **Primary Contact:** ${data.phone}
* **Email Address:** ${data.email}

### 2. PROPERTY & TRANSACTION DETAILS
* **Property Title Number:** ${data.titleNumber}
* **Physical Location:** ${data.location}
* **Listing Price:** ${data.price}
* **Professional Commission:** ${data.commission}

---

### 3. AUTHORIZATION & VERIFICATION
By receipt of this acknowledgment, the Vendor confirms that the information provided is accurate and that they possess the legal right to authorize the sale of the aforementioned property. 

**Murivest Realty Administration:** Please cross-reference the Title Number with the provided Identification to verify ownership authenticity before finalizing the ATS document for signature.

*This communication serves as a binding record of the marketing commencement date.*

---
**Murivest Realty Limited**
*Transforming Real Estate Transactions*
`;

  await transporter.sendMail({
    from: `"Murivest Realty Limited" <${process.env.SMTP_USER}>`,
    to: [data.email, 'murivestrealty@gmail.com'],
    subject: 'Authority to Sell – Formal Acknowledgment',
    text: emailBody,
  });

  return NextResponse.json({ success: true });
}
