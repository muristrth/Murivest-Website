'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const transactions = [
  {
    year: '2024',
    id: 'TXN-001',
    category: 'Grade A Office',
    location: 'Nairobi CBD',
    strategy: 'Acquisition & Structuring',
    metric: 'Confidential',
    status: 'Completed',
    href: '/transactions/txn-001',
  },
  {
    year: '2024',
    id: 'TXN-002',
    category: 'Mixed-Use Development',
    location: 'Nairobi Metropolitan',
    strategy: 'Capital Structuring & JV Formation',
    metric: 'Confidential',
    status: 'Active',
    href: '/transactions/txn-002',
  },
  {
    year: '2023',
    id: 'TXN-003',
    category: 'Logistics & Industrial',
    location: 'Mombasa Road',
    strategy: 'Portfolio Assembly & Optimisation',
    metric: 'Confidential',
    status: 'Completed',
    href: '/transactions/txn-003',
  },
  {
    year: '2023',
    id: 'TXN-004',
    category: 'Hospitality Asset',
    location: 'Nairobi CBD',
    strategy: 'Operator Mandate & Recapitalisation',
    metric: 'Confidential',
    status: 'Completed',
    href: '/transactions/txn-004',
  },
];

const RepresentativeTransactions = () => {
  return (
    <section className="bg-[#F8F7F4] text-[#2C2C2C] border-t border-[#E5E2DC]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32">

        {/* ── HEADER ─────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16 lg:mb-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[1px] bg-[#8B7355]" />
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#8B7355] font-mono">
                Representative Engagements
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.12]">
              Advisory Track Record
              <br />
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
            <p className="text-[14px] sm:text-[15px] leading-[1.85] text-[#5A5A5A] font-light border-l border-[#C4B59D] pl-6 mb-8">
              Representative advisory mandates demonstrating our capability in structuring and executing
              commercial real estate transactions across East Africa. Specific deal metrics disclosed
              only to qualified partners under formally executed NDA.
            </p>

            <Link
              href="/representative-transactions"
              className="group self-start flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-500"
            >
              <span>Full Case Studies</span>
              <span className="w-8 h-[1px] bg-current group-hover:w-12 transition-all duration-500" />
            </Link>
          </motion.div>
        </div>

        {/* ── DESKTOP TABLE ──────────────────── */}
        <div className="hidden md:block">

          {/* Column headers */}
          <div className="grid grid-cols-12 gap-4 px-6 pb-4 border-b border-[#E5E2DC] mb-px">
            {['Year', 'Category', 'Location', 'Advisory Strategy', 'Status', ''].map((h, i) => (
              <div key={i} className={`
                text-[9px] uppercase tracking-[0.3em] text-[#A9A39A] font-mono
                ${i === 0 ? 'col-span-1' : ''}
                ${i === 1 ? 'col-span-2' : ''}
                ${i === 2 ? 'col-span-2' : ''}
                ${i === 3 ? 'col-span-4' : ''}
                ${i === 4 ? 'col-span-2' : ''}
                ${i === 5 ? 'col-span-1 text-right' : ''}
              `}>
                {h}
              </div>
            ))}
          </div>

          <div className="space-y-px bg-[#E5E2DC] border border-[#E5E2DC]">
            {transactions.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-[#F8F7F4] hover:bg-[#FDFCFA] transition-colors duration-400 cursor-pointer"
                onClick={() => window.location.href = t.href}
              >
                <div className="grid grid-cols-12 gap-4 px-6 py-6 items-center">

                  {/* Year */}
                  <div className="col-span-1">
                    <span className="text-[11px] tracking-[0.2em] text-[#C4B59D] font-mono">
                      {t.year}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="col-span-2">
                    <p className="text-[11px] tracking-[0.12em] uppercase text-[#8B7355]">
                      {t.category}
                    </p>
                  </div>

                  {/* Location */}
                  <div className="col-span-2">
                    <p className="text-[12px] text-[#5A5A5A]">{t.location}</p>
                  </div>

                  {/* Strategy */}
                  <div className="col-span-4">
                    <h3 className="text-[14px] font-serif text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-400 leading-snug">
                      Advisory: {t.strategy}
                    </h3>
                  </div>

                  {/* Status */}
                  <div className="col-span-2">
                    <span className={`text-[9px] uppercase tracking-[0.2em] font-mono px-2 py-1 ${
                      t.status === 'Active'
                        ? 'bg-[#1B4332]/10 text-[#1B4332]'
                        : 'bg-[#E5E2DC] text-[#8B7355]'
                    }`}>
                      {t.status}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-1 flex justify-end">
                    <ArrowUpRight className="w-4 h-4 text-[#C4B59D] opacity-0 group-hover:opacity-100 group-hover:text-[#8B7355] transition-all duration-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── MOBILE STACK ───────────────────── */}
        <div className="md:hidden space-y-3">
          {transactions.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={t.href}>
                <div className="border border-[#E5E2DC] bg-white p-5">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[#8B7355] font-mono">{t.category}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-[8px] uppercase tracking-[0.2em] font-mono px-1.5 py-0.5 ${
                        t.status === 'Active' ? 'bg-[#1B4332]/10 text-[#1B4332]' : 'bg-[#E5E2DC] text-[#8B7355]'
                      }`}>{t.status}</span>
                      <span className="text-[9px] text-[#C4B59D] font-mono">{t.year}</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-[15px] mb-1">{t.location}</h3>
                  <p className="text-[12px] text-[#5A5A5A]">Advisory: {t.strategy}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── DISCLAIMER ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex items-start gap-4 text-[11px] text-[#5A5A5A] font-light italic leading-[1.8]"
        >
          <div className="w-1 h-1 rounded-full bg-[#8B7355] mt-2.5 flex-shrink-0" />
          <p>
            Engagements referenced above are representative examples of advisory mandates executed by Murivest Group Ltd.
            In accordance with confidentiality obligations, client identities and transaction metrics have been anonymised.
            Full documentation available to qualified institutional investors under formally executed non-disclosure agreements.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default RepresentativeTransactions;