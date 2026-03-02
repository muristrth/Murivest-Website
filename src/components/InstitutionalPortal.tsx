'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, TrendingUp, Building2, DollarSign, Eye, FileText, ArrowRight, Shield } from 'lucide-react';

/**
 * Institutional Portal - Golf Club Lounge Aesthetic
 * Secure investor portal with real-time reporting
 */
const InstitutionalPortal = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Murivest2025') {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Invalid credentials. Please contact your Murivest advisor.');
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
            <h1 className="text-2xl font-serif mb-4">Investor Portal</h1>
            <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light">
              Secure access to real-time portfolio reporting and investment documentation.
            </p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter portal password"
                className="w-full px-4 py-4 bg-white border border-[#E5E2DC] text-[#2C2C2C] font-light text-center tracking-widest focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
              />
            </div>
            {error && <p className="text-[13px] text-red-500 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full py-4 bg-[#2C2C2C] text-[#F8F7F4] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500"
            >
              Access Portal
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <a href="/contact" className="text-[12px] text-[#8B7355] hover:text-[#2C2C2C] transition-colors duration-300">
              Request Portal Access
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C]">
      {/* Header */}
      <header className="bg-white border-b border-[#E5E2DC] py-4 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#8B7355]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#8B7355] font-medium">
              Investor Portal
            </span>
          </div>
          <button 
            onClick={() => setAuthenticated(false)}
            className="text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] hover:text-[#2C2C2C] transition-colors duration-300"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Dashboard */}
      <main className="py-12 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Welcome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-serif mb-4">
              Portfolio <span className="italic text-[#8B7355] font-light">Overview</span>
            </h1>
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light">
              Real-time performance metrics and investment documentation for qualified institutional partners.
            </p>
          </motion.div>

          {/* KPI Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {[
              { icon: TrendingUp, label: 'Portfolio IRR', value: '21.7%', note: 'Annualized' },
              { icon: Building2, label: 'Occupancy Rate', value: '94.2%', note: 'Portfolio avg' },
              { icon: DollarSign, label: 'AUM', value: '$42.6M', note: 'Under management' },
              { icon: Eye, label: 'Active Assets', value: '4', note: 'Properties' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border border-[#E5E2DC]">
                <item.icon className="w-5 h-5 text-[#8B7355] mb-4" strokeWidth={1} />
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">{item.label}</p>
                <p className="text-2xl font-serif text-[#2C2C2C]">{item.value}</p>
                <p className="text-[11px] text-[#5A5A5A] mt-1">{item.note}</p>
              </div>
            ))}
          </motion.div>

          {/* Portfolio Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-[#E5E2DC] mb-12"
          >
            <div className="p-6 border-b border-[#E5E2DC]">
              <h2 className="text-xl font-serif">Active Holdings</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#E5E2DC]">
                    {['Asset', 'Location', 'Valuation', 'NOI', 'Occupancy'].map((header) => (
                      <th key={header} className="text-left py-4 px-6 text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { asset: 'Absa Towers', location: 'Nairobi CBD', valuation: '$15.2M', noi: '$1.32M', occupancy: '98%' },
                    { asset: 'Uchumi House', location: 'Westlands', valuation: '$8.5M', noi: '$742K', occupancy: '95%' },
                    { asset: 'Buffalo Mall', location: 'Eldoret', valuation: '$12.1M', noi: '$1.05M', occupancy: '92%' },
                    { asset: 'Industrial Complex', location: 'Industrial Area', valuation: '$6.8M', noi: '$592K', occupancy: '96%' }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#E5E2DC] hover:bg-[#FAFAF8] transition-colors duration-300">
                      <td className="py-4 px-6 text-[14px] text-[#2C2C2C]">{row.asset}</td>
                      <td className="py-4 px-6 text-[14px] text-[#5A5A5A]">{row.location}</td>
                      <td className="py-4 px-6 text-[14px] text-[#2C2C2C]">{row.valuation}</td>
                      <td className="py-4 px-6 text-[14px] text-[#2C2C2C]">{row.noi}</td>
                      <td className="py-4 px-6 text-[14px] text-[#2C2C2C]">{row.occupancy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Documents */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-5 h-5 text-[#8B7355]" strokeWidth={1} />
              <h2 className="text-xl font-serif">Investment Documents</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Q4 2024 Performance Report', date: 'December 2024', type: 'PDF' },
                { title: 'Portfolio Valuation Summary', date: 'November 2024', type: 'PDF' },
                { title: 'Investment Memorandum', date: 'October 2024', type: 'PDF' },
                { title: 'Risk Assessment Report', date: 'September 2024', type: 'PDF' },
                { title: 'Annual Audit Report 2023', date: 'March 2024', type: 'PDF' },
                { title: 'Tax Compliance Certificate', date: 'February 2024', type: 'PDF' }
              ].map((doc, i) => (
                <a 
                  key={i}
                  href="#"
                  className="group p-6 bg-white border border-[#E5E2DC] hover:border-[#8B7355] transition-colors duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <FileText className="w-5 h-5 text-[#8B7355]" strokeWidth={1} />
                    <span className="text-[10px] tracking-[0.15em] uppercase text-[#5A5A5A]">{doc.type}</span>
                  </div>
                  <h3 className="text-[14px] font-medium text-[#2C2C2C] mb-2 group-hover:text-[#8B7355] transition-colors duration-300">
                    {doc.title}
                  </h3>
                  <p className="text-[11px] text-[#5A5A5A]">{doc.date}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default InstitutionalPortal;