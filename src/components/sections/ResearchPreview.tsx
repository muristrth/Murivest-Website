'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const marketData = [
  {
    category: 'Grade A Office — Prime Nodes',
    subtext: 'Westlands · Gigiri · Karen',
    yield: '8.5%',
    vacancy: '19.3%',
    trend: 'Compressing',
    note: 'Westlands leads absorption',
  },
  {
    category: 'Industrial & Logistics',
    subtext: 'Nairobi · Tatu City',
    yield: '9.5%',
    vacancy: '17.0%',
    trend: 'Tightening',
    note: 'Structural demand expansion',
  },
  {
    category: 'Retail — Destination Centres',
    subtext: 'Kilimani · Westlands · Karen',
    yield: '8.4%',
    vacancy: '19.8%',
    trend: 'Stable',
    note: 'Selective node strength',
  },
  {
    category: 'Mixed-Use Development',
    subtext: 'Integrated Assets',
    yield: '8.4%',
    vacancy: '~18.5%',
    trend: 'Outperforming',
    note: 'Highest sector yield',
  },
];

export default function MarketIntelligenceSection() {
  return (
    <section className="relative bg-[#F8F7F4] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/nairobi.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[#F8F7F4]/90" />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-16 md:py-24">

        {/* ================= HEADER ================= */}
        <div className="mb-12 md:mb-16">
          <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#8B7355] mb-4">
            Market Intelligence · Q2 2026
          </p>

          <h2 className="text-3xl md:text-5xl font-serif leading-[1.1] text-[#2C2C2C]">
            Nairobi Commercial
            <br />
            <span className="italic font-light text-[#5A5A5A]">
              Real Estate Intelligence
            </span>
          </h2>

          <p className="mt-6 text-[14px] md:text-[15px] text-[#5A5A5A] leading-[1.8] max-w-3xl">
            Nairobi’s commercial market is undergoing structural rebalancing.
            Capital is concentrating in Grade A office, logistics, and mixed-use corridors,
            while secondary stock continues to dilute pricing power and occupancy.
          </p>
        </div>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block border border-[#E5E2DC] bg-white">

          <div className="grid grid-cols-12 px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-[#8B7355] border-b">
            <div className="col-span-5">Asset Class</div>
            <div className="col-span-2 text-right">Yield</div>
            <div className="col-span-2 text-right">Vacancy</div>
            <div className="col-span-3 text-right">Signal</div>
          </div>

          {marketData.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-12 px-6 py-6 border-b last:border-0 hover:bg-[#F8F7F4] transition"
            >
              <div className="col-span-5">
                <p className="font-serif text-[#2C2C2C]">
                  {item.category}
                </p>
                <p className="text-[11px] text-[#A9A39A] mt-1">
                  {item.subtext}
                </p>
              </div>

              <div className="col-span-2 text-right font-serif text-[#2C2C2C]">
                {item.yield}
              </div>

              <div className="col-span-2 text-right text-[#5A5A5A]">
                {item.vacancy}
              </div>

              <div className="col-span-3 text-right">
                <p className="text-[#8B7355] text-[12px]">
                  {item.trend}
                </p>
                <p className="text-[10px] text-[#B8B0A6]">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= MOBILE STACK (CONSISTENT PATTERN) ================= */}
        <div className="md:hidden space-y-4">

          {marketData.map((item, i) => (
            <div
              key={i}
              className="border border-[#E5E2DC] bg-white p-4"
            >
              <p className="font-serif text-[#2C2C2C] text-[15px]">
                {item.category}
              </p>

              <p className="text-[11px] text-[#A9A39A] mt-1">
                {item.subtext}
              </p>

              <div className="mt-4 space-y-1 text-sm">

                <div className="flex justify-between">
                  <span className="text-[#5A5A5A]">Yield</span>
                  <span>{item.yield}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#5A5A5A]">Vacancy</span>
                  <span>{item.vacancy}</span>
                </div>

              </div>

              <div className="mt-3 text-[11px] text-[#8B7355]">
                {item.trend} · {item.note}
              </div>
            </div>
          ))}
        </div>

        {/* ================= INSIGHT ================= */}
        <div className="mt-12 md:mt-16 border-l border-[#C4B59D] pl-5 md:pl-6">
          <p className="text-[14px] md:text-[15px] leading-[1.8] text-[#5A5A5A]">
            Grade A assets continue to outperform across Westlands, Gigiri, and Karen,
            driven by tenant consolidation and flight-to-quality dynamics.
            Industrial logistics remains the strongest structural allocation theme in Kenya,
            supported by sustained regional distribution and e-commerce demand.
          </p>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-14 md:mt-16 pt-10 border-t border-[#E5E2DC] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          <p className="text-[11px] md:text-[12px] uppercase tracking-wider text-[#A9A39A]">
            Mandated intelligence only · KYC required
          </p>

          <Link
            href="/contact"
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[#2C2C2C] hover:text-[#8B7355] transition"
          >
            Request Intelligence Pack
            <ArrowUpRight className="w-4 h-4" />
          </Link>

        </div>

      </div>
    </section>
  );
}