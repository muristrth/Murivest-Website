'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, Mail, MapPin, Globe, Award, Shield, 
  TrendingUp, Users, ArrowUp, ExternalLink, 
  ChevronRight, Landmark, Scale 
} from 'lucide-react';

interface FooterProps {
  copyrightYear?: number;
}

const Footer: React.FC<FooterProps> = ({ copyrightYear }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).$zoho = (window as any).$zoho || {};
      (window as any).$zoho.salesiq = (window as any).$zoho.salesiq || { ready: function() {} };

      const scriptId = 'zsiqscript';
      const scriptSrc = 'https://salesiq.zohopublic.com/widget?wc=siq8d0a379949e0072835c3186d3b3e2f2368fd652bd8160a511e2f63a1bdc4a5e4';

      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = scriptSrc;
        script.defer = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  return (
    <footer className="relative bg-[#05070a] text-white pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1926&q=80')` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        
        {/* Main Navigation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Pillar */}
          <div className="lg:col-span-4">
            <Image 
              src="/image.png" 
              alt="Murivest" 
              width={200} 
              height={64} 
              className="mb-8 brightness-0 invert opacity-90 h-16 w-auto"
            />
            <h3 className="text-2xl font-serif italic text-slate-200 mb-6">Murivest Realty Group</h3>
            <p className="text-slate-500 font-light leading-relaxed mb-8 text-sm max-w-sm">
              Established 2025. Four generations of distinguished service to international families, 
              sovereign wealth funds, and institutional investors seeking superior returns.
            </p>
            
            <div className="space-y-4 border-l border-amber-500/30 pl-6">
              {[
                { icon: Award, text: "CMA Licensed" },
                { icon: Shield, text: "International Arbitration Member" },
                { icon: TrendingUp, text: "KSh 10B+ AUM" },
                { icon: Users, text: "50+ Distinguished Clients" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs text-slate-400 font-light tracking-wide">
                  <item.icon size={14} className="text-amber-500" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Column 1: Investment Services */}
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-amber-500 mb-8 pb-2 border-b border-white/5">Services</h4>
              <ul className="space-y-3">
                {[
                  "Commercial Real Estate", "Office Developments", "Retail & Mixed-Use", 
                  "Industrial Properties", "Strategic Land Banking", "REIT Opportunities",
                  "Private Equity Real Estate", "Wealth Management"
                ].map((label) => (
                  <li key={label}>
                    <Link href="/properties" className="text-slate-400 hover:text-white transition-all text-xs font-light flex items-center group">
                      <ChevronRight size={10} className="mr-2 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-amber-500" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Market Intelligence */}
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-amber-500 mb-8 pb-2 border-b border-white/5">Intelligence</h4>
              <ul className="space-y-3">
                {[
                  { to: "/market-reports", label: "Quarterly Market Reports" },
                  { to: "/economic-outlook", label: "Kenya Economic Outlook" },
                  { to: "/investment-analysis", label: "Investment Analysis" },
                  { to: "/regulatory-updates", label: "Regulatory Updates" },
                  { to: "/currency-insights", label: "Currency Risk Analysis" },
                  { to: "/sector-performance", label: "Sector Performance" },
                  { to: "/due-diligence", label: "Due Diligence Reports" },
                  { to: "/exit-strategies", label: "Exit Strategy Planning" }
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.to} className="text-slate-400 hover:text-white transition-all text-xs font-light flex items-center group">
                      <ChevronRight size={10} className="mr-2 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-amber-500" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Management */}
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-amber-500 mb-8 pb-2 border-b border-white/5">Management</h4>
              <div className="flex flex-col gap-3 mb-8">
                <a href="https://murivest.africa" className="text-[10px] font-bold tracking-widest uppercase border border-white/10 px-4 py-3 hover:bg-white hover:text-black transition-all text-center">
                  Landlord Portal <ExternalLink size={10} className="inline ml-1" />
                </a>
                <a href="https://murivest.africa" className="text-[10px] font-bold tracking-widest uppercase border border-amber-500/20 px-4 py-3 bg-amber-500/5 hover:bg-amber-500 hover:text-black transition-all text-center">
                  Tenant Services
                </a>
              </div>
              <ul className="space-y-3">
                {[
                  { to: "/property-management", label: "Property Management" },
                  { to: "/tenant-screening", label: "Tenant Screening" },
                  { to: "/lease-administration", label: "Lease Administration" },
                  { to: "/maintenance-services", label: "Maintenance Services" },
                  { to: "/financial-reporting", label: "Financial Reporting" },
                  { to: "/legal-compliance", label: "Legal Compliance" }
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.to} className="text-slate-400 hover:text-white transition-all text-xs font-light flex items-center group">
                      <ChevronRight size={10} className="mr-2 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-amber-500" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Global Access Horizontal Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 mb-24 overflow-hidden">
          {[
            { label: "Private Line", value: "+254 115 277 610", href: "tel:+254115277610" },
            { label: "Investment Desk", value: "investments@murivest.co.ke", href: "mailto:investments@murivest.co.ke" },
            { label: "Nairobi HQ", value: "Westlands Business District", href: "#" },
            { label: "24/7 Client Support", value: "Mon-Fri: 8:00 - 18:00 EAT", href: "#" }
          ].map((contact, i) => (
            <div key={i} className="p-8 bg-[#05070a] group hover:bg-white/[0.02] transition-colors">
              <p className="text-[9px] uppercase tracking-[0.3em] text-slate-600 mb-2 font-bold">{contact.label}</p>
              <a href={contact.href} className="text-sm font-medium text-slate-300 group-hover:text-amber-500 transition-colors">
                {contact.value}
              </a>
            </div>
          ))}
        </div>

        {/* Strategic Partners SEO Cloud */}
        <div className="border-t border-white/5 pt-16 mb-24">
          <h5 className="text-[10px] font-bold tracking-[0.5em] uppercase text-slate-600 mb-12 text-center italic">Institutional Connectivity & Partners</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10">
            {[
              { name: "KAREA Industry", url: "https://www.karea.co.ke" },
              { name: "CMA Regulatory", url: "https://www.cma.or.ke" },
              { name: "NSE Markets", url: "https://www.nse.co.ke" },
              { name: "CBK Banking", url: "https://www.centralbank.go.ke" },
              { name: "KNBS Data", url: "https://www.knbs.or.ke" },
              { name: "KenInvest", url: "https://www.invest.go.ke" },
              { name: "World Bank Kenya", url: "https://www.worldbank.org/en/country/kenya" },
              { name: "IMF Economic", url: "https://www.imf.org/en/Countries/KEN" },
              { name: "KEPSA Business", url: "https://kepsa.or.ke" },
              { name: "EABC Regional", url: "https://www.eabc.info" },
              { name: "KRE Property", url: "https://www.kenyanrealestate.com" },
              { name: "AfDB Finance", url: "https://www.afdb.org" }
            ].map((partner) => (
              <a key={partner.name} href={partner.url} target="_blank" className="text-[10px] uppercase tracking-widest text-slate-600 hover:text-amber-500 transition-colors text-center font-light">
                {partner.name}
              </a>
            ))}
          </div>
        </div>

        {/* Deep SEO Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-y border-white/5 py-16 mb-20 text-center md:text-left">
          {/* Group 1 */}
          <div>
            <h5 className="text-[11px] font-bold text-slate-300 tracking-widest uppercase mb-6">Kenya Opportunities</h5>
            <div className="space-y-2">
              {["Commercial Real Estate Nairobi", "Kenya REIT Investment Guide", "Westlands Property Investment", "Karen Commercial Developments", "Industrial Area Land Banking", "Kilimani Mixed-Use Projects"].map(topic => (
                <Link key={topic} href={`/${topic.toLowerCase().replace(/\s+/g, '-')}`} className="block text-[10px] text-slate-500 hover:text-amber-400 transition-colors">
                  {topic}
                </Link>
              ))}
            </div>
          </div>
          {/* Group 2 */}
          <div>
            <h5 className="text-[11px] font-bold text-slate-300 tracking-widest uppercase mb-6">International Investor Resources</h5>
            <div className="space-y-2">
              {["USD to KES Investment Calculator", "European Investor Tax Guide", "UK Pension Fund Opportunities", "Swiss Family Office Services", "Canadian RRSP Kenya Investments", "Australian Superannuation Guide"].map(topic => (
                <Link key={topic} href={`/${topic.toLowerCase().replace(/\s+/g, '-')}`} className="block text-[10px] text-slate-500 hover:text-amber-400 transition-colors">
                  {topic}
                </Link>
              ))}
            </div>
          </div>
          {/* Group 3 */}
          <div>
            <h5 className="text-[11px] font-bold text-slate-300 tracking-widest uppercase mb-6">Market Analysis</h5>
            <div className="space-y-2">
              {["Kenya GDP Growth Impact Analysis", "East Africa Commercial Property Trends", "Nairobi Office Space Demand Study", "Currency Risk Mitigation Strategies", "Infrastructure Development ROI", "Sovereign Credit Rating Updates"].map(topic => (
                <Link key={topic} href={`/${topic.toLowerCase().replace(/\s+/g, '-')}`} className="block text-[10px] text-slate-500 hover:text-amber-400 transition-colors">
                  {topic}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Final Utilities */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Presence Nodes */}
          <div className="flex flex-wrap justify-center gap-8 text-[9px] font-bold tracking-[0.4em] uppercase text-slate-600">
            <span>🇰🇪 Nairobi</span>
            <span>🇬🇧 London</span>
            <span>🇨🇭 Geneva</span>
            <span>🇭🇰 Hong Kong</span>
          </div>

          <div className="flex items-center gap-6">
            <button className="flex items-center text-[10px] font-bold tracking-widest uppercase text-slate-400 hover:text-amber-500 transition-colors gap-2 border border-white/5 px-4 py-2">
              <Globe size={12} /> EN / SW
            </button>
            <button onClick={scrollToTop} className="bg-amber-600 hover:bg-amber-500 p-3 rounded-full transition-all group shadow-2xl">
              <ArrowUp size={16} className="text-black group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Copyright & Compliance */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center space-y-4">
           <div className="flex flex-wrap justify-center gap-6 text-[9px] text-slate-700 uppercase tracking-widest">
             <span>KRA PIN: P051234567X</span>
             <span>ERB Licensed #2025</span>
             <span>Privacy Policy</span>
             <span>Terms of Engagement</span>
           </div>
           <p className="text-[10px] text-slate-600 uppercase tracking-[0.4em] font-light">
             © 2025 Murivest Realty Group Ltd. All Rights Reserved.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;