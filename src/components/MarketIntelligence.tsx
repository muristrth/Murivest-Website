'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, BarChart, Globe, Lock } from 'lucide-react';

const MarketIntelligence = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-light selection:bg-amber-500/30">
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-amber-600/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-amber-500 font-bold mb-6">
              Asset Disposal & Exit Advisory
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif text-white leading-tight mb-8">
              Initiate an <span className="italic text-amber-200/80">Institutional Disposal Mandate</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-lg leading-relaxed font-light border-l-2 border-amber-500/50 pl-6">
              Murivest provides a structured framework for the disposition of institutional-grade 
              commercial assets. We prioritize price optimization, tax-efficient structuring, 
              and discretionary marketing to qualified global capital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust & Compliance Bar */}
      <div className="bg-slate-900 border-y border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-6 md:gap-8">
          {[
            { icon: Lock, text: "NDA Encrypted Data Room" },
            { icon: ShieldCheck, text: "RICS Valuation Alignment" },
            { icon: Globe, text: "Global Institutional Reach" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.icon className="w-4 h-4 text-amber-500" />
              <span className="text-[10px] tracking-widest uppercase text-slate-300 font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content: The Mandate Form */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-20">
          
          {/* Left Side: Professional Pillars */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-amber-600 font-bold mb-8">Disposal Framework</h3>
              <div className="space-y-12">
                {[
                  { 
                    title: "Strategic Underwriting", 
                    desc: "Before listing, we conduct a rigorous analysis of yield potential and replacement cost to ensure the asset is positioned for maximum 'Alpha' capture." 
                  },
                  { 
                    title: "Off-Market Discretion", 
                    desc: "Our primary channel is a private network of Sovereign Wealth Funds and Family Offices, avoiding 'market fatigue' and ensuring transaction privacy." 
                  },
                  { 
                    title: "Execution Certainty", 
                    desc: "We manage the entire lifecycle from KYC/AML compliance to the final SPA execution, reducing 'deal drift' and ensuring timely closure." 
                  }
                ].map((item, i) => (
                  <div key={i} className="group border-b border-slate-100 pb-8 hover:border-amber-500 transition-colors duration-500">
                    <h4 className="text-xl font-serif mb-3 text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: The Form (Securitized Feel) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 p-10 md:p-16 shadow-[20px_20px_60px_#bebebe,-20px,-20px,60px_#ffffff] relative">
              <div className="absolute top-0 right-0 p-8">
                <FileText className="w-12 h-12 text-slate-100" />
              </div>
              
              <h3 className="text-2xl font-serif text-slate-900 mb-2">Mandate Questionnaire</h3>
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-10">Internal Use Only | Strictly Confidential</p>

              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Principal Entity Name</label>
                    <input type="text" className="w-full bg-slate-50 border-b border-slate-200 py-3 px-4 focus:outline-none focus:border-amber-600 transition-colors text-sm" placeholder="e.g. Sterling Pension Fund" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Asset Classification</label>
                    <select className="w-full bg-slate-50 border-b border-slate-200 py-3 px-4 focus:outline-none focus:border-amber-600 transition-colors text-sm appearance-none">
                      <option>Grade-A Industrial</option>
                      <option>Prime Commercial Office</option>
                      <option>Strategic Land Development</option>
                      <option>Retail Hospitality</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Estimated Transaction Value (USD)</label>
                  <input type="text" className="w-full bg-slate-50 border-b border-slate-200 py-3 px-4 focus:outline-none focus:border-amber-600 transition-colors text-sm font-mono" placeholder="Min. 5,000,000" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Brief Asset Overview & Location</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 p-4 focus:outline-none focus:border-amber-600 transition-colors text-sm resize-none" placeholder="Provide a high-level summary of the portfolio or asset location." />
                </div>

                <div className="flex items-center gap-4 py-4">
                  <input type="checkbox" className="w-4 h-4 accent-amber-600" id="compliance" />
                  <label htmlFor="compliance" className="text-[10px] text-slate-500 leading-snug">
                    I confirm that I am an authorized signatory for the principal entity and consent to the Murivest Fiduciary Privacy Policy.
                  </label>
                </div>

                <button className="w-full bg-slate-900 text-white py-5 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-amber-600 transition-all duration-500 shadow-xl">
                  Submit for Compliance Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketIntelligence;