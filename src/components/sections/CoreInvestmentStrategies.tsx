'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building, ShoppingBag, Hotel } from 'lucide-react';
import Link from 'next/link';

const strategies = [
  {
    title: 'Grade A Office Assets',
    desc: 'Institutional office buildings focused on stable income and long-term tenants.',
    metrics: 'Yield: 8.5% – 10%',
    icon: Building,
  },
  {
    title: 'Hospitality & Hotel Assets',
    desc: 'Selective hospitality assets in high-demand urban and tourism corridors.',
    metrics: 'Yield: 10% – 12.5%',
    icon: Hotel,
  },
  {
    title: 'Retail & Mixed-Use Hubs',
    desc: 'Defensive retail and mixed-use centers anchored by essential tenants.',
    metrics: 'Yield: 9.5% – 11.5%',
    icon: ShoppingBag,
  },
];

const CoreInvestmentStrategies = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F4] text-[#2C2C2C]">

      {/* =========================
          BACKGROUND (SIMPLIFIED)
      ========================== */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Main Image (more visible now) */}
        <div
          className="
            absolute inset-0
            bg-[url('/murivest_secretary.webp')]
            bg-cover
            bg-center
            opacity-[0.28]
            scale-105
          "
        />

        {/* Soft readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F7F4]/85 via-[#F8F7F4]/90 to-[#F8F7F4]/98" />

        {/* Luxury glow */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#C4B59D]/15 blur-3xl rounded-full" />
      </div>

      {/* =========================
          HEADER
      ========================== */}
      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-16 lg:py-32">

        <div className="grid lg:grid-cols-12 gap-10 items-end">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <p className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-[#8B7355] mb-5">
              Investment System
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.15]">
              Core Strategies<br />
              <span className="italic text-[#5A5A5A] font-light">
                For Consistent Cashflow
              </span>
            </h2>
          </motion.div>

          {/* Hide paragraph on mobile */}
          <motion.div
            className="hidden lg:block lg:col-span-6"
          >
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light border-l border-[#C4B59D] pl-6">
              Murivest structures disciplined real estate strategies focused on governance,
              scale, and risk-adjusted performance across cycles.
            </p>
          </motion.div>

        </div>
      </div>

      {/* =========================
          DESKTOP GRID
      ========================== */}
      <div className="hidden md:block relative max-w-[1400px] mx-auto px-8 lg:px-16 pb-24">

        <div className="grid md:grid-cols-3 gap-px border border-[#E5E2DC] bg-[#E5E2DC]">

          {strategies.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-[#F8F7F4]/90 p-10 lg:p-12 hover:bg-[#FDFCFA] transition"
            >

              <div className="mb-8">
                <div className="w-12 h-12 rounded-full border border-[#C4B59D] flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-[#8B7355]" />
                </div>
              </div>

              <h3 className="text-xl font-serif mb-3">
                {item.title}
              </h3>

              <p className="text-[14px] text-[#5A5A5A] mb-6">
                {item.desc}
              </p>

              <p className="text-[11px] uppercase tracking-wider text-[#8B7355]">
                {item.metrics}
              </p>

            </motion.div>
          ))}

        </div>
      </div>

      {/* =========================
          MOBILE (NEW SIMPLE LAYOUT)
      ========================== */}
      <div className="md:hidden relative px-5 pb-20 space-y-4">

        {strategies.map((item, idx) => (
          <div
            key={idx}
            className="flex gap-4 p-4 bg-white/60 backdrop-blur-sm border border-[#E5E2DC]"
          >

            {/* ICON */}
            <div className="w-10 h-10 flex items-center justify-center border border-[#C4B59D] rounded-full flex-shrink-0">
              <item.icon className="h-4 w-4 text-[#8B7355]" />
            </div>

            {/* TEXT */}
            <div className="flex-1">

              <h3 className="text-sm font-serif">
                {item.title}
              </h3>

              <p className="text-[11px] text-[#5A5A5A] mt-1">
                {item.desc}
              </p>

              <p className="text-[10px] uppercase tracking-wider text-[#8B7355] mt-2">
                {item.metrics}
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* =========================
          FOOTER
      ========================== */}
      <div className="border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-[12px] text-[#5A5A5A] italic">
            “The best investment on Earth is earth.”
          </p>

          <Link
            href="/properties"
            className="text-[11px] uppercase tracking-[0.3em] text-[#2C2C2C]"
          >
            View Portfolio →
          </Link>

        </div>
      </div>

    </section>
  );
};

export default CoreInvestmentStrategies;