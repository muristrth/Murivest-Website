'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, FileText, Factory, ChevronRight } from 'lucide-react';

const LegacyPlanningSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#000435] text-white overflow-hidden">
      {/* 3D Ambient Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Capital Stewardship
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-medium mb-6 leading-tight tracking-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200">Generational</span> Stability
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            We specialize in the sophisticated transition of active operational wealth into institutional-grade real estate portfolios across East Africa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {[
            {
              title: "Capital Transition",
              desc: "A strategic framework for converting high-risk operating capital into low-volatility property yields.",
              icon: FileText,
              link: "/legacy-guide",
              label: "White Paper"
            },
            {
              title: "Asset Monetization",
              desc: "Unlock liquidity from industrial assets via leaseback structures while maintaining operational continuity.",
              icon: Factory,
              link: "/sale-leaseback",
              label: "Advisory"
            },
            {
              title: "Legacy Preservation",
              desc: "How a premier Kenyan industrialist secured KSh billions in tax-efficient income for their family trust.",
              icon: ShieldCheck,
              link: "/case-study-legacy",
              label: "Case Study"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 p-8 rounded-3xl overflow-hidden"
            >
              {/* Animated Glow Overlay */}
              <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/5 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-amber-500/50 transition-colors">
                    <item.icon className="h-6 w-6 text-amber-500" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">{item.label}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>
                
                <Link href={item.link} className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-white group-hover:text-amber-500 transition-colors">
                  Explore <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Fiduciary Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#000435] p-1 shadow-2xl"
        >
          <div className="bg-gradient-to-r from-white/5 via-transparent to-white/5 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-amber-500" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-500">The Fiduciary Standard</span>
              </div>
              <p className="text-2xl font-serif italic text-gray-200">
                "Our mandate is the absolute protection of the principal, ensuring that wealth created in this generation endures for the next."
              </p>
            </div>
            
            <button className="relative group overflow-hidden bg-white text-black px-6 py-3 rounded-xl font-bold text-[11px] tracking-widest uppercase transition-all hover:bg-amber-500 hover:text-white active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <span className="relative z-10">Request Consultation</span>
              <div className="absolute inset-0 bg-amber-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegacyPlanningSection;