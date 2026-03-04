'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, LineChart, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const esgPillars = [
  {
    title: 'Responsible Investment Principles',
    desc: 'Murivest integrates globally recognized responsible investment principles into its underwriting and advisory mandates. Investment screening and due diligence are aligned, where applicable, with the UN-supported Principles for Responsible Investment (PRI), ensuring environmental, social, and governance factors are embedded within risk-adjusted return analysis rather than treated as peripheral considerations.',
    metrics: 'Alignment: PRI-Informed Screening',
    icon: Leaf,
  },
  {
    title: 'Green Building & Climate Standards',
    desc: 'Assets are evaluated against green building frameworks relevant to East Africa, including IFC EDGE certification and LEED standards administered by the U.S. Green Building Council. Priority is given to developments demonstrating measurable efficiency in energy, water, and embodied carbon, alongside climate-adaptive design appropriate for regional conditions.',
    metrics: 'Focus: EDGE / LEED Benchmarking',
    icon: ShieldCheck,
  },
  {
    title: 'Governance, Transparency & Reporting',
    desc: 'Institutional governance structures, legal compliance, and structured reporting protocols form the foundation of each transaction. ESG performance indicators may be tracked alongside financial metrics in accordance with Global Reporting Initiative (GRI) principles, supporting the disclosure requirements of European family offices, pension funds, and fiduciary capital partners.',
    metrics: 'Standard: GRI-Oriented Reporting',
    icon: LineChart,
  },
];

const ESGFrameworkSection = () => {
  return (
    <section className="bg-[#FDFCFA] text-[#2C2C2C]">
      {/* Header */}
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
              Environmental, Social & Governance
            </p>
            <h2 className="text-4xl md:text-5xl font-serif leading-[1.15] text-[#2C2C2C]">
              ESG Framework<br />
              <span className="italic text-[#5A5A5A] font-light">Aligned With Institutional Capital</span>
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
              Murivest integrates responsible investment principles and green building benchmarks into its acquisition advisory process, reflecting the expectations of institutional capital allocating into East Africa.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ESG Cards */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pb-24">
        <div className="grid md:grid-cols-3 gap-px bg-[#E5E2DC] border border-[#E5E2DC]">
          {esgPillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group bg-[#FDFCFA] p-10 lg:p-12 hover:bg-[#F8F7F4] transition-colors duration-700"
            >
              <div className="mb-10">
                <div className="w-12 h-12 rounded-full border border-[#C4B59D] flex items-center justify-center group-hover:border-[#8B7355] transition-colors duration-500">
                  <item.icon className="h-5 w-5 text-[#8B7355]" strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="text-xl font-serif text-[#2C2C2C] mb-4 leading-tight group-hover:text-[#8B7355] transition-colors duration-500">
                {item.title}
              </h3>
              
              <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light mb-8">
                {item.desc}
              </p>

              <div className="pt-6 border-t border-[#E5E2DC]">
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium">
                  {item.metrics}
                </p>
              </div>

              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Link
                  href="/esg-policy"
                  className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#8B7355] hover:text-[#6B5635]"
                >
                  ESG Policy Brief <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[13px] text-[#5A5A5A] font-light italic">
              Long-duration capital requires long-duration stewardship.
            </p>
            
            <Link 
              href="/esg-policy"
              className="group flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[#2C2C22] hover:text-[#8B7355] transition-colors duration-500"
            >
              <span>Download ESG Framework</span>
              <span className="w-8 h-[1px] bg-current group-hover:w-12 transition-all duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGFrameworkSection;