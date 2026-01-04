'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, PieChart, ShieldCheck } from 'lucide-react';

const items = [
  {
    title: 'Capital Gains & Transaction Structuring',
    desc: 'Legal transaction sequencing and holding structures designed to mitigate CGT exposure within Kenyan regulatory frameworks.',
    icon: Scale,
  },
  {
    title: 'Post-Tax Yield Analysis',
    desc: 'Comparative post-tax return analysis across commercial property, government securities, and alternative instruments.',
    icon: PieChart,
  },
  {
    title: 'Governance & Compliance Oversight',
    desc: 'Alignment with institutional governance standards, valuation best practice, and regulatory compliance expectations.',
    icon: ShieldCheck,
  },
];

const TaxIntelligenceSection = () => {
  return (
    <section className="py-32 bg-slate-950 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="max-w-3xl mb-24">
          <p className="text-[10px] tracking-[0.4em] uppercase text-slate-400 mb-6">
            Governance & Risk
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Tax Structuring & <br />
            <span className="italic text-slate-300">Risk Management</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            We work alongside legal, tax, and valuation professionals to ensure institutional
            capital is deployed with full compliance and exit clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white/[0.02] border border-white/10 p-10"
            >
              <item.icon className="h-7 w-7 text-amber-500 mb-6" />
              <h3 className="text-lg font-serif text-white mb-4">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaxIntelligenceSection;
