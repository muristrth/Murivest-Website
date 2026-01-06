'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Factory, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const strategies = [
  {
    title: 'Sale-Leaseback & Capital Monetization',
    desc: 'Structured sale-leaseback transactions enabling corporates to unlock embedded real estate capital while retaining operational continuity and balance sheet efficiency.',
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
    desc: 'Acquisition advisory for income-producing office, retail, and mixed-use assets with defensible downside protection and clear exit horizons.',
    metrics: 'WALE Focus: 5 - 10 Years',
    icon: Landmark,
  },
];

const CoreInvestmentStrategies = () => {
  return (
    <section className="py-32 bg-slate-950 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="max-w-3xl mb-24">
          <p className="text-[10px] tracking-[0.4em] uppercase text-slate-400 mb-6">
            Core Strategies
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Capital Deployment <br />
            <span className="italic text-slate-300">Focus Areas</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Murivest advises institutional capital across a focused set of real estate strategies
            where scale, governance, and risk-adjusted returns can be clearly underwritten.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {strategies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <item.icon className="h-8 w-8 text-amber-500 mb-6" />
              <h3 className="text-xl font-serif text-white mb-4">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              <div className="mb-6 p-4 bg-white/5 border border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">{item.metrics}</span>
              </div>
              <Link
                href="/institutional-investors"
                className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-amber-400 hover:text-amber-300"
              >
                Request Strategy Brief <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreInvestmentStrategies;
