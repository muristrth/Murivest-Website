'use client';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const transactions = [
  {
    title: 'Commercial Office - Nairobi',
    strategy: 'Advisory: Acquisition & Structuring',
    metric: 'Undisclosed',
    year: '2024',
  },
  {
    title: 'Mixed-Use Development - Nairobi Metropolitan',
    strategy: 'Advisory: Capital Structuring & JV Formation',
    metric: 'Undisclosed',
    year: '2024',
  },
  {
    title: 'Logistics & Industrial Portfolio - Mombasa Road',
    strategy: 'Advisory: Portfolio Assembly & Optimization',
    metric: 'Undisclosed',
    year: '2023',
  },
];

const RepresentativeTransactions = () => {
  return (
    <section className="bg-[#F8F7F4] text-[#2C2C2C] border-t border-[#2C2C2C]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-24 lg:py-32">
        
        {/* Header */}
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
                Representative Engagements
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.15] text-[#2C2C2C]">
              Advisory Track Record<br />
              <span className="italic text-[#5A5A5A] font-light">Select Experience</span>
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
              Representative advisory engagements demonstrating our capability in structuring and executing commercial real estate transactions. 
              Specific deal terms and financial metrics disclosed only to qualified partners under formal NDA.
            </p>
            
            <Link 
              href="/representative-transactions"
              className="group self-start flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-500"
            >
              <span>Detailed Case Studies</span>
              <span className="w-8 h-[1px] bg-current group-hover:w-12 transition-all duration-500" />
            </Link>
          </motion.div>
        </div>

        {/* Transactions */}
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
                <div className="md:col-span-1">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#C4B59D] font-medium">
                    {t.year}
                  </span>
                </div>

                <div className="md:col-span-3">
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#8B7355]">
                    {t.strategy}
                  </p>
                </div>

                <div className="md:col-span-5">
                  <h3 className="text-base font-serif text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-500 leading-snug">
                    {t.title}
                  </h3>
                </div>

                <div className="md:col-span-2">
                  <span className="text-[12px] text-[#5A5A5A] font-light">
                    {t.metric}
                  </span>
                </div>

                <div className="md:col-span-1 flex justify-end">
                  <ArrowUpRight 
                    className="w-4 h-4 text-[#C4B59D] opacity-0 group-hover:opacity-100 group-hover:text-[#8B7355] transition-all duration-500" 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex items-start gap-4 text-[12px] text-[#5A5A5A] font-light italic"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#8B7355] mt-2 flex-shrink-0" />
          <p>
            The engagements referenced above are representative examples of advisory mandates executed by Murivest Realty Group. 
            In accordance with confidentiality obligations and fiduciary duties, client identities and specific transaction details 
            have been anonymized. Full performance data and case documentation are available to qualified institutional investors 
            under formally executed non-disclosure agreements. Past advisory outcomes do not guarantee future results. Each 
            engagement involves unique risks and circumstances.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RepresentativeTransactions;