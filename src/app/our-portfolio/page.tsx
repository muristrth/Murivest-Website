import type { Metadata } from 'next'
import { MapPin, Building, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Portfolio - 15+ Verified CRE Deals | Murivest Realty Group',
  description: 'Explore our proprietary database of 15+ verified commercial real estate deals across Nairobi. Interactive map showing live properties with yields, tenants, and locations.',
}

export default function OurPortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-light mb-4">
            Our Portfolio
          </h1>
          <p className="text-gray-400 font-serif text-lg">
            15+ verified CRE deals. What we control, what you can own.
          </p>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-800 p-6 rounded-lg text-center">
            <Building className="w-8 h-8 text-amber-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-amber-400">15+</div>
            <div className="text-gray-300 text-sm">Verified Deals</div>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg text-center">
            <MapPin className="w-8 h-8 text-amber-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-amber-400">10</div>
            <div className="text-gray-300 text-sm">Buildings Monitored</div>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg text-center">
            <TrendingUp className="w-8 h-8 text-amber-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-amber-400">8-10%</div>
            <div className="text-gray-300 text-sm">Average Yields</div>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg text-center">
            <Building className="w-8 h-8 text-amber-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-amber-400">5+</div>
            <div className="text-gray-300 text-sm">Title Templates</div>
          </div>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="bg-slate-800 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-serif font-light text-white mb-6 text-center">
            Interactive Portfolio Map
          </h2>
          <div className="bg-slate-700 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-amber-400 mx-auto mb-4" />
              <p className="text-gray-300 mb-4">Interactive Google My Maps Embed</p>
              <p className="text-sm text-gray-400">
                Showing 15+ verified properties with pins, yields, and tenant information
              </p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm">
              Click on any pin to see property details, current yields, tenant information, and leasing status.
            </p>
          </div>
        </div>

        {/* What We Control */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-light text-amber-400 mb-6">
              What We Control
            </h3>
            <div className="space-y-6">
              <div className="bg-slate-800 p-6 rounded-lg">
                <h4 className="font-serif font-medium text-white mb-3">Proprietary Database</h4>
                <p className="text-gray-300 text-sm mb-3">
                  15+ verified CRE deals with complete documentation: addresses, yields, leases, tenant financials.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Title deeds verified</li>
                  <li>• Tenant agreements current</li>
                  <li>• Financial statements audited</li>
                  <li>• Market valuations updated</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg">
                <h4 className="font-serif font-medium text-white mb-3">IoT Network</h4>
                <p className="text-gray-300 text-sm mb-3">
                  10 buildings monitored live with Shelly 3EM sensors, leak detectors, and environmental controls.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Real-time energy monitoring</li>
                  <li>• Automated maintenance alerts</li>
                  <li>• Tenant consumption tracking</li>
                  <li>• Predictive maintenance AI</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-light text-amber-400 mb-6">
              Your Guarantee
            </h3>
            <div className="space-y-6">
              <div className="bg-slate-800 p-6 rounded-lg">
                <h4 className="font-serif font-medium text-white mb-3">Legal Templates</h4>
                <p className="text-gray-300 text-sm mb-3">
                  5+ title deed structures reviewed by Michael Mungai Advocates for tax optimization and compliance.
                </p>
                <div className="text-amber-400 text-sm font-medium">Download Sample →</div>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg">
                <h4 className="font-serif font-medium text-white mb-3">Director Circle</h4>
                <p className="text-gray-300 text-sm mb-3">
                  200+ WhatsApp-connected CFOs and directors sharing market intelligence and deal flow.
                </p>
                <div className="text-amber-400 text-sm font-medium">Join Our Group →</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Properties */}
        <div className="mt-16">
          <h3 className="text-2xl font-serif font-light text-white mb-8 text-center">
            Featured Properties
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h4 className="font-serif font-medium text-amber-400 mb-2">Sameer Park</h4>
              <p className="text-gray-300 text-sm mb-3">Industrial • Nairobi West</p>
              <div className="text-sm text-gray-400">
                <div>Yield: 9.2%</div>
                <div>Size: 50,000 ft²</div>
                <div>Tenants: Logistics companies</div>
              </div>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h4 className="font-serif font-medium text-amber-400 mb-2">Westgate Mall</h4>
              <p className="text-gray-300 text-sm mb-3">Retail • Westlands</p>
              <div className="text-sm text-gray-400">
                <div>Yield: 8.5%</div>
                <div>Size: 100,000 ft²</div>
                <div>Tenants: International brands</div>
              </div>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h4 className="font-serif font-medium text-amber-400 mb-2">ABSA Towers</h4>
              <p className="text-gray-300 text-sm mb-3">Office • CBD</p>
              <div className="text-sm text-gray-400">
                <div>Yield: 10.1%</div>
                <div>Size: 75,000 ft²</div>
                <div>Tenants: Financial services</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}