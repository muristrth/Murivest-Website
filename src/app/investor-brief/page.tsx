import type { Metadata } from 'next'
import React from 'react';

export const metadata: Metadata = {
  title: 'Institutional Investor Portal | Secure Access | Murivest',
  description: 'Confidential reporting and performance analytics for qualified institutional partners of Murivest Realty Group.',
  robots: 'noindex, nofollow',
}

export default function InvestorBrief() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      {/* Navigation */}
      <nav className="p-6 border-b border-white/10 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold tracking-tighter uppercase">Murivest</h1>
        <div className="text-xs uppercase tracking-widest text-gray-400">Institutional Grade Assets</div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 pt-20 pb-32 text-center">
        <span className="text-gold-500 text-sm uppercase tracking-[0.3em] text-[#c5a059] mb-4 block">
          Private Placement Memorandum
        </span>
        <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
          The <span className="italic">Nairobi-London</span> <br /> Commercial Corridor
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
          A strategic blueprint for Kenyan directors and family offices to secure 
          yield-heavy commercial assets in the CBD and UK markets.
        </p>

        {/* Lead Capture Form */}
        <div className="bg-white text-black p-8 md:p-12 rounded-sm shadow-2xl text-left">
          <h2 className="text-2xl font-semibold mb-2 text-center">Request the Brief</h2>
          <p className="text-sm text-gray-500 mb-8 text-center uppercase tracking-wider">Confidential Delivery</p>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-xs uppercase font-bold mb-2">Full Name</label>
              <input type="text" placeholder="e.g. Director Maina" className="border-b border-black py-2 focus:outline-none focus:border-[#c5a059]" required />
            </div>
            <div className="flex flex-col">
              <label className="text-xs uppercase font-bold mb-2">Corporate Email</label>
              <input type="email" placeholder="name@company.co.ke" className="border-b border-black py-2 focus:outline-none focus:border-[#c5a059]" required />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="text-xs uppercase font-bold mb-2">Investment Interest</label>
              <select className="border-b border-black py-2 bg-transparent focus:outline-none">
                <option>Nairobi CBD Commercial</option>
                <option>UK Retail/Office Portfolios</option>
                <option>Mixed-Asset Diversification</option>
              </select>
            </div>
            <button className="md:col-span-2 bg-black text-white py-4 mt-4 uppercase tracking-[0.2em] font-bold hover:bg-zinc-800 transition-all">
              Access the Brief
            </button>
          </form>
          <p className="text-[10px] text-gray-400 mt-6 text-center italic">
            Your data is handled with institutional-grade privacy. Strictly for HNWI/Corporate entities.
          </p>
        </div>
      </main>

      {/* Trust Bar */}
      <section className="bg-zinc-900 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-[#c5a059] text-3xl font-light mb-2">$5M+</h3>
            <p className="text-xs uppercase text-gray-500">Asset Qualification</p>
          </div>
          <div>
            <h3 className="text-[#c5a059] text-3xl font-light mb-2">12%</h3>
            <p className="text-xs uppercase text-gray-500">Target Annual Yield</p>
          </div>
          <div>
            <h3 className="text-[#c5a059] text-3xl font-light mb-2">London/Nairobi</h3>
            <p className="text-xs uppercase text-gray-500">Dual Market Security</p>
          </div>
        </div>
      </section>
    </div>
  );
}