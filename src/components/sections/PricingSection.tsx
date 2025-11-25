import React from 'react';
import { Calculator, TrendingDown } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-light text-white mb-4">
            Our Fees → No Surprises
          </h2>
          <p className="text-gray-400 font-serif">
            Transparent pricing for premium services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* CRE Brokerage Pricing */}
          <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
            <h3 className="text-2xl font-serif font-light text-amber-400 mb-6">
              CRE Brokerage
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-slate-700">
                <span className="text-gray-300">Commission</span>
                <span className="text-white font-medium">2% of transaction</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-700">
                <span className="text-gray-300">Payment Terms</span>
                <span className="text-white font-medium">Paid at closing</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-300">Due Diligence</span>
                <span className="text-white font-medium">Included</span>
              </div>
            </div>
          </div>

          {/* AssetCare+ Pricing */}
          <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
            <h3 className="text-2xl font-serif font-light text-green-400 mb-6">
              AssetCare+
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-slate-700">
                <span className="text-gray-300">Under 20k ft²</span>
                <span className="text-white font-medium">Shs 20/ft²/month</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-700">
                <span className="text-gray-300">20-50k ft²</span>
                <span className="text-white font-medium">Shs 25/ft²/month</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-700">
                <span className="text-gray-300">Over 50k ft²</span>
                <span className="text-white font-medium">Shs 30/ft²/month</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-300">Free Trial</span>
                <span className="text-white font-medium">30 days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Site Survey */}
        <div className="mt-12 bg-slate-900 p-8 rounded-lg border border-slate-700 max-w-md mx-auto">
          <h3 className="text-xl font-serif font-light text-white mb-4 text-center">
            Site Survey
          </h3>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">Shs 50k</div>
            <p className="text-gray-400 text-sm">Credited if you sign up for AssetCare+</p>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="mt-16 bg-slate-900 p-8 rounded-lg border border-slate-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-light text-white mb-4">
              ROI Calculator
            </h3>
            <p className="text-gray-400">See your potential savings with AssetCare+</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-300 mb-2">Building Size (ft²)</label>
              <input
                type="number"
                placeholder="Enter size"
                className="w-full bg-slate-800 border border-slate-600 rounded px-4 py-3 text-white focus:border-amber-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Current Monthly Cost (Shs)</label>
              <input
                type="number"
                placeholder="Enter current cost"
                className="w-full bg-slate-800 border border-slate-600 rounded px-4 py-3 text-white focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 font-serif font-medium transition-all duration-300 flex items-center justify-center mx-auto">
              <Calculator className="w-5 h-5 mr-2" />
              Calculate Savings
            </button>
          </div>

          <div className="mt-8 bg-slate-800 p-6 rounded-lg">
            <div className="flex items-center justify-center space-x-2 text-green-400 mb-4">
              <TrendingDown className="w-5 h-5" />
              <span className="font-medium">Estimated Annual Savings</span>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">Shs 1.2M</div>
              <p className="text-gray-400 text-sm">Based on 12% efficiency improvement</p>
            </div>
          </div>
        </div>

        {/* Cost of Delay */}
        <div className="mt-12 text-center">
          <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg">
            <h4 className="text-red-400 font-serif font-medium mb-2">
              Cost of Delay
            </h4>
            <p className="text-gray-300">
              Every month without AssetCare+ costs Shs 180k in energy waste
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;