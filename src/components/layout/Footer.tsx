'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, Mail, MapPin, Globe, Award, Shield, 
  TrendingUp, Users, ArrowUp, ExternalLink, 
  ChevronRight, Landmark 
} from 'lucide-react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaXTwitter, 
  FaYoutube, FaWhatsapp, 
  FaPinterestP, FaTiktok, FaGoogle
} from 'react-icons/fa6';

interface FooterProps {
  copyrightYear?: number;
}

const Footer: React.FC<FooterProps> = ({ copyrightYear }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'WhatsApp', href: 'https://wa.me/254115277610', icon: FaWhatsapp },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/murivest-realty-group', icon: FaLinkedinIn },
    { name: 'Instagram', href: 'https://www.instagram.com/murivest_realty', icon: FaInstagram },
    { name: 'TikTok', href: 'https://www.tiktok.com/@murivestrealty', icon: FaTiktok },
    { name: 'Facebook', href: 'https://www.facebook.com/murivestrealtygroup', icon: FaFacebookF },
    { name: 'X', href: 'https://twitter.com/murivestrealty', icon: FaXTwitter },
    { name: 'Pinterest', href: 'https://www.pinterest.com/murivestrealty', icon: FaPinterestP },
    { name: 'YouTube', href: 'https://www.youtube.com/@murivestrealty', icon: FaYoutube },
    { name: 'Google', href: 'https://www.google.com', icon: FaGoogle },
    { name: 'Jiji', href: 'https://www.jiji.co.ke', icon: Globe },
  ];

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
    <footer className="bg-[#2a4a2e] text-[#FAF9F6] border-t border-[#3D3530]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-16 py-12 lg:py-24">
        
        {/* Top Section - Club Letterhead Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 pb-16 border-b border-[#3D3530]">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Image 
                src="/logo.png" 
                alt="Murivest Realty Group Ltd" 
                width={140} 
                height={44} 
                className="h-12 w-auto opacity-90"
              />
            </div>
            <h3 className="text-lg font-serif italic text-[#F8F7F4] mb-4">
              Murivest Realty Group Ltd
            </h3>
            <p className="text-[13px] text-[#A8A39D] font-light leading-relaxed mb-6 max-w-sm">
              Murivest Realty Group is an independent origination and advisory firm focused exclusively on institutional-grade commercial real estate in East Africa. We source, structure, and present off-market mandates to qualified international capital. Founded in Nairobi, 2024.
            </p>
            
            {/* Credentials - Like Club Badges */}
            <div className="space-y-3 border-l border-[#8B7355]/30 pl-5">
              {[
                { icon: Shield, text: "KAREA Member" },
                { icon: TrendingUp, text: "Commercial Grade A Assets" },
                { icon: Users, text: "For Institutional Investors" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[11px] text-[#A8A39D] tracking-wide">
                  <item.icon size={14} className="text-[#8B7355]" strokeWidth={1.5} />
                  {item.text}
                </div>
              ))}
            </div>

            {/* Social - All Links Preserved */}
            <div className="flex flex-wrap items-center gap-2 mt-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-[#3D3530] hover:border-[#8B7355] flex items-center justify-center text-[#FAF9F6] hover:text-[#8B7355] transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Grid - All Interlinks Preserved */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Services - All Links */}
            <div>
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355] font-medium mb-8 pb-3 border-b border-[#3D3530]">
                Advisory Services
              </h4>
              <ul className="space-y-3">
                {[
                  { to: "/properties", label: "Commercial Real Estate" },
                  { to: "/properties", label: "Office Developments" },
                  { to: "/properties", label: "Retail & Mixed-Use" },
                  { to: "/properties", label: "Industrial Properties" },
                  { to: "/properties", label: "Strategic Land Banking" },
                  { to: "/properties", label: "REIT Opportunities" },
                  { to: "/institutional-investors", label: "Private Equity Real Estate" },
                  { to: "/institutional-investors", label: "Wealth Management" }
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.to} className="text-[13px] text-[#A8A39D] hover:text-[#F8F7F4] transition-colors duration-300 font-light flex items-center group">
                      <ChevronRight size={10} className="mr-2 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-[#8B7355]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intelligence - All Links */}
            <div>
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355] font-medium mb-8 pb-3 border-b border-[#3D3530]">
                Market Intelligence
              </h4>
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
                    <Link href={link.to} className="text-[13px] text-[#A8A39D] hover:text-[#F8F7F4] transition-colors duration-300 font-light flex items-center group">
                      <ChevronRight size={10} className="mr-2 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-[#8B7355]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Strip - All Links Preserved */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#3D3530] border border-[#3D3530] mb-12">
          {[
            { label: "Private Line", value: "+254 115 277 610", href: "tel:+254115277610" },
            { label: "Investment Desk", value: "investments@murivest.co.ke", href: "mailto:investments@murivest.co.ke" },
            { label: "Nairobi HQ", value: "Westlands Business District", href: "#" },
            { label: "24/7 Client Support", value: "Mon–Fri: 8:00 – 18:00 EAT", href: "#" }
          ].map((contact, i) => (
            <div key={i} className="bg-[#FAF9F6] p-6 md:p-8 hover:bg-[#353535] transition-colors duration-300">
              <p className="text-[9px] tracking-[0.25em] uppercase text-[#5A5A5A] mb-2">{contact.label}</p>
              <a href={contact.href} className="text-[13px] md:text-[14px] text-[#C4B59D] hover:text-[#F8F7F4] transition-colors font-light">
                {contact.value}
              </a>
            </div>
          ))}
        </div>

        {/* Partners - All Links Preserved */}
        <div className="mb-12">
          <h5 className="text-[10px] tracking-[0.4em] uppercase text-[#FAF9F6] mb-8 text-center font-medium">
            Institutional Connectivity & Partners
          </h5>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
            {[
              { name: "KAREA Industry", url: "https://www.karea.co.ke" },
              { name: "CBRE Regulatory", url: "https://www.cbre.com" },
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
              <a 
                key={partner.name} 
                href={partner.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.2em] uppercase text-[#FAF9F6] hover:text-[#8B7355] transition-colors"
              >
                {partner.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar - All Elements Preserved */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-8 border-t border-[#3D3530]">
          
          {/* Locations */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8 text-[10px] tracking-[0.3em] uppercase text-[#FAF9F6]">
            <span>🇰🇪 Nairobi</span>
            <span>🇬🇧 London</span>
            <span>🇺🇬 Uganda</span>
            <span>🇿🇦 South Africa</span>
          </div>
        </div>

        {/* Legal Footer - All Links Preserved */}
        <div className="mt-8 pt-6 border-t border-[#3D3530] text-center space-y-3">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-[9px] tracking-[0.2em] uppercase text-[#FAF9F6]">
            <span>Commercial Brokerage</span>
            <span>Property Management</span>
            <Link href="/privacy" className="hover:text-[#8B7355] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#8B7355] transition-colors">Terms of Engagement</Link>
          </div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#FAF9F6] font-light">
            © {copyrightYear || 2026} Murivest Realty Group Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;