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
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-amber-600/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-[10px] tracking-[0.5em] uppercase text-amber-500 font-bold mb-6">
              Market Intelligence Unit
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif text-white leading-tight mb-8">
              Quarterly Market <span className="italic text-amber-200/80">Reports & Analysis</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-lg leading-relaxed font-light border-l-2 border-amber-500/50 pl-6">
              Comprehensive analysis of Kenya's real estate market trends, pricing dynamics, and investment opportunities. 
              Institutional-grade research updated every quarter with the latest market data.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Bar */}
      <div className="bg-slate-900 border-y border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-6 md:gap-8">
          {[
            { icon: BarChart3, text: "Institutional-Grade Analysis" },
            { icon: TrendingUp, text: "Quarterly Market Data" },
            { icon: FileText, text: "Confidential Research Access" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.icon className="w-4 h-4 text-amber-500" />
              <span className="text-[10px] tracking-widest uppercase text-slate-300 font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xs tracking-[0.3em] uppercase text-amber-600 font-bold mb-8">Report Framework</h3>
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Market Intelligence Reports</h2>
                <p className="text-slate-400 leading-relaxed mb-6 font-light">
                  Our quarterly market reports provide institutional-grade analysis of Kenya's commercial real estate sector. 
                  Each report includes comprehensive data on market trends, pricing analysis, transaction volumes, and strategic outlook.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-4 w-4 text-amber-500" />
                    <span className="text-slate-300 text-sm">Detailed market statistics and trends</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-4 w-4 text-amber-500" />
                    <span className="text-slate-300 text-sm">Investment opportunity analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-amber-500" />
                    <span className="text-slate-300 text-sm">Regulatory updates and policy changes</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-10 relative">
                <div className="absolute top-0 right-0 p-8">
                  <FileText className="w-12 h-12 text-slate-800" />
                </div>
                <h3 className="text-xl font-serif text-white mb-6">Report Contents</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-slate-300 text-sm">Executive Summary & Key Findings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-slate-300 text-sm">Market Performance Analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-slate-300 text-sm">Sector-specific Insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-slate-300 text-sm">Investment Opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-slate-300 text-sm">Risk Assessment & Outlook</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Latest Reports */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-amber-600 font-bold mb-8">Latest Publications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-900 border border-slate-800 p-8 hover:border-amber-500 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="h-4 w-4 text-amber-500" />
                  <span className="text-[10px] uppercase tracking-widest text-slate-400">Q3 2024</span>
                  <span className="ml-auto bg-amber-600/20 text-amber-400 px-2 py-1 rounded text-[10px] font-semibold">Latest</span>
                </div>
                <h3 className="text-lg font-serif text-white mb-3">Kenya Real Estate Market Report</h3>
                <p className="text-slate-400 text-sm mb-6 font-light">Comprehensive analysis of Q3 market performance, pricing trends, and investment opportunities across all sectors.</p>
                <button className="inline-flex items-center text-amber-500 hover:text-amber-400 text-[10px] tracking-widest uppercase font-bold">
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </button>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-8 hover:border-amber-500 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="h-4 w-4 text-amber-500" />
                  <span className="text-[10px] uppercase tracking-widest text-slate-400">Q2 2024</span>
                </div>
                <h3 className="text-lg font-serif text-white mb-3">Commercial Property Analysis</h3>
                <p className="text-slate-400 text-sm mb-6 font-light">Focus on commercial real estate trends, office market dynamics, and retail sector performance.</p>
                <button className="inline-flex items-center text-amber-500 hover:text-amber-400 text-[10px] tracking-widest uppercase font-bold">
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </button>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-8 hover:border-amber-500 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="h-4 w-4 text-amber-500" />
                  <span className="text-[10px] uppercase tracking-widest text-slate-400">Q1 2024</span>
                </div>
                <h3 className="text-lg font-serif text-white mb-3">Investment Market Update</h3>
                <p className="text-slate-400 text-sm mb-6 font-light">Investment activity, capital flows, and emerging opportunities in the Kenyan property market.</p>
                <button className="inline-flex items-center text-amber-500 hover:text-amber-400 text-[10px] tracking-widest uppercase font-bold">
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </button>
              </div>
            </div>
          </div>

          {/* Market Insights */}
          <div className="mt-24">
            <h3 className="text-xs tracking-[0.3em] uppercase text-amber-600 font-bold mb-8">Market Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900 border border-slate-800 p-8">
                <h3 className="text-lg font-serif text-white mb-6">Market Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                    <span className="text-slate-400 text-sm">Office Vacancy Rate</span>
                    <span className="font-semibold text-white text-sm">8.2%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                    <span className="text-slate-400 text-sm">Average Rental Yield</span>
                    <span className="font-semibold text-white text-sm">9.1%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                    <span className="text-slate-400 text-sm">Capital Values Growth</span>
                    <span className="font-semibold text-amber-400 text-sm">+12.3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Transaction Volume</span>
                    <span className="font-semibold text-white text-sm">$450M</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-8">
                <h3 className="text-lg font-serif text-white mb-6">Strategic Outlook</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-amber-600/10 border border-amber-600/20 rounded">
                    <h4 className="font-medium text-amber-400 text-sm mb-2">Positive Indicators</h4>
                    <ul className="text-xs text-slate-400 space-y-1">
                      <li>• Strong economic growth (6%+ GDP)</li>
                      <li>• Increasing foreign investment</li>
                      <li>• Infrastructure development</li>
                      <li>• Growing institutional capital</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-800/50 border border-slate-700 rounded">
                    <h4 className="font-medium text-slate-300 text-sm mb-2">Risk Factors</h4>
                    <ul className="text-xs text-slate-400 space-y-1">
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
        </div>

        {/* Institutional CTA */}
        <section className="py-24 bg-slate-950 mt-24">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <FileText className="w-12 h-12 text-amber-500 mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
              Request Quarterly Report Access
            </h2>
            <p className="text-slate-400 text-lg mb-12 font-light max-w-3xl mx-auto">
              Our Research & Strategy team provides quarterly market intelligence to institutional investors. 
              Access detailed reports and proprietary analysis for confident capital deployment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="px-12 py-5 bg-amber-600 text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-xl">
                Subscribe Now
              </Link>
              <Link href="/market-insights" className="px-12 py-5 border border-white/20 text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-slate-950 transition-all duration-500 flex items-center justify-center gap-4">
                <TrendingUp className="w-4 h-4" />
                View Latest Insights
              </Link>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
