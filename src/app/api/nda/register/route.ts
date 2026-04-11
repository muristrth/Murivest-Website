import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { randomInt } from "crypto";

// ── Supabase admin client (service_role bypasses RLS) ──────────
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      company,
      investorType,
      nationality,
      consentElectronic,
    } = body;

    // ── Validation ─────────────────────────────────────────────
    if (!fullName || !email || !consentElectronic) {
      return NextResponse.json(
        { error: "Full name, email, and electronic consent are required." },
        { status: 400 }
      );
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const ipAddress =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // ── Step 1: Upsert investor ────────────────────────────────
    const { data: investor, error: investorError } = await supabase
      .from("investors")
      .upsert(
        {
          full_legal_name: fullName,
          email: email.toLowerCase().trim(),
          phone: phone || null,
          company_name: company || null,
          nationality: nationality || null,
          investor_type: investorType || "individual",
          ip_address: ipAddress,
          user_agent: req.headers.get("user-agent") || null,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "email", ignoreDuplicates: false }
      )
      .select("id")
      .single();

    if (investorError || !investor) {
      console.error("[register] Investor upsert failed:", JSON.stringify(investorError));
      return NextResponse.json(
        { error: `Registration failed: ${investorError?.message || "unknown error"}` },
        { status: 500 }
      );
    }

    console.log("[register] Investor upserted:", investor.id);

    // ── Step 2: Generate plain OTP ─────────────────────────────
    const otpPlain = String(randomInt(100000, 999999));

    // ── Step 3: Hash OTP (bcryptjs, rounds=10) ─────────────────
    let otpHash: string;
    try {
      // Dynamic import avoids edge-runtime issues with bcryptjs
      const bcrypt = (await import("bcryptjs")).default;
      otpHash = await bcrypt.hash(otpPlain, 10);
    } catch (hashErr) {
      console.error("[register] bcrypt hash failed:", hashErr);
      return NextResponse.json(
        { error: "Failed to generate secure verification code." },
        { status: 500 }
      );
    }

    const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString(); // 10 min

    // ── Step 4: Insert OTP record ──────────────────────────────
    const otpPayload = {
      investor_id: investor.id,
      email: email.toLowerCase().trim(),
      phone: phone || null,
      otp_hash: otpHash,
      channel: "email",
      purpose: "nda_sign",
      expires_at: expiresAt,
      ip_address: ipAddress,
    };

    console.log("[register] Inserting OTP for investor:", investor.id);

    const { error: otpError } = await supabase
      .from("otp_verifications")
      .insert(otpPayload);

    if (otpError) {
      console.error("[register] OTP insert failed:", JSON.stringify(otpError));
      return NextResponse.json(
        {
          error: `Could not generate verification code: ${otpError.message}`,
          detail: otpError.details || otpError.hint || null,
        },
        { status: 500 }
      );
    }

    console.log("[register] OTP inserted successfully");

    // ── Step 5: Send email ─────────────────────────────────────
    let emailSent = false;
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendKey);

        const { error: emailError } = await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "Murivest Realty <onboarding@resend.dev>",
          to: email,
          subject: "Your Murivest Verification Code",
          html: buildOtpEmailHtml(fullName, otpPlain),
        });

        if (emailError) {
          console.error("[register] Resend email error:", JSON.stringify(emailError));
        } else {
          emailSent = true;
          console.log("[register] OTP email sent to:", email);
        }
      } catch (emailErr) {
        console.error("[register] Email send exception:", emailErr);
      }
    } else {
      console.warn("[register] RESEND_API_KEY not set — skipping email");
    }

    // ── Step 6: Audit log ──────────────────────────────────────
    await supabase.from("audit_log").insert({
      investor_id: investor.id,
      event_type: "otp_sent",
      event_data: {
        email,
        channel: "email",
        purpose: "nda_sign",
        email_sent: emailSent,
      },
      ip_address: ipAddress,
      user_agent: req.headers.get("user-agent") || null,
      performed_by: "system",
    });

    // ── In dev: return OTP in response so you can test without email ──
    const isDev = process.env.NODE_ENV === "development";

    return NextResponse.json({
      success: true,
      message: emailSent
        ? "Verification code sent to your email."
        : "Verification code generated. Check server logs.",
      ...(isDev && { _dev_otp: otpPlain }), // REMOVE in production
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("[register] Unhandled error:", message);
    return NextResponse.json(
      { error: `Internal server error: ${message}` },
      { status: 500 }
    );
  }
}

// ── Email HTML builder ─────────────────────────────────────────
function buildOtpEmailHtml(name: string, otp: string): string {
  return `<!DOCTYPE html>
<html>
  <head><meta charset="utf-8" /></head>
  <body style="font-family:Georgia,serif;background:#f5f0e8;margin:0;padding:40px 20px;">
    <div style="max-width:480px;margin:0 auto;background:#0d0d0b;padding:48px;">
      <div style="font-family:monospace;font-size:11px;letter-spacing:0.3em;color:#b8962e;margin-bottom:32px;">
        MURIVEST REALTY LTD
      </div>
      <h2 style="color:#f5f0e8;font-size:22px;font-weight:300;margin:0 0 16px;">
        Identity Verification
      </h2>
      <p style="color:rgba(245,240,232,0.6);font-size:13px;line-height:1.8;font-family:monospace;margin:0 0 8px;">
        Dear ${name},
      </p>
      <p style="color:rgba(245,240,232,0.6);font-size:13px;line-height:1.8;font-family:monospace;margin:0 0 24px;">
        Use the code below to verify your identity and proceed to execute your
        Investor Confidentiality Agreement.
      </p>
      <div style="font-family:monospace;font-size:36px;letter-spacing:0.4em;color:#b8962e;
                  background:rgba(184,150,46,0.1);padding:20px;text-align:center;
                  border:1px solid rgba(184,150,46,0.3);margin:0 0 24px;">
        ${otp}
      </div>
      <p style="font-family:monospace;font-size:11px;color:rgba(245,240,232,0.3);margin:0;">
        This code expires in 10 minutes. Do not share it with anyone.
        If you did not initiate this request, please disregard this message.
      </p>
    </div>
    <div style="max-width:480px;margin:16px auto 0;font-family:monospace;font-size:10px;
                color:rgba(13,13,11,0.4);text-align:center;letter-spacing:0.1em;">
      © ${new Date().getFullYear()} Murivest Realty Ltd · Nairobi, Kenya · Governed by the Laws of Kenya
    </div>
  </body>
</html>`;
}