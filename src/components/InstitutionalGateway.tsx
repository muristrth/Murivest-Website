'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  BarChart3, 
  Building2, 
  FileText, 
  ArrowRight, 
  Lock,
  Globe,
  Scale,
  Zap,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import InstitutionalEngagementModel from './sections/InstitutionalEngagementModel';

const InstitutionalGateway = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-light selection:bg-amber-500/30">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
              Institutional Advisory Mandates
            </span>
          </motion.div>

          <h1 className="text-5xl lg:text-8xl font-serif italic mb-8 leading-[0.9]">
            The Fiduciary Bridge to <br />
            <span className="text-amber-200/90 font-serif">East African Real Assets</span>
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-12 items-end mt-16">
            <p className="text-slate-400 text-xl leading-relaxed font-light italic border-l border-amber-500/30 pl-8">
              Murivest facilitates commercial real estate mandates for institutional and private capital providers. 
              We focus on origination, technical underwriting, and structural execution in the East African real asset sector.
            </p>
            
            <div className="flex gap-4">
              <a href="/institutional-portal" className="px-8 py-4 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-amber-400 transition-all duration-500">
                Access Institutional Data
              </a>
              <a href="/uk-properties" className="px-8 py-4 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white/5 transition-all duration-500 flex items-center gap-2">
                View UK Portfolio <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Criteria */}
      <section id="qualification" className="py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24">
            
            {/* Qualified Entities */}
            <div>
              <h2 className="text-[10px] tracking-[0.4em] uppercase text-amber-500 font-bold mb-8">Qualification Parameters</h2>
              <h3 className="text-4xl font-serif italic mb-12">Who We Partner With</h3>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Institutional Allocators",
                    desc: "Regional pension funds and insurance groups seeking yield-anchored real asset exposure.",
                    criteria: "Target: USD 10M - 50M"
                  },
                  {
                    title: "Family Offices",
                    desc: "SFOs and MFOs requiring discreet, off-market origination and asset stewardship.",
                    criteria: "Target: USD 5M - 15M"
                  },
                  {
                    title: "Corporate Owners",
                    desc: "Strategic advisory for asset recycling and sale-leaseback recapitalization.",
                    criteria: "Ticket: USD 5M+"
                  }
                ].map((item, i) => (
                  <div key={i} className="group border-b border-white/5 pb-8">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-serif text-white group-hover:text-amber-300 transition-colors">{item.title}</h4>
                      <span className="text-[10px] font-bold text-amber-500/60 uppercase tracking-widest">{item.criteria}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-Target Audience */}
            <div className="bg-white/[0.02] border border-white/10 p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <XCircle size={120} />
              </div>
              <h3 className="text-2xl font-serif italic mb-8">Non-Target Segmentation</h3>
              <p className="text-slate-500 text-sm mb-12 leading-relaxed">
                To maintain fiduciary integrity and execution quality, Murivest does not provide services for:
              </p>
              
              <ul className="space-y-6">
                {[
                  "Retail or individual residential property buyers",
                  "Speculative land flipping without development intent",
                  "Unregulated pooled capital schemes",
                  "Transactions below USD 5M threshold (except for specific portfolio bolt-ons)"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-400 text-sm">
                    <XCircle size={16} className="text-red-500/50 mt-1 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-xs text-slate-500 italic">
                  * Murivest operates exclusively on a mandate-basis for professional and institutional clients.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Asset Classes Served */}
      <section className="py-32 bg-white/[0.01] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-[10px] tracking-[0.4em] uppercase text-amber-500 font-bold mb-4">Asset Focus</h2>
            <h3 className="text-4xl md:text-5xl font-serif italic">Institutional Asset Classes</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Logistics & Light Industrial",
                icon: Building2,
                desc: "Grade-A warehousing, cold storage, and manufacturing hubs across key regional corridors."
              },
              {
                title: "Grade-A Office",
                icon: Globe,
                desc: "Prime CBD and secondary business district assets with long-term WALE and institutional tenants."
              },
              {
                title: "Sale-Leaseback Structures",
                icon: Scale,
                desc: "Capital recycling for corporate owners through structured long-term lease arrangements."
              },
              {
                title: "Strategic Land Banking",
                icon: Zap,
                desc: "De-risked land assembly for industrial development and master-planned urban projects."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-900/50 border border-white/5 hover:border-amber-500/30 transition-all duration-500 group">
                <item.icon size={32} className="text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-lg font-serif mb-4">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <InstitutionalEngagementModel />

      {/* Form Section */}
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif italic mb-4">Request Institutional Briefing</h2>
            <p className="text-slate-400 text-sm">
              Connect with our advisory team to discuss specific mandates and access our confidential deal pipeline.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-amber-500 outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Institution / Family Office</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-amber-500 outline-none transition-colors" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Work Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-amber-500 outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Interest Area</label>
                <select className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-amber-500 outline-none transition-colors text-slate-400">
                  <option>Select Asset Class</option>
                  <option>Logistics / Industrial</option>
                  <option>Commercial Office</option>
                  <option>Retail / Mixed Use</option>
                  <option>Strategic Land</option>
                  <option>Portfolio Advisory</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Indicative Ticket Size / Mandate</label>
              <select className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-amber-500 outline-none transition-colors text-slate-400">
                <option>Select Range</option>
                <option>USD 5M - 10M</option>
                <option>USD 10M - 25M</option>
                <option>USD 25M - 50M</option>
                <option>USD 50M - 100M+</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Additional Requirements</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-amber-500 outline-none transition-colors resize-none"></textarea>
            </div>

            <div className="pt-4">
              <button className="w-full py-4 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-amber-400 transition-all duration-500">
                Submit Institutional Inquiry
              </button>
            </div>

            <p className="text-[9px] text-slate-500 text-center leading-relaxed">
              By submitting this form, you acknowledge that Murivest Realty Group operates under strict confidentiality protocols. Your information will be handled in accordance with our institutional data protection policy.
            </p>
          </form>
        </div>
      </section>

      {/* Trust Signal: Confidential Portal Link */}
      <section className="bg-slate-900/50 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <Lock size={20} className="text-amber-500" />
            <span className="text-slate-400 text-xs tracking-wider">Existing partners can access the secure portal for real-time reporting.</span>
          </div>
          <a href="/institutional-portal" className="text-[10px] font-bold uppercase tracking-widest text-amber-500 hover:text-white transition-colors flex items-center gap-2">
            Investor Portal Access <ArrowRight size={14} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default InstitutionalGateway;
