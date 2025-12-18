// pages/investor-portal.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Shield, Lock, Eye, EyeOff, ArrowRight, Download, FileText, BarChart3, Users, TrendingUp, Building2, Mail, Phone, MapPin, ChevronRight, X, Menu, Activity, PieChart } from 'lucide-react'

export default function InvestorPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [accessCode, setAccessCode] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const handleAccess = (e: React.FormEvent) => {
    e.preventDefault()
    if (accessCode === 'MURIVEST2025' || accessCode === 'INVESTOR2025') {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Invalid credentials. For access inquiries, contact our institutional relations desk.')
    }
  }

  const portfolioProperties = [
    {
      id: 6,
      name: "Uchumi House Commercial Building",
      location: "Aga khan Walk, Nairobi CBD, Kenya",
      type: "Commercial Building",
      value: "KSh 570M",
      yield: "12.2%",
      occupancy: "100%",
      sqm: "4,491 sqm",
      status: "Prime CBD Asset",
      description: "Premier commercial property with excellent visibility and immediate rental income in CBD. Features 5 storeys with basement parking.",
      highlights: ["Prime CBD Location", "5 Storey + Basement", "Excellent Visibility", "Immediate Rental Income"],
      lastUpdate: "Updated 1 day ago"
    },
    {
      id: 7,
      name: "The Panari Hotel",
      location: "Mombasa Road, Nairobi West, Kenya",
      type: "Luxury Hotel",
      value: "KSh 3B",
      yield: "18.5%",
      occupancy: "85%",
      sqm: "2.5 Acres",
      status: "Exclusive Offering",
      description: "Magnificent 5-star hotel with luxury amenities, strategic location and international clientele. Features 136 rooms and 12 meeting rooms.",
      highlights: ["136 Rooms", "5-Star Rating", "2.5 Acres", "12 Meeting Rooms"],
      lastUpdate: "Updated 2 days ago"
    },
    {
      id: 8,
      name: "Absa Towers",
      location: "Loita and Market Street, Nairobi CBD, Kenya",
      type: "Office Development",
      value: "KSh 2.1B",
      yield: "9%",
      occupancy: "99.8%",
      sqm: "143,300 sq.ft NLA",
      status: "Institutional Grade",
      description: "Prime Office Development in Nairobi CBD with excellent rental income and blue-chip tenants. 17-storey tower with 160 parking bays.",
      highlights: ["17 Storey", "143,300 sq.ft NLA", "160 Parking Bays", "99.8% Occupancy"],
      lastUpdate: "Updated 4 hours ago"
    }
  ]

  const confidentialNotes = [
    {
      title: "Absa Towers Investment Note",
      date: "December 2025",
      pages: "16",
      description: "Comprehensive investment memorandum for the prime 17-storey office tower in Nairobi CBD with institutional-grade tenants and superior returns.",
      type: "Investment Memorandum"
    },
    {
      title: "Kenya Comfort Hotel Building Analysis",
      date: "November 2025",
      pages: "22",
      description: "Detailed due diligence report on the landmark hotel property in Nairobi CBD with secure leaseback arrangements.",
      type: "Due Diligence Report"
    },
    {
      title: "Nairobi Commercial Property Market Outlook",
      date: "December 2025",
      pages: "28",
      description: "Proprietary market research on commercial real estate trends, rental growth projections, and investment opportunities in Nairobi.",
      type: "Market Intelligence"
    }
  ]

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0B1426] flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="bg-[#0B1426]/90 border border-[#D4AF37]/30 rounded-sm p-10 md:p-12 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between mb-8">
              <Shield className="h-10 w-10 text-[#D4AF37]" />
              <span className="text-[10px] tracking-widest text-[#D4AF37]/70 font-medium">PRIVATE ACCESS</span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl text-white mb-3 tracking-wide">
              Investor Portal
            </h1>
            <p className="text-sm text-white/60 mb-10 font-light leading-relaxed">
              Confidential investment notes and proprietary market research for accredited institutional investors.
            </p>

            <form onSubmit={handleAccess} className="space-y-6">
              <div>
                <label className="block text-[11px] tracking-wider text-[#D4AF37]/80 uppercase mb-3 font-medium">
                  Access Credentials
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    className="w-full bg-[#0B1426] border border-[#D4AF37]/40 text-white placeholder-white/40 text-sm py-3.5 px-4 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="Enter your access code"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-red-400 text-xs bg-red-950/20 border border-red-500/30 py-2 px-3">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                className="w-full bg-[#D4AF37] text-[#0B1426] py-3.5 text-sm tracking-wider uppercase font-semibold hover:bg-[#B8941F] transition-colors"
              >
                Enter Portal
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-[#D4AF37]/20">
              <p className="text-xs text-white/50 mb-4">
                Network membership is by invitation only.
              </p>
              <Link href="/contact">
                <button className="text-[11px] tracking-wider text-[#D4AF37] uppercase hover:text-[#B8941F] transition-colors">
                  Contact Institutional Relations →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#0B1426] text-white sticky top-0 z-40 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="font-serif text-2xl tracking-wide">Murivest Realty</h1>
              <span className="hidden md:block text-[10px] tracking-widest text-[#D4AF37]/70 uppercase">
                Private Investor Network
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#properties" className="text-sm text-white/70 hover:text-white transition-colors">Properties</a>
              <a href="#research" className="text-sm text-white/70 hover:text-white transition-colors">Research</a>
              <a href="#network" className="text-sm text-white/70 hover:text-white transition-colors">Network</a>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-[11px] tracking-wider text-[#D4AF37] hover:text-white uppercase transition-colors"
              >
                Exit Portal
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0B1426] to-[#0B1426]/95 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide">
              Private Investment Network
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light mb-8">
              Exclusive access to Nairobi's most distinguished commercial real estate opportunities, 
              enhanced by AI-driven building intelligence and institutional-grade research.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Activity className="h-4 w-4 text-[#D4AF37]" />
                <span className="text-white/60">Live Market Data</span>
              </div>
              <div className="flex items-center space-x-2">
                <PieChart className="h-4 w-4 text-[#D4AF37]" />
                <span className="text-white/60">Portfolio Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Metrics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h3 className="font-serif text-2xl md:text-3xl text-[#0B1426] mb-12">Portfolio Performance</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <div className="bg-[#0B1426] text-white p-6 md:p-8">
              <div className="text-2xl md:text-3xl font-light text-[#D4AF37] mb-2">KSh 2.8B</div>
              <div className="text-[11px] tracking-wider text-white/60 uppercase">Assets Under Management</div>
              <div className="text-green-400 text-xs mt-2">+12.4% YoY</div>
            </div>
            
            <div className="bg-[#0B1426] text-white p-6 md:p-8">
              <div className="text-2xl md:text-3xl font-light text-[#D4AF37] mb-2">8.7%</div>
              <div className="text-[11px] tracking-wider text-white/60 uppercase">Average Yield</div>
              <div className="text-green-400 text-xs mt-2">+0.9% vs market</div>
            </div>
            
            <div className="bg-[#0B1426] text-white p-6 md:p-8">
              <div className="text-2xl md:text-3xl font-light text-[#D4AF37] mb-2">94.3%</div>
              <div className="text-[11px] tracking-wider text-white/60 uppercase">Occupancy Rate</div>
              <div className="text-green-400 text-xs mt-2">+2.1% Q4</div>
            </div>
            
            <div className="bg-[#0B1426] text-white p-6 md:p-8">
              <div className="text-2xl md:text-3xl font-light text-[#D4AF37] mb-2">18.2%</div>
              <div className="text-[11px] tracking-wider text-white/60 uppercase">5-Year IRR</div>
              <div className="text-green-400 text-xs mt-2">Institutional grade</div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Properties */}
      <section id="properties" className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-12">
            <h3 className="font-serif text-2xl md:text-3xl text-[#0B1426]">Confidential Properties</h3>
            <span className="text-[11px] tracking-wider text-[#D4AF37] bg-[#0B1426]/10 py-1.5 px-3 uppercase">
              Network Only
            </span>
          </div>

          <div className="space-y-8">
            {portfolioProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 shadow-sm hover:shadow-md transition-all cursor-pointer"
                onClick={() => setSelectedProperty(selectedProperty === property.id ? null : property.id)}
              >
                <div className="p-8 md:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <Building2 className="h-5 w-5 text-[#D4AF37]" />
                        <span className="text-[11px] tracking-wider text-[#0B1426]/60 uppercase">{property.type}</span>
                        <span className="text-[11px] tracking-wider text-[#0B1426]/60 uppercase">{property.status}</span>
                      </div>
                      <h4 className="font-serif text-2xl md:text-3xl text-[#0B1426] mb-2">{property.name}</h4>
                      <p className="text-sm text-[#0B1426]/70 flex items-center">
                        <MapPin className="h-3.5 w-3.5 mr-1.5" />
                        {property.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-serif text-2xl text-[#D4AF37] mb-1">{property.value}</div>
                      <div className="text-[11px] tracking-wider text-[#0B1426]/60 uppercase">{property.sqm}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#D4AF37]/10">
                    <div>
                      <div className="text-lg font-light text-[#0B1426]">{property.yield}</div>
                      <div className="text-[10px] tracking-wider text-[#0B1426]/60 uppercase">Net Yield</div>
                    </div>
                    <div>
                      <div className="text-lg font-light text-[#0B1426]">{property.occupancy}</div>
                      <div className="text-[10px] tracking-wider text-[#0B1426]/60 uppercase">Occupancy</div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[11px] tracking-wider text-green-600 uppercase">Available to Network</span>
                    </div>
                  </div>

                  {selectedProperty === property.id && (
                    <div className="mt-8 pt-8 border-t border-[#D4AF37]/20 animate-fadeIn">
                      <p className="text-sm text-[#0B1426]/80 leading-relaxed mb-6 max-w-4xl">
                        {property.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h5 className="text-[11px] tracking-wider text-[#D4AF37] uppercase mb-3">Smart Building Features</h5>
                          <ul className="space-y-2">
                            {property.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-sm text-[#0B1426]/80 flex items-center">
                                <ChevronRight className="h-3.5 w-3.5 text-[#D4AF37] mr-2" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-[11px] tracking-wider text-[#D4AF37] uppercase mb-3">Investment Memorandum</h5>
                          <button className="bg-[#0B1426] text-white text-sm py-2.5 px-5 hover:bg-[#D4AF37] hover:text-[#0B1426] transition-colors flex items-center">
                            <Download className="h-4 w-4 mr-2" />
                            Download (PDF)
                          </button>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-[#D4AF37]/10">
                        <p className="text-[11px] text-[#0B1426]/50">{property.lastUpdate}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidential Documents */}
      <section id="research" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h3 className="font-serif text-2xl md:text-3xl text-[#0B1426] mb-12">Investment Intelligence</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {confidentialNotes.map((note, idx) => (
              <div key={idx} className="bg-[#0B1426] p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <FileText className="h-7 w-7 text-[#D4AF37]" />
                  <span className="text-[10px] tracking-wider text-white/60 uppercase">{note.type}</span>
                </div>
                <h4 className="font-serif text-xl text-white mb-3">{note.title}</h4>
                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  {note.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#D4AF37]/20">
                  <div className="text-[11px] text-white/50">{note.date} • {note.pages} pages</div>
                  <button className="text-[11px] tracking-wider text-[#D4AF37] uppercase hover:text-white transition-colors flex items-center">
                    Access
                    <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Network */}
      <section id="network" className="py-20 md:py-28 bg-[#0B1426]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <Users className="h-16 w-16 text-[#D4AF37] mx-auto mb-6" />
          <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">Private Investment Network</h3>
          <p className="text-white/70 text-base leading-relaxed mb-10 max-w-3xl mx-auto">
            Join an exclusive consortium of Kenya's most sophisticated commercial real estate investors. 
            Receive first access to off-market opportunities, co-investment prospects, and quarterly 
            market briefings from our research division.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
            <div className="bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <h5 className="text-[13px] tracking-wider text-[#D4AF37] uppercase mb-3">Early Access</h5>
              <p className="text-sm text-white/70">Properties available 30-60 days before general market release</p>
            </div>
            <div className="bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <h5 className="text-[13px] tracking-wider text-[#D4AF37] uppercase mb-3">Co-Investment</h5>
              <p className="text-sm text-white/70">Syndication opportunities on institutional-grade assets</p>
            </div>
            <div className="bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <h5 className="text-[13px] tracking-wider text-[#D4AF37] uppercase mb-3">Quarterly Briefings</h5>
              <p className="text-sm text-white/70">Invitations to private dinners with market analysts and policymakers</p>
            </div>
          </div>

          <button className="bg-[#D4AF37] text-[#0B1426] px-10 py-4 text-sm tracking-wider uppercase font-semibold hover:bg-[#B8941F] transition-colors">
            Request Network Membership
          </button>
        </div>
      </section>

      {/* Footer Contact */}
      <footer className="bg-white border-t border-[#D4AF37]/20 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h4 className="font-serif text-2xl text-[#0B1426] mb-3">Murivest Realty Ltd</h4>
              <p className="text-sm text-[#0B1426]/60 leading-relaxed max-w-md">
                Kenya's premier commercial real estate investment firm specializing in 
                AI-enhanced building management systems and institutional-grade assets.
              </p>
            </div>
            <div>
              <h5 className="text-[11px] tracking-wider text-[#0B1426]/70 uppercase mb-4">Institutional Desk</h5>
              <p className="text-sm text-[#0B1426]/70 mb-2 flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +254 20 271 3000
              </p>
              <p className="text-sm text-[#0B1426]/70 mb-2 flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                institutional@murivest.co.ke
              </p>
            </div>
            <div>
              <h5 className="text-[11px] tracking-wider text-[#0B1426]/70 uppercase mb-4">Nairobi Office</h5>
              <p className="text-sm text-[#0B1426]/70 flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                The Mirage, 7th Floor<br />
                Chiromo Road, Westlands
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#D4AF37]/10">
            <p className="text-[11px] text-[#0B1426]/50">
              © 2025 Murivest Realty Ltd. All investment materials are confidential and proprietary.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}