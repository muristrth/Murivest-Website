'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const transactions = [
  {
    title: 'UK Family Office — USD 18M Industrial Acquisition (Nairobi)',
    strategy: 'Core / Income Generation',
    metric: 'Yield: 8.7% Net'
  },
  {
    title: 'Regional Pension Scheme — Sale-Leaseback Advisory',
    strategy: 'Capital Recycling / Yield Enhancement',
    metric: 'Lease Term: 15 Years'
  },
  {
    title: 'Kenyan Corporate Group — Strategic Land Banking (120 Acres)',
    strategy: 'Opportunistic / Infrastructure-Led',
    metric: 'Target IRR: 22%+'
  },
];

const RepresentativeTransactions = () => {
  return (
    <section className="py-32 bg-slate-950 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16">
          <div className="max-w-3xl">
            <p className="text-[10px] tracking-[0.4em] uppercase text-amber-500 font-bold mb-6">
              Track Record & Stewardship
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Selected <br />
              <span className="italic text-slate-300 font-light">Advisory Mandates</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
              Demonstrated capability in executing large-scale commercial mandates for institutional and private capital providers.
            </p>
          </div>
          
          <Link 
            href="/representative-transactions"
            className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500 hover:text-white transition-colors border-b border-amber-500/20 pb-2"
          >
            View Full Track Record <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {transactions.map((t, i) => (
            <div key={i} className="group bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.05] transition-all duration-500">
              <div className="flex justify-between items-start mb-4">
                <p className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">{t.strategy}</p>
                <span className="text-[9px] font-mono text-amber-500/60 uppercase">{t.metric}</span>
              </div>
              <h3 className="text-white text-base font-serif leading-relaxed mb-4 group-hover:text-amber-200 transition-colors">
                {t.title}
              </h3>
              <div className="h-[1px] w-8 bg-amber-500/30 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-3 text-slate-500 text-[10px] uppercase tracking-[0.2em]">
          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
          <span>Transactions shown are representative and anonymized to protect client confidentiality</span>
        </div>
      </div>
    </section>
  );
};

export default RepresentativeTransactions;
