'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const ACTIVE_DEALS = [
  {
    id: 'NBO-001',
    title: 'Absa Towers',
    location: 'Nairobi CBD, Kenya',
    type: 'Grade A Office',
    strategy: 'Core Income',
    yield: '9.2%',
    capRate: '8.8%',
    askingPrice: 'KES 3.2B',
    gla: '18,400 sqm',
    occupancy: '91%',
    wale: '5.3 yrs',
    tenantProfile: 'Banking · Financial Services',
    status: 'MANDATED SALE',
    statusColor: 'amber',
    access: 'NDA Required',
    featured: true,
  },
  {
    id: 'NBO-002',
    title: 'Reliable Towers',
    location: 'Westlands, Nairobi',
    type: 'Grade A Office',
    strategy: 'Core-Plus',
    yield: '10.1%',
    capRate: '9.6%',
    askingPrice: 'KES 1.8B',
    gla: '11,200 sqm',
    occupancy: '83%',
    wale: '4.1 yrs',
    tenantProfile: 'Corporates · Multinationals',
    status: 'INSTITUTIONAL OFFERING',
    statusColor: 'blue',
    access: 'NDA Required',
    featured: true,
  },
  {
    id: 'MSA-001',
    title: 'Mombasa Road Logistics Hub',
    location: 'Mombasa Road Corridor',
    type: 'Industrial / Logistics',
    strategy: 'Core Income',
    yield: '11.5%',
    capRate: '11.0%',
    askingPrice: 'KES 780M',
    gla: '8,600 sqm',
    occupancy: '100%',
    wale: '7.2 yrs',
    tenantProfile: 'FMCG · Cold Chain',
    status: 'OFF-MARKET',
    statusColor: 'green',
    access: 'NDA + Capital Verification',
    featured: false,
  },
  {
    id: 'NBO-003',
    title: 'Nairobi CBD Mixed-Use Portfolio',
    location: 'Nairobi CBD, Kenya',
    type: 'Mixed-Use',
    strategy: 'Value-Add',
    yield: '14.2%',
    capRate: '12.8%',
    askingPrice: 'KES 4.6B',
    gla: '26,000 sqm',
    occupancy: '72%',
    wale: '2.8 yrs',
    tenantProfile: 'Retail · Office · Hospitality',
    status: 'OFF-MARKET',
    statusColor: 'green',
    access: 'NDA + Capital Verification',
    featured: false,
  },
  {
    id: 'NBO-004',
    title: 'Westlands Commercial Tower',
    location: 'Westlands, Nairobi',
    type: 'Grade A Office',
    strategy: 'Core-Plus',
    yield: '9.8%',
    capRate: '9.3%',
    askingPrice: 'KES 2.1B',
    gla: '13,500 sqm',
    occupancy: '88%',
    wale: '5.0 yrs',
    tenantProfile: 'Multinationals · Tech',
    status: 'MANDATED SALE',
    statusColor: 'amber',
    access: 'NDA Required',
    featured: false,
  },
  {
    id: 'API-001',
    title: 'Derby, UK — Residential Portfolio',
    location: 'Derby, United Kingdom',
    type: 'Residential',
    strategy: 'Core Income',
    yield: '7.4%',
    capRate: '6.9%',
    askingPrice: '£4.2M',
    gla: '—',
    occupancy: '97%',
    wale: '3.0 yrs',
    tenantProfile: 'Residential · Social Housing',
    status: 'INSTITUTIONAL OFFERING',
    statusColor: 'blue',
    access: 'NDA Required',
    featured: false,
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Investor Verification',
    desc: 'Complete a brief digital qualification. We confirm investor type, capital quantum, and mandate alignment.',
  },
  {
    step: '02',
    title: 'NDA Execution',
    desc: 'A standard mutual NDA is digitally signed. Access to deal-level financials is granted upon completion.',
  },
  {
    step: '03',
    title: 'CIM Review',
    desc: 'Receive the Confidential Information Memorandum with full financial model, tenancy schedule, and exit analysis.',
  },
  {
    step: '04',
    title: 'Structured Access',
    desc: 'Management presentations, site visits, and Q&A facilitated. LOI drafted and submitted to principal.',
  },
];

const ASSET_FILTER_TYPES = ['All', 'Office', 'Industrial', 'Mixed-Use', 'Residential', 'Hospitality'];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StatusBadge({ status, color }: { status: string; color: string }) {
  const styles: Record<string, string> = {
    amber: 'border-amber-600/40 text-amber-500/80',
    blue: 'border-blue-600/40 text-blue-400/80',
    green: 'border-emerald-700/40 text-emerald-500/80',
  };
  return (
    <span className={`text-[8px] uppercase tracking-[0.3em] border px-2 py-1 font-mono ${styles[color] || styles.amber}`}>
      {status}
    </span>
  );
}

function DealCard({ deal, index }: { deal: typeof ACTIVE_DEALS[0]; index: number }) {
  return (
    <FadeIn delay={index * 0.06}>
      <div className={`h-full flex flex-col border transition-colors group ${
        deal.featured
          ? 'border-[#B8956B]/40 hover:border-[#B8956B]/80'
          : 'border-[#B8956B]/15 hover:border-[#B8956B]/50'
      } bg-[#0B1F14] hover:bg-[#0F2818]`}>

        {/* Card header */}
        <div className="px-7 pt-7 pb-5 border-b border-[#B8956B]/10">
          <div className="flex justify-between items-start gap-3 mb-4">
            <span className="text-[10px] font-mono text-[#5A5450]">{deal.id}</span>
            <StatusBadge status={deal.status} color={deal.statusColor} />
          </div>
          <p className="text-[10px] uppercase tracking-widest text-[#8B8680] mb-2">{deal.type}</p>
          <h3 className="font-serif text-xl leading-tight">{deal.title}</h3>
          <p className="text-[12px] text-[#5A5450] mt-1">{deal.location}</p>
        </div>

        {/* Key metrics */}
        <div className="px-7 py-5 grid grid-cols-2 gap-4 border-b border-[#B8956B]/10">
          <div>
            <p className="text-[9px] uppercase tracking-widest text-[#5A5450] mb-1">Yield</p>
            <p className="text-[#B8956B] font-serif text-2xl">{deal.yield}</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-widest text-[#5A5450] mb-1">Cap Rate</p>
            <p className="text-[#B8956B] font-serif text-2xl">{deal.capRate}</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-widest text-[#5A5450] mb-1">Occupancy</p>
            <p className="text-sm text-[#F0EDE6]">{deal.occupancy}</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-widest text-[#5A5450] mb-1">WALE</p>
            <p className="text-sm text-[#F0EDE6]">{deal.wale}</p>
          </div>
        </div>

        {/* Secondary data */}
        <div className="px-7 py-5 flex-1">
          <div className="space-y-2.5">
            {[
              { label: 'Asking Price', value: deal.askingPrice },
              { label: 'GLA', value: deal.gla },
              { label: 'Strategy', value: deal.strategy },
              { label: 'Tenant Profile', value: deal.tenantProfile },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-start gap-4">
                <span className="text-[10px] text-[#5A5450] uppercase tracking-wide">{label}</span>
                <span className="text-[11px] text-[#A8A09A] text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="px-7 pb-7 pt-4 border-t border-[#B8956B]/10 flex justify-between items-center">
          <span className="text-[9px] text-[#5A5450]">{deal.access}</span>
          <Link
            href="/cim-request"
            className="text-[10px] uppercase tracking-widest text-[#B8956B]/50 group-hover:text-[#B8956B] transition-colors"
          >
            Request CIM →
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function DealRoomPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [accessExpanded, setAccessExpanded] = useState(false);

  const filteredDeals = ACTIVE_DEALS.filter((d) => {
    if (activeFilter === 'All') return true;
    return d.type.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#0B1F14] text-[#F0EDE6]">

      {/* ── MASTHEAD ── */}
      <section className="border-b border-[#B8956B]/20">
        <div className="px-6 lg:px-20 pt-24 pb-16 max-w-screen-2xl mx-auto">

          <div className="flex items-center gap-3 mb-12">
            <span className="text-[9px] tracking-[0.5em] uppercase text-[#B8956B] font-mono">
              Murivest Capital Markets
            </span>
            <span className="w-12 h-px bg-[#B8956B]/40" />
            <span className="text-[9px] tracking-[0.5em] uppercase text-[#8B8680] font-mono">
              Institutional Deal Room
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
                Off-Market
                <br />
                <span className="text-[#B8956B] italic">Deal Access</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="mt-8 text-[#A8A09A] leading-relaxed text-[15px] max-w-lg"
              >
                Curated institutional-grade commercial real estate transactions across East Africa
                and select international markets. All assets are subject to NDA, investor
                verification, and proof of capital.
              </motion.p>
            </div>

            {/* Access gate panel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="border border-[#B8956B]/30 p-8"
            >
              <p className="text-[9px] tracking-[0.5em] uppercase text-[#B8956B] font-mono mb-1">
                Access Control
              </p>
              <h2 className="font-serif text-xl mt-3">Restricted to Qualified Investors</h2>
              <p className="text-[12px] text-[#8B8680] mt-3 leading-relaxed">
                This deal room serves institutional investors, sovereign wealth funds, licensed
                REITs, pension funds, and UHNW private capital. Full financial disclosure is
                unlocked after NDA execution and capital verification.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/compliance"
                  className="px-6 py-3 bg-[#B8956B] text-[#0B1F14] text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-[#CDA97C] transition-colors text-center"
                >
                  Verify Investor Status
                </Link>
                <Link
                  href="/cim-request"
                  className="px-6 py-3 border border-[#B8956B]/50 text-[11px] uppercase tracking-[0.18em] hover:border-[#B8956B] transition-colors text-center"
                >
                  Request CIM Access
                </Link>
              </div>

              <button
                onClick={() => setAccessExpanded(!accessExpanded)}
                className="mt-4 text-[10px] uppercase tracking-widest text-[#5A5450] hover:text-[#8B8680] transition-colors"
              >
                {accessExpanded ? '– Collapse' : '+ Eligible Investor Types'}
              </button>

              {accessExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 space-y-1.5 overflow-hidden"
                >
                  {['REITs (listed or private)', 'Sovereign Wealth Funds', 'Pension Funds', 'Licensed Family Offices', 'Private Equity Real Estate Funds', 'UHNW Individuals (>$10M investable)'].map((t) => (
                    <div key={t} className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-[#B8956B]/50 flex-shrink-0" />
                      <span className="text-[11px] text-[#8B8680]">{t}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="border-b border-[#B8956B]/20">
        <div className="px-6 lg:px-20 py-16 max-w-screen-2xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[9px] tracking-[0.5em] uppercase text-[#B8956B] font-mono">Access Protocol</span>
              <span className="w-8 h-px bg-[#B8956B]/40" />
              <span className="text-[9px] tracking-[0.5em] uppercase text-[#8B8680] font-mono">Four-Step Clearance</span>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#B8956B]/10">
            {PROCESS_STEPS.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.08}>
                <div className="bg-[#0B1F14] p-8 h-full">
                  <p className="text-[32px] font-serif text-[#B8956B]/20 leading-none mb-6">{s.step}</p>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-[#F0EDE6]">{s.title}</h3>
                  <p className="text-[12px] text-[#8B8680] leading-relaxed mt-3">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACTIVE MANDATES ── */}
      <section>
        <div className="px-6 lg:px-20 py-20 max-w-screen-2xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[9px] tracking-[0.5em] uppercase text-[#B8956B] font-mono">Active Mandates</span>
                  <span className="w-8 h-px bg-[#B8956B]/40" />
                  <span className="text-[9px] tracking-[0.5em] uppercase text-[#8B8680] font-mono">
                    {ACTIVE_DEALS.length} Transactions
                  </span>
                </div>
                <p className="text-[#5A5450] text-[12px] max-w-lg">
                  Summary-level data only. Yield, cap rate, WALE, and tenancy schedule available
                  upon NDA execution and capital verification.
                </p>
              </div>

              {/* Filter tabs */}
              <div className="flex flex-wrap gap-2">
                {ASSET_FILTER_TYPES.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`text-[10px] uppercase tracking-widest px-4 py-2 border transition-colors ${
                      activeFilter === f
                        ? 'border-[#B8956B] text-[#B8956B]'
                        : 'border-[#5A5450]/30 text-[#5A5450] hover:border-[#8B8680] hover:text-[#8B8680]'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Featured deals (larger) */}
          <div className="grid lg:grid-cols-2 gap-px bg-[#B8956B]/10 mb-px">
            {filteredDeals.filter((d) => d.featured).map((deal, i) => (
              <DealCard key={deal.id} deal={deal} index={i} />
            ))}
          </div>

          {/* Standard deals (3 col) */}
          {filteredDeals.filter((d) => !d.featured).length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#B8956B]/10 mt-px">
              {filteredDeals.filter((d) => !d.featured).map((deal, i) => (
                <DealCard key={deal.id} deal={deal} index={i + 2} />
              ))}
            </div>
          )}

          {filteredDeals.length === 0 && (
            <div className="text-center py-20 text-[#5A5450] text-[12px]">
              No active mandates in this asset class. Additional deal flow available under NDA.
            </div>
          )}
        </div>
      </section>

      {/* ── CIM CTA STRIP ── */}
      <section className="border-t border-[#B8956B]/20">
        <div className="px-6 lg:px-20 py-16 max-w-screen-2xl mx-auto">
          <FadeIn>
            <div className="grid lg:grid-cols-3 gap-px bg-[#B8956B]/15">
              <div className="bg-[#112B1A] p-10 lg:col-span-2">
                <p className="text-[9px] tracking-[0.5em] uppercase text-[#B8956B] font-mono mb-6">
                  Confidential Information Memorandum
                </p>
                <h2 className="text-2xl font-serif leading-tight max-w-md">
                  Full financial disclosure unlocked post-NDA for qualified capital
                </h2>
                <p className="text-[13px] text-[#8B8680] mt-4 max-w-md leading-relaxed">
                  Each CIM includes audited income statements, full tenancy schedule,
                  capital expenditure history, valuation report, and structured exit analysis.
                </p>
                <div className="mt-8 flex gap-4">
                  <Link
                    href="/cim-request"
                    className="px-7 py-3.5 bg-[#B8956B] text-[#0B1F14] text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-[#CDA97C] transition-colors"
                  >
                    Request Confidential CIM
                  </Link>
                  <Link
                    href="/investment-pipeline"
                    className="px-7 py-3.5 border border-[#B8956B]/50 text-[11px] uppercase tracking-[0.18em] hover:border-[#B8956B] transition-colors"
                  >
                    View Pipeline
                  </Link>
                </div>
              </div>

              <div className="bg-[#0B1F14] p-10">
                <p className="text-[9px] tracking-[0.5em] uppercase text-[#B8956B] font-mono mb-6">
                  Transaction Scope
                </p>
                <div className="space-y-4">
                  {[
                    'East Africa — Primary Market',
                    'UK (Derby, Manchester)',
                    'UAE (Dubai, Abu Dhabi)',
                    'Bali, Indonesia',
                    'Phuket, Thailand',
                  ].map((market) => (
                    <div key={market} className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-[#B8956B]/50 flex-shrink-0" />
                      <span className="text-[12px] text-[#8B8680]">{market}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-[#B8956B]/10">
                  <p className="text-[9px] uppercase tracking-widest text-[#5A5450]">Mandate enquiries</p>
                  <p className="text-[#B8956B] text-sm mt-1">mandates@murivest.co.ke</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-[11px] text-[#3D3A37] mt-8 text-center">
              Murivest Realty Group Ltd · All transactions subject to NDA, KYC/AML verification, and proof of funds ·
              Not a public offer · Institutional counterparties only
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}