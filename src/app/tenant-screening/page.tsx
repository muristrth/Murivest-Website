import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, UserCheck, FileText, Shield, Search, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tenant Screening Kenya | Background Checks Nairobi | Murivest',
  description: 'Comprehensive tenant screening services in Kenya. Background checks, credit verification, and tenant risk assessment for property owners and managers.',
  keywords: 'tenant screening Kenya, background checks Nairobi, tenant verification Kenya, credit check services, tenant risk assessment',
};

export default function TenantScreeningPage() {
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
              Tenant Screening
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive tenant screening and background verification services
              to ensure quality tenancy and minimize rental property risks.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Screening Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Comprehensive Screening Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <UserCheck className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Identity Verification</h3>
              <p className="text-gray-600">National ID, passport, and biometric verification to confirm tenant identity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Credit Assessment</h3>
              <p className="text-gray-600">Credit score analysis, payment history, and financial stability evaluation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Background Checks</h3>
              <p className="text-gray-600">Criminal record verification, employment confirmation, and reference checks.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Risk Assessment</h3>
              <p className="text-gray-600">Comprehensive risk scoring and tenant quality rating system.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Income Verification</h3>
              <p className="text-gray-600">Employment verification, income stability, and affordability assessment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Fraud Detection</h3>
              <p className="text-gray-600">Advanced fraud detection systems and document authenticity verification.</p>
            </div>
          </div>
        </div>

        {/* Screening Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Screening Process
          </h2>
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Application Review</h3>
                <p className="text-gray-600 text-sm">Initial application assessment and basic qualification check</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Document Verification</h3>
                <p className="text-gray-600 text-sm">Identity documents, employment, and income verification</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Background Investigation</h3>
                <p className="text-gray-600 text-sm">Credit, criminal, and reference checks with local databases</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Final Assessment</h3>
                <p className="text-gray-600 text-sm">Risk scoring and recommendation with detailed report</p>
              </div>
            </div>
          </div>
        </div>

        {/* Screening Criteria */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Screening Criteria & Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Credit & Financial</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Minimum Credit Score:</span>
                  <span className="font-semibold text-slate-900">650+</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Income to Rent Ratio:</span>
                  <span className="font-semibold text-slate-900">3:1 minimum</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Employment Stability:</span>
                  <span className="font-semibold text-slate-900">2+ years</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Debt-to-Income Ratio:</span>
                  <span className="font-semibold text-slate-900">{'<'}40%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Background & Character</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Criminal Record:</span>
                  <span className="font-semibold text-green-600">Clean</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Previous Evictions:</span>
                  <span className="font-semibold text-green-600">None</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Reference Checks:</span>
                  <span className="font-semibold text-slate-900">2+ verified</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Rental History:</span>
                  <span className="font-semibold text-slate-900">5+ years</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology & Databases */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Technology & Data Sources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Credit Bureaus</h3>
              <p className="text-gray-600">Access to Kenyan credit bureaus (CRB, Metropol) for comprehensive credit reports</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Government Databases</h3>
              <p className="text-gray-600">Integration with national ID systems, tax records, and government registries</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Advanced Analytics</h3>
              <p className="text-gray-600">AI-powered risk scoring and predictive analytics for tenant behavior</p>
            </div>
          </div>
        </div>

        {/* Turnaround Times */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-slate-900 text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Service Level Agreements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">24hrs</div>
                <div className="text-gray-600">Express Screening</div>
                <div className="text-sm text-gray-500 mt-2">Priority service for urgent needs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">3-5 Days</div>
                <div className="text-gray-600">Standard Screening</div>
                <div className="text-sm text-gray-500 mt-2">Comprehensive background check</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">1 Week</div>
                <div className="text-gray-600">Enhanced Due Diligence</div>
                <div className="text-sm text-gray-500 mt-2">Deep investigation for high-value rentals</div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Mitigation */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Risk Mitigation Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <UserCheck className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Tenant Quality Scoring</h3>
                <p className="text-gray-600">Proprietary scoring system that evaluates tenant quality based on multiple criteria and historical data.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Shield className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Rental Insurance</h3>
                <p className="text-gray-600">Comprehensive rental insurance coverage for property damage, non-payment, and legal expenses.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <FileText className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Lease Structuring</h3>
                <p className="text-gray-600">Strategic lease terms including security deposits, guarantees, and early termination clauses.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <AlertTriangle className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Ongoing Monitoring</h3>
                <p className="text-gray-600">Continuous tenant monitoring and early warning systems for payment defaults and behavioral issues.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-slate-900 text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Screening Performance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">95%</div>
                <div className="text-gray-600">Approval Rate</div>
                <div className="text-sm text-gray-500 mt-2">Qualified applicants</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">{'<'}2%</div>
                <div className="text-gray-600">Default Rate</div>
                <div className="text-sm text-gray-500 mt-2">Industry leading</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">30 Days</div>
                <div className="text-gray-600">Average Collection</div>
                <div className="text-sm text-gray-500 mt-2">Payment period</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">98%</div>
                <div className="text-gray-600">Tenant Retention</div>
                <div className="text-sm text-gray-500 mt-2">Annual rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Quality Tenant Screening
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Protect your property investment with comprehensive tenant screening and risk assessment services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Start Tenant Screening
            </Link>
            <Link
              href="/property-management"
              className="border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              View Property Management
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}