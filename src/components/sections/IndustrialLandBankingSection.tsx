"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Mountain, Map, ArrowRight, Download } from 'lucide-react';

const IndustrialLandBankingSection: React.FC = () => {
  const hubs = [
    { name: "Westlands", slug: "westlands", label: "Corporate HQ" },
    { name: "Upper Hill", slug: "upper-hill", label: "Financial District" },
    { name: "Mombasa Rd", slug: "industrial-area", label: "Logistics Hub" },
    { name: "Eldoret/Nakuru", slug: "special-zones", label: "Economic Zones" },
  ];

  return (
    <section className="py-32 bg-slate-950 text-white overflow-hidden relative border-t border-white/5">
      {/* Background Architectural Grid (Very Faint) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-3xl">
            <p className="text-amber-500/70 text-[10px] tracking-[0.5em] uppercase font-bold mb-6">
              Critical Infrastructure
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
              Industrial Acquisition <br />
              <span className="italic text-slate-400 font-light">& Strategic Land Banking.</span>
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl">
              Deployment of private capital into Kenya’s primary logistical corridors. 
              We identify high-utilization assets for institutional portfolios and industrialist families.
            </p>
          </div>
          <div className="hidden lg:block pt-4">
             <div className="h-20 w-[1px] bg-gradient-to-b from-amber-500/50 to-transparent" />
             <p className="text-slate-500 text-[11px] uppercase tracking-[0.3em] leading-loose mt-4 [writing-mode:vertical-rl]">
               Tangible • Permanent • Secured
             </p>
          </div>
        </div>

        {/* Technical Analysis Grid */}
        <div className="grid md:grid-cols-2 gap-0 border border-white/10 mb-20">
          {/* Column 1: Asset Analysis */}
          <div className="p-12 border-b md:border-b-0 md:border-r border-white/10 group hover:bg-white/[0.02] transition-colors duration-700">
            <div className="flex items-center gap-4 mb-10">
              <Factory className="h-6 w-6 text-amber-500/70 stroke-[1px]" />
              <h3 className="text-xl font-serif tracking-wide text-slate-200 uppercase">Asset Intelligence</h3>
            </div>
            
            <div className="space-y-8 mb-12">
              <div className="flex justify-between items-center group/item">
                <span className="text-slate-500 text-xs tracking-widest uppercase">Mombasa Road Vacancy</span>
                <span className="text-amber-200 font-serif text-2xl tracking-tighter italic">2.3%</span>
              </div>
              <div className="flex justify-between items-center group/item">
                <span className="text-slate-500 text-xs tracking-widest uppercase">Avg. Institutional Lease</span>
                <span className="text-amber-200 font-serif text-2xl tracking-tighter italic">9.5 Yrs</span>
              </div>
            </div>

            <button className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-slate-400 group-hover:text-amber-500 transition-all">
              Inventory Access <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          {/* Column 2: Land Banking */}
          <div className="p-12 group hover:bg-white/[0.02] transition-colors duration-700">
            <div className="flex items-center gap-4 mb-10">
              <Mountain className="h-6 w-6 text-amber-500/70 stroke-[1px]" />
              <h3 className="text-xl font-serif tracking-wide text-slate-200 uppercase">Strategic Reserves</h3>
            </div>
            
            <p className="text-slate-500 text-sm leading-relaxed font-light mb-12 max-w-md">
              Acquisition of large-scale tracts positioned along SGR logistical nodes and upcoming bypass projects for decade-long capital appreciation.
            </p>

            <button className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-slate-400 group-hover:text-amber-500 transition-all">
              Acquisition Mapping <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Corridor Navigation */}
        <div className="border border-white/10 p-10 mb-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex items-center gap-3 min-w-fit">
            <Map className="h-4 w-4 text-amber-500/50" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-500">Regional Corridors</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full">
            {hubs.map((hub) => (
              <div key={hub.name} className="group cursor-pointer border-l border-white/5 pl-6">
                <div className="text-sm font-serif text-slate-300 group-hover:text-amber-200 transition-colors">{hub.name}</div>
                <div className="text-[9px] text-slate-600 uppercase tracking-widest mt-1">{hub.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* High-Value Legacy CTA - Redone as "The Library" */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-slate-900 border border-amber-500/20 p-12 md:p-16 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px]" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-2xl font-serif mb-4">The 2025 Institutional Brief</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                A discreet memorandum for Family Trusts and Principal Investors. Contains proprietary analysis on logistical yields and generational tax structuring.
              </p>
            </div>
            <button className="flex items-center gap-4 px-8 py-4 bg-amber-600 text-slate-950 font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-amber-500 transition-all group">
              Receive Briefing <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrialLandBankingSection;