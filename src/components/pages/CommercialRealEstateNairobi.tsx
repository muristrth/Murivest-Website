'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2, TrendingUp, MapPin, Award,
  Crown, Globe, Shield, BarChart3,
  ArrowUpRight, Landmark, Target,
  Users, DollarSign, Calendar
} from 'lucide-react';
import Link from 'next/link';

const CommercialRealEstateNairobi = () => {
  const marketHighlights = [
    {
      icon: Building2,
      title: "Grade A Office Portfolio",
      description: "Premium office buildings in Westlands and Kilimani with institutional-grade specifications and blue-chip tenancy."
    },
    {
      icon: TrendingUp,
      title: "Retail Excellence",
      description: "Prime retail spaces in high-traffic corridors with established anchor tenants and proven revenue streams."
    },
    {
      icon: Landmark,
      title: "Mixed-Use Developments",
      description: "Integrated commercial-residential projects combining office, retail, and hospitality in strategic locations."
    }
  ];

  const investmentMetrics = [
    { label: "Average Cap Rate", value: "8.5%", sub: "Prime Locations" },
    { label: "Occupancy Rate", value: "95%", sub: "Institutional Assets" },
    { label: "Annual Appreciation", value: "12%", sub: "Historical Average" },
    { label: "IRR Potential", value: "18-22%", sub: "Conservative Estimates" }
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
              Nairobi Commercial Real Estate
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <h1 className="text-5xl lg:text-7xl font-serif italic mb-8 leading-tight">
                Prime Commercial <br />
                <span className="text-amber-200/90 font-serif">Real Estate Nairobi</span>
              </h1>
              <p className="max-w-2xl text-slate-400 text-lg leading-relaxed font-light italic border-l border-amber-500/30 pl-8">
                "Nairobi's commercial real estate market represents Africa's most sophisticated investment opportunity,
                with institutional-grade assets delivering consistent returns in East Africa's economic powerhouse."
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

      {/* 3. MARKET OVERVIEW */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
               <MapPin size={16} className="text-amber-500" />
               <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">Market Intelligence</h3>
            </div>
            <h2 className="text-4xl font-serif italic mb-10 leading-tight">
              Nairobi's commercial real estate <br />market leadership.
            </h2>
            <div className="space-y-8 text-slate-400 font-light leading-relaxed">
              <p>
                Nairobi stands as East Africa's <span className="text-white">commercial real estate capital</span>, with a market capitalization exceeding $2.5 billion and institutional-grade assets that rival global benchmarks.
              </p>
              <p>
                Our curated portfolio features <span className="text-white">trophy properties</span> in prime locations, backed by long-term leases with creditworthy tenants and demonstrating consistent rental growth.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 border border-amber-500/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
            <div className="relative overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
                className="w-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                alt="Nairobi CBD Skyline"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#05070a] to-transparent">
                <div className="flex items-center gap-3 text-amber-500">
                  <Award size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">Nairobi CBD • Prime Commercial District</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INVESTMENT SEGMENTS */}
      <section className="bg-white/[0.02] py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif italic mb-4">Investment Segments</h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-500">Diversified Commercial Portfolio</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {marketHighlights.map((segment, index) => (
              <div key={index} className="bg-[#05070a] p-12 hover:bg-white/[0.03] transition-all group">
                <segment.icon className="text-amber-500 mb-8 transition-transform group-hover:scale-110" size={32} strokeWidth={1} />
                <h4 className="text-2xl font-serif italic mb-6">{segment.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light mb-8">
                  {segment.description}
                </p>
                <div className="h-px w-0 bg-amber-500 group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. KEY LOCATIONS */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif italic mb-4">Strategic Locations</h2>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-500">Prime Nairobi Districts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            {
              icon: Building2,
              title: "Westlands",
              desc: "Premium office and retail district with international corporations and high-net-worth residential."
            },
            {
              icon: Landmark,
              title: "Kiliman",
              desc: "Upscale mixed-use development with modern office spaces and luxury residential components."
            },
            {
              icon: Globe,
              title: "CBD Core",
              desc: "Traditional financial district with established commercial buildings and government offices."
            }
          ].map((location, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center mx-auto mb-8 bg-white/[0.02]">
                <location.icon className="text-amber-500" size={24} strokeWidth={1} />
              </div>
              <h4 className="text-xl font-serif italic mb-4">{location.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-widest font-bold px-4">
                {location.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INVESTMENT CASE STUDY */}
      <section className="bg-white/[0.02] py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 size={16} className="text-amber-500" />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">Case Study</h3>
              </div>
              <h2 className="text-4xl font-serif italic mb-10 leading-tight">
                Absa Towers Investment <br />Performance
              </h2>
              <div className="space-y-6">
                <div className="border-l border-amber-500/30 pl-6">
                  <h4 className="text-lg font-serif italic mb-2">Acquisition: Q2 2023</h4>
                  <p className="text-slate-400 text-sm">Prime Grade A office building in Westlands CBD</p>
                </div>
                <div className="border-l border-amber-500/30 pl-6">
                  <h4 className="text-lg font-serif italic mb-2">Current Performance</h4>
                  <p className="text-slate-400 text-sm">95% occupancy, 8.2% cap rate, 18% IRR achieved</p>
                </div>
                <div className="border-l border-amber-500/30 pl-6">
                  <h4 className="text-lg font-serif italic mb-2">Value Appreciation</h4>
                  <p className="text-slate-400 text-sm">35% increase in asset value over 18 months</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 bg-white/[0.02] border border-white/10">
                <h4 className="text-xl font-serif italic mb-4">Investment Highlights</h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-amber-500 rounded-full" />
                    Blue-chip multinational tenants
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-amber-500 rounded-full" />
                    15-year weighted average lease term
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-amber-500 rounded-full" />
                    Modern building specifications
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-amber-500 rounded-full" />
                    Prime location accessibility
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="border-t border-white/10">
        <Link href="/contact" className="group flex flex-col items-center py-32 hover:bg-white/[0.02] transition-colors">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-amber-500 mb-8">Secure Your Position</span>
          <h2 className="text-5xl lg:text-7xl font-serif italic text-center mb-12">
            Invest in Nairobi's <br />Commercial Future
          </h2>
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] border-b border-amber-500 pb-2 group-hover:gap-8 transition-all duration-500">
            Request Investment Memorandum <ArrowUpRight size={16} />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default CommercialRealEstateNairobi;