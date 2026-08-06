'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building2, ArrowRight, TrendingUp } from 'lucide-react';

const transactions = [
  {
    code: 'Project Alpha',
    title: 'Prime Office Acquisition',
    sector: 'Commercial Office',
    location: 'Nairobi CBD',
    size: 'USD 15M – 20M',
    strategy: 'Core / Income Generation',
    performance: '8.5% – 9.2% yield',
    status: 'Held / Managed',
    details: 'Acquisition of a Grade-A office tower with 95% occupancy. Anchored by blue-chip financial institutions with a 7-year weighted average lease expiry.',
  },
  {
    code: 'Project Beta',
    title: 'Logistics Hub Development',
    sector: 'Industrial / Logistics',
    location: 'Mombasa Road Corridor',
    size: 'USD 25M – 30M',
    strategy: 'Opportunistic / Build-to-Core',
    performance: '18% – 22% IRR',
    status: 'Development Complete',
    details: 'Master-planned industrial park assembly. Structured JV between a regional pension fund and a global logistics operator. Dollar-denominated triple-net leases.',
  },
  {
    code: 'Project Gamma',
    title: 'Hospitality Sale-Leaseback',
    sector: 'Hospitality / Mixed-Use',
    location: 'Nairobi Westlands',
    size: 'USD 10M – 12M',
    strategy: 'Value-Add / Recapitalisation',
    performance: '10.5% yield (indicative)',
    status: 'Exited 2024',
    details: 'Recapitalisation of a distressed hospitality asset through a 15-year triple-net (NNN) lease structure. Full capital recovery within 48 months of acquisition.',
  },
  {
    code: 'Project Delta',
    title: 'Strategic Land Assembly',
    sector: 'Land / Urban Expansion',
    location: 'Kiambu / Northern Corridor',
    size: 'USD 40M+',
    strategy: 'Opportunistic / Infrastructure-Led',
    performance: '24% IRR (historical)',
    status: 'Portfolio Divestment',
    details: 'Consolidation of fragmented land parcels for a satellite city project. De-risked through regulatory alignment and infrastructure-linked capital deployment.',
  },
];

const statusColor: Record<string, string> = {
  'Held / Managed': 'text-[#8B7355] border-[#8B7355]/30',
  'Development Complete': 'text-emerald-700 border-emerald-200',
  'Exited 2024': 'text-[#5A5A5A] border-[#E5E2DC]',
  'Portfolio Divestment': 'text-[#5A5A5A] border-[#E5E2DC]',
};

export default function TransactionsClient() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C]">

      {/* ── Hero ── */}
      <section className="relative bg-[#1B4332] text-white overflow-hidden pt-32 pb-28 px-6 md:px-12 lg:px-16">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <Link href="/" className="inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-[#8B7355] hover:text-amber-400 transition-colors mb-12">
              Back to Home
            </Link>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-amber-500" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-amber-500">Track Record & Execution</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8">
              Representative<br /><span className="italic text-amber-200/90">Transactions</span>
            </h1>
            <p className="max-w-2xl text-slate-400 text-base md:text-lg font-light leading-relaxed border-l border-amber-500/30 pl-6 italic">
              A selection of anonymised mandates demonstrating Murivest's capability in origination,
              structuring, and stewardship of East African commercial real assets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#2C2C2C]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              ['Total Mandates', '$90M+'],
              ['Asset Classes', '4 Sectors'],
              ['Exit Track', '2 Completed'],
              ['Avg. Hold', '4 – 7 Years'],
            ].map(([label, value]) => (
              <div key={label} className="py-6 px-5 text-center">
                <p className="text-[10px] tracking-[0.25em] uppercase text-slate-500 mb-1">{label}</p>
                <p className="text-white font-serif text-base">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transactions Grid ── */}
      <section className="relative bg-[#F8F7F4]">
        <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-[#8B7355]" />
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Mandate Portfolio</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif leading-[1.1] mb-4 text-[#2C2C2C]">
            Deal<br /><span className="italic text-[#8B7355] font-light">Summaries</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#E5E2DC] mb-16" />

          <div className="grid md:grid-cols-2 gap-px bg-[#E5E2DC]">
            {transactions.map((tx, i) => (
              <motion.div
                key={tx.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#F8F7F4] p-8 md:p-10 group hover:bg-white transition-colors duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 border border-[#E5E2DC] flex items-center justify-center group-hover:border-[#8B7355] transition-colors duration-500">
                    <Building2 className="w-4 h-4 text-[#8B7355]" strokeWidth={1} />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 border ${statusColor[tx.status] ?? 'text-[#5A5A5A] border-[#E5E2DC]'}`}>
                    {tx.status}
                  </span>
                </div>

                <p className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355] mb-2">{tx.code}</p>
                <h3 className="text-xl font-serif text-[#2C2C2C] mb-4">{tx.title}</h3>
                <div className="w-8 h-[1px] bg-[#E5E2DC] mb-5" />
                <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light mb-8">{tx.details}</p>

                <div className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-[#E5E2DC] pt-8">
                  {[
                    ['Sector', tx.sector],
                    ['Location', tx.location],
                    ['Mandate Size', tx.size],
                    ['Performance', tx.performance],
                    ['Strategy', tx.strategy],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="text-[9px] uppercase tracking-widest text-[#8B7355] font-bold mb-1">{label}</p>
                      <p className="text-[#2C2C2C] text-[13px] font-light">{value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <section className="relative bg-white">
        <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16">
          <div className="border border-[#E5E2DC] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Investment Committee Disclaimer</p>
            </div>
            <div className="space-y-4 text-[13px] text-[#5A5A5A] font-light leading-[1.9]">
              <p>The transactions listed are representative examples of mandates executed by Murivest Realty Group and its principals. In accordance with confidentiality obligations, client names and specific asset identifiers have been anonymised.</p>
              <p>Historical yields and IRR figures are based on internal valuations and third-party appraisals as of the date of reporting. Past performance is not indicative of future results. All investments carry risk, including loss of capital.</p>
              <p>This track record does not constitute an offer to sell or a solicitation to buy any securities or investment products. Full performance data and case studies are available to qualified institutional investors under NDA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[#2C2C2C] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-[#8B7355]" />
                <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Access Full Record</p>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-6">
                Request Detailed<br /><span className="italic text-amber-200/90 font-light">Track Record</span>
              </h2>
              <p className="text-[15px] leading-[1.8] text-slate-400 font-light max-w-lg">
                Qualified institutional investors may request access to our comprehensive deal-by-deal
                analysis, including detailed underwriting assumptions and exit summaries, under NDA.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#8B7355] text-white text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-amber-600 transition-colors duration-500">
                Download Credentials <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/20 text-white text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-white/5 transition-colors duration-500">
                Request IC Review Pack
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}