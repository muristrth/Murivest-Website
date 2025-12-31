"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, TrendingDown, DollarSign, Cpu, ArrowRight, ShieldCheck, BarChart2 } from 'lucide-react';

const SmartBuildingService = () => {
  const [telemetry, setTelemetry] = useState(12.32);

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(prev => {
        const change = (Math.random() - 0.5) * 0.15;
        return Math.max(11.5, Math.min(13.5, prev + change));
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-slate-950 text-white overflow-hidden relative border-t border-white/5">
      {/* Subtle Data-Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-3xl">
            <p className="text-amber-500/70 text-[10px] tracking-[0.5em] uppercase font-bold mb-6">
              Operational Efficiency
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
              Autonomous Management <br />
              <span className="italic text-slate-400 font-light">& Yield Protection.</span>
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl">
              Proprietary telemetry integration for Nairobi’s institutional portfolios. 
              We reduce operating expenditure by 15–20% through real-time energy audits and predictive maintenance.
            </p>
          </div>
          <div className="bg-white/[0.03] border border-white/10 p-8 text-right min-w-[240px]">
             <p className="text-slate-500 text-[9px] uppercase tracking-[0.3em] mb-2 font-bold">Standard Management Rate</p>
             <div className="text-3xl font-serif text-amber-200 tracking-tight italic">Shs 25<span className="text-xs font-sans text-slate-500 not-italic ml-2 uppercase tracking-widest">/ft²</span></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Dashboard: The "Command Centre" */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white/[0.02] border border-white/10 p-12 relative overflow-hidden group hover:border-amber-500/30 transition-all duration-700"
          >
            <div className="flex justify-between items-start mb-16">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2 font-bold">Live Monitoring Site</p>
                <h3 className="text-xl font-serif text-slate-200 tracking-wide">The Murivest Plaza <span className="text-slate-600 font-sans text-xs ml-4 font-light">Office • Nairobi</span></h3>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/5 border border-amber-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Protocol Active</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 mb-16">
              <div>
                <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-4">Real-Time Load</p>
                <div className="text-7xl font-serif font-light text-slate-100 italic tracking-tighter">
                  {telemetry.toFixed(2)}
                  <span className="text-xs font-sans text-slate-600 ml-4 uppercase tracking-[0.2em] not-italic font-bold">kWh/ft²</span>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <div className="flex justify-between text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500 mb-4">
                  <span>Efficiency Benchmark</span>
                  <span className="text-amber-500/70 italic">Target: 92%</span>
                </div>
                <div className="h-[1px] w-full bg-white/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(telemetry / 15) * 100}%` }}
                    className="h-full bg-amber-500/50"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-12">
              {[
                { label: "Asset Uptime", value: "99.98%", icon: Activity },
                { label: "Opex Reduction", value: "18.4%", icon: TrendingDown },
                { label: "Net Yield Gain", value: "Shs 117k", icon: DollarSign },
              ].map((m, i) => (
                <div key={i}>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500 mb-3 font-bold">{m.label}</p>
                  <div className="text-xl font-serif text-slate-200">{m.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Case Protocols */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-white p-10 flex flex-col justify-between h-full group hover:bg-black-500 transition-colors duration-700">
              <div className="mb-12">
                <BarChart2 className="h-8 w-8 text-slate-950 mb-6 stroke-[1px]" />
                <h4 className="text-slate-950 text-xl font-serif mb-4 italic">The ROI Mandate</h4>
                <div className="space-y-3 font-mono text-[11px] text-slate-900/80">
                  <div className="flex justify-between"><span>Gross Savings</span><span>+Shs 180,000</span></div>
                  <div className="flex justify-between"><span>Service Fee</span><span>-Shs 62,500</span></div>
                  <div className="h-[1px] bg-slate-950/20 my-2" />
                  <div className="flex justify-between text-slate-950 font-bold text-sm"><span>Monthly Net</span><span>Shs 117,500</span></div>
                </div>
              </div>
              <button className="flex items-center justify-between w-full border border-slate-950/20 px-6 py-4 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-950 hover:bg-slate-950 hover:text-white transition-all duration-500">
                Initiate Audit <ArrowRight size={14} />
              </button>
            </div>

            <div className="bg-white/[0.02] border border-white/10 p-10 flex flex-col gap-8">
               {[
                 { title: "Retail Hubs", desc: "Heatmap analytics for turnover rent." },
                 { title: "Logistics", desc: "Cold-chain monitoring & power theft alerts." }
               ].map((item, i) => (
                 <div key={i}>
                   <h5 className="text-[10px] uppercase tracking-[0.3em] text-amber-500/70 font-bold mb-2">{item.title}</h5>
                   <p className="text-slate-500 text-xs font-light leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Credentials Bar */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-40">
           {['Shelly 3EM Certified', 'Enterprise Grade AI', 'Real-Time Fiduciary Reporting'].map((text, i) => (
             <div key={i} className="flex items-center gap-3">
               <ShieldCheck size={12} className="text-amber-500" />
               <span className="text-[9px] font-bold tracking-[0.3em] uppercase">{text}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default SmartBuildingService;