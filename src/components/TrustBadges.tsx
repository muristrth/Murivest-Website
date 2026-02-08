'use client';

import React from 'react';
import { Shield, Award, CheckCircle, Building2 } from 'lucide-react';

const affiliations = [
  {
    name: 'RICS',
    fullName: 'Royal Institution of Chartered Surveyors',
    description: 'Global professional body for chartered surveyors',
    icon: Award,
  },
  {
    name: 'CMA',
    fullName: 'Capital Markets Authority',
    description: 'Kenya\'s financial sector regulator',
    icon: Building2,
  },
  {
    name: 'KRA',
    fullName: 'Kenya Revenue Authority',
    description: 'Tax compliance and regulatory adherence',
    icon: Shield,
  },
  {
    name: 'LSK',
    fullName: 'Law Society of Kenya',
    description: 'Legal partnership and compliance network',
    icon: CheckCircle,
  },
];

const TrustBadges = () => {
  return (
    <section className="py-24 bg-slate-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
              Regulatory Compliance
            </span>
            <div className="h-px w-8 bg-amber-500" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif italic text-white mb-4">
            Operating at <span className="text-amber-200/80">Institutional Standards</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-light">
            Murivest maintains the highest levels of regulatory compliance and professional accreditation.
          </p>
        </div>

        {/* Trust badges grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {affiliations.map((affiliation, i) => (
            <div 
              key={i}
              className="group p-8 bg-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-all duration-500 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 border border-white/10 flex items-center justify-center group-hover:border-amber-500/50 transition-colors">
                <affiliation.icon className="text-amber-500" size={28} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-serif italic text-white mb-3">{affiliation.name}</h3>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">{affiliation.fullName}</p>
              <p className="text-sm text-slate-400 font-light">{affiliation.description}</p>
            </div>
          ))}
        </div>

        {/* Compliance statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 border border-amber-500/20 bg-amber-500/5">
            <Shield className="text-amber-500" size={18} strokeWidth={1} />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
              Full Regulatory Compliance • KRA Tax Compliant • CMA Registered Advisor
            </span>
          </div>
        </div>

        {/* Partnership logos placeholder */}
        <div className="mt-16 pt-16 border-t border-white/5">
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-slate-600 mb-8">
            Strategic Partnerships & Networks
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Placeholder partnership indicators - replace with actual logos */}
            {['International Valuation Standards', 'African Real Estate Society', 'World Bank IFC Standards'].map((partner, i) => (
              <div key={i} className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
