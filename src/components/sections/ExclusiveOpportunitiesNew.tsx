'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, ShieldCheck, Landmark } from 'lucide-react';

const ExclusiveOpportunities = () => {
  const opportunities = [
    {
      id: 1,
      title: "The Best Western Meridian",
      location: "Nairobi CBD",
      type: "Hospitality Asset",
      investment: "$9.2M / KSh 1.2B",
      returns: "15.2% IRR",
      timeline: "Q2 2025",
      image: "/p5/facade-exterieure.jpg",
      status: "Limited Bidding",
      description: "A landmark institutional hotel asset in the urban core. Fully stabilized with consistent occupancy and premium hospitality amenities."
    },
    {
      id: 2,
      title: "Buffalo Mall & Land Reserve",
      location: "Naivasha Corridor",
      type: "Mixed-Use Retail",
      investment: "$5.0M / KSh 750M",
      returns: "11.0% IRR",
      timeline: "Q3 2025",
      image: "/p6/Buffalo_Mall.png",
      status: "Direct Treaty",
      description: "Strategic retail hub in the Rift Valley gateway, inclusive of high-value development acreage for secondary expansion."
    },
    {
      id: 3,
      title: "ICD Industrial Logistics",
      location: "Mombasa Road",
      type: "Critical Infrastructure",
      investment: "$8.0M / KSh 1.0B",
      returns: "15.0% IRR",
      timeline: "Q4 2025",
      image: "/p/IMG-20250813-WA0001.jpg",
      status: "By Invitation",
      description: "Prime logistical node with office integration and showroom facilities. Direct connectivity to the Inland Container Depot."
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Landmark className="h-4 w-4 text-amber-600" strokeWidth={1.5} />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-slate-400">Portfolio Selection</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-950 leading-[1.1]">
              Private Placement <br />
              <span className="italic text-slate-500 font-light">& Strategic Assets.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm font-light leading-relaxed max-w-xs border-l border-amber-500/30 pl-6 pb-2">
            Exceptional mandates reserved for qualified family offices and institutional principals seeking alpha-generating East African real estate.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {opportunities.map((opp) => (
            <motion.div
              key={opp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden mb-8">
                <img
                  src={opp.image}
                  alt={opp.title}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Status Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white/95 backdrop-blur-sm text-slate-900 px-4 py-2 text-[9px] font-bold tracking-[0.2em] uppercase shadow-sm">
                    {opp.status}
                  </span>
                </div>
                
                {/* Return Badge */}
                <div className="absolute bottom-6 right-6">
                  <div className="bg-slate-950 text-white px-4 py-3 text-right">
                    <p className="text-[8px] uppercase tracking-[0.2em] text-slate-400 mb-0.5">Target Yield</p>
                    <p className="text-lg font-serif italic text-amber-200">{opp.returns}</p>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-600 mb-3">
                  {opp.type}
                </p>
                <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-amber-700 transition-colors">
                  {opp.title}
                </h3>
                
                <div className="flex items-center gap-2 text-slate-400 mb-6">
                  <MapPin size={12} className="text-amber-500" />
                  <span className="text-[11px] tracking-widest uppercase">{opp.location}</span>
                </div>

                <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-grow italic">
                  "{opp.description}"
                </p>

                <div className="space-y-4 pt-8 border-t border-slate-100 mb-10">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="uppercase tracking-widest text-slate-400">Capital Requirement</span>
                    <span className="font-serif text-slate-900">{opp.investment}</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="uppercase tracking-widest text-slate-400">Deployment Window</span>
                    <span className="font-serif text-slate-900">{opp.timeline}</span>
                  </div>
                </div>

                <button className="w-full border border-slate-200 py-5 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-900 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all duration-500">
                  Request Private Briefing
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-32 pt-16 border-t border-slate-100 flex flex-col items-center">
          <ShieldCheck className="h-8 w-8 text-slate-300 mb-6 stroke-[1px]" />
          <p className="text-slate-400 text-sm font-light mb-10 max-w-lg text-center leading-relaxed">
            Our full acquisition pipeline is restricted to vetted principals. 
            Access to proprietary deal flow requires a formal invitation.
          </p>
          <button className="flex items-center gap-6 px-12 py-6 bg-slate-950 text-white group hover:bg-amber-600 transition-all duration-700">
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase">Schedule Private Consultation</span>
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveOpportunities;