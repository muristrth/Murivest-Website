'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, TrendingUp, Lock, ArrowRight } from 'lucide-react';

const YieldReportSection = () => {
  const reports = [
    { quarter: 'Q4', year: '2025', yield: '8.5–9.0%', status: 'Latest Intelligence', isLatest: true },
    { quarter: 'Q3', year: '2025', yield: '7.8–8.5%', status: 'Archived', isLatest: false },
    { quarter: 'Q2', year: '2025', yield: '7.5–8.2%', status: 'Archived', isLatest: false },
  ];

  return (
    <section className="py-32 bg-[#0a0f1a] text-white overflow-hidden relative border-t border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(217,119,6,0.03),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-4 w-4 text-amber-500" strokeWidth={1.5} />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-slate-500">Macro Intelligence</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
              The Nairobi <span className="italic font-light text-slate-400 underline decoration-amber-500/30 decoration-1 underline-offset-[12px]">Yield Reports.</span>
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-xl italic">
              "Proprietary quarterly analysis on prime commercial yields, rental escalations, and capital flight patterns across East Africa."
            </p>
          </div>
          <div className="hidden lg:block pb-4 text-right">
            <p className="text-slate-500 text-[9px] uppercase tracking-[0.3em] font-bold mb-2">Restricted Access</p>
            <p className="text-amber-200/50 text-xs font-serif italic">Institutional Grade Data Only</p>
          </div>
        </div>

        {/* Intelligence Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Featured Latest Report */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/[0.03] border border-white/10 p-12 relative group hover:border-amber-500/40 transition-all duration-700"
          >
            <div className="flex justify-between items-start mb-20">
              <div>
                <span className="bg-amber-600 text-[9px] font-bold tracking-[0.3em] uppercase px-3 py-1 text-slate-900">
                  New Release
                </span>
                <h3 className="text-5xl font-serif mt-6 tracking-tight">Q4 <span className="text-slate-500 font-light">2025</span></h3>
              </div>
              <FileText size={48} className="text-white/10 stroke-[1px]" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-3 font-bold">Prime Asset Yield</p>
                <div className="text-4xl font-serif text-amber-100 italic">8.5 – 9.0%</div>
                <div className="mt-4 h-[1px] w-full bg-white/10 relative overflow-hidden">
                    <motion.div 
                      initial={{ x: '-100%' }}
                      whileInView={{ x: '0%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute inset-0 bg-amber-500/50" 
                    />
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Analyzing the impact of the 2025 tax amendments on Grade A commercial absorption rates in Westlands.
                </p>
              </div>
            </div>

            <button className="flex items-center gap-6 text-[10px] font-bold tracking-[0.4em] uppercase text-white group-hover:text-amber-500 transition-colors">
              Access Full Dossier <Download size={14} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>

          {/* Archive Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {reports.filter(r => !r.isLatest).map((report, i) => (
              <div key={i} className="bg-white/[0.01] border border-white/5 p-8 flex justify-between items-center group hover:bg-white/[0.03] transition-all">
                <div>
                  <div className="text-[10px] tracking-[0.2em] text-slate-500 uppercase font-bold mb-1">{report.quarter} {report.year}</div>
                  <div className="text-xl font-serif text-slate-200 italic">{report.yield} Yield</div>
                </div>
                <button className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center hover:border-amber-500/50 hover:bg-amber-500/10 transition-all">
                  <Lock size={14} className="text-slate-500 group-hover:text-amber-500" />
                </button>
              </div>
            ))}

            <div className="mt-auto pt-8">
              <div className="p-8 border border-amber-500/20 bg-amber-500/[0.02]">
                <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-amber-500 mb-4">Custom Analysis</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed mb-6">
                  Require a specific sub-sector audit? Our analysts provide bespoke feasibility studies for private acquisitions.
                </p>
                <button className="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-white hover:gap-5 transition-all">
                  Request Bespoke Audit <ArrowRight size={12} className="text-amber-500" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Compliance Footer */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 grayscale">
          <p className="text-[9px] tracking-[0.3em] uppercase font-bold text-slate-400">
            Murivest Advisory • Financial Conduct Authority Standards
          </p>
          <div className="flex gap-12 text-[9px] tracking-[0.3em] uppercase font-bold">
            <span>Confidential</span>
            <span>Institutional Use Only</span>
            <span>Nairobi • London • Dubai</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YieldReportSection;