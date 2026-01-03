'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, Search, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    step: '01',
    title: 'Mandate Initiation',
    desc: 'Bilateral consultation to define capital deployment objectives, risk-adjusted return hurdles (IRR/Equity Multiple), and asset class parameters.',
    icon: FileText,
  },
  {
    step: '02',
    title: 'Governance & Compliance',
    desc: 'Execution of mutual NDAs and formalization of the engagement framework, ensuring alignment with institutional KYC and fiduciary standards.',
    icon: ShieldCheck,
  },
  {
    step: '03',
    title: 'Asset Origination',
    desc: 'Proprietary sourcing and rigorous technical underwriting. We conduct deep-dive due diligence on off-market opportunities.',
    icon: Search,
  },
  {
    step: '04',
    title: 'Closing & Stewardship',
    desc: 'Structured transaction execution followed by institutional-grade reporting, valuation oversight, and strategic exit planning.',
    icon: CheckCircle,
  },
];

const engagementModels = [
  {
    title: 'Single Asset Mandate',
    desc: 'Targeted advisory for the acquisition or disposal of high-value individual commercial assets or strategic land tracts.',
  },
  {
    title: 'Retained Origination',
    desc: 'A dedicated partnership for continuous deal flow, providing first-right access to off-market industrial and commercial assets.',
  },
  {
    title: 'Portfolio Advisory',
    desc: 'Comprehensive oversight of real estate allocations, focusing on optimization, tax-efficient restructuring, and capital reallocation.',
  },
];

const InstitutionalEngagementModel = () => {
  return (
    <section className="py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        
        {/* Header - Sharp & Direct */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-24"
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-amber-600 font-bold mb-6">
            Engagement Framework
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight mb-8">
            A Disciplined Approach to <br />
            <span className="italic text-slate-500 font-light text-3xl md:text-4xl">Institutional Capital Deployment</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed border-l-2 border-amber-500/30 pl-6">
            Murivest operates under a rigorous fiduciary standard, providing 
            institutional investors with a structured, transparent pathway to 
            East African real estate markets.
          </p>
        </motion.div>

        {/* Process Steps with Visual Connector */}
        <div className="relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-[2.25rem] left-0 w-full h-[1px] bg-slate-100 z-0" />
          
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
                  <span className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-bold text-amber-600 shadow-sm group-hover:border-amber-500 transition-colors duration-500">
                    {item.step}
                  </span>
                  <item.icon className="h-5 w-5 text-slate-300 group-hover:text-amber-500 transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-serif text-slate-900 mb-4 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed antialiased">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engagement Models - Minimalist & Authoritative */}
        <div className="bg-slate-50 p-12 md:p-16 rounded-sm mb-24">
          <h3 className="text-xs tracking-[0.3em] uppercase text-slate-400 mb-12 font-semibold">
            Standard Engagement Structures
          </h3>
          <div className="grid md:grid-cols-3 gap-16">
            {engagementModels.map((model, idx) => (
              <div key={idx} className="relative">
                <h4 className="text-lg font-serif text-slate-900 mb-4 flex items-center gap-2">
                  {model.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed italic">
                  "{model.desc}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA - Professional Reassurance */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-t border-slate-200 pt-16">
          <div className="flex items-start gap-4 max-w-lg">
            <div className="mt-1 h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <p className="text-slate-500 text-sm leading-relaxed">
              Our mandates are exclusive and limited in number to ensure 
              uncompromised attention to detail and fiduciary integrity. 
              <span className="block mt-2 font-medium text-slate-900">Next availability for new mandates: Q2 2026.</span>
            </p>
          </div>
          
          <Link
            href="/institutional-investors"
            className="group flex items-center gap-6 px-12 py-5 bg-slate-900 text-white text-xs tracking-[0.3em] uppercase hover:bg-amber-600 transition-all duration-500 shadow-xl"
          >
            Initiate Mandate Discussion
            <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default InstitutionalEngagementModel;