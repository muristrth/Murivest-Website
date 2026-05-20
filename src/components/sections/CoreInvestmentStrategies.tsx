'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Hotel, ShoppingBag, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const strategies = [
  {
    id: '01',
    title: 'Grade A Office Assets',
    subtitle: 'Core Office Market',
    desc: 'Institutional-grade office buildings anchored by long-duration tenants across Nairobi\s prime commercial nodes — Westlands, Gigiri, and Karen. Focus on occupancy resilience and capital preservation through market cycles.',
    yieldRange: '8.5% – 10.0%',
    holdHorizon: '7 – 10 years',
    structure: 'Acquisition & Leaseback',
    icon: Building2,
    href: '/strategies/office',
  },
  {
    id: '02',
    title: 'Hospitality & Hotel Assets',
    subtitle: 'High-Yield Hospitality',
    desc: 'Selective hospitality mandates in high-demand urban and tourism corridors. Underwriting prioritises RevPAR stability, operator covenant strength, and repositioning upside in supply-constrained markets.',
    yieldRange: '10.0% – 12.5%',
    holdHorizon: '5 – 8 years',
    structure: 'Acquisition & Operator Mandate',
    icon: Hotel,
    href: '/strategies/hospitality',
  },
  {
    id: '03',
    title: 'Retail & Mixed-Use Hubs',
    subtitle: 'Defensive Retail',
    desc: 'Destination retail and integrated mixed-use centres anchored by essential-service tenants with strong catchment fundamentals. Positioned for income durability and structural demand from Kenya\'s expanding urban consumer base.',
    yieldRange: '9.5% – 11.5%',
    holdHorizon: '6 – 9 years',
    structure: 'Stabilised Income Mandate',
    icon: ShoppingBag,
    href: '/strategies/retail',
  },
];

const CoreInvestmentStrategies = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F4] text-[#2C2C2C]">

      {/* ── BACKGROUND ─────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/murivest_secretary.webp')] bg-cover bg-center opacity-[0.22] scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F7F4]/90 via-[#F8F7F4]/92 to-[#F8F7F4]/98" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#C4B59D]/10 blur-[120px] rounded-full" />
      </div>

      {/* ── HEADER ─────────────────────────── */}
      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 pt-20 lg:pt-32 pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-end">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#8B7355]" />
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#8B7355] font-mono">
                Investment System
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.12]">
              Core Investment
              <br />
              <span className="italic text-[#5A5A5A] font-light">
                Strategies
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hidden lg:block lg:col-span-6"
          >
            <p className="text-[15px] leading-[1.9] text-[#5A5A5A] font-light border-l border-[#C4B59D] pl-6">
              Murivest structures disciplined, mandate-based real estate strategies across three
              commercial asset classes — each selected for income durability, institutional
              governance, and risk-adjusted return profiles across East African cycles.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── DESKTOP GRID ───────────────────── */}
      <div className="hidden md:block relative max-w-[1400px] mx-auto px-8 lg:px-16 pb-24">
        <div className="grid md:grid-cols-3 gap-px border border-[#E5E2DC] bg-[#E5E2DC]">
          {strategies.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              className="group bg-[#F8F7F4] hover:bg-[#FDFCFA] transition-colors duration-500 flex flex-col"
            >
              <div className="p-10 lg:p-12 flex flex-col flex-1">

                {/* Strategy ID & Icon */}
                <div className="flex items-start justify-between mb-10">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C4B59D] font-mono">
                    {item.id}
                  </span>
                  <div className="w-11 h-11 rounded-full border border-[#C4B59D] group-hover:border-[#8B7355] flex items-center justify-center transition-colors duration-500">
                    <item.icon className="h-4 w-4 text-[#8B7355]" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355] mb-3">
                  {item.subtitle}
                </p>
                <h3 className="text-xl font-serif mb-4 group-hover:text-[#8B7355] transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[1.8] text-[#5A5A5A] font-light flex-1">
                  {item.desc}
                </p>

                {/* Metrics */}
                <div className="mt-8 pt-6 border-t border-[#E5E2DC] space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#A9A39A]">Target Yield</span>
                    <span className="text-[13px] font-serif text-[#2C2C2C]">{item.yieldRange}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#A9A39A]">Hold Horizon</span>
                    <span className="text-[11px] text-[#5A5A5A]">{item.holdHorizon}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#A9A39A]">Structure</span>
                    <span className="text-[11px] text-[#5A5A5A]">{item.structure}</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  Strategy Detail
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── MOBILE STACK ───────────────────── */}
      <div className="md:hidden relative px-5 pb-16 space-y-3">
        {strategies.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="border border-[#E5E2DC] bg-white p-5"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-[#C4B59D] rounded-full flex-shrink-0">
                <item.icon className="h-4 w-4 text-[#8B7355]" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#8B7355] mb-1">{item.subtitle}</p>
                <h3 className="text-[15px] font-serif mb-2">{item.title}</h3>
                <p className="text-[12px] text-[#5A5A5A] leading-relaxed mb-4">{item.desc}</p>
                <div className="flex gap-4 text-[10px]">
                  <span className="text-[#8B7355] font-mono">{item.yieldRange}</span>
                  <span className="text-[#A9A39A]">·</span>
                  <span className="text-[#A9A39A]">{item.holdHorizon}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── FOOTER ─────────────────────────── */}
      <div className="border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] text-[#5A5A5A] italic font-light">
            "The best investment on Earth is earth — structured, mandated, and protected."
          </p>
          <Link
            href="/properties"
            className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-400"
          >
            <span>View Full Portfolio</span>
            <span className="w-8 h-[1px] bg-current group-hover:w-12 transition-all duration-500" />
          </Link>
        </div>
      </div>

    </section>
  );
};

export default CoreInvestmentStrategies;