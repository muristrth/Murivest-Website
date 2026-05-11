'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, LineChart, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const esgPillars = [
  {
    title: 'Responsible Investment Integration',
    desc: 'Environmental, social, and governance considerations are embedded directly into underwriting rather than treated as post-investment reporting. Each mandate is screened through a risk-adjusted lens consistent with institutional capital expectations, including PRI-aligned frameworks where applicable.',
    metrics: 'PRI-informed underwriting lens',
    icon: Leaf,
  },
  {
    title: 'Built Asset Sustainability Standards',
    desc: 'Asset selection prioritizes measurable efficiency in energy use, water consumption, and embodied carbon. Where applicable, developments are assessed against IFC EDGE and LEED frameworks, with emphasis on climate resilience and long-term operating cost stability.',
    metrics: 'EDGE / LEED benchmarked assets',
    icon: ShieldCheck,
  },
  {
    title: 'Institutional Governance & Reporting',
    desc: 'Each mandate is structured with formal governance controls, legal compliance verification, and reporting frameworks aligned with institutional investor requirements. ESG and financial performance are tracked in parallel where required for fiduciary reporting.',
    metrics: 'GRI-aligned reporting structure',
    icon: LineChart,
  },
];

const ESGFrameworkSection = () => {
  return (
    <section className="bg-[#FDFCFA] text-[#2C2C2C] border-t border-[#E5E2DC]">

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32">

        {/* ── HEADER ───────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] mb-6 font-medium">
              Environmental · Social · Governance
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.15]">
              ESG Framework<br />
              <span className="italic text-[#5A5A5A] font-light">
                Capital Risk Lens
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-6 lg:pt-10"
          >
            <p className="text-[14px] sm:text-[15px] leading-[1.9] text-[#5A5A5A] font-light border-l border-[#C4B59D] pl-6">
              ESG at Murivest is not a reporting function — it is a capital protection filter.
              It determines what is investable, what is bankable, and what is institutionally
              acceptable before capital is deployed into East African real estate markets.
            </p>
          </motion.div>

        </div>

        {/* ── CARDS (mobile-first stacking consistency) ───────────────── */}
        <div className="grid md:grid-cols-3 gap-px border border-[#E5E2DC] bg-[#E5E2DC]">

          {esgPillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-[#FDFCFA] p-8 sm:p-10 lg:p-12 hover:bg-[#F8F7F4] transition-colors duration-500 group flex flex-col"
            >

              {/* Icon */}
              <div className="mb-8">
                <div className="w-11 h-11 rounded-full border border-[#C4B59D] flex items-center justify-center group-hover:border-[#8B7355] transition-colors duration-500">
                  <item.icon className="h-5 w-5 text-[#8B7355]" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-serif mb-4 leading-tight group-hover:text-[#8B7355] transition-colors duration-500">
                {item.title}
              </h3>

              {/* Body */}
              <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light flex-1">
                {item.desc}
              </p>

              {/* Metric */}
              <div className="mt-8 pt-6 border-t border-[#E5E2DC]">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355] font-medium">
                  {item.metrics}
                </p>
              </div>

              {/* CTA (subtle reveal) */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Link
                  href="/esg-policy"
                  className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#8B7355] hover:text-[#6B5635]"
                >
                  ESG Framework Brief
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>

            </motion.div>
          ))}

        </div>

        {/* ── FOOTER ───────────────────────────── */}
        <div className="border-t border-[#E5E2DC] mt-14 pt-10">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

            <p className="text-[13px] text-[#5A5A5A] italic font-light max-w-md">
              Long-duration capital requires long-duration stewardship.
            </p>

            <Link
              href="/esg-policy"
              className="group inline-flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-500"
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