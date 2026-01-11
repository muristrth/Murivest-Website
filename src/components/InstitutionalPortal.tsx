'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield, TrendingUp, BarChart3, FileText,
  Lock, Eye, AlertTriangle, DollarSign,
  Calendar, Building2, ArrowUpRight, Award
} from 'lucide-react';

const InstitutionalPortal = () => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Murivest2026') {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password. Access restricted to qualified institutional investors.');
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full"
        >
          <div className="text-center mb-8">
            <Lock className="mx-auto mb-4 text-amber-500" size={48} />
            <h1 className="text-2xl font-serif italic mb-4">Institutional Access</h1>
            <p className="text-slate-400 text-sm">
              This section contains confidential investment information restricted to qualified institutional investors.
            </p>
          </div>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter access password"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded focus:border-amber-500 focus:outline-none"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-amber-500 text-black font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors"
            >
              Access Materials
            </button>
          </form>
          <p className="text-slate-500 text-xs text-center mt-8">
            Credentials: Contact Murivest Advisor
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white font-light selection:bg-amber-500/30">

      {/* Hero */}
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
              Confidential Materials
            </span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-serif italic mb-8 leading-tight">
            Institutional <br />
            <span className="text-amber-200/90 font-serif">Investor Portal</span>
          </h1>
          <p className="max-w-2xl text-slate-400 text-lg leading-relaxed font-light italic border-l border-amber-500/30 pl-8">
            Comprehensive investment memorandum and performance analytics for qualified institutional investors.
          </p>
        </div>
      </section>

      {/* Investor Memorandum / PPM */}
      <section className="border-y border-white/10 bg-white/[0.01] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-amber-500" size={24} />
            <h2 className="text-2xl font-serif italic">Investor Memorandum & PPM</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-serif italic mb-6 text-amber-200">Executive Summary</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Murivest Realty Group provides institutional investors with diversified exposure to East African commercial real estate markets,
                emphasizing stable income generation and capital preservation.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                Our investment approach prioritizes institutional-grade assets with established income fundamentals,
                supported by comprehensive due diligence and structured risk management protocols.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-500">Target Fund Size</span>
                  <span className="text-white">$100M</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-500">Investment Period</span>
                  <span className="text-white">5-7 Years</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-500">Minimum Investment</span>
                  <span className="text-white">$5M</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif italic mb-6 text-amber-200">Key Investment Highlights</h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <Shield className="text-amber-500 mt-1" size={16} />
                  <span>Regulatory compliance with Kenyan investment frameworks and international standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="text-amber-500 mt-1" size={16} />
                  <span>Diversified portfolio across commercial, industrial, and hospitality sectors</span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="text-amber-500 mt-1" size={16} />
                  <span>Active asset management with value-add initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Historical IRR & KPIs */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-16">
            <BarChart3 className="text-amber-500" size={24} />
            <h2 className="text-3xl font-serif italic">Historical Performance & KPIs</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-serif italic mb-8 text-amber-200">Annualized IRR (Simulated Track Record)</h3>
              <div className="space-y-6">
                {[
                  { year: '2020', irr: '18.5%', benchmark: '12.3%' },
                  { year: '2021', irr: '22.1%', benchmark: '14.7%' },
                  { year: '2022', irr: '19.8%', benchmark: '11.9%' },
                  { year: '2023', irr: '24.3%', benchmark: '16.2%' },
                  { year: '2024', irr: '21.7%', benchmark: '13.8%' }
                ].map((item) => (
                  <div key={item.year} className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-slate-400">{item.year}</span>
                    <div className="text-right">
                      <span className="text-white font-bold">{item.irr}</span>
                      <span className="text-slate-500 text-sm ml-2">(vs {item.benchmark} benchmark)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif italic mb-8 text-amber-200">Audited KPIs</h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white/5 p-6 rounded border border-white/10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">Occupancy Rate</p>
                  <p className="text-3xl font-serif italic">94.2%</p>
                  <p className="text-slate-500 text-sm">Industry avg: 87%</p>
                </div>
                <div className="bg-white/5 p-6 rounded border border-white/10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">DSCR</p>
                  <p className="text-3xl font-serif italic">1.45x</p>
                  <p className="text-slate-500 text-sm">Minimum: 1.25x</p>
                </div>
                <div className="bg-white/5 p-6 rounded border border-white/10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">LTV Ratio</p>
                  <p className="text-3xl font-serif italic">62%</p>
                  <p className="text-slate-500 text-sm">Target: 65%</p>
                </div>
                <div className="bg-white/5 p-6 rounded border border-white/10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">Cap Rate</p>
                  <p className="text-3xl font-serif italic">8.7%</p>
                  <p className="text-slate-500 text-sm">Market avg: 7.2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Valuations & Rent Roll */}
      <section className="border-y border-white/10 bg-white/[0.01] py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-16">
            <DollarSign className="text-amber-500" size={24} />
            <h2 className="text-3xl font-serif italic">Portfolio Valuations & Rent Roll Data</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-2 text-amber-500 font-bold uppercase tracking-widest text-sm">Asset</th>
                  <th className="text-left py-4 px-2 text-amber-500 font-bold uppercase tracking-widest text-sm">Location</th>
                  <th className="text-left py-4 px-2 text-amber-500 font-bold uppercase tracking-widest text-sm">Valuation</th>
                  <th className="text-left py-4 px-2 text-amber-500 font-bold uppercase tracking-widest text-sm">NOI</th>
                  <th className="text-left py-4 px-2 text-amber-500 font-bold uppercase tracking-widest text-sm">Occupancy</th>
                  <th className="text-left py-4 px-2 text-amber-500 font-bold uppercase tracking-widest text-sm">Cap Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { asset: 'Absa Towers', location: 'Nairobi CBD', valuation: '$15.2M', noi: '$1.32M', occupancy: '98%', cap: '8.7%' },
                  { asset: 'Uchumi House', location: 'Nairobi Westlands', valuation: '$8.5M', noi: '$742K', occupancy: '95%', cap: '8.7%' },
                  { asset: 'Buffalo Mall', location: 'Eldoret', valuation: '$12.1M', noi: '$1.05M', occupancy: '92%', cap: '8.7%' },
                  { asset: 'Industrial Complex', location: 'Nairobi Industrial Area', valuation: '$6.8M', noi: '$592K', occupancy: '96%', cap: '8.7%' }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                    <td className="py-4 px-2 text-white">{row.asset}</td>
                    <td className="py-4 px-2 text-slate-400">{row.location}</td>
                    <td className="py-4 px-2 text-white">{row.valuation}</td>
                    <td className="py-4 px-2 text-white">{row.noi}</td>
                    <td className="py-4 px-2 text-white">{row.occupancy}</td>
                    <td className="py-4 px-2 text-white">{row.cap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm">
              Valuations based on independent appraisals as of Q4 2024. NOI calculated on annualized basis.
            </p>
          </div>
        </div>
      </section>

      {/* Market Risk Profiles & Hedging */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-16">
            <AlertTriangle className="text-amber-500" size={24} />
            <h2 className="text-3xl font-serif italic">Market Risk Profiles & Hedging Strategy</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-serif italic mb-8 text-amber-200">Risk Assessment Framework</h3>
              <div className="space-y-6">
                <div className="border border-white/10 p-6 rounded">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-white font-bold">Low Risk</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">Currency Fluctuation</p>
                  <p className="text-slate-500 text-xs">Hedged via forward contracts and natural hedges</p>
                </div>
                <div className="border border-white/10 p-6 rounded">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-white font-bold">Medium Risk</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">Interest Rate Sensitivity</p>
                  <p className="text-slate-500 text-xs">Fixed-rate debt structure minimizes exposure</p>
                </div>
                <div className="border border-white/10 p-6 rounded">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-white font-bold">High Risk</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">Geopolitical Events</p>
                  <p className="text-slate-500 text-xs">Diversified across multiple jurisdictions</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif italic mb-8 text-amber-200">Hedging Strategy</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Our comprehensive risk management framework employs multiple hedging instruments to protect investor capital:
              </p>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <Eye className="text-amber-500 mt-1" size={16} />
                  <span><strong>Currency Hedging:</strong> Forward contracts and options to lock in favorable exchange rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="text-amber-500 mt-1" size={16} />
                  <span><strong>Interest Rate Swaps:</strong> Fixed-rate debt instruments to eliminate floating rate risk</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="text-amber-500 mt-1" size={16} />
                  <span><strong>Diversification:</strong> Strategic allocation across non-correlated asset classes and geographies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Factors & Legal */}
      <section className="border-y border-white/10 bg-white/[0.01] py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-16">
            <AlertTriangle className="text-amber-500" size={24} />
            <h2 className="text-2xl font-serif italic">Risk Factors & Legal Considerations</h2>
          </div>
          <div className="space-y-6 text-slate-400 text-sm leading-relaxed">
            <div className="border border-white/10 p-6 rounded">
              <h3 className="text-white font-bold mb-4">Investment Risks</h3>
              <ul className="space-y-2">
                <li>• Real estate investments are illiquid and subject to market volatility</li>
                <li>• Currency fluctuations may affect returns for non-local investors</li>
                <li>• Political and economic conditions in East Africa may impact performance</li>
                <li>• Property values can decline due to changes in local market conditions</li>
              </ul>
            </div>
            <div className="border border-white/10 p-6 rounded">
              <h3 className="text-white font-bold mb-4">Tax Implications</h3>
              <ul className="space-y-2">
                <li>• Investors should consult qualified tax advisors regarding withholding taxes and capital gains</li>
                <li>• UK investors may be subject to Stamp Duty Land Tax on property acquisitions</li>
                <li>• Tax treaties between jurisdictions may affect overall tax efficiency</li>
                <li>• Changes in tax legislation could impact future returns</li>
              </ul>
            </div>
            <div className="border border-white/10 p-6 rounded">
              <h3 className="text-white font-bold mb-4">Regulatory Compliance</h3>
              <ul className="space-y-2">
                <li>• All investments are subject to Kenyan regulatory frameworks and international standards</li>
                <li>• SPV structures provide liability protection but require proper governance</li>
                <li>• REIT investments are subject to mandatory distribution requirements</li>
                <li>• Due diligence is required for all institutional investors</li>
              </ul>
            </div>
            <p className="text-slate-500 text-xs italic">
              * Past performance does not guarantee future results. This document is for informational purposes only and does not constitute an offer to sell or solicitation to buy securities. All investments carry risk of loss of principal.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-32 text-center">
          <h2 className="text-4xl font-serif italic mb-8">
            Request Full Due Diligence Package
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            For comprehensive financial models, legal documentation, and detailed asset analyses,
            contact our institutional relations team.
          </p>
          <div className="flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] border-b border-amber-500 pb-2 hover:gap-8 transition-all duration-500 cursor-pointer">
            Schedule Private Meeting <ArrowUpRight size={16} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstitutionalPortal;
