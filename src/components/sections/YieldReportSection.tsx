'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, TrendingUp } from 'lucide-react';

const YieldReportSection = () => {
  const reports = [
    {
      quarter: 'Q3',
      year: '2024',
      filename: 'Murivest Realty The Nairobi Yield Report Q4 2025.pdf',
      yield: '8.5–9.0%',
      isLatest: false
    },
    {
      quarter: 'Q4',
      year: '2024',
      filename: 'Murivest Realty The Nairobi Yield Report Q3 2025.pdf',
      yield: '7.8–8.5%',
      isLatest: false
    },
    {
      quarter: 'Q1',
      year: '2025',
      filename: 'Murivest Realty The Nairobi Yield Report Q2 2025.pdf',
      yield: '7.5–8.2%',
      isLatest: false
    },
    {
      quarter: 'Q2',
      year: '2025',
      filename: 'Murivest Realty The Nairobi Yield Report Q4 2025.pdf',
      yield: '8.5–9.0%',
      isLatest: false
    },
    {
      quarter: 'Q3',
      year: '2025',
      filename: 'Murivest Realty The Nairobi Yield Report Q3 2025.pdf',
      yield: '7.8–8.5%',
      isLatest: false
    },
    {
      quarter: 'Q4',
      year: '2025',
      filename: 'Murivest Realty The Nairobi Yield Report Q4 2025.pdf',
      yield: '7.5–8.2%',
      isLatest: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Minimal header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="inline-block mb-4">
            <div className="h-px w-10 bg-amber-600 mx-auto mb-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-amber-50 mb-4 tracking-tight">
            Quarterly Market Intelligence for Commercial Real Estate Investors
          </h2>
          <p className="text-amber-100/60 text-sm font-light tracking-wide max-w-lg mx-auto">
            Institutional insights for discerning capital
          </p>
        </motion.div>

        {/* Reports - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reports.map((report, index) => (
            <motion.div
              key={report.quarter}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
            >
              <div
                className={`relative bg-slate-800/40 backdrop-blur-sm border transition-all duration-500 hover:bg-slate-800/60 group ${
                  report.isLatest
                    ? 'border-amber-600/50 shadow-2xl shadow-amber-900/20'
                    : 'border-slate-700/50 hover:border-amber-600/30'
                }`}
              >
                {/* Latest indicator */}
                {report.isLatest && (
                  <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
                )}

                <div className="p-6">
                  {/* Quarter */}
                  <div className="flex items-baseline justify-between mb-6">
                    <div>
                      <div className="text-4xl font-light text-amber-50 mb-1 tracking-tight">
                        {report.quarter}
                      </div>
                      <div className="text-xs text-amber-100/40 tracking-[0.2em] uppercase font-light">
                        {report.year}
                      </div>
                    </div>
                    {report.isLatest && (
                      <div className="flex items-center gap-1.5 text-amber-600">
                        <TrendingUp className="h-3.5 w-3.5" />
                        <span className="text-xs tracking-wider uppercase font-light">Current</span>
                      </div>
                    )}
                  </div>

                  {/* Yield */}
                  <div className="mb-6 pb-5 border-b border-slate-700/50">
                    <div className="text-xs text-amber-100/40 tracking-[0.2em] uppercase mb-2 font-light">
                      Prime Yield Range
                    </div>
                    <div className="text-xl text-amber-50 font-light tracking-tight">
                      {report.yield}
                    </div>
                  </div>

                  {/* Download button */}
                  <motion.a
                    href={`/${report.filename}`}
                    download
                    className={`block w-full py-3 text-center text-xs tracking-[0.15em] uppercase font-light transition-all duration-300 ${
                      report.isLatest
                        ? 'bg-amber-600 text-slate-900 hover:bg-amber-500'
                        : 'bg-slate-700/50 text-amber-100/80 hover:bg-slate-700 hover:text-amber-50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-3">
                      Access Report
                      <Download className="h-3 w-3" />
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal footer */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="inline-block">
            <div className="h-px w-24 bg-amber-600/30 mx-auto mb-6"></div>
            <p className="text-amber-100/30 text-xs tracking-[0.2em] uppercase font-light">
              Confidential • Institutional Access
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YieldReportSection;