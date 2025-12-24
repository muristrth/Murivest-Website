'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight, Settings2, Briefcase, Globe, TrendingUp, BarChart3, Home } from 'lucide-react';
// Import your data and types from the lib folder
import { MENU_DATA, MenuItem } from '@/lib/menu';

/* --- Shared Sell Button --- */
const SellButton = ({ className = "" }: { className?: string }) => (
  <a
    href="/sell"
    className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-yellow-600 px-5 py-2.5 text-[11px] font-bold tracking-wider text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-600/30 active:scale-95 ${className}`}
  >
    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-in-out group-hover:translate-x-full" />
    <div className="absolute inset-0 rounded-lg border border-white/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <span className="relative uppercase">List Property</span>
    <ArrowUpRight className="relative h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </a>
);

/* --- Desktop Dropdown --- */
const MegaMenu = ({ title, items, icon: Icon }: { title: string; items: MenuItem[]; icon?: any }) => (
  <div className="relative group">
    <button className="flex items-center gap-1.5 text-[13px] font-medium tracking-wide text-gray-200 hover:text-yellow-500 py-6 transition-all duration-300">
      {Icon && <Icon size={14} className="text-gray-400 group-hover:text-yellow-500" />}
      {title}
      <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
    </button>
    <div className="absolute left-0 top-[100%] invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-64 pt-2 z-50">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="h-1 bg-yellow-600 w-full" /> {/* Subtle accent bar */}
        <ul className="py-3">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="block px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-yellow-600 hover:bg-gray-50 transition-all">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

/* --- Mobile Section --- */
const MobileSection = ({ title, items, onNavigate }: { title: string; items: MenuItem[]; onNavigate: () => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button onClick={() => setOpen(!open)} className="flex justify-between items-center w-full py-5 text-gray-800 text-base font-semibold">
        {title}
        <ChevronDown size={20} className={`transition-transform duration-300 ${open ? 'rotate-180 text-yellow-600' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pb-4 space-y-4">
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={onNavigate} className="block pl-4 text-sm font-medium text-gray-500 hover:text-yellow-600">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-gray-950/90 backdrop-blur-md py-0' : 'bg-gradient-to-r from-gray-950 to-blue-950 py-2'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          
          <a href="/" className="group flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-yellow-600 flex items-center justify-center font-black text-gray-950 transition-transform group-hover:rotate-12 group-hover:scale-110">M</div>
            <div className="text-sm text-white font-bold uppercase">
              Murivest <span className="text-yellow-600">Realty</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-7">
            <a href="/" className="text-[13px] font-medium text-gray-200 hover:text-yellow-500 transition-colors">Home</a>
            <MegaMenu title="Properties" items={MENU_DATA.properties} icon={Home} />
            <MegaMenu title="Markets" items={MENU_DATA.markets} icon={Globe} />
            <MegaMenu title="Invest" items={MENU_DATA.invest} icon={TrendingUp} />
            <MegaMenu title="Insights" items={MENU_DATA.insights} icon={BarChart3} />
            
            {/* New Utilities Dropdown */}
            <MegaMenu title="Utilities" items={MENU_DATA.utilities} icon={Settings2} />
            <MegaMenu title="Company" items={MENU_DATA.company} icon={Briefcase} />

            <div className="pl-6 border-l border-white/10 flex items-center gap-6">
              <SellButton />
            </div>
          </nav>

          <button className="lg:hidden p-2 text-white" onClick={() => setMobileOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[60] bg-white transition-transform duration-500 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Menu</span>
          <button onClick={() => setMobileOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} className="text-gray-900" />
          </button>
        </div>

        <div className="flex flex-col justify-between h-[calc(100vh-5rem)] overflow-y-auto px-6">
          <nav className="py-2">
            <MobileSection title="Markets" items={MENU_DATA.markets} onNavigate={() => setMobileOpen(false)} />
            <MobileSection title="Invest" items={MENU_DATA.invest} onNavigate={() => setMobileOpen(false)} />
            <MobileSection title="Insights" items={MENU_DATA.insights} onNavigate={() => setMobileOpen(false)} />
            <MobileSection title="Utilities" items={MENU_DATA.utilities} onNavigate={() => setMobileOpen(false)} />
            <a href="/about" className="block py-5 text-base font-semibold text-gray-800 border-b border-gray-100">About Us</a>
          </nav>

          <div className="py-10">
            <SellButton className="w-full justify-center py-4 text-sm" />
          </div>
        </div>
      </div>
    </header>
  );
}