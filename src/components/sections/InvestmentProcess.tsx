'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    step: '01',
    title: 'Initial Consultation',
    desc: 'Comprehensive discussion of investment objectives, risk tolerance, and capital allocation preferences.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Due Diligence',
    desc: 'Rigorous technical, financial, and legal analysis of target properties and market conditions.',
    icon: FileText,
  },
  {
    step: '03',
    title: 'Structuring & Execution',
    desc: 'Optimal transaction structuring, negotiation, and closing of institutional-grade acquisitions.',
    icon: TrendingUp,
  },
  {
    step: '04',
    title: 'Asset Management',
    desc: 'Ongoing portfolio oversight, performance monitoring, and strategic exit planning.',
    icon: Shield,
  },
];

const InvestmentProcess = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-amber-500 mr-3" />
              <span className="text-amber-500 font-serif italic text-lg">Investment Methodology</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              How We Preserve &
              <span className="block text-amber-200/90 font-serif italic">Grow Generational Wealth</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
              Our time-tested investment process combines rigorous due diligence with strategic execution to deliver superior risk-adjusted returns for institutional investors.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              The Investment Process
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto font-light">
              A disciplined, institutional-grade approach to commercial real estate investment.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-[2.25rem] left-0 w-full h-[1px] bg-white/10 z-0" />

            <div className="grid md:grid-cols-4 gap-12 mb-32 relative z-10">
              {steps.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="group"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-[10px] font-bold text-amber-500 shadow-sm group-hover:border-amber-500 transition-colors duration-500">
                      {item.step}
                    </span>
                    <item.icon className="h-5 w-5 text-slate-400 group-hover:text-amber-500 transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-4 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed antialiased">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
              Ready to Begin Your Investment Journey?
            </h2>
            <p className="text-slate-400 text-xl mb-8 leading-relaxed font-light">
              Connect with our investment specialists to discuss your objectives and explore opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-500 text-black font-bold uppercase tracking-widest hover:bg-amber-400 transition-all">
                  Schedule Consultation
                </button>
              </Link>

              <Link href="/properties">
                <button className="px-8 py-4 border border-amber-500/60 text-amber-300 hover:bg-amber-500 hover:text-black transition-all font-bold uppercase tracking-widest">
                  View Opportunities
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestmentProcess;