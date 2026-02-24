'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, Download, FileText, BarChart3, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const insights = [
  {
    title: "Institutional Office vs Residential Returns",
    excerpt: "Analyzing the yield spread between Grade-A office mandates and prime residential developments in SSA hubs.",
    content: "Prime office yields in Nairobi (7.2-8.5%) and Lagos (7.8-9.2%) demonstrate superior risk-adjusted returns compared to residential assets. Institutional office buildings benefit from NNN leases, creditworthy tenants, and lower vacancy rates. The yield premium has widened to 1.5-2.0% for prime assets.",
    keyPoints: ["Office yields: 7.2-9.2% in Tier-1 Hubs", "Yield premium of 150-200bps for prime offices", "Predictable cash flow via NNN structuring"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    tag: "Yield Analysis"
  },
  {
    title: "Cold Storage & Logistics Infrastructure",
    excerpt: "The explosive demand for temperature-controlled facilities driven by regional food security and e-commerce.",
    content: "East Africa's cold storage capacity is expanding at 25% annually. Institutional investors are viewing warehousing as a defensive asset class, with long-term leases (10-15 years) providing a hedge against macroeconomic volatility.",
    keyPoints: ["8.5-10.5% base warehousing yields", "Cold storage commands 1.5% premium", "Strategic port-adjacent mandates"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200",
    tag: "Logistics"
  },
  {
    title: "Data Centres: The Uncorrelated Frontier",
    excerpt: "Rapid digital transformation creating hyperscale institutional opportunities in Johannesburg and Nairobi.",
    content: "Data centers benefit from 15-20 year contracts with hyperscale tenants. Institutional investors view these as uncorrelated assets with defensive characteristics, offering protection during cyclical downturns.",
    keyPoints: ["7.5-9.0% stabilized yields", "15-20 year contract maturity", "Hyperscale-led tenant profiles"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
    tag: "Digital Infra"
  }
];

const MarketInsightsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Institutional Hero */}
      <section className="relative pt-32 pb-24 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center mb-6"
            >
              <BarChart3 className="h-5 w-5 text-amber-500 mr-4" />
              <span className="text-amber-500 uppercase tracking-[0.4em] text-[10px] font-bold">
                Market Intelligence Unit
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-serif text-white leading-tight mb-8">
              Emerging Asset Classes <br />
              <span className="italic text-slate-400">African Real Estate</span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light mb-12 border-l border-amber-500/30 pl-8 max-w-3xl">
              Deep-dive analysis of institutional-grade opportunities. 
              Proprietary insights for pension trustees, family offices, and sovereign wealth managers 
              seeking risk-adjusted alpha in East African markets.
            </p>

            <div className="flex flex-wrap gap-8">
              {[
                { label: "Institutional Yield Spread", value: "7.5% - 15.2%" },
                { label: "Lease Maturity (Avg)", value: "12-15 Years" },
                { label: "AUM Capacity", value: "$250M+" }
              ].map((m, i) => (
                <div key={i} className="border-t border-slate-800 pt-4">
                  <div className="text-2xl font-light text-white font-mono">{m.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">Sector Performance Analytics</h2>
              <p className="text-slate-500 font-light">Granular reporting on uncorrelated emerging asset classes with proven defensive characteristics.</p>
            </div>
            <button className="px-8 py-4 border border-slate-200 text-[10px] tracking-widest uppercase font-bold hover:bg-slate-950 hover:text-white transition-all duration-500 flex items-center gap-4">
              <Download className="w-4 h-4" />
              Download 2026 Strategy Abstract
            </button>
          </div>

          

          <div className="grid grid-cols-1 gap-24">
            {insights.map((insight, index) => (
              <motion.article 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group grid lg:grid-cols-2 gap-16 items-center border-b border-slate-100 pb-24 last:border-0"
              >
                <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
                  <img 
                    src={insight.image} 
                    alt={insight.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-8 left-8 bg-slate-950/90 backdrop-blur-md px-6 py-2 text-white text-[10px] tracking-[0.3em] uppercase">
                    {insight.tag}
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-3xl md:text-4xl font-serif text-slate-900 group-hover:text-amber-700 transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-light text-lg">
                    {insight.excerpt}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-4">Investment Markers</h4>
                      <ul className="space-y-3">
                        {insight.keyPoints.map((p, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                            <TrendingUp className="w-4 h-4 text-amber-600 mt-1" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-4">Technical Abstract</h4>
                      <p className="text-xs text-slate-500 leading-relaxed italic border-l border-slate-200 pl-4">
                        {insight.content}
                      </p>
                    </div>
                  </div>

                  <Link href={`/market-insights/${index}`} className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-bold text-slate-900 border-b border-amber-500/50 pb-2 hover:gap-6 transition-all">
                    View Technical Note <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional CTA */}
      <section className="py-32 bg-slate-950">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <ShieldCheck className="w-12 h-12 text-amber-500 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
            Request Bespoke Mandate Briefing
          </h2>
          <p className="text-slate-400 text-lg mb-12 font-light max-w-2xl mx-auto">
            Our Research & Strategy team provides custom market intelligence for institutional capital allocation. 
            Access deep-data rooms for specific asset classes.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link href="/contact" className="px-12 py-5 bg-amber-600 text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-xl">
              Initiate Consultation
            </Link>
            <button className="px-12 py-5 border border-white/20 text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-slate-950 transition-all duration-500 flex items-center justify-center gap-4">
              <FileText className="w-4 h-4" />
              Institutional Profile (PDF)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketInsightsPage;