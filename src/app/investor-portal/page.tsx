'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Shield, Lock, Eye, EyeOff, ArrowRight, Download, FileText, BarChart3, Users, TrendingUp } from 'lucide-react'

export default function InvestorPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [accessCode, setAccessCode] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleAccess = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple access code for demo - in production this would be proper authentication
    if (accessCode === 'MURIVEST2025' || accessCode === 'INVESTOR2025') {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Invalid access code. Please contact our team for portal access.')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 flex items-center justify-center luxury-padding">
        <div className="max-w-md w-full">
          <div className="luxury-card text-center">
            <Shield className="h-16 w-16 luxury-gold-accent mx-auto mb-6" />
            <h1 className="luxury-heading text-3xl mb-4">Investor Portal</h1>
            <p className="luxury-body text-white/80 mb-8">
              Access confidential investment notes, proprietary research, and exclusive portfolio opportunities.
            </p>

            <form onSubmit={handleAccess} className="space-y-6">
              <div className="relative">
                <label className="block luxury-body text-white/80 text-sm mb-2">
                  Access Code
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    className="w-full luxury-input pl-4 pr-12 py-3 bg-white/10 border border-gold-400/30 text-white placeholder-white/50 focus:border-gold-400"
                    placeholder="Enter your access code"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-red-400 text-sm">{error}</div>
              )}

              <button type="submit" className="luxury-button-primary w-full">
                Access Portal
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gold-400/20">
              <p className="luxury-body text-white/60 text-sm mb-4">
                Don't have access? Contact our institutional team for portal credentials.
              </p>
              <Link href="/contact">
                <button className="luxury-button-secondary w-full">
                  Request Access
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const confidentialNotes = [
    {
      title: "Nairobi CBD Office Portfolio - Q4 2025",
      type: "Investment Note",
      size: "2.4 MB",
      description: "Detailed analysis of premium office assets in Nairobi's central business district"
    },
    {
      title: "Westlands Mixed-Use Development",
      type: "Portfolio Summary",
      size: "1.8 MB",
      description: "Comprehensive due diligence on Westlands retail and office complex"
    },
    {
      title: "East Africa Logistics Hub",
      type: "Market Report",
      size: "3.1 MB",
      description: "Strategic analysis of industrial and logistics investments across East Africa"
    }
  ]

  const portfolioMetrics = [
    { label: "Total Portfolio Value", value: "KES 2.8B", change: "+12%" },
    { label: "Average Yield", value: "8.4%", change: "+0.8%" },
    { label: "Occupancy Rate", value: "94%", change: "+2%" },
    { label: "IRR (5-year)", value: "18.2%", change: "+3.1%" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="luxury-navy-bg text-white luxury-section-spacing">
        <div className="luxury-container luxury-padding">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="luxury-heading text-4xl mb-2">Investor Portal</h1>
              <p className="luxury-body text-white/80">Confidential investment opportunities and proprietary research</p>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="luxury-button-secondary"
            >
              Logout
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="luxury-section-spacing bg-white">
        <div className="luxury-container luxury-padding">
          <h2 className="luxury-heading text-3xl mb-8">Portfolio Overview</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {portfolioMetrics.map((metric, index) => (
              <div key={index} className="luxury-card text-center">
                <div className="text-2xl luxury-heading luxury-gold-accent mb-1">{metric.value}</div>
                <div className="luxury-body text-white/80 text-sm mb-1">{metric.label}</div>
                <div className="text-green-400 text-sm">{metric.change}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 luxury-grid-gap">
            <div className="luxury-card">
              <div className="flex items-center mb-6">
                <BarChart3 className="h-8 w-8 luxury-gold-accent mr-3" />
                <h3 className="luxury-heading text-xl">Performance Dashboard</h3>
              </div>
              <p className="luxury-body text-white/80 mb-4">
                Real-time monitoring of your investment portfolio performance, including yield analysis and market comparisons.
              </p>
              <button className="luxury-button-secondary">
                View Dashboard
              </button>
            </div>

            <div className="luxury-card">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 luxury-gold-accent mr-3" />
                <h3 className="luxury-heading text-xl">Investor Network</h3>
              </div>
              <p className="luxury-body text-white/80 mb-4">
                Connect with fellow institutional investors and participate in exclusive investment opportunities.
              </p>
              <button className="luxury-button-secondary">
                Access Network
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Confidential Documents */}
      <section className="luxury-section-spacing luxury-navy-bg text-white">
        <div className="luxury-container luxury-padding">
          <h2 className="luxury-heading text-3xl mb-8">Confidential Investment Notes</h2>

          <div className="space-y-6">
            {confidentialNotes.map((note, index) => (
              <div key={index} className="luxury-card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <FileText className="h-5 w-5 luxury-gold-accent mr-2" />
                      <span className="luxury-gold-accent font-luxury font-medium text-sm">{note.type}</span>
                      <span className="mx-3 text-white/40">•</span>
                      <span className="luxury-body text-white/60 text-sm">{note.size}</span>
                    </div>
                    <h3 className="luxury-heading text-lg mb-2">{note.title}</h3>
                    <p className="luxury-body text-white/80 text-sm">{note.description}</p>
                  </div>
                  <button className="luxury-button-secondary flex items-center ml-6">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Access */}
      <section className="luxury-section-spacing bg-white">
        <div className="luxury-container luxury-padding">
          <h2 className="luxury-heading text-3xl mb-8">Proprietary Research</h2>

          <div className="grid md:grid-cols-3 luxury-grid-gap">
            <div className="luxury-card text-center">
              <TrendingUp className="h-12 w-12 luxury-gold-accent mx-auto mb-4" />
              <h3 className="luxury-heading text-xl mb-3">Market Intelligence</h3>
              <p className="luxury-body text-navy-600 mb-4">
                Exclusive research reports on African real estate markets, including Nairobi CBD analysis and regional growth forecasts.
              </p>
              <button className="luxury-button-primary">
                Access Reports
              </button>
            </div>

            <div className="luxury-card text-center">
              <Shield className="h-12 w-12 luxury-gold-accent mx-auto mb-4" />
              <h3 className="luxury-heading text-xl mb-3">Due Diligence</h3>
              <p className="luxury-body text-navy-600 mb-4">
                Comprehensive property analysis, legal reviews, and financial modeling for potential investment opportunities.
              </p>
              <button className="luxury-button-primary">
                View Analysis
              </button>
            </div>

            <div className="luxury-card text-center">
              <Lock className="h-12 w-12 luxury-gold-accent mx-auto mb-4" />
              <h3 className="luxury-heading text-xl mb-3">Private Placements</h3>
              <p className="luxury-body text-navy-600 mb-4">
                Access to exclusive investment opportunities not available to the general public, including pre-IPO placements.
              </p>
              <button className="luxury-button-primary">
                Browse Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="luxury-section-spacing bg-gold-600 text-navy-950">
        <div className="luxury-container luxury-padding text-center">
          <h2 className="luxury-heading text-3xl mb-6">Need Assistance?</h2>
          <p className="luxury-body text-navy-800 mb-8">
            Our institutional team is available to discuss investment opportunities and provide personalized guidance.
          </p>
          <Link href="/contact">
            <button className="luxury-button-primary">
              Contact Investment Team
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}