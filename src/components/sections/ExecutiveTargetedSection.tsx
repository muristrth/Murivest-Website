'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Shield, Globe, Landmark, ArrowRight, ChevronRight } from 'lucide-react';

const ExecutiveTargetedSection = () => {
  const pillars = [
    {
      title: "Board-Level Fiduciary",
      desc: "Direct access to senior partners for discrete asset reallocation and executive compensation structuring.",
      icon: Shield
    },
    {
      title: "Cross-Border Jurisdictions",
      desc: "Seamless capital movement and tax-efficient structures between the City of London and Nairobi.",
      icon: Globe
    },
    {
      title: "The Legacy Charter",
      desc: "Bespoke succession planning that preserves wealth across generations and jurisdictions.",
      icon: Landmark
    }
  ];

  return (
    <section className="py-32 bg-[#fdfdfc] overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative">
        
        {/* Editorial Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-amber-600" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400">Principal Mandate</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-[1.1] mb-8">
              Wealth Preservation for <br />
              <span className="italic font-light text-slate-500 underline decoration-amber-200 decoration-1 underline-offset-[12px]">The Executive Class.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <p className="text-slate-500 text-sm font-light leading-relaxed border-l border-slate-200 pl-8">
              A bespoke advisory framework designed exclusively for UK and Kenyan Executive Directors, 
              Private Equity Principals, and Family Office Trustees.
            </p>
          </div>
        </div>

        {/* The Two-Column "Director's Desk" Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: The Credentials */}
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-12 bg-slate-950 text-white overflow-hidden"
            >
              {/* Subtle visual motif: A crest or shield opacity */}
              <Crown className="absolute -right-8 -bottom-8 h-64 w-64 text-white/[0.03] rotate-12" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif mb-8 italic text-amber-200">Executive Director Protocol</h3>
                <div className="space-y-8">
                  {[
                    "Confidential asset protection for publicly listed directors",
                    "UK-Kenya tax residency and remittance advisory",
                    "Discretionary portfolio management for golf club circles",
                    "Direct access to private institutional deal-flow"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <ChevronRight size={16} className="text-amber-500 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <p className="text-sm font-light text-slate-300 tracking-wide">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {pillars.slice(0, 2).map((item, i) => (
                <div key={i} className="group">
                  <div className="w-10 h-10 border border-amber-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors">
                    <item.icon size={18} className="text-amber-600" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Narrative & Engagement */}
          <div className="lg:pt-12">
            <div className="prose prose-slate mb-16">
              <p className="text-lg font-serif text-slate-800 italic leading-relaxed mb-8">
                "In the world of institutional capital, discretion is the ultimate currency. We provide a bridge for the UK-Kenyan executive who requires more than a broker—they require a partner with the sophistication to handle cross-border complexity."
              </p>
              <div className="h-[1px] w-16 bg-amber-600 mb-8" />
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                Our approach is rooted in the standards of the City of London and the local nuances of Nairobi’s prime sectors. Whether it is legacy planning at Muthaiga or asset diversification in the UK, our senior partners are present at every board-level decision.
              </p>
            </div>

            {/* Value Grid */}
            <div className="bg-slate-50 border border-slate-100 p-10 space-y-10">
               <div className="flex gap-6">
                 <div className="text-3xl font-serif text-amber-600 opacity-30">01</div>
                 <div>
                   <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-900 mb-2">Absolute Discretion</h5>
                   <p className="text-xs text-slate-500 font-light">Bank-level confidentiality and secure communications via encrypted portals.</p>
                 </div>
               </div>
               <div className="flex gap-6">
                 <div className="text-3xl font-serif text-amber-600 opacity-30">02</div>
                 <div>
                   <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-900 mb-2">Institutional Access</h5>
                   <p className="text-xs text-slate-500 font-light">Exclusive entry to private investment syndicates and premier club networks.</p>
                 </div>
               </div>
            </div>

            {/* CTA */}
            <div className="mt-12">
               <button className="group flex items-center justify-between w-full bg-slate-950 text-white px-8 py-6 transition-all duration-500 hover:bg-amber-600">
                  <span className="text-[11px] font-bold tracking-[0.4em] uppercase">Request Private Consultation</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
               </button>
               <p className="mt-6 text-[10px] text-slate-400 text-center uppercase tracking-widest font-medium">
                 Availability restricted to vetted principals only.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExecutiveTargetedSection;