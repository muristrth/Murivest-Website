import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText, TrendingUp, Calculator, BarChart3, PieChart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Financial Reporting Kenya | Property Financial Reports | Murivest',
  description: 'Comprehensive financial reporting services for real estate investments in Kenya. Detailed financial statements, performance analysis, and investor reporting.',
  keywords: 'financial reporting Kenya, property financial reports Nairobi, real estate financial analysis, investor reporting Kenya',
};

export default function FinancialReportingPage() {
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
              Financial Reporting
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial reporting and analysis services providing
              transparent, accurate, and timely financial information for informed decision-making.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Reporting Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Financial Reporting Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Monthly Financial Statements</h3>
              <p className="text-gray-600">Detailed income statements, balance sheets, and cash flow reports for each property.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Performance Analysis</h3>
              <p className="text-gray-600">Key performance indicators, variance analysis, and trend reporting for property portfolios.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Tax Reporting</h3>
              <p className="text-gray-600">Tax preparation, compliance reporting, and optimization strategies for property investments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Investor Reporting</h3>
              <p className="text-gray-600">Customized reports for investors, lenders, and stakeholders with clear performance metrics.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <PieChart className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Budget vs Actual Analysis</h3>
              <p className="text-gray-600">Detailed variance analysis comparing budgeted performance against actual results.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Annual Financial Audits</h3>
              <p className="text-gray-600">Comprehensive annual audits and year-end financial statements for regulatory compliance.</p>
            </div>
          </div>
        </div>

        {/* Reporting Frequency */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Reporting Frequency & Timelines
          </h2>
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">Monthly</div>
                <div className="text-gray-600">Financial Statements</div>
                <div className="text-sm text-gray-500 mt-2">Within 15 days of month-end</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">Quarterly</div>
                <div className="text-gray-600">Performance Reports</div>
                <div className="text-sm text-gray-500 mt-2">Within 30 days of quarter-end</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">Annually</div>
                <div className="text-gray-600">Audit Reports</div>
                <div className="text-sm text-gray-500 mt-2">Within 90 days of year-end</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Financial Reports */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Key Financial Reports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Income Statement</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Rental Income:</span>
                  <span className="font-semibold text-slate-900">KES 2,500,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Operating Expenses:</span>
                  <span className="font-semibold text-slate-900">KES 750,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Net Operating Income:</span>
                  <span className="font-semibold text-green-600">KES 1,750,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Debt Service:</span>
                  <span className="font-semibold text-slate-900">KES 500,000</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Net Cash Flow:</span>
                  <span className="font-semibold text-green-600">KES 1,250,000</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Balance Sheet</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Property Value:</span>
                  <span className="font-semibold text-slate-900">KES 250,000,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Mortgage Balance:</span>
                  <span className="font-semibold text-slate-900">KES 150,000,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Equity Position:</span>
                  <span className="font-semibold text-green-600">KES 100,000,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Loan-to-Value:</span>
                  <span className="font-semibold text-slate-900">60%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Debt Service Coverage:</span>
                  <span className="font-semibold text-green-600">3.5x</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Key Performance Indicators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="text-3xl font-light text-amber-600 mb-2">8.5%</div>
              <div className="text-gray-600">Cap Rate</div>
              <div className="text-sm text-gray-500 mt-2">Net operating income / property value</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="text-3xl font-light text-amber-600 mb-2">95%</div>
              <div className="text-gray-600">Occupancy Rate</div>
              <div className="text-sm text-gray-500 mt-2">Percentage of leased space</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="text-3xl font-light text-amber-600 mb-2">18.2%</div>
              <div className="text-gray-600">IRR</div>
              <div className="text-sm text-gray-500 mt-2">Internal rate of return</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="text-3xl font-light text-amber-600 mb-2">4.1 Years</div>
              <div className="text-gray-600">Payback Period</div>
              <div className="text-sm text-gray-500 mt-2">Time to recover initial investment</div>
            </div>
          </div>
        </div>

        {/* Technology & Automation */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Technology & Automation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Automated Reporting</h3>
              <p className="text-gray-600">Automated generation of financial reports with real-time data integration and customizable dashboards</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Data Analytics</h3>
              <p className="text-gray-600">Advanced analytics and visualization tools for performance tracking and trend analysis</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Forecasting Models</h3>
              <p className="text-gray-600">Predictive modeling for cash flow forecasting, budget planning, and scenario analysis</p>
            </div>
          </div>
        </div>

        {/* Compliance & Standards */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Compliance & Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <FileText className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">IFRS Compliance</h3>
                <p className="text-gray-600">Financial reporting in accordance with International Financial Reporting Standards for global investors.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <TrendingUp className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Kenyan GAAP</h3>
                <p className="text-gray-600">Compliance with Kenyan Generally Accepted Accounting Principles and local regulatory requirements.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Calculator className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Tax Compliance</h3>
                <p className="text-gray-600">Accurate tax reporting and compliance with KRA requirements for property income and capital gains.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <BarChart3 className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Audit Preparation</h3>
                <p className="text-gray-600">Comprehensive audit support with detailed documentation and financial control procedures.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reporting Quality */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-slate-900 text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Reporting Quality Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">100%</div>
                <div className="text-gray-600">Accuracy Rate</div>
                <div className="text-sm text-gray-500 mt-2">Verified calculations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">15 Days</div>
                <div className="text-gray-600">Delivery Time</div>
                <div className="text-sm text-gray-500 mt-2">After month-end</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">99.5%</div>
                <div className="text-gray-600">Data Completeness</div>
                <div className="text-sm text-gray-500 mt-2">All required fields</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">24/7</div>
                <div className="text-gray-600">Access</div>
                <div className="text-sm text-gray-500 mt-2">Online portal</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Professional Financial Reporting
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get comprehensive financial reporting and analysis for your real estate investments with complete transparency and accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Start Financial Reporting
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