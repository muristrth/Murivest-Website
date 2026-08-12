'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, Mail, MapPin, Landmark, 
  Shield, TrendingUp, ChevronUp
} from 'lucide-react';
import { 
  FaLinkedinIn, 
  FaInstagram, 
  FaXTwitter, 
  FaYoutube, 
  FaWhatsapp
} from 'react-icons/fa6';
import InstitutionalTrustSignals from './InstitutionalTrustSignals';
import WhatsAppButton from '../ui/WhatsAppButton';


interface FooterProps {
  copyrightYear?: number;
}

const Footer: React.FC<FooterProps> = ({ copyrightYear }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/murivest-realty-group', icon: FaLinkedinIn },
    { name: 'Instagram', href: 'https://www.instagram.com/murivest_realty_group', icon: FaInstagram },
    { name: 'X', href: 'https://twitter.com/murivestrealty', icon: FaXTwitter },
    { name: 'YouTube', href: 'https://www.youtube.com/@murivestrealty', icon: FaYoutube },
    { name: 'WhatsApp', href: 'https://wa.me/254115277610', icon: FaWhatsapp },
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
    
    <footer className="bg-[#1B4332] border-t border-[#B8956B]/20 relative">
      <InstitutionalTrustSignals />
      <WhatsAppButton />
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B8956B]/40 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-16 py-12 lg:py-20">
        
        {/* Top Section - Club Letterhead Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 pb-12 border-b border-[#B8956B]/10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Image 
                src="/logo.webp" 
                alt="Murivest Realty Group Ltd" 
                width={140} 
                height={44} 
                className="h-12 w-auto brightness-110"
              />
            </div>
            <h3 className="text-xl font-serif italic text-white mb-4">
              Murivest Realty Group Ltd
            </h3>
            <p className="text-[13px] text-[#D6C4AA]/80 font-light leading-relaxed mb-6 max-w-sm">
              An independent commercial real estate advisory firm based in Nairobi. We originate and structure mandate-based engagements for institutional capital in East African commercial property markets.
            </p>
            
            {/* Credentials - Gold-accented */}
            <div className="space-y-3 border-l border-[#B8956B]/30 pl-5">
              {[{
                  icon: Landmark,
                  text: "Nairobi-Based Advisory"
                }, {
                  icon: Shield,
                  text: "Mandate & KYC Process"
                }, {
                  icon: TrendingUp,
                  text: "Institutional Focus"
                }].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[11px] text-[#D6C4AA]/70 tracking-wide">
                  <item.icon size={14} className="text-[#B8956B]" strokeWidth={1.5} />
                  {item.text}
                </div>
              ))}
            </div>

            {/* Social Links - Gold on hover */}
            <div className="flex flex-wrap items-center gap-2 mt-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-[#B8956B]/20 hover:border-[#B8956B] flex items-center justify-center text-[#D6C4AA] hover:text-[#B8956B] transition-all duration-300"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Advisory Services */}
            <div>
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] font-medium mb-8 pb-3 border-b border-[#B8956B]/20">
                Advisory Services
              </h4>
              <ul className="space-y-3">
                {[{
                    to: "/commercial-real-estate", 
                    label: "Commercial Advisory"
                  }, {
                    to: "/process", 
                    label: "Our Process"
                  }, {
                    to: "/legal-compliance", 
                    label: "Compliance Framework"
                  }, {
                    to: "/representative-transactions", 
                    label: "Track Record"
                  }, {
                    to: "/about", 
                    label: "About Murivest"
                  }, {
                    to: "/contact", 
                    label: "Contact Advisory"
                  }].map((link) => (
                  <li key={link.label}>
                    <Link href={link.to} className="text-[13px] text-[#D6C4AA]/80 hover:text-white transition-colors duration-300 font-light flex items-center group">
                      <span className="w-2 h-px bg-[#B8956B] mr-3 opacity-0 group-hover:opacity-100 transition-all group-hover:mr-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Market Intelligence */}
            <div>
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] font-medium mb-8 pb-3 border-b border-[#B8956B]/20">
                Market Intelligence
              </h4>
              <ul className="space-y-3">
                {[{
                    to: "/case-study-legacy", 
                    label: "Case Study"
                  }, {
                    to: "/kenya-economic-outlook", 
                    label: "Kenya Economic Outlook"
                  }, {
                    to: "/regulatory-updates", 
                    label: "Regulatory Updates"
                  }, {
                    to: "/reit-opportunities", 
                    label: "REIT Opportunities"
                  }, {
                    to: "/sector-performance", 
                    label: "Sector Analysis"
                  }, {
                    to: "/research", 
                    label: "Research Archive"
                  }].map((link) => (
                  <li key={link.label}>
                    <Link href={link.to} className="text-[13px] text-[#D6C4AA]/80 hover:text-white transition-colors duration-300 font-light flex items-center group">
                      <span className="w-2 h-px bg-[#B8956B] mr-3 opacity-0 group-hover:opacity-100 transition-all group-hover:mr-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclosures & Policies */}
            <div>
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] font-medium mb-8 pb-3 border-b border-[#B8956B]/20">
                Disclosures & Policies
              </h4>
              <ul className="space-y-3">
                {[{
                    to: "/legal-compliance", 
                    label: "Compliance Framework"
                  }, {
                    to: "/terms", 
                    label: "Terms of Engagement"
                  }, {
                    to: "/privacy", 
                    label: "Privacy Policy"
                  }, {
                    to: "/governance-compliance", 
                    label: "Governance & Compliance"
                  }].map((link) => (
                  <li key={link.label}>
                    <Link href={link.to} className="text-[13px] text-[#D6C4AA]/80 hover:text-white transition-colors duration-300 font-light flex items-center group">
                      <span className="w-2 h-px bg-[#B8956B] mr-3 opacity-0 group-hover:opacity-100 transition-all group-hover:mr-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Strip - Darker, Gold borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1B4332]/10 border border-[#B8956B]/20 mb-12">
          {[{
              label: "Private Line",
              value: "+254 115 277 610",
              href: "tel:+254115277610"
            }, {
              label: "Investment Desk",
              value: "capital@murivest.co.ke",
              href: "mailto:capital@murivest.co.ke"
            }, {
              label: "Nairobi HQ",
              value: "Westlands Business District",
              href: "#"
            }, {
              label: "Operating Hours",
              value: "Mon–Fri: 8:00 – 18:00 EAT",
              href: "#"
            }].map((contact, i) => (
            <div key={i} className="bg-[#1B4332] p-6 md:p-8 hover:bg-[#1A1A1A] transition-colors duration-300 border border-transparent hover:border-[#B8956B]/30">
              <p className="text-[9px] tracking-[0.25em] uppercase text-[#B8956B] mb-2">{contact.label}</p>
              <a href={contact.href} className="text-[13px] md:text-[14px] text-[#D6C4AA] hover:text-white transition-colors font-light">
                {contact.value}
              </a>
            </div>
          ))}
        </div>

        {/* Partners / Collaborations */}
        <div className="mb-12">
          <h5 className="text-[10px] tracking-[0.4em] uppercase text-[#B8956B] mb-8 text-center font-medium">
            Professional Collaborations
          </h5>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {["KAREA", "NSE", "CBK", "KNBS", "AfDB", "World Bank Kenya", "EABC", "KEPSA"].map((partner) => (
              <span key={partner} className="text-[11px] tracking-[0.2em] uppercase text-[#D6C4AA]/60 hover:text-[#B8956B] transition-colors cursor-default">
                {partner}
              </span>
            ))}
          </div>
          <p className="text-[9px] text-[#B8956B]/50 tracking-[0.15em] mt-5 text-center italic">
            Details available upon request for qualified institutional partners
          </p>
        </div>

        {/* Main Disclaimer - refined with gold borders */}
        <div className="mb-12 p-6 bg-[#1B4332] border border-[#B8956B]/20">
          <p className="text-[11px] leading-relaxed text-[#D6C4AA]/70 text-center max-w-4xl mx-auto">
            <strong className="text-white">Important Notice:</strong> Murivest Realty Group Ltd is an independent real estate advisory firm. We do not act as a licensed investment advisor and do not offer regulated financial products or collective investment schemes. We do not pool capital from multiple investors. All advisory engagements are mandate-based, subject to formal documentation, comprehensive KYC/AML verification, and explicit scope definition. No investment decisions should be made based on information contained in our materials without independent verification, professional legal counsel, and comprehensive due diligence. Past advisory outcomes do not guarantee future results. All investments carry inherent risks, including potential capital loss.
          </p>
        </div>

        {/* Bottom Bar - refined */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-8 border-t border-[#B8956B]/10">
          
          {/* Locations */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-[10px] tracking-[0.2em] uppercase text-[#D6C4AA]/70">
            <span>Nairobi, Kenya</span>
            <span className="text-[#B8956B]/40">•</span>
            <span>East Africa</span>
            <span className="text-[#B8956B]/40">•</span>
            <span>International Clients</span>
          </div>
          
          <div className="text-[9px] tracking-[0.2em] uppercase text-[#D6C4AA]/50">
            Murivest Realty Group © 2025 | All Rights Reserved
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-[9px] tracking-[0.2em] uppercase">
            <Link href="/legal-compliance" className="text-[#D6C4AA]/70 hover:text-[#B8956B] transition-colors">Compliance</Link>
            <span className="text-[#B8956B]/30">|</span>
            <Link href="/privacy" className="text-[#D6C4AA]/70 hover:text-[#B8956B] transition-colors">Privacy</Link>
            <span className="text-[#B8956B]/30">|</span>
            <Link href="/terms" className="text-[#D6C4AA]/70 hover:text-[#B8956B] transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Scroll to Top Button - subtle gold */}
        <button
          onClick={scrollToTop}
          className="absolute right-6 bottom-6 w-10 h-10 rounded-full border border-[#B8956B]/30 bg-[#0A0A0A] hover:bg-[#B8956B]/10 flex items-center justify-center transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ChevronUp size={16} className="text-[#B8956B] group-hover:translate-y-[-2px] transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;