'use client'; // Add this line

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronDown, ChevronUp, ExternalLink, Search, Languages } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isInvestDropdownOpen, setIsInvestDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isSwahili, setIsSwahili] = useState(false);
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
    setIsDesktopMenuOpen(false);
  };

  return (
    <header className="shadow-2xl sticky top-0 z-50 bg-navy-950 bg-opacity-95 relative">
      {/* Hero background extension */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url("/kenya-night.png")`,
        }}
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex justify-between items-center py-3">
          {/* Mobile hamburger menu */}
          <button
            className="md:hidden text-gray-300 hover:text-gold-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Logo centered on desktop */}
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Murivest Realty Group"
                className="h-8 w-auto"
              />
              <div className="ml-3">
                <Link href="/">
                  <h1 className="text-xs font-luxury font-light text-white tracking-tight">
                    MURIVEST<span className="text-gold-400 font-medium"> REALTY LTD.</span>
                  </h1>
                  <p className="text-xs text-white font-orpheus tracking-widest">
                    Concierge of Capital
                  </p>
                </Link>
                
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-1 justify-start">
            <div className="flex items-center space-x-4">
              <Link
                href="/asset-care-resources"
                className={`block font-luxury text-xs font-light tracking-wide transition-all duration-300 py-3 ${
                  isActive('/')
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-400'
                }`}
                onClick={closeAllDropdowns}
              >
                AssetCare Mgt
              </Link>
              <Link
                href="/"
                className={`block font-luxury text-xs font-light tracking-wide transition-all duration-300 py-3 ${
                  isActive('/')
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-400'
                }`}
                onClick={closeAllDropdowns}
              >
                How it Works
              </Link>
              <Link
                href="/pricing"
                className={`block font-luxury text-xs font-light tracking-wide transition-all duration-300 py-3 ${
                  isActive('/')
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-400'
                }`}
                onClick={closeAllDropdowns}
              >
                Pricing
              </Link>
              <Link
                href="/properties"
                className={`block font-luxury text-xs font-light tracking-wide transition-all duration-300 py-3 ${
                  isActive('/')
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-400'
                }`}
                onClick={closeAllDropdowns}
              >
                Our Portfolio
              </Link>
              <Link
                href="/how-assetcare-works"
                className={`block font-luxury text-xs font-light tracking-wide transition-all duration-300 py-3 ${
                  isActive('/')
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-400'
                }`}
                onClick={closeAllDropdowns}
              >
                AssetCare+
              </Link>
              <Link
                href="/how-cre-works"
                className={`block font-luxury text-xs font-light tracking-wide transition-all duration-300 py-3 ${
                  isActive('/')
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-400'
                }`}
                onClick={closeAllDropdowns}
              >
                How CRE Works
              </Link>
            </div>
          </div>

          {/* Language Toggle & Desktop Menu Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="flex items-center text-gray-300 hover:text-gold-400 transition-colors"
              onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="ml-2 text-sm font-luxury">Menu</span>
            </button>
          </div>

          {/* Desktop Nav - Side Menu */}
          {isDesktopMenuOpen && (
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-30"
                onClick={() => setIsDesktopMenuOpen(false)}
              />
              {/* Side Menu */}
              <div className="fixed top-0 right-0 h-full w-60 bg-navy-950 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out">
                <div className="flex flex-col h-full">
                  {/* Close button */}
                  <div className="flex justify-end p-4">
                    <button
                      onClick={() => setIsDesktopMenuOpen(false)}
                      className="text-gray-300 hover:text-gold-400 transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Menu items */}
                  <nav className="flex-1 px-3 py-4">
                    <div className="space-y-2">
                      <Link
                        href="/"
                        className={`block font-luxury text-xs font-light tracking-wide transition-all duration-300 py-3 ${
                          isActive('/')
                            ? 'text-gold-400'
                            : 'text-gray-300 hover:text-gold-400'
                        }`}
                        onClick={closeAllDropdowns}
                      >
                        Home
                      </Link>

                      <Link
                        href="/properties"
                        className={`block font-luxury text-xs font-light tracking-wide transition-all duration-300 py-3 ${
                          isActive('/properties')
                            ? 'text-gold-400'
                            : 'text-gray-300 hover:text-gold-400'
                        }`}
                        onClick={closeAllDropdowns}
                      >
                        Commercial Properties
                      </Link>

                      <Link
                        href="/global-markets"
                        className={`block font-luxury text-xs font-light tracking-wide transition-all duration-300 py-3 ${
                          isActive('/global-markets')
                            ? 'text-gold-400'
                            : 'text-gray-300 hover:text-gold-400'
                        }`}
                        onClick={closeAllDropdowns}
                      >
                        Global Markets
                      </Link>

                      <Link
                        href="/market-insights"
                        className={`block font-luxury text-xs font-light tracking-wide transition-all duration-300 py-3 ${
                          isActive('/market-insights')
                            ? 'text-gold-400'
                            : 'text-gray-300 hover:text-gold-400'
                        }`}
                        onClick={closeAllDropdowns}
                      >
                        Market Insights
                      </Link>

                      <Link
                        href="/blog"
                        className={`block font-luxury text-xs font-light tracking-wide transition-all duration-300 py-3 ${
                          isActive('/blog')
                            ? 'text-gold-400'
                            : 'text-gray-300 hover:text-gold-400'
                        }`}
                        onClick={closeAllDropdowns}
                      >
                        Blogs
                      </Link>

                      {/* Markets Dropdown */}
                      <div className="space-y-2">
                        <button
                          className={`w-full text-left font-luxury text-xs font-light tracking-wide transition-all duration-300 py-3 flex items-center justify-between ${
                            pathname.startsWith('/africa') || pathname.startsWith('/middle-east') || pathname.startsWith('/asia-pacific') || pathname.startsWith('/europe') || pathname.startsWith('/americas')
                              ? 'text-gold-400'
                              : 'text-gray-300 hover:text-gold-400'
                          }`}
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
                          <div className="pl-4 space-y-2">
                            <Link
                              href="/africa"
                              className="block text-gray-400 text-xs hover:text-gold-400 transition-colors py-2"
                              onClick={closeAllDropdowns}
                            >
                              Africa Hub
                            </Link>
                            <Link
                              href="/middle-east"
                              className="block text-gray-400 text-xs hover:text-gold-400 transition-colors py-2"
                              onClick={closeAllDropdowns}
                            >
                              Middle East
                            </Link>
                            <Link
                              href="/asia-pacific"
                              className="block text-gray-400 text-xs hover:text-gold-400 transition-colors py-2"
                              onClick={closeAllDropdowns}
                            >
                              Asia-Pacific
                            </Link>
                            <Link
                              href="/europe"
                              className="block text-gray-400 text-xs hover:text-gold-400 transition-colors py-2"
                              onClick={closeAllDropdowns}
                            >
                              Europe
                            </Link>
                            <Link
                              href="/americas"
                              className="block text-gray-400 text-xs hover:text-gold-400 transition-colors py-2"
                              onClick={closeAllDropdowns}
                            >
                              Americas
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* About Dropdown */}
                      <div className="space-y-2">
                        <button
                          className={`w-full text-left font-luxury text-xs font-light tracking-wide transition-all duration-300 py-3 flex items-center justify-between ${
                            pathname.startsWith('/about')
                              ? 'text-gold-400'
                              : 'text-gray-300 hover:text-gold-400'
                          }`}
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
                          <div className="pl-4 space-y-2">
                            <Link
                              href="/about"
                              className="block text-gray-400 text-xs hover:text-gold-400 transition-colors py-2"
                              onClick={closeAllDropdowns}
                            >
                              About Murivest
                            </Link>
                            <Link
                              href="/faq"
                              className="block text-gray-400 text-xs hover:text-gold-400 transition-colors py-2"
                              onClick={closeAllDropdowns}
                            >
                              FAQs
                            </Link>
                            <Link
                              href="/research"
                              className="block text-gray-400 text-xs hover:text-gold-400 transition-colors py-2"
                              onClick={closeAllDropdowns}
                            >
                              Research
                            </Link>
                            <Link
                              href="/videos"
                              className="block text-gray-400 text-xs hover:text-gold-400 transition-colors py-2"
                              onClick={closeAllDropdowns}
                            >
                              Media
                            </Link>
                            <Link
                              href="/"
                              className="block text-gray-400 text-xs hover:text-gold-400 transition-colors py-2"
                              onClick={closeAllDropdowns}
                            >
                              Murivest Realty Group
                            </Link>
                            <Link
                              href="/foundation"
                              className="block text-gray-400 text-xs hover:text-gold-400 transition-colors py-2"
                              onClick={closeAllDropdowns}
                            >
                              Murivest Foundation
                            </Link>
                          </div>
                        )}
                      </div>

                      <Link
                        href="/contact"
                        className={`block font-luxury text-xs font-light tracking-wide transition-all duration-300 py-3 ${
                          isActive('/contact')
                            ? 'text-gold-400'
                            : 'text-gray-300 hover:text-gold-400'
                        }`}
                        onClick={closeAllDropdowns}
                      >
                        Contact
                      </Link>

                      <Link
                        href="/it-project-management"
                        className={`block font-luxury text-xs font-light tracking-wide transition-all duration-300 py-3 ${
                          isActive('/it-project-management')
                            ? 'text-gold-400'
                            : 'text-gray-300 hover:text-gold-400'
                        }`}
                        onClick={closeAllDropdowns}
                      >
                        Property Mgt
                      </Link>


                      {/* List Property Button */}
                      <div className="pt-2">
                        <Link href="/sell">
                          <button className="w-full bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 font-luxury font-medium text-xs transition-all duration-300">
                            List Property
                          </button>
                        </Link>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-navy-700">
            {/* Mobile Search Bar */}
            <div className="px-4 mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter location or property name…"
                  className="w-full pl-4 pr-12 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-navy-950 bg-white"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              </div>
            </div>

            <nav className="flex flex-col space-y-3">
              {/* Language Toggle Mobile */}
              <button
                className="flex items-center font-luxury text-sm font-light tracking-wide transition-colors text-gray-300 hover:text-gold-400 py-1"
                onClick={() => setIsSwahili(!isSwahili)}
              >
                <Languages className="h-4 w-4 mr-2" />
                {isSwahili ? 'Lugha: Kiswahili' : 'Language: English'}
              </button>

              <Link
                href="/"
                className={`font-luxury text-sm font-light tracking-wide transition-colors ${
                  isActive('/') ? 'text-gold-400' : 'text-gray-300 hover:text-gold-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Home
              </Link>
              <Link
                href="/properties"
                className={`font-luxury text-sm font-light tracking-wide transition-colors ${
                  isActive('/properties')
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Commercial Properties
              </Link>
  
              {/* About mobile dropdown */}
              <div className="flex flex-col">
                <button
                  className={`font-luxury text-sm font-light tracking-wide transition-colors flex items-center justify-between ${
                    pathname.startsWith('/about') // Corrected this line
                      ? 'text-gold-400'
                      : 'text-gray-300 hover:text-gold-400'
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
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-navy-800 hover:text-gold-400"
                    onClick={closeAllDropdowns}
                  >
                    FAQs
                  </Link>
                    <Link
                      href="/about"
                      className="text-sm text-gray-400 hover:text-gold-400"
                      onClick={closeAllDropdowns}
                    >
                      About Murivest
                    </Link>
                    <Link
                      href="/"
                      className="text-sm text-gray-400 hover:text-gold-400"
                      onClick={closeAllDropdowns}
                    >
                      Murivest Realty
                    </Link>
                    <Link
                      href="/foundation"
                      className="text-sm text-gray-400 hover:text-gold-400"
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
                  className={`font-luxury text-sm font-light tracking-wide transition-colors flex items-center justify-between ${
                    pathname.startsWith('/africa') || pathname.startsWith('/middle-east') || pathname.startsWith('/asia-pacific') || pathname.startsWith('/europe') || pathname.startsWith('/americas')
                      ? 'text-gold-400'
                      : 'text-gray-300 hover:text-gold-400'
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
                      className="text-sm text-gray-400 hover:text-gold-400"
                      onClick={closeAllDropdowns}
                    >
                      Africa Hub
                    </Link>
                    <Link
                      href="/middle-east"
                      className="text-sm text-gray-400 hover:text-gold-400"
                      onClick={closeAllDropdowns}
                    >
                      Middle East
                    </Link>
                    <Link
                      href="/asia-pacific"
                      className="text-sm text-gray-400 hover:text-gold-400"
                      onClick={closeAllDropdowns}
                    >
                      Asia-Pacific
                    </Link>
                    <Link
                      href="/europe"
                      className="text-sm text-gray-400 hover:text-gold-400"
                      onClick={closeAllDropdowns}
                    >
                      Europe
                    </Link>
                    <Link
                      href="/americas"
                      className="text-sm text-gray-400 hover:text-gold-400"
                      onClick={closeAllDropdowns}
                    >
                      Americas
                    </Link>
                  </div>
                )}
              </div>

              
              <Link
                href="/global-markets"
                className={`font-luxury text-sm font-light tracking-wide transition-colors ${
                  isActive('/global-markets')
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Global Markets
              </Link>
              <Link
                href="/market-insights"
                className={`font-luxury text-sm font-light tracking-wide transition-colors ${
                  isActive('/market-insights')
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Market Insights
              </Link>
              <Link
                href="/blog"
                className={`font-luxury text-sm font-light tracking-wide transition-colors ${
                  isActive('/blogs')
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Blogs
              </Link>
              <Link
                href="/research"
                className={`font-luxury text-sm font-light tracking-wide transition-colors ${
                  isActive('/research')
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Research
              </Link>

              <Link
                href="/videos"
                className={`font-luxury text-sm font-light tracking-wide transition-colors ${
                  isActive('/videos')
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Media
              </Link>
              <Link
                href="/contact"
                className={`font-luxury text-sm font-light tracking-wide transition-colors ${
                  isActive('/contact')
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Contact
              </Link>
              <Link
                href="/it-project-management"
                className={`font-luxury text-sm font-light tracking-wide transition-colors ${
                  isActive('/it-project-management')
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-400'
                } py-1`}
                onClick={closeAllDropdowns}
              >
                Property Mgt
              </Link>


              {/* Mobile List Property Button */}
              <Link href="/sell" className="pt-2">
                <button className="w-full bg-gold-600 hover:bg-gold-700 text-white px-4 py-3 font-luxury font-medium text-sm transition-all duration-300">
                  List Property
                </button>
              </Link>
            </nav>

          </div>
        )}
      </div>

    </header>
  );
};

export default Header;
