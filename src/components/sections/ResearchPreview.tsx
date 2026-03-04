'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const marketData = [
  {
    category: 'Prime Office CBD',
    yield: '8.2%',
    vacancy: '4.1%',
  },
  {
    category: 'Logistics Parks',
    yield: '9.1%',
    vacancy: '2.8%',
  },
  {
    category: 'Retail Malls',
    yield: '8.7%',
    vacancy: '6.2%',
  },
  {
    category: 'Industrial Estates',
    yield: '8.9%',
    vacancy: '3.5%',
  },
];

const ResearchPreview = () => {
  return (
    <section className="bg-[#F8F7F4] text-[#2C2C2C] border-t border-[#E5E2DC]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-24 lg:py-32">
        
        {/* Header - Club Library Style */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium">
                Market Intelligence
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.15] text-[#2C2C2C]">
              Quarterly<br />
              <span className="italic text-[#5A5A5A] font-light">Market Review</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-6 lg:pt-12"
          >
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light border-l border-[#C4B59D] pl-6">
              Independent analysis of East African commercial real estate markets, 
              covering yield trends, vacancy dynamics, and transaction flows. 
              Available exclusively to mandated partners and qualified institutional investors.
            </p>
          </motion.div>
        </div>

        {/* Data Table - Like a Club Ledger */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="border border-[#E5E2DC] bg-[#FDFCFA]">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-6 border-b border-[#E5E2DC] bg-[#F8F7F4]">
              <div className="col-span-6">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355] font-medium">
                  Asset Class
                </span>
              </div>
              <div className="col-span-3 text-right">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355] font-medium">
                  Net Initial Yield
                </span>
              </div>
              <div className="col-span-3 text-right">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355] font-medium">
                  Vacancy Rate
                </span>
              </div>
            </div>

            {/* Table Rows */}
            {marketData.map((item, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-12 gap-4 p-6 border-b border-[#E5E2DC] last:border-b-0 hover:bg-[#F8F7F4] transition-colors duration-300"
              >
                <div className="col-span-6">
                  <span className="text-[15px] font-serif text-[#2C2C2C]">
                    {item.category}
                  </span>
                </div>
                <div className="col-span-3 text-right">
                  <span className="text-[15px] text-[#2C2C2C] font-light">
                    {item.yield}
                  </span>
                </div>
                <div className="col-span-3 text-right">
                  <span className="text-[15px] text-[#5A5A5A] font-light">
                    {item.vacancy}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Caption */}
          <div className="flex justify-between items-center mt-4 text-[11px] text-[#8B7355] tracking-[0.1em] uppercase">
            <span>Nairobi Metropolitan Area</span>
            <span>Q4 2024</span>
          </div>
        </motion.div>

        {/* Market Activity Summary - Like Club Statistics */}
        <div className="grid md:grid-cols-3 gap-px bg-[#E5E2DC] border border-[#E5E2DC] mb-20">
          {[
            { value: '$30M', label: 'Active Book of Business', sub: 'East Africa' },
            { value: '13', label: 'Institutional Deals', sub: 'Closed' },
            { value: '8.5%', label: 'Average Cap Rate', sub: 'Prime Assets' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-[#F8F7F4] p-10 lg:p-12 text-center hover:bg-[#FDFCFA] transition-colors duration-500"
            >
              <div className="text-4xl md:text-5xl font-serif text-[#8B7355] mb-3">
                {stat.value}
              </div>
              <p className="text-[13px] text-[#2C2C2C] font-medium tracking-wide mb-1">
                {stat.label}
              </p>
              <p className="text-[11px] text-[#5A5A5A] uppercase tracking-[0.15em]">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA - Library Request Style */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-12 border-t border-[#E5E2DC]"
        >
          <div className="max-w-xl">
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-2">
              Complete quarterly intelligence packs include infrastructure corridor analysis, 
              regulatory developments, and post-tax return modeling.
            </p>
            <p className="text-[12px] text-[#8B7355] italic">
              Available to mandated partners only.
            </p>
          </div>

          <Link
            href="/research"
            className="group flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-500 flex-shrink-0"
          >
            <span>Request Intelligence Pack</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchPreview;