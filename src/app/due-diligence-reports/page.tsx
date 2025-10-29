import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileCheck, Search, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Due Diligence Reports Kenya | Property Due Diligence | Murivest',
  description: 'Comprehensive due diligence reports for real estate investments in Kenya. Legal, financial, and technical due diligence services.',
  keywords: 'due diligence reports Kenya, property due diligence Nairobi, real estate due diligence, investment due diligence Kenya',
};

export default function DueDiligenceReportsPage() {
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
              Due Diligence Reports
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive due diligence investigations ensuring informed investment decisions
              with detailed analysis of legal, financial, and operational aspects.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Due Diligence Overview */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Comprehensive Due Diligence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our due diligence process covers all critical aspects of real estate investments
                in Kenya, from title verification to environmental assessments. We identify
                risks and opportunities to protect your investment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FileCheck className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Legal title verification</span>
                </div>
                <div className="flex items-center">
                  <Search className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Financial statement analysis</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Environmental assessments</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-slate-50 p-8 rounded-lg border border-amber-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Due Diligence Checklist
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Property title and ownership verification</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Lease agreements and tenant verification</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Financial performance and rent rolls</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Building condition and maintenance records</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Environmental and zoning compliance</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Market analysis and valuation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Due Diligence Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Due Diligence Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Legal Due Diligence</h3>
              <p className="text-gray-600">Title verification, encumbrance checks, and legal compliance assessment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Financial Due Diligence</h3>
              <p className="text-gray-600">Financial statement analysis, rent roll verification, and cash flow assessment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Technical Due Diligence</h3>
              <p className="text-gray-600">Building condition assessment, environmental impact, and infrastructure evaluation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Market Due Diligence</h3>
              <p className="text-gray-600">Location analysis, market comparables, and investment market assessment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Operational Due Diligence</h3>
              <p className="text-gray-600">Tenant quality assessment, lease terms review, and management evaluation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">Zoning compliance, building permits, and regulatory requirement verification.</p>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Due Diligence Process
          </h2>
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Initial Assessment</h3>
                <p className="text-gray-600 text-sm">Property overview and preliminary risk identification (1-2 days)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Detailed Investigation</h3>
                <p className="text-gray-600 text-sm">Comprehensive legal, financial, and technical analysis (7-14 days)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Risk Assessment</h3>
                <p className="text-gray-600 text-sm">Risk quantification and mitigation strategy development (3-5 days)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Final Report</h3>
                <p className="text-gray-600 text-sm">Comprehensive due diligence report with recommendations (2-3 days)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Issues Found */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Common Issues Identified
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-medium text-slate-900 mb-4 text-red-600">Legal Issues</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-red-500 mr-3 mt-0.5" />
                  <span>Title defects and ownership disputes</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-red-500 mr-3 mt-0.5" />
                  <span>Unregistered encumbrances and liens</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-red-500 mr-3 mt-0.5" />
                  <span>Zoning and land use violations</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-red-500 mr-3 mt-0.5" />
                  <span>Expired or invalid building permits</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-medium text-slate-900 mb-4 text-orange-600">Financial Issues</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mr-3 mt-0.5" />
                  <span>Inaccurate rent rolls and income statements</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mr-3 mt-0.5" />
                  <span>Unreported operating expenses</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mr-3 mt-0.5" />
                  <span>Outstanding tax liabilities</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mr-3 mt-0.5" />
                  <span>Lease default risks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Report Deliverables */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-slate-900 text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Report Deliverables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-amber-100">
                <FileCheck className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-lg font-medium text-slate-900 mb-3">Executive Summary</h3>
                <p className="text-gray-600 text-sm">Key findings, risks, and investment recommendations</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-amber-100">
                <Search className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-lg font-medium text-slate-900 mb-3">Detailed Analysis</h3>
                <p className="text-gray-600 text-sm">Comprehensive legal, financial, and technical reports</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-amber-100">
                <Shield className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-lg font-medium text-slate-900 mb-3">Risk Register</h3>
                <p className="text-gray-600 text-sm">Identified risks with mitigation strategies and priorities</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-amber-100">
                <CheckCircle className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-lg font-medium text-slate-900 mb-3">Compliance Checklist</h3>
                <p className="text-gray-600 text-sm">Regulatory compliance status and requirements</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-amber-100">
                <FileCheck className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-lg font-medium text-slate-900 mb-3">Supporting Documents</h3>
                <p className="text-gray-600 text-sm">Copies of verified documents and certificates</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-amber-100">
                <AlertTriangle className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-lg font-medium text-slate-900 mb-3">Action Plan</h3>
                <p className="text-gray-600 text-sm">Recommended next steps and timeline for resolution</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Comprehensive Due Diligence
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Protect your investment with thorough due diligence investigations covering all aspects of Kenyan real estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Request Due Diligence
            </Link>
            <Link
              href="/investment-analysis"
              className="border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              View Investment Analysis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
