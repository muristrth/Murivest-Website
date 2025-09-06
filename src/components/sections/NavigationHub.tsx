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
      title: "Investment Opportunities",
      description: "Explore our curated portfolio of premium commercial properties",
      icon: Building,
      links: [
        { href: "/properties", label: "Commercial Properties", description: "Office buildings, retail spaces, and mixed-use developments" },
        { href: "/properties", label: "Investment Portfolio", description: "Curated selection of high-yield properties" },
        { href: "/market", label: "Market Intelligence", description: "Kenya real estate market analysis and trends" },
        { href: "/calculator", label: "Investment Calculator", description: "Calculate potential returns and ROI" }
      ]
    },
    {
      title: "Investment Insights",
      description: "Stay informed with market analysis and investment strategies",
      icon: TrendingUp,
      links: [
        { href: "/blog", label: "Investment Blog", description: "Latest market insights and investment strategies" },
        { href: "/market", label: "Market Reports", description: "Quarterly market analysis and economic outlook" },
        { href: "/leadership", label: "Executive Leadership", description: "Meet our investment team and expertise" },
        { href: "/process", label: "Investment Process", description: "How we identify and manage investments" }
      ]
    },
    {
      title: "About & Services",
      description: "Learn about our firm and comprehensive services",
      icon: Users,
      links: [
        { href: "/about", label: "About Murivest", description: "Our heritage and investment philosophy" },
        { href: "/foundation", label: "Murivest Foundation", description: "Our commitment to community development" },
        { href: "/leadership", label: "Leadership Team", description: "Experienced investment professionals" },
        { href: "/contact", label: "Contact Us", description: "Schedule a private consultation" }
      ]
    },
    {
      title: "Client Resources",
      description: "Tools and resources for our valued investors",
      icon: Shield,
      links: [
        { href: "/login", label: "Client Portal", description: "Access your private investor dashboard" },
        { href: "/dashboard", label: "Property Management", description: "Manage your rental properties" },
        { href: "/operations", label: "Operations Dashboard", description: "Property operations and maintenance" },
        { href: "/sell", label: "Sell Property", description: "List your property with us" }
      ]
    }
  ];

  const quickLinks = [
    { href: "/properties", label: "View Properties", icon: Building },
    { href: "/blog", label: "Latest Insights", icon: FileText },
    { href: "/calculator", label: "ROI Calculator", icon: Calculator },
    { href: "/contact", label: "Get Started", icon: Phone }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-light text-gray-900 mb-6">
            Navigate Your Investment Journey
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of investment services, market insights, and client resources
            designed to maximize your returns in Kenya's premier commercial real estate market.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
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
            <Link href="/market" className="text-center group">
              <div className="p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors border border-gray-100 hover:border-amber-200">
                <BarChart3 className="h-6 w-6 text-amber-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-serif font-medium text-gray-900 group-hover:text-amber-700">
                  Market Analysis
                </span>
              </div>
            </Link>

            <Link href="/leadership" className="text-center group">
              <div className="p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors border border-gray-100 hover:border-amber-200">
                <Award className="h-6 w-6 text-amber-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-serif font-medium text-gray-900 group-hover:text-amber-700">
                  Our Team
                </span>
              </div>
            </Link>

            <Link href="/foundation" className="text-center group">
              <div className="p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors border border-gray-100 hover:border-amber-200">
                <Globe className="h-6 w-6 text-amber-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-serif font-medium text-gray-900 group-hover:text-amber-700">
                  Foundation
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