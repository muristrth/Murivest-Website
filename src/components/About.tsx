'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Eye, Award, Users, Shield, 
  Crown, Globe, TrendingUp, Building2, 
  Landmark, ArrowUpRight, BarChart3,
  Link
} from 'lucide-react';

const About = () => {
  const institutionalValues = [
    {
      icon: Crown,
      title: "Heritage & Legacy",
      description: "Built on time-tested investment principles, architecting generational wealth through unwavering commitment to excellence."
    },
    {
      icon: Shield,
      title: "Fiduciary Excellence", 
      description: "Operating under the highest institutional standards with complete transparency and regulatory compliance."
    },
    {
      icon: Landmark,
      title: "Institutional Grade",
      description: "A portfolio of trophy assets vetted through rigorous due diligence processes typical of top-tier global firms."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-light selection:bg-amber-500/30">
      
      {/* 1. EDITORIAL HERO HEADER */}
      <section className="relative pt-40 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
              The Murivest Authority
            </span>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <h1 className="text-5xl lg:text-7xl font-serif italic mb-8 leading-tight">
                East Africa's <br />
                <span className="text-amber-200/90 font-serif">Investment Authority</span>
              </h1>
              <p className="max-w-2xl text-slate-400 text-lg leading-relaxed font-light italic border-l border-amber-500/30 pl-8">
                "Murivest Realty Group stands as the premier gateway for institutional capital, 
                serving the world's most discerning family offices and sovereign funds."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE PERFORMANCE METRICS (STARK & BOLD) */}
      <section className="border-y border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-px lg:bg-white/10">
          {[
            { label: "Assets Managed", value: "$50M+", sub: "Institutional Grade" },
            { label: "Average IRR", value: "22%", sub: "Annualized Performance" },
            { label: "Global Reach", value: "45+", sub: "Countries Represented" },
            { label: "Client Retention", value: "100%", sub: "Fiduciary Trust" }
          ].map((stat, i) => (
            <div key={i} className="bg-[#05070a] lg:p-12 text-center lg:text-left transition-colors hover:bg-white/[0.02]">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-4">{stat.label}</p>
              <h2 className="text-5xl lg:text-6xl font-serif italic mb-2 tracking-tighter">{stat.value}</h2>
              <p className="text-slate-600 text-[10px] uppercase tracking-widest">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LEGACY & INTEL GRID */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
               <Landmark size={16} className="text-amber-500" />
               <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">The Legacy</h3>
            </div>
            <h2 className="text-4xl font-serif italic mb-10 leading-tight">
              Decades of expertise in <br />Global Capital Markets.
            </h2>
            <div className="space-y-8 text-slate-400 font-light leading-relaxed">
              <p>
                Founded by former investment bankers with a combined <span className="text-white">40-year tenure</span> in international hubs, Murivest bridges the gap between traditional wealth management and Africa's emerging high-yield opportunities.
              </p>
              <p>
                We do not simply broker transactions; we architect <span className="text-white">generational wealth</span>. Our intelligence-driven approach secures trophy assets before they ever reach the public market.
              </p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 border border-amber-500/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
            <div className="relative overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200" 
                className="w-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                alt="Nairobi Financial District"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#05070a] to-transparent">
                <div className="flex items-center gap-3 text-amber-500">
                  <Award size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">Financial Times Recognized • 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INSTITUTIONAL VALUES (SMALL CARDS) */}
      <section className="bg-white/[0.02] py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {institutionalValues.map((value, index) => (
              <div key={index} className="bg-[#05070a] p-12 hover:bg-white/[0.03] transition-all group">
                <value.icon className="text-amber-500 mb-8 transition-transform group-hover:scale-110" size={32} strokeWidth={1} />
                <h4 className="text-2xl font-serif italic mb-6">{value.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light mb-8">
                  {value.description}
                </p>
                <div className="h-px w-0 bg-amber-500 group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC POSITIONING */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif italic mb-4">Strategic Positioning</h2>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-500">Market Intelligence Authority</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { 
              icon: Shield, 
              title: "Risk Mitigation", 
              desc: "Comprehensive due diligence leveraging deep local intelligence to minimize volatility." 
            },
            { 
              icon: Users, 
              title: "Dedicated Advisory", 
              desc: "Personalized portfolio management for family offices and institutional funds." 
            },
            { 
              icon: BarChart3, 
              title: "Alpha Generation", 
              desc: "Access to exclusive off-market trophy properties that outperform market benchmarks." 
            }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center mx-auto mb-8 bg-white/[0.02]">
                <item.icon className="text-amber-500" size={24} strokeWidth={1} />
              </div>
              <h4 className="text-xl font-serif italic mb-4">{item.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-widest font-bold px-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="border-t border-white/10">
        <Link href="/contact" className="group flex flex-col items-center py-32 hover:bg-white/[0.02] transition-colors">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-amber-500 mb-8">Partner with the Authority</span>
          <h2 className="text-5xl lg:text-7xl font-serif italic text-center mb-12">
            Architect Your <br />Generational Legacy
          </h2>
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] border-b border-amber-500 pb-2 group-hover:gap-8 transition-all duration-500">
            Request Private Briefing <ArrowUpRight size={16} />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default About;