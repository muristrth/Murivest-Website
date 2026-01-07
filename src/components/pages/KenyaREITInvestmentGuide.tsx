'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2, TrendingUp, Shield, Award,
  Crown, Globe, BarChart3, Target,
  ArrowUpRight, Landmark, DollarSign,
  Users, CheckCircle
} from 'lucide-react';
import Link from 'next/link';

const KenyaREITInvestmentGuide = () => {
  const reitBenefits = [
    {
      icon: Shield,
      title: "Regulatory Framework",
      description: "CMA-regulated REITs with strict governance standards and investor protection measures."
    },
    {
      icon: DollarSign,
      title: "Tax Advantages",
      description: "Preferential tax treatment with corporate tax exemptions and dividend tax benefits."
    },
    {
      icon: TrendingUp,
      title: "Liquidity & Diversification",
      description: "Publicly traded securities providing liquidity and portfolio diversification benefits."
    }
  ];

  const investmentMetrics = [
    { label: "Market Cap", value: "$500M+", sub: "Listed REITs" },
    { label: "Dividend Yield", value: "6-8%", sub: "Annual Average" },
    { label: "Growth Rate", value: "15%", sub: "Annual CAGR" },
    { label: "Regulatory Compliance", value: "100%", sub: "CMA Standards" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-light selection:bg-amber-500/30">

      {/* 1. HERO HEADER */}
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
              Kenya REIT Investment Guide
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <h1 className="text-5xl lg:text-7xl font-serif italic mb-8 leading-tight">
                Kenya REIT <br />
                <span className="text-amber-200/90 font-serif">Investment Framework</span>
              </h1>
              <p className="max-w-2xl text-slate-400 text-lg leading-relaxed font-light italic border-l border-amber-500/30 pl-8">
                "Kenya's REIT market represents a sophisticated investment vehicle, combining real estate exposure with
                the liquidity and regulatory oversight of publicly traded securities."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MARKET METRICS */}
      <section className="border-y border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-px lg:bg-white/10">
          {investmentMetrics.map((stat, i) => (
            <div key={i} className="bg-[#05070a] lg:p-12 text-center lg:text-left transition-colors hover:bg-white/[0.02]">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-4">{stat.label}</p>
              <h2 className="text-5xl lg:text-6xl font-serif italic mb-2 tracking-tighter">{stat.value}</h2>
              <p className="text-slate-600 text-[10px] uppercase tracking-widest">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. REIT OVERVIEW */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
               <Building2 size={16} className="text-amber-500" />
               <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">Investment Vehicle</h3>
            </div>
            <h2 className="text-4xl font-serif italic mb-10 leading-tight">
              Real Estate Investment Trusts <br />in Kenya's Growing Market
            </h2>
            <div className="space-y-8 text-slate-400 font-light leading-relaxed">
              <p>
                Kenya's REIT framework, established under the Capital Markets Authority, provides institutional investors with
                <span className="text-white"> regulated access to commercial real estate</span> through publicly traded securities.
              </p>
              <p>
                Our REIT investment strategies focus on <span className="text-white">diversified portfolios</span> of prime commercial assets,
                delivering stable income streams and long-term capital appreciation.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 border border-amber-500/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
            <div className="relative overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200"
                className="w-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                alt="Nairobi Financial Market"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#05070a] to-transparent">
                <div className="flex items-center gap-3 text-amber-500">
                  <Award size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">NSE Listed • CMA Regulated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY BENEFITS */}
      <section className="bg-white/[0.02] py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif italic mb-4">Strategic Advantages</h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-500">Why Invest in Kenya REITs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {reitBenefits.map((benefit, index) => (
              <div key={index} className="bg-[#05070a] p-12 hover:bg-white/[0.03] transition-all group">
                <benefit.icon className="text-amber-500 mb-8 transition-transform group-hover:scale-110" size={32} strokeWidth={1} />
                <h4 className="text-2xl font-serif italic mb-6">{benefit.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light mb-8">
                  {benefit.description}
                </p>
                <div className="h-px w-0 bg-amber-500 group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INVESTMENT PROCESS */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif italic mb-4">Investment Process</h2>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-500">Institutional-Grade REIT Investment</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            {
              icon: Target,
              title: "Due Diligence",
              desc: "Comprehensive asset evaluation and portfolio analysis by our investment committee."
            },
            {
              icon: Users,
              title: "Portfolio Construction",
              desc: "Strategic allocation across property sectors and geographic locations for optimal diversification."
            },
            {
              icon: BarChart3,
              title: "Performance Monitoring",
              desc: "Continuous monitoring and reporting of REIT performance against benchmarks."
            }
          ].map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center mx-auto mb-8 bg-white/[0.02]">
                <step.icon className="text-amber-500" size={24} strokeWidth={1} />
              </div>
              <h4 className="text-xl font-serif italic mb-4">{step.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-widest font-bold px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="border-t border-white/10">
        <Link href="/contact" className="group flex flex-col items-center py-32 hover:bg-white/[0.02] transition-colors">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-amber-500 mb-8">Access Exclusive Opportunities</span>
          <h2 className="text-5xl lg:text-7xl font-serif italic text-center mb-12">
            Invest in Kenya's <br />REIT Future
          </h2>
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] border-b border-amber-500 pb-2 group-hover:gap-8 transition-all duration-500">
            Request REIT Investment Memorandum <ArrowUpRight size={16} />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default KenyaREITInvestmentGuide;