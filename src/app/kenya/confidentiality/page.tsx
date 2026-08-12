"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────
type Step = "register" | "nda" | "sign" | "complete";

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

The Recipient acknowledges and agrees that an electronic signature applied through the Murivest platform constitutes a legally binding signature of equivalent force to a handwritten signature, pursuant to Kenya's Information and Communications Act (Cap. 411A) and the principles of the UNCITRAL Model Law on Electronic Commerce. The signature process includes IP address logging, timestamp recording, and cryptographic hashing of the final signed document.

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
    onSignature("");
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
  const [signatureData, setSignatureData] = useState("");
  const [signMethod, setSignMethod] = useState<"draw" | "type">("draw");
  const [typedSig, setTypedSig] = useState("");
  const [ndaRead, setNdaRead] = useState(false);
  const [refCode, setRefCode] = useState("");
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

  const handleNdaScroll = useCallback(() => {
    const el = ndaScrollRef.current;
    if (!el) return;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 40) {
      setNdaRead(true);
    }
  }, []);

  // ── Step 1: Register → go straight to NDA ────────────────
  const handleRegister = () => {
    setError("");
    if (!form.fullName.trim() || !form.email.trim()) {
      setError("Full name and email address are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!form.consentElectronic) {
      setError("Please accept the electronic signature consent to continue.");
      return;
    }
    setStep("nda");
  };

  // ── Step 2 → 3: NDA read → sign ──────────────────────────
  const handleProceedToSign = () => {
    if (!ndaRead) {
      setError("Please scroll through and read the full agreement before proceeding.");
      return;
    }
    setError("");
    setStep("sign");
  };

  // ── Step 3: Submit signature → generate PDF → send email ──
  const handleSign = async () => {
    setError("");
    const finalSig = signMethod === "draw" ? signatureData : typedSig.trim();
    if (!finalSig) {
      setError("Please provide your signature before executing the agreement.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/nda/sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          company: form.company,
          title: form.title,
          investorType: form.investorType,
          nationality: form.nationality,
          signatureData: finalSig,
          signatureMethod: signMethod === "draw" ? "drawn" : "typed",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Signing failed. Please try again.");
      setRefCode(data.referenceCode || "MVT-NDA-" + Date.now());
      setStep("complete");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ── Step indicators ───────────────────────────────────────
  const steps: { key: Step; label: string }[] = [
    { key: "register", label: "Identity" },
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
            <div className="nda-panel-eyebrow">Controlled Access · Mandate-Based</div>
            <h2 className="nda-panel-title">Investor Registration</h2>
            <p className="nda-panel-sub">
              Provide your legal details to access Murivest&apos;s confidential
              investment mandates. All information is encrypted and held in
              strict confidence.
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
                  placeholder="your@email.com"
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

            <label className="nda-field nda-field--full" style={{ marginBottom: "1.2rem" }}>
              <span>Investor Type *</span>
              <select
                value={form.investorType}
                onChange={(e) => updateForm("investorType", e.target.value)}
              >
                <option value="individual">Individual / HNWI</option>
                <option value="family_office">Family Office</option>
                <option value="institutional">Institutional Investor</option>
                <option value="pension_fund">Pension Fund</option>
                <option value="private_equity">Private Equity / Fund</option>
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
                handwritten signature under the Laws of Kenya (Information and
                Communications Act, Cap. 411A).
              </span>
            </label>

            {error && <p className="nda-error">{error}</p>}

            <button className="nda-btn" onClick={handleRegister}>
              Continue → Review Agreement
            </button>
          </div>
        )}

        {/* ─── NDA REVIEW ───────────────────────────────── */}
        {step === "nda" && (
          <div className="nda-panel">
            <div className="nda-panel-eyebrow">Step 2 of 3 · Legal Review</div>
            <h2 className="nda-panel-title">Confidentiality Agreement</h2>
            <p className="nda-panel-sub">
              Read the full agreement carefully. Scroll to the bottom to
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
              className={`nda-btn ${ndaRead ? "nda-btn--gold" : ""}`}
              onClick={handleProceedToSign}
              disabled={!ndaRead}
            >
              I Have Read the Agreement → Proceed to Execute
            </button>

            <button className="nda-btn-ghost" onClick={() => setStep("register")}>
              ← Back
            </button>
          </div>
        )}

        {/* ─── SIGN ─────────────────────────────────────── */}
        {step === "sign" && (
          <div className="nda-panel">
            <div className="nda-panel-eyebrow">Step 3 of 3 · Execution</div>
            <h2 className="nda-panel-title">Execute Agreement</h2>
            <p className="nda-panel-sub">
              By signing below, you confirm you have read and agree to be bound
              by the Murivest Investor Confidentiality Agreement.
            </p>

            {/* Signer summary */}
            <div className="nda-signer-summary">
              <div className="nda-signer-row">
                <span>Signatory</span>
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
              {form.title && (
                <div className="nda-signer-row">
                  <span>Title</span>
                  <strong>{form.title}</strong>
                </div>
              )}
              <div className="nda-signer-row">
                <span>Investor Type</span>
                <strong style={{ textTransform: "capitalize" }}>
                  {form.investorType.replace("_", " ")}
                </strong>
              </div>
              <div className="nda-signer-row">
                <span>Date</span>
                <strong>{new Date().toLocaleDateString("en-KE", { dateStyle: "long" })}</strong>
              </div>
              <div className="nda-signer-row">
                <span>Audit Trail</span>
                <strong>IP Logged · Timestamped · Document Hashed</strong>
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
              By clicking &quot;Execute Agreement&quot;, you confirm this is your
              signature, that you have authority to bind yourself or your entity,
              and that this agreement is legally binding under the Laws of Kenya.
              A signed copy will be dispatched to your email address.
            </p>

            {error && <p className="nda-error">{error}</p>}

            <button
              className="nda-btn nda-btn--gold"
              onClick={handleSign}
              disabled={loading}
            >
              {loading ? "Processing — please wait…" : "Execute Agreement"}
            </button>

            <button
              className="nda-btn-ghost"
              onClick={() => setStep("nda")}
              disabled={loading}
            >
              ← Review Agreement
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
              recorded. Investor portal access is now active.
            </p>

            <div className="nda-complete-details">
              <div className="nda-complete-row">
                <span>Signatory</span>
                <strong>{form.fullName}</strong>
              </div>
              <div className="nda-complete-row">
                <span>Reference</span>
                <strong style={{ fontFamily: "'Geist Mono', monospace", fontSize: "0.75rem" }}>
                  {refCode}
                </strong>
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
                <strong>IP Logged · Timestamped · Document Hashed</strong>
              </div>
            </div>

            <p className="nda-complete-note">
              A signed copy of this agreement has been dispatched to{" "}
              <strong>{form.email}</strong>. Please retain it for your records.
            </p>

            <div className="nda-complete-actions">
              <Link href="/portal" className="nda-btn nda-btn--gold">
                Enter Investor Portal →
              </Link>
            </div>
          </div>
        )}
      </div>

      <footer className="nda-footer">
        <span>© {new Date().getFullYear()} Murivest Realty Ltd · Nairobi, Kenya</span>
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
          --error-bg: rgba(139,26,26,0.07);
          --error-text: #8b1a1a;
          --success-bg: rgba(26,74,26,0.06);
          --success-text: #1a4a1a;
        }

        .nda-root {
          min-height: 100vh;
          background: var(--ink);
          font-family: 'Cormorant Garamond', Georgia, serif;
          color: var(--ink);
          position: relative;
        }

        /* ── Grain overlay ── */
        .nda-grain {
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        /* ── Nav ── */
        .nda-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 3rem;
          border-bottom: 1px solid rgba(255,255,255,0.07);
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
        .nda-logo:hover { color: var(--gold); }
        .nda-nav-tag {
          font-family: 'Geist Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: rgba(245,240,232,0.35);
          text-transform: uppercase;
        }

        /* ── Steps ── */
        .nda-steps {
          display: flex;
          justify-content: center;
          padding: 2.5rem 3rem 2rem;
          position: relative;
          z-index: 10;
          gap: 0;
        }
        .nda-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
          max-width: 110px;
          opacity: 0.3;
          position: relative;
        }
        .nda-step::after {
          content: '';
          position: absolute;
          top: 14px;
          left: calc(50% + 14px);
          right: calc(-50% + 14px);
          height: 1px;
          background: rgba(245,240,232,0.15);
        }
        .nda-step:last-child::after { display: none; }
        .nda-step--done { opacity: 0.65; }
        .nda-step--active { opacity: 1; }
        .nda-step-dot {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid rgba(245,240,232,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Geist Mono', monospace;
          font-size: 0.65rem;
          color: var(--parchment);
          background: transparent;
          transition: all 0.3s;
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
          color: rgba(245,240,232,0.45);
          text-transform: uppercase;
        }
        .nda-step--active .nda-step-label { color: var(--gold); }

        /* ── Card ── */
        .nda-card {
          max-width: 800px;
          margin: 0 auto 4rem;
          background: var(--parchment);
          position: relative;
          z-index: 10;
          box-shadow: 0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(184,150,46,0.1);
        }

        .nda-panel {
          padding: 3.5rem 4rem;
        }
        .nda-panel--center { text-align: center; }

        .nda-panel-eyebrow {
          font-family: 'Geist Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: var(--gold);
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }
        .nda-panel-title {
          font-size: 2.2rem;
          font-weight: 300;
          letter-spacing: 0.01em;
          margin: 0 0 0.8rem;
          line-height: 1.2;
        }
        .nda-panel-sub {
          font-size: 1.05rem;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.75;
          margin: 0 0 2.5rem;
        }

        /* ── Form ── */
        .nda-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .nda-field {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .nda-field span {
          font-family: 'Geist Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          color: var(--muted);
          text-transform: uppercase;
        }
        .nda-field input,
        .nda-field select {
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.55);
          padding: 0.8rem 1rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          color: var(--ink);
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          width: 100%;
          box-sizing: border-box;
        }
        .nda-field input:focus,
        .nda-field select:focus {
          border-color: var(--gold);
          background: rgba(255,255,255,0.85);
        }
        .nda-field input::placeholder { color: rgba(107,99,88,0.5); }

        /* ── Consent ── */
        .nda-consent {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.4rem 1.5rem;
          background: rgba(184,150,46,0.05);
          border: 1px solid rgba(184,150,46,0.25);
          margin-bottom: 1.75rem;
          cursor: pointer;
        }
        .nda-consent input { margin-top: 0.2rem; flex-shrink: 0; accent-color: var(--gold); }
        .nda-consent span {
          font-size: 0.92rem;
          line-height: 1.65;
          font-weight: 300;
          color: #3a3530;
        }

        /* ── NDA Document ── */
        .nda-document {
          border: 1px solid var(--border);
          height: 400px;
          overflow-y: auto;
          background: #fff;
          margin-bottom: 1.75rem;
          scroll-behavior: smooth;
        }
        .nda-doc-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 1.5rem 2rem;
          border-bottom: 2px solid var(--ink);
          background: var(--ink);
          color: var(--parchment);
          position: sticky;
          top: 0;
          z-index: 5;
        }
        .nda-doc-logo {
          font-family: 'Geist Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.28em;
        }
        .nda-doc-ref {
          font-family: 'Geist Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.1em;
          color: rgba(245,240,232,0.45);
          text-align: right;
          line-height: 1.7;
        }
        .nda-doc-text {
          padding: 2rem 2.5rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.96rem;
          line-height: 1.95;
          white-space: pre-wrap;
          color: #1a1a18;
          font-weight: 300;
          margin: 0;
        }
        .nda-scroll-cue {
          text-align: center;
          padding: 1.2rem;
          font-family: 'Geist Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          color: var(--gold);
          animation: bounce 1.6s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        .nda-read-confirm {
          text-align: center;
          padding: 1rem;
          font-family: 'Geist Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          color: var(--success-text);
          background: var(--success-bg);
          border-top: 1px solid rgba(26,74,26,0.15);
        }

        /* ── Signer summary ── */
        .nda-signer-summary {
          border: 1px solid var(--border);
          margin-bottom: 1.75rem;
          background: rgba(255,255,255,0.4);
        }
        .nda-signer-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 1.25rem;
          border-bottom: 1px solid var(--border);
          font-size: 0.92rem;
        }
        .nda-signer-row:last-child { border-bottom: none; }
        .nda-signer-row span {
          font-family: 'Geist Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          color: var(--muted);
          text-transform: uppercase;
          flex-shrink: 0;
          margin-right: 1rem;
        }
        .nda-signer-row strong { font-weight: 400; text-align: right; }

        /* ── Sign toggle ── */
        .nda-sign-toggle {
          display: flex;
          border: 1px solid var(--border);
          margin-bottom: 1.25rem;
        }
        .nda-toggle-btn {
          flex: 1;
          padding: 0.8rem;
          background: transparent;
          border: none;
          font-family: 'Geist Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.15em;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s;
          text-transform: uppercase;
        }
        .nda-toggle-btn--active {
          background: var(--ink);
          color: var(--gold);
        }

        /* ── Signature pad ── */
        .sig-wrap {
          border: 1px solid var(--border);
          background: #fff;
          position: relative;
          margin-bottom: 1.25rem;
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
          font-size: 0.58rem;
          letter-spacing: 0.1em;
          background: none;
          border: 1px solid var(--border);
          padding: 0.3rem 0.7rem;
          cursor: pointer;
          color: var(--muted);
          text-transform: uppercase;
        }
        .sig-hint {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Geist Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          color: rgba(107,99,88,0.35);
          pointer-events: none;
        }

        /* ── Typed signature ── */
        .nda-typed-sig-wrap { margin-bottom: 1.25rem; }
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
          box-sizing: border-box;
        }
        .nda-typed-sig-preview {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 2.4rem;
          font-weight: 300;
          color: var(--ink);
          padding: 1.2rem 1.5rem;
          border: 1px solid var(--border);
          background: #fff;
          min-height: 90px;
          display: flex;
          align-items: center;
        }

        /* ── Legal note ── */
        .nda-legal-note {
          font-size: 0.85rem;
          line-height: 1.65;
          color: var(--muted);
          font-weight: 300;
          margin-bottom: 1.75rem;
          padding: 1rem 1.25rem;
          background: rgba(184,150,46,0.04);
          border-left: 2px solid var(--gold);
        }

        /* ── Complete ── */
        .nda-complete-seal {
          font-size: 3.5rem;
          color: var(--gold);
          margin-bottom: 1.5rem;
          display: inline-block;
          animation: rotateSeal 10s linear infinite;
        }
        @keyframes rotateSeal {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .nda-complete-details {
          border: 1px solid var(--border);
          margin: 2rem auto 1.75rem;
          max-width: 500px;
          text-align: left;
          background: rgba(255,255,255,0.4);
        }
        .nda-complete-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 1.25rem;
          border-bottom: 1px solid var(--border);
          font-size: 0.9rem;
          gap: 1rem;
        }
        .nda-complete-row:last-child { border-bottom: none; }
        .nda-complete-row span {
          font-family: 'Geist Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.12em;
          color: var(--muted);
          text-transform: uppercase;
          flex-shrink: 0;
        }
        .nda-complete-row strong { font-weight: 400; text-align: right; }
        .nda-status-badge {
          font-family: 'Geist Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          background: var(--success-bg);
          color: var(--success-text);
          padding: 0.25rem 0.7rem;
          border: 1px solid rgba(26,74,26,0.2);
        }
        .nda-complete-note {
          font-size: 0.95rem;
          color: var(--muted);
          font-weight: 300;
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }
        .nda-complete-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ── Buttons ── */
        .nda-btn {
          width: 100%;
          padding: 1.1rem;
          background: var(--ink);
          color: var(--parchment);
          border: none;
          font-family: 'Geist Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          cursor: pointer;
          transition: opacity 0.2s, background 0.2s;
          text-decoration: none;
          display: inline-block;
          text-align: center;
          text-transform: uppercase;
          box-sizing: border-box;
        }
        .nda-btn:hover:not(:disabled) { opacity: 0.85; }
        .nda-btn:disabled { opacity: 0.35; cursor: not-allowed; }
        .nda-btn--gold {
          background: var(--gold);
          color: var(--ink);
        }
        .nda-btn--gold:hover:not(:disabled) { background: var(--gold-light); opacity: 1; }
        .nda-btn-ghost {
          width: 100%;
          padding: 0.85rem;
          background: transparent;
          border: 1px solid var(--border);
          font-family: 'Geist Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.15em;
          color: var(--muted);
          cursor: pointer;
          margin-top: 0.8rem;
          text-decoration: none;
          display: block;
          text-align: center;
          text-transform: uppercase;
          transition: border-color 0.2s, color 0.2s;
          box-sizing: border-box;
        }
        .nda-btn-ghost:hover:not(:disabled) {
          border-color: var(--gold);
          color: var(--gold);
        }
        .nda-btn-ghost:disabled { opacity: 0.4; cursor: not-allowed; }

        /* ── Error ── */
        .nda-error {
          background: var(--error-bg);
          border-left: 2px solid var(--error-text);
          padding: 0.85rem 1rem;
          font-family: 'Geist Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.05em;
          color: var(--error-text);
          margin-bottom: 1.25rem;
          line-height: 1.5;
        }

        /* ── Footer ── */
        .nda-footer {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          padding: 2rem;
          font-family: 'Geist Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.1em;
          color: rgba(245,240,232,0.25);
          position: relative;
          z-index: 10;
          flex-wrap: wrap;
        }
        .nda-footer-link {
          color: rgba(245,240,232,0.25);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nda-footer-link:hover { color: var(--gold); }

        /* ── Responsive ── */
        @media (max-width: 680px) {
          .nda-nav { padding: 1rem 1.5rem; }
          .nda-panel { padding: 2rem 1.5rem; }
          .nda-grid-2 { grid-template-columns: 1fr; }
          .nda-steps { padding: 1.5rem 1rem; }
          .nda-step-label { display: none; }
          .nda-panel-title { font-size: 1.7rem; }
        }
      `}</style>
    </main>
  );
}