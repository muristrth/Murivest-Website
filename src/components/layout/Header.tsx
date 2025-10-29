'use client'; // Add this line

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInvestDropdownOpen, setIsInvestDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Use the usePathname hook

  // The isActive function now uses the pathname from usePathname
  const isActive = (path: string) => pathname === path;

  // Toggle dropdowns (desktop or mobile)
  const toggleDropdown = (
    dropdownState: boolean,
    setDropdownState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setIsInvestDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setDropdownState(!dropdownState);
  };

  const closeAllDropdowns = () => {
    setIsInvestDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-slate-900 shadow-2xl sticky top-0 z-50 border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Murivest Realty Group"
              className="h-8 w-auto"
            />
            <div className="ml-3">
              <Link href="/">
                <h1 className="text-lg font-serif font-light text-white tracking-tight">
                  M<span className="text-amber-400 font-medium">RL</span>
                </h1>
                <p className="text-xs text-white font-serif uppercase tracking-widest">
                  Murivest Int.
                </p>
              </Link>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-serif text-sm font-light tracking-wide transition-all duration-300 ${
                isActive('/')
                  ? 'text-amber-400 border-b border-amber-400'
                  : 'text-gray-300 hover:text-amber-400 hover:border-b hover:border-amber-400/50'
              } pb-1`}
            >
              Home
            </Link>
            <nav/>
            <nav className="hidden md:flex items-center space-x-8">
            

            

            <Link
              href="/properties"
              className={`font-serif text-sm font-light tracking-wide transition-all duration-300 ${
                isActive('/properties')
                  ? 'text-amber-400 border-b border-amber-400'
                  : 'text-gray-300 hover:text-amber-400 hover:border-b hover:border-amber-400/50'
              } pb-1`}
            >
              Properties
            </Link>

            <Link
              href="/market-insights"
              className={`font-serif text-sm font-light tracking-wide transition-all duration-300 ${
                isActive('/market-insights')
                  ? 'text-amber-400 border-b border-amber-400'
                  : 'text-gray-300 hover:text-amber-400 hover:border-b hover:border-amber-400/50'
              } pb-1`}
            >
              Market Insights
            </Link>

          {/* Markets Dropdown */}
            <div className="relative">
              <button
                className={`font-serif text-sm font-light tracking-wide transition-all duration-300 flex items-center ${
                  pathname.startsWith('/africa') || pathname.startsWith('/middle-east') || pathname.startsWith('/asia-pacific') || pathname.startsWith('/europe') || pathname.startsWith('/americas')
                    ? 'text-amber-400 border-b border-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
                } pb-1`}
                onClick={() =>
                  toggleDropdown(isInvestDropdownOpen, setIsInvestDropdownOpen)
                }
              >
                Global Markets
                {isInvestDropdownOpen ? (
                  <ChevronUp className="ml-1 h-3 w-3" />
                ) : (
                  <ChevronDown className="ml-1 h-3 w-3" />
                )}
              </button>
              {isInvestDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 border border-amber-500/20 shadow-lg py-2 z-10">
                  <Link
                    href="/africa"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={closeAllDropdowns}
                  >
                    Africa Hub
                  </Link>
                  <Link
                    href="/middle-east"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={closeAllDropdowns}
                  >
                    Middle East
                  </Link>
                  <Link
                    href="/asia-pacific"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={closeAllDropdowns}
                  >
                    Asia-Pacific
                  </Link>
                  <Link
                    href="/europe"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={closeAllDropdowns}
                  >
                    Europe
                  </Link>
                  <Link
                    href="/americas"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={closeAllDropdowns}
                  >
                    Americas
                  </Link>
                </div>
              )}
            </div>
            {/* About Dropdown */}
            <div className="relative">
              <button
                className={`font-serif text-sm font-light tracking-wide transition-all duration-300 flex items-center ${
                  pathname.startsWith('/about') // Corrected this line
                    ? 'text-amber-400 border-b border-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
                } pb-1`}
                onClick={() =>
                  toggleDropdown(isAboutDropdownOpen, setIsAboutDropdownOpen)
                }
              >
                About
                {isAboutDropdownOpen ? (
                  <ChevronUp className="ml-1 h-3 w-3" />
                ) : (
                  <ChevronDown className="ml-1 h-3 w-3" />
                )}
              </button>
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 border border-amber-500/20 shadow-lg py-2 z-10">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={closeAllDropdowns}
                  >
                    About Murivest
                  </Link>
                  <Link
                    href="/faq"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={closeAllDropdowns}
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/research"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={closeAllDropdowns}
                  >
                    Research
                  </Link>
                  <Link
                    href="/videos"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={closeAllDropdowns}
                  >
                    Videos
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={closeAllDropdowns}
                  >
                    Murivest Realty Group
                  </Link>
                  <Link
                    href="/foundation"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={closeAllDropdowns}
                  >
                    Murivest Foundation
                  </Link>

                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`font-serif text-sm font-light tracking-wide transition-all duration-300 ${
                isActive('/contact')
                  ? 'text-amber-400 border-b border-amber-400'
                  : 'text-gray-300 hover:text-amber-400 hover:border-b hover:border-amber-400/50'
              } pb-1`}
            >
              Contact
            </Link>
            
            <Link
              href="/it-project-management"
              className={`font-serif text-sm font-light tracking-wide transition-all duration-300 ${
                isActive('/it-project-management')
                  ? 'text-amber-400 border-b border-amber-400'
                  : 'text-gray-300 hover:text-amber-400 hover:border-b hover:border-amber-400/50'
              } pb-1`}
            >
              Property Mgt
            </Link>
          </nav>

          {/* Desktop contact */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center text-xs text-gray-300">
              <Phone className="h-3 w-3 mr-1" />
              <Link
                href="tel:0115277610"
                className="font-serif hover:text-amber-400 transition-colors"
              >
                +254 115 277 610
              </Link>
            </div>
          </div>
          </nav>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-amber-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/') ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Home
              </Link>

              {/* About mobile dropdown */}
              <div className="flex flex-col">
                <button
                  className={`font-serif text-sm font-light tracking-wide transition-colors flex items-center justify-between ${
                    pathname.startsWith('/about') // Corrected this line
                      ? 'text-amber-400'
                      : 'text-gray-300 hover:text-amber-400'
                  } py-1`}
                  onClick={() =>
                    toggleDropdown(isAboutDropdownOpen, setIsAboutDropdownOpen)
                  }
                >
                  About
                  {isAboutDropdownOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {isAboutDropdownOpen && (
                  <div className="flex flex-col pl-4 space-y-2 mt-2">
                    <Link
                    href="/faq"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-amber-400"
                    onClick={closeAllDropdowns}
                  >
                    FAQs
                  </Link>
                    <Link
                      href="/about"
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={closeAllDropdowns}
                    >
                      About Murivest
                    </Link>
                    <Link
                      href="/"
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={closeAllDropdowns}
                    >
                      Murivest Realty
                    </Link>
                    <Link
                      href="/foundation"
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={closeAllDropdowns}
                    >
                      Murivest Foundation
                    </Link>
                  </div>
                )}
              </div>

              {/* Markets mobile dropdown */}
              <div className="flex flex-col">
                <button
                  className={`font-serif text-sm font-light tracking-wide transition-colors flex items-center justify-between ${
                    pathname.startsWith('/africa') || pathname.startsWith('/middle-east') || pathname.startsWith('/asia-pacific') || pathname.startsWith('/europe') || pathname.startsWith('/americas')
                      ? 'text-amber-400'
                      : 'text-gray-300 hover:text-amber-400'
                  } py-1`}
                  onClick={() =>
                    toggleDropdown(isInvestDropdownOpen, setIsInvestDropdownOpen)
                  }
                >
                  Global Markets
                  {isInvestDropdownOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {isInvestDropdownOpen && (
                  <div className="flex flex-col pl-4 space-y-2 mt-2">
                    <Link
                      href="/africa"
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={closeAllDropdowns}
                    >
                      Africa Hub
                    </Link>
                    <Link
                      href="/middle-east"
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={closeAllDropdowns}
                    >
                      Middle East
                    </Link>
                    <Link
                      href="/asia-pacific"
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={closeAllDropdowns}
                    >
                      Asia-Pacific
                    </Link>
                    <Link
                      href="/europe"
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={closeAllDropdowns}
                    >
                      Europe
                    </Link>
                    <Link
                      href="/americas"
                      className="text-sm text-gray-400 hover:text-amber-400"
                      onClick={closeAllDropdowns}
                    >
                      Americas
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/properties"
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/properties')
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Properties
              </Link>
              <Link
                href="/market-insights"
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/market-insights')
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Market Insights
              </Link>

              <Link
                href="/research"
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/research')
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Research
              </Link>

              <Link
                href="/videos"
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/videos')
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Videos
              </Link>
              <Link
                href="/contact"
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/contact')
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Contact
              </Link>
              <Link
                href="/it-project-management"
                className={`font-serif text-sm font-light tracking-wide transition-colors ${
                  isActive('/it-project-management')
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Property Mgt
              </Link>
            </nav>

          </div>
        )}
      </div>

    </header>
  );
};

export default Header;
