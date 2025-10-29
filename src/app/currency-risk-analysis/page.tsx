import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, DollarSign, TrendingDown, Shield, BarChart3, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Currency Risk Analysis Kenya | KES/USD Exchange Rate | Murivest',
  description: 'Comprehensive currency risk analysis for Kenya real estate investments. KES/USD exchange rate trends, hedging strategies, and currency risk management.',
  keywords: 'currency risk analysis Kenya, KES USD exchange rate, currency hedging Kenya, foreign exchange risk, real estate currency risk',
};

export default function CurrencyRiskAnalysisPage() {
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
              Currency Risk Analysis
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Understanding and managing currency risk in Kenyan real estate investments.
              Strategies to protect returns from KES/USD exchange rate fluctuations.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Current Exchange Rate */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                KES/USD Exchange Rate
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-100 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-slate-900">Current Rate</span>
                  <span className="text-3xl font-light text-amber-600">KES 147.50</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>24h Change:</span>
                    <span className="text-green-600">+0.25 (+0.17%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>7d Change:</span>
                    <span className="text-red-600">-1.80 (-1.20%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>30d Change:</span>
                    <span className="text-green-600">+2.15 (+1.48%)</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The Kenyan shilling has shown relative stability against the USD over the past year,
                with moderate volatility driven by global economic conditions and domestic factors.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-slate-50 p-8 rounded-lg border border-amber-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Currency Risk Factors
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">Global Economic Uncertainty</div>
                    <div className="text-sm text-gray-600">US interest rate decisions and global growth outlook</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <DollarSign className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">Commodity Prices</div>
                    <div className="text-sm text-gray-600">Oil and agricultural commodity price fluctuations</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart3 className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">Domestic Factors</div>
                    <div className="text-sm text-gray-600">Inflation, current account balance, and political stability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact on Investments */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Currency Impact on Real Estate Returns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Rental Income (KES)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Annual NOI:</span>
                  <span className="font-semibold">KES 50M</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">USD Equivalent (147.50):</span>
                  <span className="font-semibold">$339,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">USD Equivalent (140.00):</span>
                  <span className="font-semibold text-green-600">$357,000 (+5.3%)</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">USD Equivalent (155.00):</span>
                  <span className="font-semibold text-red-600">$323,000 (-4.7%)</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Currency Scenarios</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="font-medium text-green-800 mb-2">Appreciation Scenario</div>
                  <div className="text-sm text-green-700">KES strengthens to 140/USD, increasing USD returns by 5.3%</div>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <div className="font-medium text-red-800 mb-2">Depreciation Scenario</div>
                  <div className="text-sm text-red-700">KES weakens to 155/USD, decreasing USD returns by 4.7%</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="font-medium text-blue-800 mb-2">Hedged Position</div>
                  <div className="text-sm text-blue-700">Currency risk eliminated through hedging strategies</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hedging Strategies */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Currency Hedging Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Forward Contracts</h3>
              <p className="text-gray-600">Lock in exchange rates for future rental income repatriation</p>
              <div className="mt-3 text-sm text-gray-500">Cost: 2-4% of hedged amount</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Currency Options</h3>
              <p className="text-gray-600">Protect against adverse movements while allowing participation in favorable moves</p>
              <div className="mt-3 text-sm text-gray-500">Premium: 1-3% of notional value</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Natural Hedging</h3>
              <p className="text-gray-600">Match currency of revenues with expenses and financing</p>
              <div className="mt-3 text-sm text-gray-500">Cost: Minimal operational complexity</div>
            </div>
          </div>
        </div>

        {/* Historical Trends */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Historical Exchange Rate Trends
          </h2>
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-light text-amber-600 mb-2">2020</div>
                <div className="text-gray-600">Average Rate</div>
                <div className="text-lg font-medium text-slate-900">KES 106.50</div>
                <div className="text-sm text-gray-500 mt-1">Pre-COVID baseline</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-amber-600 mb-2">2021</div>
                <div className="text-gray-600">Average Rate</div>
                <div className="text-lg font-medium text-slate-900">KES 110.25</div>
                <div className="text-sm text-gray-500 mt-1">Recovery period</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-amber-600 mb-2">2022</div>
                <div className="text-gray-600">Average Rate</div>
                <div className="text-lg font-medium text-slate-900">KES 120.80</div>
                <div className="text-sm text-gray-500 mt-1">Inflation impact</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-amber-600 mb-2">2023</div>
                <div className="text-gray-600">Average Rate</div>
                <div className="text-lg font-medium text-slate-900">KES 140.15</div>
                <div className="text-sm text-gray-500 mt-1">Stabilization trend</div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Management Framework */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Currency Risk Management Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <TrendingDown className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Risk Assessment</h3>
                <p className="text-gray-600">Regular monitoring of currency exposure and stress testing under various scenarios.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Shield className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Hedging Policy</h3>
                <p className="text-gray-600">Defined hedging ratios and time horizons based on investment objectives and risk tolerance.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <BarChart3 className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Performance Monitoring</h3>
                <p className="text-gray-600">Tracking hedging effectiveness and adjusting strategies based on market conditions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <DollarSign className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Cost-Benefit Analysis</h3>
                <p className="text-gray-600">Evaluating hedging costs against potential currency losses and risk reduction benefits.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Currency Risk Management
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Protect your real estate investment returns from currency fluctuations with professional hedging strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Currency Risk Consultation
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
