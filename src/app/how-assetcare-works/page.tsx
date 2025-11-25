import type { Metadata } from 'next'
import { ArrowRight, Zap, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How AssetCare+ Works - Murivest Realty Group',
  description: 'Smart building management for maximum efficiency. Install sensors, see savings, pay per square foot. Live energy dashboard and automated rent collection.',
}

export default function HowAssetCareWorksPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-light mb-4">
            How AssetCare+ Works
          </h1>
          <p className="text-gray-400 font-serif text-lg">
            Smart building management for maximum efficiency
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-serif font-medium text-green-400 mb-4">Install Sensors</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Deploy IoT sensors across your building for comprehensive monitoring.
                  We install Shelly 3EM energy monitors, leak detectors, and environmental sensors
                  that connect to our cloud platform via Liquid Telcom's 99.5% reliable network.
                </p>
                <div className="bg-slate-800 p-6 rounded-lg">
                  <h4 className="font-serif font-medium text-white mb-3">What We Install:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-green-400 mr-2" />
                      Energy consumption monitors
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-green-400 mr-2" />
                      Water leak detectors
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-green-400 mr-2" />
                      Temperature & humidity sensors
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-green-400 mr-2" />
                      Security system integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <ArrowRight className="w-8 h-8 text-green-400 mx-auto" />

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-serif font-medium text-green-400 mb-4">See Savings</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Monitor real-time energy usage, detect maintenance issues before they become problems,
                  and track tenant consumption. Our AI algorithms identify optimization opportunities
                  and automate maintenance scheduling.
                </p>
                <div className="bg-slate-800 p-6 rounded-lg">
                  <h4 className="font-serif font-medium text-white mb-3">Live Dashboard Features:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-green-400 font-bold text-lg">Energy Savings</div>
                      <div className="text-gray-300">12.5% average reduction</div>
                    </div>
                    <div>
                      <div className="text-green-400 font-bold text-lg">Response Time</div>
                      <div className="text-gray-300">Less than 5 minutes to alerts</div>
                    </div>
                    <div>
                      <div className="text-green-400 font-bold text-lg">Uptime</div>
                      <div className="text-gray-300">99.5% system reliability</div>
                    </div>
                    <div>
                      <div className="text-green-400 font-bold text-lg">ROI</div>
                      <div className="text-gray-300">300% in first year</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ArrowRight className="w-8 h-8 text-green-400 mx-auto" />

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-serif font-medium text-green-400 mb-4">Pay Shs 25/ft²</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Monthly subscription based on your building size. Includes automated rent collection,
                  tenant portal access, maintenance coordination, and comprehensive reporting.
                  30-day free trial available.
                </p>
                <div className="bg-slate-800 p-6 rounded-lg">
                  <h4 className="font-serif font-medium text-white mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <BarChart3 className="w-4 h-4 text-green-400 mr-2" />
                      Live energy dashboard
                    </li>
                    <li className="flex items-center">
                      <BarChart3 className="w-4 h-4 text-green-400 mr-2" />
                      Automated rent collection (STK)
                    </li>
                    <li className="flex items-center">
                      <BarChart3 className="w-4 h-4 text-green-400 mr-2" />
                      24/7 FM liaison service
                    </li>
                    <li className="flex items-center">
                      <BarChart3 className="w-4 h-4 text-green-400 mr-2" />
                      Monthly performance reports
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 font-serif font-medium text-lg transition-all duration-300 flex items-center justify-center mx-auto">
              <BarChart3 className="w-5 h-5 mr-2" />
              See Live Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}