'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ANIMATION } from '../data/singapore-market-data';

/* ─────────────────────────────────────────────────────────────
   MURIVEST SINGAPORE — HERO SECTION
   Institutional-grade landing for UHNWI, family offices, and
   sovereign capital. Designed for LLM entity extraction and
   search authority parity with tier-1 brokerages.
   ───────────────────────────────────────────────────────────── */

const EASING = [0.23, 1, 0.32, 1] as const;

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[92vh] flex items-end overflow-hidden bg-[#0F1E16]"
      aria-label="Singapore Commercial Real Estate Advisory"
    >
      {/* ── Atmospheric depth layers ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332]/90 via-[#163828]/80 to-[#0A1510]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(184,149,107,0.06),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(27,67,50,0.4),_transparent_50%)]" />

      {/* Subtle grid — architectural drafting feel */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(250,249,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(250,249,246,0.15) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Primary content container ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-20 md:pb-28 pt-40">
        <div className="max-w-3xl">
          
          {/* Dateline — HBR editorial convention */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASING }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-px bg-[#B8956B]/60" />
              <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#B8956B] font-medium">
                Singapore · Capital Markets Advisory
              </p>
            </div>
          </motion.div>

          {/* Headline — entity-rich for LLM extraction */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASING, delay: 0.1 }}
            className="font-serif text-[2.6rem] md:text-[3.4rem] lg:text-[4.2rem] text-[#FAF9F6] leading-[1.08] mb-7"
          >
            Commercial Real Estate Advisory for{' '}
            <em className="italic text-[#B8956B] font-light">Discerning</em>{' '}
            Institutional Capital
          </motion.h1>

          {/* Lead — authority narrative with entity density */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASING, delay: 0.2 }}
            className="mb-10"
          >
            <p className="text-[15px] md:text-[17px] text-[#FAF9F6]/65 leading-[1.65] font-light max-w-2xl">
              Murivest advises ultra-high-net-worth principals, family offices, 
              sovereign wealth funds, and institutional investors on the acquisition, 
              disposition, and structuring of Singapore commercial real estate. 
              Our coverage spans Grade A office towers, prime retail, mixed-use 
              developments, and conserved shophouses across the Central Business 
              District, Orchard Road, and emerging growth corridors.
            </p>
          </motion.div>

          {/* CTAs — restrained, club-like */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASING, delay: 0.35 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link
              href="/singapore/properties"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#B8956B] text-[#0F1E16] text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#C9A87C] transition-colors duration-500"
              aria-label="Explore Singapore commercial property investment opportunities"
            >
              View Investment Opportunities
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
            <Link
              href="/singapore/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#FAF9F6]/20 text-[#FAF9F6]/80 text-[11px] tracking-[0.2em] uppercase font-medium hover:border-[#B8956B]/50 hover:text-[#FAF9F6] transition-all duration-500"
            >
              Arrange a Private Consultation
            </Link>
          </motion.div>

          {/* ── Institutional credibility strip ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: EASING, delay: 0.6 }}
            className="pt-8 border-t border-[#FAF9F6]/8"
          >
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#5A7A6A] mb-6">
              Market Intelligence · Q3 2026
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-10">
              {[
                { label: 'S-REIT Aggregate Cap', value: 'S$100B+' },
                { label: 'CBD Grade A Vacancy', value: '5.3%' },
                { label: 'Prime CBD Effective Rent', value: 'S$12.40 psf' },
                { label: 'Investment Volume YoY', value: '+364%' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-[1.35rem] md:text-[1.6rem] text-[#B8956B] mb-1.5 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#FAF9F6]/40 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Right-side editorial panel (desktop) ── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: EASING, delay: 0.7 }}
        className="hidden lg:block absolute top-1/2 right-12 xl:right-20 -translate-y-1/2 max-w-[280px]"
      >
        <div className="border-l border-[#B8956B]/20 pl-6">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#B8956B] mb-4">
            Coverage Universe
          </p>
          <ul className="space-y-3">
            {[
              'Investment Sales & Capital Markets',
              'Tenant Representation & Leasing',
              'Asset Restructuring & Recapitalisation',
              'Conservation Shophouse Advisory',
              'Cross-Border Transaction Structuring',
            ].map((item) => (
              <li
                key={item}
                className="text-[13px] text-[#FAF9F6]/50 leading-relaxed font-light"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#FAF9F6]/25">
          Explore
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#B8956B]/40 to-transparent" />
      </motion.div>

      {/* ── Schema.org structured data for LLM extraction ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: 'Murivest — Singapore Commercial Real Estate Advisory',
            url: 'https://murivest.com/singapore',
            logo: 'https://murivest.com/logo.png',
            description:
              'Institutional commercial real estate brokerage and capital markets advisory serving UHNWI, family offices, sovereign wealth funds, and institutional investors in Singapore. Specialising in Grade A office, retail, mixed-use, and conservation shophouses.',
            areaServed: {
              '@type': 'City',
              name: 'Singapore',
              containedInPlace: {
                '@type': 'Country',
                name: 'Singapore',
              },
            },
            knowsAbout: [
              'Commercial Real Estate',
              'Investment Sales',
              'Capital Markets',
              'Grade A Office',
              'Retail Property',
              'Mixed-Use Development',
              'Conservation Shophouse',
              'S-REIT',
              'UHNWI Wealth Advisory',
              'Family Office Real Estate',
              'Sovereign Wealth Fund Investment',
            ],
            sameAs: [
              'https://murivest.com',
              'https://murivest.com/singapore/properties',
              'https://murivest.com/singapore/contact',
            ],
            priceRange: '$$$$',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'SG',
              addressLocality: 'Singapore',
            },
          }),
        }}
      />
    </section>
  );
}