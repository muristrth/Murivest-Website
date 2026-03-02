'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Globe } from 'lucide-react';
import { MENU_DATA } from '@/lib/menu';

// Mobile Accordion - Club Directory Style
const MobileAccordion = ({ title, items }: { title: string; items: any[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-6 border-b border-[#3D3530]">
      <button
        className="flex justify-between items-center w-full text-left text-[#A8A39D] py-4 transition-colors hover:text-[#F8F7F4]"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="text-[12px] tracking-[0.2em] uppercase font-medium">{title}</span>
        <ChevronDown size={14} className={`text-[#8B7355] transition-transform duration-500 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul className="pb-4 space-y-3">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="block text-[13px] text-[#5A5A5A] hover:text-[#8B7355] transition-colors py-1 font-light">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const MobileMenuDropdown = ({ title, items }: { title: string, items: any[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-3 w-full text-2xl font-serif text-[#F8F7F4] hover:text-[#C4B59D] transition-colors duration-500"
      >
        <span>{title}</span>
        <ChevronDown 
          size={16} 
          className={`text-[#8B7355] transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
        isOpen ? 'max-h-80 opacity-100 mt-6' : 'max-h-0 opacity-0'
      }`}>
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href} 
                className="text-[11px] tracking-[0.25em] uppercase text-[#5A5A5A] hover:text-[#F8F7F4] transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MegaMenu = ({ title, items }: { title: string; items: any[] }) => (
  <div className="relative group/menu">
    <button className="flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-[#A8A39D] hover:text-[#8B7355] py-8 transition-all duration-500 font-medium">
      {title}
      <ChevronDown size={10} className="opacity-50 transition-transform duration-500 group-hover/menu:rotate-180" />
    </button>
    
    {/* Dropdown - Club Menu Style */}
    <div className="absolute left-0 top-[100%] invisible opacity-0 translate-y-4 group-hover/menu:visible group-hover/menu:opacity-100 group-hover/menu:translate-y-0 transition-all duration-500 w-[280px] z-50">
      <div className="bg-[#F8F7F4] border border-[#E5E2DC] shadow-[0_20px_50px_rgba(0,0,0,0.15)] mt-2 p-8">
        <div className="mb-4">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#8B7355] font-medium border-b border-[#E5E2DC] pb-3 mb-4">
            Select
          </p>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className="group/link flex items-center justify-between py-2 text-[13px] text-[#2C2C2C] hover:text-[#8B7355] transition-colors font-light"
                >
                  <span>{item.label}</span>
                  <div className="h-[1px] w-0 bg-[#8B7355] transition-all duration-500 group-hover/link:w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      scrolled ? 'bg-[#F8F7F4]/95 border-b border-[#E5E2DC] py-0' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-16">
        <div className="flex items-center justify-between h-20">
          
          {/* BRANDING - Club Letterhead Style */}
          <a href="/" className="flex flex-col min-w-fit group">
            <span className={`text-2xl font-serif tracking-[0.1em] transition-colors duration-500 ${
              scrolled ? 'text-[#2C2C2C] group-hover:text-[#8B7355]' : 'text-[#F8F7F4]'
            }`}>
              MURIVEST
            </span>
            <span className={`text-[9px] tracking-[0.4em] font-light uppercase -mt-1 transition-colors duration-500 ${
              scrolled ? 'text-[#8B7355]' : 'text-[#C4B59D]'
            }`}>
              Nairobi Private Office
            </span>
          </a>

          {/* NAV - Club Directory Style */}
          <nav className="hidden xl:flex items-center space-x-10">
            <MegaMenu title="Portfolio" items={MENU_DATA.properties} />
            <MegaMenu title="Markets" items={MENU_DATA.markets} />
            <MegaMenu title="Invest" items={MENU_DATA.invest} />
            <MegaMenu title="Intelligence" items={MENU_DATA.insights} />
            <MegaMenu title="The Firm" items={MENU_DATA.company} />
            <MegaMenu title="Client Desk" items={MENU_DATA.utilities} />
            
            <div className={`h-6 w-[1px] transition-colors duration-500 ${
              scrolled ? 'bg-[#E5E2DC]' : 'bg-white/10'
            }`} />

            <a 
              href="/sell" 
              className={`text-[10px] tracking-[0.25em] uppercase border px-8 py-3.5 transition-all duration-500 font-medium ${
                scrolled 
                  ? 'border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-[#F8F7F4]' 
                  : 'border-[#8B7355]/40 text-[#C4B59D] hover:bg-[#8B7355] hover:text-[#2C2C2C]'
              }`}
            >
              Asset Divestment
            </a>
          </nav>

          {/* MOBILE TOGGLE - Minimal Lines */}
          <button 
            className="lg:hidden p-2" 
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <div className="space-y-1.5">
              <div className={`w-6 h-[1px] transition-colors duration-500 ${scrolled ? 'bg-[#2C2C2C]' : 'bg-[#F8F7F4]'}`}></div>
              <div className={`w-4 h-[1px] ml-auto transition-colors duration-500 ${scrolled ? 'bg-[#2C2C2C]' : 'bg-[#F8F7F4]'}`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY - Club Lounge Atmosphere */}
      <div className={`fixed inset-0 z-[60] bg-[#2C2C2C] transition-all duration-700 ease-in-out ${
        mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}>
        <div className="p-12 h-full flex flex-col justify-center items-center text-center overflow-y-auto">
          <button 
            onClick={() => setMobileOpen(false)} 
            className="absolute top-10 right-10 text-[#5A5A5A] hover:text-[#F8F7F4] transition-colors"
            aria-label="Close menu"
          >
            <X size={28} strokeWidth={1} />
          </button>

          <nav className="w-full max-w-sm space-y-8">
            <MobileMenuDropdown title="Portfolio" items={MENU_DATA.properties} />
            <MobileMenuDropdown title="Intelligence" items={MENU_DATA.insights} />
            <MobileMenuDropdown title="The Firm" items={MENU_DATA.company} />

            <div className="pt-12 border-t border-[#3D3530]">
              <a 
                href="/contact" 
                className="text-[10px] tracking-[0.4em] uppercase text-[#8B7355] hover:text-[#C4B59D] transition-colors border-b border-[#8B7355]/20 pb-2"
              >
                Request Private Consultation
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}