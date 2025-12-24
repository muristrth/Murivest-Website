"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingDown, DollarSign, Activity, BarChart3, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

const SmartBuildingService = () => {
  const [energyConsumption, setEnergyConsumption] = useState(12.3);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyConsumption(prev => {
        const change = (Math.random() - 0.5) * 0.4;
        return Math.max(10, Math.min(15, prev + change));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { label: "Uptime", value: "99.9%", icon: Activity, color: "text-blue-400" },
    { label: "Cost Save", value: "18%", icon: TrendingDown, color: "text-green-400" },
    { label: "Net Gain", value: "Shs 117k", icon: DollarSign, color: "text-amber-400" },
  ];

  return (
    <section className="py-24 bg-[#020617] text-white overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
            >
              <Cpu className="h-3 w-3" /> Autonomous Asset Care
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-serif font-medium mb-6 leading-tight">
              AI-Driven <span className="text-amber-500">Yield</span> <br />Optimization
            </h2>
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
              Proprietary intelligent management for Nairobi's premier properties. Reduce OPEX by up to 20% through real-time Shelly 3EM integration.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
            <div className="text-[10px] font-bold tracking-widest text-amber-500 uppercase mb-2">Service Rate</div>
            <div className="text-3xl font-mono font-bold">Shs 25<span className="text-sm text-gray-500 font-sans ml-1">/ft²/mo</span></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Live Command Dashboard */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="lg:col-span-7 bg-slate-900/50 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
               <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-green-500 uppercase tracking-tighter">Telemetry Live</span>
               </div>
            </div>

            <div className="mb-12">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Active Site</h3>
              <div className="text-2xl font-bold">Murivest Plaza <span className="text-sm font-normal text-gray-500 ml-2">Office • 50k ft²</span></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="text-sm text-gray-400 mb-2">Real-time Consumption</div>
                <div className="text-6xl font-mono font-bold text-amber-500 tracking-tighter">
                  {energyConsumption.toFixed(2)}
                  <span className="text-sm font-sans text-gray-600 ml-2 uppercase">kWh/ft²</span>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">
                  <span>Efficiency Target</span>
                  <span>92%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(energyConsumption / 15) * 100}%` }}
                    className="h-full bg-gradient-to-r from-amber-600 to-amber-400"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {metrics.map((m, i) => (
                <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-4 transition-colors hover:bg-white/10">
                  <m.icon className={`h-5 w-5 ${m.color} mb-3`} />
                  <div className="text-lg font-bold font-mono">{m.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ROI & Use Cases */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-[2.5rem] p-8 shadow-2xl shadow-amber-900/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="h-5 w-5" /> ROI Statement
              </h3>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between opacity-80"><span>Savings</span><span>+Shs 180,000</span></div>
                <div className="flex justify-between opacity-80"><span>Service Fee</span><span>-Shs 62,500</span></div>
                <div className="h-px bg-white/20 my-4" />
                <div className="flex justify-between text-xl font-bold">
                  <span>Net Gain</span>
                  <span>Shs 117,500</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-[2.5rem] p-8">
              <div className="space-y-6">
                {[
                  { title: "Retail", desc: "Heatmaps & Turnover Rent optimization." },
                  { title: "Industrial", desc: "Power theft & cold-chain monitoring." },
                  { title: "Hospitality", desc: "Leak detection & predictive maintenance." }
                ].map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-1 group-hover:translate-x-1 transition-transform">{item.title}</div>
                    <p className="text-sm text-gray-400 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <button className="group w-full bg-white text-black px-4 py-2.5 rounded-xl font-bold text-xs tracking-widest uppercase transition-all hover:bg-amber-500 hover:text-white flex items-center justify-center gap-3 active:scale-95 shadow-xl shadow-white/5">
              Initiate 30-Day Trial <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 opacity-50 text-xs tracking-[0.2em] font-bold uppercase text-gray-500 text-center">
            <span>No Setup Fees</span>
            <div className="hidden md:block h-1 w-1 rounded-full bg-gray-700" />
            <span>Shelly 3EM Certified</span>
            <div className="hidden md:block h-1 w-1 rounded-full bg-gray-700" />
            <span>Enterprise Grade AI</span>
        </div>
      </div>
    </section>
  );
};

export default SmartBuildingService;