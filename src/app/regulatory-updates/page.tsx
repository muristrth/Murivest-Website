import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, Clock, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Regulatory Updates Kenya | Real Estate Regulation | Murivest',
  description: 'Latest regulatory updates and compliance requirements for real estate investment in Kenya. CMA regulations, tax changes, and legal framework updates.',
  keywords: 'regulatory updates Kenya, real estate regulation, CMA compliance, property tax Kenya, legal framework real estate',
};

export default function RegulatoryUpdatesPage() {
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
              Regulatory Updates
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay informed about the latest regulatory changes, compliance requirements,
              and legal developments affecting real estate investment in Kenya.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Regulatory Framework */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Key Regulatory Bodies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Capital Markets Authority</h3>
              <p className="text-gray-600">Regulates REITs, securities, and investment products</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Kenya Revenue Authority</h3>
              <p className="text-gray-600">Oversees tax compliance and property taxation</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">State Department of Lands</h3>
              <p className="text-gray-600">Manages land registration and property rights</p>
            </div>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Recent Regulatory Updates
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mr-3" />
                  <h3 className="text-xl font-medium text-slate-900">REIT Regulations Update</h3>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">December 2024</span>
              </div>
              <p className="text-gray-600 mb-4">
                CMA has updated REIT regulations to include stricter governance requirements and enhanced disclosure standards for listed property funds.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-2" />
                Effective: January 1, 2025
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <h3 className="text-xl font-medium text-slate-900">Foreign Investment Guidelines</h3>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">November 2024</span>
              </div>
              <p className="text-gray-600 mb-4">
                New guidelines streamline foreign investor access to commercial real estate with simplified approval processes for qualifying investments.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-2" />
                Implementation: Ongoing
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-blue-600 mr-3" />
                  <h3 className="text-xl font-medium text-slate-900">Property Tax Reforms</h3>
                </div>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">October 2024</span>
              </div>
              <p className="text-gray-600 mb-4">
                KRA introduces progressive property tax rates and incentives for energy-efficient buildings and affordable housing developments.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-2" />
                Effective: July 1, 2025
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Compliance Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-medium text-slate-900 mb-4">For Foreign Investors</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Minimum investment threshold: $250,000
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Foreign Investment License from State Department of Immigration
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Tax compliance certificate from KRA
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Proof of source of funds
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-medium text-slate-900 mb-4">For Property Developers</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Development license from county government
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Environmental impact assessment for large projects
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Building plan approval from relevant authorities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Compliance with disability access regulations
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tax Implications */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-slate-900 text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Tax Considerations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-amber-100">
                <h3 className="text-lg font-medium text-slate-900 mb-3">Corporate Tax</h3>
                <p className="text-gray-600 text-sm mb-3">30% standard rate with incentives for manufacturing and agriculture</p>
                <div className="text-amber-600 font-medium">30% Standard Rate</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-amber-100">
                <h3 className="text-lg font-medium text-slate-900 mb-3">Property Income Tax</h3>
                <p className="text-gray-600 text-sm mb-3">Rental income taxed at corporate rates with depreciation allowances</p>
                <div className="text-amber-600 font-medium">Progressive Rates</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-amber-100">
                <h3 className="text-lg font-medium text-slate-900 mb-3">Capital Gains Tax</h3>
                <p className="text-gray-600 text-sm mb-3">15% on property disposals with indexation for inflation</p>
                <div className="text-amber-600 font-medium">15% Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Changes */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Upcoming Regulatory Changes
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div className="border-l-4 border-amber-600 pl-6">
                <h3 className="text-lg font-medium text-slate-900 mb-2">Digital Property Transactions</h3>
                <p className="text-gray-600 mb-2">Implementation of blockchain-based property registration system</p>
                <div className="text-sm text-gray-500">Expected: Q2 2025</div>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-lg font-medium text-slate-900 mb-2">Green Building Standards</h3>
                <p className="text-gray-600 mb-2">Mandatory energy efficiency ratings for commercial buildings</p>
                <div className="text-sm text-gray-500">Expected: Q3 2025</div>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-lg font-medium text-slate-900 mb-2">Foreign Ownership Limits</h3>
                <p className="text-gray-600 mb-2">Potential relaxation of foreign ownership restrictions in special zones</p>
                <div className="text-sm text-gray-500">Expected: Q4 2025</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Stay Compliant
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ensure your investments remain compliant with the latest regulatory requirements.
            Subscribe for updates on regulatory changes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Compliance Consultation
            </Link>
            <Link
              href="/quarterly-market-reports"
              className="border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              View Market Reports
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
