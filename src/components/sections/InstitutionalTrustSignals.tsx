'use client';

import React from 'react';
import { ShieldCheck, Globe, Scale } from 'lucide-react';

const InstitutionalTrustSignals = () => {
  return (
    <section className="py-24 bg-slate-950 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex items-center gap-6">
          <ShieldCheck className="h-10 w-10 text-slate-400" />
          <p className="text-[11px] tracking-widest uppercase text-slate-400">
            Institutional Governance • Confidential Mandates • IC-Safe Process
          </p>
        </div>

        <div className="flex items-center gap-8 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" /> Nairobi • London • Dubai
          </div>
          <div className="flex items-center gap-2">
            <Scale className="h-4 w-4" /> KRA • RICS • Legal Counsel
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalTrustSignals;
