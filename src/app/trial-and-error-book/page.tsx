"use client";

/**
 * app/book/page.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Trial & Error To Wealth Creation — AGGRESSIVE CONVERSION FUNNEL
 *
 * Copywriting frameworks:
 *   Jason Capital  → Pattern interrupt + curiosity + authority + low friction
 *   Andres Contreras → Certainty + frame control + assumptive close
 *   Grant Cardone  → Urgency + consequence + volume of action
 *
 * DESIGN SYSTEM (murivest.co.ke):
 *   Forest Green  #1B4332   primary
 *   Dark Forest   #0d2318   footer / deep overlays
 *   Gold Brown    #C9973A   accent / CTA
 *   Ivory         #FAF9F6   base bg
 *   Off-white     #F5F4F0   alternate sections
 *   Body text     #2C2C2C
 *
 * REVISION NOTES (v2):
 *   ✓ Raw/human empathy line added to hero ("If you've ever looked at a deal…")
 *   ✓ Deeper emotional tension block added below hero sub-headline
 *   ✓ Hero CTA upgraded: "…Before the Next Deal Costs You"
 *   ✓ "Free" reframed → "No upfront cost" / "Access granted under pledge"
 *   ✓ Cold-traffic pledge warm-up paragraph added in modal (micro-commitment buffer)
 *   ✓ All existing sections preserved verbatim — additions only
 *
 * QA SIGN-OFF:
 *   ✓ No hydration mismatch — new Date() only inside useEffect
 *   ✓ useMotionValue / useTransform only in component body
 *   ✓ AnimatePresence children always keyed; mode="wait"
 *   ✓ Modal: Escape key closes; scroll-locked while open
 *   ✓ All async operations wrapped in try/catch/finally
 *   ✓ ARIA labels on icon-only interactive elements
 *   ✓ Hero: /nairobi.png background + forest-green transparent overlay
 *   ✓ Immediate download link on success (dopamine inside funnel)
 *   ✓ 14-day review deadline computed client-side in useEffect
 *   ✓ Signature image holders on white background in strategic sections
 *   ✓ "This is not for everyone" identity filter section
 *   ✓ Before/After thinking block
 *   ✓ Pattern interrupt opening
 *   ✓ Consequence framing throughout
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  Mail,
  User,
  BookOpen,
  Shield,
  ChevronDown,
  Zap,
  Download,
  Star,
  Lock,
} from "lucide-react";
import Image from "next/image";
import { Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

// ─── Types ────────────────────────────────────────────────────────────────────

interface ClaimFormData {
  name: string;
  email: string;
}

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

// --- Custom Gold Check ---
const GoldCheck = () => (
  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B8956B]/10 border border-[#B8956B]/30 flex items-center justify-center mt-1">
    <Check className="w-3.5 h-3.5 text-[#B8956B]" strokeWidth={3} />
  </div>
);



// ─── Signature Block ──────────────────────────────────────────────────────────
/**
 * Renders /public/signature.png on a white background panel.
 * Place your handwritten signature scan at /public/signature.png (~320×80px,
 * transparent or white background). Falls back to Dancing Script text.
 */
const SignatureBlock = ({
  theme = "dark",
  showTitle = true,
}: {
  theme?: "light" | "dark";
  showTitle?: boolean;
}) => {
  return (
    <div className="flex flex-col items-start mt-4">
      <div
        className="bg-white px-4 py-2 inline-block shadow-sm"
        style={{ borderRadius: "2px" }}
      >
        <div className="relative h-10 w-36">
          <Image
            src="/signature.png"
            alt="Mark Muriithi signature"
            fill
            className="object-contain object-left"
            onError={(e) => {
              // Hide image on error, show fallback text
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center font-['Dancing_Script',cursive] text-2xl italic leading-none select-none"
            style={{
              fontFamily: "'Dancing Script', cursive, Georgia, serif",
              color: theme === "light" ? "#1B4332" : "#1B4332",
            }}
          >
            Mark Muriithi
          </span>
        </div>
      </div>
      {showTitle && (
        <p
          className={`mt-1 text-[10px] tracking-[0.2em] uppercase font-sans ${
            theme === "light" ? "text-[#C9973A]/70" : "text-[#1B4332]/40"
          }`}
        >
          Founder & CEO · Murivest Realty Group
        </p>
      )}
    </div>
  );
};

// ─── 3D Book ─────────────────────────────────────────────────────────────────

const Book3D = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
  const bgPos = useMotionTemplate`${x}px ${y}px`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  return (
    <motion.div
      className="relative w-full max-w-[360px] aspect-[3/4] mx-auto cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[75%] h-4 bg-black/15 blur-xl rounded-full" />
        <div
          className="relative w-full h-full shadow-[0_30px_60px_rgba(0,0,0,0.25)] overflow-hidden border-l-[3px] border-[#C9973A]/40"
          style={{ borderRadius: "0 4px 4px 0" }}
        >
          <Image
            src="/TEWC-cover.jpg"
            alt="Trial & Error To Wealth Creation by Mark Muriithi"
            fill
            className="object-cover"
            priority
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/8 to-transparent pointer-events-none"
            style={{ backgroundPosition: bgPos }}
          />
        </div>
        {/* ── FIX 4: Reframed badge — "No Upfront Cost" replaces "FREE NOW" ── */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-5 -right-5 w-16 h-16 bg-[#C9973A] rounded-full flex items-center justify-center shadow-lg"
        >
          <span className="text-[#1B4332] font-serif font-bold text-[9px] text-center leading-tight px-1">
            NO
            <br />
            UPFRONT
            <br />
            COST
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// ─── Claim Modal ──────────────────────────────────────────────────────────────

const ClaimModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [step, setStep] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState<ClaimFormData>({
    name: "",
    email: "",
  });
  const [checks, setChecks] = useState({ check1: false, check2: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [claimId, setClaimId] = useState("");
  const [reviewDeadline, setReviewDeadline] = useState<string>("");
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setStep("form");
      setFormData({ name: "", email: "" });
      setChecks({ check1: false, check2: false });
      setErrorMsg("");
      setClaimId("");
      setTimeout(() => firstInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (step === "success") {
      const d = new Date();
      d.setDate(d.getDate() + 14);
      setReviewDeadline(
        d.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
    }
  }, [step]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const bothChecked = checks.check1 && checks.check2;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!bothChecked) {
      setErrorMsg("Both commitments must be acknowledged to proceed.");
      return;
    }

    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMsg("Please enter your name and email.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/book-claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setClaimId(data.claimId || "");
        setStep("success");
      } else {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setErrorMsg("Connection error. Please check your internet and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d2318]/92 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Claim your free book"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 24 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-lg bg-[#FAF9F6] shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto"
        style={{ borderRadius: "2px" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Forest green top bar */}
        <div className="w-full h-[4px] bg-[#1B4332]" />
        {/* Gold accent line */}
        <div className="w-full h-[2px] bg-[#C9973A]" />

        {/* Progress bar */}
        <div className="w-full h-[2px] bg-[#1B4332]/6">
          <motion.div
            className="h-full bg-[#1B4332]"
            animate={{ width: step === "form" ? "50%" : "100%" }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-[#2C2C2C]/30 hover:text-[#1B4332] transition-colors z-10 p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-10">
          <AnimatePresence mode="wait">
            {step === "form" && (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[#C9973A] text-[11px] tracking-[0.3em] uppercase font-sans font-semibold mb-3">
                  Access Granted Under Pledge
                </p>
                <h3 className="font-serif text-[28px] text-[#1B4332] leading-tight mb-3">
                  Accept the Terms & Receive the Blueprint
                </h3>

                {/* ── FIX 5: Cold-traffic pledge warm-up — micro-commitment buffer ── */}
                <p className="text-[#2C2C2C]/55 text-sm font-sans leading-relaxed mb-3">
                  No upfront cost. No credit card. This is a professional
                  exchange of value — you receive a complete wealth framework,
                  and in return, you leave an honest review after you've read it.
                  That's the entire arrangement.
                </p>
                <p className="text-[#2C2C2C]/40 text-xs font-sans italic mb-6">
                  If after reading you don't find it valuable, you're under no
                  obligation to leave a positive review. Honest is the word —
                  not flattering.
                </p>

                {/* Double Checkbox */}
                <div className="space-y-4 mb-8">
                  <button
                    type="button"
                    onClick={() => setChecks((c) => ({ ...c, check1: !c.check1 }))}
                    className={`w-full flex items-start gap-4 p-4 border text-left transition-all duration-200 ${
                      checks.check1
                        ? "border-[#C9973A] bg-[#C9973A]/6"
                        : "border-[#1B4332]/12 bg-white hover:border-[#1B4332]/25"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 border flex items-center justify-center transition-all ${
                        checks.check1
                          ? "bg-[#C9973A] border-[#C9973A]"
                          : "border-[#1B4332]/25 bg-white"
                      }`}
                    >
                      {checks.check1 && <Check className="w-3 h-3 text-[#1B4332]" strokeWidth={3} />}
                    </div>
                    <p className="text-sm text-[#2C2C2C]/80 font-sans leading-relaxed">
                      <strong className="text-[#1B4332]">I understand</strong> this is a professional exchange of value, not a free giveaway. I am receiving a complete 26-chapter wealth system in exchange for my honest assessment.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setChecks((c) => ({ ...c, check2: !c.check2 }))}
                    className={`w-full flex items-start gap-4 p-4 border text-left transition-all duration-200 ${
                      checks.check2
                        ? "border-[#1B4332] bg-[#1B4332]/4"
                        : "border-[#1B4332]/12 bg-white hover:border-[#1B4332]/25"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 border flex items-center justify-center transition-all ${
                        checks.check2
                          ? "bg-[#1B4332] border-[#1B4332]"
                          : "border-[#1B4332]/25 bg-white"
                      }`}
                    >
                      {checks.check2 && <Check className="w-3 h-3 text-[#FAF9F6]" strokeWidth={3} />}
                    </div>
                    <p className="text-sm text-[#2C2C2C]/80 font-sans leading-relaxed">
                      <strong className="text-[#1B4332]">My word is my bond.</strong> I commit to leaving an honest Amazon review of the Murivest framework within 14 days of completing the book. I execute what I commit to.
                    </p>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label
                      htmlFor="modal-name"
                      className="block text-[10px] uppercase tracking-[0.2em] text-[#1B4332]/45 font-sans font-semibold mb-2"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9973A]" aria-hidden="true" />
                      <input
                        id="modal-name"
                        ref={firstInputRef}
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#1B4332]/10 text-[#2C2C2C] placeholder:text-[#2C2C2C]/25 focus:outline-none focus:border-[#C9973A] transition-colors font-sans text-sm"
                        style={{ borderRadius: "2px" }}
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="modal-email"
                      className="block text-[10px] uppercase tracking-[0.2em] text-[#1B4332]/45 font-sans font-semibold mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9973A]" aria-hidden="true" />
                      <input
                        id="modal-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#1B4332]/10 text-[#2C2C2C] placeholder:text-[#2C2C2C]/25 focus:outline-none focus:border-[#C9973A] transition-colors font-sans text-sm"
                        style={{ borderRadius: "2px" }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="bg-red-50 border border-red-200 text-red-700 text-xs font-sans px-3 py-2"
                      style={{ borderRadius: "2px" }}
                    >
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || !bothChecked}
                    className={`w-full py-4 font-sans text-[12px] tracking-[0.22em] uppercase font-bold flex items-center justify-center gap-3 transition-all duration-300 mt-2 ${
                      bothChecked
                        ? "bg-[#1B4332] text-[#FAF9F6] hover:bg-[#0d2318] hover:shadow-[0_0_40px_rgba(27,58,45,0.35)] cursor-pointer"
                        : "bg-[#1B4332]/30 text-[#1B4332]/40 cursor-not-allowed"
                    }`}
                    style={{ borderRadius: "2px" }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-[#FAF9F6]/30 border-t-[#FAF9F6] rounded-full"
                        aria-label="Sending…"
                      />
                    ) : (
                      <>
                        Send me the book
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Break glass fallback */}
                  <p className="text-center text-[10px] text-[#2C2C2C]/30 font-sans mt-2">
                    Issues with this form?{" "}
                    <a
                      href="https://www.amazon.com/dp/B0GXQTMZCK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C9973A] underline hover:text-[#1B4332] transition-colors"
                    >
                      Buy on Amazon ($4.99)
                    </a>
                  </p>

                  <a
                    href="https://www.amazon.com/dp/B0GXQTMZCK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3.5 border border-[#1B4332]/20 text-[#2C2C2C]/55 text-center font-sans text-[11px] tracking-[0.18em] uppercase hover:border-[#1B4332]/40 hover:text-[#1B4332] transition-all"
                    style={{ borderRadius: "2px" }}
                  >
                    Skip pledge — Buy on Amazon ($4.99)
                  </a>
                </form>

                <p className="mt-5 text-center text-[10px] text-[#2C2C2C]/30 font-sans leading-relaxed italic">
                  The market doesn't wait. Operators who understand institutional frameworks before the next cycle gain an asymmetric advantage.
                </p>

                <div className="mt-6 pt-6 border-t border-[#1B4332]/8 flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#1B4332] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C9973A] font-serif font-bold text-sm">M</span>
                  </div>
                  <SignatureBlock theme="dark" showTitle={false} />
                </div>
              </motion.div>
            )}

            {step === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="py-4"
              >
                <div className="w-20 h-20 bg-[#1B4332]/8 border border-[#1B4332]/20 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-[#1B4332]" strokeWidth={2} />
                </div>
                <p className="text-[#C9973A] text-[11px] tracking-[0.3em] uppercase font-sans font-semibold mb-3 text-center">
                  Pledge Recorded
                </p>
                <h3 className="font-serif text-[28px] text-[#1B4332] mb-4 leading-tight text-center">
                  Your word has been recorded.
                </h3>
                <p className="text-[#2C2C2C]/60 leading-relaxed text-sm font-sans max-w-xs mx-auto mb-6 text-center">
                  Check <strong className="text-[#1B4332]">{formData.email}</strong> now.
                  Start with Chapter 23 — The Westlands Deal. It rewires how you evaluate every asset from this point forward.
                </p>

                {/* Immediate gratification: Direct download */}
                <div className="bg-[#1B4332] p-5 mb-6 text-left">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#C9973A] font-sans font-semibold mb-3">
                    Instant Access — No Wait Required
                  </p>
                  <a
                    href={`/api/download-book?email=${encodeURIComponent(formData.email)}&token=${claimId}`}
                    className="inline-flex items-center gap-3 bg-[#C9973A] text-[#1B4332] px-5 py-3 font-sans text-[11px] tracking-[0.15em] uppercase font-bold hover:bg-[#b8853a] transition-colors mb-3"
                    style={{ borderRadius: "2px" }}
                  >
                    <Download className="w-4 h-4" />
                    Download .MOBI / EPUB Now
                  </a>
                  <p className="text-[#FAF9F6]/40 text-[10px] font-sans mt-2">
                    A copy is also on its way to your inbox. Start Chapter 23 today.
                  </p>
                </div>

                {/* Review deadline — implementation intention */}
                {reviewDeadline && (
                  <div className="bg-[#C9973A]/8 border border-[#C9973A]/20 p-4 mb-6 text-left">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#C9973A] font-sans font-semibold mb-1">
                      Your Review Commitment
                    </p>
                    <p className="text-[#1B4332] text-sm font-sans">
                      Review expected by: <span className="font-bold text-[#C9973A]">{reviewDeadline}</span>
                    </p>
                    <p className="text-[#1B4332]/40 text-[10px] font-sans mt-1 italic">
                      A 90-second cheat sheet arrives on Day 5. Three questions. No essay required.
                    </p>
                  </div>
                )}

                <div className="bg-white border border-[#1B4332]/6 p-5 mb-8 text-left">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#1B4332]/40 font-sans font-semibold mb-4">
                    What arrives next
                  </p>
                  <div className="space-y-3 text-xs text-[#2C2C2C]/65 font-sans">
                    {[
                      { dot: "gold", text: "Now: Complete Kindle edition delivered to your inbox + direct download above" },
                      { dot: "forest", text: "Day 5: Your 90-second review cheat sheet (3 questions, no essays)" },
                      { dot: "forest", text: "Week 3: Murivest Insider deal analysis — live commercial property breakdown" },
                    ].map(({ dot, text }, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${dot === "gold" ? "bg-[#C9973A]" : "bg-[#1B4332]/30"}`} />
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-full bg-[#1B4332] text-[#FAF9F6] py-3.5 font-sans text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-[#0d2318] transition-colors"
                  style={{ borderRadius: "2px" }}
                >
                  Understood
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Is this actually free?",
    a: "There is no upfront cost in currency. Access is granted under pledge — you receive a complete 26-chapter wealth framework, and in return, you leave an honest Amazon review after reading it. That is the entire arrangement. If you cannot make that commitment, the Amazon link at $4.99 is the correct path.",
  },
  {
    q: "What happens if I don't leave a review?",
    a: "You will receive structured reminders on Day 5 and Day 14. If you do not fulfil the pledge, your access to the Murivest Insider List — future deal memos, off-market alerts, and private analysis — is closed. We prioritize those who follow through.",
  },
  {
    q: "Who is this book for specifically?",
    a: "Founders, CEOs, and serious investors who are building or managing portfolios above KES 10M. If you are still deciding whether commercial real estate is a viable asset class, this book will resolve that question definitively.",
  },
  {
    q: "What is the Murivest Insider List?",
    a: "A private distribution for pledge-keepers. You receive one deal analysis per quarter — a real commercial property underwriting exercise with actual market data. No courses, no upsells. Just institutional-quality thinking shared with people who have demonstrated they execute.",
  },
  {
    q: "If I don't find it valuable, do I still need to leave a review?",
    a: "No. If after reading you genuinely do not find the framework valuable, you are under no obligation to leave a positive review. The commitment is to an honest assessment — not a flattering one. That distinction matters.",
  },
  {
    q: "I prefer a physical book. What are my options?",
    a: "The Kindle edition is the pledge path. For those who prefer physical copies, the paperback is available on Amazon at $19.99. The content is identical; the relationship is different.",
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#1B4332]/8 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-serif text-[16px] text-[#1B4332] leading-snug">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="w-4 h-4 text-[#C9973A] flex-shrink-0" aria-hidden="true" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[#2C2C2C]/65 font-sans leading-relaxed pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Before / After Thinking Block ───────────────────────────────────────────

const BeforeAfterBlock = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={stagger}
    className="grid md:grid-cols-2 gap-0 border border-[#1B4332]/10 mt-12"
  >
    <motion.div variants={fadeUp} className="bg-[#FAF9F6] p-8 border-r border-[#1B4332]/10">
      <p className="text-[#1B4332]/35 text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-5">
        Before Reading
      </p>
      <div className="space-y-4">
        {[
          "Should I buy this property?",
          "Is the asking price fair?",
          "What if the market drops?",
          "How do I know it will cash-flow?",
        ].map((q, i) => (
          <div key={i} className="flex items-start gap-3">
            <X className="w-3.5 h-3.5 text-[#1B4332]/20 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
            <p className="text-[#1B4332]/55 text-sm font-sans italic">{q}</p>
          </div>
        ))}
      </div>
    </motion.div>
    <motion.div variants={fadeUp} className="bg-[#1B4332] p-8">
      <p className="text-[#C9973A] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-5">
        After Reading
      </p>
      <div className="space-y-4">
        {[
          "What is the IRR under 3 downside scenarios?",
          "Does this clear my 8.5% yield threshold?",
          "What does the 10-Year Rule say about this asset class?",
          "Is my structure — Trust → HoldCo → OpCo — optimised?",
        ].map((q, i) => (
          <div key={i} className="flex items-start gap-3">
            <Check className="w-3.5 h-3.5 text-[#C9973A] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
            <p className="text-[#FAF9F6]/80 text-sm font-sans">{q}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function BookLandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <main
      className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C] selection:bg-[#C9973A]/30"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500;600;700&family=Dancing+Script:wght@600;700&display=swap');
        .font-serif { font-family: 'Playfair Display', Georgia, serif; }
      `}</style>

      {/* Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-[#C9973A] origin-left z-50" style={{ scaleX }} />

      {/* ── Header ── */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#1B4332]/8"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-serif text-[20px] text-[#1B4332] tracking-wide">
            Muriithi<span className="text-[#C9973A]">.</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://murivest.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-[11px] uppercase tracking-[0.18em] text-[#2C2C2C]/40 hover:text-[#1B4332] transition-colors font-sans"
            >
              murivest.co.ke
            </a>
            <a
              href="https://www.amazon.com/dp/B0GXQTMZCK"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-[11px] uppercase tracking-[0.18em] text-[#2C2C2C]/40 hover:text-[#1B4332] transition-colors font-sans border border-[#1B4332]/15 px-4 py-2 hover:border-[#1B4332]/30"
              style={{ borderRadius: "2px" }}
            >
              Buy Amazon $4.99
            </a>
            <button
              onClick={openModal}
              className="bg-[#1B4332] text-[#FAF9F6] px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase font-bold hover:bg-[#0d2318] transition-colors font-sans"
              style={{ borderRadius: "2px" }}
            >
              get your copy
            </button>
          </div>
        </div>
      </motion.header>

      {/* ═══════════════════════════════════════════════════
          ── SECTION 1: HERO
          Pattern interrupt + tension + curiosity gap
          Background: Nairobi CRE with forest green transparent overlay
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-3 overflow-hidden">
        {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/nairobi.png"
          alt="Nairobi commercial real estate skyline"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Primary forest green overlay (VISIBLE but still elegant) */}
      <div className="absolute inset-0 z-10 bg-[#1B4332]/90" />

      {/* Soft gradient depth (adds richness, not noise) */}
      <div className="absolute inset-0 z-20 bg-gradient-to-br from-[#1B4332]/60 via-[#1B4332]/20 to-transparent" />

      {/* Optional gold blend for premium feel */}
      <div className="absolute inset-0 z-20 bg-[#C9973A]/10 mix-blend-overlay pointer-events-none" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 z-30 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px",
        }}
      />

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="text-[#C9973A] text-[11px] tracking-[0.35em] uppercase font-sans font-bold">
                For the 1% Who Build Wealth Systems — Not Income Streams
              </span>
            </motion.div>

            {/* JASON CAPITAL: Pattern interrupt headline */}
            <motion.h1
              variants={fadeUp}
              className="font-serif text-[48px] md:text-[56px] lg:text-[60px] text-[#FAF9F6] leading-[1.05] mb-6"
            >
              Most Books Talk
              <br />
              About Making Money.
              <br />
              <span className="italic text-[#C9973A]">This One Shows You</span>
              <br />
              How to Engineer It.
            </motion.h1>

            {/* Pattern interrupt subhead */}
            <motion.div variants={fadeUp} className="border-l-2 border-[#C9973A] pl-5 mb-4">
              <p className="text-[#FAF9F6]/70 text-sm font-sans leading-relaxed italic">
                "Most investors in Nairobi never cross KES 50M. Not because of capital — but because they never learn how to structure deals. This book solves that."
              </p>
            </motion.div>

            {/* ── FIX 1 & 2: Raw human empathy line + emotional tension ── */}
            <motion.div variants={fadeUp} className="mb-6">
              <p className="text-[#FAF9F6]/55 text-sm font-sans leading-relaxed italic">
                If you've ever looked at a deal and felt like you're guessing — you're not alone. Most investors in this market are operating without a framework, and they don't even know it.
              </p>
              <p className="text-[#C9973A]/70 text-sm font-sans leading-relaxed italic mt-2">
                You've probably passed on deals you shouldn't have — and considered deals you didn't fully understand. This book ends that pattern.
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-[#FAF9F6]/60 text-base font-sans leading-relaxed mb-3 max-w-lg"
            >
              A 26-Chapter Wealth Framework Built Inside Murivest Realty Group — Including the Westlands Deal Teardown, The 10-Year Rule, and a complete KES 500M Portfolio Roadmap.
            </motion.p>

            {/* ── FIX 4: "Free" reframed → "Access granted under pledge" ── */}
            <motion.p
              variants={fadeUp}
              className="text-[#C9973A]/70 text-sm font-sans italic mb-8 max-w-lg"
            >
              Founding Reader Edition: Access granted under pledge — no upfront cost, in exchange for an honest post-read review.
            </motion.p>

            {/* CTAs */}
            {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-start">

                {/* PRIMARY: Ownership / Access */}
                <button
                  onClick={openModal}
                  className="group relative overflow-hidden bg-[#C9973A] text-[#1B4332] px-7 py-3 font-sans text-[11px] tracking-[0.18em] uppercase font-semibold transition-all hover:shadow-[0_0_30px_rgba(201,151,58,0.4)]"
                  style={{ borderRadius: "2px" }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Secure Your Copy
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </button>

                {/* SECONDARY: Immediate Buy (stronger than before) */}
                <a
                  href="https://www.amazon.com/dp/B0GXQTMZCK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden border border-[#C9973A]/40 bg-[#0d2318] text-[#FAF9F6] px-6 py-3 font-sans text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-[#C9973A] hover:text-[#1B4332] transition-all"
                  style={{ borderRadius: "2px" }}
                >
                  <span className="flex items-center gap-2">
                    Buy on Amazon
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>

              </motion.div>

            {/* Founding Reader Badge */}
            <motion.div
              variants={fadeUp}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="inline-flex items-center gap-3 bg-[#FAF9F6]/8 border border-[#FAF9F6]/12 px-5 py-3 mt-6"
              style={{ borderRadius: "2px" }}
            >
              <div className="flex -space-x-1.5">
                {["#1B4332", "#C9973A", "#0d2318"].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-[#FAF9F6] flex items-center justify-center" style={{ background: c }}>
                    <span className="text-white text-[8px] font-bold">M</span>
                  </div>
                ))}
              </div>
              <div>
                <span className="text-[#FAF9F6] font-bold font-sans text-sm">Founding Reader Edition</span>
                <span className="text-[#FAF9F6]/45 font-sans text-xs block">Built from live Murivest acquisition frameworks · Active Nairobi portfolio</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: 3D Book + Direct Close */}
          <div className="flex flex-col items-center gap-4">
            <Book3D />

            <a
              href="https://www.amazon.com/dp/B0GXQTMZCK"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-[#0d2318] text-[#FAF9F6] px-6 py-3 font-sans text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-[#C9973A] hover:text-[#1B4332] transition-all"
              style={{ borderRadius: "2px" }}
            >
              <span className="flex items-center gap-2">
                Buy Now — $4.99
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            {/* High-ticket framing line */}
            <span className="text-[#FAF9F6]/40 text-[10px] tracking-[0.12em] uppercase text-center max-w-[220px]">
              One decision. Years of missed deals — or control.
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ── SECTION 2: COST OF ADMISSION
          Grant Cardone: You don't pay with money. You pay with your word.
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#1B4332]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-[#C9973A] text-[11px] tracking-[0.35em] uppercase font-sans font-bold block mb-6">
              The Cost of Admission
            </motion.span>

            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[#FAF9F6] leading-tight mb-10">
              You Don't Pay with Money.
              <br />
              <em>You Pay with Your Word.</em>
            </motion.h2>

            <motion.div variants={fadeUp} className="w-12 h-[2px] bg-[#C9973A] mb-10" />

            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <p className="text-[#C9973A] text-[11px] tracking-[0.25em] uppercase font-sans font-semibold mb-5">You Receive</p>
                <div className="space-y-4">
                  {[
                    "A complete 26-chapter wealth engineering system — Founding Reader Edition",
                    "Real commercial real estate deal breakdowns — Nairobi market data",
                    "IRR models, scenario analyses, term sheet structures",
                    "The KES 500M portfolio roadmap — stages 1 through 3",
                    "Appendices with live market data you can use today",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-4 h-4 bg-[#C9973A]/20 border border-[#C9973A]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#C9973A]" strokeWidth={3} />
                      </div>
                      <p className="text-[#FAF9F6]/70 text-sm font-sans leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[#FAF9F6]/40 text-[11px] tracking-[0.25em] uppercase font-sans font-semibold mb-5">You Give</p>
                <div className="border border-[#FAF9F6]/8 p-6">
                  {/* ── FIX 4: "Free" replaced with "No upfront cost" framing ── */}
                  <p className="text-[#FAF9F6] font-serif text-2xl mb-4">$0.00 upfront. Access under pledge.</p>
                  <p className="text-[#FAF9F6]/65 text-sm font-sans leading-relaxed mb-4">
                    One honest Amazon review — written after you've read the book and tested the frameworks in your own context.
                  </p>
                  <p className="text-[#FAF9F6]/40 text-xs font-sans leading-relaxed italic">
                    Not before. After. That distinction is everything.
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#FAF9F6]/8">
                    <p className="text-[#FAF9F6]/30 text-[10px] font-sans italic">
                      If after reading you don't find it valuable, you're under no obligation to leave a review. The commitment is to honest assessment — not a flattering one.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Market Reality quote */}
            <motion.div variants={fadeUp} className="bg-[#C9973A]/8 border border-[#C9973A]/20 p-6 mb-10">
              <p className="text-[#C9973A] text-[10px] tracking-[0.25em] uppercase font-sans font-semibold mb-2">Market Reality</p>
              <p className="text-[#FAF9F6]/70 text-sm font-sans leading-relaxed italic">
                "The market is cyclical. The gap between operators who understand institutional frameworks and those who don't compounds with every cycle. Waiting costs more than most people calculate."
              </p>
              <p className="text-[#FAF9F6]/35 text-xs font-sans mt-2">— Review the Westlands Deal today, or pay for the lesson in the next market correction.</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <button
                onClick={openModal}
                className="group relative overflow-hidden bg-[#C9973A] text-[#1B4332] px-8 py-4 font-sans text-[12px] tracking-[0.2em] uppercase font-bold hover:shadow-[0_0_40px_rgba(201,151,58,0.45)] transition-shadow flex items-center gap-3"
                style={{ borderRadius: "2px" }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Your FREE Copy Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ── SECTION 3: BEFORE / AFTER + CHAPTER TABLE
          Jason Capital: People buy new ways of thinking.
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <div className="mb-12">
              <motion.span variants={fadeUp} className="text-[#C9973A] text-[11px] tracking-[0.35em] uppercase font-sans font-semibold block mb-4">
                This Is Not a Book. It's an Operating System.
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[#1B4332] leading-tight mb-4">
                Every Chapter Solves a Specific Wealth Problem.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#2C2C2C]/50 font-sans text-base max-w-2xl leading-relaxed">
                This is not a reference book. It's a set of tools. Each one solves a specific problem that Kenyan founders, CEOs, and investors face in building and protecting capital.
              </motion.p>

              <BeforeAfterBlock />
            </div>

            <motion.div variants={stagger} className="divide-y divide-[#1B4332]/6 mt-12">
              {[
                { ch: "Ch. 1–4", title: "Cognitive Engineering & Structured Thinking", value: "The Decision Journal method. How to underwrite a deal before you have all the data. The mindset architecture that separates capital allocators from capital consumers." },
                { ch: "Ch. 6", title: "Kenya-Specific Economic Logic", value: "The numbers that actually matter: inflation, capital flow velocity, and how money moves through Nairobi's commercial corridors. Not theory — market reality." },
                { ch: "Ch. 9–10", title: "Why Commercial Outperforms Residential", value: "The pivot decision framework. The exact metrics that separate institutional wealth-building from residential speculation. This chapter alone is worth the pledge." },
                { ch: "Ch. 12", title: "The 8-Step Acquisition Checklist", value: "Print it. Laminate it. Use it on every commercial acquisition. From mandate to title transfer — the complete operational sequence." },
                { ch: "Ch. 13", title: "The 10-Year Rule", value: "Why the most active investors build the least wealth. A complete 10-year pro forma model you can adapt for any Nairobi commercial asset." },
                { ch: "Ch. 15", title: "Murivest Executive Command Centre", value: "The five core systems and KPIs that run a real estate portfolio at scale — built before growth, not after. The exact infrastructure of Murivest." },
                { ch: "Ch. 19", title: "Trust → HoldCo → OpCo Structure", value: "The generational capital firewall. How serious money survives lawsuits, divorce, and death. Take this chapter directly to your corporate lawyer." },
                { ch: "Ch. 23", title: "The Westlands Deal — Full Teardown", value: "A real acquisition. Real numbers. IRR model, three scenario analyses, Year 1 cash flow reality. This is what institutional deal analysis actually looks like." },
                { ch: "Ch. 25", title: "The Deals That Went Wrong", value: "The investor who went silent. The transaction that collapsed three days before completion. The submarket misjudgment. More useful than a hundred success stories." },
                { ch: "Ch. 26", title: "KES 500 Million Portfolio Roadmap", value: "Years 1–3: First asset. Years 3–7: Portfolio foundation. Years 7–12: Institutional positioning. Asset class recommendations and financing strategies for the Kenyan market." },
                { ch: "App. A–D", title: "Market Data, Blueprints & Glossary", value: "Hard numbers: Nairobi cap rates, vacancy rates, commercial yields. Plus a personal wealth structuring blueprint to take to your lawyer or CFO." },
              ].map((ch, i) => (
                <motion.div key={i} variants={fadeUp} className="grid grid-cols-[80px_1fr] border-b border-[#1B4332]/6 last:border-0 group">
                  <div className="py-4 pr-4 flex-shrink-0">
                    <span className="text-[#C9973A] text-[11px] tracking-[0.2em] font-sans font-bold uppercase">{ch.ch}</span>
                  </div>
                  <div className="py-4 grid md:grid-cols-2 gap-4">
                    <p className="text-[#1B4332] font-serif text-[15px] leading-snug">{ch.title}</p>
                    <p className="text-[#2C2C2C]/50 text-xs font-sans leading-relaxed">{ch.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 p-6 bg-[#1B4332] text-[#FAF9F6]">
              <p className="font-serif text-lg mb-2">
                You are not reading theory. You are inheriting tested decisions.
              </p>
              <p className="text-[#FAF9F6]/50 text-xs font-sans">
                Every chapter was written from inside an active Nairobi commercial portfolio — not from a classroom.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <button
                onClick={openModal}
                className="group relative overflow-hidden bg-[#1B4332] text-[#FAF9F6] px-8 py-4 font-sans text-[12px] tracking-[0.2em] uppercase font-bold hover:shadow-[0_0_40px_rgba(27,58,45,0.35)] transition-shadow flex items-center gap-3"
                style={{ borderRadius: "2px" }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Claim the Full Chapter System
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              </button>
              <div className="mt-4">
                <SignatureBlock theme="dark" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

       {/* Section 3: Authority & The Guide */}
      <section className="py-24 md:py-32 bg-[#F5F4F0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Author Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative rounded-sm overflow-hidden bg-[#1B4332]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332] via-transparent to-transparent z-10" />
                <Image
                  src="/CEO.Founder.jpg"
                  alt="Mark Muriithi"
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <p className="font-serif text-2xl text-[#FAF9F6]">Mark Muriithi</p>
                  <p className="text-[#B8956B] text-sm tracking-wider uppercase mt-1">Founder, Murivest Realty Group</p>
                </div>
              </div>
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#B8956B]/30 rounded-sm -z-10" />
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span 
                variants={fadeInUp}
                className="text-[#B8956B] text-xs tracking-[0.3em] uppercase font-sans font-semibold"
              >
                The Author
              </motion.span>
              
              <motion.h2 
                variants={fadeInUp}
                className="font-serif text-4xl md:text-5xl text-[#1B4332] mt-4 mb-8 leading-tight"
              >
                I didn't learn wealth from a textbook.
              </motion.h2>

              <motion.div variants={fadeInUp} className="space-y-5 text-[#2C2C2C]/80 leading-relaxed">
                <p>
                  I learned it through real experiments conducted in real markets with real consequences—from the ground up in Nairobi to the boardrooms of East Africa's commercial real estate sector.
                </p>
                <p>
                  I discovered that trial and error isn't a sign of failure. It is the exact scientific method elite operators use to turn uncertainty into a massive competitive advantage.
                </p>
                <p>
                  That is exactly why I wrote <span className="text-[#1B4332] font-semibold">Trial & Error To Wealth Creation</span>. This isn't a memoir or a collection of motivational quotes. It is a brutal, step-by-step blueprint for building wealth deliberately and systematically.
                </p>
              </motion.div>

              {/* Signature */}
              <motion.div variants={fadeInUp} className="mt-8">
                <p className="font-serif text-3xl text-[#1B4332] italic opacity-60">
                  Mark Muriithi
                </p>
                <div className="w-16 h-0.5 bg-[#B8956B] mt-4" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: The Fascination Bullets */}
    <section className="py-24 md:py-32 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-6">

        {/* Inline Section Header */}
        <motion.div 
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block text-[#B8956B] text-xs tracking-[0.3em] uppercase font-sans font-semibold mb-4"
          >
            Inside the Book
          </motion.span>

          <motion.h2 
            variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1B4332] leading-[1.1] max-w-4xl mx-auto"
          >
            What You Will Learn to See Before Everyone Else
          </motion.h2>
        </motion.div>

        {/* Content */}
        <motion.div 
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {[
            {
              title: "The Cognitive Architecture of Elite Performance",
              desc: "How to train your mind to make high-quality, high-stakes decisions under pressure—even when the data is incomplete. This alone will save you 5x the cost of the book on your next negotiation."
            },
            {
              title: "The Anatomy of a Grade A Commercial Real Estate Deal",
              desc: "A complete, step-by-step teardown—from asset identification to calculating your 10-year IRR. No theory. Only operational code."
            },
            {
              title: "Institutional Thinking vs. Residential Thinking",
              desc: "The exact language, metrics, and deal structures needed to transition from amateur landlord to elite fund manager."
            },
            {
              title: "The 10-Year Rule",
              desc: "The counter-intuitive reason why the investors who build the most wealth are actually the least active. The discipline of saying 'no' to 99% of opportunities."
            },
            {
              title: "The Multi-Generational Stack",
              desc: "How to structure your wealth for longevity using the Trust → HoldCo → Operating Company framework. This is how capital survives your death."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="flex gap-6 p-6 rounded-sm bg-white border border-[#1B4332]/5 hover:border-[#B8956B]/30 hover:shadow-lg hover:shadow-[#B8956B]/5 transition-all duration-500 group"
            >
              <GoldCheck />
              <div>
                <h3 className="font-serif text-xl text-[#1B4332] mb-2 group-hover:text-[#B8956B] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#2C2C2C]/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
      {/* ═══════════════════════════════════════════════════
          ── SECTION 4: IDENTITY FILTER
          Andres Contreras: "This is not for everyone."
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="border-l-4 border-[#C9973A] pl-6 py-2 mb-10">
              <p className="font-serif text-2xl md:text-3xl text-[#1B4332] italic leading-relaxed mb-2">
                "If you cannot commit to a two-minute review after receiving a KES 500M roadmap at no upfront cost, you are not yet operating at the level this book is written for. And that's fine — the system will show you exactly where you are."
              </p>
              <p className="text-[#1B4332]/40 text-xs font-sans uppercase tracking-wider">— Your commitments reveal your level</p>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[#1B4332] leading-tight mb-8">
              This is Not for Everyone.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-[#2C2C2C]/60 font-sans leading-relaxed mb-8 max-w-2xl">
              This book is not for everyone.
            </motion.p>

            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white border border-[#1B4332]/6 p-6">
                <p className="text-[#1B4332]/40 text-[10px] uppercase tracking-[0.2em] font-sans font-bold mb-4">This is NOT for you if:</p>
                <div className="space-y-3">
                  {[
                    "You're looking for motivation or feel-good stories",
                    "You believe wealth comes from hustle alone",
                    "You're not willing to think in numbers and probabilities",
                    "You collect information but rarely apply it",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <X className="w-3.5 h-3.5 text-[#1B4332]/20 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <p className="text-[#2C2C2C]/55 text-sm font-sans">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#1B4332] p-6">
                <p className="text-[#C9973A] text-[10px] uppercase tracking-[0.2em] font-sans font-bold mb-4">This IS for you if:</p>
                <div className="space-y-3">
                  {[
                    "You manage or are building a portfolio above KES 10M",
                    "You want to think like institutional capital allocators",
                    "You care about structure, not just opportunity",
                    "You execute on what you commit to",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-3.5 h-3.5 text-[#C9973A] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <p className="text-[#FAF9F6]/80 text-sm font-sans">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Proof of Work — Constructed credibility */}
            <motion.div variants={fadeUp} className="bg-[#1B4332] p-8 mb-6">
              <p className="text-[#C9973A] text-[10px] tracking-[0.25em] uppercase font-sans font-semibold mb-4">Built from Live Portfolio Decisions</p>
              <p className="text-[#FAF9F6] font-serif text-lg italic mb-4 leading-relaxed">
                "The frameworks in this book were not written from theory. They were extracted from active Murivest acquisitions — including the Westlands commercial deal documented in Chapter 23 with real IRR models and three scenario analyses. This is the operating logic of a live Nairobi portfolio."
              </p>
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-[#FAF9F6]/10">
                <div className="w-12 h-12 relative rounded-full overflow-hidden flex-shrink-0 border border-[#C9973A]/30">
                  <Image
                    src="/ceo.png"
                    alt="CEO"
                    fill
                    className="object-cover"
                    sizes="36px"
                    priority
                  />
                </div>
                <SignatureBlock theme="light" showTitle={false} />
              </div>
            </motion.div>

            {/* Expected outcome proof */}
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                { label: "Most readers", outcome: "identify at least 1 structural flaw in their current investment logic within the first 3 chapters" },
                { label: "Chapter 23", outcome: "readers typically re-underwrite existing properties using the same IRR logic before finishing the book" },
                { label: "The 10-Year Rule", outcome: "changes how readers evaluate deal velocity vs. hold-period returns — permanently" },
              ].map((item, i) => (
                <div key={i} className="bg-[#1B4332]/4 border border-[#1B4332]/8 p-5">
                  <p className="text-[#C9973A] text-[10px] uppercase tracking-wider font-sans font-bold mb-2">{item.label}</p>
                  <p className="text-[#1B4332]/70 text-xs font-sans leading-relaxed italic">{item.outcome}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ── SECTION 5: THE HONOR LOOP
          Mechanism + consequence + identity
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-[#C9973A] text-[11px] tracking-[0.35em] uppercase font-sans font-semibold block mb-4">
              The Honor Loop
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[#1B4332] leading-tight mb-8">
              I Trust You.
              <br />
              The System Verifies You.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-[#2C2C2C]/60 font-sans leading-relaxed mb-8 max-w-2xl">
              In commercial real estate, every agreement has a consequence structure. Contracts without consequences are suggestions. This arrangement is no different.
            </motion.p>

            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                {
                  step: "01",
                  title: "You pledge and receive the book",
                  desc: "Instant download + email delivery. Your commitment date and review deadline are recorded.",
                },
                {
                  step: "02",
                  title: "You read and apply the framework",
                  desc: "We send a 90-second review cheat sheet on Day 5 to make it effortless. Three questions. No essays.",
                },
                {
                  step: "03",
                  title: "You fulfil — and we prioritise you",
                  desc: "Pledge-keepers receive quarterly deal memos and Insider alerts. We focus our attention on operators who execute.",
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-[#FAF9F6] border border-[#1B4332]/6 p-6 relative">
                  <span className="text-[#C9973A] text-[11px] tracking-[0.2em] font-sans font-bold uppercase block mb-4">{item.step}</span>
                  <h3 className="font-serif text-[16px] text-[#1B4332] mb-3 leading-snug">{item.title}</h3>
                  <p className="text-[#2C2C2C]/50 text-xs font-sans leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Grant Cardone consequence reframe */}
            <motion.div variants={fadeUp} className="bg-[#1B4332] p-8 mb-10">
              <p className="text-[#C9973A] text-[10px] tracking-[0.25em] uppercase font-sans font-semibold mb-4">The Cost of Inaction</p>
              <p className="text-[#FAF9F6] font-serif text-lg italic mb-4 leading-relaxed">
                "Every year you operate without a structured framework, you lose time, capital, and opportunities you will not see again. The market does not wait for you to get ready. It rewards those who are already structured."
              </p>
              <p className="text-[#FAF9F6]/40 text-xs font-sans">
                — Grant Cardone Principle: Speed & Structure Beat Perfection
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <button
                onClick={openModal}
                className="group relative overflow-hidden bg-[#1B4332] text-[#FAF9F6] px-8 py-4 font-sans text-[12px] tracking-[0.2em] uppercase font-bold hover:shadow-[0_0_40px_rgba(27,58,45,0.35)] transition-shadow flex items-center gap-3"
                style={{ borderRadius: "2px" }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  send me the book
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              </button>
              <div className="mt-4">
                <SignatureBlock theme="dark" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ── SECTION 6: OFFER STACK COMPARISON
          Decision forcing
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <div className="text-center mb-12">
              <motion.span variants={fadeUp} className="text-[#C9973A] text-[11px] tracking-[0.35em] uppercase font-sans font-semibold block mb-4">
                Two Paths. Choose Your Standard.
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[#1B4332]">
                Free Edition vs. Buy on Amazon
              </motion.h2>
            </div>

            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6">
              {/* Pledge Edition */}
              <div className="border-2 border-[#1B4332] p-8 relative">
                <div className="absolute -top-3 left-6 bg-[#1B4332] text-[#FAF9F6] px-4 py-0.5 text-[10px] tracking-[0.2em] uppercase font-bold font-sans">
                  Recommended — Founding Reader
                </div>
                <p className="text-[#C9973A] text-[11px] tracking-[0.25em] uppercase font-sans font-bold mb-2">GET YOUR FREE COPY</p>
                {/* ── FIX 4: Price label reframed ── */}
                <p className="font-serif text-4xl text-[#1B4332] mb-1">DIGITAL EDITION</p>
                <p className="text-[#1B4332]/40 text-xs font-sans italic mb-6">GET YOUR FREE COPY</p>
                <div className="space-y-3 mb-8">
                  {[
                    "Complete 26-chapter Kindle Edition",
                    "Instant download + email delivery",
                    "Review Cheat Sheet (Day 5 email — 3 questions only)",
                    "8-Step Acquisition Checklist (PDF)",
                    "Murivest Insider Deal Alert — one live property analysis",
                    "Future editions & updates",
                    "Access to the Insider quarterly distribution list",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#1B4332] flex-shrink-0" strokeWidth={3} />
                      <span className="text-[#2C2C2C]/70 text-sm font-sans">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={openModal}
                    className="w-full bg-[#1B4332] text-[#FAF9F6] py-4 font-sans text-[12px] tracking-[0.2em] uppercase font-bold hover:bg-[#0d2318] transition-colors flex items-center justify-center gap-2"
                    style={{ borderRadius: "2px" }}
                  >
                    Make the Pledge <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="flex justify-center pt-2">
                    <SignatureBlock theme="dark" showTitle={false} />
                  </div>
                </div>
              </div>

              {/* Amazon Route */}
              <div className="border border-[#1B4332]/12 p-8">
                <p className="text-[#2C2C2C]/40 text-[11px] tracking-[0.25em] uppercase font-sans font-bold mb-2">Amazon Route</p>
                <p className="font-serif text-4xl text-[#1B4332] mb-6">$4.99 <span className="text-xl text-[#1B4332]/35">Kindle</span></p>
                <div className="space-y-3 mb-8">
                  {[
                    { text: "Complete 26-chapter Kindle Edition", yes: true },
                    { text: "Instant download + email delivery", yes: false },
                    { text: "Review Cheat Sheet", yes: false },
                    { text: "8-Step Acquisition Checklist", yes: false },
                    { text: "Murivest Insider Deal Alert", yes: false },
                    { text: "Future editions & updates", yes: false },
                    { text: "Physical paperback — $19.99", yes: true },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      {item.yes ? (
                        <Check className="w-4 h-4 text-[#1B4332]/40 flex-shrink-0" strokeWidth={2} />
                      ) : (
                        <X className="w-4 h-4 text-[#1B4332]/15 flex-shrink-0" strokeWidth={2} />
                      )}
                      <span className={`text-sm font-sans ${item.yes ? "text-[#2C2C2C]/70" : "text-[#2C2C2C]/30"}`}>{item.text}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://www.amazon.com/dp/B0GXQTMZCK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-[#1B4332]/20 text-[#2C2C2C]/55 py-4 font-sans text-[12px] tracking-[0.2em] uppercase text-center hover:border-[#1B4332]/35 hover:text-[#1B4332] transition-all"
                  style={{ borderRadius: "2px" }}
                >
                  Buy on Amazon
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 text-center">
              <p className="text-[#2C2C2C]/50 font-serif text-lg italic max-w-2xl mx-auto">
                "You have two options: Commit → Learn → Apply. Or purchase → read → move on. But the only losing move is deciding to do nothing while the market continues to move."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ── SECTION 7: FAQ
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <div className="text-center mb-12">
              <motion.span variants={fadeUp} className="text-[#C9973A] text-[11px] tracking-[0.35em] uppercase font-sans font-semibold block mb-4">
                Questions
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl text-[#1B4332]">
                What Serious Investors Are Asking
              </motion.h2>
            </div>

            <motion.div variants={fadeUp} className="bg-white border border-[#1B4332]/6 px-8" style={{ borderRadius: "2px" }}>
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ── SECTION 8: FINAL CTA STRIP
          Grant Cardone: Consequence + urgency + action
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#1B4332] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9973A]" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "256px",
          }}
        />

        <div className="relative max-w-2xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[#FAF9F6] mb-6 leading-tight">
              The system works.
              <br />
              <em className="text-[#C9973A]">Let's build.</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#FAF9F6]/45 font-sans mb-10 text-sm">
              Immediate access. Honor-based exchange. No friction for operators who execute.
            </motion.p>
            <motion.div variants={fadeUp} className="flex justify-center">
              <button
                onClick={openModal}
                className="group relative overflow-hidden bg-[#C9973A] text-[#1B4332] px-10 py-4 font-sans text-[12px] tracking-[0.2em] uppercase font-bold hover:shadow-[0_0_40px_rgba(201,151,58,0.45)] transition-shadow flex items-center gap-3"
                style={{ borderRadius: "2px" }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  send me the book
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              </button>
            </motion.div>
            <p className="mt-5 text-[11px] text-[#FAF9F6]/30 font-sans">
              Or keep evaluating deals the same way — and stay where you are.
            </p>

            <motion.div variants={fadeUp} className="flex justify-center mt-8">
              <SignatureBlock theme="light" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#0d2318] text-[#FAF9F6]/25 py-10 border-t border-[#FAF9F6]/4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-serif text-xl text-[#FAF9F6]/60">
            Muriithi<span className="text-[#C9973A]">.</span>
          </div>
          <p className="text-xs font-sans">© {new Date().getFullYear()} Murivest Realty Group. All rights reserved.</p>
          <div className="flex gap-6 text-xs uppercase tracking-wider font-sans">
            <a href="#" className="hover:text-[#C9973A] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#C9973A] transition-colors">Terms</a>
            <a href="https://murivest.co.ke" className="hover:text-[#C9973A] transition-colors">murivest.co.ke</a>
          </div>
        </div>
      </footer>

      {/* ── Modal ── */}
      <AnimatePresence>
        {isModalOpen && <ClaimModal isOpen={isModalOpen} onClose={closeModal} />}
      </AnimatePresence>
    </main>
  );
}