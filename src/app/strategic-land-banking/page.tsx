import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Map, TrendingUp, Clock, Target, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Strategic Land Banking Kenya | Land Investment Nairobi | Murivest',
  description: 'Invest in strategic land banking opportunities in Nairobi, Kenya. Prime development land with long-term appreciation potential and government infrastructure plans.',
  keywords: 'land banking Kenya, land investment Nairobi, strategic land development, land appreciation Kenya, development land investment',
};

export default function StrategicLandBankingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Strategic Land Banking
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Prime development land in Nairobi's growth corridors. Long-term appreciation through
              infrastructure development and urban expansion.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Key Features */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Map className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Prime Locations</h3>
              <p className="text-gray-600">Strategic parcels along major infrastructure corridors and development zones.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Long-term Hold</h3>
              <p className="text-gray-600">5-15 year investment horizon with compounding appreciation through development.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Infrastructure Driven</h3>
              <p className="text-gray-600">Value appreciation through planned infrastructure and urban development projects.</p>
            </div>
          </div>
        </div>

        {/* Large Tract Focus */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Large Tract Opportunities
          </h2>
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg">
            <p className="text-center text-gray-700 mb-8">
              We specialize in acquiring substantial land parcels (50-200 acres) near upcoming infrastructure projects, managed for 5-10 year growth. Prime Land Banking Opportunities Kenya.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-light text-amber-600 mb-2">50-200 acres</div>
                <div className="text-gray-600 text-sm">Typical Parcel Size</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-amber-600 mb-2">5-10 years</div>
                <div className="text-gray-600 text-sm">Growth Horizon</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-amber-600 mb-2">25-40%</div>
                <div className="text-gray-600 text-sm">Expected Appreciation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Land Portfolio */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Strategic Land Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Northern Corridor Development</h3>
              <p className="text-gray-600 mb-6">Prime development land along the proposed Northern Bypass extension</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Land Area:</span>
                  <span className="font-medium">50 acres</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Zoning:</span>
                  <span className="font-medium">Mixed-use development</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Infrastructure:</span>
                  <span className="font-medium">Road, water, electricity</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Expected ROI:</span>
                  <span className="font-medium text-amber-600">25-35%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Konza Technopolis Adjacent</h3>
              <p className="text-gray-600 mb-6">Development land near Kenya's Silicon Savannah technology hub</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Land Area:</span>
                  <span className="font-medium">75 acres</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Zoning:</span>
                  <span className="font-medium">Technology/light industrial</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Infrastructure:</span>
                  <span className="font-medium">High-speed fiber, utilities</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Expected ROI:</span>
                  <span className="font-medium text-amber-600">30-40%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Strategy */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Investment Strategy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Shield className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Due Diligence</h3>
                <p className="text-gray-600">Comprehensive legal, environmental, and market analysis before acquisition.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <TrendingUp className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Value Creation</h3>
                <p className="text-gray-600">Active management to enhance land value through planning and development rights.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Target className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Exit Planning</h3>
                <p className="text-gray-600">Strategic exit through development, sale to developers, or REIT inclusion.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Clock className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Patient Capital</h3>
                <p className="text-gray-600">Long-term investment approach allowing for maximum value appreciation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Market Drivers */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Market Drivers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Map className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Urban Expansion</h3>
              <p className="text-gray-600 text-sm">Nairobi's population growth drives demand for residential and commercial development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Infrastructure</h3>
              <p className="text-gray-600 text-sm">Major infrastructure projects increase land values in development corridors</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Economic Growth</h3>
              <p className="text-gray-600 text-sm">Kenya's 6%+ GDP growth creates sustained demand for development land</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Invest in Land's Future Value
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Secure prime development land in Nairobi's growth corridors and benefit from long-term appreciation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/market"
              className="border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              View Market Intelligence
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
