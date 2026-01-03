'use client';

import React from 'react';
import Link from 'next/link';

const ResearchPreview = () => {
  return (
    <section className="py-32 bg-slate-950 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.4em] uppercase text-slate-400 mb-6">
            Market Intelligence
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Institutional Research <br />
            <span className="italic text-slate-400">Preview</span>
          </h2>
        </div>

        {/* Data Preview Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Yield Trends */}
          <div className="bg-white/5 border border-white/10 p-8 rounded">
            <h3 className="text-lg font-serif mb-6 text-amber-400">Q4 2024 Yield Trends</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-slate-400">Prime Office CBD</span>
                <span className="text-white font-bold">8.2%</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-slate-400">Logistics Parks</span>
                <span className="text-white font-bold">9.1%</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-slate-400">Retail Malls</span>
                <span className="text-white font-bold">8.7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Industrial Estates</span>
                <span className="text-white font-bold">8.9%</span>
              </div>
            </div>
            <p className="text-slate-500 text-xs mt-4">Net Initial Yields • Nairobi Market</p>
          </div>

          {/* Vacancy Rates */}
          <div className="bg-white/5 border border-white/10 p-8 rounded">
            <h3 className="text-lg font-serif mb-6 text-amber-400">Vacancy Analysis</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-slate-400">Grade A Office</span>
                <span className="text-white font-bold">4.1%</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-slate-400">Logistics</span>
                <span className="text-white font-bold">2.8%</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-slate-400">Retail</span>
                <span className="text-white font-bold">6.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Industrial</span>
                <span className="text-white font-bold">3.5%</span>
              </div>
            </div>
            <p className="text-slate-500 text-xs mt-4">Q4 2024 • Institutional Grade Assets</p>
          </div>

          {/* Transaction Volume */}
          <div className="bg-white/5 border border-white/10 p-8 rounded">
            <h3 className="text-lg font-serif mb-6 text-amber-400">Market Activity</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-serif text-amber-400 mb-2">$127M</div>
                <p className="text-slate-400 text-sm">Q4 Transaction Volume</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-amber-400 mb-2">23</div>
                <p className="text-slate-400 text-sm">Institutional Deals Closed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-amber-400 mb-2">8.5%</div>
                <p className="text-slate-400 text-sm">Average Cap Rate</p>
              </div>
            </div>
            <p className="text-slate-500 text-xs mt-4">East Africa Commercial Real Estate</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            Access complete quarterly intelligence packs covering infrastructure corridors,
            regulatory developments, and post-tax return modeling.
          </p>

          <Link
            href="/research"
            className="px-12 py-4 border border-amber-500/60 text-amber-300 text-xs tracking-[0.3em] uppercase hover:bg-amber-500 hover:text-slate-950 transition"
          >
            Request Full Intelligence Pack
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResearchPreview;
