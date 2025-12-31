'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
// Assuming MENU_DATA contains: properties, markets, invest, insights, utilities, company
import { MENU_DATA } from '@/lib/menu';
// Import or define MobileAccordion and required icons
import { Phone, Globe } from 'lucide-react';

// Simple MobileAccordion implementation (replace with your actual one if available)
const MobileAccordion = ({ title, items }: { title: string; items: any[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full text-left text-slate-300 py-3 border-b border-white/10"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="text-[12px] font-semibold">{title}</span>
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul className="pl-4 mt-2 space-y-2">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="block text-[12px] text-slate-400 hover:text-amber-500 transition-colors py-1">
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
        className="flex items-center justify-center gap-3 w-full text-3xl font-serif text-white hover:text-amber-200 transition-all duration-500"
      >
        <span>{title}</span>
        <ChevronDown 
          size={20} 
          className={`text-amber-600 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} 
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
                className="text-[11px] tracking-[0.3em] uppercase text-slate-400 hover:text-white transition-colors"
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
    <button className="flex items-center gap-1 text-[11px] font-medium tracking-[0.2em] uppercase text-slate-300 hover:text-amber-500 py-8 transition-all duration-500">
      {title}
      <ChevronDown size={10} className="opacity-40 transition-transform duration-500 group-hover/menu:rotate-180" />
    </button>
    
    {/* Full Width or Large Dropdown */}
    <div className="absolute left-0 top-[100%] invisible opacity-0 translate-y-4 group-hover/menu:visible group-hover/menu:opacity-100 group-hover/menu:translate-y-0 transition-all duration-700 w-[280px] z-50">
      <div className="bg-slate-950/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mt-1 p-6">
        <div className="mb-4">
          <p className="text-[9px] tracking-[0.3em] text-amber-500/60 uppercase font-bold border-b border-white/5 pb-2 mb-4">
            Select Department
          </p>
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className="group/link flex items-center justify-between py-2 text-[12px] text-slate-300 hover:text-white transition-colors"
                >
                  <span className="tracking-wide">{item.label}</span>
                  <div className="h-[1px] w-0 bg-amber-500 transition-all duration-500 group-hover/link:w-4" />
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-1000 ${
      scrolled ? 'bg-slate-950/95 border-b border-white/5 py-0' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          
          {/* BRANDING */}
          <a href="/" className="flex flex-col min-w-fit">
            <span className="text-2xl font-serif tracking-[0.15em] text-white">MURIVEST</span>
            <span className="text-[9px] tracking-[0.5em] text-amber-500/80 font-light uppercase -mt-1">Nairobi Private Office</span>
          </a>

          {/* NAV: Logic-based groupings for UHNWI */}
          <nav className="hidden xl:flex items-center space-x-8">
            <MegaMenu title="Portfolio" items={MENU_DATA.properties} />
            <MegaMenu title="Markets" items={MENU_DATA.markets} />
            <MegaMenu title="Invest" items={MENU_DATA.invest} />
            <MegaMenu title="Intel" items={MENU_DATA.insights} />
            <MegaMenu title="The Firm" items={MENU_DATA.company} />
            <MegaMenu title="Client Desk" items={MENU_DATA.utilities} />
            
            <div className="h-6 w-[1px] bg-white/10 mx-4" />

            <a 
              href="/sell" 
              className="text-[10px] tracking-[0.3em] uppercase border border-amber-500/40 px-8 py-3.5 hover:bg-amber-600 hover:text-slate-950 transition-all duration-700 font-semibold text-amber-500"
            >
              Asset Divestment
            </a>
          </nav>

          {/* MOBILE TOGGLE */}
          <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(true)}>
            <div className="space-y-1.5">
              <div className="w-6 h-[1px] bg-white"></div>
              <div className="w-4 h-[1px] bg-white ml-auto"></div>
            </div>
          </button>
        </div>
      </div>

{/* MOBILE OVERLAY: High-end Drawer */}
      <div className={`fixed inset-0 z-[60] bg-slate-950 transition-all duration-700 ease-in-out ${
        mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}>
        <div className="p-12 h-full flex flex-col justify-center items-center text-center overflow-y-auto">
          <button 
            onClick={() => setMobileOpen(false)} 
            className="absolute top-10 right-10 text-slate-400 hover:text-white transition-colors"
          >
            <X size={32} strokeWidth={1} />
          </button>

          <nav className="w-full max-w-sm space-y-8">
            {/* 1. PORTFOLIO DROPDOWN */}
            <MobileMenuDropdown 
              title="Portfolio" 
              items={MENU_DATA.properties} 
            />

            {/* 2. INTELLIGENCE DROPDOWN */}
            <MobileMenuDropdown 
              title="Intelligence" 
              items={MENU_DATA.insights} 
            />

            {/* 3. THE FIRM DROPDOWN */}
            <MobileMenuDropdown 
              title="The Firm" 
              items={MENU_DATA.company} 
            />

            <div className="pt-12">
              <a 
                href="/contact" 
                className="text-[10px] tracking-[0.5em] uppercase text-amber-500 border-b border-amber-500/20 pb-2 hover:text-amber-200 transition-colors"
              >
                Request a Private Consultation
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}