import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Shield, Users, PieChart, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wealth Management Kenya | Real Estate Investment Advisory | Murivest',
  description: 'Comprehensive wealth management services in Kenya. Real estate investment advisory, portfolio management, and wealth preservation strategies.',
  keywords: 'wealth management Kenya, investment advisory Nairobi, portfolio management Kenya, wealth preservation, real estate wealth management',
};

export default function WealthManagementPage() {
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
              Wealth Management
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive wealth management and investment advisory services.
              Preserving and growing wealth through strategic real estate investments.
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
                <PieChart className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Portfolio Management</h3>
              <p className="text-gray-600">Comprehensive portfolio construction and ongoing management across asset classes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Risk Management</h3>
              <p className="text-gray-600">Advanced risk assessment and mitigation strategies to protect and preserve wealth.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Personalized Service</h3>
              <p className="text-gray-600">Dedicated relationship managers providing personalized wealth management solutions.</p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Wealth Management Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Investment Advisory</h3>
              <p className="text-gray-600 mb-6">Strategic investment planning and portfolio construction tailored to individual goals and risk tolerance.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Asset allocation strategies</li>
                <li>• Risk assessment and profiling</li>
                <li>• Tax-efficient investment planning</li>
                <li>• Retirement planning</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Estate Planning</h3>
              <p className="text-gray-600 mb-6">Comprehensive estate planning services to ensure wealth transfer to future generations.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Trust structures and foundations</li>
                <li>• Succession planning</li>
                <li>• Tax planning for estates</li>
                <li>• Philanthropic planning</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Tax Optimization</h3>
              <p className="text-gray-600 mb-6">Advanced tax planning strategies to minimize tax liabilities and maximize after-tax returns.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• International tax planning</li>
                <li>• Real estate tax strategies</li>
                <li>• Offshore structuring</li>
                <li>• Tax-efficient withdrawals</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Family Office Services</h3>
              <p className="text-gray-600 mb-6">Comprehensive family office services for multi-generational wealth management.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Family governance</li>
                <li>• Education and succession</li>
                <li>• Lifestyle management</li>
                <li>• Concierge services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Investment Philosophy */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Investment Philosophy
          </h2>
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Long-term Focus</h3>
                <p className="text-gray-600 text-sm">Patient, long-term investment approach prioritizing sustainable wealth creation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Risk Management</h3>
                <p className="text-gray-600 text-sm">Comprehensive risk management with diversification across asset classes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PieChart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Diversification</h3>
                <p className="text-gray-600 text-sm">Balanced portfolios across geographies, sectors, and asset classes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Value Creation</h3>
                <p className="text-gray-600 text-sm">Active management and value enhancement strategies for superior returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Segments */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Client Segments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">High Net Worth Individuals</h3>
              <p className="text-gray-600">Personalized wealth management for individuals with $1M+ investable assets</p>
              <div className="mt-4 text-amber-600 font-medium">$1M+ Minimum</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Family Offices</h3>
              <p className="text-gray-600">Multi-generational wealth management and family governance services</p>
              <div className="mt-4 text-amber-600 font-medium">$10M+ Minimum</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Institutional Investors</h3>
              <p className="text-gray-600">Sophisticated investment solutions for pension funds and endowments</p>
              <div className="mt-4 text-amber-600 font-medium">$25M+ Minimum</div>
            </div>
          </div>
        </div>

        {/* Performance Track Record */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-slate-900 text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Performance Track Record
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">12.8%</div>
                <div className="text-gray-600">5-Year Average Return</div>
                <div className="text-sm text-gray-500 mt-2">Annualized</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">$2.4B</div>
                <div className="text-gray-600">Assets Under Management</div>
                <div className="text-sm text-gray-500 mt-2">Globally</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">150+</div>
                <div className="text-gray-600">Client Families</div>
                <div className="text-sm text-gray-500 mt-2">Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">25+</div>
                <div className="text-gray-600">Years Experience</div>
                <div className="text-sm text-gray-500 mt-2">Average</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Start Your Wealth Management Journey
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with our experienced wealth management team to preserve and grow your wealth through strategic real estate investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Schedule Wealth Review
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
