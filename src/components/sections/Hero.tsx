'use client';

import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 6;
    const y = (e.clientY / window.innerHeight - 0.5) * 6;
    setMousePos({ x, y });
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-[#1B4332] text-[#FAF9F6]"
    >

      {/* =========================
          BACKGROUND (ALL DEVICES)
      ========================== */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) scale(1.03)`,
          transition: 'transform 6000ms ease-out',
        }}
      >

       {/* DESKTOP VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        webkit-playsinline="true"
        poster="/nairobi.png"
        className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-90"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* MOBILE VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        webkit-playsinline="true"
        poster="/nairobi.png"
        className="md:hidden absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332]/15 via-[#244B3C]/80 to-[#1B4332]/12" />
        <div className="absolute inset-0 bg-[#B8956B]/10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-black/10" />

        {/* SOFT GLOW */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#B8956B]/10 blur-3xl rounded-full" />
      </div>

      {/* =========================
    DESKTOP HERO - INSTITUTIONAL
   ========================= */}
<div className="relative z-10 hidden md:block w-full max-w-[1400px] mx-auto px-6 lg:px-16 py-32">
  <div className="grid lg:grid-cols-12 gap-14 items-center">
    {/* LEFT COLUMN */}
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="lg:col-span-7"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-[1px] bg-[#B8956B]" />
        <p className="text-[11px] tracking-[0.4em] uppercase text-[#B8956B] font-mono">
          Murivest Realty Group
        </p>
      </div>

      <h1 className="text-6xl xl:text-7xl font-serif leading-[1.05] mb-8 text-white">
        Private Institutional Commercial Real Estate
        <br />
        <span className="italic text-[#B8956B]">
          Assets & Asset Management
        </span>
      </h1>

      <p className="text-[16px] leading-[1.9] text-[#D6C4AA] max-w-xl mb-8">
        Murivest Realty Group is an independent advisory firm based in Nairobi,
        structuring mandate-based engagements for institutional investors.
      </p>

      <div className="flex gap-4">
        <Link
          href="/contact"
          className="px-7 py-3 border border-[#B8956B] text-[11px] font-semibold uppercase tracking-[0.25em] hover:bg-[#B8956B] hover:text-[#0A0A0A] transition-colors"
        >
          Request Confidential Briefing
        </Link>
        <Link
          href="/about"
          className="px-7 py-3 border border-[#B8956B]/40 text-[#B8956B] text-[11px] font-semibold uppercase tracking-[0.25em] hover:bg-[#B8956B]/10 transition-colors"
        >
          The Investment Mandate
        </Link>
      </div>

      {/* Threshold hint */}
      <p className="text-[9px] uppercase tracking-[0.2em] text-[#8B8680] mt-8 font-mono">
        Qualified Purchasers Only · Minimum Allocation: $5,000,000
      </p>
    </motion.div>

    {/* RIGHT CARD - Glassmorphism */}
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="lg:col-span-5"
    >
      <div className="bg-[#1B4332]/30 backdrop-blur-md border border-[#B8956B]/30 p-10 shadow-2xl">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-px bg-[#B8956B]" />
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#B8956B] font-mono">
            Advisory Mandate
          </p>
        </div>

        <p className="text-[15px] leading-[1.7] text-[#D6C4AA] mb-6 font-light">
          Institutional-grade analysis and structured advisory across East African commercial property markets.
        </p>

        <div className="space-y-3 text-[11px] uppercase tracking-[0.2em]">
          <a
            href="/mandate-access"
            className="block text-[#B8956B] hover:text-white border-b border-[#B8956B]/30 pb-1 transition-colors"
          >
            Mandate-Based Structuring
          </a>
          <a
            href="/institutional-investors"
            className="block text-[#B8956B] hover:text-white border-b border-[#B8956B]/30 pb-1 transition-colors"
          >
            Institutional Investors & HNW Investors
          </a>
          <a
            href="/policy"
            className="block text-[#B8956B] hover:text-white border-b border-[#B8956B]/30 pb-1 transition-colors"
          >
            KYC/AML Verified Engagements
          </a>
        </div>

        {/* Heritage marker */}
        <div className="mt-6 pt-4 border-t border-[#B8956B]/20">
          <p className="text-[9px] text-[#8B8680] tracking-wider font-mono">
            Since 2025 · $1.2B+ AUP
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</div>

      {/* =========================
   MOBILE HERO - INSTITUTIONAL & OLD MONEY
   WITH NAIROBI AERIAL BACKGROUND VIDEO
   ========================= */}
<div className="relative md:hidden flex items-center min-h-screen overflow-hidden">
  
  {/* Background Video - Full Screen, Muted Autoplay for Mobile */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/hero.mp4" type="video/mp4" />
    {/* Fallback image if video fails */}
    <img src="/nairobi.png" alt="Nairobi skyline" className="w-full h-full object-cover" />
  </video>

  {/* Dark overlay for depth and text contrast - keeps the “old money” mood */}
  <div className="absolute inset-0 bg-black/10 z-1"></div>

  {/* Content Card */}
  <div className="relative z-10 w-full px-5">
    <div className="w-full">
      {/* Main Card - Deep, Substantial, Understated Elegance */}
      <div className="bg-[#1B4332]/50 backdrop-blur-sm border-l-[3px] border-l-[#B8956B] border border-[#B8956B]/20 shadow-2xl p-7">
        
        {/* Heritage / Exclusivity Marker */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-8 h-px bg-[#B8956B]/70"></div>
          <p className="text-[9px] tracking-[0.3em] text-[#B8956B] font-mono">
            PRIVATE CAPITAL
          </p>
          <div className="w-8 h-px bg-[#B8956B]/70"></div>
        </div>

        {/* Main Headline - Commanding & Asset-Focused */}
        <h1 className="text-4xl font-serif leading-[1.2] tracking-tight mb-3">
          <span className="block text-white">Institutional</span>
          <span className="block text-[#B8956B] italic">Real Estate</span>
          <span className="block text-white text-2xl tracking-normal mt-1">
            East Africa
          </span>
        </h1>

        {/* Value Proposition - Direct, Capital-Conscious */}
        <p className="text-[13px] text-[#D6C4AA]/90 leading-relaxed mb-5 font-light">
          Preservation of capital, institutional-grade returns, and exclusive access to East Africa's most coveted commercial assets.
        </p>

        {/* Credibility Line - Data-Driven / Heritage */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-b border-[#B8956B]/20 py-3 mb-6">
          <span className="text-[10px] text-[#B8956B] tracking-wider">$3.2B+</span>
          <span className="text-[9px] text-[#8B8680]">•</span>
          <span className="text-[10px] text-[#D6C4AA] tracking-wide">Advised Transactions</span>
          <span className="text-[9px] text-[#8B8680]">•</span>
          <span className="text-[10px] text-[#D6C4AA] tracking-wide">Since 1997</span>
        </div>

        {/* CTA Stack - Exclusive & Actionable */}
        <div className="flex flex-col gap-3 mb-5">
          <Link
            href="/contact"
            className="bg-[#B8956B] text-[#0A0A0A] text-[11px] font-semibold uppercase tracking-[0.2em] py-3.5 text-center hover:bg-[#C8A47E] transition-colors"
          >
            Request Confidential Briefing
          </Link>
          <Link
            href="/about"
            className="border border-[#B8956B]/40 text-[#B8956B] text-[11px] font-semibold uppercase tracking-[0.2em] py-3.5 text-center hover:bg-[#B8956B]/10 transition-colors"
          >
            The Investment Mandate
          </Link>
        </div>

        {/* Institutional Footer - Compliance & Threshold */}
        <div className="text-center pt-1">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#8B8680]">
            Qualified Purchasers Only · KYC Required
          </p>
          <p className="text-[8px] text-[#8B8680]/70 tracking-wider mt-2 font-mono">
            Minimum Allocation: $5,000,000
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default Hero;