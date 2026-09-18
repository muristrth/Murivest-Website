'use client'

// ──────────────────────────────────────────────────────────────
// MURIVEST UAE — HOMEPAGE
// Old Money · Institutional · UHNWI-Facing
// Genesis Palette — Charcoal #2C2C2C · Brass #8B7355 · Ivory #F8F7F4
// Target: Family Offices, Sovereign Adjacent Capital, PE Principals,
//         UHNWI Counsel, Private Bankers, Dynastic Wealth
// ──────────────────────────────────────────────────────────────

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Minus,
  Plus,
  Mail,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════════ */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: HERO
   ═══════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative min-h-screen bg-[#2C2C2C] overflow-hidden">
      {/* Atmospheric layers — no photo wash, architectural suggestion */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,149,80,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.5),transparent_55%)]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-[0.03]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Masthead */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between border-b border-[#8B7355]/15 py-6 mt-8"
        >
          <div className="flex items-center gap-3">
            <span className="text-[#8B7355]/80 text-[10px] tracking-[0.35em] uppercase font-medium">
              Murivest Private Office
            </span>
            <span className="text-[rgba(248,247,244,0.4)] text-[10px]">/</span>
            <span className="text-[rgba(248,247,244,0.55)] text-[10px] tracking-[0.35em] uppercase">
              Dubai · Abu Dhabi
            </span>
          </div>
          <span className="hidden sm:block text-[rgba(248,247,244,0.4)] text-[10px] tracking-[0.3em] uppercase">
            By Appointment Only
          </span>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-12 gap-y-16 lg:gap-x-12 pt-20 pb-28 lg:pt-28 lg:pb-32">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="block text-[#8B7355]/90 text-[11px] tracking-[0.3em] uppercase font-medium mb-8">
              Institutional Real Estate Advisory — Gulf &amp; Levant
            </span>

            <h1 className="font-serif text-[#F8F7F4] text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] leading-[1.12] tracking-tight">
              Capital is not deployed.
              <br />
              It is <span className="italic text-[#8B7355]">stewarded</span>
              <br />
              across generations.
            </h1>

            <div className="mt-10 max-w-xl border-l border-[#8B7355]/25 pl-6">
              <p className="text-[rgba(248,247,244,0.65)] text-[15px] lg:text-base leading-[1.85] font-sans">
                Murivest advises dynastic families, sovereign-adjacent pools,
                and private equity principals on commercial real estate
                allocation across the United Arab Emirates. We do not market
                properties. We structure mandates.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8 mt-14">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 border border-[#8B7355]/40 text-[#F5F4F0] px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-medium hover:border-[#8B7355] hover:text-[#8B7355] transition-colors duration-500"
              >
                Arrange a Private Briefing
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-500" />
              </a>
              <a
                href="#research"
                className="group inline-flex items-center gap-2 text-[rgba(248,247,244,0.55)] hover:text-[rgba(248,247,244,0.85)] px-1 py-4 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-500"
              >
                Explore the UAE Platform
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
              </a>
            </div>
          </motion.div>

          {/* Plate — captioned architectural study */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 lg:pt-2"
          >
            <figure className="border border-[#8B7355]/15">
              <div className="relative aspect-[4/5] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale-[25%] contrast-[1.05]"
                  style={{ backgroundImage: "url('/images/uae-hero-architecture.webp')" }}
                />
                <div className="absolute inset-0 bg-[#2C2C2C]/20" />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#8B7355]/10" />
                {/* Gold corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#8B7355]/30" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#8B7355]/30" />
              </div>
              <figcaption className="flex items-center justify-between px-5 py-4 border-t border-[#8B7355]/15">
                <span className="text-[rgba(248,247,244,0.55)] text-[10px] tracking-[0.15em] uppercase">
                  Fig. 01 — DIFC Gate District, Dubai
                </span>
                <span className="text-[rgba(248,247,244,0.4)] text-[10px] tracking-[0.15em]">
                  2026
                </span>
              </figcaption>
            </figure>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#8B7355]/10">
              <div>
                <div className="text-[#E5E2DC] text-sm font-serif tracking-tight">
                  RERA · DLD Regulated
                </div>
                <div className="text-[rgba(248,247,244,0.4)] text-[10px] tracking-[0.2em] uppercase mt-1">
                  DIFC · ADGM Advisory
                </div>
              </div>
              <div className="w-10 h-px bg-[#8B7355]/30" />
              <div className="text-right">
                <div className="text-[#E5E2DC] text-sm font-serif tracking-tight">
                  Principals Only
                </div>
                <div className="text-[rgba(248,247,244,0.4)] text-[10px] tracking-[0.2em] uppercase mt-1">
                  Qualified Investor Access
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: QUICK LINKS BAR
   ═══════════════════════════════════════════════════════════════ */

function QuickLinksBar() {
  const links = [
    { label: 'Investment Advisory', href: '#advisory' },
    { label: 'Capital Markets', href: '#capital' },
    { label: 'Research & Intelligence', href: '#research' },
    { label: 'Cross-Border Structuring', href: '#crossborder' },
  ]

  return (
    <section className="bg-[#F5F4F0] border-b border-[#E5E2DC]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center gap-0">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-3 py-5 px-6 lg:px-8 text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] hover:text-[#2C2C2C] transition-colors duration-300 border-r border-[#E5E2DC] last:border-r-0"
            >
              {link.label}
              <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: RESEARCH BEFORE CAPITAL
   ═══════════════════════════════════════════════════════════════ */

function ResearchBeforeCapital() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-[#F8F7F4]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="lg:col-span-5"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[#8B7355]" />
              <span className="text-[#8B7355] text-[10px] tracking-[0.4em] uppercase font-medium">
                Our Philosophy
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl lg:text-5xl text-[#2C2C2C] leading-[1.15] mb-8"
            >
              Patrimony is not built on speculation.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[#5A5A5A] text-base leading-[1.8] mb-6 font-sans"
            >
              The families and institutions we serve do not trade real estate.
              They accumulate it. They hold it through cycles. They pass it to
              the next generation with the cost basis, yield profile and
              governance structure intact.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#5A5A5A] text-sm leading-[1.8] font-sans"
            >
              Our advisory begins with understanding the principal's capital
              architecture — currency exposure, Sharia compliance requirements,
              succession planning, and jurisdictional preferences — before a
              single asset is considered.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#5A5A5A] text-sm leading-[1.8] mt-4 font-sans"
            >
              We believe that disciplined research, local intelligence and
              long-term thinking produce superior outcomes to momentum-driven
              allocation. Every mandate is bespoke. Every recommendation is
              conflict-free.
            </motion.p>
          </motion.div>

          {/* Right — Investment Framework */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} className="mb-10">
              <span className="text-[#2C2C2C] text-[10px] tracking-[0.3em] uppercase font-medium">
                How We Think
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl text-[#2C2C2C] mt-3">
                A Framework for Dynastic Capital Allocation
              </h3>
            </motion.div>

            <div className="space-y-0">
              {[
                {
                  title: 'Markets',
                  desc: 'Understanding how capital moves between Dubai, Abu Dhabi, Riyadh, London and Singapore. We track the flows that matter to private wealth.',
                },
                {
                  title: 'Research',
                  desc: 'Producing intelligence that informs allocation decisions rather than marketing brochures. Our research is for principals, not the public.',
                },
                {
                  title: 'Capital',
                  desc: 'Structuring transactions around generational objectives — yield, preservation, growth, or legacy — rather than asset availability.',
                },
                {
                  title: 'Execution',
                  desc: 'Supporting acquisitions, dispositions and portfolio strategy through disciplined advisory. Execution follows conviction, not convenience.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="group py-8 border-t border-[#E5E2DC] first:border-t-0 hover:bg-[#F5F4F0]/50 transition-colors duration-300 px-4 -mx-4"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#E5E2DC] group-hover:border-[#8B7355] group-hover:bg-[#8B7355]/5 transition-all duration-300 shrink-0">
                      <span className="text-[#5A5A5A] group-hover:text-[#8B7355] text-xs font-mono transition-colors">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-serif text-lg text-[#2C2C2C]">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-[#5A5A5A] text-sm leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: THE UAE PLATFORM — Emirate Cards
   ═══════��═══════════════════════════════════════════════════════ */

function UAEPlatform() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const emirates = [
    {
      name: 'Dubai',
      driver: 'The region&apos;s liquidity centre. Trade, tourism, finance and logistics converge here.',
      capital: 'Unmatched transaction volume, international occupier demand, and freehold title for foreign principals. The default gateway for first-time UAE allocation.',
      sectors: 'Prime office (DIFC, Downtown), logistics (Dubai South), hospitality (Palm, Marina), residential (Emirates Hills, Palm Jebel Ali).',
    },
    {
      name: 'Abu Dhabi',
      driver: 'Sovereign capital, energy transition and government-anchored development under Vision 2030.',
      capital: 'Long-duration income backed by sovereign-grade counterparties. ADGM structuring and access to government-linked pipeline. Lower volatility, higher ticket sizes.',
      sectors: 'Office (Al Maryah, Sowwah Square), government-linked developments, residential (Saadiyat, Yas Island), industrial (KIZAD).',
    },
    {
      name: 'Sharjah',
      driver: 'Manufacturing, education and industrial production with competitive land pricing.',
      capital: 'Value-oriented entry into UAE industrial and logistics markets. Strong rental yields for income-focused mandates. Proximity to Dubai without the premium.',
      sectors: 'Industrial (Saja, Hamriyah Free Zone), logistics, education-linked residential, affordable commercial.',
    },
    {
      name: 'Ras Al Khaimah',
      driver: 'Tourism infrastructure, manufacturing diversification and the fastest-growing emirate by GDP.',
      capital: 'Early-mover positioning in hospitality and industrial assets. Al Marjan Island and Jebel Jais developments offer differentiated exposure outside the Dubai-Abu Dhabi corridor.',
      sectors: 'Hospitality (Al Marjan), industrial, residential, adventure tourism-linked commercial.',
    },
    {
      name: 'Ajman',
      driver: 'Affordable industrial capacity within the Dubai metropolitan corridor.',
      capital: 'Value-oriented industrial and residential acquisition with direct access to Dubai and Sharjah labour pools. Higher yields, lower entry tickets.',
      sectors: 'Industrial (Al Jurf), affordable residential, logistics last-mile.',
    },
    {
      name: 'Fujairah',
      driver: 'Port infrastructure and energy logistics on the Indian Ocean coastline.',
      capital: 'Specialised exposure to maritime trade and energy-linked real estate. Strategic location outside the Strait of Hormuz. Niche but uncorrelated.',
      sectors: 'Port-related industrial, energy logistics, storage and terminal facilities.',
    },
  ]

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-[#2C2C2C]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="max-w-3xl mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#8B7355]" />
            <span className="text-[#8B7355] text-[10px] tracking-[0.4em] uppercase font-medium">
              The UAE Platform
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl lg:text-5xl text-[#F8F7F4] leading-[1.15] mb-6"
          >
            One Federation. Six Economies. Distinct Risk Profiles.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[rgba(248,247,244,0.65)] text-base leading-[1.8] font-sans"
          >
            The UAE presents itself as a single investment destination, yet each
            emirate operates with different economic drivers, planning
            frameworks, title regimes and capital requirements. Understanding
            those distinctions is not optional — it is the foundation of
            institutional portfolio construction.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(248,247,244,0.08)]">
          {emirates.map((emirate, i) => (
            <EmirateCard key={emirate.name} emirate={emirate} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EmirateCard({
  emirate,
  index,
  isInView,
}: {
  emirate: any
  index: number
  isInView: boolean
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
      className="bg-[#2C2C2C] p-8 lg:p-10 group hover:bg-[rgba(255,255,255,0.04)] transition-colors duration-500 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-xl text-[#F8F7F4]">{emirate.name}</h3>
        <div className="w-8 h-8 flex items-center justify-center border border-[rgba(248,247,244,0.25)] group-hover:border-[#8B7355]/50 transition-colors">
          {expanded ? (
            <Minus size={14} className="text-[rgba(248,247,244,0.55)]" />
          ) : (
            <Plus size={14} className="text-[rgba(248,247,244,0.55)]" />
          )}
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <span className="text-[#8B7355]/70 text-[9px] tracking-[0.3em] uppercase block mb-2">
            Economic Driver
          </span>
          <p className="text-[rgba(248,247,244,0.65)] text-sm leading-relaxed font-sans">
            {emirate.driver}
          </p>
        </div>

        <div>
          <span className="text-[#8B7355]/70 text-[9px] tracking-[0.3em] uppercase block mb-2">
            Why Capital Allocates Here
          </span>
          <p className="text-[rgba(248,247,244,0.65)] text-sm leading-relaxed font-sans">
            {emirate.capital}
          </p>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div>
                <span className="text-[#8B7355]/70 text-[9px] tracking-[0.3em] uppercase block mb-2">
                  Dominant Sectors
                </span>
                <p className="text-[rgba(248,247,244,0.65)] text-sm leading-relaxed font-sans">
                  {emirate.sectors}
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-[rgba(248,247,244,0.3)]">
                <a
                  href={`/united-arab-emirates/${emirate.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 text-[#8B7355] text-[10px] tracking-[0.2em] uppercase hover:text-[#8B7355] transition-colors"
                >
                  View Market Intelligence
                  <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!expanded && (
          <div className="pt-4 border-t border-[rgba(248,247,244,0.3)]/50">
            <span className="text-[rgba(248,247,244,0.4)] text-[10px] tracking-[0.15em] uppercase">
              Click to expand
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: SECTORS
   ═══════════════════════════════════════════════════════════════ */

function Sectors() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const sectors = [
    'Prime Office',
    'Industrial & Logistics',
    'Luxury Retail',
    'Hospitality & Resorts',
    'Residential — Prime',
    'Student Housing',
    'Healthcare & Clinics',
    'Life Sciences',
    'Data Centres',
    'Mixed-Use Developments',
    'Development Land',
    'Specialised & Niche',
  ]

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-[#F8F7F4]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#8B7355]" />
            <span className="text-[#8B7355] text-[10px] tracking-[0.4em] uppercase font-medium">
              Coverage
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl lg:text-5xl text-[#2C2C2C] leading-[1.15]"
          >
            Institutional-Grade Sectors for Discerning Capital
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[#E5E2DC]">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="bg-[#F8F7F4] p-6 lg:p-8 group hover:bg-[#2C2C2C] transition-colors duration-500 cursor-default"
            >
              <span className="text-[#5A5A5A] group-hover:text-[#F8F7F4] text-sm font-medium tracking-wide transition-colors duration-300 font-sans">
                {sector}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: RESEARCH
   ═══════════════════════════════════════════════════════════════ */

function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const researchTypes = [
    'UAE Macro Outlook',
    'Emirate Intelligence Briefs',
    'Sector Analysis',
    'Capital Markets Commentary',
    'Investment Themes',
    'City Intelligence — Dubai & Abu Dhabi',
  ]

  const indicators = [
    { label: 'Prime Office Yield', value: '6.0–7.5%' },
    { label: 'Industrial Yield', value: '7.5–9.0%' },
    { label: 'Retail Prime Yield', value: '7.0–8.5%' },
    { label: 'Hospitality Yield', value: '7.5–9.5%' },
    { label: 'Residential Prime', value: 'AED/sq ft' },
    { label: 'Construction Pipeline', value: 'msq ft' },
    { label: 'Population Growth', value: '+2.5% p.a.' },
    { label: 'GDP Growth', value: '+4.0% p.a.' },
    { label: 'Investment Volume', value: 'AED bn' },
    { label: 'Foreign Direct Investment', value: 'USD bn' },
  ]

  return (
    <section ref={ref} id="research" className="py-32 lg:py-40 bg-[#F5F4F0]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="lg:col-span-5"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[#8B7355]" />
              <span className="text-[#8B7355] text-[10px] tracking-[0.4em] uppercase font-medium">
                Research
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl lg:text-5xl text-[#2C2C2C] leading-[1.15] mb-8"
            >
              Intelligence That Precedes Allocation.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[#5A5A5A] text-base leading-[1.8] mb-6 font-sans"
            >
              Our research function exists to improve investment decisions, not
              to generate marketing content. Every report is developed from
              primary data, proprietary transaction intelligence and direct
              relationships with developers, landlords and regulators across the
              emirates.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-3 mt-10">
              {researchTypes.map((type) => (
                <a
                  key={type}
                  href={`/united-arab-emirates/research/${type.toLowerCase().replace(/\s+/g, '-').replace(/—/g, '')}`}
                  className="flex items-center justify-between py-3 border-b border-[#E5E2DC] group hover:border-[#8B7355] transition-colors duration-300"
                >
                  <span className="text-[#5A5A5A] text-sm group-hover:text-[#2C2C2C] transition-colors font-sans">
                    {type}
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-[#5A5A5A] group-hover:text-[#8B7355] transition-colors"
                  />
                </a>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <a
                href="/dashboard"
                className="inline-flex items-center gap-3 text-[#2C2C2C] text-[11px] tracking-[0.2em] uppercase font-medium hover:text-[#8B7355] transition-colors"
              >
                Access the Principal Dashboard
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Market Indicators */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} className="mb-10">
              <span className="text-[#2C2C2C] text-[10px] tracking-[0.3em] uppercase font-medium">
                Current Market Indicators — Q3 2026
              </span>
            </motion.div>

            <div className="grid grid-cols-2 gap-px bg-[#E5E2DC]">
              {indicators.map((ind) => (
                <motion.div
                  key={ind.label}
                  variants={fadeUp}
                  className="bg-[#F5F4F0] p-6 lg:p-8 group hover:bg-[#F8F7F4] transition-colors duration-300"
                >
                  <span className="text-[#5A5A5A] text-[9px] tracking-[0.25em] uppercase block mb-3">
                    {ind.label}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-xl lg:text-2xl text-[#2C2C2C]">
                      {ind.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: INVESTMENT THEMES
   ═══════════════════════════════════════════════════════════════ */

function InvestmentThemes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const themes = [
    {
      title: 'Sovereign-Adjacent Logistics',
      desc: 'The UAE&apos;s position as a global trade hub continues to drive demand for Grade A warehousing, cold chain and last-mile infrastructure. Capital with long-duration mandates is allocating ahead of supply.',
    },
    {
      title: 'Digital Infrastructure & AI Compute',
      desc: 'Cloud expansion and sovereign AI strategies are creating a new asset class: data centres, power substations and fibre-linked industrial land. Early-mover advantage is significant.',
    },
    {
      title: 'Healthcare Real Estate',
      desc: 'Population growth, medical tourism and regulatory reform are expanding demand for hospitals, clinics and specialist care facilities. Defensive income with demographic tailwinds.',
    },
    {
      title: 'Hospitality & Branded Residences',
      desc: 'Visitor arrivals continue to exceed projections. Branded residences and luxury hospitality assets offer dual revenue streams and trophy value for family office portfolios.',
    },
    {
      title: 'Urban Regeneration & Master Plans',
      desc: 'Established districts are being reimagined as mixed-use destinations. Land assembly and repositioning in Dubai and Abu Dhabi offer development alpha for patient capital.',
    },
    {
      title: 'Industrial Diversification',
      desc: 'Sharjah and Ras Al Khaimah are capturing manufacturing relocation from higher-cost jurisdictions. Industrial land and facilities offer yield premiums with occupancy certainty.',
    },
    {
      title: 'Prime Residential & Build-to-Rent',
      desc: 'Demographic shifts and expatriate wealth migration are reshaping residential demand. Build-to-rent and prime single-family assets are attracting institutional capital.',
    },
    {
      title: 'Energy Transition Infrastructure',
      desc: 'Solar, hydrogen and EV infrastructure are creating new real estate demand categories. Sovereign-backed offtake agreements de-risk early investment.',
    },
    {
      title: 'Sharia-Compliant Structures',
      desc: 'Ijara, Musharaka and Sukuk-backed real estate structures are increasingly favoured by GCC family offices. We advise on compliant acquisition and financing frameworks.',
    },
    {
      title: 'Cross-Border Capital Arbitrage',
      desc: 'Currency stability, tax efficiency and treaty access make the UAE a preferred structuring jurisdiction for capital originating in Africa, South Asia and Eastern Europe.',
    },
  ]

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-[#2C2C2C]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#8B7355]" />
            <span className="text-[#8B7355] text-[10px] tracking-[0.4em] uppercase font-medium">
              Investment Themes
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl lg:text-5xl text-[#F8F7F4] leading-[1.15] max-w-3xl"
          >
            Structural Trends Shaping Generational Allocation
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-[rgba(248,247,244,0.08)]">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="bg-[#2C2C2C] p-8 lg:p-10 group hover:bg-[rgba(255,255,255,0.04)] transition-colors duration-500"
            >
              <div className="flex items-start gap-6">
                <span className="text-[#8B7355]/40 text-xs font-mono mt-1 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-serif text-lg text-[#F8F7F4] mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                    {theme.title}
                  </h3>
                  <p className="text-[rgba(248,247,244,0.55)] text-sm leading-[1.8] font-sans">
                    {theme.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: HOW WE ADVISE
   ═══════════════════════════════════════════════════════════════ */

function HowWeAdvise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      title: 'Investment Advisory',
      desc: 'We support acquisition, disposition and market entry decisions with analysis grounded in primary research. Our recommendations reflect your mandate, not our inventory.',
    },
    {
      title: 'Capital Markets',
      desc: 'We structure investment sales, equity introductions and debt advisory for institutional and sovereign counterparties. Execution follows strategy, never the reverse.',
    },
    {
      title: 'Portfolio Strategy',
      desc: 'We construct allocation frameworks across emirates and asset classes calibrated to duration, currency exposure, Sharia compliance and generational transfer requirements.',
    },
    {
      title: 'Research & Intelligence',
      desc: 'We produce market intelligence to inform live advisory engagements. Our research is proprietary, conflict-free and developed exclusively for mandate holders.',
    },
    {
      title: 'Cross-Border Structuring',
      desc: 'We advise capital moving between the Gulf, Africa and Europe. Structuring accounts for both jurisdictions, tax efficiency and repatriation from the outset.',
    },
    {
      title: 'Family Office Services',
      desc: 'We provide white-glove real estate advisory to dynastic families: consolidated reporting, governance frameworks, succession planning and next-generation education.',
    },
    {
      title: 'Development Advisory',
      desc: 'We advise on site selection, feasibility and positioning for institutional development programmes. Our input begins before land is acquired, not after.',
    },
    {
      title: 'Private Wealth Structuring',
      desc: 'We coordinate with legal and tax counsel to structure holdings through DIFC, ADGM or offshore vehicles. Privacy, protection and transmission are paramount.',
    },
  ]

  return (
    <section ref={ref} id="advisory" className="py-32 lg:py-40 bg-[#F8F7F4]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#8B7355]" />
            <span className="text-[#8B7355] text-[10px] tracking-[0.4em] uppercase font-medium">
              How We Advise
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl lg:text-5xl text-[#2C2C2C] leading-[1.15] max-w-3xl"
          >
            Advisory Calibrated to Principal-Level Expectations
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-[#E5E2DC]">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="bg-[#F8F7F4] p-8 lg:p-10 group hover:bg-[#F5F4F0] transition-colors duration-500"
            >
              <div className="flex items-start gap-6">
                <span className="text-[#8B7355]/50 text-xs font-mono mt-1 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-serif text-lg text-[#2C2C2C] mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#5A5A5A] text-sm leading-[1.8] font-sans">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: PERSPECTIVE
   ═══════════════════════════════════════════════════════════════ */

function Perspective() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-[#2C2C2C]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="lg:col-span-5"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[#8B7355]" />
              <span className="text-[#8B7355] text-[10px] tracking-[0.4em] uppercase font-medium">
                Perspective
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl lg:text-5xl text-[#F8F7F4] leading-[1.15] mb-8"
            >
              Dubai is where capital meets conviction.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            <motion.p
              variants={fadeUp}
              className="text-[rgba(248,247,244,0.65)] text-base leading-[1.8] mb-6 font-sans"
            >
              Murivest operates across the Gulf and East Africa from offices in
              Dubai, Abu Dhabi, Nairobi and London. That perspective informs how
              we analyse relative value, evaluate counterparty risk and
              structure cross-border transactions.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[rgba(248,247,244,0.65)] text-base leading-[1.8] mb-6 font-sans"
            >
              For the families and institutions we serve, the UAE is not merely
              a destination for capital — it is a jurisdiction of trust,
              stability and strategic positioning. We treat it accordingly.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[rgba(248,247,244,0.65)] text-base leading-[1.8] font-sans"
            >
              Our role is to provide independent advice grounded in research,
              executed with discretion, and delivered with the gravitas that
              principal-level relationships demand.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: INSIGHTS
   ═══════════════════════════════════════════════════════════════ */

function Insights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const insights = [
    { label: 'Quarterly UAE Outlook', href: '/united-arab-emirates/insights/quarterly-outlook' },
    { label: 'Market Commentary', href: '/united-arab-emirates/insights/market-commentary' },
    { label: 'Video Briefings', href: '/united-arab-emirates/insights/video-briefings' },
    { label: 'City Intelligence', href: '/united-arab-emirates/insights/city-intelligence' },
  ]

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-[#F8F7F4]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#8B7355]" />
            <span className="text-[#8B7355] text-[10px] tracking-[0.4em] uppercase font-medium">
              Insights
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl lg:text-5xl text-[#2C2C2C] leading-[1.15]"
          >
            Research, Reports and Principal Briefings
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E2DC]"
        >
          {insights.map((insight) => (
            <motion.a
              key={insight.label}
              variants={fadeUp}
              href={insight.href}
              className="bg-[#F8F7F4] p-8 lg:p-10 group hover:bg-[#2C2C2C] transition-colors duration-500 block"
            >
              <span className="text-[#5A5A5A] group-hover:text-[#F8F7F4] text-sm font-medium tracking-wide transition-colors duration-300 block mb-4 font-sans">
                {insight.label}
              </span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-[#E5E2DC] group-hover:bg-[#8B7355] transition-colors" />
                <ArrowRight
                  size={14}
                  className="text-[#5A5A5A] group-hover:text-[#8B7355] transition-colors"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: CTA
   ═══════════════════════════════════════════════════════════════ */

function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="contact" className="py-32 lg:py-40 bg-[#2C2C2C]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#8B7355]" />
            <span className="text-[#8B7355] text-[10px] tracking-[0.4em] uppercase font-medium">
              Private Office
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl lg:text-5xl xl:text-6xl text-[#F8F7F4] leading-[1.15] mb-8"
          >
            The Conversation Precedes the Transaction.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[rgba(248,247,244,0.65)] text-base lg:text-lg leading-[1.8] mb-12 max-w-2xl font-sans"
          >
            Institutional real estate decisions are rarely defined by a single
            asset. They begin with understanding markets, objectives and
            capital architecture. Whether evaluating a market entry, portfolio
            rebalancing or generational transfer, early dialogue improves later
            execution.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-[rgba(248,247,244,0.55)] text-sm leading-[1.8] mb-12 max-w-2xl font-sans"
          >
            We meet principals by appointment only. Initial consultations are
            conducted in person at our DIFC office, via secure video
            conference, or at your private residence upon request.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="/united-arab-emirates/contact"
              className="group inline-flex items-center gap-3 bg-[#8B7355] text-[#F8F7F4] px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-300"
            >
              Request a Private Briefing
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: FOOTER
   ═══════════════════════════════════���═══════════════════════════ */

function Footer() {
  return (
    <footer className="bg-[#2C2C2C] py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#8B7355] rounded-sm flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-5 h-5 text-[#F8F7F4]" fill="currentColor">
                  <rect x="4" y="4" width="10" height="10" rx="1" />
                  <rect x="18" y="4" width="10" height="10" rx="1" />
                  <rect x="4" y="18" width="10" height="10" rx="1" />
                  <rect x="18" y="18" width="10" height="10" rx="1" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-lg tracking-[0.2em] uppercase text-[#F8F7F4]">
                  Murivest
                </span>
                <span className="block text-[9px] tracking-[0.35em] uppercase text-[#8B7355]">
                  United Arab Emirates
                </span>
              </div>
            </div>
            <p className="text-[rgba(248,247,244,0.55)] text-sm leading-relaxed font-sans max-w-xs">
              Advising dynastic families, sovereign-adjacent capital and
              institutional investors on commercial real estate strategy
              across the United Arab Emirates.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-[rgba(248,247,244,0.4)] text-[10px] tracking-[0.3em] uppercase mb-6">
              Advisory
            </h4>
            <ul className="space-y-3">
              {[
                'Investment Advisory',
                'Capital Markets',
                'Portfolio Strategy',
                'Research',
                'Cross-Border Structuring',
                'Family Office Services',
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`/united-arab-emirates/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[rgba(248,247,244,0.55)] text-sm hover:text-[#8B7355] transition-colors font-sans"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[rgba(248,247,244,0.4)] text-[10px] tracking-[0.3em] uppercase mb-6">
              Markets
            </h4>
            <ul className="space-y-3">
              {['Dubai', 'Abu Dhabi', 'Sharjah', 'Ras Al Khaimah', 'Ajman', 'Fujairah'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/united-arab-emirates/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-[rgba(248,247,244,0.55)] text-sm hover:text-[#8B7355] transition-colors font-sans"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[rgba(248,247,244,0.4)] text-[10px] tracking-[0.3em] uppercase mb-6">
              Intelligence
            </h4>
            <ul className="space-y-3">
              {[
                'Market Reports',
                'Investment Guides',
                'Sector Analysis',
                'City Intelligence',
                'Video Briefings',
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`/united-arab-emirates/research/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[rgba(248,247,244,0.55)] text-sm hover:text-[#8B7355] transition-colors font-sans"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[rgba(248,247,244,0.4)] text-[10px] tracking-[0.3em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@murivest.co.ke"
                  className="text-[rgba(248,247,244,0.55)] text-sm hover:text-[#8B7355] transition-colors flex items-center gap-2 font-sans"
                >
                  <Mail size={14} />
                  info@murivest.co.ke
                </a>
              </li>
              <li>
                <a
                  href="/united-arab-emirates/contact"
                  className="text-[rgba(248,247,244,0.55)] text-sm hover:text-[#8B7355] transition-colors font-sans"
                >
                  Private Office — DIFC
                </a>
              </li>
              <li>
                <a
                  href="/united-arab-emirates/contact"
                  className="text-[rgba(248,247,244,0.55)] text-sm hover:text-[#8B7355] transition-colors font-sans"
                >
                  Abu Dhabi — ADGM
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[rgba(248,247,244,0.12)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[rgba(248,247,244,0.35)] text-[10px] tracking-[0.15em] uppercase">
            &copy; {new Date().getFullYear()} Murivest. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-[rgba(248,247,244,0.35)] text-[10px] tracking-[0.15em] uppercase hover:text-[rgba(248,247,244,0.6)] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-[rgba(248,247,244,0.35)] text-[10px] tracking-[0.15em] uppercase hover:text-[rgba(248,247,244,0.6)] transition-colors"
            >
              Terms of Use
            </a>
            <span className="text-[rgba(248,247,244,0.3)] text-[10px] tracking-[0.15em] uppercase">
              RERA · DLD · DIFC · ADGM
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      <style jsx global>{`
        .font-serif {
          font-family: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
        }
        .font-sans {
          font-family: 'Montserrat', 'Inter', 'Helvetica Neue', Arial, sans-serif;
        }
        .font-mono {
          font-family: 'JetBrains Mono', 'Courier New', monospace;
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #F5F4F0; }
        ::-webkit-scrollbar-thumb { background: #E5E2DC; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #8B7355; }

        html { scroll-behavior: smooth; }

        ::selection {
          background: rgba(139, 115, 85, 0.2);
          color: #2C2C2C;
        }
      `}</style>

      <Hero />
      <QuickLinksBar />
      <ResearchBeforeCapital />
      <UAEPlatform />
      <Sectors />
      <Research />
      <InvestmentThemes />
      <HowWeAdvise />
      <Perspective />
      <Insights />
      <CTA />
      <Footer />
    </main>
  )
}
