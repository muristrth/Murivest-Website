import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createHash } from "crypto";
import PDFDocument from "pdfkit";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// ── NDA text (keep in sync with frontend) ─────────────────────
const NDA_TEXT = `NON-DISCLOSURE AND CONFIDENTIALITY AGREEMENT

Murivest Realty Ltd ("Murivest") and the undersigned Recipient enter into this
Agreement to protect confidential information relating to property transactions,
investment opportunities, and advisory mandates.

1. CONFIDENTIAL INFORMATION
All non-public information including financial statements, rent rolls, lease agreements,
ownership structures, technical reports, valuation reports, asking prices, and investment
memoranda is strictly confidential.

2. RECIPIENT OBLIGATIONS
The Recipient agrees to: hold all Confidential Information in strict confidence; not
disclose to any third party without prior written consent; use solely for evaluating
the specific investment opportunity; not circumvent Murivest to transact directly with
any introduced counterparty.

3. MURIVEST OBLIGATIONS
Murivest commits to: not disclose investor identity without express consent; not share
investor financial capacity with competing parties; maintain secure encrypted storage
per Kenya's Data Protection Act, 2019.

4. ELECTRONIC SIGNATURE
This Agreement is legally binding under Kenya's Information and Communications Act
(Cap. 411A). Signing process includes: OTP identity verification, IP logging,
timestamp recording, and cryptographic document hashing.

5. TERM
24 months from execution date. Confidentiality obligations survive termination.

6. GOVERNING LAW
Laws of Kenya. Exclusive jurisdiction of Kenyan courts, Nairobi seat.`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      email,
      fullName,
      signatureData,
      signatureMethod,
      signatureFont,
    } = body;

    if (!email || !fullName || !signatureData) {
      return NextResponse.json(
        { error: "Email, full name, and signature are required." },
        { status: 400 }
      );
    }

    const ipAddress =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    const userAgent = req.headers.get("user-agent") || null;
    const signedAt = new Date();

    // ── Fetch user and metadata ──────────────────────────────
    const { data: user, error: invErr } = await supabase
      .from("profiles")
      .select("id, email")
      .eq("email", email.toLowerCase())
      .single();

    if (invErr || !user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    // Get full user data including metadata from auth
    const { data: authUser, error: authErr } = await supabase.auth.admin.getUserById(user.id);
    if (authErr || !authUser.user) {
      return NextResponse.json({ error: "Could not verify user." }, { status: 500 });
    }

    const userMetadata = authUser.user.user_metadata || {};
    const isVerified = userMetadata.investor_status === 'verified';
    
    if (!isVerified) {
      return NextResponse.json(
        { error: "Identity has not been verified. Please complete OTP verification." },
        { status: 403 }
      );
    }

    const company = userMetadata.company || null;

    // ── Fetch active NDA document ──────────────────────────────
    const { data: ndaDoc } = await supabase
      .from("nda_documents")
      .select("id, version, title")
      .eq("is_active", true)
      .eq("document_type", "investor_nda")
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    // ── Compute document hash ──────────────────────────────────
    const documentHash = createHash("sha256")
      .update(NDA_TEXT + email + signedAt.toISOString())
      .digest("hex");

    // ── Generate signed PDF ────────────────────────────────────
    let pdfBuffer: Buffer | null = null;
    let signedPdfPath: string | null = null;
    let signedPdfHash: string | null = null;

    try {
      pdfBuffer = await generateSignedPDF({
        fullName,
        email,
        company,
        signatureData,
        signatureMethod,
        signedAt,
        ipAddress,
        documentHash,
        ndaVersion: ndaDoc?.version || "v1.0",
      });

      signedPdfHash = createHash("sha256").update(pdfBuffer).digest("hex");

      // ── Upload PDF to Supabase Storage ─────────────────────
      const pdfPath = `nda-signed/${user.id}/${signedAt.getTime()}-nda.pdf`;
      const { error: uploadError } = await supabase.storage
        .from("murivest-documents")
        .upload(pdfPath, pdfBuffer, {
          contentType: "application/pdf",
          upsert: false,
        });

      if (!uploadError) {
        signedPdfPath = pdfPath;
      }
    } catch (pdfErr) {
      console.error("PDF generation error:", pdfErr);
      // Non-fatal: continue without PDF
    }

    // ── Get signed PDF public URL ──────────────────────────────
    let signedPdfUrl: string | null = null;
    if (signedPdfPath) {
      const { data: urlData } = supabase.storage
        .from("murivest-documents")
        .getPublicUrl(signedPdfPath);
      signedPdfUrl = urlData?.publicUrl || null;
    }

    // ── Insert NDA signature record ────────────────────────────
    const { data: sigRecord, error: sigError } = await supabase
      .from("nda_signatures")
      .insert({
        user_id: user.id,
        nda_document_id: ndaDoc?.id || null,
        signer_full_name: fullName,
        signer_email: email.toLowerCase(),
        signer_company: company,
        signature_method: signatureMethod || "drawn",
        signature_data: signatureData,
        signature_font: signatureFont || null,
        otp_verified: true,
        email_verified: true,
        consent_accepted: true,
        agreed_at: signedAt.toISOString(),
        ip_address: ipAddress,
        status: "signed",
        signed_at: signedAt.toISOString(),
        expires_at: new Date(
          signedAt.getTime() + 24 * 30 * 24 * 60 * 60 * 1000
        ).toISOString(), // 24 months
      })
      .select("id")
      .single();

    if (sigError || !sigRecord) {
      console.error("Signature insert error:", sigError);
      return NextResponse.json({ error: "Could not record signature." }, { status: 500 });
    }

    // ── Grant portal access via stored procedure ───────────────
    const { error: grantError } = await supabase.rpc("grant_portal_access", {
      p_id: user.id,
      p_signature_id: sigRecord.id,
    });

    if (grantError) {
      console.error("Grant portal access error:", grantError);
    }

    // ── Send confirmation email ────────────────────────────────
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Murivest Realty <nda@murivest.com>",
        to: email,
        subject: "Confidentiality Agreement Executed — Murivest Realty",
        html: `
          <!DOCTYPE html>
          <html>
            <head><meta charset="utf-8" /><style>
              body { font-family: Georgia, serif; background: #f5f0e8; margin: 0; padding: 40px 20px; }
              .card { max-width: 520px; margin: 0 auto; background: #0d0d0b; padding: 48px; }
              .logo { font-family: monospace; font-size: 11px; letter-spacing: 0.3em; color: #b8962e; margin-bottom: 32px; }
              h2 { color: #f5f0e8; font-size: 22px; font-weight: 300; margin: 0 0 16px; }
              p { color: rgba(245,240,232,0.6); font-size: 13px; line-height: 1.8; margin: 0 0 16px; font-family: monospace; }
              .badge { background: rgba(26,74,26,0.3); border: 1px solid rgba(26,74,26,0.5); padding: 12px 16px; margin: 24px 0; font-family: monospace; font-size: 11px; letter-spacing: 0.1em; color: #6dbf67; }
              table { width: 100%; border-collapse: collapse; margin: 20px 0; }
              td { padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-family: monospace; font-size: 11px; }
              td:first-child { color: rgba(245,240,232,0.4); letter-spacing: 0.1em; }
              td:last-child { color: rgba(245,240,232,0.8); text-align: right; }
              .cta { display: block; background: #b8962e; color: #0d0d0b; text-decoration: none; padding: 16px; text-align: center; font-family: monospace; font-size: 11px; letter-spacing: 0.2em; margin-top: 24px; }
              .footer { max-width: 520px; margin: 16px auto 0; font-family: monospace; font-size: 10px; color: rgba(13,13,11,0.4); text-align: center; }
            </style></head>
            <body>
              <div class="card">
                <div class="logo">MURIVEST REALTY LTD</div>
                <h2>Agreement Executed</h2>
                <p>Dear ${fullName},</p>
                <p>Your Investor Confidentiality Agreement has been successfully executed and recorded. Your portal access is now active.</p>
                <div class="badge">✓ EXECUTED — LEGALLY BINDING</div>
                <table>
                  <tr><td>SIGNATORY</td><td>${fullName}</td></tr>
                  <tr><td>DATE</td><td>${signedAt.toLocaleString("en-KE")}</td></tr>
                  <tr><td>DOCUMENT</td><td>MVT Investor NDA ${ndaDoc?.version || "v1.0"}</td></tr>
                  <tr><td>VERIFICATION</td><td>Email OTP · IP Logged</td></tr>
                  <tr><td>DOCUMENT HASH</td><td style="word-break:break-all;font-size:9px">${documentHash.substring(0, 32)}…</td></tr>
                  <tr><td>EXPIRY</td><td>24 months from execution</td></tr>
                </table>
                <p>You may now access the Murivest Investor Portal and view all available investment opportunities.</p>
                <a href="${process.env.NEXT_PUBLIC_SITE_URL}/investor-portal" class="cta">Enter Investor Portal →</a>
              </div>
              <div class="footer">© ${new Date().getFullYear()} Murivest Realty Ltd · Nairobi, Kenya · Governed by the Laws of Kenya</div>
            </body>
          </html>
        `,
      });

      // Update confirmation sent flag
      await supabase
        .from("nda_signatures")
        .update({ confirmation_sent_at: new Date().toISOString() })
        .eq("id", sigRecord.id);
    } catch (emailErr) {
      console.error("Confirmation email error:", emailErr);
    }

    return NextResponse.json({
      success: true,
      signatureId: sigRecord.id,
      documentHash,
      signedPdfUrl,
      signedAt: signedAt.toISOString(),
      message: "Agreement executed. Portal access granted.",
    });
  } catch (error) {
    console.error("Sign route error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

// ── PDF Generator ──────────────────────────────────────────────
async function generateSignedPDF(params: {
  fullName: string;
  email: string;
  company: string | null;
  signatureData: string;
  signatureMethod: string;
  signedAt: Date;
  ipAddress: string;
  documentHash: string;
  ndaVersion: string;
}): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const doc = new PDFDocument({ margin: 72, size: "A4" });

    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const gold = "#b8962e";
    const ink = "#0d0d0b";
    const muted = "#6b6358";

    // Header bar
    doc.rect(0, 0, doc.page.width, 80).fill(ink);
    doc
      .fillColor(gold)
      .font("Helvetica")
      .fontSize(8)
      .text("MURIVEST REALTY LTD", 72, 28, { characterSpacing: 3 });
    doc
      .fillColor("rgba(245,240,232,0.5)")
      .fontSize(7)
      .text(
        `INVESTOR CONFIDENTIALITY AGREEMENT · ${params.ndaVersion}`,
        72,
        44,
        { characterSpacing: 1 }
      );

    // Reference
    doc
      .fillColor(muted)
      .fontSize(7)
      .text(
        `MVT-NDA-${params.signedAt.getFullYear()}-${Date.now().toString(36).toUpperCase()}`,
        doc.page.width - 200,
        28,
        { width: 128, align: "right" }
      );

    doc.moveDown(3);

    // Title
    doc
      .fillColor(ink)
      .font("Helvetica-Bold")
      .fontSize(18)
      .text("NON-DISCLOSURE AND", { align: "center" });
    doc.font("Helvetica").fontSize(18).text("CONFIDENTIALITY AGREEMENT", { align: "center" });

    doc.moveDown(1);
    doc.moveTo(72, doc.y).lineTo(doc.page.width - 72, doc.y).strokeColor(gold).lineWidth(1).stroke();
    doc.moveDown(1);

    // NDA body
    doc
      .fillColor(muted)
      .font("Helvetica")
      .fontSize(9.5)
      .lineGap(4)
      .text(NDA_TEXT, { align: "justify" });

    doc.moveDown(2);
    doc.moveTo(72, doc.y).lineTo(doc.page.width - 72, doc.y).strokeColor(gold).lineWidth(0.5).stroke();
    doc.moveDown(1);

    // Execution block
    doc.fillColor(ink).font("Helvetica-Bold").fontSize(10).text("EXECUTION");
    doc.moveDown(0.5);

    const fields = [
      ["Signatory", params.fullName],
      ["Email", params.email],
      ["Entity", params.company || "Individual"],
      ["Date & Time", params.signedAt.toLocaleString("en-KE")],
      ["IP Address", params.ipAddress],
      ["Signature Method", params.signatureMethod],
      ["Document Hash", params.documentHash.substring(0, 48) + "…"],
      ["Verification", "Email OTP Verified"],
    ];

    fields.forEach(([label, value]) => {
      doc.font("Helvetica-Bold").fontSize(7.5).fillColor(muted).text(label.toUpperCase(), { continued: true, characterSpacing: 0.5 });
      doc.font("Helvetica").fillColor(ink).text(`   ${value}`);
      doc.moveDown(0.3);
    });

    doc.moveDown(1);

    // Signature area
    doc.rect(72, doc.y, doc.page.width - 144, 100).strokeColor(gold).lineWidth(0.5).stroke();
    const sigBoxY = doc.y;
    doc.fillColor(muted).fontSize(7).text("SIGNATURE", 82, sigBoxY + 8, { characterSpacing: 1 });

    // Embed signature image if drawn
    if (params.signatureMethod === "drawn" && params.signatureData.startsWith("data:image")) {
      try {
        const base64Data = params.signatureData.replace(/^data:image\/\w+;base64,/, "");
        const imgBuffer = Buffer.from(base64Data, "base64");
        doc.image(imgBuffer, 82, sigBoxY + 20, { width: 200, height: 60 });
      } catch {
        // Fallback to typed name
        doc.font("Helvetica-Oblique").fontSize(22).fillColor(ink).text(params.fullName, 82, sigBoxY + 35);
      }
    } else {
      // Typed signature
      doc.font("Helvetica-Oblique").fontSize(22).fillColor(ink).text(params.signatureData || params.fullName, 82, sigBoxY + 35);
    }

    doc.moveDown(7);

    // Footer
    doc
      .rect(0, doc.page.height - 50, doc.page.width, 50)
      .fill("#f5f0e8");
    doc
      .fillColor(muted)
      .font("Helvetica")
      .fontSize(7)
      .text(
        `© ${params.signedAt.getFullYear()} Murivest Realty Ltd · Nairobi, Kenya · Governed by the Laws of Kenya · This document is legally binding`,
        72,
        doc.page.height - 32,
        { align: "center", width: doc.page.width - 144 }
      );

    doc.end();
  });
}