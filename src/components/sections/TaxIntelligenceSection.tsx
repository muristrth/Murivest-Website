'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Timer, ShieldAlert, FileCheck } from 'lucide-react';

/**
 * SOURCES:
 * McKinsey Global Private Markets Report 2026 — avg hold period 6.6 yrs; 52% of buyout cos held 4+ yrs
 * EACC 2023 — land fraud = 40% of all corruption cases in Kenya; Nairobi at epicentre
 * Ministry of Lands Kenya 2024 — 10,000+ land fraud cases under active investigation
 * KRA Finance Act 2022 — CGT raised 5% → 15%, effective 1 Jan 2023
 * Kenya Constitution Art. 65(1) — foreign capital restricted to leasehold, max 99 yrs
 * McKinsey GPM Report 2025 — sale leaseback most resilient structure in tightening credit environments
 * IFRS 16 — lease accounting standard for institutional exit reporting
 */

const items = [
  {
    icon: Timer,
    stat: '7 – 10',
    statUnit: 'Year Hold',
    title: 'Exit Is Designed at Entry',
    body: "McKinsey's 2026 Global Private Markets Report records the average institutional hold period at 6.6 years — the highest since 2005 — with 52% of buyout-backed assets held beyond four years. Murivest maps your exit pathway, target buyer profile, and disposal window at mandate inception, so every lease signed, every value-add decision, and every covenant negotiated is engineered toward a defined, timed, maximum-value exit.",
    footnote: 'McKinsey Global Private Markets Report 2026',
  },
  {
    icon: ShieldAlert,
    stat: '40%',
    statUnit: 'of Kenya Corruption Cases Are Land Fraud',
    title: 'Kenya\'s Title Risk Is Not Theoretical',
    body: "The EACC reported in 2023 that land fraud constitutes over 40% of all corruption cases in Kenya, with Nairobi at the epicentre — and the Ministry of Lands confirmed over 10,000 active fraud investigations in 2024 alone. Every Murivest mandate begins with a forensic title audit, Ardhisasa verification, confirmed encumbrance search, and KRA CGT-1 compliance — because foreign capital under Article 65(1) of the Constitution has zero recourse if a title is challenged post-transfer.",
    footnote: 'EACC 2023 · Ministry of Lands Kenya 2024 · Kenya Constitution Art. 65(1)',
  },
  {
    icon: FileCheck,
    stat: '3',
    statUnit: 'Compliant Exit Routes — One Is Yours',
    title: 'Liquidity Is Structured, Not Hoped For',
    body: "Institutional sale to a pension fund or sovereign buyer commands the tightest cap rate and highest transfer value for stabilised, blue-chip-tenanted assets. Recapitalisation releases partial liquidity while preserving your operational position, unlocking a second exit event 3–7 years later. Sale leaseback — McKinsey's most resilient structure in tightening credit conditions — converts equity to deployable capital without vacating. The correct route is selected at mandate inception and structured for full CGT efficiency, IFRS 16 compliance, and clean cross-border repatriation.",
    footnote: 'McKinsey GPM 2025 · KRA CGT Framework · IFRS 16',
  },
];

const TaxIntelligenceSection = () => {
  return (
    <section className="bg-[#F8F7F4] text-[#2C2C2C] border-t border-[#2C2C2C]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-24 lg:py-32">

        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium">
                Institutional Standards
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.15] text-[#2C2C2C]">
              Exit Strategy &<br />
              <span className="italic text-[#5A5A5A] font-light">Risk Mitigation</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-7 lg:pt-12"
          >
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light border-l border-[#C4B59D] pl-6">
              In Kenya's commercial real estate market, the risks that destroy returns are rarely
              market risks — they are structural ones. Fraudulent title, premature exit, and
              unplanned disposal have cost foreign investors billions. Murivest engineers the
              exit before the acquisition closes, and structures every holding to eliminate the
              risks that due diligence alone cannot prevent.
            </p>
          </motion.div>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-px bg-[#E5E2DC] border border-[#E5E2DC]">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group bg-[#F8F7F4] p-10 lg:p-12 hover:bg-[#FDFCFA] transition-colors duration-700 flex flex-col"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full border border-[#C4B59D] flex items-center justify-center group-hover:border-[#8B7355] group-hover:bg-[#8B7355]/5 transition-all duration-500">
                  <item.icon className="h-6 w-6 text-[#8B7355]" strokeWidth={1.5} />
                </div>
              </div>

              {/* Dominant Stat */}
              <div className="mb-6">
                <p className="text-4xl lg:text-5xl font-serif text-[#2C2C2C] leading-none">
                  {item.stat}
                </p>
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#8B7355] mt-2 font-medium leading-tight">
                  {item.statUnit}
                </p>
              </div>

              {/* Title */}
              <h3 className="text-lg font-serif text-[#2C2C2C] mb-4 leading-tight group-hover:text-[#8B7355] transition-colors duration-500">
                {item.title}
              </h3>

              {/* Body */}
              <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light flex-1">
                {item.body}
              </p>

              {/* Source citation */}
              <div className="mt-8 pt-6 border-t border-[#E5E2DC]">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#C4B59D]">
                  {item.footnote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom — Quote + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-8 border-t border-[#E5E2DC]"
        >
          <p className="text-[13px] text-[#5A5A5A] font-light italic max-w-md">
            "Capital trapped in the wrong structure is not invested — it is imprisoned."
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center gap-4 text-[11px] tracking-[0.2em] uppercase text-[#8B7355]">
              <span>KRA Compliant</span>
              <span className="w-1 h-1 rounded-full bg-[#8B7355]" />
              <span>IFRS Aligned</span>
            </div>
            <a
              href="/exit-strategy-planning"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] border border-[#2C2C2C] px-6 py-3 hover:bg-[#2C2C2C] hover:text-[#F8F7F4] transition-all duration-500 font-medium whitespace-nowrap"
            >
              Request Exit Structure Brief
              <span className="text-[#8B7355]">→</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TaxIntelligenceSection;