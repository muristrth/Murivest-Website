'use client';

import Link from 'next/link';
import { ArrowUpRight, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const marketData = [
  {
    category: 'Grade A Office',
    subtext: 'Westlands · Gigiri · Karen',
    yield: '8.5%',
    vacancy: '19.3%',
    trend: 'Compressing',
    trendDir: 'up',
    note: 'Westlands leads absorption — flight-to-quality demand accelerating',
    allocation: 'Core',
  },
  {
    category: 'Industrial & Logistics',
    subtext: 'Nairobi · Tatu City · JKIA Zone',
    yield: '9.5%',
    vacancy: '17.0%',
    trend: 'Tightening',
    trendDir: 'up',
    note: 'Structural demand expansion from e-commerce and agro-logistics',
    allocation: 'Overweight',
  },
  {
    category: 'Retail — Destination Centres',
    subtext: 'Kilimani · Westlands · Karen',
    yield: '8.4%',
    vacancy: '19.8%',
    trend: 'Stable',
    trendDir: 'neutral',
    note: 'Selective node strength — anchor-tenant covenants remain resilient',
    allocation: 'Neutral',
  },
  {
    category: 'Mixed-Use Development',
    subtext: 'Integrated Assets',
    yield: '8.4%',
    vacancy: '~18.5%',
    trend: 'Outperforming',
    trendDir: 'up',
    note: 'Highest blended yield — diversified income structure',
    allocation: 'Core',
  },
];

const allocationColor: Record<string, string> = {
  Overweight: 'text-[#1B4332] bg-[#1B4332]/10',
  Core: 'text-[#8B7355] bg-[#8B7355]/10',
  Neutral: 'text-[#A9A39A] bg-[#E5E2DC]',
};

export default function ResearchPreview() {
  return (
    <section className="relative bg-[#F8F7F4] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('/nairobi.webp')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[#F8F7F4]/92" />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-16 md:py-24">

        {/* ── HEADER ─────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-10 mb-14 lg:mb-18">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#8B7355]" />
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355]">
                Market Intelligence · Q2 2026
              </p>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif leading-[1.1] text-[#2C2C2C]">
              Nairobi Commercial
              <br />
              <span className="italic font-light text-[#5A5A5A]">
                Real Estate Intelligence
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-7"
          >
            <p className="text-[14px] md:text-[15px] text-[#5A5A5A] leading-[1.85] font-light border-l border-[#8B7355] pl-6">
              Nairobi's commercial market is undergoing structural rebalancing. Capital is
              concentrating in Grade A office, logistics, and mixed-use corridors, while
              secondary stock continues to dilute pricing power and occupancy across the metro area.
            </p>
          </motion.div>
        </div>

        {/* ── DESKTOP TABLE ──────────────────── */}
        <div className="hidden md:block border border-[#E5E2DC] bg-white shadow-sm">

          {/* Table header */}
          <div className="grid grid-cols-12 px-6 py-4 text-[9px] uppercase tracking-[0.3em] text-[#A9A39A] border-b border-[#E5E2DC] bg-[#F8F7F4]">
            <div className="col-span-4">Asset Class</div>
            <div className="col-span-1 text-right">Yield</div>
            <div className="col-span-2 text-right">Vacancy</div>
            <div className="col-span-2 text-right">Signal</div>
            <div className="col-span-1 text-right">Position</div>
            <div className="col-span-2" />
          </div>

          {marketData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="grid grid-cols-12 px-6 py-6 border-b last:border-0 border-[#E5E2DC] hover:bg-[#F8F7F4] transition-colors duration-300 items-center"
            >
              <div className="col-span-4">
                <p className="font-serif text-[#2C2C2C] mb-0.5">{item.category}</p>
                <p className="text-[10px] text-[#A9A39A] tracking-wide">{item.subtext}</p>
              </div>

              <div className="col-span-1 text-right font-serif text-[#2C2C2C]">
                {item.yield}
              </div>

              <div className="col-span-2 text-right text-[#5A5A5A] text-[13px]">
                {item.vacancy}
              </div>

              <div className="col-span-2 text-right">
                <div className="flex items-center justify-end gap-1.5">
                  {item.trendDir === 'up' && <TrendingUp className="h-3 w-3 text-[#1B4332]" />}
                  {item.trendDir === 'down' && <TrendingDown className="h-3 w-3 text-red-400" />}
                  {item.trendDir === 'neutral' && <Minus className="h-3 w-3 text-[#A9A39A]" />}
                  <p className="text-[12px] text-[#8B7355]">{item.trend}</p>
                </div>
              </div>

              <div className="col-span-1 text-right">
                <span className={`text-[9px] uppercase tracking-[0.15em] px-2 py-1 ${allocationColor[item.allocation]}`}>
                  {item.allocation}
                </span>
              </div>

              <div className="col-span-2 pl-4">
                <p className="text-[10px] text-[#B8B0A6] leading-tight">{item.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── MOBILE STACK ───────────────────── */}
        <div className="md:hidden space-y-3">
          {marketData.map((item, i) => (
            <div key={i} className="border border-[#E5E2DC] bg-white p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-serif text-[#2C2C2C] text-[15px] mb-0.5">{item.category}</p>
                  <p className="text-[10px] text-[#A9A39A]">{item.subtext}</p>
                </div>
                <span className={`text-[8px] uppercase tracking-[0.15em] px-2 py-1 flex-shrink-0 ml-2 ${allocationColor[item.allocation]}`}>
                  {item.allocation}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-3 text-[12px]">
                <div>
                  <p className="text-[9px] text-[#A9A39A] uppercase tracking-wider mb-1">Yield</p>
                  <p className="font-serif text-[#2C2C2C]">{item.yield}</p>
                </div>
                <div>
                  <p className="text-[9px] text-[#A9A39A] uppercase tracking-wider mb-1">Vacancy</p>
                  <p className="text-[#5A5A5A]">{item.vacancy}</p>
                </div>
                <div>
                  <p className="text-[9px] text-[#A9A39A] uppercase tracking-wider mb-1">Signal</p>
                  <p className="text-[#8B7355] text-[11px]">{item.trend}</p>
                </div>
              </div>

              <p className="text-[10px] text-[#B8B0A6] leading-relaxed border-t border-[#E5E2DC] pt-3">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        {/* ── INSIGHT CALLOUT ────────────────── */}
        <div className="mt-12 border-l border-[#8B7355] pl-5 sm:pl-6">
          <p className="text-[14px] md:text-[15px] leading-[1.85] text-[#5A5A5A] font-light">
            Grade A assets continue to outperform across Westlands, Gigiri, and Karen, driven
            by tenant consolidation and flight-to-quality dynamics. Industrial logistics remains
            the strongest structural allocation theme in Kenya, supported by sustained regional
            distribution and e-commerce demand.
          </p>
        </div>

        {/* ── CTA ────────────────────────────── */}
        <div className="mt-14 pt-10 border-t border-[#E5E2DC] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-[10px] uppercase tracking-wider text-[#A9A39A]">
            Mandated intelligence only · KYC required · Q2 2026
          </p>
          <Link
            href="/contact"
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-400"
          >
            Request Full Intelligence Pack
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </div>

      </div>
    </section>
  );
}