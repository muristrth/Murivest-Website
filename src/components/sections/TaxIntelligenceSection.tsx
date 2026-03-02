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
    <section className="bg-[#F8F7F4] text-[#2C2C2C] border-t border-[#2C2C2C]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-24 lg:py-32">
        
        {/* Header - Club Committee Style */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium">
                Fiduciary Standards
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.15] text-[#2C2C2C]">
              Tax Structuring &<br />
              <span className="italic text-[#5A5A5A] font-light">Risk Stewardship</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-7 lg:pt-12"
          >
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light border-l border-[#C4B59D] pl-6">
              We maintain close counsel with legal, tax, and valuation professionals to ensure 
              institutional capital is deployed with full regulatory compliance, tax efficiency, 
              and clear exit pathways. Every structure is designed for transparency and long-term 
              stewardship.
            </p>
          </motion.div>
        </div>

        {/* Three Pillars - Like club rule cards */}
        <div className="grid md:grid-cols-3 gap-px bg-[#E5E2DC] border border-[#E5E2DC]">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group bg-[#F8F7F4] p-10 lg:p-12 hover:bg-[#FDFCFA] transition-colors duration-700"
            >
              {/* Icon - Like a club crest element */}
              <div className="mb-8">
                <div className="w-14 h-14 rounded-full border border-[#C4B59D] flex items-center justify-center group-hover:border-[#8B7355] group-hover:bg-[#8B7355]/5 transition-all duration-500">
                  <item.icon className="h-6 w-6 text-[#8B7355]" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-serif text-[#2C2C2C] mb-4 leading-tight group-hover:text-[#8B7355] transition-colors duration-500">
                {item.title}
              </h3>
              
              <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light">
                {item.desc}
              </p>

              {/* Subtle footer line - like a rule citation */}
              <div className="mt-8 pt-6 border-t border-[#E5E2DC]">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#C4B59D]">
                  {idx === 0 ? 'Section 12A' : idx === 1 ? 'Schedule 4' : 'Best Practice'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note - Like a club secretary's footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-[#E5E2DC]"
        >
          <p className="text-[13px] text-[#5A5A5A] font-light italic">
            "Structure is the foundation of lasting value."
          </p>
          
          <div className="flex items-center gap-4 text-[11px] tracking-[0.2em] uppercase text-[#8B7355]">
            <span>KRA Compliant</span>
            <span className="w-1 h-1 rounded-full bg-[#8B7355]" />
            <span>IFRS Aligned</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TaxIntelligenceSection;