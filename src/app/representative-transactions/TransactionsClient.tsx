'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2,
  ArrowRight
} from 'lucide-react';

const transactions = [
  {
    title: "Project Alpha: Prime Office Acquisition",
    sector: "Commercial Office",
    location: "Nairobi CBD",
    size: "USD 15M - 20M",
    strategy: "Core / Income Generation",
    yield: "8.5% - 9.2%",
    status: "Held / Managed",
    details: "Acquisition of a Grade-A office tower with 95% occupancy. Anchored by blue-chip financial institutions with a 7-year WALE."
  },
  {
    title: "Project Beta: Logistics Hub Development",
    sector: "Industrial / Logistics",
    location: "Mombasa Road Corridor",
    size: "USD 25M - 30M",
    strategy: "Opportunistic / Build-to-Core",
    irr: "18% - 22%",
    status: "Development Complete",
    details: "Master-planned industrial park assembly. Structured JV between a regional pension fund and a global logistics operator."
  },
  {
    title: "Project Gamma: Hospitality Sale-Leaseback",
    sector: "Hospitality / Mixed-Use",
    location: "Nairobi Westlands",
    size: "USD 10M - 12M",
    strategy: "Value-Add / Recapitalization",
    yield: "10.5% (Indicative)",
    status: "Exited (2024)",
    details: "Recapitalization of a distressed hospitality asset through a 15-year triple-net (NNN) lease structure."
  },
  {
    title: "Project Delta: Strategic Land Assembly",
    sector: "Land / Urban Expansion",
    location: "Kiambu / Northern Corridor",
    size: "USD 40M+",
    strategy: "Opportunistic / Infrastructure-Led",
    irr: "24% (Historical)",
    status: "Portfolio Divestment",
    details: "Consolidation of fragmented land parcels for a major satellite city project. De-risked through regulatory and infrastructure alignment."
  }
];

export default function TransactionsClient() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-light selection:bg-amber-500/30">
      
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
              Track Record & Execution
            </span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-serif italic mb-8 leading-tight">
            Representative <br />
            <span className="text-amber-200/90 font-serif">Transactions</span>
          </h1>
          <p className="max-w-2xl text-slate-400 text-lg leading-relaxed font-light italic border-l border-amber-500/30 pl-8">
            A selection of anonymized mandates demonstrating our capability in origination, 
            structuring, and stewardship of East African real assets.
          </p>
        </div>
      </section>

      {/* Transactions Grid */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8">
          
          <div className="grid lg:grid-cols-2 gap-12">
            {transactions.map((tx, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.02] border border-white/10 p-10 hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20">
                    <Building2 className="text-amber-500" size={24} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 px-3 py-1 border border-white/10">
                    {tx.status}
                  </span>
                </div>

                <h3 className="text-2xl font-serif italic mb-4">{tx.title}</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  {tx.details}
                </p>

                <div className="grid grid-cols-2 gap-y-6 gap-x-12 border-t border-white/5 pt-8">
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-amber-500 font-bold mb-1">Sector</p>
                    <p className="text-white text-sm">{tx.sector}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-amber-500 font-bold mb-1">Location</p>
                    <p className="text-white text-sm">{tx.location}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-amber-500 font-bold mb-1">Mandate Size</p>
                    <p className="text-white text-sm">{tx.size}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-amber-500 font-bold mb-1">Performance</p>
                    <p className="text-white text-sm">{tx.yield || tx.irr}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-white/[0.02] border border-white/10">
            <h4 className="text-xl font-serif italic mb-6">Investment Committee Disclaimer</h4>
            <div className="space-y-4 text-slate-500 text-xs leading-relaxed">
              <p>
                The transactions listed above are representative examples of mandates executed by Murivest Realty Group and its principals. 
                In accordance with confidentiality agreements and fiduciary obligations, client names and specific asset identifiers have been anonymized.
              </p>
              <p>
                Historical yields and IRR figures are based on internal valuations and third-party appraisals as of the date of reporting. 
                Past performance is not indicative of future results. All investments carry inherent risks, including the potential loss of capital.
              </p>
              <p>
                This track record does not constitute an offer to sell or a solicitation of an offer to buy any securities or investment products. 
                Full performance data and case studies are available to qualified institutional investors under NDA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-32 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-serif italic mb-8">Request Detailed Track Record</h2>
          <p className="text-slate-400 mb-12 leading-relaxed">
            Qualified institutional investors can request access to our comprehensive deal-by-deal analysis, 
            including detailed underwriting assumptions and exit summaries.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-5 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-amber-400 transition-all duration-500">
              Download Credentials (PDF)
            </button>
            <button className="px-12 py-5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white/5 transition-all duration-500">
              Request IC Review Pack
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
