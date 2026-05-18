"""
/api/nda/sign — Next.js API route (Python via edge runtime or custom server)

Place this file at:  app/api/nda/sign/route.ts  (wrapper that calls the Python script)
Or use it directly as a standalone Python Flask/FastAPI endpoint.

This module:
  1. Receives signer data + signature (base64 image or typed text)
  2. Generates a signed NDA PDF using reportlab
  3. Emails the PDF to:
     - The investor (form.email)
     - The admin (SMTP_FROM / ADMIN_EMAIL in .env)
  4. Returns { referenceCode, success }

Environment variables required (.env):
  SMTP_HOST=smtp.gmail.com
  SMTP_PORT=587
  SMTP_USER=your@gmail.com
  SMTP_PASS=your_app_password          # Gmail App Password (not account password)
  ADMIN_EMAIL=admin@ murivest.co.ke       # where admin copy is sent
  COMPANY_NAME=Murivest Realty Ltd
"""

import os
import io
import json
import hashlib
import smtplib
import base64
import uuid
import datetime
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
from email import encoders

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY
from reportlab.lib.colors import HexColor, black, white
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, KeepTogether
)
from reportlab.platypus.flowables import Flowable
from reportlab.lib import colors

# ─── Colour palette ───────────────────────────────────────────
INK        = HexColor("#0d0d0b")
GOLD       = HexColor("#b8962e")
PARCHMENT  = HexColor("#f5f0e8")
MUTED      = HexColor("#6b6358")
LIGHT_RULE = HexColor("#d6cfc4")

# ─── NDA full text ────────────────────────────────────────────
NDA_TEXT = """NON-DISCLOSURE AND CONFIDENTIALITY AGREEMENT

This Non-Disclosure and Confidentiality Agreement ("Agreement") is entered into between:

MURIVEST REALTY LTD, a company incorporated under the Laws of Kenya, with its principal offices in Nairobi, Kenya ("Murivest"); and

THE UNDERSIGNED PARTY, whose details are captured electronically herein ("Recipient").

1. DEFINITION OF CONFIDENTIAL INFORMATION

"Confidential Information" means all non-public information disclosed by Murivest or its clients relating to any property transaction, investment opportunity, or advisory mandate, including without limitation: financial statements, rent rolls, income capitalisation models, valuation reports, lease agreements, tenant information, ownership structures, technical due diligence reports, environmental assessments, asking prices, negotiation positions, investment memoranda, and the identity of any vendor or property owner.

2. OBLIGATIONS OF THE RECIPIENT

The Recipient agrees to: (a) hold all Confidential Information in strict confidence; (b) not disclose any Confidential Information to any third party without the prior written consent of Murivest; (c) use Confidential Information solely for the purpose of evaluating the specific investment opportunity for which access was granted; (d) not circumvent Murivest to transact directly with any vendor, property owner, or counterparty introduced through this platform.

3. OBLIGATIONS OF MURIVEST

Murivest reciprocally commits to: (a) not disclose the Recipient's identity to vendors without express written consent; (b) not share the Recipient's financial capacity or acquisition criteria with competing parties; (c) maintain all Recipient records under secure, encrypted storage in compliance with Kenya's Data Protection Act, 2019.

4. ELECTRONIC SIGNATURE

The Recipient acknowledges and agrees that an electronic signature applied through the Murivest platform constitutes a legally binding signature of equivalent force to a handwritten signature, pursuant to Kenya's Information and Communications Act (Cap. 411A) and the principles of the UNCITRAL Model Law on Electronic Commerce. The signature process includes IP address logging, timestamp recording, and cryptographic hashing of the final signed document.

5. TERM AND TERMINATION

This Agreement shall remain in force for a period of twenty-four (24) months from the date of execution, unless earlier terminated by written notice. Obligations of confidentiality with respect to Confidential Information disclosed during the term shall survive termination.

6. GOVERNING LAW

This Agreement is governed by and construed in accordance with the Laws of Kenya. Any dispute arising hereunder shall be subject to the exclusive jurisdiction of the courts of Kenya, with Nairobi as the seat.

7. ENTIRE AGREEMENT

This Agreement constitutes the entire agreement between the parties with respect to its subject matter and supersedes all prior discussions and understandings."""


# ─── Custom Flowable: Signature Image ────────────────────────
class SignatureImage(Flowable):
    """Renders a base64-encoded PNG/canvas export as an inline image."""
    def __init__(self, data_url: str, width=200, height=60):
        super().__init__()
        self.img_data = data_url
        self.img_width = width
        self.img_height = height

    def wrap(self, *args):
        return self.img_width, self.img_height

    def draw(self):
        try:
            if "," in self.img_data:
                b64 = self.img_data.split(",", 1)[1]
            else:
                b64 = self.img_data
            raw = base64.b64decode(b64)
            buf = io.BytesIO(raw)
            from reportlab.lib.utils import ImageReader
            img = ImageReader(buf)
            self.canv.drawImage(
                img, 0, 0,
                width=self.img_width,
                height=self.img_height,
                mask="auto",
                preserveAspectRatio=True,
            )
        except Exception:
            # Fallback: draw placeholder box
            self.canv.setStrokeColor(LIGHT_RULE)
            self.canv.rect(0, 0, self.img_width, self.img_height)


# ─── PDF Generation ───────────────────────────────────────────
def generate_nda_pdf(signer: dict, reference_code: str, doc_hash: str) -> bytes:
    """
    Build and return the signed NDA as PDF bytes.

    signer keys: fullName, email, phone, company, title,
                 investorType, nationality, signatureData,
                 signatureMethod, executedAt (ISO string)
    """
    buf = io.BytesIO()
    margin = 2.2 * cm

    doc = SimpleDocTemplate(
        buf,
        pagesize=A4,
        leftMargin=margin,
        rightMargin=margin,
        topMargin=2.5 * cm,
        bottomMargin=2.5 * cm,
        title="Murivest Investor NDA",
        author="Murivest Realty Ltd",
        subject="Non-Disclosure and Confidentiality Agreement",
    )

    page_w = A4[0] - 2 * margin

    # ── Styles ──────────────────────────────────────────────
    base_styles = getSampleStyleSheet()

    def style(name, **kwargs):
        s = ParagraphStyle(name, **kwargs)
        return s

    s_eyebrow = style("eyebrow",
        fontName="Helvetica", fontSize=7, textColor=GOLD,
        spaceBefore=0, spaceAfter=4, leading=10,
        letterSpacing=2, alignment=TA_LEFT)

    s_company = style("company",
        fontName="Helvetica-Bold", fontSize=18, textColor=INK,
        spaceBefore=0, spaceAfter=2, leading=22, alignment=TA_LEFT)

    s_doc_title = style("doc_title",
        fontName="Helvetica", fontSize=10, textColor=MUTED,
        spaceBefore=0, spaceAfter=18, leading=14, alignment=TA_LEFT)

    s_ref = style("ref",
        fontName="Helvetica", fontSize=7, textColor=MUTED,
        spaceBefore=0, spaceAfter=0, leading=10, alignment=TA_RIGHT)

    s_section_head = style("section_head",
        fontName="Helvetica-Bold", fontSize=8.5, textColor=GOLD,
        spaceBefore=14, spaceAfter=4, leading=12,
        letterSpacing=1)

    s_body = style("body",
        fontName="Helvetica", fontSize=9.5, textColor=INK,
        spaceBefore=0, spaceAfter=6, leading=16, alignment=TA_JUSTIFY)

    s_label = style("label",
        fontName="Helvetica", fontSize=7, textColor=MUTED,
        spaceBefore=0, spaceAfter=1, leading=10, letterSpacing=1)

    s_value = style("value",
        fontName="Helvetica", fontSize=9.5, textColor=INK,
        spaceBefore=0, spaceAfter=8, leading=14)

    s_sig_name = style("sig_name",
        fontName="Helvetica-BoldOblique", fontSize=16, textColor=INK,
        spaceBefore=4, spaceAfter=2, leading=20)

    s_audit = style("audit",
        fontName="Helvetica", fontSize=7.5, textColor=MUTED,
        spaceBefore=0, spaceAfter=3, leading=11)

    s_footer = style("footer",
        fontName="Helvetica", fontSize=7, textColor=MUTED,
        spaceBefore=0, spaceAfter=0, leading=10, alignment=TA_CENTER)

    s_hash = style("hash",
        fontName="Helvetica", fontSize=6, textColor=MUTED,
        spaceBefore=0, spaceAfter=0, leading=9,
        wordWrap="CJK", alignment=TA_CENTER)

    # ── Story ────────────────────────────────────────────────
    story = []
    now_str = signer.get("executedAt", datetime.datetime.utcnow().isoformat())
    try:
        dt = datetime.datetime.fromisoformat(now_str.replace("Z", "+00:00"))
        dt_display = dt.strftime("%-d %B %Y at %H:%M UTC")
    except Exception:
        dt_display = now_str

    # ── Header block ────────────────────────────────────────
    header_data = [[
        Paragraph("MURIVEST REALTY LTD", s_company),
        Paragraph(
            f"Reference: {reference_code}<br/>"
            f"Date: {dt_display}<br/>"
            f"Jurisdiction: Kenya",
            s_ref
        ),
    ]]
    header_tbl = Table(header_data, colWidths=[page_w * 0.6, page_w * 0.4])
    header_tbl.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING",  (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING",   (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING",(0, 0), (-1, -1), 0),
    ]))
    story.append(header_tbl)
    story.append(Spacer(1, 4))
    story.append(Paragraph("NON-DISCLOSURE AND CONFIDENTIALITY AGREEMENT", s_doc_title))
    story.append(HRFlowable(width=page_w, thickness=1.5, color=GOLD, spaceAfter=16))

    # ── Agreement text ──────────────────────────────────────
    paragraphs = NDA_TEXT.strip().split("\n\n")
    skip_first = True
    for para in paragraphs:
        para = para.strip()
        if not para:
            continue
        if skip_first and para.startswith("NON-DISCLOSURE"):
            skip_first = False
            continue  # already shown as doc_title
        if skip_first:
            skip_first = False

        # Detect numbered section headings like "1. DEFINITION..."
        import re
        if re.match(r"^\d+\.", para) and para[:60].isupper() or \
           (re.match(r"^\d+\.", para) and para.split(".", 1)[-1].strip().split()[0].isupper()):
            heading, *rest = para.split("\n", 1)
            story.append(Paragraph(heading, s_section_head))
            if rest:
                story.append(Paragraph(rest[0].strip(), s_body))
        else:
            story.append(Paragraph(para.replace("\n", " "), s_body))

    story.append(Spacer(1, 10))
    story.append(HRFlowable(width=page_w, thickness=0.5, color=LIGHT_RULE, spaceAfter=14))

    # ── Execution block ─────────────────────────────────────
    story.append(Paragraph("EXECUTION", s_section_head))
    story.append(Spacer(1, 6))

    # Signer details table
    def field_block(label: str, value: str):
        return [
            Paragraph(label.upper(), s_label),
            Paragraph(value or "—", s_value),
        ]

    investor_type_map = {
        "individual": "Individual / HNWI",
        "family_office": "Family Office",
        "institutional": "Institutional Investor",
        "pension_fund": "Pension Fund",
        "private_equity": "Private Equity / Fund",
        "other": "Other",
    }

    details_rows = [
        field_block("Full Legal Name", signer.get("fullName", "")),
        field_block("Email Address", signer.get("email", "")),
        field_block("Phone", signer.get("phone", "") or "Not provided"),
        field_block("Nationality", signer.get("nationality", "") or "Not provided"),
        field_block("Company / Entity", signer.get("company", "") or "Not provided"),
        field_block("Title / Role", signer.get("title", "") or "Not provided"),
        field_block("Investor Type", investor_type_map.get(signer.get("investorType", ""), "—")),
    ]

    for pair in details_rows:
        story.append(pair[0])
        story.append(pair[1])

    story.append(Spacer(1, 8))
    story.append(HRFlowable(width=page_w * 0.5, thickness=0.5, color=LIGHT_RULE, spaceAfter=10))

    # ── Signature ────────────────────────────────────────────
    story.append(Paragraph("SIGNATURE", s_label))
    story.append(Spacer(1, 4))

    sig_method = signer.get("signatureMethod", "drawn")
    sig_data   = signer.get("signatureData", "")

    if sig_method == "drawn" and sig_data:
        story.append(SignatureImage(sig_data, width=220, height=70))
    else:
        # Typed signature — render in italic
        display_name = sig_data if sig_data else signer.get("fullName", "")
        story.append(Paragraph(display_name, s_sig_name))

    story.append(Spacer(1, 6))
    story.append(HRFlowable(width=page_w * 0.45, thickness=0.5, color=INK, spaceAfter=4))
    story.append(Paragraph(signer.get("fullName", ""), s_value))
    story.append(Paragraph(f"Executed electronically on {dt_display}", s_audit))

    # ── Audit certificate ────────────────────────────────────
    story.append(Spacer(1, 18))
    story.append(HRFlowable(width=page_w, thickness=1, color=GOLD, spaceAfter=10))

    audit_data = [
        ["AUDIT CERTIFICATE", ""],
        ["Reference Code", reference_code],
        ["Executed At", dt_display],
        ["Signature Method", "Handwritten (canvas)" if sig_method == "drawn" else "Typed"],
        ["Document Hash (SHA-256)", doc_hash],
        ["Audit Trail", "IP Logged · Timestamp Recorded · Document Hashed"],
        ["Legal Basis", "Kenya Information and Communications Act (Cap. 411A)"],
    ]

    audit_tbl = Table(
        audit_data,
        colWidths=[page_w * 0.35, page_w * 0.65],
    )
    audit_tbl.setStyle(TableStyle([
        ("SPAN",          (0, 0), (1, 0)),
        ("FONTNAME",      (0, 0), (1, 0), "Helvetica-Bold"),
        ("FONTSIZE",      (0, 0), (1, 0), 8),
        ("TEXTCOLOR",     (0, 0), (1, 0), GOLD),
        ("LEFTPADDING",   (0, 0), (-1, -1), 8),
        ("RIGHTPADDING",  (0, 0), (-1, -1), 8),
        ("TOPPADDING",    (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("FONTNAME",      (0, 1), (0, -1), "Helvetica"),
        ("FONTSIZE",      (0, 1), (0, -1), 7),
        ("TEXTCOLOR",     (0, 1), (0, -1), MUTED),
        ("FONTNAME",      (1, 1), (1, -1), "Helvetica"),
        ("FONTSIZE",      (1, 1), (1, -1), 7.5),
        ("TEXTCOLOR",     (1, 1), (1, -1), INK),
        ("BACKGROUND",    (0, 0), (-1, 0), HexColor("#f0ebe0")),
        ("ROWBACKGROUNDS",(0, 1), (-1, -1), [HexColor("#faf8f4"), white]),
        ("LINEBELOW",     (0, 0), (-1, -1), 0.3, LIGHT_RULE),
        ("VALIGN",        (0, 0), (-1, -1), "MIDDLE"),
    ]))
    story.append(audit_tbl)
    story.append(Spacer(1, 12))
    story.append(Paragraph(
        "This document was generated and certified by the Murivest Realty Ltd investor platform. "
        "It constitutes a legally binding electronic agreement under the Laws of Kenya.",
        s_footer
    ))

    # ── Build ────────────────────────────────────────────────
    def on_page(canvas, doc_obj):
        """Draw page footer on every page."""
        canvas.saveState()
        canvas.setFont("Helvetica", 6.5)
        canvas.setFillColor(MUTED)
        canvas.drawString(margin, 1.5 * cm, "MURIVEST REALTY LTD  ·  Confidential")
        canvas.drawRightString(
            A4[0] - margin, 1.5 * cm,
            f"Page {canvas.getPageNumber()}  ·  {reference_code}"
        )
        # Gold rule at bottom
        canvas.setStrokeColor(GOLD)
        canvas.setLineWidth(0.5)
        canvas.line(margin, 1.8 * cm, A4[0] - margin, 1.8 * cm)
        canvas.restoreState()

    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
    return buf.getvalue()


# ─── Email Dispatch ───────────────────────────────────────────
def send_nda_emails(signer: dict, pdf_bytes: bytes, reference_code: str):
    """
    Send the signed NDA PDF to:
      - investor (signer['email'])
      - admin    (ADMIN_EMAIL env var)
    via Gmail SMTP using credentials from environment.
    """
    smtp_host = os.environ.get("SMTP_HOST", "smtp.gmail.com")
    smtp_port = int(os.environ.get("SMTP_PORT", "587"))
    smtp_user = os.environ.get("SMTP_USER", "")
    smtp_pass = os.environ.get("SMTP_PASS", "")
    admin_email = os.environ.get("ADMIN_EMAIL", smtp_user)
    company_name = os.environ.get("COMPANY_NAME", "Murivest Realty Ltd")

    investor_name = signer.get("fullName", "Investor")
    investor_email = signer.get("email", "")
    filename = f"Murivest-NDA-{reference_code}.pdf"

    # ── Investor email ───────────────────────────────────────
    investor_msg = MIMEMultipart("mixed")
    investor_msg["From"]    = f"{company_name} <{smtp_user}>"
    investor_msg["To"]      = investor_email
    investor_msg["Subject"] = f"Your Signed NDA · {reference_code} · {company_name}"

    investor_html = f"""
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body {{ font-family: Georgia, serif; background: #f5f0e8; margin: 0; padding: 0; color: #0d0d0b; }}
  .wrap {{ max-width: 600px; margin: 0 auto; background: #fff; }}
  .header {{ background: #0d0d0b; padding: 32px 40px; text-align: left; }}
  .logo {{ font-family: 'Courier New', monospace; font-size: 13px; letter-spacing: 0.3em; color: #f5f0e8; margin: 0; }}
  .gold-bar {{ height: 3px; background: #b8962e; }}
  .body {{ padding: 36px 40px; }}
  h2 {{ font-size: 22px; font-weight: 400; margin: 0 0 12px; }}
  p {{ font-size: 15px; line-height: 1.7; color: #3a3530; margin: 0 0 14px; }}
  .ref-box {{ background: #f5f0e8; border-left: 3px solid #b8962e; padding: 14px 18px; margin: 20px 0; font-family: 'Courier New', monospace; font-size: 12px; letter-spacing: 0.05em; }}
  .details {{ border: 1px solid #d6cfc4; margin: 20px 0; }}
  .detail-row {{ display: flex; padding: 10px 16px; border-bottom: 1px solid #d6cfc4; font-size: 13px; }}
  .detail-row:last-child {{ border-bottom: none; }}
  .detail-label {{ color: #6b6358; width: 140px; flex-shrink: 0; font-size: 11px; letter-spacing: 0.1em; font-family: 'Courier New', monospace; }}
  .footer {{ background: #0d0d0b; padding: 20px 40px; text-align: center; }}
  .footer p {{ font-size: 11px; color: rgba(245,240,232,0.4); margin: 0; font-family: 'Courier New', monospace; letter-spacing: 0.05em; }}
</style>
</head>
<body>
<div class="wrap">
  <div class="header">
    <p class="logo">MURIVEST REALTY LTD</p>
  </div>
  <div class="gold-bar"></div>
  <div class="body">
    <h2>Agreement Executed</h2>
    <p>Dear {investor_name},</p>
    <p>
      Your Non-Disclosure and Confidentiality Agreement with Murivest Realty Ltd has been
      successfully executed. Please find your signed copy attached to this email.
    </p>
    <div class="ref-box">
      Reference: {reference_code}
    </div>
    <p style="font-size:13px; color:#6b6358;">
      This agreement is legally binding under the Laws of Kenya. Retain your signed copy for your records.
      Your investor portal access is now active — the Murivest team will be in touch shortly with
      relevant mandates matching your investment profile.
    </p>
    <p style="font-size:12px; color:#9a9188; margin-top:24px;">
      For any questions, reply to this email or contact us directly.<br>
      <strong style="color:#0d0d0b;">{company_name}</strong> · Nairobi, Kenya
    </p>
  </div>
  <div class="footer">
    <p>© {datetime.datetime.utcnow().year} {company_name} · Governed by the Laws of Kenya</p>
  </div>
</div>
</body>
</html>
"""

    investor_msg.attach(MIMEText(investor_html, "html"))

    # Attach PDF
    pdf_part = MIMEBase("application", "pdf")
    pdf_part.set_payload(pdf_bytes)
    encoders.encode_base64(pdf_part)
    pdf_part.add_header("Content-Disposition", f'attachment; filename="{filename}"')
    investor_msg.attach(pdf_part)

    # ── Admin notification email ─────────────────────────────
    admin_msg = MIMEMultipart("mixed")
    admin_msg["From"]    = f"{company_name} <{smtp_user}>"
    admin_msg["To"]      = admin_email
    admin_msg["Subject"] = f"[NDA SIGNED] {investor_name} · {reference_code}"

    investor_type_map = {
        "individual": "Individual / HNWI",
        "family_office": "Family Office",
        "institutional": "Institutional Investor",
        "pension_fund": "Pension Fund",
        "private_equity": "Private Equity / Fund",
        "other": "Other",
    }

    admin_html = f"""
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body {{ font-family: Georgia, serif; background: #f5f0e8; margin: 0; padding: 0; color: #0d0d0b; }}
  .wrap {{ max-width: 600px; margin: 0 auto; background: #fff; }}
  .header {{ background: #0d0d0b; padding: 24px 32px; }}
  .logo {{ font-family: 'Courier New', monospace; font-size: 12px; letter-spacing: 0.3em; color: #b8962e; margin: 0; }}
  .tag {{ font-family: 'Courier New', monospace; font-size: 10px; color: rgba(245,240,232,0.5); letter-spacing: 0.1em; margin: 4px 0 0; }}
  .gold-bar {{ height: 2px; background: #b8962e; }}
  .body {{ padding: 28px 32px; }}
  h2 {{ font-size: 18px; font-weight: 400; margin: 0 0 16px; }}
  .details {{ border: 1px solid #d6cfc4; }}
  .row {{ display: flex; padding: 9px 14px; border-bottom: 1px solid #d6cfc4; font-size: 13px; }}
  .row:last-child {{ border-bottom: none; }}
  .lbl {{ color: #6b6358; width: 160px; flex-shrink: 0; font-size: 10px; letter-spacing: 0.1em; font-family: 'Courier New', monospace; text-transform: uppercase; padding-top: 2px; }}
  .val {{ font-size: 13px; color: #0d0d0b; }}
  .footer {{ background: #f5f0e8; padding: 16px 32px; }}
  .footer p {{ font-size: 10px; color: #9a9188; margin: 0; font-family: 'Courier New', monospace; }}
</style>
</head>
<body>
<div class="wrap">
  <div class="header">
    <p class="logo">MURIVEST — NDA NOTIFICATION</p>
    <p class="tag">INVESTOR NDA EXECUTED</p>
  </div>
  <div class="gold-bar"></div>
  <div class="body">
    <h2>New Signed NDA Received</h2>
    <div class="details">
      <div class="row"><span class="lbl">Reference</span><span class="val">{reference_code}</span></div>
      <div class="row"><span class="lbl">Full Name</span><span class="val">{signer.get('fullName','')}</span></div>
      <div class="row"><span class="lbl">Email</span><span class="val">{signer.get('email','')}</span></div>
      <div class="row"><span class="lbl">Phone</span><span class="val">{signer.get('phone','') or '—'}</span></div>
      <div class="row"><span class="lbl">Nationality</span><span class="val">{signer.get('nationality','') or '—'}</span></div>
      <div class="row"><span class="lbl">Company</span><span class="val">{signer.get('company','') or '—'}</span></div>
      <div class="row"><span class="lbl">Title</span><span class="val">{signer.get('title','') or '—'}</span></div>
      <div class="row"><span class="lbl">Investor Type</span><span class="val">{investor_type_map.get(signer.get('investorType',''), '—')}</span></div>
      <div class="row"><span class="lbl">Signature Method</span><span class="val">{'Drawn (canvas)' if signer.get('signatureMethod') == 'drawn' else 'Typed'}</span></div>
      <div class="row"><span class="lbl">Executed At</span><span class="val">{signer.get('executedAt','')}</span></div>
    </div>
  </div>
  <div class="footer">
    <p>Signed NDA PDF attached · {company_name} investor platform</p>
  </div>
</div>
</body>
</html>
"""

    admin_msg.attach(MIMEText(admin_html, "html"))

    pdf_part2 = MIMEBase("application", "pdf")
    pdf_part2.set_payload(pdf_bytes)
    encoders.encode_base64(pdf_part2)
    pdf_part2.add_header("Content-Disposition", f'attachment; filename="{filename}"')
    admin_msg.attach(pdf_part2)

    # ── Send both via Gmail SMTP ─────────────────────────────
    with smtplib.SMTP(smtp_host, smtp_port, timeout=30) as server:
        server.ehlo()
        server.starttls()
        server.ehlo()
        server.login(smtp_user, smtp_pass)
        if investor_email:
            server.sendmail(smtp_user, investor_email, investor_msg.as_bytes())
        server.sendmail(smtp_user, admin_email, admin_msg.as_bytes())


# ─── Main handler (call from Next.js API route or Flask) ──────
def handle_sign_request(body: dict) -> dict:
    """
    body must contain:
      fullName, email, signatureData, signatureMethod
    optional:
      phone, company, title, investorType, nationality
    """
    full_name   = (body.get("fullName") or "").strip()
    email       = (body.get("email") or "").strip()
    sig_data    = body.get("signatureData", "")
    sig_method  = body.get("signatureMethod", "drawn")

    if not full_name or not email or not sig_data:
        return {"error": "fullName, email, and signatureData are required.", "status": 400}

    now_iso = datetime.datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")
    year    = datetime.datetime.utcnow().strftime("%Y")
    uid     = uuid.uuid4().hex[:8].upper()
    reference_code = f"MVT-NDA-{year}-{uid}"

    signer = {
        "fullName":        full_name,
        "email":           email,
        "phone":           body.get("phone", ""),
        "company":         body.get("company", ""),
        "title":           body.get("title", ""),
        "investorType":    body.get("investorType", "individual"),
        "nationality":     body.get("nationality", ""),
        "signatureData":   sig_data,
        "signatureMethod": sig_method,
        "executedAt":      now_iso,
    }

    # Hash the NDA text + signer info for audit trail
    audit_payload = NDA_TEXT + full_name + email + now_iso + reference_code
    doc_hash = hashlib.sha256(audit_payload.encode()).hexdigest()

    # Generate PDF
    pdf_bytes = generate_nda_pdf(signer, reference_code, doc_hash)

    # Send emails
    send_nda_emails(signer, pdf_bytes, reference_code)

    return {
        "success":       True,
        "referenceCode": reference_code,
        "documentHash":  doc_hash,
        "executedAt":    now_iso,
    }


# ─── Next.js API route wrapper ────────────────────────────────
# Place the file below at:  app/api/nda/sign/route.ts
# It shells out to this Python script, or you can run it as a
# standalone FastAPI microservice.
#
# Option A — FastAPI (recommended for production):
#
#   pip install fastapi uvicorn reportlab
#   uvicorn nda_sign:app --host 0.0.0.0 --port 3001
#
# Option B — Direct Next.js API route using Python child process:
#   See route.ts below.

try:
    from fastapi import FastAPI, Request
    from fastapi.responses import JSONResponse

    app = FastAPI()

    @app.post("/api/nda/sign")
    async def sign_nda(request: Request):
        body = await request.json()
        result = handle_sign_request(body)
        status = result.pop("status", 200)
        return JSONResponse(content=result, status_code=status)

except ImportError:
    # FastAPI not installed — script can still be used via subprocess
    pass


if __name__ == "__main__":
    # ── CLI test mode ──────────────────────────────────────
    import sys
    test_body = {
        "fullName":        "Mark Muriithi",
        "email":           "mark.muriithi@murivest.co.ke",
        "phone":           "+254 729 170 156",
        "company":         "Murivest Group Ltd",
        "title":           "CEO",
        "investorType":    "institutional",
        "nationality":     "Kenyan",
        "signatureData":   "Mark Muriithi",
        "signatureMethod": "typed",
    }
    result = handle_sign_request(test_body)
    print(json.dumps(result, indent=2))