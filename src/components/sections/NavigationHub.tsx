'use client';

import React from 'react';
import Link from 'next/link';
import {
  Building,
  FileText,
  Calculator,
  Users,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  BarChart3,
  Shield,
  Award
} from 'lucide-react';

const NavigationHub = () => {
  const navigationSections = [
    {
      title: "Global Markets",
      description: "Explore institutional opportunities across continents",
      icon: Globe,
      links: [
        { href: "/africa", label: "Africa Hub", description: "Institutional-grade opportunities across 12+ African markets" },
        { href: "/middle-east", label: "Middle East", description: "Gulf capital flows to African and European assets" },
        { href: "/asia-pacific", label: "Asia-Pacific", description: "Cross-continental investment synergies" },
        { href: "/europe", label: "Europe", description: "Mature markets and capital diversification" },
        { href: "/americas", label: "Americas", description: "U.S. and Caribbean family office strategies" }
      ]
    },
    {
      title: "Market Intelligence",
      description: "Expert insights and institutional research",
      icon: TrendingUp,
      links: [
        { href: "/market-insights", label: "Market Insights", description: "Emerging asset classes and sector analysis" },
        { href: "/country-focus", label: "Country Focus", description: "Detailed analysis of 12 African markets" },
        { href: "/research", label: "Research Library", description: "Institutional reports and market analysis" },
        { href: "/videos", label: "Fiduciary Conversations", description: "Expert video insights from industry leaders" }
      ]
    },
    {
      title: "Investment Tools",
      description: "Professional tools for investment decision-making",
      icon: BarChart3,
      links: [
        { href: "/properties", label: "Property Portfolio", description: "Curated selection of premium assets" },
        { href: "/calculator", label: "Investment Calculator", description: "Calculate potential returns and ROI" },
        { href: "/currency-risk-analysis", label: "Currency Analysis", description: "FX risk management and hedging strategies" },
        { href: "/due-diligence-reports", label: "Due Diligence", description: "Comprehensive property analysis reports" }
      ]
    },
  ];

  const quickLinks = [
    { href: "/africa", label: "Africa Markets", icon: Globe },
    { href: "/market-insights", label: "Market Insights", icon: TrendingUp },
    { href: "/research", label: "Research Library", icon: FileText },
    { href: "/contact", label: "Consultation", icon: Phone }
  ];

  return (
    <section className="luxury-section-spacing bg-gradient-to-b from-slate-50 to-white">
      <div className="luxury-container luxury-padding">
        {/* Section Header */}
        <div className="text-center luxury-margin-bottom">
          <h2 className="text-4xl font-serif font-light text-gray-900 mb-8 luxury-text-spacing">
            Global Real Estate Intelligence Platform
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto luxury-text-spacing">
            Access institutional-grade market intelligence, cross-border investment opportunities, and expert insights
            across Africa, the Middle East, Asia-Pacific, Europe, and the Americas.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 luxury-grid-gap mb-20">
          {navigationSections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-3 rounded-xl mr-4">
                  <section.icon className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-medium text-gray-900 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 font-light">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="block group"
                  >
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-all duration-300 border border-gray-100 hover:border-amber-200">
                      <div className="flex-1">
                        <h4 className="font-serif font-medium text-gray-900 group-hover:text-amber-700 transition-colors mb-1">
                          {link.label}
                        </h4>
                        <p className="text-sm text-gray-600 font-light">
                          {link.description}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Access Bar */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-light mb-4">
              Quick Access
            </h3>
            <p className="text-slate-300 font-light">
              Jump directly to the most popular sections of our platform
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group"
              >
                <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-amber-400/50">
                  <link.icon className="h-8 w-8 text-amber-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-serif font-medium text-white group-hover:text-amber-300 transition-colors">
                    {link.label}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SEO Footer Links */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h4 className="text-lg font-serif font-light text-gray-900 mb-4">
              Explore More Resources
            </h4>
            <p className="text-gray-600 font-light">
              Additional tools and information to support your investment decisions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/country-focus" className="text-center group">
              <div className="p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors border border-gray-100 hover:border-amber-200">
                <MapPin className="h-6 w-6 text-amber-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-serif font-medium text-gray-900 group-hover:text-amber-700">
                  Country Focus
                </span>
              </div>
            </Link>

            <Link href="/videos" className="text-center group">
              <div className="p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors border border-gray-100 hover:border-amber-200">
                <FileText className="h-6 w-6 text-amber-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-serif font-medium text-gray-900 group-hover:text-amber-700">
                  Expert Videos
                </span>
              </div>
            </Link>

            <Link href="/leadership" className="text-center group">
              <div className="p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors border border-gray-100 hover:border-amber-200">
                <Award className="h-6 w-6 text-amber-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-serif font-medium text-gray-900 group-hover:text-amber-700">
                  Leadership
                </span>
              </div>
            </Link>

            <Link href="/contact" className="text-center group">
              <div className="p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors border border-gray-100 hover:border-amber-200">
                <Mail className="h-6 w-6 text-amber-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-serif font-medium text-gray-900 group-hover:text-amber-700">
                  Contact Us
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Sitemap Link */}
        <div className="mt-12 text-center">
          <Link
            href="/sitemap.xml"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-serif font-light text-sm transition-colors"
          >
            <FileText className="h-4 w-4 mr-2" />
            View Complete Sitemap
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NavigationHub;
