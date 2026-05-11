'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Timer, ShieldAlert, FileCheck } from 'lucide-react';

const items = [
  {
    icon: Timer,
    stat: '7 – 10',
    statUnit: 'Year Hold Horizon',
    title: 'Exit Is Designed at Entry',
    body:
      "Institutional capital globally now holds assets for 6–7 years on average. Murivest pre-defines exit timing, buyer profile, and disposal pathway at mandate inception so every lease and capital decision aligns with exit value creation.",
    footnote: 'McKinsey Global Private Markets Report 2026',
  },
  {
    icon: ShieldAlert,
    stat: '40%',
    statUnit: 'of Land Fraud Cases in Kenya',
    title: 'Title Risk Is Structural',
    body:
      "Land-related fraud remains the dominant form of financial loss in Kenya’s property market, with over 10,000 active investigations. Every mandate begins with forensic title verification, encumbrance checks, and regulatory compliance screening.",
    footnote: 'EACC 2023 · Ministry of Lands Kenya 2024',
  },
  {
    icon: FileCheck,
    stat: '3',
    statUnit: 'Exit Structures',
    title: 'Liquidity Is Engineered',
    body:
      "Exit is structured through institutional sale, recapitalisation, or sale-leaseback mechanisms depending on asset profile. Each route is designed for tax efficiency, compliance alignment, and capital mobility under IFRS standards.",
    footnote: 'McKinsey GPM 2025 · IFRS 16 · KRA CGT Framework',
  },
];

const TaxIntelligenceSection = () => {
  return (
    <section className="relative bg-[#F8F7F4] overflow-hidden border-t border-[#E5E2DC]">

      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/kenya-night.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[#F8F7F4]/95" />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-16 md:py-24">

        {/* ================= HEADER ================= */}
        <div className="grid lg:grid-cols-12 gap-10 mb-14 md:mb-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#8B7355] mb-4">
              Institutional Standards
            </p>

            <h2 className="text-3xl md:text-5xl font-serif leading-[1.1] text-[#2C2C2C]">
              Exit Strategy &
              <br />
              <span className="italic font-light text-[#5A5A5A]">
                Risk Engineering
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <p className="text-[14px] md:text-[15px] leading-[1.8] text-[#5A5A5A] font-light border-l border-[#C4B59D] pl-5 md:pl-6">
              In Kenyan commercial real estate, losses rarely come from market cycles —
              they come from structural failures: title defects, poor exit planning,
              and regulatory exposure. Murivest structures the exit before acquisition,
              ensuring every asset is engineered for controlled liquidity and capital protection.
            </p>
          </motion.div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-px bg-transparent md:bg-[#E5E2DC]">

          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white md:bg-[#F8F7F4] p-6 md:p-10 lg:p-12 border border-[#E5E2DC] md:border-0"
            >

              {/* Icon */}
              <div className="mb-5 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#C4B59D] flex items-center justify-center">
                  <item.icon className="h-5 w-5 md:h-6 md:w-6 text-[#8B7355]" strokeWidth={1.5} />
                </div>
              </div>

              {/* Stat */}
              <div className="mb-5 md:mb-6">
                <p className="text-3xl md:text-5xl font-serif text-[#2C2C2C] leading-none">
                  {item.stat}
                </p>
                <p className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#8B7355] mt-2">
                  {item.statUnit}
                </p>
              </div>

              {/* Title */}
              <h3 className="text-lg font-serif text-[#2C2C2C] mb-3 md:mb-4">
                {item.title}
              </h3>

              {/* Body */}
              <p className="text-[13px] md:text-[14px] leading-[1.7] text-[#5A5A5A] font-light">
                {item.body}
              </p>

              {/* Footnote */}
              <div className="mt-6 md:mt-8 pt-5 border-t border-[#E5E2DC]">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#C4B59D]">
                  {item.footnote}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* ================= FOOTER ================= */}
        <div className="mt-14 md:mt-16 pt-8 border-t border-[#E5E2DC] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          <p className="text-[12px] md:text-[13px] text-[#5A5A5A] font-light italic max-w-md">
            “Capital without structured exit design is exposure, not investment.”
          </p>

          <a
            href="/exit-strategy-planning"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] border border-[#2C2C2C] px-6 py-3 hover:bg-[#2C2C2C] hover:text-[#F8F7F4] transition whitespace-nowrap"
          >
            Request Exit Brief
          </a>

        </div>

      </div>
    </section>
  );
};

export default TaxIntelligenceSection;