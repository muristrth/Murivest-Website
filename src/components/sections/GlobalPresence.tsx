'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe2, Compass, ArrowUpRight, Shield } from 'lucide-react';

const GlobalPresence = () => {
  const roadmap = [
    {
      period: "Current Mandate",
      region: "Pan-Africa",
      cities: "Nairobi · Kigali · Lagos · Johannesburg",
      objective: "Continental Authority",
      strategy: "Institutional Yield Reports & Principal Co-Investment Notes",
      status: "Operational",
      image: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      period: "2026 Strategy",
      region: "Middle East",
      cities: "Dubai · Riyadh · Doha",
      objective: "Gulf Capital Corridors",
      strategy: "Establishment of the Murivest Capital Desk — DIFC",
      status: "Strategic Initiation",
      image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      period: "2027 Strategy",
      region: "Europe",
      cities: "London · Zurich · Monaco",
      objective: "Institutional Wealth Bridge",
      strategy: "Bespoke 'Africa Yield Delegation' for European Family Offices",
      status: "In Development",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800",
    }
  ];

  return (
    <section className="py-32 bg-[#05070a] text-white overflow-hidden relative">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(180,140,60,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Globe2 className="h-4 w-4 text-amber-500" strokeWidth={1.5} />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-slate-500">Global Trajectory</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-8">
              A Roadmap of <br />
              <span className="italic font-light text-slate-400">Institutional Influence.</span>
            </h2>
          </div>
          <div className="pb-4">
            <p className="text-slate-500 text-sm font-light leading-relaxed max-w-xs border-l border-amber-500/30 pl-8">
              Connecting emerging African yields with the world’s primary capital hubs through a five-phase sovereign framework.
            </p>
          </div>
        </div>

        {/* Roadmap Cards */}
        <div className="grid lg:grid-cols-3 gap-1px bg-white/5 border border-white/10 mb-20 shadow-2xl">
          {roadmap.map((item, idx) => (
            <div key={idx} className="group relative bg-[#05070a] p-10 flex flex-col min-h-[500px] overflow-hidden">
              {/* Background Image Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000">
                <img src={item.image} alt="" className="w-full h-full object-cover grayscale" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-500 mb-2">{item.period}</p>
                    <h3 className="text-3xl font-serif tracking-tight">{item.region}</h3>
                  </div>
                  <span className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1 border ${
                    item.status === 'Operational' ? 'border-emerald-500/50 text-emerald-400' : 'border-white/20 text-slate-500'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <div className="space-y-6 flex-grow">
                  <div className="flex items-start gap-3">
                    <MapPin size={14} className="text-amber-500 shrink-0 mt-1" />
                    <p className="text-sm text-slate-300 font-light leading-relaxed italic">{item.cities}</p>
                  </div>
                  
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-3">Core Objective</p>
                    <p className="text-base font-serif text-slate-200">{item.objective}</p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-3">Strategic Initiative</p>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">{item.strategy}</p>
                  </div>
                </div>

                <div className="pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-amber-500">
                    Explore Mandate <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Gateways Horizontal Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border-y border-white/10">
          {[
            { city: "Nairobi", flag: "🇰🇪", note: "Regional HQ & Operations" },
            { city: "Dubai", flag: "🇦🇪", note: "Capital Intake Portal" },
            { city: "London", flag: "🇬🇧", note: "Fiduciary Standards Hub" },
            { city: "Singapore", flag: "🇸🇬", note: "Asia-Africa Trade Node" }
          ].map((gateway, i) => (
            <div key={i} className="py-12 px-8 text-center group hover:bg-white/[0.02] transition-colors">
              <span className="text-2xl mb-4 block grayscale group-hover:grayscale-0 transition-all">{gateway.flag}</span>
              <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-slate-200 mb-2">{gateway.city}</h4>
              <p className="text-[10px] text-slate-500 tracking-wide uppercase">{gateway.note}</p>
            </div>
          ))}
        </div>

        {/* Vision Footer */}
        <div className="mt-24 flex flex-col items-center">
          <div className="flex items-center gap-8 opacity-40">
            <Shield className="h-6 w-6 text-slate-400 stroke-[1px]" />
            <p className="text-[10px] tracking-[0.5em] uppercase font-bold text-slate-400">
              Authorized Expansion Framework 2025—2030
            </p>
            <Shield className="h-6 w-6 text-slate-400 stroke-[1px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;