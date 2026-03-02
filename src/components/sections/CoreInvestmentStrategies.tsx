'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Factory, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const strategies = [
  {
    title: 'Sale-Leaseback & Capital Monetization',
    desc: 'Structured sale-leaseback transactions enabling corporates to unlock embedded real estate capital while retaining operational continuity.',
    metrics: 'Target Yield: 9.0% - 10.5%',
    icon: Landmark,
  },
  {
    title: 'Industrial & Strategic Land Banking',
    desc: 'Origination and advisory on industrial assets and large-scale land holdings positioned along infrastructure-led growth corridors.',
    metrics: 'Target IRR: 18% - 24%',
    icon: Factory,
  },
  {
    title: 'Stabilized Income Assets',
    desc: 'Acquisition advisory for income-producing office, retail, and mixed-use assets with defensible downside protection.',
    metrics: 'WALE Focus: 5 - 10 Years',
    icon: Landmark,
  },
];

const CoreInvestmentStrategies = () => {
  return (
    <section className="bg-[#F8F7F4] text-[#2C2C2C]">
      {/* Header - Clubhouse Elegance */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] mb-6 font-medium">
              Investment Committee
            </p>
            <h2 className="text-4xl md:text-5xl font-serif leading-[1.15] text-[#2C2C2C]">
              Core Strategies<br />
              <span className="italic text-[#5A5A5A] font-light">For Long-Term Capital</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-6 lg:pb-2"
          >
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light border-l border-[#C4B59D] pl-6">
              Murivest advises on a focused set of real estate strategies where scale, 
              governance, and risk-adjusted returns can be clearly underwritten and stewarded 
              across market cycles.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Strategy Cards - Locker Room Bench Style */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pb-24">
        <div className="grid md:grid-cols-3 gap-px bg-[#E5E2DC] border border-[#E5E2DC]">
          {strategies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group bg-[#F8F7F4] p-10 lg:p-12 hover:bg-[#FDFCFA] transition-colors duration-700"
            >
              {/* Icon - Treated like Club Crest */}
              <div className="mb-10">
                <div className="w-12 h-12 rounded-full border border-[#C4B59D] flex items-center justify-center group-hover:border-[#8B7355] transition-colors duration-500">
                  <item.icon className="h-5 w-5 text-[#8B7355]" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif text-[#2C2C2C] mb-4 leading-tight group-hover:text-[#8B7355] transition-colors duration-500">
                {item.title}
              </h3>
              
              <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light mb-8">
                {item.desc}
              </p>

              {/* Metrics - Scorecard Style */}
              <div className="pt-6 border-t border-[#E5E2DC]">
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium">
                  {item.metrics}
                </p>
              </div>

              {/* Link - Discreet */}
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Link
                  href="/institutional-investors"
                  className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#8B7355] hover:text-[#6B5635]"
                >
                  Strategy Brief <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer - Club Newsletter Style */}
      <div className="border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[13px] text-[#5A5A5A] font-light italic">
              "The best investment on Earth is earth." — Louis Glickman
            </p>
            
            <Link 
              href="/institutional-investors"
              className="group flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-500"
            >
              <span>Schedule Committee Presentation</span>
              <span className="w-8 h-[1px] bg-current group-hover:w-12 transition-all duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreInvestmentStrategies;