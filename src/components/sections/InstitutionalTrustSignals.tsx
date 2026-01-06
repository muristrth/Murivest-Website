'use client';

import React from 'react';
import { ShieldCheck, Globe, Scale, Lock } from 'lucide-react';

const InstitutionalTrustSignals = () => {
  return (
    <section className="py-24 bg-slate-950 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-6">
            <ShieldCheck className="h-10 w-10 text-amber-500/50" strokeWidth={1} />
            <div>
              <p className="text-[11px] tracking-[0.4em] uppercase text-white font-bold mb-1">
                Institutional Governance
              </p>
              <p className="text-[10px] tracking-widest uppercase text-slate-500">
                Confidential Mandates • IC-Safe Process • Fiduciary Stewardship
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-slate-400 text-[10px] tracking-widest uppercase font-semibold">
            <div className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-amber-500/40" /> 
              <span>Nairobi • London • Dubai</span>
            </div>
            <div className="flex items-center gap-3">
              <Scale className="h-4 w-4 text-amber-500/40" /> 
              <span>CMA • RICS • KRA Compliant</span>
            </div>
            <div className="flex items-center gap-3 col-span-2 md:col-span-1">
              <Lock className="h-4 w-4 text-amber-500/40" /> 
              <span>Bank-Grade Confidentiality</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-[9px] text-slate-600 uppercase tracking-[0.3em] leading-relaxed max-w-4xl mx-auto">
            Murivest Realty Group is an independent advisory firm. We do not offer unlicensed financial products or pool capital from the general public. All engagements are by mandate only and subject to rigorous KYC/AML verification.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalTrustSignals;
