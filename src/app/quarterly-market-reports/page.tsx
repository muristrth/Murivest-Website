import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText, TrendingUp, Calendar, Download, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quarterly Market Reports Kenya | Real Estate Market Analysis | Murivest',
  description: 'Comprehensive quarterly market reports on Kenya real estate. Market trends, pricing analysis, and investment opportunities in Nairobi commercial property.',
  keywords: 'quarterly market reports Kenya, real estate market analysis Nairobi, property market trends Kenya, commercial real estate reports',
};

export default function QuarterlyMarketReportsPage() {
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
              Quarterly Market Reports
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive analysis of Kenya's real estate market trends, pricing dynamics,
              and investment opportunities. Updated every quarter with the latest data.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Report Overview */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Market Intelligence Reports
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our quarterly market reports provide institutional-grade analysis of Kenya's
                commercial real estate sector. Each report includes comprehensive data on
                market trends, pricing analysis, transaction volumes, and future outlook.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <BarChart3 className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Detailed market statistics and trends</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Investment opportunity analysis</span>
                </div>
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Regulatory updates and policy changes</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-slate-50 p-8 rounded-lg border border-amber-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Report Contents
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Executive Summary & Key Findings
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Market Performance Analysis
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sector-specific Insights
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Investment Opportunities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Risk Assessment & Outlook
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Latest Reports */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Latest Market Reports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-amber-600 mr-2" />
                  <span className="text-sm text-gray-500">Q3 2024</span>
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Latest</span>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Kenya Real Estate Market Report</h3>
              <p className="text-gray-600 text-sm mb-4">Comprehensive analysis of Q3 market performance, pricing trends, and investment opportunities across all sectors.</p>
              <button className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm">
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-amber-600 mr-2" />
                  <span className="text-sm text-gray-500">Q2 2024</span>
                </div>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Commercial Property Analysis</h3>
              <p className="text-gray-600 text-sm mb-4">Focus on commercial real estate trends, office market dynamics, and retail sector performance.</p>
              <button className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm">
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-amber-600 mr-2" />
                  <span className="text-sm text-gray-500">Q1 2024</span>
                </div>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Investment Market Update</h3>
              <p className="text-gray-600 text-sm mb-4">Investment activity, capital flows, and emerging opportunities in the Kenyan property market.</p>
              <button className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm">
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </button>
            </div>
          </div>
        </div>

        {/* Market Insights */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Key Market Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Market Performance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Office Vacancy Rate</span>
                  <span className="font-semibold text-slate-900">8.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Rental Yield</span>
                  <span className="font-semibold text-slate-900">9.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Capital Values Growth</span>
                  <span className="font-semibold text-green-600">+12.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Transaction Volume</span>
                  <span className="font-semibold text-slate-900">$450M</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Market Outlook</h3>
              <div className="space-y-4">
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-medium text-slate-900 mb-2">Positive Indicators</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Strong economic growth (6%+ GDP)</li>
                    <li>• Increasing foreign investment</li>
                    <li>• Infrastructure development</li>
                    <li>• Growing middle class</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-medium text-slate-900 mb-2">Key Risks</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Interest rate volatility</li>
                    <li>• Currency fluctuations</li>
                    <li>• Regulatory changes</li>
                    <li>• Global economic uncertainty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Stay Informed
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to receive our quarterly market reports and be the first to know about emerging investment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Subscribe to Reports
              </Link>
              <Link
                href="/market"
                className="border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all"
              >
                View All Intelligence
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
