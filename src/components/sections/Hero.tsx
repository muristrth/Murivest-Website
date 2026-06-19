'use client';

import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const STATS = [
  { value: '$1.2B+', label: 'Assets Under Advisory' },
  { value: '8.5–12.5%', label: 'Target Yield Range' },
  { value: '2+', label: 'Years Active in Market' },
];

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
      className="relative min-h-screen w-full overflow-hidden bg-[#0E2A1C] text-[#FAF9F6]"
    >
      {/* ── BACKGROUND ─────────────────────── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) scale(1.04)`,
          transition: 'transform 6000ms ease-out',
        }}
      >
        <video
          autoPlay muted loop playsInline preload="none"
          poster="/nairobi.webp"
          className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="https://pub-eeea8897fc4745d9afaa36485de2ff6c.r2.dev/hero.mp4" type="video/mp4" />
        </video>

        <video
          autoPlay muted loop playsInline preload="none"
          poster="/nairobi.webp"
          className="md:hidden absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="https://pub-eeea8897fc4745d9afaa36485de2ff6c.r2.dev/hero.mp4" type="video/mp4" />
        </video>

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E2A1C]/95 via-[#0E2A1C]/70 to-[#0E2A1C]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A1C]/80 via-transparent to-transparent" />

        {/* Ambient glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-[#B8956B]/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-[#1B4332]/40 blur-[100px] rounded-full pointer-events-none" />
      </div>

      {/* ── DESKTOP LAYOUT ─────────────────── */}
      <div className="relative z-10 hidden md:flex flex-col justify-between min-h-screen max-w-[1400px] mx-auto px-8 lg:px-16 py-14">

        {/* Centre content */}
        <div className="grid lg:grid-cols-12 gap-14 items-end">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1 h-1 rounded-full bg-[#B8956B]" />
              <span className="text-[9px] tracking-[0.45em] uppercase text-[#8B8680] font-mono">
                Private · Institutional · East Africa
              </span>
            </div>

            <h1 className="text-6xl xl:text-[72px] font-serif leading-[1.05] mb-10">
              Institutional Real Estate
              <br />
              <span className="italic text-[#B8956B] font-light">
                Advisory & Asset Management
              </span>
            </h1>

            <p className="text-[16px] leading-[1.95] text-[#C2B9AE] max-w-xl font-light mb-12">
              Murivest Realty Group structures mandate-based engagements for institutional
              investors seeking risk-adjusted exposure to East African commercial property markets.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-[#B8956B] text-[#0A0A0A] text-[10px] font-semibold uppercase tracking-[0.3em] hover:bg-[#C9A57C] transition-colors duration-300 overflow-hidden"
              >
                <span className="relative z-10">Request Confidential Briefing</span>
              </Link>
              <Link
                href="/mandate"
                className="px-8 py-4 border border-[#B8956B]/30 text-[#B8956B] text-[10px] font-semibold uppercase tracking-[0.3em] hover:border-[#B8956B] hover:bg-[#B8956B]/8 transition-all duration-300"
              >
                Investment Mandate
              </Link>
            </div>

            <p className="text-[9px] uppercase tracking-[0.25em] text-[#5A5752] mt-8 font-mono">
              Qualified Purchasers Only · Minimum Allocation: $5,000,000 · KYC Required
            </p>
          </motion.div>

          {/* Right panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#0E2A1C]/60 backdrop-blur-lg border border-[#B8956B]/20 p-10">

              <div className="flex items-center gap-2 mb-8">
                <div className="w-4 h-px bg-[#B8956B]" />
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#B8956B] font-mono">
                  Advisory Mandate
                </span>
              </div>

              {/* Advisory links */}
              <div className="space-y-0 divide-y divide-[#B8956B]/10">
                {[
                  { label: 'Mandate-Based Structuring', href: '/mandate' },
                  { label: 'Institutional & UHNW Investors', href: '/investors' },
                  { label: 'KYC / AML Verified Engagements', href: '/compliance' },
                  { label: 'Off-Market Transaction Access', href: '/properties' },
                  { label: 'Exit Strategy & Risk Engineering', href: '/exit-strategy' },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex items-center justify-between py-4 text-[11px] uppercase tracking-[0.2em] text-[#A8A39D] hover:text-[#B8956B] transition-colors duration-300"
                  >
                    <span>{link.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#B8956B] text-xs">→</span>
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#B8956B]/15">
                <p className="text-[9px] text-[#5A5752] tracking-wider font-mono">
                  Est. 2024 · Nairobi, Kenya · $1.2B+ AUP
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-3 border-t border-[#B8956B]/15 pt-8"
        >
          {STATS.map((stat, i) => (
            <div key={i} className={`${i > 0 ? 'border-l border-[#B8956B]/15 pl-10' : ''}`}>
              <p className="text-2xl font-serif text-[#FAF9F6] mb-1">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#8B8680]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── MOBILE LAYOUT ──────────────────── */}
      <div className="relative z-10 md:hidden flex flex-col justify-between min-h-screen px-5 py-10">

        {/* Mobile top bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <span className="text-[9px] tracking-[0.4em] uppercase text-[#B8956B] font-mono">
            Murivest
          </span>
          <Link
            href="/contact"
            className="text-[9px] tracking-[0.3em] uppercase text-[#8B8680] border border-[#B8956B]/20 px-3 py-1.5"
          >
            Contact
          </Link>
        </motion.div>

        {/* Mobile centre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="py-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-px bg-[#B8956B]" />
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#B8956B] font-mono">
              Private Capital · East Africa
            </span>
          </div>

          <h1 className="text-[38px] font-serif leading-[1.1] mb-6">
            Institutional
            <br />
            <span className="italic text-[#B8956B] font-light">Real Estate</span>
            <br />
            East Africa
          </h1>

          <p className="text-[13px] text-[#C2B9AE] leading-[1.8] mb-8 font-light">
            Mandate-based advisory for institutional investors
            seeking structured exposure to East African commercial assets.
          </p>

          <div className="space-y-3">
            <Link
              href="/contact"
              className="block w-full bg-[#B8956B] text-[#0A0A0A] text-[11px] font-semibold uppercase tracking-[0.25em] py-4 text-center"
            >
              Request Confidential Briefing
            </Link>
            <Link
              href="/mandate"
              className="block w-full border border-[#B8956B]/30 text-[#B8956B] text-[11px] font-semibold uppercase tracking-[0.25em] py-4 text-center"
            >
              Investment Mandate
            </Link>
          </div>

          <p className="text-[9px] uppercase tracking-[0.2em] text-[#5A5752] mt-6 text-center font-mono">
            Qualified Purchasers · Min. $5,000,000
          </p>
        </motion.div>

        {/* Mobile stats */}
        <div className="grid grid-cols-3 border-t border-[#B8956B]/15 pt-6 gap-2">
          {STATS.map((stat, i) => (
            <div key={i} className={`${i > 0 ? 'border-l border-[#B8956B]/15 pl-3' : ''}`}>
              <p className="text-lg font-serif text-[#FAF9F6]">{stat.value}</p>
              <p className="text-[8px] uppercase tracking-[0.15em] text-[#8B8680] mt-0.5 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;