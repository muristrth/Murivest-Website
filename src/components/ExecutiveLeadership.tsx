'use client';

import { useState } from 'react';
import { Shield, Crown, Building2, Target, Briefcase, Lock, Eye, ArrowUpRight, Globe } from 'lucide-react';

const ExecutiveLeadership = () => {
  return (
    /* LAYOUT ADJUSTMENT: 
       pt-28 (7rem) or pt-32 (8rem) ensures the page starts 
       well below a fixed navigation header. 
    */
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-amber-500/30 pt-28 pb-20">
      
      {/* 1. Institutional Trust Bar */}
      <section className="bg-slate-950 py-4 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500">
            <div className="flex items-center gap-3">
              <Shield size={14} className="text-amber-500" />
              <span>Underwriting: Lloyd's of London</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe size={14} className="text-amber-500" />
              <span>Swiss Banking Compliance</span>
            </div>
            <div className="flex items-center gap-3">
              <Lock size={14} className="text-amber-500" />
              <span>Institutional Grade Mandates</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Restricted Mandate Header */}
      <section className="bg-white/[0.02] py-20 border-b border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-amber-500 uppercase tracking-[0.5em] text-[10px] font-bold mb-4">
            Authorized Personnel Only
          </p>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 tracking-tight">
            Executive <span className="italic text-amber-200/90">Leadership</span>
          </h1>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-6" />
          <p className="text-slate-400 font-light text-sm tracking-[0.2em] uppercase">
            Mandate Stewardship • Risk Mitigation • Capital Appreciation
          </p>
        </div>
      </section>

      {/* 3. Leadership Philosophy */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <div className="inline-block p-4 border border-amber-500/20 rounded-full mb-10">
                <Crown size={32} className="text-amber-500" />
              </div>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight leading-tight">
                Heritage. <span className="italic text-amber-200/60">Stewardship.</span> Alpha.
              </h2>
              <p className="text-xl font-light leading-relaxed max-w-4xl mx-auto text-slate-400">
                Murivest acts as a fiduciary for sovereign funds and private family offices. 
                We do not simply trade real estate; we manage <span className="text-white italic">multi-generational asset mandates</span> with surgical precision.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { val: "$50M+", label: "Capital Stewarded", sub: "East African Real Estate Assets", icon: Building2 },
                { val: "22%", label: "Target IRR", sub: "Historical Asset Yield Performance", icon: Target },
                { val: "23", label: "Nations Represented", sub: "Global Institutional Network", icon: Globe }
              ].map((stat, i) => (
                <div key={i} className="group p-10 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                    <stat.icon size={48} />
                  </div>
                  <div className="text-5xl font-serif text-amber-500 mb-4">{stat.val}</div>
                  <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white mb-2">{stat.label}</div>
                  <div className="text-xs text-slate-500 font-light tracking-wide">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Executive Profiles */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-40">
            {[
              {
                name: "Mark Muriithi",
                role: "Managing Director & CEO",
                creds: "BBIT • CFA (L-II) • ONAMA Delegate",
                image: "/CEO.Founder.jpg",
                commitment: "Target: KSh 1B Asset Valuation by 2027",
                bio: "A third-generation steward of East African capital. Mark combines technical BBIT foundations with institutional MBA strategies to position Murivest as a billion-shilling mandate holder.",
                history: ["Growth Capital Ltd (USA)", "BF Suma Pharmaceuticals"]
              },
              {
                name: "Dr. Grace Wanjiku",
                role: "Portfolio Strategy & Risk",
                creds: "PhD Finance • ICIFA Registered Member",
                image: "/murivest_secretary.png",
                commitment: "22% Annualized Multi-Asset Performance",
                bio: "With over 15 years in private equity and asset management, Dr. Wanjiku spearheads fund structuring and risk mitigation for institutional alumni networks.",
                history: ["ICEA Lion Asset Management", "World Bank Advisory"]
              }
            ].map((exec, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-4 border border-amber-500/20 group-hover:inset-0 transition-all duration-700 pointer-events-none" />
                  <div className="aspect-[4/5] bg-slate-900 grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden border border-white/10">
                    <img src={exec.image} alt={exec.name} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000" />
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <p className="text-amber-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-4">{exec.role}</p>
                  <h3 className="text-5xl font-serif mb-4 leading-tight">{exec.name}</h3>
                  <p className="text-slate-500 text-xs tracking-widest mb-10">{exec.creds}</p>
                  <p className="text-slate-400 font-light leading-loose text-lg mb-12 italic">"{exec.bio}"</p>
                  
                  <div className="space-y-6">
                    <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white flex items-center gap-3">
                       <Briefcase size={14} className="text-amber-500" />
                       Institutional Tenure
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {exec.history.map((h, i) => (
                        <div key={i} className="flex items-center gap-4 text-sm text-slate-500 border-b border-white/5 pb-3 italic">
                           {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="py-40 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
             <Eye size={40} className="text-amber-500 mx-auto mb-10 opacity-50" />
             <h2 className="text-5xl md:text-6xl font-serif mb-8 tracking-tight">
               Initiate <span className="italic text-amber-200/60">Discretionary</span> Mandate
             </h2>
             <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <button className="px-12 py-6 bg-amber-600 hover:bg-amber-500 text-slate-950 text-[10px] tracking-[0.4em] uppercase font-bold transition-all flex items-center gap-4 shadow-2xl">
                   Secure Consultation <ArrowUpRight size={14} />
                </button>
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">
                   Priority Line: <span className="text-white">+254 115 277 610</span>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveLeadership;