"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Scale, PieChart, ArrowRight, ShieldCheck } from 'lucide-react';

interface TaxCardProps {
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
  tag: string;
}

const TaxCard = ({ title, desc, icon: Icon, tag }: TaxCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group bg-white border border-slate-200 p-10 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)]"
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-10">
          <Icon className="h-7 w-7 text-slate-800 stroke-[1px] group-hover:text-amber-600 transition-colors duration-500" />
          <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-amber-600/60">
            {tag}
          </span>
        </div>

        <h3 className="text-xl font-serif text-slate-900 mb-5 leading-tight">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-10 font-light italic">
          "{desc}"
        </p>

        <div className="mt-auto">
          <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 group-hover:gap-5 transition-all duration-500">
            Request Briefing <ArrowRight className="h-3 w-3 text-amber-600" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const TaxIntelligenceSection = () => {
  return (
    <section className="py-32 bg-[#F9FAFB] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-10 bg-amber-500" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400">Governance</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-950 leading-tight">
              Regulatory Intelligence <br />
              <span className="italic text-slate-500 font-light">& Risk Mitigation.</span>
            </h2>
          </div>
          <div className="lg:max-w-sm pb-2">
            <p className="text-slate-500 text-sm leading-relaxed font-light border-l border-amber-500/20 pl-6">
              Sophisticated navigation of the KRA landscape to ensure capital preservation and post-tax yield optimization for private family offices.
            </p>
          </div>
        </div>

        {/* The Cards Grid */}
        <div className="grid md:grid-cols-3 gap-0 border-collapse">
          {/* Card 1 */}
          <TaxCard 
            tag="Yield Protection"
            icon={Landmark}
            title="Capital Gains Mitigation"
            desc="Strategic legal frameworks designed to minimize CGT liabilities on high-value land disposition and asset liquidation."
          />
          {/* Card 2 */}
          <TaxCard 
            tag="Wealth Transition"
            icon={Scale}
            title="Family Trust Governance"
            desc="The restructuring of individual property holdings into private trusts for seamless, tax-efficient generational transfer."
          />
          {/* Card 3 */}
          <TaxCard 
            tag="Market Arbitrage"
            icon={PieChart}
            title="Post-Tax Yield Analysis"
            desc="A definitive comparison of commercial real estate performance versus traditional government securities in the 2025 regime."
          />
        </div>

        {/* Fiduciary Credentials */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-slate-200 pt-12">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
               {/* Placeholders for logos if you have them, otherwise icons */}
               <ShieldCheck className="h-10 w-10 text-slate-300 stroke-[1px]" />
            </div>
            <p className="text-[11px] tracking-widest uppercase text-slate-400 font-medium">
              KRA Compliant • Fiduciary Standard • RICS Regulated
            </p>
          </div>
          <div className="hidden lg:block text-[10px] tracking-[0.2em] text-slate-300 uppercase italic">
            Confidentiality Guaranteed
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxIntelligenceSection;