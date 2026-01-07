'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, MapPin, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const WestlandsPropertyInvestment = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-light selection:bg-amber-500/30">
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
              Westlands Property Investment
            </span>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <h1 className="text-5xl lg:text-7xl font-serif italic mb-8 leading-tight">
                Westlands Property <br />
                <span className="text-amber-200/90 font-serif">Investment Opportunities</span>
              </h1>
              <p className="max-w-2xl text-slate-400 text-lg leading-relaxed font-light italic border-l border-amber-500/30 pl-8">
                "Westlands represents Nairobi's premier commercial district, offering institutional-grade investment opportunities in East Africa's most dynamic business hub."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-px lg:bg-white/10">
          {[
            { label: "Cap Rate", value: "9.2%", sub: "Prime Locations" },
            { label: "Occupancy", value: "98%", sub: "Grade A Assets" },
            { label: "Appreciation", value: "14%", sub: "Annual Growth" },
            { label: "IRR", value: "20-25%", sub: "Target Returns" }
          ].map((stat, i) => (
            <div key={i} className="bg-[#05070a] lg:p-12 text-center lg:text-left transition-colors hover:bg-white/[0.02]">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-4">{stat.label}</p>
              <h2 className="text-5xl lg:text-6xl font-serif italic mb-2 tracking-tighter">{stat.value}</h2>
              <p className="text-slate-600 text-[10px] uppercase tracking-widest">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
               <MapPin size={16} className="text-amber-500" />
               <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">Prime Location</h3>
            </div>
            <h2 className="text-4xl font-serif italic mb-10 leading-tight">
              Nairobi's Business <br />District Excellence
            </h2>
            <div className="space-y-8 text-slate-400 font-light leading-relaxed">
              <p>
                Westlands is Nairobi's <span className="text-white">premier commercial district</span>, home to multinational corporations, international organizations, and Kenya's business elite.
              </p>
              <p>
                Our curated portfolio features <span className="text-white">trophy assets</span> with long-term leases to creditworthy tenants, delivering stable cash flows and exceptional returns.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 border border-amber-500/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
            <div className="relative overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
                className="w-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                alt="Westlands Business District"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <Link href="/contact" className="group flex flex-col items-center py-32 hover:bg-white/[0.02] transition-colors">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-amber-500 mb-8">Invest in Westlands</span>
          <h2 className="text-5xl lg:text-7xl font-serif italic text-center mb-12">
            Secure Your Position in <br />Nairobi's Premier District
          </h2>
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] border-b border-amber-500 pb-2 group-hover:gap-8 transition-all duration-500">
            Request Westlands Investment Brief <ArrowUpRight size={16} />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default WestlandsPropertyInvestment;