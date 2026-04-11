"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────
type Step = "register" | "otp" | "nda" | "sign" | "complete";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  title: string;
  investorType: string;
  nationality: string;
  consentElectronic: boolean;
}

// ─── Constants ────────────────────────────────────────────────
const NDA_TEXT = `NON-DISCLOSURE AND CONFIDENTIALITY AGREEMENT

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

The Recipient acknowledges and agrees that an electronic signature applied through the Murivest platform constitutes a legally binding signature of equivalent force to a handwritten signature, pursuant to Kenya's Information and Communications Act (Cap. 411A) and the principles of the UNCITRAL Model Law on Electronic Commerce. The signature process includes identity verification by one-time password (OTP), IP address logging, timestamp recording, and cryptographic hashing of the final signed document.

5. TERM AND TERMINATION

This Agreement shall remain in force for a period of twenty-four (24) months from the date of execution, unless earlier terminated by written notice. Obligations of confidentiality with respect to Confidential Information disclosed during the term shall survive termination.

6. GOVERNING LAW

This Agreement is governed by and construed in accordance with the Laws of Kenya. Any dispute arising hereunder shall be subject to the exclusive jurisdiction of the courts of Kenya, with Nairobi as the seat.

7. ENTIRE AGREEMENT

This Agreement constitutes the entire agreement between the parties with respect to its subject matter and supersedes all prior discussions and understandings.`;

// ─── SignaturePad Component ───────────────────────────────────
function SignaturePad({
  onSignature,
}: {
  onSignature: (dataUrl: string) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const [hasSignature, setHasSignature] = useState(false);

  const getPos = (e: MouseEvent | TouchEvent, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if ("touches" in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      };
    }
    return {
      x: ((e as MouseEvent).clientX - rect.left) * scaleX,
      y: ((e as MouseEvent).clientY - rect.top) * scaleY,
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    ctx.strokeStyle = "#0d0d0b";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const start = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      drawing.current = true;
      const pos = getPos(e, canvas);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    };
    const move = (e: MouseEvent | TouchEvent) => {
      if (!drawing.current) return;
      e.preventDefault();
      const pos = getPos(e, canvas);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
      setHasSignature(true);
    };
    const end = () => {
      drawing.current = false;
      if (hasSignature) onSignature(canvas.toDataURL());
    };

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", move);
    canvas.addEventListener("mouseup", end);
    canvas.addEventListener("touchstart", start, { passive: false });
    canvas.addEventListener("touchmove", move, { passive: false });
    canvas.addEventListener("touchend", end);

    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", move);
      canvas.removeEventListener("mouseup", end);
      canvas.removeEventListener("touchstart", start);
      canvas.removeEventListener("touchmove", move);
      canvas.removeEventListener("touchend", end);
    };
  }, [hasSignature, onSignature]);

  const clear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  return (
    <div className="sig-wrap">
      <canvas
        ref={canvasRef}
        width={600}
        height={160}
        className="sig-canvas"
      />
      {hasSignature && (
        <button type="button" className="sig-clear" onClick={clear}>
          Clear
        </button>
      )}
      {!hasSignature && (
        <p className="sig-hint">Draw your signature above</p>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────
export default function NDAPage() {
  const [step, setStep] = useState<Step>("register");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [signatureData, setSignatureData] = useState("");
  const [signedPdfUrl, setSignedPdfUrl] = useState("");
  const [signMethod, setSignMethod] = useState<"draw" | "type">("draw");
  const [typedSig, setTypedSig] = useState("");
  const [ndaRead, setNdaRead] = useState(false);
  const ndaScrollRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    title: "",
    investorType: "individual",
    nationality: "",
    consentElectronic: false,
  });

  const updateForm = (k: keyof FormData, v: string | boolean) =>
    setForm((f) => ({ ...f, [k]: v }));

  // Detect when NDA text has been scrolled
  const handleNdaScroll = useCallback(() => {
    const el = ndaScrollRef.current;
    if (!el) return;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 40) {
      setNdaRead(true);
    }
  }, []);

  // ── Step 1: Register ──────────────────────────────────────
  const handleRegister = async () => {
    setError("");
    if (!form.fullName || !form.email || !form.consentElectronic) {
      setError("Please complete all required fields and accept consent.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/nda/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Registration failed");
      setStep("otp");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ── Step 2: Verify OTP ────────────────────────────────────
  const handleOtp = async () => {
    setError("");
    if (otpCode.length !== 6) {
      setError("Please enter the 6-digit code sent to your email.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/nda/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, otp: otpCode }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Invalid OTP");
      setStep("nda");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ── Step 3 → 4: NDA read → sign ──────────────────────────
  const handleProceedToSign = () => {
    if (!ndaRead) {
      setError("Please scroll through and read the full agreement.");
      return;
    }
    setError("");
    setStep("sign");
  };

  // ── Step 4: Submit signature ──────────────────────────────
  const handleSign = async () => {
    setError("");
    const finalSig = signMethod === "draw" ? signatureData : typedSig;
    if (!finalSig) {
      setError("Please provide your signature before submitting.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/nda/sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          fullName: form.fullName,
          signatureData: finalSig,
          signatureMethod: signMethod === "draw" ? "drawn" : "typed",
          signatureFont: signMethod === "type" ? "Cormorant Garamond" : undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Signing failed");
      setSignedPdfUrl(data.signedPdfUrl || "");
      setStep("complete");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ── Step indicators ───────────────────────────────────────
  const steps: { key: Step; label: string }[] = [
    { key: "register", label: "Identity" },
    { key: "otp", label: "Verify" },
    { key: "nda", label: "Review" },
    { key: "sign", label: "Execute" },
    { key: "complete", label: "Access" },
  ];
  const stepIndex = steps.findIndex((s) => s.key === step);

  return (
    <main className="nda-root">
      <div className="nda-grain" />

      {/* NAV */}
      <nav className="nda-nav">
        <Link href="/" className="nda-logo">MURIVEST</Link>
        <span className="nda-nav-tag">Investor Confidentiality Agreement</span>
      </nav>

      {/* STEP INDICATOR */}
      <div className="nda-steps">
        {steps.map((s, i) => (
          <div
            key={s.key}
            className={`nda-step ${i < stepIndex ? "nda-step--done" : ""} ${i === stepIndex ? "nda-step--active" : ""}`}
          >
            <div className="nda-step-dot">{i < stepIndex ? "✓" : i + 1}</div>
            <span className="nda-step-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* CARD */}
      <div className="nda-card">
        {/* ─── REGISTER ─────────────────────────────────── */}
        {step === "register" && (
          <div className="nda-panel">
            <h2 className="nda-panel-title">Investor Registration</h2>
            <p className="nda-panel-sub">
              Please provide your legal details. All information is encrypted and
              held in strict confidence.
            </p>

            <div className="nda-grid-2">
              <label className="nda-field">
                <span>Full Legal Name *</span>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) => updateForm("fullName", e.target.value)}
                  placeholder="As appears on passport or national ID"
                />
              </label>
              <label className="nda-field">
                <span>Email Address *</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateForm("email", e.target.value)}
                  placeholder="OTP will be sent here"
                />
              </label>
              <label className="nda-field">
                <span>Phone Number</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateForm("phone", e.target.value)}
                  placeholder="+254 7XX XXX XXX"
                />
              </label>
              <label className="nda-field">
                <span>Nationality</span>
                <input
                  type="text"
                  value={form.nationality}
                  onChange={(e) => updateForm("nationality", e.target.value)}
                  placeholder="e.g. Kenyan"
                />
              </label>
              <label className="nda-field">
                <span>Company / Entity Name</span>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => updateForm("company", e.target.value)}
                  placeholder="Optional"
                />
              </label>
              <label className="nda-field">
                <span>Your Title / Role</span>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => updateForm("title", e.target.value)}
                  placeholder="e.g. Managing Director"
                />
              </label>
            </div>

            <label className="nda-field nda-field--full">
              <span>Investor Type *</span>
              <select
                value={form.investorType}
                onChange={(e) => updateForm("investorType", e.target.value)}
              >
                <option value="individual">Individual / HNWI</option>
                <option value="family_office">Family Office</option>
                <option value="institutional">Institutional Investor</option>
                <option value="pension_fund">Pension Fund</option>
                <option value="private_equity">Private Equity</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label className="nda-consent">
              <input
                type="checkbox"
                checked={form.consentElectronic}
                onChange={(e) => updateForm("consentElectronic", e.target.checked)}
              />
              <span>
                I consent to the use of electronic signatures and acknowledge
                that my electronic signature carries the same legal effect as a
                handwritten signature under Kenyan law.
              </span>
            </label>

            {error && <p className="nda-error">{error}</p>}

            <button className="nda-btn" onClick={handleRegister} disabled={loading}>
              {loading ? "Sending verification code…" : "Continue → Verify Identity"}
            </button>
          </div>
        )}

        {/* ─── OTP ──────────────────────────────────────── */}
        {step === "otp" && (
          <div className="nda-panel nda-panel--center">
            <div className="nda-otp-icon">✉</div>
            <h2 className="nda-panel-title">Identity Verification</h2>
            <p className="nda-panel-sub">
              A 6-digit verification code has been sent to<br />
              <strong>{form.email}</strong>
            </p>

            <div className="nda-otp-input-wrap">
              <input
                type="text"
                maxLength={6}
                className="nda-otp-input"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ""))}
                placeholder="000000"
                autoFocus
              />
            </div>

            <p className="nda-otp-note">
              Code expires in 10 minutes. Check your spam folder if not received.
            </p>

            {error && <p className="nda-error">{error}</p>}

            <button className="nda-btn" onClick={handleOtp} disabled={loading}>
              {loading ? "Verifying…" : "Verify Code"}
            </button>

            <button
              className="nda-btn-ghost"
              onClick={() => setStep("register")}
            >
              ← Back
            </button>
          </div>
        )}

        {/* ─── NDA REVIEW ───────────────────────────────── */}
        {step === "nda" && (
          <div className="nda-panel">
            <h2 className="nda-panel-title">Confidentiality Agreement</h2>
            <p className="nda-panel-sub">
              Please read the full agreement carefully. Scroll to the bottom to
              proceed to execution.
            </p>

            <div className="nda-document" ref={ndaScrollRef} onScroll={handleNdaScroll}>
              <div className="nda-doc-header">
                <div className="nda-doc-logo">MURIVEST REALTY LTD</div>
                <div className="nda-doc-ref">
                  Reference: MVT-NDA-{new Date().getFullYear()}<br />
                  Version: 1.0 · Jurisdiction: Kenya
                </div>
              </div>
              <pre className="nda-doc-text">{NDA_TEXT}</pre>

              {!ndaRead && (
                <div className="nda-scroll-cue">↓ Scroll to read full agreement</div>
              )}
              {ndaRead && (
                <div className="nda-read-confirm">
                  ✓ You have read the full agreement
                </div>
              )}
            </div>

            {error && <p className="nda-error">{error}</p>}

            <button
              className="nda-btn"
              onClick={handleProceedToSign}
              disabled={!ndaRead}
            >
              I Have Read the Agreement → Proceed to Execute
            </button>
          </div>
        )}

        {/* ─── SIGN ─────────────────────────────────────── */}
        {step === "sign" && (
          <div className="nda-panel">
            <h2 className="nda-panel-title">Execute Agreement</h2>
            <p className="nda-panel-sub">
              By signing below, you confirm you have read and agree to be bound
              by the Murivest Investor Confidentiality Agreement.
            </p>

            {/* Signer summary */}
            <div className="nda-signer-summary">
              <div className="nda-signer-row">
                <span>Signer</span>
                <strong>{form.fullName}</strong>
              </div>
              <div className="nda-signer-row">
                <span>Email</span>
                <strong>{form.email}</strong>
              </div>
              {form.company && (
                <div className="nda-signer-row">
                  <span>Entity</span>
                  <strong>{form.company}</strong>
                </div>
              )}
              <div className="nda-signer-row">
                <span>Date</span>
                <strong>{new Date().toLocaleDateString("en-KE", { dateStyle: "long" })}</strong>
              </div>
              <div className="nda-signer-row">
                <span>Verified via</span>
                <strong>Email OTP · IP Logged · Timestamped</strong>
              </div>
            </div>

            {/* Sign method toggle */}
            <div className="nda-sign-toggle">
              <button
                className={`nda-toggle-btn ${signMethod === "draw" ? "nda-toggle-btn--active" : ""}`}
                onClick={() => setSignMethod("draw")}
              >
                Draw Signature
              </button>
              <button
                className={`nda-toggle-btn ${signMethod === "type" ? "nda-toggle-btn--active" : ""}`}
                onClick={() => setSignMethod("type")}
              >
                Type Signature
              </button>
            </div>

            {signMethod === "draw" && (
              <SignaturePad onSignature={setSignatureData} />
            )}

            {signMethod === "type" && (
              <div className="nda-typed-sig-wrap">
                <input
                  type="text"
                  className="nda-typed-sig-input"
                  value={typedSig}
                  onChange={(e) => setTypedSig(e.target.value)}
                  placeholder="Type your full legal name"
                />
                {typedSig && (
                  <div className="nda-typed-sig-preview">{typedSig}</div>
                )}
              </div>
            )}

            <p className="nda-legal-note">
              By clicking "Execute Agreement", you confirm this is your signature,
              that you have authority to bind yourself or your entity, and that this
              agreement is legally binding under the Laws of Kenya.
            </p>

            {error && <p className="nda-error">{error}</p>}

            <button className="nda-btn nda-btn--gold" onClick={handleSign} disabled={loading}>
              {loading ? "Processing…" : "Execute Agreement"}
            </button>
          </div>
        )}

        {/* ─── COMPLETE ─────────────────────────────────── */}
        {step === "complete" && (
          <div className="nda-panel nda-panel--center">
            <div className="nda-complete-seal">✦</div>
            <h2 className="nda-panel-title">Agreement Executed</h2>
            <p className="nda-panel-sub">
              Your confidentiality agreement has been successfully executed and
              recorded. Your investor portal access is now active.
            </p>

            <div className="nda-complete-details">
              <div className="nda-complete-row">
                <span>Signatory</span>
                <strong>{form.fullName}</strong>
              </div>
              <div className="nda-complete-row">
                <span>Date &amp; Time</span>
                <strong>{new Date().toLocaleString("en-KE")}</strong>
              </div>
              <div className="nda-complete-row">
                <span>Status</span>
                <strong className="nda-status-badge">EXECUTED ✓</strong>
              </div>
              <div className="nda-complete-row">
                <span>Audit Trail</span>
                <strong>IP Logged · OTP Verified · Document Hashed</strong>
              </div>
            </div>

            <p className="nda-complete-note">
              A confirmation has been sent to <strong>{form.email}</strong> with
              your executed copy and audit certificate.
            </p>

            <div className="nda-complete-actions">
              <Link href="/investor-portal" className="nda-btn nda-btn--gold">
                Enter Investor Portal →
              </Link>
              {signedPdfUrl && (
                <a href={signedPdfUrl} download className="nda-btn-ghost">
                  Download Executed NDA
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      <footer className="nda-footer">
        <span>© {new Date().getFullYear()} Murivest Realty Ltd</span>
        <span>Governed by the Laws of Kenya</span>
        <Link href="/confidentiality" className="nda-footer-link">
          Confidentiality Policy
        </Link>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Geist+Mono:wght@300;400&display=swap');

        :root {
          --ink: #0d0d0b;
          --parchment: #f5f0e8;
          --gold: #b8962e;
          --gold-light: #d4b45a;
          --muted: #6b6358;
          --border: #d6cfc4;
          --error: #8b1a1a;
          --success: #1a4a1a;
        }

        .nda-root {
          min-height: 100vh;
          background: var(--ink);
          font-family: 'Cormorant Garamond', Georgia, serif;
          color: var(--ink);
          position: relative;
        }

        .nda-grain {
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        /* NAV */
        .nda-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 3rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          position: relative;
          z-index: 10;
        }
        .nda-logo {
          font-family: 'Geist Mono', monospace;
          font-size: 0.85rem;
          letter-spacing: 0.3em;
          color: var(--parchment);
          text-decoration: none;
        }
        .nda-nav-tag {
          font-family: 'Geist Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: rgba(245,240,232,0.4);
        }

        /* STEPS */
        .nda-steps {
          display: flex;
          justify-content: center;
          gap: 0;
          padding: 2rem 3rem;
          position: relative;
          z-index: 10;
        }

        .nda-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          flex: 1;
          max-width: 120px;
          position: relative;
          opacity: 0.3;
        }
        .nda-step::after {
          content: '';
          position: absolute;
          top: 14px;
          left: calc(50% + 14px);
          right: calc(-50% + 14px);
          height: 1px;
          background: rgba(245,240,232,0.2);
        }
        .nda-step:last-child::after { display: none; }
        .nda-step--done { opacity: 0.7; }
        .nda-step--active { opacity: 1; }

        .nda-step-dot {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid rgba(245,240,232,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Geist Mono', monospace;
          font-size: 0.65rem;
          color: var(--parchment);
          background: transparent;
        }
        .nda-step--done .nda-step-dot {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--ink);
        }
        .nda-step--active .nda-step-dot {
          border-color: var(--gold);
          color: var(--gold);
        }

        .nda-step-label {
          font-family: 'Geist Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.15em;
          color: rgba(245,240,232,0.6);
        }
        .nda-step--active .nda-step-label { color: var(--gold); }

        /* CARD */
        .nda-card {
          max-width: 780px;
          margin: 0 auto 4rem;
          background: var(--parchment);
          position: relative;
          z-index: 10;
          box-shadow: 0 40px 80px rgba(0,0,0,0.5);
        }

        .nda-panel {
          padding: 3.5rem 4rem;
        }
        .nda-panel--center {
          text-align: center;
        }

        .nda-panel-title {
          font-size: 2rem;
          font-weight: 400;
          letter-spacing: 0.01em;
          margin: 0 0 0.8rem;
        }
        .nda-panel-sub {
          font-size: 1rem;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.7;
          margin: 0 0 2.5rem;
        }

        /* FORM */
        .nda-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
          margin-bottom: 1.2rem;
        }

        .nda-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .nda-field--full { margin-bottom: 1.2rem; }

        .nda-field span {
          font-family: 'Geist Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: var(--muted);
        }

        .nda-field input,
        .nda-field select {
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.6);
          padding: 0.75rem 1rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          color: var(--ink);
          outline: none;
          transition: border-color 0.2s;
        }
        .nda-field input:focus,
        .nda-field select:focus {
          border-color: var(--gold);
        }

        .nda-consent {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(184,150,46,0.06);
          border: 1px solid rgba(184,150,46,0.3);
          margin-bottom: 1.5rem;
          cursor: pointer;
        }
        .nda-consent input { margin-top: 0.2rem; flex-shrink: 0; }
        .nda-consent span {
          font-size: 0.9rem;
          line-height: 1.6;
          font-weight: 300;
          color: #3a3530;
        }

        /* OTP */
        .nda-otp-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: var(--gold);
        }
        .nda-otp-input-wrap {
          margin: 2rem auto;
          max-width: 240px;
        }
        .nda-otp-input {
          width: 100%;
          text-align: center;
          font-family: 'Geist Mono', monospace;
          font-size: 2rem;
          letter-spacing: 0.4em;
          border: 2px solid var(--border);
          border-bottom: 2px solid var(--gold);
          padding: 1rem;
          background: transparent;
          outline: none;
          color: var(--ink);
        }
        .nda-otp-note {
          font-family: 'Geist Mono', monospace;
          font-size: 0.65rem;
          color: var(--muted);
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
        }

        /* NDA DOCUMENT */
        .nda-document {
          border: 1px solid var(--border);
          height: 380px;
          overflow-y: auto;
          position: relative;
          background: #fff;
          margin-bottom: 1.5rem;
        }
        .nda-doc-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 1.5rem 2rem;
          border-bottom: 2px solid var(--ink);
          background: var(--ink);
          color: var(--parchment);
        }
        .nda-doc-logo {
          font-family: 'Geist Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.25em;
        }
        .nda-doc-ref {
          font-family: 'Geist Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          color: rgba(245,240,232,0.5);
          text-align: right;
          line-height: 1.6;
        }
        .nda-doc-text {
          padding: 2rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.95rem;
          line-height: 1.9;
          white-space: pre-wrap;
          color: #1a1a18;
          font-weight: 300;
        }
        .nda-scroll-cue {
          text-align: center;
          padding: 1rem;
          font-family: 'Geist Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: var(--gold);
          animation: bounce 1.5s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        .nda-read-confirm {
          text-align: center;
          padding: 1rem;
          font-family: 'Geist Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: var(--success);
          background: rgba(26,74,26,0.06);
        }

        /* SIGN */
        .nda-signer-summary {
          border: 1px solid var(--border);
          margin-bottom: 1.5rem;
        }
        .nda-signer-row {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 1.2rem;
          border-bottom: 1px solid var(--border);
          font-size: 0.9rem;
        }
        .nda-signer-row:last-child { border-bottom: none; }
        .nda-signer-row span {
          font-family: 'Geist Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: var(--muted);
          align-self: center;
        }
        .nda-signer-row strong { font-weight: 400; }

        .nda-sign-toggle {
          display: flex;
          gap: 0;
          margin-bottom: 1.2rem;
          border: 1px solid var(--border);
        }
        .nda-toggle-btn {
          flex: 1;
          padding: 0.75rem;
          background: transparent;
          border: none;
          font-family: 'Geist Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s;
        }
        .nda-toggle-btn--active {
          background: var(--ink);
          color: var(--parchment);
        }

        /* Signature pad */
        .sig-wrap {
          border: 1px solid var(--border);
          background: #fff;
          position: relative;
          margin-bottom: 1rem;
        }
        .sig-canvas {
          display: block;
          width: 100%;
          height: 160px;
          cursor: crosshair;
          touch-action: none;
        }
        .sig-clear {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          font-family: 'Geist Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          background: none;
          border: 1px solid var(--border);
          padding: 0.3rem 0.6rem;
          cursor: pointer;
          color: var(--muted);
        }
        .sig-hint {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          font-family: 'Geist Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: rgba(107,99,88,0.4);
          pointer-events: none;
        }

        /* Typed sig */
        .nda-typed-sig-wrap { margin-bottom: 1rem; }
        .nda-typed-sig-input {
          width: 100%;
          border: none;
          border-bottom: 1px solid var(--border);
          padding: 0.75rem 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          background: transparent;
          outline: none;
          color: var(--ink);
          margin-bottom: 1rem;
        }
        .nda-typed-sig-preview {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 2.2rem;
          color: var(--ink);
          padding: 1rem;
          border: 1px solid var(--border);
          background: #fff;
          min-height: 80px;
          display: flex;
          align-items: center;
        }

        .nda-legal-note {
          font-size: 0.82rem;
          line-height: 1.6;
          color: var(--muted);
          font-weight: 300;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(184,150,46,0.05);
          border-left: 2px solid var(--gold);
        }

        /* COMPLETE */
        .nda-complete-seal {
          font-size: 3.5rem;
          color: var(--gold);
          margin-bottom: 1rem;
          animation: rotateSeal 8s linear infinite;
        }
        @keyframes rotateSeal {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .nda-complete-details {
          border: 1px solid var(--border);
          margin: 2rem auto 1.5rem;
          max-width: 480px;
          text-align: left;
        }
        .nda-complete-row {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 1.2rem;
          border-bottom: 1px solid var(--border);
          font-size: 0.9rem;
        }
        .nda-complete-row:last-child { border-bottom: none; }
        .nda-complete-row span {
          font-family: 'Geist Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: var(--muted);
          align-self: center;
        }
        .nda-complete-row strong { font-weight: 400; }

        .nda-status-badge {
          font-family: 'Geist Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          background: rgba(26,74,26,0.1);
          color: #1a4a1a;
          padding: 0.2rem 0.6rem;
        }

        .nda-complete-note {
          font-size: 0.9rem;
          color: var(--muted);
          font-weight: 300;
          margin-bottom: 2rem;
        }

        .nda-complete-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* BUTTONS */
        .nda-btn {
          width: 100%;
          padding: 1.1rem;
          background: var(--ink);
          color: var(--parchment);
          border: none;
          font-family: 'Geist Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          cursor: pointer;
          transition: opacity 0.2s;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }
        .nda-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .nda-btn--gold {
          background: var(--gold);
          color: var(--ink);
        }
        .nda-btn--gold:hover { background: var(--gold-light); }
        .nda-btn-ghost {
          width: 100%;
          padding: 0.8rem;
          background: transparent;
          border: 1px solid var(--border);
          font-family: 'Geist Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: var(--muted);
          cursor: pointer;
          margin-top: 0.8rem;
          text-decoration: none;
          display: block;
          text-align: center;
        }

        .nda-error {
          background: rgba(139,26,26,0.08);
          border-left: 2px solid var(--error);
          padding: 0.8rem 1rem;
          font-family: 'Geist Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.05em;
          color: var(--error);
          margin-bottom: 1rem;
        }

        /* FOOTER */
        .nda-footer {
          display: flex;
          justify-content: center;
          gap: 2rem;
          padding: 2rem;
          font-family: 'Geist Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          color: rgba(245,240,232,0.3);
          position: relative;
          z-index: 10;
        }
        .nda-footer-link {
          color: rgba(245,240,232,0.3);
          text-decoration: none;
        }
        .nda-footer-link:hover { color: var(--gold); }

        @media (max-width: 640px) {
          .nda-nav { padding: 1rem 1.5rem; }
          .nda-panel { padding: 2rem 1.5rem; }
          .nda-grid-2 { grid-template-columns: 1fr; }
          .nda-steps { gap: 0; padding: 1.5rem 1rem; }
          .nda-step-label { display: none; }
        }
      `}</style>
    </main>
  );
}