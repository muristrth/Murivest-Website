import React from 'react';
import { ArrowRight, Eye, CheckCircle, Zap } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-light text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 font-serif">
            Simple processes for complex solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* CRE Process */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-serif font-light text-amber-400 mb-2">
                CRE Brokerage
              </h3>
              <p className="text-gray-300">From deal discovery to quarterly income</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-white font-serif font-medium mb-2">See Deal</h4>
                  <p className="text-gray-400 text-sm">Browse verified commercial properties with complete due diligence</p>
                </div>
              </div>

              <ArrowRight className="w-6 h-6 text-amber-400 mx-auto" />

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-white font-serif font-medium mb-2">Verify Title</h4>
                  <p className="text-gray-400 text-sm">Legal team confirms ownership, encumbrances, and compliance</p>
                </div>
              </div>

              <ArrowRight className="w-6 h-6 text-amber-400 mx-auto" />

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-white font-serif font-medium mb-2">Close & Earn</h4>
                  <p className="text-gray-400 text-sm">Complete transaction and start receiving quarterly distributions</p>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 font-serif font-medium transition-all duration-300 flex items-center justify-center mx-auto">
                <Eye className="w-4 h-4 mr-2" />
                View Live Deals
              </button>
            </div>
          </div>

          {/* AssetCare Process */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-serif font-light text-green-400 mb-2">
                AssetCare+
              </h3>
              <p className="text-gray-300">Smart building management for maximum efficiency</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-white font-serif font-medium mb-2">Install Sensors</h4>
                  <p className="text-gray-400 text-sm">Deploy IoT sensors across your building for real-time monitoring</p>
                </div>
              </div>

              <ArrowRight className="w-6 h-6 text-green-400 mx-auto" />

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-white font-serif font-medium mb-2">See Savings</h4>
                  <p className="text-gray-400 text-sm">Monitor energy usage, detect leaks, and track maintenance needs</p>
                </div>
              </div>

              <ArrowRight className="w-6 h-6 text-green-400 mx-auto" />

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-white font-serif font-medium mb-2">Pay Shs 25/ft²</h4>
                  <p className="text-gray-400 text-sm">Monthly subscription with automated rent collection and reporting</p>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-serif font-medium transition-all duration-300 flex items-center justify-center mx-auto">
                <Zap className="w-4 h-4 mr-2" />
                See Live Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;