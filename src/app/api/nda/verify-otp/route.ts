import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: "Email and OTP are required." },
        { status: 400 }
      );
    }

    const ipAddress =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";

    // ── Fetch latest valid OTP for this email ──────────────────
    const { data: records, error: fetchError } = await supabase
      .from("otp_verifications")
      .select("*")
      .eq("email", email.toLowerCase())
      .eq("purpose", "nda_sign")
      .eq("verified", false)
      .gt("expires_at", new Date().toISOString())
      .order("created_at", { ascending: false })
      .limit(1);

    if (fetchError || !records || records.length === 0) {
      return NextResponse.json(
        { error: "No valid verification code found. Please request a new one." },
        { status: 400 }
      );
    }

    const record = records[0];

    // ── Increment attempt count first ──────────────────────────
    await supabase
      .from("otp_verifications")
      .update({ attempts: record.attempts + 1 })
      .eq("id", record.id);

    // ── Verify hash ────────────────────────────────────────────
    const valid = await bcrypt.compare(otp, record.otp_hash);

    if (!valid) {
      // Log failed attempt
      await supabase.from("audit_log").insert({
        user_id: record.user_id,
        action: "otp_failed",
        entity_type: "otp_verifications",
        entity_id: record.id,
        ip_address: ipAddress,
      });

      const remaining = 5 - (record.attempts + 1);
      return NextResponse.json(
        { error: `Invalid code. ${remaining} attempt(s) remaining.` },
        { status: 400 }
      );
    }

    // ── Mark OTP as verified ───────────────────────────────────
    await supabase
      .from("otp_verifications")
      .update({ verified: true, verified_at: new Date().toISOString() })
      .eq("id", record.id);

    // ── Mark user as verified in metadata ─────────────────────
    await supabase.auth.admin.updateUserById(record.user_id, {
      user_metadata: { investor_status: 'verified' }
    });

    // ── Audit log ──────────────────────────────────────────────
    await supabase.from("audit_log").insert({
      user_id: record.user_id,
      action: "otp_verified",
      entity_type: "otp_verifications",
      entity_id: record.id,
      ip_address: ipAddress,
      user_agent: req.headers.get("user-agent") || null,
    });

    return NextResponse.json({
      success: true,
      message: "Identity verified.",
      userId: record.user_id,
    });
  } catch (error) {
    console.error("OTP verification error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}