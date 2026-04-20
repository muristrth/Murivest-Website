"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { 
  Check, 
  ChevronRight, 
  Star, 
  Shield, 
  BookOpen, 
  ArrowRight, 
  X,
  Mail,
  User,
  Link as LinkIcon,
  Clock,
  Award,
  ExternalLink,
  Lock
} from "lucide-react";
import Image from "next/image";

// --- Types ---
interface ClaimFormData {
  name: string;
  email: string;
  amazonProfile: string;
}

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

// --- 3D Book Component ---
const Book3D = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      className="relative w-full max-w-[400px] aspect-[3/4] mx-auto perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <motion.div 
        className="relative w-full h-full preserve-3d"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Book Shadow */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-[20px] bg-black/20 blur-xl rounded-full" />
        
        {/* Book Cover */}
        <div className="relative w-full h-full rounded-r-lg shadow-2xl overflow-hidden border-l-4 border-[#B8956B]/30">
          <Image
            src="/TEWC-cover.jpg"
            alt="Trial & Error To Wealth Creation by Mark Muriithi"
            fill
            className="object-cover"
            priority
          />
          {/* Gloss Effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
            style={{ 
              backgroundPosition: useMotionTemplate`${x}px ${y}px`,
            }}
          />
        </div>

        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -right-6 w-16 h-16 bg-[#B8956B] rounded-full flex items-center justify-center shadow-lg"
        >
          <Star className="w-8 h-8 text-[#FAF9F6]" fill="currentColor" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-4 -left-4 bg-[#1B4332] text-[#FAF9F6] px-4 py-2 rounded-lg shadow-xl text-sm font-serif tracking-wide"
        >
          <span className="text-[#B8956B] font-bold">FREE</span> Kindle Edition
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// --- Gold Button Component ---
const GoldButton = ({ 
  children, 
  onClick, 
  variant = "solid",
  className = "",
  icon: Icon = ArrowRight
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  variant?: "solid" | "outline";
  className?: string;
  icon?: React.ElementType;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative overflow-hidden group px-8 py-4 rounded-sm font-sans text-sm tracking-[0.15em] uppercase font-semibold
        transition-all duration-300 cursor-pointer
        ${variant === "solid" 
          ? "bg-[#B8956B] text-[#1B4332] hover:shadow-[0_0_30px_rgba(184,149,107,0.4)]" 
          : "bg-transparent border-2 border-[#B8956B] text-[#B8956B] hover:bg-[#B8956B] hover:text-[#1B4332]"
        }
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}
        <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>
      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.button>
  );
};

// --- Section Header ---
const SectionHeader = ({ eyebrow, title, align = "center" }: { eyebrow: string; title: string; align?: "left" | "center" }) => (
  <motion.div 
    className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={staggerContainer}
  >
    <motion.span 
      variants={fadeInUp}
      className="inline-block text-[#B8956B] text-xs tracking-[0.3em] uppercase font-sans font-semibold mb-4"
    >
      {eyebrow}
    </motion.span>
    <motion.h2 
      variants={fadeInUp}
      className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1B4332] leading-[1.1] max-w-4xl mx-auto"
    >
      {title}
    </motion.h2>
  </motion.div>
);

// --- Custom Gold Check ---
const GoldCheck = () => (
  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B8956B]/10 border border-[#B8956B]/30 flex items-center justify-center mt-1">
    <Check className="w-3.5 h-3.5 text-[#B8956B]" strokeWidth={3} />
  </div>
);

// --- Claim Modal ---
const ClaimModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState<"form" | "amazon" | "confirm" | "success">("form");
  const [formData, setFormData] = useState({ name: "", email: "", amazonProfile: "" });
  const [reviewUrl, setReviewUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [claimId, setClaimId] = useState("");

  useEffect(() => {
    if (isOpen) {
      setStep("form");
      setFormData({ name: "", email: "", amazonProfile: "" });
      setReviewUrl("");
      setClaimId("");
    }
  }, [isOpen]);

  const handleSubmitDetails = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/book-claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setClaimId(data.claimId);
        setStep("amazon");
      } else {
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfirmReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewUrl.trim()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/submit-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ claimId, reviewUrl })
      });

      if (res.ok) {
        setStep("success");
      } else {
        alert("Unable to confirm. Please check your review URL and try again.");
      }
    } catch (error) {
      alert("Connection error. Please try again.");
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B4332]/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-lg bg-[#FAF9F6] rounded-sm shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Progress Bar */}
        <div className="w-full h-1 bg-[#1B4332]/10">
          <motion.div
            className="h-full bg-[#B8956B]"
            initial={{ width: "0%" }}
            animate={{
              width: step === "form" ? "33%" :
                     step === "amazon" ? "66%" :
                     step === "confirm" ? "80%" : "100%"
            }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <div className="p-8 md:p-10">

          {/* STEP 1: Collect Details */}
          {step === "form" && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="mb-8">
                <span className="text-[#B8956B] text-xs tracking-[0.3em] uppercase font-sans font-semibold">
                  Step 1 of 3
                </span>
                <h3 className="font-serif text-3xl text-[#1B4332] mt-2 mb-3">
                  Claim Your Free Copy
                </h3>
                <p className="text-[#2C2C2C]/70 font-sans leading-relaxed text-sm">
                  Enter your details. We'll send you to Amazon to leave your review, then deliver your book within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmitDetails} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1B4332]/60 font-semibold mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B8956B]" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#1B4332]/10 rounded-sm text-[#2C2C2C] placeholder:text-[#2C2C2C]/30 focus:outline-none focus:border-[#B8956B] focus:ring-1 focus:ring-[#B8956B]/20 transition-all font-sans"
                      placeholder="Mark Muriithi"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1B4332]/60 font-semibold mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B8956B]" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#1B4332]/10 rounded-sm text-[#2C2C2C] placeholder:text-[#2C2C2C]/30 focus:outline-none focus:border-[#B8956B] focus:ring-1 focus:ring-[#B8956B]/20 transition-all font-sans"
                      placeholder="founder@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1B4332]/60 font-semibold mb-2">
                    Amazon Profile Name
                  </label>
                  <div className="relative">
                    <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B8956B]" />
                    <input
                      type="text"
                      required
                      value={formData.amazonProfile}
                      onChange={e => setFormData({ ...formData, amazonProfile: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#1B4332]/10 rounded-sm text-[#2C2C2C] placeholder:text-[#2C2C2C]/30 focus:outline-none focus:border-[#B8956B] focus:ring-1 focus:ring-[#B8956B]/20 transition-all font-sans"
                      placeholder="Your Amazon display name"
                    />
                  </div>
                  <p className="mt-2 text-xs text-[#2C2C2C]/50">
                    We use this to match your review to your claim.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1B4332] text-[#FAF9F6] py-4 rounded-sm font-sans text-sm tracking-[0.15em] uppercase font-semibold hover:bg-[#1B4332]/90 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-[#FAF9F6]/30 border-t-[#FAF9F6] rounded-full"
                    />
                  ) : (
                    <>
                      Continue to Amazon
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <p className="mt-6 text-center text-xs text-[#2C2C2C]/40">
                Prefer to skip the line?{" "}
                <a href="https://www.amazon.com/dp/B0GXQTMZCK" className="text-[#B8956B] underline underline-offset-2 hover:text-[#1B4332] transition-colors">
                  Buy on Amazon for $4.99
                </a>
              </p>
            </motion.div>
          )}

          {/* STEP 2: Go to Amazon */}
          {step === "amazon" && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="text-center">
              <div className="w-16 h-16 bg-[#B8956B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ExternalLink className="w-8 h-8 text-[#B8956B]" />
              </div>

              <span className="text-[#B8956B] text-xs tracking-[0.3em] uppercase font-sans font-semibold">
                Step 2 of 3
              </span>
              <h3 className="font-serif text-3xl text-[#1B4332] mt-2 mb-4">
                Leave Your Review on Amazon
              </h3>

              <div className="bg-white p-6 rounded-sm border border-[#1B4332]/5 mb-8 text-left">
                <ol className="space-y-4 text-sm text-[#2C2C2C]/80">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#1B4332] text-[#FAF9F6] rounded-full flex items-center justify-center text-sm font-serif font-bold">1</span>
                    <div className="pt-1">
                      <p className="font-medium text-[#1B4332] mb-1">Click the button below</p>
                      <p className="text-xs text-[#2C2C2C]/60">This opens Amazon's review page directly</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#1B4332] text-[#FAF9F6] rounded-full flex items-center justify-center text-sm font-serif font-bold">2</span>
                    <div className="pt-1">
                      <p className="font-medium text-[#1B4332] mb-1">Write an honest review</p>
                      <p className="text-xs text-[#2C2C2C]/60">Takes 60 seconds. Share what you think.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#1B4332] text-[#FAF9F6] rounded-full flex items-center justify-center text-sm font-serif font-bold">3</span>
                    <div className="pt-1">
                      <p className="font-medium text-[#1B4332] mb-1">Return here to confirm</p>
                      <p className="text-xs text-[#2C2C2C]/60">We'll verify and send your book within 24h</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="space-y-3">
                <a
                  href={`https://www.amazon.com/review/create-review?asin=B0GXQTMZCK`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setStep("confirm")}
                  className="block w-full bg-[#FF9900] hover:bg-[#E8890A] text-[#1B4332] py-4 rounded-sm font-sans text-sm tracking-[0.15em] uppercase font-bold transition-all text-center"
                >
                  Leave Review on Amazon →
                </a>

                <button
                  onClick={() => setStep("confirm")}
                  className="block w-full py-3 text-xs text-[#2C2C2C]/50 hover:text-[#1B4332] transition-colors"
                >
                  I already left my review — confirm now
                </button>
              </div>

              <p className="mt-6 text-xs text-[#2C2C2C]/40">
                Your claim is saved. We sent confirmation to {formData.email}
              </p>
            </motion.div>
          )}

          {/* STEP 3: Confirm Review URL */}
          {step === "confirm" && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="mb-8">
                <span className="text-[#B8956B] text-xs tracking-[0.3em] uppercase font-sans font-semibold">
                  Step 3 of 3
                </span>
                <h3 className="font-serif text-3xl text-[#1B4332] mt-2 mb-3">
                  Confirm Your Review
                </h3>
                <p className="text-[#2C2C2C]/70 font-sans leading-relaxed text-sm">
                  Paste your review URL below so we can verify it and send your book.
                </p>
              </div>

              <form onSubmit={handleConfirmReview} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1B4332]/60 font-semibold mb-2">
                    Amazon Review URL
                  </label>
                  <div className="relative">
                    <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B8956B]" />
                    <input
                      type="url"
                      required
                      value={reviewUrl}
                      onChange={e => setReviewUrl(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#1B4332]/10 rounded-sm text-[#2C2C2C] placeholder:text-[#2C2C2C]/30 focus:outline-none focus:border-[#B8956B] focus:ring-1 focus:ring-[#B8956B]/20 transition-all font-sans"
                      placeholder="https://amazon.com/gp/customer-reviews/..."
                    />
                  </div>
                  <p className="mt-2 text-xs text-[#2C2C2C]/50">
                    How to find it: Go to "Your Account" → "Your Reviews" → Copy the link
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1B4332] text-[#FAF9F6] py-4 rounded-sm font-sans text-sm tracking-[0.15em] uppercase font-semibold hover:bg-[#1B4332]/90 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-[#FAF9F6]/30 border-t-[#FAF9F6] rounded-full"
                    />
                  ) : (
                    <>
                      Submit for Verification
                      <Check className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <button
                onClick={() => setStep("amazon")}
                className="mt-4 w-full py-2 text-xs text-[#2C2C2C]/40 hover:text-[#1B4332] transition-colors"
              >
                ← Go back to Amazon review page
              </button>
            </motion.div>
          )}

          {/* SUCCESS */}
          {step === "success" && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
              <div className="w-20 h-20 bg-[#B8956B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-[#B8956B]" strokeWidth={3} />
              </div>

              <h3 className="font-serif text-3xl text-[#1B4332] mb-4">
                You're All Set
              </h3>

              <p className="text-[#2C2C2C]/70 leading-relaxed mb-8 max-w-sm mx-auto">
                We received your review URL. Our team will verify it within 24 hours and email your Kindle edition to <strong className="text-[#1B4332]">{formData.email}</strong>.
              </p>

              <div className="bg-white p-6 rounded-sm border border-[#1B4332]/5 mb-8 text-left">
                <p className="text-xs uppercase tracking-wider text-[#1B4332]/60 font-semibold mb-3">What happens next</p>
                <div className="space-y-3 text-sm text-[#2C2C2C]/70">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#B8956B]" />
                    <span>Verification: Under 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#B8956B]" />
                    <span>Delivery: Kindle file via email</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4 text-[#B8956B]" />
                    <span>Format: .mobi (works on all Kindle devices)</span>
                  </div>
                </div>
              </div>

              <GoldButton onClick={onClose}>
                Close
              </GoldButton>
            </motion.div>
          )}

        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main Page Component ---
export default function BookLandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
   // Parallax for hero
   const { scrollY } = useScroll();
   const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C] font-sans selection:bg-[#B8956B]/30 selection:text-[#1B4332]">
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#B8956B] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Minimal Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-40 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-[#1B4332]/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-serif text-xl text-[#1B4332] tracking-wide">
            Muriithi<span className="text-[#B8956B]">.</span>
          </div>
          <a 
            href="https://www.amazon.com/dp/B0GXQTMZCK" 
            className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#2C2C2C]/60 hover:text-[#1B4332] transition-colors"
          >
            <span>Buy on Amazon</span>
            <span className="text-[#B8956B]">$4.99</span>
          </a>
        </div>
      </motion.header>

       {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center pt-1 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg.png')" }}
        />
        
        {/* Forest Green Overlay */}
        <div className="absolute inset-0 bg-[#1B4332]/85" />
        
        {/* Optional: Subtle texture on top of overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #B8956B 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        
        {/* Ambient glow (subtle, behind content) */}
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-[#B8956B]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div 
            style={{ y: heroY }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#B8956B]/10 border border-[#B8956B]/20 rounded-full mb-8"
            >
              <Star className="w-3 h-3 text-[#B8956B]" fill="currentColor" />
              <span className="text-[#B8956B] text-xs tracking-[0.2em] uppercase font-semibold">
                For Founders, CEOs, and Serious Investors Only
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#FAF9F6] leading-[1.05] mb-8"
            >
              Stop Chasing Wealth.{" "}
              <span className="text-[#B8956B] italic">Engineer</span> It.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-[#FAF9F6]/80 leading-relaxed mb-10 font-light max-w-lg"
            >
              Here is the <span className="text-[#FAF9F6] font-medium">"Trial & Error"</span> system the world's best investors use to turn market chaos into generational capital.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <GoldButton onClick={() => setIsModalOpen(true)} icon={BookOpen}>
                Claim Free Copy
              </GoldButton>
              <GoldButton 
                variant="outline" 
                onClick={() => window.open("https://www.amazon.com/dp/B0GXQTMZCK", "_blank")}
                className="border-[#FAF9F6]/30 text-[#FAF9F6] hover:bg-[#FAF9F6] hover:text-[#1B4332]"
              >
                Buy on Amazon $4.99
              </GoldButton>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-xs text-[#FAF9F6]/40 flex items-center gap-2"
            >
              <Lock className="w-3 h-3" />
              <span>Free Kindle edition. Verified Amazon review required.</span>
            </motion.p>
          </motion.div>

          {/* Right: 3D Book */}
          <div className="relative">
            <Book3D />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#FAF9F6]/30"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Section 2: The Problem (Empathy & Agitation) */}
      <section className="py-24 md:py-32 bg-[#FAF9F6]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p 
              variants={fadeInUp}
              className="font-serif text-2xl md:text-3xl text-[#1B4332] leading-relaxed mb-8"
            >
              Most people spend their entire lives chasing money, yet they never actually build wealth.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="space-y-6 text-lg text-[#2C2C2C]/80 leading-relaxed">
              <p>
                They rely on hope, luck, or worse—<span className="text-[#1B4332] font-medium">theory</span>. The traditional financial system is designed to keep you guessing, throwing darts in the dark while institutions collect fees on your confusion.
              </p>
              <p>
                It is not your fault.
              </p>
              <p>
                But the ultra-wealthy operate on a completely different, almost invisible framework. One that treats uncertainty not as a risk to avoid, but as a <span className="text-[#B8956B] font-semibold">competitive advantage to exploit</span>.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="mt-12 p-8 bg-[#1B4332]/[0.02] border-l-2 border-[#B8956B]"
            >
              <p className="font-serif text-xl text-[#1B4332] italic">
                "The stock market is a cunning diversion for the masses... a distraction stopping them from discovering where the consistent money is made."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mid-page CTA 1 */}
      <section className="py-8 md:py-10 bg-[#1B4332]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="font-serif text-3xl md:text-4xl text-[#FAF9F6] mb-6"
            >
              Ready to Engineer Your Wealth?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-[#FAF9F6]/80 mb-8 max-w-2xl mx-auto"
            >
              Get your free copy now and discover the trial & error system used by the world's best investors.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldButton onClick={() => setIsModalOpen(true)} icon={BookOpen}>
                Claim Free Copy
              </GoldButton>
              <GoldButton 
                variant="outline" 
                onClick={() => window.open("https://amazon.com/dp/B0GXQTMZCK", "_blank")}
                className="border-white text-white hover:bg-white hover:text-[#1B4332]"
              >
                Buy on Amazon $4.99
              </GoldButton>
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

      {/* Mid-page CTA 2 */}
      <section className="py-8 md:py-10 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#B8956B]/10 border border-[#B8956B]/20 rounded-full mb-6">
              <Award className="w-4 h-4 text-[#B8956B]" />
              <span className="text-[#B8956B] text-xs tracking-[0.2em] uppercase font-semibold">
                Limited Time Offer
              </span>
            </motion.div>
            <motion.h2 
              variants={fadeInUp}
              className="font-serif text-3xl md:text-4xl text-[#1B4332] mb-6"
            >
              Get Your Free Kindle Edition Today
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-[#2C2C2C]/80 mb-8 max-w-2xl mx-auto"
            >
              Free in exchange for an honest Amazon review. Or purchase the paperback for $19.99.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldButton onClick={() => setIsModalOpen(true)} icon={BookOpen}>
                Claim Free Copy
              </GoldButton>
              <GoldButton 
                variant="outline" 
                onClick={() => window.open("https://amazon.com/dp/B0GXQTMZCK", "_blank")}
                className="border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white"
              >
                Buy Paperback $19.99
              </GoldButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: The Fascination Bullets */}
      <section className="py-24 md:py-32 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader 
            eyebrow="What You Will Discover"
            title="Inside this Kindle edition, you will discover:"
          />

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

      {/* Mid-page CTA 3 */}
      <section className="py-8 md:py-10 bg-[#B8956B]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="font-serif text-3xl md:text-4xl text-[#1B4332] mb-6"
            >
              Stop Chasing Wealth. Start Engineering It.
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-[#1B4332]/80 mb-8 max-w-2xl mx-auto"
            >
              The trial & error system is waiting. Claim your free copy now.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <GoldButton onClick={() => setIsModalOpen(true)} icon={BookOpen} className="bg-[#1B4332] text-[#FAF9F6]">
                Claim Free Copy Now
              </GoldButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: The Mechanism Diagram */}
      <section className="py-24 bg-[#1B4332] text-[#FAF9F6] overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-[#B8956B] text-xs tracking-[0.3em] uppercase font-semibold">
              The Framework
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl mt-4">
              The Multi-Generational Stack
            </motion.h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { step: "01", title: "Trust", desc: "Asset protection and dynastic continuity" },
              { step: "02", title: "HoldCo", desc: "Centralized capital allocation and control" },
              { step: "03", title: "OpCo", desc: "Operating companies generating cash flow" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={scaleIn}
                className="relative text-center p-8 border border-[#FAF9F6]/10 rounded-sm bg-[#FAF9F6]/5 backdrop-blur-sm"
              >
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B8956B] text-[#1B4332] w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold">
                  {item.step}
                </span>
                <h3 className="font-serif text-2xl text-[#FAF9F6] mt-4 mb-3">{item.title}</h3>
                <p className="text-[#FAF9F6]/60 text-sm leading-relaxed">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-[#B8956B]" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 6: The Offer & CTA */}
      <section className="py-24 md:py-32 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#B8956B]/10 border border-[#B8956B]/20 rounded-full mb-8">
              <Award className="w-4 h-4 text-[#B8956B]" />
              <span className="text-[#B8956B] text-xs tracking-[0.2em] uppercase font-semibold">
                Limited Time Offer
              </span>
            </motion.div>

            <motion.h2 
              variants={fadeInUp}
              className="font-serif text-5xl md:text-6xl text-[#1B4332] mb-8 leading-tight"
            >
              This book is strictly for the builder in you.
            </motion.h2>

            <motion.p 
              variants={fadeInUp}
              className="text-xl text-[#2C2C2C]/80 leading-relaxed max-w-2xl mx-auto mb-12"
            >
              If you are an operator who is done with theory and ready to build with precision, this decision framework will change everything.
            </motion.p>

            {/* Offer Box */}
            <motion.div 
              variants={scaleIn}
              className="relative bg-white border border-[#1B4332]/10 p-10 md:p-12 rounded-sm shadow-xl shadow-[#1B4332]/5 max-w-2xl mx-auto mb-12"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1B4332] text-[#FAF9F6] px-6 py-1 text-xs tracking-[0.2em] uppercase font-semibold">
                The Deal
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <p className="text-sm text-[#2C2C2C]/60 uppercase tracking-wider mb-2">Kindle Edition</p>
                  <p className="font-serif text-5xl text-[#1B4332] mb-2">FREE</p>
                  <p className="text-sm text-[#2C2C2C]/60">In exchange for an honest Amazon review</p>
                </div>
                <div className="text-left md:border-l md:border-[#1B4332]/10 md:pl-8">
                  <p className="text-sm text-[#2C2C2C]/60 uppercase tracking-wider mb-2">Paperback</p>
                  <p className="font-serif text-5xl text-[#1B4332] mb-2">$19.99</p>
                  <p className="text-sm text-[#2C2C2C]/60">Shipped via Amazon Prime</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#1B4332]/10">
                <GoldButton onClick={() => setIsModalOpen(true)} className="w-full md:w-auto">
                  Claim Free Copy Now
                </GoldButton>
                <p className="mt-4 text-xs text-[#2C2C2C]/40">
                  Or skip the line and{" "}
                  <a href="https://www.amazon.com/dp/B0GXQTMZCK" className="text-[#B8956B] underline underline-offset-2 hover:text-[#1B4332] transition-colors">
                    buy on Amazon for $4.99
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-8 items-center opacity-50">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#2C2C2C]/60">
                <Shield className="w-4 h-4" />
                <span>Secure Process</span>
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#2C2C2C]/60">
                <Clock className="w-4 h-4" />
                <span>24h Verification</span>
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#2C2C2C]/60">
                <Check className="w-4 h-4" />
                <span>Instant Delivery</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: FAQ / Objection Handling */}
      <section className="py-24 bg-[#F5F4F0]">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader 
            eyebrow="Questions"
            title="What serious investors are asking"
          />

          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                q: "Why do you require an Amazon review?",
                a: "Two reasons: First, your honest review helps other founders and CEOs discover this framework. Second, it ensures this book reaches operators who actually implement—not just collectors of free PDFs."
              },
              {
                q: "How long does verification take?",
                a: "Typically under 24 hours. Our system matches your Amazon profile with your review and triggers the email delivery automatically."
              },
              {
                q: "What if I want the paperback instead?",
                a: "The review-for-book exchange applies to the Kindle edition only. If you prefer the physical book, you can purchase it directly on Amazon for $19.99."
              },
              {
                q: "Is this really free? What's the catch?",
                a: "No catch. The Kindle file costs you nothing. We absorb the cost because we know that operators who read and review this book become long-term partners in the Murivest ecosystem."
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-white p-6 rounded-sm border border-[#1B4332]/5"
              >
                <h3 className="font-serif text-lg text-[#1B4332] mb-2">{faq.q}</h3>
                <p className="text-[#2C2C2C]/70 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B4332] text-[#FAF9F6]/60 py-12 border-t border-[#FAF9F6]/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-xl text-[#FAF9F6]">
            Muriithi<span className="text-[#B8956B]">.</span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Murivest Realty Group. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs uppercase tracking-wider">
            <a href="#" className="hover:text-[#B8956B] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#B8956B] transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <ClaimModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}