"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Factory, Mountain, Map, ArrowRight, BarChart3, Download } from 'lucide-react';

const IndustrialLandBankingSection: React.FC = () => {
  const hubs = [
    { name: "Westlands", slug: "westlands", label: "Corporate HQ" },
    { name: "Upper Hill", slug: "upper-hill", label: "Financial District" },
    { name: "Industrial Area", slug: "industrial-area", label: "Logistics Hub" },
    { name: "Karen", slug: "karen", label: "Luxury Commercial" },
  ];

  return (
    <section className="py-24 bg-[#0f172a] text-white overflow-hidden relative">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif font-medium mb-6">
              Industrial <span className="text-amber-500">&</span> <br />
              Strategic Land Banking
            </h2>
            <p className="text-gray-400 text-lg">
              Deployment of capital into Kenya’s critical infrastructure corridors. Specialized for manufacturers and logistics firms seeking operational security.
            </p>
          </div>
          <div className="hidden md:block p-6 border-l border-white/10 italic text-sm text-gray-500">
            "Land is the only asset that isn't being manufactured anymore."
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Industrial Real Estate Analysis */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-amber-500/20 rounded-xl text-amber-500">
                <Factory className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold">Industrial Asset Analysis</h3>
            </div>
            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-gray-400 text-sm">Mombasa Road Vacancy</span>
                <span className="text-amber-500 font-mono font-bold text-xl">2.3%</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-gray-400 text-sm">Avg. Logistics Lease</span>
                <span className="text-amber-500 font-mono font-bold text-xl">7.5 Yrs</span>
              </div>
            </div>
            <Link href="/industrial-properties" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white group-hover:text-amber-500 transition-colors">
              Market Inventory <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Strategic Land Banking */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-amber-500/20 rounded-xl text-amber-500">
                <Mountain className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold">Strategic Land Banking</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-10">
              Acquisition of large-scale tracts positioned along upcoming SGR corridors and bypass projects for 5–10 year value appreciation.
            </p>
            <Link href="/strategic-land-banking" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white group-hover:text-amber-500 transition-colors">
              Acquisition Maps <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Local Hubs Navigation */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Map className="h-4 w-4 text-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">Prime Asset Corridors</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hubs.map((hub) => (
              <Link key={hub.slug} href={`/properties?location=${hub.slug}`} className="group">
                <div className="text-sm font-bold text-white group-hover:text-amber-500 transition-colors">{hub.name}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-tighter">{hub.label}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* High-Value Legacy CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold mb-2">The 2025 Legacy Investment Brief</h3>
            <p className="text-amber-100 text-sm opacity-90 leading-relaxed">
              A discreet framework for family trusts and company owners. Strategies for plant monetization and generational wealth structuring.
            </p>
          </div>
          <button className="bg-[#0f172a] text-white px-4 py-2 rounded-lg font-bold text-xs tracking-widest uppercase hover:bg-slate-800 transition-all flex items-center gap-3 group">
            Download Brief <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrialLandBankingSection;