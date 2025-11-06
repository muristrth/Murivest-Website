import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Shield, Users, PieChart, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wealth Management Kenya | Luxury Gifts & Real Estate Investment Advisory | Murivest',
  description: 'Comprehensive wealth management services in Kenya with personalized luxury gifts worth over $500,000. Real estate investment advisory, portfolio management, rare antiques, fine jewelry, and wealth preservation strategies for UHNW clients.',
  keywords: 'wealth management Kenya, investment advisory Nairobi, portfolio management Kenya, wealth preservation, real estate wealth management, luxury gifts Kenya, personalized gifts Nairobi, rare antiques Kenya, fine jewelry Kenya, George Daniels watch, luxury client gifts, UHNW wealth management',
};

export default function WealthManagementPage() {
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
              Wealth Management
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive wealth management and investment advisory services.
              Preserving and growing wealth through strategic real estate investments.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Key Features */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <PieChart className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Portfolio Management</h3>
              <p className="text-gray-600">Comprehensive portfolio construction and ongoing management across asset classes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Risk Management</h3>
              <p className="text-gray-600">Advanced risk assessment and mitigation strategies to protect and preserve wealth.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Personalized Service</h3>
              <p className="text-gray-600">Dedicated relationship managers providing personalized wealth management solutions.</p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Wealth Management Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Investment Advisory</h3>
              <p className="text-gray-600 mb-6">Strategic investment planning and portfolio construction tailored to individual goals and risk tolerance.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Asset allocation strategies</li>
                <li>• Risk assessment and profiling</li>
                <li>• Tax-efficient investment planning</li>
                <li>• Retirement planning</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Estate Planning</h3>
              <p className="text-gray-600 mb-6">Comprehensive estate planning services to ensure wealth transfer to future generations.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Trust structures and foundations</li>
                <li>• Succession planning</li>
                <li>• Tax planning for estates</li>
                <li>• Philanthropic planning</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Tax Optimization</h3>
              <p className="text-gray-600 mb-6">Advanced tax planning strategies to minimize tax liabilities and maximize after-tax returns.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• International tax planning</li>
                <li>• Real estate tax strategies</li>
                <li>• Offshore structuring</li>
                <li>• Tax-efficient withdrawals</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Family Office Services</h3>
              <p className="text-gray-600 mb-6">Comprehensive family office services for multi-generational wealth management.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Family governance</li>
                <li>• Education and succession</li>
                <li>• Lifestyle management</li>
                <li>• Concierge services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Personalized Luxury Gifts */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Personalized Luxury Gifts
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto text-center mb-12">
            At Murivest, we serve quite luxury clients who demand the extraordinary. We go beyond investment management to celebrate our ultra-high-net-worth clients' special moments with personalized gifts worth over $500,000, including rare antiques, fine jewelry, bespoke luxury items, and exceptional collectibles that reflect their discerning taste and strengthen our partnership.
          </p>

          {/* Luxury Items Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* George Daniels Watch */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative h-48">
                <img
                  src="https://assets.phillips.com/t_Website_LotDetailZoomImage/auctions/NY080322/173423_001.jpg"
                  alt="George Daniels Anniversary Watch"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-medium text-slate-900 mb-1">George Daniels</h4>
                <p className="text-slate-600 text-sm mb-2">Anniversary Watch</p>
                <div className="text-amber-600 font-medium text-sm">$816,500</div>
              </div>
            </div>

            {/* Hermès */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-2">
                    <span className="text-amber-800 font-bold text-sm">H</span>
                  </div>
                  <p className="text-xs">Hermès</p>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-medium text-slate-900 mb-1">Hermès</h4>
                <p className="text-slate-600 text-sm mb-2">Rare Leather Goods</p>
                <div className="text-amber-600 font-medium text-sm">Upon Request</div>
              </div>
            </div>

            {/* Ferrari 250 GT Lusso */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mb-2">
                    <span className="text-red-800 font-bold text-sm">F</span>
                  </div>
                  <p className="text-xs">Ferrari</p>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-medium text-slate-900 mb-1">Ferrari 250 GT Lusso</h4>
                <p className="text-slate-600 text-sm mb-2">1960s Sports Car</p>
                <div className="text-amber-600 font-medium text-sm">Upon Request</div>
              </div>
            </div>

            {/* Patek Philippe */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mb-2">
                    <span className="text-slate-800 font-bold text-sm">PP</span>
                  </div>
                  <p className="text-xs">Patek Philippe</p>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-medium text-slate-900 mb-1">Patek Philippe</h4>
                <p className="text-slate-600 text-sm mb-2">Calatrava Series</p>
                <div className="text-amber-600 font-medium text-sm">Upon Request</div>
              </div>
            </div>

            {/* Rolls-Royce Phantom */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-2">
                    <span className="text-blue-800 font-bold text-sm">RR</span>
                  </div>
                  <p className="text-xs">Rolls-Royce</p>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-medium text-slate-900 mb-1">Rolls-Royce Phantom</h4>
                <p className="text-slate-600 text-sm mb-2">Ultimate Luxury</p>
                <div className="text-amber-600 font-medium text-sm">Upon Request</div>
              </div>
            </div>

            {/* Rémy Martin Louis XIII */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-amber-50 to-yellow-100 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-2">
                    <span className="text-amber-800 font-bold text-sm">RM</span>
                  </div>
                  <p className="text-xs">Rémy Martin</p>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-medium text-slate-900 mb-1">Rémy Martin Louis XIII</h4>
                <p className="text-slate-600 text-sm mb-2">Rare Cask Cognac</p>
                <div className="text-amber-600 font-medium text-sm">Upon Request</div>
              </div>
            </div>

            {/* Land Rover Defender */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mb-2">
                    <span className="text-green-800 font-bold text-sm">LR</span>
                  </div>
                  <p className="text-xs">Land Rover</p>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-medium text-slate-900 mb-1">Land Rover Defender</h4>
                <p className="text-slate-600 text-sm mb-2">Customized by Himalaya</p>
                <div className="text-amber-600 font-medium text-sm">Upon Request</div>
              </div>
            </div>

            {/* Bentley Mulsanne */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                    <span className="text-gray-800 font-bold text-sm">B</span>
                  </div>
                  <p className="text-xs">Bentley</p>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-medium text-slate-900 mb-1">Bentley Mulsanne</h4>
                <p className="text-slate-600 text-sm mb-2">Final Edition</p>
                <div className="text-amber-600 font-medium text-sm">Upon Request</div>
              </div>
            </div>
          </div>

          {/* Detailed George Daniels Example */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 max-w-5xl mx-auto overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-light text-slate-900 mb-4">Featured: George Daniels Anniversary Watch</h3>
                <div className="flex justify-center space-x-8 text-lg">
                  <div>
                    <span className="text-slate-500">Estimate:</span>
                    <span className="text-slate-900 font-medium ml-2">$400,000 - 1,000,000</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Sold For:</span>
                    <span className="text-slate-900 font-medium ml-2">$816,500</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-medium text-slate-900 mb-4">Lot Details</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Manufacturer:</strong> George Daniels</p>
                    <p><strong>Year:</strong> Circa 2014</p>
                    <p><strong>Movement No:</strong> No. 09</p>
                    <p><strong>Model Name:</strong> Anniversary</p>
                    <p><strong>Material:</strong> 18K yellow gold</p>
                    <p><strong>Calibre:</strong> Manual, Co-axial escapement</p>
                    <p><strong>Bracelet/Strap:</strong> Crocodile</p>
                    <p><strong>Clasp/Buckle:</strong> 18K yellow gold George Daniels deployant clasp</p>
                    <p><strong>Dimensions:</strong> 40mm diameter</p>
                    <p><strong>Signed:</strong> Case, dial, movement and clasp signed</p>
                    <p><strong>Accessories:</strong> Accompanied by George Daniels presentation manual, setting pin, cloth, key and fitted presentation box.</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-medium text-slate-900 mb-4">Catalogue Essay</h4>
                  <div className="text-gray-700 space-y-4">
                    <p>Widely considered the greatest watchmaker of the 20th century and a visionary icon of British watchmaking, Dr. George Daniels truly lived up to the definitions of determination, innovation and dedication. Born in 1926, Dr. Daniels stumbled upon his first watch at the age of 5 and discovered the interlocking wheels of the movement, "the centre of the universe" he says. A truly self-taught genius, Daniels never completed an apprenticeship, obtaining his knowledge from books and self-motivated restoration of various Abraham Louis Breguet timepieces after the war in 1947.</p>

                    <p>George Daniels' first horological exercise for himself was a Marine Chronometer which he made in 1953, followed by a series of 37 pocket and wrist watches, including the Four-Minute Tourbillon and his masterpiece, The Space Traveller pocket watch. He became a renowned expert on Breguet's work and wrote the definitive book on the subject, The Art of Breguet.</p>

                    <p>Relentless in pushing the boundaries as an individual and in the world of horology, Daniels challenged the quartz crisis in the late 1960s with his impeccable mastery of the 34 trades requisite in creating a watch entirely by hand. During this new dawn of quartz watches, Daniels' innovation of his ground breaking, Co-axial escapement changed the landscape of horology as none other since Thomas Mudge's invention of the lever escapement in 1755 - a time gap of 250 years.</p>

                    <div className="mt-4">
                      <Link
                        href="/contact"
                        className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
                      >
                        See More About This Extraordinary Timepiece →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              We search for and acquire these extraordinary pieces to honor our clients' milestones, creating lasting memories that reflect our deep appreciation and commitment to their success.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
            >
              Discuss Personalized Gifts
            </Link>
          </div>
        </div>

        {/* Investment Philosophy */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Investment Philosophy
          </h2>
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Long-term Focus</h3>
                <p className="text-gray-600 text-sm">Patient, long-term investment approach prioritizing sustainable wealth creation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Risk Management</h3>
                <p className="text-gray-600 text-sm">Comprehensive risk management with diversification across asset classes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PieChart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Diversification</h3>
                <p className="text-gray-600 text-sm">Balanced portfolios across geographies, sectors, and asset classes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Value Creation</h3>
                <p className="text-gray-600 text-sm">Active management and value enhancement strategies for superior returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Segments */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Client Segments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">High Net Worth Individuals</h3>
              <p className="text-gray-600">Personalized wealth management for individuals with $1M+ investable assets</p>
              <div className="mt-4 text-amber-600 font-medium">$1M+ Minimum</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Family Offices</h3>
              <p className="text-gray-600">Multi-generational wealth management and family governance services</p>
              <div className="mt-4 text-amber-600 font-medium">$10M+ Minimum</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Institutional Investors</h3>
              <p className="text-gray-600">Sophisticated investment solutions for pension funds and endowments</p>
              <div className="mt-4 text-amber-600 font-medium">$25M+ Minimum</div>
            </div>
          </div>
        </div>

        {/* Performance Track Record */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-slate-900 text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Performance Track Record
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">12.8%</div>
                <div className="text-gray-600">5-Year Average Return</div>
                <div className="text-sm text-gray-500 mt-2">Annualized</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">$2.4B</div>
                <div className="text-gray-600">Assets Under Management</div>
                <div className="text-sm text-gray-500 mt-2">Globally</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">150+</div>
                <div className="text-gray-600">Client Families</div>
                <div className="text-sm text-gray-500 mt-2">Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">25+</div>
                <div className="text-gray-600">Years Experience</div>
                <div className="text-sm text-gray-500 mt-2">Average</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Start Your Wealth Management Journey
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with our experienced wealth management team to preserve and grow your wealth through strategic real estate investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Schedule Wealth Review
            </Link>
            <Link
              href="/market"
              className="border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              View Market Intelligence
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
