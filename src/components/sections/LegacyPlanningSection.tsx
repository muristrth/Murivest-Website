'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Landmark, PieChart, ChevronRight } from 'lucide-react';

const LegacyPlanningSection: React.FC = () => {
  return (
    <section className="relative py-32 bg-slate-950 text-white overflow-hidden border-t border-white/5">
      {/* Subtle Grain Texture Overlay for a "Paper" feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mb-24"
        >
          <p className="text-amber-500/70 text-[10px] tracking-[0.5em] uppercase font-bold mb-6">
            Institutional Stewardship
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
            Transitioning Wealth into <br />
            <span className="italic text-slate-400">Generational Heritage.</span>
          </h2>
          <div className="h-[1px] w-20 bg-amber-500/40 mb-8" />
          <p className="text-lg text-slate-400 font-light leading-relaxed">
            We facilitate the sophisticated migration of operational capital into 
            recession-resistant, institutional-grade real estate across the East African corridor.
          </p>
        </motion.div>

        {/* Strategic Pillars - Clean Cards */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {[
            {
              title: "Capital Transition",
              desc: "A bespoke framework for reallocating high-volatility operational cash flow into stabilized property yields.",
              icon: PieChart,
              label: "Strategy"
            },
            {
              title: "Asset Monetization",
              desc: "Sophisticated sale-leaseback structures designed to unlock liquidity while ensuring operational permanence.",
              icon: Landmark,
              label: "Divestment"
            },
            {
              title: "Fiduciary Counsel",
              desc: "Strategic advisory for family trusts and private offices seeking tax-efficient property acquisition.",
              icon: Shield,
              label: "Advisory"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="mb-8 overflow-hidden">
                <item.icon className="h-8 w-8 text-amber-500/70 stroke-[1px] group-hover:scale-110 transition-transform duration-700" />
              </div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-amber-500/50 font-bold mb-3">{item.label}</p>
              <h3 className="text-xl font-serif mb-4 text-slate-200 group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light mb-6">
                {item.desc}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-slate-400 group-hover:text-amber-200 transition-all duration-300">
                View Protocol <ChevronRight className="h-3 w-3" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* The Fiduciary Statement - Very Minimalist */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-16 flex flex-col md:flex-row items-start justify-between gap-12"
        >
          <div className="max-w-2xl">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-slate-500 mb-8 font-bold">The Murivest Mandate</h4>
            <p className="text-2xl md:text-3xl font-serif leading-snug text-slate-200 italic">
              "Our objective is the absolute preservation of principal, ensuring the prosperity of today becomes the legacy of tomorrow."
            </p>
          </div>
          
          <div className="flex flex-col items-start gap-6">
            <p className="text-slate-500 text-xs tracking-wide max-w-[200px]">
              Available for private consultation in Nairobi, London, and Dubai.
            </p>
            <button className="px-10 py-4 bg-transparent border border-amber-500/40 text-amber-200 text-[10px] tracking-[0.3em] uppercase hover:bg-amber-500 hover:text-slate-950 transition-all duration-700">
              Request Briefing
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegacyPlanningSection;