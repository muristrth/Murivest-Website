'use client'

// ──────────────────────────────────────────────────────────────
// MURIVEST DUBAI — EMIRATE HOMEPAGE (REVISED)
// Old Money · Institutional · UHNWI / Family Office / PE Principal Facing
// Forest Green #1B4332 · Brass/Gold #B8956B · Cream #FAF9F6
// Target: Family Offices, Sovereign-Adjacent Capital, PE Principals, Private Client Counsel
// ──────────────────────────────────────────────────────────────
// NOTE: Export metadata from a parallel server layout.tsx:
//
// export const metadata: Metadata = {
//   title: 'Dubai Commercial Real Estate | Institutional Investment Advisory | Murivest',
//   description: 'Private-mandate commercial real estate advisory for institutional and family-office capital in Dubai. DIFC, Business Bay, Downtown, Jebel Ali, Dubai South and Palm Jebel Ali.',
//   alternates: { canonical: 'https://murivest.com/united-arab-emirates/dubai' },
//   openGraph: {
//     title: 'Dubai Commercial Real Estate | Institutional Investment Advisory',
//     description: 'Private-mandate CRE advisory for institutional and dynastic capital in Dubai',
//     url: 'https://murivest.com/united-arab-emirates/dubai',
//     siteName: 'Murivest',
//     locale: 'en_AE',
//     type: 'website',
//   },
// }
// ──────────────────────────────────────────────────────────────

import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Minus,
  Plus,
  Mail,
  Building2,
  Warehouse,
  Store,
  Hotel,
  Home,
  Landmark,
  ShieldCheck,
  ScrollText,
  Scale,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS
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

/** A hairline gold divider used at every section threshold — the page's
 *  recurring "signature" mark, echoing a wax-seal ribbon rather than a UI rule. */
function GoldEyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-px bg-gradient-to-r from-gold-500 to-gold-500/20" />
      <span className="text-gold-500/90 text-[10px] tracking-[0.4em] uppercase font-medium">
        {label}
      </span>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: HERO
   ═══════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative min-h-screen bg-forest-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,149,80,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.55),transparent_55%)]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-[0.03]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Masthead */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between border-b border-gold-500/15 py-6 mt-8"
        >
          <div className="flex items-center gap-3">
            <span className="text-gold-400/80 text-[10px] tracking-[0.35em] uppercase font-medium">
              Murivest Private Office
            </span>
            <span className="text-stone-600 text-[10px]">/</span>
            <span className="text-stone-500 text-[10px] tracking-[0.35em] uppercase">
              Dubai Emirate
            </span>
          </div>
          <span className="hidden sm:block text-stone-600 text-[10px] tracking-[0.3em] uppercase">
            By Introduction & Appointment Only
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
            <span className="block text-gold-400/90 text-[11px] tracking-[0.3em] uppercase font-medium mb-8">
              Institutional Real Estate Advisory — Dubai
            </span>

            <h1 className="font-display text-stone-50 text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] leading-[1.12] tracking-tight">
              Capital does not
              <br />
              chase Dubai. It <span className="italic text-stone-300">holds</span>
              <br />
              a position in it.
            </h1>

            <div className="mt-10 max-w-xl border-l border-gold-500/25 pl-6">
              <p className="text-stone-400 text-[15px] lg:text-base leading-[1.85] font-body">
                Murivest advises dynastic families, sovereign-adjacent pools, private
                equity principals and their counsel on commercial real estate
                allocation across Dubai — from the DIFC to Dubai South. We are not
                a brokerage. We originate, structure and steward mandates on
                behalf of principals who do not transact publicly.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8 mt-14">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 border border-gold-500/40 text-stone-100 px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-medium hover:border-gold-400 hover:text-gold-300 transition-colors duration-500"
              >
                Request a Private Briefing
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-500" />
              </a>
              <a
                href="#districts"
                className="group inline-flex items-center gap-2 text-stone-500 hover:text-stone-300 px-1 py-4 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-500"
              >
                Review District Intelligence
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
              </a>
            </div>
          </motion.div>

          {/* Plate */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 lg:pt-2"
          >
            <figure className="border border-gold-500/20">
              <div className="relative aspect-[4/5] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale-[25%] contrast-[1.05]"
                  style={{ backgroundImage: "url('/images/dubai-difc-skyline.webp')" }}
                />
                <div className="absolute inset-0 bg-forest-950/20" />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold-500/10" />
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold-500/40" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold-500/40" />
              </div>
              <figcaption className="flex items-center justify-between px-5 py-4 border-t border-gold-500/15">
                <span className="text-stone-500 text-[10px] tracking-[0.15em] uppercase">
                  Fig. 01 — DIFC Gate District, Dubai
                </span>
                <span className="text-stone-600 text-[10px] tracking-[0.15em]">
                  2026
                </span>
              </figcaption>
            </figure>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gold-500/10">
              <div>
                <div className="text-stone-200 text-sm font-display tracking-tight">
                  RERA · DLD Regulated
                </div>
                <div className="text-stone-600 text-[10px] tracking-[0.2em] uppercase mt-1">
                  DIFC-Registered Advisory
                </div>
              </div>
              <div className="w-10 h-px bg-gold-500/30" />
              <div className="text-right">
                <div className="text-stone-200 text-sm font-display tracking-tight">
                  Principals Only
                </div>
                <div className="text-stone-600 text-[10px] tracking-[0.2em] uppercase mt-1">
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
    { label: 'Business Bay', href: '#business-bay' },
    { label: 'DIFC', href: '#difc' },
    { label: 'Downtown', href: '#downtown' },
    { label: 'Jebel Ali', href: '#jebel-ali' },
    { label: 'Dubai South', href: '#dubai-south' },
    { label: 'Palm Jebel Ali', href: '#palm-jebel-ali' },
  ]

  return (
    <section className="bg-stone-100 border-b border-stone-200 sticky top-[104px] z-30">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-0 overflow-x-auto no-scrollbar">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-3 py-4 px-5 lg:px-7 text-[10px] tracking-[0.2em] uppercase text-stone-500 hover:text-forest-800 transition-colors duration-300 border-r border-stone-200 last:border-r-0 shrink-0 whitespace-nowrap"
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
   SECTION: EDITORIAL INTRO
   ═══════════════════════════════════════════════════════════════ */

function EditorialIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-stone-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="lg:col-span-5"
          >
            <motion.div variants={fadeUp}>
              <GoldEyebrow label="Why Dubai" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl lg:text-5xl text-forest-900 leading-[1.15] mb-8"
            >
              The gateway between London and Singapore.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-stone-600 text-base leading-[1.8] mb-6 font-body"
            >
              Dubai has matured from an emerging market into a primary reserve
              destination for institutional and dynastic capital. Zero personal
              and corporate tax, full foreign freehold ownership, RERA-regulated
              escrow, DIFC common-law courts, and a geographic position that
              commands trade flows between Europe, Africa and Asia make it
              structurally irreplaceable in a global portfolio.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-stone-500 text-sm leading-[1.8] mb-8 font-body"
            >
              For the families and principals we serve, Dubai is not an
              opportunistic trade. It is a strategic jurisdiction — a place to
              hold income-producing assets, to structure cross-border holdings
              through DIFC foundations or ADGM trusts, and to establish a
              generational footprint in the world's most disciplined commercial
              corridor.
            </motion.p>

            <motion.div variants={fadeUp} className="border-t border-gold-500/20 pt-6">
              <p className="font-accent italic text-forest-800 text-lg lg:text-xl leading-relaxed">
                "We do not advise on transactions. We advise on positions
                intended to outlast the person who took them."
              </p>
              <span className="block text-stone-500 text-[10px] tracking-[0.25em] uppercase mt-4">
                — Murivest Private Office, Client Note
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} className="mb-10">
              <span className="text-forest-800 text-[10px] tracking-[0.3em] uppercase font-medium">
                Allocation Rationale
              </span>
              <h3 className="font-display text-2xl lg:text-3xl text-forest-900 mt-3">
                Why Institutional and Family Office Capital Allocates to Dubai
              </h3>
            </motion.div>

            <div className="space-y-0">
              {[
                {
                  title: 'Regulatory Excellence',
                  desc: 'RERA, DLD and DIFC Courts provide institutional-grade transparency, escrow regulation and English common-law dispute resolution that rival, and in structuring speed exceed, comparable European jurisdictions.',
                },
                {
                  title: 'Currency Stability',
                  desc: 'AED pegged to the US dollar since 1997. No currency risk for USD-denominated mandates. A natural hedge for EUR and GBP-exposed family balance sheets.',
                },
                {
                  title: 'Freehold Title & Golden Visa',
                  desc: 'Full foreign ownership in designated zones, registered directly with the Dubai Land Department, frequently paired with 10-year Golden Visa residency for principals and immediate family.',
                },
                {
                  title: 'Tax and Succession Efficiency',
                  desc: 'Zero personal income tax, zero capital gains tax, zero corporate tax for most sectors. Structuring through DIFC foundations or ADGM adds treaty access and clean generational transfer.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="group py-8 border-t border-stone-200 first:border-t-0 hover:bg-stone-100/50 transition-colors duration-300 px-4 -mx-4"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 flex items-center justify-center border border-stone-300 group-hover:border-gold-500 group-hover:bg-gold-500/5 transition-all duration-300 shrink-0">
                      <span className="text-stone-400 group-hover:text-gold-600 text-xs font-mono transition-colors">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display text-lg text-forest-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-stone-500 text-sm leading-relaxed font-body">
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
   SECTION: PROVENANCE / CREDENTIALS STRIP (NEW)
   The trust markers a principal's lawyer scans for before reading anything else.
   ═══════════════════════════════════════════════════════════════ */

function Provenance() {
  const marks = [
    { icon: ScrollText, label: 'DLD Registered Title Transfers' },
    { icon: Scale, label: 'DIFC Courts — English Common Law' },
    { icon: ShieldCheck, label: 'RERA Escrow Compliant' },
    { icon: Landmark, label: 'ADGM & RAK ICC Structuring' },
  ]

  return (
    <section className="bg-forest-900 border-y border-gold-500/15 py-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {marks.map((m) => {
            const Icon = m.icon
            return (
              <div key={m.label} className="flex items-center gap-3">
                <Icon size={16} strokeWidth={1.5} className="text-gold-400/70 shrink-0" />
                <span className="text-stone-300 text-[11px] tracking-[0.1em] uppercase font-body">
                  {m.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: DISTRICTS
   ═══════════════════════════════════════════════════════════════ */

function Districts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const districts = [
    {
      id: 'business-bay',
      name: 'Business Bay',
      tagline: 'The Corporate Nucleus',
      driver: 'Dubai\'s central business district. Grade A office towers, waterfront promenades and mixed-use developments housing the regional headquarters of multinational firms and family-owned conglomerates.',
      thesis: 'Institutional office acquisition with long-lease corporate tenants. Premium residential conversion in older stock. Yield compression as Dubai consolidates its position as the MENA financial capital.',
      sectors: 'Prime Office, Mixed-Use, Serviced Residences',
      yield: '6.0 – 7.0%',
      href: '/united-arab-emirates/dubai/business-bay',
    },
    {
      id: 'difc',
      name: 'Dubai International Financial Centre',
      tagline: 'The Capital of Capital',
      driver: 'An independent common-law jurisdiction within Dubai, home to over 2,500 registered firms including global banks, sovereign wealth managers, family offices and insurance houses.',
      thesis: 'Trophy office assets with sovereign-grade tenant covenants. Limited supply of DIFC-licensed space creates natural scarcity — ideal for capital-preservation mandates seeking blue-chip income.',
      sectors: 'Financial Office, Legal & Advisory, Fintech',
      yield: '5.5 – 6.5%',
      href: '/united-arab-emirates/dubai/difc',
    },
    {
      id: 'downtown-dubai',
      name: 'Downtown Dubai',
      tagline: 'Iconic Address, Institutional Yield',
      driver: 'The most recognisable square mile in the Middle East. Burj Khalifa, Dubai Mall and the Opera District anchor an ecosystem of luxury retail, hospitality and branded residence.',
      thesis: 'Retail anchor tenancies with international maisons. Trophy hospitality with RevPAR premiums. Branded residences for principal occupation or discreet rental yield.',
      sectors: 'Luxury Retail, Hospitality, Branded Residences',
      yield: '6.5 – 8.0%',
      href: '/united-arab-emirates/dubai/downtown-dubai',
    },
    {
      id: 'jebel-ali',
      name: 'Jebel Ali',
      tagline: 'The Industrial Gateway',
      driver: 'The largest man-made harbour in the world, anchoring Dubai\'s industrial economy. JAFZA hosts over 9,000 companies across manufacturing, trade and distribution.',
      thesis: 'Logistics and industrial assets with port-adjacent locational advantage. Cold chain and e-commerce fulfilment in high demand. Long-lease structures with multinational operators.',
      sectors: 'Industrial, Logistics, Cold Chain, Manufacturing',
      yield: '7.5 – 9.5%',
      href: '/united-arab-emirates/dubai/jebel-ali',
    },
    {
      id: 'dubai-south',
      name: 'Dubai South',
      tagline: 'The Next Frontier',
      driver: 'A 145-square-kilometre master-planned city anchored by Al Maktoum International Airport, designed for aviation, logistics and residential expansion.',
      thesis: 'Ground-floor positioning in Dubai\'s next growth corridor. Industrial and logistics land with direct airport access. Residential development land for build-to-rent mandates.',
      sectors: 'Aviation-Linked, Logistics, Residential Land',
      yield: '8.0 – 10.0%',
      href: '/united-arab-emirates/dubai/dubai-south',
    },
    {
      id: 'palm-jebel-ali',
      name: 'Palm Jebel Ali',
      tagline: 'The Coastal Estate',
      driver: 'The revival of Dubai\'s most ambitious coastal development. Frond villas, beachfront mansions and ultra-luxury hospitality positioned as successor to Palm Jumeirah.',
      thesis: 'Ultra-prime residential for principal occupation or trophy rental. Hospitality with scarcity value. Generational land banking on the Arabian Gulf coastline.',
      sectors: 'Ultra-Luxury Residential, Hospitality, Marina',
      yield: '5.0 – 6.5%',
      href: '/united-arab-emirates/dubai/palm-jebel-ali',
    },
  ]

  return (
    <section ref={ref} id="districts" className="py-32 lg:py-40 bg-forest-950">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="max-w-3xl mb-20"
        >
          <motion.div variants={fadeUp}>
            <GoldEyebrow label="Districts" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl lg:text-5xl text-stone-50 leading-[1.15] mb-6"
          >
            Six Districts. Distinct Risk Profiles. One Mandate.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-stone-400 text-base leading-[1.8] font-body"
          >
            Dubai is not a single market. Each district operates under a
            different planning framework, tenant base, yield curve and capital
            requirement. Understanding those distinctions — before capital is
            committed — is the foundation of institutional allocation.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-forest-900/50">
          {districts.map((district, i) => (
            <DistrictCard key={district.id} district={district} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DistrictCard({
  district,
  index,
  isInView,
}: {
  district: any
  index: number
  isInView: boolean
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
      className="bg-forest-950 p-8 lg:p-10 group hover:bg-forest-900/80 transition-colors duration-500 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-display text-xl text-stone-50">{district.name}</h3>
        <div className="w-8 h-8 flex items-center justify-center border border-stone-700 group-hover:border-gold-500/50 transition-colors">
          {expanded ? (
            <Minus size={14} className="text-stone-500" />
          ) : (
            <Plus size={14} className="text-stone-500" />
          )}
        </div>
      </div>

      <p className="text-gold-500/70 text-[10px] tracking-[0.25em] uppercase mb-6">
        {district.tagline}
      </p>

      <div className="space-y-5">
        <div>
          <span className="text-gold-500/70 text-[9px] tracking-[0.3em] uppercase block mb-2">
            Economic Driver
          </span>
          <p className="text-stone-400 text-sm leading-relaxed font-body">
            {district.driver}
          </p>
        </div>

        <div>
          <span className="text-gold-500/70 text-[9px] tracking-[0.3em] uppercase block mb-2">
            Investment Thesis
          </span>
          <p className="text-stone-400 text-sm leading-relaxed font-body">
            {district.thesis}
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
                <span className="text-gold-500/70 text-[9px] tracking-[0.3em] uppercase block mb-2">
                  Dominant Sectors
                </span>
                <p className="text-stone-400 text-sm leading-relaxed font-body">
                  {district.sectors}
                </p>
              </div>
              <div className="mt-4">
                <span className="text-gold-500/70 text-[9px] tracking-[0.3em] uppercase block mb-2">
                  Target Yield Range
                </span>
                <p className="text-stone-200 text-sm font-mono">{district.yield}</p>
              </div>
              <div className="mt-6 pt-6 border-t border-stone-800">
                <a
                  href={district.href}
                  className="inline-flex items-center gap-2 text-gold-400 text-[10px] tracking-[0.2em] uppercase hover:text-gold-300 transition-colors"
                >
                  View Market Intelligence
                  <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!expanded && (
          <div className="pt-4 border-t border-stone-800/50 flex items-center justify-between">
            <span className="text-stone-600 text-[10px] tracking-[0.15em] uppercase">
              Click to expand
            </span>
            <span className="text-stone-600 text-[10px] font-mono">{district.yield}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: SIGNATURE PLATE — full-bleed image with archival caption
   The page's single unique visual moment: treating a Dubai asset like
   a museum acquisition rather than a listing.
   ═══════════════════════════════════════════════════════════════ */

function SignaturePlate() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-stone-950 py-28 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="border border-gold-500/25"
        >
          <div className="relative aspect-[21/9] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale-[15%]"
              style={{ backgroundImage: "url('/images/dubai-downtown-dusk.webp')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/20" />
            <div className="absolute inset-6 ring-1 ring-inset ring-gold-500/15" />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <span className="text-gold-400 text-[10px] tracking-[0.3em] uppercase block mb-2">
                  Fig. 02 — Sheikh Zayed Road Corridor, at Dusk
                </span>
                <p className="font-accent italic text-stone-100 text-xl lg:text-2xl max-w-xl">
                  Held, not traded. The distinction a family office understands
                  from the first meeting.
                </p>
              </div>
              <span className="hidden lg:block text-stone-500 text-[10px] tracking-[0.2em] font-mono shrink-0">
                25.2048° N, 55.2708° E
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: ASSET CLASSES
   ═══════════════════════════════════════════════════════════════ */

function AssetClasses() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const assets = [
    { label: 'Prime Office', icon: Building2, desc: 'Grade A & A+ stock in DIFC, Downtown and Business Bay' },
    { label: 'Industrial & Logistics', icon: Warehouse, desc: 'Jebel Ali, Dubai South and Al Quoz corridors' },
    { label: 'Luxury Retail', icon: Store, desc: 'Mall anchors, high street and district retail' },
    { label: 'Hospitality & Resorts', icon: Hotel, desc: 'Five-star, boutique and branded residences' },
    { label: 'Branded Residences', icon: Home, desc: 'Armani, Bulgari, Dorchester and independent luxury' },
    { label: 'Data Centres', icon: Landmark, desc: 'Hyperscale and enterprise colocation facilities' },
  ]

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-stone-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeUp}>
            <GoldEyebrow label="Asset Classes" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl lg:text-5xl text-forest-900 leading-[1.15]"
          >
            Institutional-Grade Sectors in Dubai
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {assets.map((asset, i) => {
            const Icon = asset.icon
            return (
              <motion.div
                key={asset.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="bg-stone-50 p-8 lg:p-10 group hover:bg-forest-900 transition-colors duration-500"
              >
                <Icon
                  size={18}
                  strokeWidth={1.5}
                  className="text-gold-500/60 group-hover:text-gold-400 mb-4 transition-colors"
                />
                <h3 className="text-stone-800 group-hover:text-stone-50 text-lg font-display mb-2 transition-colors duration-300">
                  {asset.label}
                </h3>
                <p className="text-stone-500 group-hover:text-stone-400 text-sm leading-relaxed font-body transition-colors duration-300">
                  {asset.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: INVESTMENT THESIS
   ═══════════════════════════════════════════════════════════════ */

function InvestmentThesis() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const theses = [
    {
      title: 'Gateway Status',
      desc: 'Dubai is the undisputed financial and logistics gateway between Europe, Africa and Asia. For capital seeking a single hub with access to three continents, no substitute jurisdiction exists.',
    },
    {
      title: 'Regulatory Maturation',
      desc: 'RERA escrow law, DIFC common-law courts and DLD digital title transfer have moved Dubai from a speculative market into an institutional-grade jurisdiction in under two decades.',
    },
    {
      title: 'Yield Premium',
      desc: 'Prime Dubai office yields of 6.0–7.0% compare favourably to London (4.5%) and Singapore (4.0%), offering income-focused mandates a meaningful spread with materially lower volatility.',
    },
    {
      title: 'Currency & Tax Stability',
      desc: 'The AED-USD peg, zero capital gains tax, and DIFC treaty network access provide structuring certainty few emerging jurisdictions can replicate at institutional scale.',
    },
    {
      title: 'Generational Transfer',
      desc: 'DIFC foundations, ADGM trusts and RAK ICC structures allow dynastic families to hold Dubai real estate across generations with governance, privacy and, where required, Sharia compliance.',
    },
    {
      title: 'Infrastructure Alpha',
      desc: 'Al Maktoum Airport expansion, Etihad Rail and Dubai Metro extensions are reshaping locational value. Capital that allocates ahead of completion captures the development premium.',
    },
  ]

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-forest-950">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeUp}>
            <GoldEyebrow label="Investment Thesis" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl lg:text-5xl text-stone-50 leading-[1.15] max-w-3xl"
          >
            Why Patient Capital Allocates to Dubai Now
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-forest-900/50">
          {theses.map((thesis, i) => (
            <motion.div
              key={thesis.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="bg-forest-950 p-8 lg:p-10 group hover:bg-forest-900/80 transition-colors duration-500"
            >
              <div className="flex items-start gap-6">
                <span className="text-gold-500/40 text-xs font-mono mt-1 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-lg text-stone-50 mb-3 group-hover:text-gold-400 transition-colors duration-300">
                    {thesis.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-[1.8] font-body">
                    {thesis.desc}
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
   SECTION: PRIVATE CLIENT VOICES (NEW) — unattributed principal notes,
   as is customary for private-mandate advisory work.
   ═══════════════════════════════════════════════════════════════ */

function PrivateClientVoices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const notes = [
    {
      quote: 'What we needed was not a deal. We needed someone who understood our structure before recommending an asset to sit inside it.',
      role: 'Principal, Multi-Generational Family Office — London & Dubai',
    },
    {
      quote: 'Our counsel reviewed the mandate before we did. That order of operations told us everything about how this firm works.',
      role: 'Managing Partner, Private Equity — Gulf Region',
    },
    {
      quote: 'Discretion was the requirement, not the courtesy. It was treated that way from the first call.',
      role: 'Trustee, DIFC Foundation',
    },
  ]

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-stone-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-16 max-w-2xl"
        >
          <motion.div variants={fadeUp}>
            <GoldEyebrow label="Private Client Voices" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl lg:text-5xl text-forest-900 leading-[1.15]"
          >
            Notes From Principals We Do Not Name.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-stone-500 text-sm leading-relaxed mt-6 font-body">
            Client identities are withheld as a matter of standing policy, in
            keeping with the confidentiality our principals require.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-stone-200">
          {notes.map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-stone-100 p-8 lg:p-10 flex flex-col justify-between"
            >
              <p className="font-accent italic text-forest-900 text-lg leading-relaxed mb-8">
                "{n.quote}"
              </p>
              <span className="text-stone-500 text-[10px] tracking-[0.15em] uppercase border-t border-gold-500/20 pt-4">
                {n.role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: MARKET DATA
   ═══════════════════════════════════════════════════════════════ */

function MarketData() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const indicators = [
    { label: 'Prime Office Yield', value: '6.0 – 7.0%', context: 'DIFC & Business Bay' },
    { label: 'Industrial Yield', value: '7.5 – 9.5%', context: 'Jebel Ali & Dubai South' },
    { label: 'Luxury Retail Yield', value: '6.5 – 8.0%', context: 'Downtown & MBR City' },
    { label: 'Hospitality Yield', value: '7.0 – 9.0%', context: 'Palm & Beachfront' },
    { label: 'Prime Residential', value: 'AED 2,800+', context: 'Per sq ft — Palm & Downtown' },
    { label: 'Pipeline 2026–2028', value: '12M+ sq ft', context: 'Office & industrial supply' },
    { label: 'Population Growth', value: '+2.8% p.a.', context: 'Resident & floating population' },
    { label: 'GDP Growth', value: '+4.2% p.a.', context: 'IMF forecast — diversified' },
    { label: 'Investment Volume', value: 'AED 180B+', context: '2025 total transaction value' },
    { label: 'FDI Inflows', value: 'USD 30B+', context: 'Annual foreign direct investment' },
  ]

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-stone-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeUp}>
            <GoldEyebrow label="Market Intelligence" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl lg:text-5xl text-forest-900 leading-[1.15] mb-6"
          >
            Current Market Indicators — Q3 2026
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-stone-500 text-base leading-[1.8] max-w-2xl font-body"
          >
            Data derived from primary transaction intelligence, DLD public
            records and direct relationships with developers, landlords and
            counterparty counsel across the emirate.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-stone-200">
          {indicators.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              className="bg-stone-50 p-6 lg:p-8 group hover:bg-stone-100 transition-colors duration-300 border-t-2 border-transparent hover:border-gold-500/60"
            >
              <span className="text-stone-400 text-[9px] tracking-[0.25em] uppercase block mb-3">
                {ind.label}
              </span>
              <div className="font-mono text-xl lg:text-2xl text-forest-900 mb-2">
                {ind.value}
              </div>
              <span className="text-stone-500 text-[10px] leading-relaxed block">
                {ind.context}
              </span>
            </motion.div>
          ))}
        </div>
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
    <section ref={ref} id="contact" className="py-32 lg:py-40 bg-forest-950">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp}>
            <GoldEyebrow label="Private Office — DIFC" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl lg:text-5xl xl:text-6xl text-stone-50 leading-[1.15] mb-8"
          >
            The Conversation Precedes the Transaction.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-stone-400 text-base lg:text-lg leading-[1.8] mb-6 max-w-2xl font-body"
          >
            Dubai real estate decisions are rarely defined by a single asset.
            They begin with understanding the emirate's planning trajectory,
            your capital architecture, and the counterparty landscape. Whether
            evaluating a DIFC office, a Jebel Ali logistics facility, or a
            generational residential holding, early dialogue with counsel
            present improves later execution.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-stone-500 text-sm leading-[1.8] mb-12 max-w-2xl font-body"
          >
            We meet principals by introduction and appointment only. Initial
            consultations are conducted in person at our DIFC Gate Village
            office, via secure video conference, or in a private majlis
            setting at your residence upon request.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
            <a
              href="/united-arab-emirates/dubai/contact"
              className="group inline-flex items-center gap-3 bg-gold-600 text-stone-50 px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-gold-500 transition-colors duration-300"
            >
              Request a Private Briefing
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:info@murivest.co.ke"
              className="group inline-flex items-center gap-2 text-stone-400 hover:text-gold-400 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300"
            >
              <Mail size={13} strokeWidth={1.5} />
              info@murivest.co.ke
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: FOOTER
   ═══════════════════════════════════════════════════════════════ */

function Footer() {
  return (
    <footer className="bg-stone-950 py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gold-600 rounded-sm flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-5 h-5 text-stone-50" fill="currentColor">
                  <rect x="4" y="4" width="10" height="10" rx="1" />
                  <rect x="18" y="4" width="10" height="10" rx="1" />
                  <rect x="4" y="18" width="10" height="10" rx="1" />
                  <rect x="18" y="18" width="10" height="10" rx="1" />
                </svg>
              </div>
              <div>
                <span className="font-display text-lg tracking-[0.2em] uppercase text-stone-50">
                  Murivest
                </span>
                <span className="block text-[9px] tracking-[0.35em] uppercase text-gold-600">
                  Dubai Private Office
                </span>
              </div>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed font-body max-w-xs">
              Advising dynastic families, sovereign-adjacent capital, private
              equity principals and their counsel on commercial real estate
              strategy across the Emirate of Dubai.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-stone-400 text-[10px] tracking-[0.3em] uppercase mb-6">
              Districts
            </h4>
            <ul className="space-y-3">
              {['Business Bay', 'DIFC', 'Downtown Dubai', 'Jebel Ali', 'Dubai South', 'Palm Jebel Ali'].map((item) => (
                <li key={item}>
                  <a
                    href={`/united-arab-emirates/dubai/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-stone-600 text-sm hover:text-gold-500 transition-colors font-body"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-stone-400 text-[10px] tracking-[0.3em] uppercase mb-6">
              Advisory
            </h4>
            <ul className="space-y-3">
              {['Investment Advisory', 'Capital Markets', 'Portfolio Strategy', 'Research', 'Family Office Services'].map((item) => (
                <li key={item}>
                  <a
                    href={`/united-arab-emirates/dubai/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-stone-600 text-sm hover:text-gold-500 transition-colors font-body"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-stone-400 text-[10px] tracking-[0.3em] uppercase mb-6">
              Intelligence
            </h4>
            <ul className="space-y-3">
              {['Market Reports', 'Sector Analysis', 'City Intelligence', 'Video Briefings'].map((item) => (
                <li key={item}>
                  <a
                    href={`/united-arab-emirates/dubai/research/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-stone-600 text-sm hover:text-gold-500 transition-colors font-body"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-stone-400 text-[10px] tracking-[0.3em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@murivest.co.ke" className="text-stone-600 text-sm hover:text-gold-500 transition-colors flex items-center gap-2 font-body">
                  <Mail size={14} />
                  info@murivest.co.ke
                </a>
              </li>
              <li>
                <a href="/united-arab-emirates/dubai/contact" className="text-stone-600 text-sm hover:text-gold-500 transition-colors font-body">
                  DIFC Gate Village
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-700 text-[10px] tracking-[0.15em] uppercase">
            &copy; {new Date().getFullYear()} Murivest. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-stone-700 text-[10px] tracking-[0.15em] uppercase hover:text-stone-500 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-stone-700 text-[10px] tracking-[0.15em] uppercase hover:text-stone-500 transition-colors">
              Terms of Use
            </a>
            <span className="text-stone-800 text-[10px] tracking-[0.15em] uppercase">
              RERA · DLD · DIFC
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

export default function DubaiPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=JetBrains+Mono:wght@300;400;500&display=swap');

        :root {
          --font-display: 'Playfair Display', Georgia, serif;
          --font-body: 'Inter', system-ui, sans-serif;
          --font-accent: 'Cormorant Garamond', Georgia, serif;
          --font-mono: 'JetBrains Mono', monospace;
        }

        .font-display { font-family: var(--font-display); }
        .font-body { font-family: var(--font-body); }
        .font-accent { font-family: var(--font-accent); }
        .font-mono { font-family: var(--font-mono); }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f5f5f4; }
        ::-webkit-scrollbar-thumb { background: #a8a29e; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #78716c; }

        html { scroll-behavior: smooth; }

        ::selection {
          background: rgba(58, 125, 79, 0.2);
          color: #0d2e1c;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Hero />
      <QuickLinksBar />
      <EditorialIntro />
      <Provenance />
      <Districts />
      <SignaturePlate />
      <AssetClasses />
      <InvestmentThesis />
      <PrivateClientVoices />
      <MarketData />
      <CTA />
      <Footer />
    </main>
  )
}