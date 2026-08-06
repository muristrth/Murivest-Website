'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const CAPITAL_MARKETS_STATS = [
  { value: 'KES 4.2B+', label: 'Assets Under Advisory' },
  { value: '12', label: 'Active Mandates' },
  { value: '8', label: 'Capital Origin Markets' },
  { value: '6+', label: 'Asset Classes Covered' },
];

const STRATEGIES = [
  {
    code: '01',
    title: 'Core Income',
    subtitle: 'Stabilised Assets',
    desc: 'Long-term leased, fully tenanted Grade A commercial properties with predictable NOI and institutional ownership structures.',
    yield: '7–9%',
    risk: 'Low',
  },
  {
    code: '02',
    title: 'Core-Plus',
    subtitle: 'Yield Optimisation',
    desc: 'Near-stabilised assets with repositioning upside. Lease re-gearing or asset management drives enhanced distribution.',
    yield: '9–11%',
    risk: 'Moderate',
  },
  {
    code: '03',
    title: 'Value-Add',
    subtitle: 'Repositioning Play',
    desc: 'Underperforming assets with structural upside through refurbishment, re-tenanting, or development capital injection.',
    yield: '12–16%',
    risk: 'Moderate-High',
  },
  {
    code: '04',
    title: 'Off-Market',
    subtitle: 'Private Deal Flow',
    desc: 'Exclusively sourced transactions not available on public markets. Institutional mandates only. NDA required.',
    yield: 'Negotiated',
    risk: 'Varies',
  },
];

const COUNTRIES = [
  {
    code: 'KE',
    name: 'Kenya',
    city: 'Nairobi · Mombasa',
    focus: 'Primary Deployment Market',
    role: 'Origin',
    tag: 'CORE MARKET',
    href: '/kenya-commercial-real-estate',
  },
  {
    code: 'SG',
    name: 'Singapore',
    city: 'Central Business District',
    focus: 'REIT & Logistics Capital',
    role: 'Capital Source',
    tag: 'CAPITAL ORIGIN',
    href: '/singapore-properties-for-sale',
  },
  {
    code: 'UAE',
    name: 'United Arab Emirates',
    city: 'Dubai · Abu Dhabi',
    focus: 'Sovereign & Family Office Capital',
    role: 'Capital Source',
    tag: 'CAPITAL ORIGIN',
    href: '/uae-commercial-real-estate',
  },
  {
    code: 'UK',
    name: 'United Kingdom',
    city: 'London',
    focus: 'Pension & Institutional Capital',
    role: 'Capital Source',
    tag: 'CAPITAL ORIGIN',
    href: '/uk-commercial-property',
  },
  {
    code: 'US',
    name: 'United States',
    city: 'New York · Texas · Florida',
    focus: 'Private Equity & Fund Capital',
    role: 'Capital Source',
    tag: 'CAPITAL ORIGIN',
    href: '/us-commercial-real-estate',
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
    city: 'Riyadh · Jeddah',
    focus: 'Vision 2030 Sovereign Capital',
    role: 'Capital Source',
    tag: 'CAPITAL ORIGIN',
    href: '/saudi-arabia-commercial-property',
  },
  {
    code: 'JP',
    name: 'Japan',
    city: 'Tokyo · Osaka',
    focus: 'Core Income Long-term Investors',
    role: 'Capital Source',
    tag: 'CAPITAL ORIGIN',
    href: '/japan-commercial-real-estate',
  },
  {
    code: 'CA',
    name: 'Canada',
    city: 'Toronto · Vancouver',
    focus: 'Pension & Infrastructure Capital',
    role: 'Capital Source',
    tag: 'CAPITAL ORIGIN',
    href: '/canada-commercial-real-estate',
  },
];

const ASSET_CLASSES = [
  {
    name: 'Grade A Office Towers',
    code: 'OFC',
    desc: 'CBD-anchored institutional office assets. Nairobi CBD and Westlands primary focus.',
    metrics: ['WALE 4–8 yrs', 'Occupancy 85%+', 'NNN Leases'],
    href: '/office-buildings-for-sale',
    flag: 'PRIMARY',
  },
  {
    name: 'Industrial & Logistics',
    code: 'IND',
    desc: 'East Africa logistics corridor assets serving SGR and Northern Corridor trade flow.',
    metrics: ['WALE 5–10 yrs', 'Single-tenant', 'AFCFTA exposure'],
    href: '/industrial-properties-for-sale',
    flag: 'HIGH DEMAND',
  },
  {
    name: 'Mixed-Use Developments',
    code: 'MXD',
    desc: 'Retail-anchored mixed-use schemes with office and residential stacking above ground floor.',
    metrics: ['Multi-income', 'Retail + Office', 'Development upside'],
    href: '/mixed-use-developments',
    flag: null,
  },
  {
    name: 'Hospitality Assets',
    code: 'HSP',
    desc: 'Branded hotels and serviced apartment assets for yield-focused investors.',
    metrics: ['RevPAR yield', 'Brand lease back', 'Tourism driven'],
    href: '/hospitality-investments',
    flag: null,
  },
  {
    name: 'Warehousing & Cold Chain',
    code: 'WHS',
    desc: 'Last-mile logistics and food-grade cold chain facilities across Nairobi and Mombasa.',
    metrics: ['Net lease', 'E-commerce driven', 'Mombasa port access'],
    href: '/logistics-warehouses-for-sale',
    flag: 'EMERGING',
  },
  {
    name: 'Data Centre Infrastructure',
    code: 'DCI',
    desc: 'Tier II–III data infrastructure serving the growing East Africa digital economy.',
    metrics: ['PPA lease structure', 'Tech tenant profile', 'USD income'],
    href: '/data-centers-for-sale',
    flag: 'EMERGING',
  },
];

const INVESTOR_SEGMENTS = [
  { type: 'REITs', flag: 'SG · AU · ZA', focus: 'Core income yield, SEC-listed structure', href: '/for-reits' },
  { type: 'Sovereign Wealth Funds', flag: 'UAE · SA · SG', focus: 'Diversification into SSA, infrastructure', href: '/for-sovereign-wealth-funds' },
  { type: 'Pension Funds', flag: 'UK · CA · KE', focus: 'Long duration, ESG-compliant assets', href: '/for-pension-funds' },
  { type: 'Family Offices', flag: 'UAE · UK · US', focus: 'Off-market access, concentrated positions', href: '/for-family-offices' },
  { type: 'Private Equity RE', flag: 'US · EU', focus: 'Value-add, 5–7 year hold, exit via REIT IPO', href: '/for-private-equity-real-estate' },
];

// ─── ANIMATION HELPER ─────────────────────────────────────────────────────────

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function InvestmentPipelinePage() {
  return (
    <div className="min-h-screen bg-[#0B1F14] text-[#F0EDE6]">

      {/* ── MASTHEAD ── */}
      <section className="border-b border-[#B8956B]/20">
        <div className="px-6 lg:px-20 pt-24 pb-16 max-w-screen-2xl mx-auto">

          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-12">
            <span className="text-[9px] tracking-[0.5em] uppercase text-[#B8956B] font-mono">
              Murivest Capital Markets
            </span>
            <span className="w-12 h-px bg-[#B8956B]/40" />
            <span className="text-[9px] tracking-[0.5em] uppercase text-[#8B8680] font-mono">
              Investment Pipeline
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[52px] lg:text-[72px] font-serif leading-[1.0] tracking-tight"
              >
                Global
                <br />
                <span className="text-[#B8956B] italic">Capital</span>
                <br />
                Architecture
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="mt-8 text-[#A8A09A] leading-relaxed text-[15px] max-w-lg"
              >
                Murivest structures institutional-grade commercial real estate acquisitions
                across East Africa — connecting sovereign capital, REIT mandate flows, and
                family office allocations to yield-driven off-market opportunities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="mt-10 flex gap-4"
              >
                <Link
                  href="/deal-room"
                  className="px-7 py-3.5 bg-[#B8956B] text-[#0B1F14] text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-[#CDA97C] transition-colors"
                >
                  Enter Deal Room
                </Link>
                <Link
                  href="/contact"
                  className="px-7 py-3.5 border border-[#B8956B]/50 text-[11px] uppercase tracking-[0.18em] hover:border-[#B8956B] transition-colors"
                >
                  Request Access
                </Link>
              </motion.div>
            </div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="grid grid-cols-2 gap-px bg-[#B8956B]/15"
            >
              {CAPITAL_MARKETS_STATS.map((s) => (
                <div key={s.label} className="bg-[#0B1F14] p-8">
                  <p className="text-[36px] font-serif text-[#B8956B] leading-none">{s.value}</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#8B8680] mt-3">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INVESTMENT STRATEGIES ── */}
      <section className="border-b border-[#B8956B]/20">
        <div className="px-6 lg:px-20 py-20 max-w-screen-2xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[9px] tracking-[0.5em] uppercase text-[#B8956B] font-mono">01</span>
              <span className="w-8 h-px bg-[#B8956B]/40" />
              <span className="text-[9px] tracking-[0.5em] uppercase text-[#8B8680] font-mono">
                Investment Strategies
              </span>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#B8956B]/15">
            {STRATEGIES.map((s, i) => (
              <FadeIn key={s.code} delay={i * 0.08}>
                <div className="bg-[#0B1F14] p-8 h-full flex flex-col group hover:bg-[#0F2818] transition-colors">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[11px] text-[#B8956B]/50 font-mono">{s.code}</span>
                    <span className={`text-[9px] uppercase tracking-widest px-2 py-1 border ${
                      s.risk === 'Low' ? 'border-emerald-700/40 text-emerald-500/70' :
                      s.risk === 'Moderate' ? 'border-amber-700/40 text-amber-500/70' :
                      'border-red-800/40 text-red-500/70'
                    }`}>
                      {s.risk}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif leading-tight">{s.title}</h3>
                  <p className="text-[11px] uppercase tracking-widest text-[#B8956B] mt-1">{s.subtitle}</p>

                  <p className="text-[13px] text-[#8B8680] leading-relaxed mt-5 flex-1">{s.desc}</p>

                  <div className="mt-8 pt-6 border-t border-[#B8956B]/15 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#5A5450] mb-1">Target Yield</p>
                      <p className="text-[#B8956B] font-serif text-lg">{s.yield}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPITAL ORIGIN MARKETS ── */}
      <section className="border-b border-[#B8956B]/20">
        <div className="px-6 lg:px-20 py-20 max-w-screen-2xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[9px] tracking-[0.5em] uppercase text-[#B8956B] font-mono">02</span>
              <span className="w-8 h-px bg-[#B8956B]/40" />
              <span className="text-[9px] tracking-[0.5em] uppercase text-[#8B8680] font-mono">
                Capital Origin Markets
              </span>
            </div>
            <p className="text-[#5A5450] text-[12px] max-w-xl mb-12">
              Murivest interfaces with eight capital origin jurisdictions, routing
              institutional allocation mandates into East African commercial property.
            </p>
          </FadeIn>

          {/* Kenya — featured primary market */}
          <FadeIn>
            <Link href="/kenya-commercial-real-estate" className="block mb-px group">
              <div className="bg-[#112B1A] border border-[#B8956B]/30 hover:border-[#B8956B]/70 transition-colors p-10 grid lg:grid-cols-3 gap-8 items-center">
                <div className="flex items-start gap-6">
                  <span className="text-[48px] font-serif text-[#B8956B]/30 leading-none font-light">KE</span>
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.4em] text-[#B8956B] font-mono">Core Market · Primary Deployment</span>
                    <h3 className="text-2xl font-serif mt-2">Kenya</h3>
                    <p className="text-[12px] text-[#8B8680] mt-1">Nairobi · Mombasa · Kisumu</p>
                  </div>
                </div>
                <p className="text-[13px] text-[#A8A09A] leading-relaxed lg:col-span-1">
                  East Africa's most liquid commercial property market. Grade A office stock, growing logistics
                  corridor, and institutional ownership base positioned for REIT aggregation.
                </p>
                <div className="flex justify-end">
                  <span className="text-[11px] uppercase tracking-widest text-[#B8956B] group-hover:gap-4 transition-all">
                    View Kenya Portfolio →
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>

          {/* Other capital markets */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#B8956B]/10 mt-px">
            {COUNTRIES.filter(c => c.code !== 'KE').map((c, i) => (
              <FadeIn key={c.code} delay={i * 0.06}>
                <Link href={c.href} className="block h-full group">
                  <div className="bg-[#0B1F14] hover:bg-[#0F2818] transition-colors p-7 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[32px] font-serif text-[#B8956B]/20 leading-none">{c.code}</span>
                      <span className="text-[8px] uppercase tracking-widest text-[#5A5450] font-mono border border-[#5A5450]/30 px-2 py-0.5">
                        {c.role}
                      </span>
                    </div>

                    <h3 className="text-base font-serif">{c.name}</h3>
                    <p className="text-[11px] text-[#5A5450] mt-1">{c.city}</p>

                    <p className="text-[12px] text-[#8B8680] mt-4 flex-1 leading-relaxed">{c.focus}</p>

                    <p className="text-[10px] uppercase tracking-widest text-[#B8956B]/50 mt-6 group-hover:text-[#B8956B] transition-colors">
                      View market →
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ASSET CLASS COVERAGE ── */}
      <section className="border-b border-[#B8956B]/20">
        <div className="px-6 lg:px-20 py-20 max-w-screen-2xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[9px] tracking-[0.5em] uppercase text-[#B8956B] font-mono">03</span>
              <span className="w-8 h-px bg-[#B8956B]/40" />
              <span className="text-[9px] tracking-[0.5em] uppercase text-[#8B8680] font-mono">
                Asset Class Coverage
              </span>
            </div>
            <p className="text-[#5A5450] text-[12px] max-w-xl mb-12">
              Six institutional asset classes, each structured for yield-focused acquisition mandates.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#B8956B]/10">
            {ASSET_CLASSES.map((a, i) => (
              <FadeIn key={a.code} delay={i * 0.07}>
                <Link href={a.href} className="block h-full group">
                  <div className="bg-[#0B1F14] hover:bg-[#0F2818] transition-colors p-8 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-8">
                      <span className="text-[11px] font-mono text-[#B8956B]/40">{a.code}</span>
                      {a.flag && (
                        <span className="text-[8px] uppercase tracking-widest border border-[#B8956B]/30 text-[#B8956B]/60 px-2 py-0.5">
                          {a.flag}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-serif leading-tight">{a.name}</h3>
                    <p className="text-[13px] text-[#8B8680] leading-relaxed mt-4 flex-1">{a.desc}</p>

                    <div className="mt-6 pt-6 border-t border-[#B8956B]/10 flex flex-wrap gap-2">
                      {a.metrics.map((m) => (
                        <span key={m} className="text-[10px] text-[#5A5450] border border-[#5A5450]/30 px-2 py-1">
                          {m}
                        </span>
                      ))}
                    </div>

                    <p className="text-[10px] uppercase tracking-widest text-[#B8956B]/40 mt-5 group-hover:text-[#B8956B] transition-colors">
                      View deal flow →
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTOR SEGMENTS ── */}
      <section className="border-b border-[#B8956B]/20">
        <div className="px-6 lg:px-20 py-20 max-w-screen-2xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[9px] tracking-[0.5em] uppercase text-[#B8956B] font-mono">04</span>
              <span className="w-8 h-px bg-[#B8956B]/40" />
              <span className="text-[9px] tracking-[0.5em] uppercase text-[#8B8680] font-mono">
                Capital Segments Served
              </span>
            </div>
            <p className="text-[#5A5450] text-[12px] max-w-xl mb-12">
              Murivest's deal origination and structuring is positioned exclusively for
              institutional and UHNW capital allocators.
            </p>
          </FadeIn>

          <div className="space-y-px">
            {INVESTOR_SEGMENTS.map((seg, i) => (
              <FadeIn key={seg.type} delay={i * 0.07}>
                <Link href={seg.href} className="block group">
                  <div className="bg-[#0B1F14] hover:bg-[#0F2818] transition-colors px-8 py-7 grid lg:grid-cols-3 gap-4 items-center border-b border-[#B8956B]/10">
                    <h3 className="font-serif text-lg">{seg.type}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] uppercase tracking-widest text-[#B8956B] font-mono">{seg.flag}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[12px] text-[#8B8680]">{seg.focus}</p>
                      <span className="text-[10px] uppercase tracking-widest text-[#B8956B]/40 group-hover:text-[#B8956B] transition-colors ml-6">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEAL FUNNEL CTA ── */}
      <section>
        <div className="px-6 lg:px-20 py-20 max-w-screen-2xl mx-auto">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-px bg-[#B8956B]/20">
              <div className="bg-[#112B1A] p-12">
                <p className="text-[9px] tracking-[0.5em] uppercase text-[#B8956B] font-mono mb-6">
                  Deal Room Access
                </p>
                <h2 className="text-3xl font-serif leading-tight">
                  Active Institutional
                  <br />
                  Mandates
                </h2>
                <p className="text-[13px] text-[#8B8680] mt-5 leading-relaxed max-w-sm">
                  Off-market commercial real estate transactions. Access requires
                  NDA execution and capital qualification.
                </p>
                <Link
                  href="/deal-room"
                  className="mt-8 inline-block px-7 py-3.5 bg-[#B8956B] text-[#0B1F14] text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-[#CDA97C] transition-colors"
                >
                  Enter Deal Room
                </Link>
              </div>

              <div className="bg-[#0B1F14] p-12">
                <p className="text-[9px] tracking-[0.5em] uppercase text-[#B8956B] font-mono mb-6">
                  Capital Introductions
                </p>
                <h2 className="text-3xl font-serif leading-tight">
                  Mandate &amp;
                  <br />
                  Advisory Enquiries
                </h2>
                <p className="text-[13px] text-[#8B8680] mt-5 leading-relaxed max-w-sm">
                  Investment mandates, capital introductions, and cross-border
                  advisory mandates by appointment.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-block px-7 py-3.5 border border-[#B8956B]/50 text-[11px] uppercase tracking-[0.18em] hover:border-[#B8956B] transition-colors"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-[11px] text-[#3D3A37] mt-8 text-center">
              Murivest Realty Group Ltd · Institutional mandate only · All transactions subject to NDA, KYC/AML verification, and proof of capital
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}