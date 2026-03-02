'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const transactions = [
  {
    title: 'UK Family Office — USD 18M Industrial Acquisition (Nairobi)',
    strategy: 'Core / Income Generation',
    metric: 'Yield: 8.7% Net',
    year: '2023',
  },
  {
    title: 'Regional Pension Scheme — Sale-Leaseback Advisory',
    strategy: 'Capital Recycling / Yield Enhancement',
    metric: 'Lease Term: 15 Years',
    year: '2022',
  },
  {
    title: 'Kenyan Corporate Group — Strategic Land Banking (120 Acres)',
    strategy: 'Opportunistic / Infrastructure-Led',
    metric: 'Target IRR: 22%+',
    year: '2024',
  },
];

const RepresentativeTransactions = () => {
  return (
    <section className="bg-[#F8F7F4] text-[#2C2C2C] border-t border-[#2C2C2C]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-24 lg:py-32">
        
        {/* Header - Club Trophy Room Style */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium">
                Stewardship & Record
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.15] text-[#2C2C2C]">
              Selected Mandates<br />
              <span className="italic text-[#5A5A5A] font-light">& Transactions</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 lg:pt-12 flex flex-col justify-between"
          >
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light border-l border-[#C4B59D] pl-6 mb-8">
              Demonstrated capability in executing large-scale commercial mandates 
              for institutional and private capital providers across East African markets.
            </p>
            
            <Link 
              href="/representative-transactions"
              className="group self-start flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-500"
            >
              <span>View Complete Record</span>
              <span className="w-8 h-[1px] bg-current group-hover:w-12 transition-all duration-500" />
            </Link>
          </motion.div>
        </div>

        {/* Transactions - Like Club Honours Boards */}
        <div className="space-y-px bg-[#E5E2DC] border border-[#E5E2DC]">
          {transactions.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-[#F8F7F4] hover:bg-[#FDFCFA] transition-colors duration-500"
            >
              <div className="grid md:grid-cols-12 gap-6 p-8 lg:p-10 items-center">
                {/* Year - Like a tournament date */}
                <div className="md:col-span-1">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#C4B59D] font-medium">
                    {t.year}
                  </span>
                </div>

                {/* Strategy - The category */}
                <div className="md:col-span-3">
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#8B7355]">
                    {t.strategy}
                  </p>
                </div>

                {/* Title - The main event */}
                <div className="md:col-span-5">
                  <h3 className="text-base font-serif text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-500 leading-snug">
                    {t.title}
                  </h3>
                </div>

                {/* Metric - The score */}
                <div className="md:col-span-2">
                  <span className="text-[12px] text-[#5A5A5A] font-light">
                    {t.metric}
                  </span>
                </div>

                {/* Arrow - Discreet indicator */}
                <div className="md:col-span-1 flex justify-end">
                  <ArrowUpRight 
                    className="w-4 h-4 text-[#C4B59D] opacity-0 group-hover:opacity-100 group-hover:text-[#8B7355] transition-all duration-500" 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note - Like a club secretary's discretion */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex items-start gap-4 text-[12px] text-[#5A5A5A] font-light italic"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#8B7355] mt-2 flex-shrink-0" />
          <p>
            Transactions shown are representative and anonymized to protect client confidentiality. 
            Full details available to qualified institutional partners under NDA.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RepresentativeTransactions;