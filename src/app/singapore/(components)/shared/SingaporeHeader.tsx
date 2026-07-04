'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Lock } from 'lucide-react';

const navLinks = [
  { label: 'Properties', href: '/singapore/properties' },
  { label: 'Insights', href: '/singapore/insights' },
  { label: 'Services', href: '/singapore/services' },
  { label: 'Market', href: '/singapore/singapore-market' },
  { label: 'About', href: '/singapore/about' },
  { label: 'Contact', href: '/singapore/contact' },
];

export default function SingaporeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E8E6E1]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/singapore" className="flex items-center gap-3">
          <span className="font-serif text-xl text-[#1B4332]">Murivest</span>
          <span className="text-[#E8E6E1]">|</span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8956B] font-medium">Singapore</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] tracking-[0.15em] uppercase transition-colors ${
                pathname === link.href || pathname?.startsWith(link.href + '/')
                  ? 'text-[#1B4332] font-medium'
                  : 'text-[#5A5A5A] hover:text-[#1B4332]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/singapore/investor-portal"
            className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase bg-[#1B4332] text-white px-4 py-2 hover:bg-[#2D5A45] transition-colors"
          >
            <Lock className="w-3 h-3" strokeWidth={1.5} />
            Portal
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center"
        >
          {menuOpen ? <X className="w-5 h-5 text-[#2C2C2C]" strokeWidth={1.5} /> : <Menu className="w-5 h-5 text-[#2C2C2C]" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8E6E1]">
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-[12px] tracking-[0.15em] uppercase py-2 transition-colors ${
                  pathname === link.href ? 'text-[#1B4332] font-medium' : 'text-[#5A5A5A]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/singapore/investor-portal"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-[11px] tracking-[0.15em] uppercase bg-[#1B4332] text-white py-3"
            >
              <Lock className="w-3.5 h-3.5" strokeWidth={1.5} />
              Investor Portal
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
