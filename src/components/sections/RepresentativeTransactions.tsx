'use client';

import React from 'react';

const transactions = [
  'UK Family Office — USD 18M Industrial Acquisition (Nairobi)',
  'Regional Pension Scheme — Sale-Leaseback Advisory',
  'Kenyan Corporate Group — Strategic Land Banking (120 Acres)',
];

const RepresentativeTransactions = () => {
  return (
    <section className="py-32 bg-slate-950 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-[10px] tracking-[0.4em] uppercase text-slate-400 mb-6">
            Track Record
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Representative <br />
            <span className="italic text-slate-300">Mandates</span>
          </h2>
        </div>

        <ul className="space-y-6 text-slate-300 text-sm">
          {transactions.map((t, i) => (
            <li key={i} className="border-l-2 border-amber-500 pl-6">
              {t}
            </li>
          ))}
        </ul>

        <p className="text-slate-400 text-xs mt-8">
          Transactions shown are representative and anonymized.
        </p>
      </div>
    </section>
  );
};

export default RepresentativeTransactions;
