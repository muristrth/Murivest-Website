'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const coverage = [
  {
    id: '01',
    title: 'Nairobi CBD — Core Office Market',
    desc: 'Institutional-grade office assets within Nairobi’s established commercial core, focusing on tenant quality, lease durability, and capital preservation.',
    note: 'Select advisory coverage only',
    image: '/kenya-night.png',
  },
  {
    id: '02',
    title: 'Urban Mixed-Use Corridors',
    desc: 'Stabilized mixed-use and retail-led developments positioned along high-density urban growth nodes.',
    note: 'Mandate-based engagement',
    image: '/mall.avif',
  },
  {
    id: '03',
    title: 'Logistics & Infrastructure Corridor',
    desc: 'Strategic industrial and logistics assets aligned with East Africa’s primary trade and transport routes.',
    note: 'Pipeline advisory positioning',
    image: '/p/IMG-20250813-WA0001.jpg',
  },
];

const InstitutionalEngagementModel = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F3] text-[#1A1A1A]">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F3]/95 via-[#F5F5F3]/92 to-[#F5F5F3]/98" />

        <div className="absolute inset-0 bg-[url('/images/mandate-hero.jpg')] bg-cover bg-center opacity-[0.06]" />

        <div className="absolute top-[-150px] left-[-120px] w-[500px] h-[500px] bg-[#C4B59D]/10 blur-3xl rounded-full" />

        <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-[#8B7355]/10 blur-3xl rounded-full" />
      </div>

      {/* ================= HEADER ================= */}
      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-16 md:py-24">

        <div className="grid lg:grid-cols-12 gap-10 items-end">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <p className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-[#8B7355] mb-4">
              Advisory Scope
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.1]">
              Institutional<br />
              <span className="italic text-[#4A4A4A] font-light">
                Coverage Areas
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block lg:col-span-5"
          >
            <p className="text-[15px] leading-relaxed text-[#4A4A4A] font-light border-l border-[#8B7355] pl-6">
              Murivest advises on select commercial real estate exposures across East Africa.
              All engagements are structured under formal mandate with qualified capital partners.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= DESKTOP / MOBILE ================= */}
      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 pb-20">

        {/* DESKTOP GRID (quiet, restrained) */}
        <div className="hidden md:grid md:grid-cols-3 gap-10">

          {coverage.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* IMAGE (background feel, not product showcase) */}
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-[#EDEBE6]">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover grayscale-[10%] opacity-90 group-hover:opacity-100 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition" />
              </div>

              <h3 className="font-serif text-lg group-hover:text-[#8B7355] transition">
                {item.title}
              </h3>

              <p className="text-sm text-[#4A4A4A] mt-2 leading-relaxed">
                {item.desc}
              </p>

              <p className="text-[11px] uppercase tracking-wider text-[#8B7355] mt-4">
                {item.note}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= MOBILE (VERY PREMIUM MINIMAL LIST) ================= */}
        <div className="md:hidden space-y-6">

          {coverage.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 items-start border-b border-[#D4D0C8] pb-5"
            >

              {/* SMALL IMAGE */}
              <div className="relative w-[62px] h-[78px] flex-shrink-0 overflow-hidden bg-[#EDEBE6]">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-80"
                />
              </div>

              {/* TEXT */}
              <div className="flex-1">

                <h3 className="text-sm font-serif leading-tight">
                  {item.title}
                </h3>

                <p className="text-[11px] text-[#4A4A4A] mt-1 leading-relaxed line-clamp-2">
                  {item.desc}
                </p>

                <p className="text-[10px] uppercase tracking-wider text-[#8B7355] mt-2">
                  {item.note}
                </p>
              </div>

              <ArrowUpRight className="w-4 h-4 text-[#8B7355]" />
            </div>
          ))}
        </div>

        {/* ================= NOTE ================= */}
        <div className="mt-10 p-5 bg-[#E8E3DA]/70 text-center text-[11px] text-[#5A5A5A] leading-relaxed">
          Advisory positioning only. Access restricted to qualified investors under mandate.
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-[12px] text-[#4A4A4A]">
            Structured advisory engagements only.
          </p>

          <Link
            href="/contact"
            className="text-[11px] uppercase tracking-[0.25em] text-[#1A1A1A] hover:text-[#8B7355]"
          >
            Request Engagement →
          </Link>

        </div>
      </div>

    </section>
  );
};

export default InstitutionalEngagementModel;