'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, LineChart, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const esgPillars = [
  {
    id: '01',
    title: 'Responsible Investment Integration',
    label: 'Environmental',
    desc: 'Environmental, social, and governance considerations are embedded directly into underwriting rather than treated as post-investment reporting. Each mandate is screened through a risk-adjusted lens consistent with institutional capital expectations, including PRI-aligned frameworks where applicable.',
    benchmark: 'PRI-informed underwriting lens',
    standard: 'UNPRI / ESG Risk Screen',
    icon: Leaf,
    href: '/esg-policy#environmental',
  },
  {
    id: '02',
    title: 'Built Asset Sustainability Standards',
    label: 'Social',
    desc: 'Asset selection prioritises measurable efficiency in energy use, water consumption, and embodied carbon. Where applicable, developments are assessed against IFC EDGE and LEED frameworks, with emphasis on climate resilience and long-term operating cost stability.',
    benchmark: 'EDGE / LEED benchmarked assets',
    standard: 'IFC EDGE · LEED Certification',
    icon: ShieldCheck,
    href: '/esg-policy#social',
  },
  {
    id: '03',
    title: 'Institutional Governance & Reporting',
    label: 'Governance',
    desc: 'Each mandate is structured with formal governance controls, legal compliance verification, and reporting frameworks aligned with institutional investor requirements. ESG and financial performance are tracked in parallel where required for fiduciary reporting obligations.',
    benchmark: 'GRI-aligned reporting structure',
    standard: 'GRI Standards · IFRS Disclosure',
    icon: LineChart,
    href: '/esg-policy#governance',
  },
];

const ESGFrameworkSection = () => {
  return (
    <section className="bg-[#FDFCFA] text-[#2C2C2C] border-t border-[#E5E2DC]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32">

        {/* ── HEADER ─────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16 lg:mb-20">

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#8B7355]" />
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#8B7355] font-mono">
                Environmental · Social · Governance
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.12]">
              ESG Framework
              <br />
              <span className="italic text-[#5A5A5A] font-light">
                Capital Risk Lens
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-7 lg:pt-10"
          >
            <p className="text-[14px] sm:text-[15px] leading-[1.9] text-[#5A5A5A] font-light border-l border-[#C4B59D] pl-6 mb-6">
              ESG at Murivest is not a reporting function — it is a capital protection filter.
              It determines what is investable, what is bankable, and what is institutionally
              acceptable before capital is deployed into East African real estate markets.
            </p>

            {/* ESG overview metrics */}
            <div className="grid grid-cols-3 gap-4 pl-6 border-l border-transparent">
              {[
                { label: 'ESG-Screened Mandates', value: '100%' },
                { label: 'Framework Benchmarks', value: '3+' },
                { label: 'Reporting Standards', value: 'GRI / IFRS' },
              ].map((m, i) => (
                <div key={i}>
                  <p className="text-xl font-serif text-[#2C2C2C]">{m.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#A9A39A] mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── PILLAR CARDS ───────────────────── */}
        <div className="grid md:grid-cols-3 gap-px border border-[#E5E2DC] bg-[#E5E2DC]">
          {esgPillars.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              className="bg-[#FDFCFA] hover:bg-[#F8F7F4] transition-colors duration-500 group flex flex-col"
            >
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col flex-1">

                {/* ID + Icon row */}
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C4B59D] font-mono">
                    {item.id}
                  </span>
                  <div className="w-11 h-11 rounded-full border border-[#C4B59D] group-hover:border-[#8B7355] flex items-center justify-center transition-colors duration-500">
                    <item.icon className="h-4 w-4 text-[#8B7355]" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Label */}
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#8B7355] mb-3">
                  {item.label}
                </p>

                {/* Title */}
                <h3 className="text-lg sm:text-[19px] font-serif mb-5 leading-snug group-hover:text-[#8B7355] transition-colors duration-500">
                  {item.title}
                </h3>

                {/* Body */}
                <p className="text-[13px] leading-[1.85] text-[#5A5A5A] font-light flex-1">
                  {item.desc}
                </p>

                {/* Benchmark block */}
                <div className="mt-8 pt-6 border-t border-[#E5E2DC] space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#A9A39A]">Benchmark</span>
                    <span className="text-[11px] text-[#8B7355]">{item.benchmark}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#A9A39A]">Standard</span>
                    <span className="text-[10px] text-[#5A5A5A]">{item.standard}</span>
                  </div>
                </div>

                {/* Hover CTA */}
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#8B7355] hover:text-[#6B5635] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  ESG Framework Detail
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── FOOTER ─────────────────────────── */}
        <div className="border-t border-[#E5E2DC] mt-14 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-[13px] text-[#5A5A5A] italic font-light max-w-md">
              Long-duration capital requires long-duration stewardship. ESG is not an overlay — it is structure.
            </p>
            <Link
              href="/esg-policy"
              className="group inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-500"
            >
              <span>View Full ESG Framework</span>
              <span className="w-8 h-[1px] bg-current group-hover:w-12 transition-all duration-500" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ESGFrameworkSection;