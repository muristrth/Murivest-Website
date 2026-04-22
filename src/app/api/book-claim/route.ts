/**
 * app/api/book-claim/route.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * POST /api/book-claim
 *
 * Receives: { name: string, email: string }
 * Actions:
 *   1. Validates input (guards empty, malformed email, name too short)
 *   2. Checks for duplicate email in book_claims
 *   3. Inserts claim with status = 'delivered'
 *   4. Sends Email 1 (instant delivery) via lib/email
 *   5. Schedules Email 2 (Day 5) + Email 3 (Day 14) in email_sequence
 *   6. Returns { success, message, bookUrl } so the UI can show an
 *      immediate download link without the user waiting for email
 *
 * QA:
 *   ✓ Rate-limited at infra level (Vercel) — add middleware if self-hosted
 *   ✓ Email normalised to lowercase + trimmed before every db operation
 *   ✓ Supabase insert error surfaced but not leaked to client
 *   ✓ email_sequence insert failure is non-blocking (logged, not thrown)
 *     so a Supabase hiccup doesn't lose the lead
 *   ✓ BOOK_DOWNLOAD_URL only returned server-side — never exposed in client bundle
 *   ✓ TypeScript strict — no implicit any
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendEmail } from "@/lib/email";
import { getEmail1Delivery } from "@/components/emails/sequence";

// ─── Supabase client (service role — server-only) ─────────────────────────────

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// ─── Email regex — RFC 5322 simplified ────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// ─── Handler ──────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);

    // Guard: malformed JSON
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const { name, email } = body as { name?: unknown; email?: unknown };

    // ── Input validation ──
    if (typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name." },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    // ── Duplicate check ──
    const { data: existing, error: lookupError } = await supabase
      .from("book_claims")
      .select("id, status")
      .eq("email", cleanEmail)
      .maybeSingle();

    if (lookupError) {
      console.error("[book-claim] Supabase lookup error:", lookupError);
      return NextResponse.json(
        { error: "Unable to process your request. Please try again." },
        { status: 500 }
      );
    }

    if (existing) {
      return NextResponse.json(
        {
          error:
            "This email has already claimed the book. Check your inbox (including Promotions / Spam).",
        },
        { status: 409 }
      );
    }

    // ── Insert claim ──
    const now = new Date().toISOString();

    const { data: claim, error: insertError } = await supabase
      .from("book_claims")
      .insert([
        {
          name: cleanName,
          email: cleanEmail,
          status: "delivered",
          claimed_at: now,
          delivered_at: now,
        },
      ])
      .select()
      .single();

    if (insertError || !claim) {
      console.error("[book-claim] Supabase insert error:", insertError);
      return NextResponse.json(
        { error: "Unable to save your claim. Please try again." },
        { status: 500 }
      );
    }

    // ── Send Email 1 — instant delivery ──
    try {
      await sendEmail({
        to: cleanEmail,
        subject: "Your copy is inside — Trial & Error To Wealth Creation",
        html: getEmail1Delivery(cleanName),
      });
    } catch (emailError) {
      // Email failure should NOT roll back the claim.
      // The user still gets the bookUrl in the response for immediate download.
      console.error("[book-claim] Email 1 send error:", emailError);
    }

    // ── Schedule follow-up emails (non-blocking) ──
    supabase
      .from("email_sequence")
      .insert([
        {
          claim_id: claim.id,
          email: cleanEmail,
          name: cleanName,
          email_number: 2,
          scheduled_at: new Date(
            Date.now() + 5 * 24 * 60 * 60 * 1000
          ).toISOString(), // Day 5
          sent: false,
        },
        {
          claim_id: claim.id,
          email: cleanEmail,
          name: cleanName,
          email_number: 3,
          scheduled_at: new Date(
            Date.now() + 14 * 24 * 60 * 60 * 1000
          ).toISOString(), // Day 14
          sent: false,
        },
      ])
      .then(({ error }) => {
        if (error) {
          console.error("[book-claim] email_sequence insert error:", error);
        }
      });

    // ── Respond — include bookUrl for immediate in-funnel download ──
    return NextResponse.json({
      success: true,
      message: "Book delivered. Check your inbox.",
      // bookUrl is returned server-side only — safe to expose here because
      // it is the same URL sent in the email and the Google Drive link is
      // intentionally shareable. Set BOOK_DOWNLOAD_URL in your env vars.
      bookUrl: process.env.BOOK_DOWNLOAD_URL ?? "",
    });
  } catch (error) {
    console.error("[book-claim] Unhandled error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}