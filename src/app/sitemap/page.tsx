import type { Metadata } from 'next'
import Link from 'next/link'
import { Building, FileText, Users, TrendingUp, Calculator, Phone, Mail, MapPin, Globe, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sitemap - Murivest Realty Group',
  description: 'Complete sitemap of Murivest Realty Group website. Find all pages, sections, and resources for commercial real estate investment in Kenya.',
  keywords: 'sitemap, navigation, Murivest Realty Group, Kenya real estate, commercial property investment',
  robots: {
    index: true,
    follow: true,
  },
}

const sitemapSections = [
  {
    title: "Main Pages",
    icon: Building,
    pages: [
      { href: "/", label: "Home", description: "Welcome to Murivest Realty Group" },
      { href: "/about", label: "About Us", description: "Our heritage and investment philosophy" },
      { href: "/properties", label: "Investment Portfolio", description: "Curated commercial properties" },
      { href: "/contact", label: "Contact Us", description: "Get in touch with our team" }
    ]
  },
  {
    title: "Investment Services",
    icon: TrendingUp,
    pages: [
      { href: "/process", label: "Investment Process", description: "How we identify and manage investments" },
      { href: "/market", label: "Market Intelligence", description: "Kenya real estate market analysis" },
      { href: "/leadership", label: "Executive Leadership", description: "Meet our investment team" },
      { href: "/calculator", label: "Investment Calculator", description: "Calculate potential returns" }
    ]
  },
  {
    title: "Insights & Resources",
    icon: FileText,
    pages: [
      { href: "/blog", label: "Investment Blog", description: "Latest market insights and strategies" },
      { href: "/foundation", label: "Murivest Foundation", description: "Community development initiatives" },
      { href: "/sell", label: "Sell Property", description: "List your property with us" }
    ]
  },
  {
    title: "Client Portals",
    icon: Users,
    pages: [
      { href: "/login", label: "Client Login", description: "Access your private dashboard" },
      { href: "/dashboard", label: "Investor Dashboard", description: "Manage your investments" },
      { href: "/operations", label: "Operations Dashboard", description: "Property operations management" },
      { href: "/accountant", label: "Accountant Dashboard", description: "Financial reporting and analysis" },
      { href: "/secretary", label: "Secretary Dashboard", description: "Administrative tools" },
      { href: "/admin", label: "Admin Dashboard", description: "System administration" }
    ]
  }
]

const quickLinks = [
  { href: "/properties", label: "Browse Properties", icon: Building },
  { href: "/blog", label: "Latest Insights", icon: FileText },
  { href: "/calculator", label: "ROI Calculator", icon: Calculator },
  { href: "/contact", label: "Schedule Consultation", icon: Phone }
]

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-light text-gray-900 mb-6">
            Website Sitemap
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Navigate through all sections and pages of Murivest Realty Group.
            Find the information and resources you need for your commercial real estate investment journey.
          </p>
        </div>

        {/* Quick Access */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 mb-12 text-white">
          <h2 className="text-2xl font-serif font-light mb-6 text-center">
            Quick Access
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={index} href={link.href} className="group">
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-amber-400/50">
                  <link.icon className="h-6 w-6 text-amber-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-serif font-medium text-white group-hover:text-amber-300">
                    {link.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sitemap Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {sitemapSections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-3 rounded-xl mr-4">
                  <section.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-serif font-medium text-gray-900">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-4">
                {section.pages.map((page, pageIndex) => (
                  <Link key={pageIndex} href={page.href} className="block group">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-all duration-300 border border-gray-100 hover:border-amber-200">
                      <div className="flex-1">
                        <h3 className="font-serif font-medium text-gray-900 group-hover:text-amber-700 transition-colors mb-1">
                          {page.label}
                        </h3>
                        <p className="text-sm text-gray-600 font-light">
                          {page.description}
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

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-light text-gray-900 mb-4">
              Need Help Finding Something?
            </h3>
            <p className="text-gray-600 font-light">
              Our team is here to assist you with any questions about our services or platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-amber-100 mb-4">
                <Phone className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <h4 className="font-serif font-medium text-gray-900 mb-1">Call Us</h4>
                <Link href="tel:+254115277610" className="text-amber-600 hover:text-amber-700 font-serif">
                  +254 115 277 610
                </Link>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-amber-100 mb-4">
                <Mail className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <h4 className="font-serif font-medium text-gray-900 mb-1">Email Us</h4>
                <Link href="mailto:info@murivest.co.ke" className="text-amber-600 hover:text-amber-700 font-serif">
                  info@murivest.co.ke
                </Link>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-amber-100 mb-4">
                <MapPin className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <h4 className="font-serif font-medium text-gray-900 mb-1">Visit Us</h4>
                <address className="text-gray-600 font-serif not-italic">
                  Westlands Business District<br />
                  Nairobi, Kenya
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Footer */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <Link href="/privacy-policy" className="hover:text-amber-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-amber-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/investment-disclaimer" className="hover:text-amber-600 transition-colors">
              Investment Disclaimer
            </Link>
            <Link href="/sitemap.xml" className="hover:text-amber-600 transition-colors">
              XML Sitemap
            </Link>
          </div>
          <p className="mt-6 text-gray-500 font-light text-sm">
            © 2025 Murivest Realty Group. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}