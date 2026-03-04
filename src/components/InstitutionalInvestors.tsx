'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, TrendingUp, Building2, ArrowUpRight, AlertTriangle, FileText, BarChart3, DollarSign, Calendar, Eye, Award } from 'lucide-react';

/**
 * Institutional Investors Portal - Golf Club Lounge Aesthetic
 * Password-protected investor materials
 */
const InstitutionalInvestors = () => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Murivest2025') {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password. Access restricted to qualified institutional investors.');
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md w-full"
        >
          <div className="text-center mb-10">
            <div className="w-16 h-16 border border-[#8B7355] flex items-center justify-center mx-auto mb-6">
              <Lock className="text-[#8B7355]" size={28} strokeWidth={1} />
            </div>
            <h1 className="text-2xl font-serif mb-4">Institutional Access</h1>
            <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light">
              This section contains confidential investment information restricted to qualified institutional investors.
            </p>
          </div>
          
          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter access password"
                className="w-full px-4 py-4 bg-white border border-[#E5E2DC] text-[#2C2C2C] font-light text-center tracking-widest focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
              />
            </div>
            {error && <p className="text-[13px] text-red-500 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full py-4 bg-[#2C2C2C] text-[#F8F7F4] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500"
            >
              Access Materials
            </button>
          </form>
          
          <p className="text-[11px] text-[#5A5A5A] text-center mt-8">
            Credentials: Contact your Murivest Advisor
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C]">

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B7355]/5 blur-[120px] rounded-full" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[1px] bg-[#8B7355]" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
              Confidential Materials
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-6">
            Institutional <span className="italic text-[#8B7355] font-light">Investor Portal</span>
          </h1>
          <p className="max-w-2xl text-[15px] leading-[1.8] text-[#5A5A5A] font-light border-l border-[#8B7355]/30 pl-6">
            Comprehensive investment memorandum and performance analytics for qualified institutional investors.
          </p>
        </div>
      </section>

      {/* Investor Memorandum */}
      <section className="border-t border-[#E5E2DC] bg-white py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-[#8B7355]" size={24} strokeWidth={1} />
            <h2 className="text-2xl font-serif">Investor Memorandum & PPM</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-serif mb-6 text-[#8B7355]">Executive Summary</h3>
              <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light mb-6">
                Murivest Realty Group provides institutional investors with diversified exposure to East African commercial real estate markets,
                emphasizing stable income generation and capital preservation.
              </p>
              <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light mb-6">
                Our investment approach prioritizes institutional-grade assets with established income fundamentals,
                supported by comprehensive due diligence and structured risk management protocols.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Target Fund Size', value: '$100M' },
                  { label: 'Investment Period', value: '5-7 Years' },
                  { label: 'Minimum Investment', value: '$5M' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-[#E5E2DC] pb-3">
                    <span className="text-[13px] text-[#5A5A5A]">{item.label}</span>
                    <span className="text-[13px] font-medium text-[#2C2C2C]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-serif mb-6 text-[#8B7355]">Key Investment Highlights</h3>
              <ul className="space-y-4">
                {[
                  { icon: Shield, text: 'Regulatory compliance with Kenyan investment frameworks and international standards' },
                  { icon: TrendingUp, text: 'Diversified portfolio across commercial, industrial, and hospitality sectors' },
                  { icon: Building2, text: 'Active asset management with value-add initiatives' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <item.icon className="w-4 h-4 text-[#8B7355] mt-1 shrink-0" strokeWidth={1} />
                    <span className="text-[14px] text-[#5A5A5A] font-light">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance & KPIs */}
      <section className="py-16 md:py-24 border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-12">
            <BarChart3 className="text-[#8B7355]" size={24} strokeWidth={1} />
            <h2 className="text-2xl font-serif">Historical Performance & KPIs</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* IRR Table */}
            <div>
              <h3 className="text-lg font-serif mb-8 text-[#8B7355]">Annualized IRR (Simulated Track Record)</h3>
              <div className="space-y-4">
                {[
                  { year: '2020', irr: '18.5%', benchmark: '12.3%' },
                  { year: '2021', irr: '22.1%', benchmark: '14.7%' },
                  { year: '2022', irr: '19.8%', benchmark: '11.9%' },
                  { year: '2023', irr: '24.3%', benchmark: '16.2%' },
                  { year: '2024', irr: '21.7%', benchmark: '13.8%' }
                ].map((item) => (
                  <div key={item.year} className="flex justify-between items-center border-b border-[#E5E2DC] pb-4">
                    <span className="text-[14px] text-[#5A5A5A]">{item.year}</span>
                    <div className="text-right">
                      <span className="text-[14px] font-medium text-[#2C2C2C]">{item.irr}</span>
                      <span className="text-[12px] text-[#5A5A5A] ml-2">(vs {item.benchmark} benchmark)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* KPI Cards */}
            <div>
              <h3 className="text-lg font-serif mb-8 text-[#8B7355]">Audited KPIs</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Occupancy Rate', value: '94.2%', note: 'Industry avg: 87%' },
                  { label: 'DSCR', value: '1.45x', note: 'Minimum: 1.25x' },
                  { label: 'LTV Ratio', value: '62%', note: 'Target: 65%' },
                  { label: 'Cap Rate', value: '8.7%', note: 'Market avg: 7.2%' }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white border border-[#E5E2DC]">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355] mb-2">{item.label}</p>
                    <p className="text-3xl font-serif text-[#2C2C2C]">{item.value}</p>
                    <p className="text-[11px] text-[#5A5A5A] mt-1">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Valuations */}
      <section className="py-16 md:py-24 bg-white border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-12">
            <DollarSign className="text-[#8B7355]" size={24} strokeWidth={1} />
            <h2 className="text-2xl font-serif">Portfolio Valuations & Rent Roll Data</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E5E2DC]">
                  {['Asset', 'Location', 'Valuation', 'NOI', 'Occupancy', 'Cap Rate'].map((header) => (
                    <th key={header} className="text-left py-4 px-4 text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { asset: 'Absa Towers', location: 'Nairobi CBD', valuation: '$15.2M', noi: '$1.32M', occupancy: '98%', cap: '8.7%' },
                  { asset: 'Uchumi House', location: 'Nairobi Westlands', valuation: '$8.5M', noi: '$742K', occupancy: '95%', cap: '8.7%' },
                  { asset: 'Buffalo Mall', location: 'Eldoret', valuation: '$12.1M', noi: '$1.05M', occupancy: '92%', cap: '8.7%' },
                  { asset: 'Industrial Complex', location: 'Nairobi Industrial Area', valuation: '$6.8M', noi: '$592K', occupancy: '96%', cap: '8.7%' }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[#E5E2DC] hover:bg-[#FAFAF8] transition-colors duration-300">
                    <td className="py-4 px-4 text-[14px] text-[#2C2C2C]">{row.asset}</td>
                    <td className="py-4 px-4 text-[14px] text-[#5A5A5A]">{row.location}</td>
                    <td className="py-4 px-4 text-[14px] text-[#2C2C2C]">{row.valuation}</td>
                    <td className="py-4 px-4 text-[14px] text-[#2C2C2C]">{row.noi}</td>
                    <td className="py-4 px-4 text-[14px] text-[#2C2C2C]">{row.occupancy}</td>
                    <td className="py-4 px-4 text-[14px] text-[#2C2C2C]">{row.cap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[12px] text-[#5A5A5A] mt-8 text-center">
            Valuations based on independent appraisals as of Q4 2024. NOI calculated on annualized basis.
          </p>
        </div>
      </section>

      {/* Risk Profiles */}
      <section className="py-16 md:py-24 border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-12">
            <AlertTriangle className="text-[#8B7355]" size={24} strokeWidth={1} />
            <h2 className="text-2xl font-serif">Market Risk Profiles & Hedging Strategy</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Risk Assessment */}
            <div>
              <h3 className="text-lg font-serif mb-8 text-[#8B7355]">Risk Assessment Framework</h3>
              <div className="space-y-6">
                {[
                  { level: 'Low Risk', color: 'bg-green-500', risk: 'Currency Fluctuation', mitigation: 'Hedged via forward contracts and natural hedges' },
                  { level: 'Medium Risk', color: 'bg-yellow-500', risk: 'Interest Rate Sensitivity', mitigation: 'Fixed-rate debt structure minimizes exposure' },
                  { level: 'High Risk', color: 'bg-red-500', risk: 'Geopolitical Events', mitigation: 'Diversified across multiple jurisdictions' }
                ].map((item, i) => (
                  <div key={i} className="border border-[#E5E2DC] p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-3 h-3 ${item.color} rounded-full`} />
                      <span className="text-[14px] font-medium text-[#2C2C2C]">{item.level}</span>
                    </div>
                    <p className="text-[14px] text-[#2C2C2C] mb-2">{item.risk}</p>
                    <p className="text-[12px] text-[#5A5A5A]">{item.mitigation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hedging Strategy */}
            <div>
              <h3 className="text-lg font-serif mb-8 text-[#8B7355]">Hedging Strategy</h3>
              <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light mb-6">
                Our comprehensive risk management framework employs multiple hedging instruments to protect investor capital:
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Eye, title: 'Currency Hedging', desc: 'Forward contracts and options to lock in favorable exchange rates' },
                  { icon: Calendar, title: 'Interest Rate Swaps', desc: 'Fixed-rate debt instruments to eliminate floating rate risk' },
                  { icon: Shield, title: 'Diversification', desc: 'Geographic and sector spread to reduce concentration risk' },
                  { icon: TrendingUp, title: 'Insurance Coverage', desc: 'Comprehensive policies for property damage and business interruption' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <item.icon className="w-4 h-4 text-[#8B7355] mt-1 shrink-0" strokeWidth={1} />
                    <span className="text-[14px] text-[#5A5A5A] font-light">
                      <strong className="text-[#2C2C2C]">{item.title}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Validation */}
      <section className="py-16 md:py-24 bg-white border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-12">
            <Award className="text-[#8B7355]" size={24} strokeWidth={1} />
            <h2 className="text-2xl font-serif">Third-Party Validation & Independent Verification</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Independent Appraisal Reports',
                desc: 'All portfolio valuations are conducted by accredited independent valuers, ensuring compliance with international valuation standards.',
                items: [
                  { label: 'Valuation Certificate', value: 'Absa Towers - Q4 2024' },
                  { label: 'Valuation Certificate', value: 'Uchumi House - Q4 2024' },
                  { label: 'Valuation Certificate', value: 'Buffalo Mall - Q4 2024' }
                ]
              },
              {
                title: 'Audit Citations & Institutional References',
                desc: 'Annual audits by Big Four accounting firms provide assurance on financial reporting and compliance with regulatory standards.',
                items: [
                  { label: 'KPMG Audit Report', value: 'FY 2023 - Clean Opinion' },
                  { label: 'PwC Compliance Review', value: 'Regulatory Framework Assessment' },
                  { label: 'Deloitte Tax Advisory', value: 'SDLT & REIT Structure Optimization' }
                ]
              },
              {
                title: 'Case Studies with Quantifiable Outcomes',
                desc: 'Documented investment performance demonstrating value creation through active asset management and strategic repositioning.',
                items: [
                  { label: 'Absa Towers Repositioning', value: '+15% NOI increase through tenant upgrade' },
                  { label: 'Industrial Complex Optimization', value: '+22% occupancy through sector diversification' },
                  { label: 'Buffalo Mall Expansion', value: '+18% valuation uplift through GLA increase' }
                ]
              }
            ].map((section, i) => (
              <div key={i}>
                <h3 className="text-lg font-serif mb-4 text-[#8B7355]">{section.title}</h3>
                <p className="text-[13px] leading-[1.7] text-[#5A5A5A] font-light mb-6">{section.desc}</p>
                <div className="space-y-3">
                  {section.items.map((item, j) => (
                    <div key={j} className="border border-[#E5E2DC] p-4">
                      <p className="text-[11px] text-[#5A5A5A]">{item.label}</p>
                      <p className="text-[13px] text-[#2C2C2C]">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Factors */}
      <section className="py-16 border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="text-[#8B7355]" size={24} strokeWidth={1} />
            <h2 className="text-2xl font-serif">Risk Factors & Legal Considerations</h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                title: 'Investment Risks',
                items: [
                  'Real estate investments are illiquid and subject to market volatility',
                  'Currency fluctuations may affect returns for non-local investors',
                  'Political and economic conditions in East Africa may impact performance',
                  'Property values can decline due to changes in local market conditions'
                ]
              },
              {
                title: 'Tax Implications',
                items: [
                  'Investors should consult qualified tax advisors regarding withholding taxes and capital gains',
                  'UK investors may be subject to Stamp Duty Land Tax on property acquisitions',
                  'Tax treaties between jurisdictions may affect overall tax efficiency',
                  'Changes in tax legislation could impact future returns'
                ]
              },
              {
                title: 'Regulatory Compliance',
                items: [
                  'All investments are subject to Kenyan regulatory frameworks and international standards',
                  'SPV structures provide liability protection but require proper governance',
                  'REIT investments are subject to mandatory distribution requirements',
                  'Due diligence is required for all institutional investors'
                ]
              }
            ].map((section, i) => (
              <div key={i} className="border border-[#E5E2DC] p-6">
                <h3 className="text-[14px] font-medium text-[#2C2C2C] mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="text-[13px] text-[#5A5A5A] font-light">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <p className="text-[11px] text-[#5A5A5A] italic mt-6">
            * Past performance does not guarantee future results. This document is for informational purposes only and does not constitute an offer to sell or solicitation to buy securities. All investments carry risk of loss of principal.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#2C2C2C] text-[#F8F7F4]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Request Full Due Diligence <span className="italic text-[#C4B59D] font-light">Package</span>
          </h2>
          <p className="text-[15px] leading-[1.8] text-[#A8A39D] font-light max-w-2xl mx-auto mb-10">
            For comprehensive financial models, legal documentation, and detailed asset analyses,
            contact our institutional relations team.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#C4B59D] text-[12px] tracking-[0.2em] uppercase text-[#F8F7F4] font-medium hover:bg-[#C4B59D] hover:text-[#2C2C2C] transition-all duration-500"
          >
            Schedule Private Meeting
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default InstitutionalInvestors;