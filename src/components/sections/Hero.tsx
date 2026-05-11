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

        {/* VIDEO - DESKTOP ONLY */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>

        {/* MOBILE VIDEO (SOFTER, OPTIONAL) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="md:hidden absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332]/95 via-[#244B3C]/80 to-[#1B4332]/92" />
        <div className="absolute inset-0 bg-[#B8956B]/10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-black/20" />

        {/* SOFT GLOW */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#B8956B]/10 blur-3xl rounded-full" />
      </div>

      {/* =========================
          DESKTOP CONTENT
      ========================== */}
      <div className="relative z-10 hidden md:block w-full max-w-[1400px] mx-auto px-6 lg:px-16 py-32">

        <div className="grid lg:grid-cols-12 gap-14 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >

            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#B8956B]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#B8956B]">
                Murivest Realty Group
              </p>
            </div>

            <h1 className="text-6xl xl:text-7xl font-serif leading-[1.05] mb-8">
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
                className="px-7 py-3 border border-[#B8956B] text-[11px] uppercase tracking-[0.25em] hover:bg-[#B8956B] hover:text-[#1B4332]"
              >
                Request Briefing
              </Link>

              <Link
                href="/about"
                className="px-7 py-3 border border-[#B8956B]/30 text-[#B8956B] text-[11px] uppercase tracking-[0.25em]"
              >
                About
              </Link>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="bg-white/5 border border-[#B8956B]/20 backdrop-blur-md p-10">

              <p className="text-[11px] uppercase tracking-[0.3em] text-[#B8956B] mb-4">
                Advisory Services
              </p>

              <p className="text-[14px] leading-[1.8] text-[#D6C4AA] mb-6">
                Institutional-grade analysis and structured advisory across East African commercial property markets.
              </p>

              <div className="space-y-3 text-[11px] uppercase tracking-[0.2em]">
                <p>Mandate-Based Structuring</p>
                <p>Institutional Investors Only</p>
                <p>KYC/AML Verified Engagements</p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* =========================
          MOBILE HERO (NEW DESIGN)
      ========================== */}
      <div className="relative z-10 md:hidden flex items-center min-h-screen px-5">

        <div className="w-full">

          {/* Compact Card */}
          <div className="bg-black/30 backdrop-blur-md border border-[#B8956B]/20 p-6">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#B8956B] mb-3">
              Independent Advisory
            </p>

            <h1 className="text-3xl font-serif leading-tight mb-4">
              East African<br />
              <span className="text-[#B8956B] italic">
                Real Estate Advisory
              </span>
            </h1>

            <p className="text-[13px] text-[#D6C4AA] leading-relaxed mb-6">
              Institutional commercial property advisory based in Nairobi.
            </p>

            {/* CTA STACKED */}
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="bg-[#B8956B] text-[#1B4332] text-[11px] uppercase tracking-[0.2em] py-3 text-center"
              >
                Request Briefing
              </Link>

              <Link
                href="/about"
                className="border border-[#B8956B]/40 text-[#B8956B] text-[11px] uppercase tracking-[0.2em] py-3 text-center"
              >
                About
              </Link>
            </div>

            <p className="text-[9px] uppercase tracking-[0.2em] text-[#8B8680] mt-5 text-center">
              Institutional Only · KYC Required
            </p>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;