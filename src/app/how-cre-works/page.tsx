import type { Metadata } from 'next'
import { ArrowRight, Eye, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How CRE Works - Murivest Realty Group',
  description: 'Step-by-step guide to commercial real estate investment in Nairobi. From deal discovery to quarterly income. See live deals and verified properties.',
}

export default function HowCREWorksPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-light mb-4">
            How CRE Brokerage Works
          </h1>
          <p className="text-gray-400 font-serif text-lg">
            From deal discovery to quarterly income
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-serif font-medium text-amber-400 mb-4">See Deal</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Browse our proprietary database of 150+ verified commercial properties across Nairobi.
                  Each deal includes complete due diligence: title verification, tenant agreements,
                  financial statements, and market analysis.
                </p>
                <div className="bg-slate-800 p-6 rounded-lg">
                  <h4 className="font-serif font-medium text-white mb-3">Live Deal Example:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Property:</span>
                      <span className="text-white ml-2">Sameer Park Industrial</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Location:</span>
                      <span className="text-white ml-2">Nairobi West</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Yield:</span>
                      <span className="text-amber-400 ml-2">9.2% net</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Tenants:</span>
                      <span className="text-white ml-2">Verified logistics companies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ArrowRight className="w-8 h-8 text-amber-400 mx-auto" />

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-serif font-medium text-amber-400 mb-4">Verify Title</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Our legal team, led by Michael Mungai Advocates (LL.B Nbi, LL.M Oxf),
                  conducts comprehensive title verification. We check ownership history,
                  encumbrances, court cases, and compliance with ERB regulations.
                </p>
                <div className="bg-slate-800 p-6 rounded-lg">
                  <h4 className="font-serif font-medium text-white mb-3">Verification Checklist:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Title deed authenticity
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Ownership chain verification
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Encumbrance search
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      ERB compliance check
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <ArrowRight className="w-8 h-8 text-amber-400 mx-auto" />

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-serif font-medium text-amber-400 mb-4">Close & Earn</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Complete the transaction through our escrow service with Co-op Bank.
                  We handle all paperwork, stamp duty, and registration. Start earning
                  quarterly income immediately after closing.
                </p>
                <div className="bg-slate-800 p-6 rounded-lg">
                  <h4 className="font-serif font-medium text-white mb-3">Closing Process:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-amber-400 font-bold text-lg">Day 1-7</div>
                      <div className="text-gray-300">Due diligence completion</div>
                    </div>
                    <div className="text-center">
                      <div className="text-amber-400 font-bold text-lg">Day 8-14</div>
                      <div className="text-gray-300">Agreement signing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-amber-400 font-bold text-lg">Day 15+</div>
                      <div className="text-gray-300">First income distribution</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 font-serif font-medium text-lg transition-all duration-300 flex items-center justify-center mx-auto">
              <Eye className="w-5 h-5 mr-2" />
              View 3 Live Deals
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}