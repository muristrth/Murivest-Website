'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ShieldCheck, Landmark, Scale, Quote, CheckCircle, ChevronRight } from 'lucide-react';

const TrustIndicators = () => {
  const compliance = [
    { title: "KRA Compliant", detail: "Registered Investment Advisor" },
    { title: "RICS Standards", detail: "Chartered Valuation Frameworks" },
    { title: "CMA Licensed", detail: "Capital Markets Oversight" },
    { title: "ISO 27001", detail: "Tier-1 Data Encryption" }
  ];

  const partners = [
    "Pam Golding Properties",
    "Knight Frank International",
    "Vineyard Properties",
    "Mungai & Associates Legal"
  ];

  return (
    <section className="py-32 bg-[#080a0f] text-white relative">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        
        {/* Editorial Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-amber-500/20 bg-amber-500/5 rounded-full mb-8">
            <ShieldCheck className="h-4 w-4 text-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-200">Fiduciary Integrity</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-8">
            The Foundation of <br />
            <span className="italic font-light text-slate-400 underline decoration-amber-500/20 underline-offset-8">Institutional Trust.</span>
          </h2>
          <p className="text-slate-500 text-lg font-light max-w-2xl mx-auto italic">
            "Our reputation is our most liquid asset. We operate at the intersection of local expertise and international regulatory rigor."
          </p>
        </div>

        {/* Regulatory & Partner Grid */}
        <div className="grid lg:grid-cols-12 gap-12 mb-32">
          
          {/* Compliance Column */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-[11px] font-bold tracking-[0.4em] uppercase text-slate-500 mb-8 px-2">Regulatory Framework</h3>
            {compliance.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all group">
                <div>
                  <h4 className="text-sm font-bold tracking-tight text-slate-200">{item.title}</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">{item.detail}</p>
                </div>
                <Scale size={16} className="text-slate-700 group-hover:text-amber-500 transition-colors" />
              </div>
            ))}
          </div>

          {/* Partners Column (Visual Logos/Text) */}
          <div className="lg:col-span-8 bg-white/[0.01] border border-white/5 p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <Landmark size={80} className="text-white/[0.02] rotate-12" />
            </div>
            
            <h3 className="text-[11px] font-bold tracking-[0.4em] uppercase text-slate-500 mb-12">Strategic Connectivity</h3>
            <div className="grid md:grid-cols-2 gap-12">
              {partners.map((partner, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="h-px w-8 bg-amber-500/30 group-hover:w-12 transition-all" />
                  <span className="text-xl font-serif text-slate-300 group-hover:text-white transition-colors tracking-tight italic">
                    {partner}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-20 pt-12 border-t border-white/5">
              <Quote className="text-amber-500/20 mb-6" size={32} />
              <p className="text-2xl font-serif leading-relaxed text-slate-200 italic mb-8">
                "The most professional real estate experience I've encountered in Africa. Their ability to bridge local opportunity with global fiduciary standards is unmatched."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-amber-600 to-amber-900 border border-white/10" />
                <div>
                  <p className="text-sm font-bold tracking-tight">Dr. Sarah Chen</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">Family Office Principal · Singapore</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Conversion Portal */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-900 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-slate-950 border border-white/10 rounded-2xl p-16 overflow-hidden">
            
            <div className="max-w-3xl">
              <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                Secure Your Place in the <br />
                <span className="text-amber-500">Q1 2025 Allocation.</span>
              </h3>
              <p className="text-slate-400 text-lg font-light mb-12 leading-relaxed">
                Membership is strictly by invitation or qualified referral. We are currently accepting mandates for our next prime commercial tranche.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-white text-slate-950 px-10 py-5 text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-amber-500 transition-all flex items-center justify-center gap-4">
                  Request Membership <ChevronRight size={14} />
                </button>
                <div className="flex items-center gap-4 px-6 opacity-60">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">Applications Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;