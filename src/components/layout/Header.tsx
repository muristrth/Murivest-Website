'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, LogIn, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Menu data structure - adjust paths as needed
const MENU_DATA = {
  properties: [
    { label: 'Commercial Assets', href: '/properties' },
    { label: 'Land Parcels', href: '/land-portfolio' },
    { label: 'UK Collection', href: '/uk-properties' },
    { label: 'Portfolio Map', href: '/map' },
  ],
  invest: [
    { label: 'Investment Criteria', href: '/invest' },
    { label: 'Underwrite Deal', href: '/cre-underwriting' },
    { label: 'Due Diligence', href: '/due-diligence' },
    { label: 'Institutional Investors', href: '/institutional-investors' },
  ],
  insights: [
    { label: 'Market Intel', href: '/blog' },
    { label: 'CRE Insights', href: '/cre-insights' },
    { label: 'Asset Intelligence', href: '/intelligence' },
    { label: 'Research', href: '/research' },
    { label: 'Videos', href: '/videos' },
  ],
  company: [
    { label: 'The Firm', href: '/about' },
    { label: 'Advisory Team', href: '/leadership' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Submit ATS', href: '/authority-to-sell' },
    { label: 'Legacy & Guide', href: '/legacy-guide' },
    { label: 'Contact', href: '/contact' },
  ],
};

// Types for auth state
interface InvestorPortalProps {
  isLoggedIn?: boolean;
  userName?: string;
  onLogin?: () => void;
  onLogout?: () => void;
}

// Desktop Mega Menu Component
const MegaMenu = ({ title, items }: { title: string; items: any[] }) => (
  <div className="relative group/menu">
    <button className="flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-[#C4B59D] hover:text-[#B8956B] py-8 transition-all duration-500 font-medium">
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
          <ul className="space-y-3">
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

// Mobile Menu Section Component (Flat Structure)
const MobileMenuSection = ({ 
  title, 
  items, 
  isOpen, 
  onToggle 
}: { 
  title: string; 
  items: any[]; 
  isOpen: boolean; 
  onToggle: () => void;
}) => (
  <div className="border-b border-[#2D5A45]/30 last:border-b-0">
    <button
      className="flex justify-between items-center w-full text-left py-5 px-6 transition-colors hover:bg-[#2D5A45]/10"
      onClick={onToggle}
      style={{ minHeight: '56px' }} // iPhone touch target
    >
      <span className="text-[13px] tracking-[0.2em] uppercase text-[#F8F7F4] font-medium">{title}</span>
      <ChevronDown 
        size={16} 
        className={`text-[#B8956B] transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} 
      />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden bg-[#163828]/50"
        >
          <ul className="py-4 px-6 space-y-1">
            {items.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className="block py-3 px-4 text-[14px] text-[#C4B59D] hover:text-[#F8F7F4] hover:bg-[#2D5A45]/20 transition-all rounded-sm"
                  style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }} // iPhone touch target
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// Investor Portal Button Component
const InvestorPortal = ({ 
  isLoggedIn, 
  userName, 
  onLogin, 
  scrolled 
}: InvestorPortalProps & { scrolled: boolean }) => {
  if (isLoggedIn && userName) {
    return (
      <a
        href="/investor-portal"
        className={`flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase transition-all duration-500 font-medium ${
          scrolled 
            ? 'text-[#1B4332] hover:text-[#B8956B]' 
            : 'text-[#C4B59D] hover:text-[#F8F7F4]'
        }`}
        style={{ minHeight: '44px' }}
      >
        <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${
          scrolled ? 'border-[#B8956B] bg-[#B8956B]/10' : 'border-[#B8956B]/40'
        }`}>
          <UserPlus size={14} strokeWidth={1.5} />
        </div>
        <span className="hidden lg:inline">{userName}</span>
      </a>
    );
  }

  return (
    <a
      href="/investor-portal"
      onClick={onLogin}
      className={`flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase transition-all duration-500 font-medium ${
        scrolled 
          ? 'text-[#1B4332] hover:text-[#B8956B]' 
          : 'text-[#C4B59D] hover:text-[#F8F7F4]'
      }`}
      style={{ minHeight: '44px' }}
    >
      <LogIn size={14} strokeWidth={1.5} />
      <span className="hidden sm:inline">Investor Portal</span>
    </a>
  );
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage auth state here or via props

  // Handle scroll with Safari compatibility
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    // Use passive listener for better scroll performance on mobile/Safari
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open (Safari compatible)
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed'; // Safari fix for body scroll
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [mobileOpen]);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#F8F7F4]/95 border-b border-[#E5E2DC] py-0' 
            : 'bg-[#1B4332]/95 backdrop-blur-md py-4 md:py-6'
        }`}
        style={{
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'blur(8px)',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(8px)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* BRANDING - Club Letterhead Style */}
            <a href="/" className="flex flex-col min-w-fit group shrink-0">
              <span className={`text-xl md:text-2xl font-serif tracking-[0.1em] transition-colors duration-500 ${
                scrolled ? 'text-[#1B4332] group-hover:text-[#B8956B]' : 'text-[#F8F7F4]'
              }`}>
                MURIVEST
              </span>
              <span className={`text-[8px] md:text-[9px] tracking-[0.4em] font-light uppercase -mt-1 transition-colors duration-500 ${
                scrolled ? 'text-[#B8956B]' : 'text-[#C4B59D]'
              }`}>
                Nairobi Private Office
              </span>
            </a>

            {/* NAV - Club Directory Style (Desktop) */}
            <nav className="hidden xl:flex items-center space-x-8 2xl:space-x-10">
              <MegaMenu title="Portfolio" items={MENU_DATA.properties} />
              <MegaMenu title="Invest" items={MENU_DATA.invest} />
              <MegaMenu title="Intelligence" items={MENU_DATA.insights} />
              <MegaMenu title="The Firm" items={MENU_DATA.company} />
              
              <div className={`h-6 w-[1px] transition-colors duration-500 ${
                scrolled ? 'bg-[#E5E2DC]' : 'bg-white/20'
              }`} />

              {/* Investor Portal */}
              <InvestorPortal 
                isLoggedIn={isLoggedIn} 
                userName="J. Harrington" 
                scrolled={scrolled}
                onLogin={() => setIsLoggedIn(true)}
              />

              <div className={`h-6 w-[1px] transition-colors duration-500 ${
                scrolled ? 'bg-[#E5E2DC]' : 'bg-white/20'
              }`} />

              <a 
                href="/cre-underwriting" 
                className={`text-[10px] tracking-[0.2em] uppercase border px-6 py-3 transition-all duration-500 font-medium whitespace-nowrap ${
                  scrolled 
                    ? 'border-[#B8956B] text-[#B8956B] hover:bg-[#B8956B] hover:text-[#F8F7F4]' 
                    : 'border-[#B8956B]/50 text-[#C4B59D] hover:bg-[#B8956B] hover:text-[#1B4332]'
                }`}
                style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
              >
                Underwrite
              </a>
            </nav>

            {/* Mobile Actions */}
            <div className="flex items-center gap-4 xl:hidden">
              {/* Investor Portal Icon Only on Mobile Header */}
              <InvestorPortal 
                isLoggedIn={isLoggedIn} 
                userName="J. Harrington" 
                scrolled={scrolled}
                onLogin={() => setIsLoggedIn(true)}
              />

              {/* Mobile Toggle */}
              <button 
                className="p-2 -mr-2" 
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                style={{ minWidth: '44px', minHeight: '44px' }} // iPhone touch target
              >
                <div className="space-y-1.5 flex flex-col items-end">
                  <div className={`w-6 h-[1px] transition-all duration-500 ${scrolled ? 'bg-[#1B4332]' : 'bg-[#F8F7F4]'}`}></div>
                  <div className={`w-4 h-[1px] transition-all duration-500 ${scrolled ? 'bg-[#1B4332]' : 'bg-[#F8F7F4]'}`}></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY - Fixed Structure */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#1B4332]/90 z-[60] xl:hidden"
              onClick={() => setMobileOpen(false)}
              style={{ 
                WebkitBackdropFilter: 'blur(8px)',
                backdropFilter: 'blur(8px)' 
              }}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#1B4332] z-[70] xl:hidden overflow-hidden flex flex-col"
              style={{
                paddingTop: 'env(safe-area-inset-top)',
                paddingBottom: 'env(safe-area-inset-bottom)',
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D5A45]/30 shrink-0">
                <span className="text-[#F8F7F4] font-serif text-lg tracking-[0.1em]">MENU</span>
                <button 
                  onClick={() => setMobileOpen(false)} 
                  className="p-2 text-[#C4B59D] hover:text-[#F8F7F4] transition-colors"
                  aria-label="Close menu"
                  style={{ minWidth: '44px', minHeight: '44px' }}
                >
                  <X size={24} strokeWidth={1} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                {/* Investor Portal Section (Prominent) */}
                <div className="p-6 border-b border-[#2D5A45]/30 bg-[#2D5A45]/20">
                  <a 
                    href={isLoggedIn ? "/portal" : "/login"}
                    className="flex items-center gap-3 text-[#F8F7F4] py-3"
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-full border border-[#B8956B] flex items-center justify-center">
                      <User size={18} strokeWidth={1.5} className="text-[#B8956B]" />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.2em] uppercase text-[#B8956B] mb-1">
                        Investor Portal
                      </p>
                      <p className="text-[14px] text-[#F8F7F4]">
                        {isLoggedIn ? 'View Dashboard' : 'Login / Register'}
                      </p>
                    </div>
                    <UserPlus size={16} className="ml-auto text-[#B8956B]" />
                  </a>
                </div>

                {/* Menu Sections */}
                <nav className="py-2">
                  <MobileMenuSection 
                    title="Portfolio" 
                    items={MENU_DATA.properties} 
                    isOpen={openSection === 'portfolio'}
                    onToggle={() => toggleSection('portfolio')}
                  />
                  <MobileMenuSection 
                    title="Invest" 
                    items={MENU_DATA.invest} 
                    isOpen={openSection === 'invest'}
                    onToggle={() => toggleSection('invest')}
                  />
                  <MobileMenuSection 
                    title="Intelligence" 
                    items={MENU_DATA.insights} 
                    isOpen={openSection === 'insights'}
                    onToggle={() => toggleSection('insights')}
                  />
                  <MobileMenuSection 
                    title="The Firm" 
                    items={MENU_DATA.company} 
                    isOpen={openSection === 'company'}
                    onToggle={() => toggleSection('company')}
                  />
                </nav>

                {/* Quick Actions */}
                <div className="p-6 space-y-3 border-t border-[#2D5A45]/30">
                  <a 
                    href="/cre-underwriting"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center w-full py-4 bg-[#B8956B] text-[#1B4332] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#C4B59D] transition-colors"
                    style={{ minHeight: '48px' }}
                  >
                    Underwrite a Deal
                  </a>
                  <a 
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center w-full py-4 border border-[#B8956B] text-[#B8956B] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#B8956B] hover:text-[#1B4332] transition-colors"
                    style={{ minHeight: '48px' }}
                  >
                    Request Consultation
                  </a>
                </div>

                {/* Footer Info */}
                <div className="px-6 py-8 text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-[1px] bg-[#B8956B]/30"></div>
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[#8B8680]">Murivest</span>
                    <div className="w-12 h-[1px] bg-[#B8956B]/30"></div>
                  </div>
                  <p className="text-[10px] text-[#5A7A6A] tracking-wide">
                    Nairobi Private Office
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20 lg:h-24" />
    </>
  );
}

// Legacy export for backward compatibility
export const HeaderSpacer = () => <div className="h-16 md:h-20 lg:h-24" />;