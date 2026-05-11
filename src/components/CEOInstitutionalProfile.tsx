'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const CEOInstitutionalProfile = () => {
  return (
    <section className="bg-[#FFFFFF] text-[#2C2C2C] border-t border-[#E5E2DC]">

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32">

        {/* ── HEADER LABEL ───────────────────────────── */}
        <div className="mb-14">
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium">
            Executive Leadership
          </p>
        </div>

        {/* ── LAYOUT ─────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ── IMAGE (mobile first full width feel) ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="relative aspect-[4/5] border border-[#E5E2DC] overflow-hidden">
              <Image
                src="/CEO.Founder.jpg"
                alt="Mark Muriithi - Chief Executive Officer"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* ── CONTENT ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-8"
          >

            {/* NAME */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.15] mb-2">
              Mark Muriithi
            </h2>

            <p className="text-[12px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-10">
              Chief Executive Officer · Founder
            </p>

            {/* ── CORE QUOTE ─────────────────────────── */}
            <blockquote className="border-l border-[#C4B59D] pl-6 italic text-[15px] sm:text-[16px] leading-[1.9] text-[#5A5A5A] mb-10">
              “Institutional capital is not deployed for momentum —
              it is allocated for durability. Downside protection
              precedes structure. Structure precedes return.”
            </blockquote>

            {/* ── BIO (tightened, less CV tone) ───────── */}
            <div className="space-y-6 text-[14px] leading-[1.9] text-[#5A5A5A] font-light">

              <p>
                Mark Muriithi founded Murivest Realty Group in 2025 to bridge institutional
                capital and Kenya’s commercial real estate market through structured advisory,
                disciplined underwriting, and off-market execution.
              </p>

              <p>
                His background spans commercial real estate, distribution, and technology —
                experience that informs Murivest’s approach to deal origination, asset
                positioning, and investor execution. Earlier roles at Vineyard Properties
                provided direct exposure to transactional real estate markets, while subsequent
                commercial leadership roles strengthened capital markets literacy and network
                depth across East Africa.
              </p>

              <p>
                Murivest is structured to align with institutional expectations:
                underwriting discipline, governance transparency, ESG awareness,
                and reporting standards consistent with pension funds and family offices.
              </p>

            </div>

            {/* ── CTA (subtle institutional action) ───── */}
            <div className="mt-12">
              <Link
                href="/institutional-investors"
                className="group inline-flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-500"
              >
                <span>Request Institutional Briefing</span>
                <span className="w-10 h-[1px] bg-current group-hover:w-14 transition-all duration-500" />
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CEOInstitutionalProfile;