// page.tsx - Investor Portal Main Page (Overview)
'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client'
import {
  Shield,
  Eye,
  EyeOff,
  Building2,
  FileText,
  Download,
  TrendingUp,
  MapPin,
  LogOut,
  Lock,
  Clock,
  Award,
  ChevronRight,
  ArrowRight,
  Briefcase,
  Globe,
  BarChart3,
  Users
} from 'lucide-react'

type Mode = 'login' | 'register'

type Profile = {
  id: string
  full_name: string | null
  title: string | null
  organisation: string | null
  phone: string | null
  aum: string | null
  investment_focus: string | null
  investor_status: 'registered' | 'verified' | 'admin' | 'premium'
  last_login?: string
  portfolio_value?: number
  allocations?: {
    direct_real_estate: number
    indirect_real_estate: number
    equities: number
    fixed_income: number
    alternatives: number
  }
}

type Publication = {
  id: string
  title: string
  summary: string | null
  category: string
  fliphtml_url: string | null
  file_url: string | null
  published_at: string
  access_level: 'registered' | 'verified' | 'premium'
}

type MarketSnapshot = {
  region: string
  metric: string
  value: string
  trend: string
  source: string
}

type BriefOrderResponse = {
  success: boolean
  orderId?: string
  nextStep?: string
  error?: string
}

type PaymentResponse = {
  success: boolean
  error?: string
}

export default function InvestorPortalPage() {
  const supabase = useMemo(() => createClient(), [])
  const [mode, setMode] = useState<Mode>('login')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [authUser, setAuthUser] = useState<any>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [publications, setPublications] = useState<Publication[]>([])
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [lastOrderId, setLastOrderId] = useState('')
  const [mpesaMessage, setMpesaMessage] = useState('')

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    organisation: '',
    title: '',
    aum: '',
    investmentFocus: '',
  })

  // Market intelligence data from Knight Frank 2025
  const marketSnapshots: MarketSnapshot[] = [
    {
      region: "Nairobi Prime Residential",
      metric: "Price Growth 2024",
      value: "+8.3%",
      trend: "Top 12 Globally",
      source: "Knight Frank Wealth Report 2025"
    },
    {
      region: "Family Office Allocation",
      metric: "Direct Real Estate",
      value: "68%",
      trend: ">$100M AUM",
      source: "Knight Frank 2025"
    },
    {
      region: "African UHNWI Population",
      metric: ">$100M Net Worth",
      value: "1,746",
      trend: "By 2028",
      source: "Knight Frank Wealth Sizing Model"
    },
    {
      region: "Top Investment Challenge",
      metric: "Reliable Partners",
      value: "23%",
      trend: "Primary Concern",
      source: "Knight Frank Family Office Survey"
    }
  ]

  // Strategic insights from Deloitte and McKinsey
  const institutionalInsights = [
    {
      title: "The Trust Imperative",
      source: "Knight Frank Wealth Report 2025",
      stat: "23%",
      description: "of family offices cite identifying reliable partners or operators as their top challenge in real estate investment—surpassing tax regimes (20%) and regulatory barriers (17%). Murivest addresses this through transparent governance and co-investment structures.",
      implication: "Partner selection due diligence is the critical success factor in African real estate."
    },
    {
      title: "Direct Real Estate Dominance",
      source: "Knight Frank Family Office Analysis",
      stat: "68%",
      description: "of family offices with AUM exceeding $250 million allocate over $100 million to direct real estate. Solo direct investment represents 34% of channels, followed by funds (19%) and joint ventures (13%).",
      implication: "UHNWI prefer direct control and governance oversight over pooled vehicles."
    },
    {
      title: "Technology Adoption Reality",
      source: "Deloitte Family Office Trends 2025",
      stat: "33%",
      description: "of family offices used AI by 2025 (up from 12% in 2024), yet 69% expect AI deployment for financial reporting within five years. The priority is simplicity and outcome-focus, not technological sophistication.",
      implication: "Investor portals must prioritize clarity and efficiency over feature complexity."
    },
    {
      title: "Nairobi's Global Position",
      source: "Knight Frank Prime Residential Index",
      stat: "+8.3%",
      description: "Nairobi prime residential price growth in 2024 ranks 12th globally, ahead of Miami (+3.8%), London (-1%), and New York (-0.3%). This validates the structural demand from regional wealth concentration.",
      implication: "Kenya's capital offers defensive characteristics amid global volatility."
    }
  ]

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const incomingMode = params.get('mode')
    if (incomingMode === 'register' || incomingMode === 'login') {
      setMode(incomingMode)
    }
  }, [])

  useEffect(() => {
    let mounted = true

    async function init() {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!mounted) return

      setAuthUser(user ?? null)

      if (user) {
        await loadPortal(user.id)
      }

      setLoading(false)
    }

    init()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const user = session?.user ?? null
      setAuthUser(user)

      if (user) {
        await loadPortal(user.id)
      } else {
        setProfile(null)
        setPublications([])
      }
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [supabase])

  async function loadPortal(userId: string) {
    const [{ data: profileData }, { data: publicationData }] = await Promise.all([
      supabase.from('profiles').select('*').eq('id', userId).maybeSingle(),
      supabase
        .from('publications')
        .select('id,title,summary,category,fliphtml_url,file_url,published_at,access_level')
        .eq('is_portal_visible', true)
        .order('created_at', { ascending: false }),
    ])

    setProfile((profileData as Profile) ?? null)
    setPublications((publicationData as Publication[]) ?? [])
  }

  function updateField(name: string, value: string) {
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    setMessage('')

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/investor-portal`,
        data: {
          full_name: form.fullName,
        },
      },
    })

    if (error) {
      setError(error.message)
      setSubmitting(false)
      return
    }

    const { data: userData } = await supabase.auth.getUser()
    const user = userData.user

    if (user) {
      await supabase.from('profiles').upsert({
        id: user.id,
        full_name: form.fullName,
        phone: form.phone,
        organisation: form.organisation,
        title: form.title,
        aum: form.aum,
        investment_focus: form.investmentFocus,
        investor_status: 'registered',
      })
    }

    setMessage('Registration submitted. Please verify your email to access confidential materials.')
    setSubmitting(false)
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    setMessage('')

    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    })

    if (error) {
      setError(error.message)
      setSubmitting(false)
      return
    }

    setMessage('Authentication successful. Welcome to the Murivest Investor Portal.')
    setSubmitting(false)
  }

  async function handleLogout() {
    await supabase.auth.signOut()
  }

  async function requestDigitalBrief() {
    setError('')
    setMessage('')

    const res = await fetch('/api/investor-brief-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderType: 'digital' }),
    })

    const json: BriefOrderResponse = await res.json()

    if (!res.ok) {
      setError(json.error || 'Request failed.')
      return
    }

    setMessage(json.nextStep || 'Digital brief request created. Check your dashboard for delivery.')
    if (json.orderId) setLastOrderId(json.orderId)
  }

  async function requestHardCopy() {
    setError('')
    setMessage('')

    const res = await fetch('/api/investor-brief-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderType: 'hard' }),
    })

    const json: BriefOrderResponse = await res.json()

    if (!res.ok) {
      setError(json.error || 'Request failed.')
      return
    }

    setMessage(json.nextStep || 'Hard-copy order created. M-Pesa payment instructions sent.')
    if (json.orderId) setLastOrderId(json.orderId)
  }

  async function submitPaymentConfirmation(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setMessage('')

    if (!lastOrderId) {
      setError('Please create a hard-copy order first.')
      return
    }

    const res = await fetch('/api/mpesa-confirmation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId: lastOrderId,
        mpesaMessage,
      }),
    })

    const json: PaymentResponse = await res.json()

    if (!res.ok) {
      setError(json.error || 'Payment confirmation failed.')
      return
    }

    setMessage('Payment confirmation submitted. Order processing initiated.')
    setMpesaMessage('')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1B4332] text-[#FAF9F6] flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-12 w-12 text-[#B8956B] mx-auto mb-4 animate-pulse" />
          <p className="text-sm uppercase tracking-[0.2em] text-[#B8956B]">Authenticating...</p>
        </div>
      </div>
    )
  }

  if (!authUser) {
    return (
      <div className="min-h-screen bg-[#1B4332] flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#B8956B_1px,_transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="w-full max-w-2xl bg-[#FAF9F6] rounded-sm shadow-2xl relative z-10 overflow-hidden">
          {/* Header */}
          <div className="bg-[#1B4332] px-8 py-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Shield className="h-10 w-10 text-[#B8956B]" />
                <div>
                  <h1 className="font-serif text-3xl text-white">Murivest</h1>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B]/80">Private Investor Portal</p>
                </div>
              </div>
              <span className="text-[10px] tracking-[0.2em] text-[#B8956B]/70 uppercase border border-[#B8956B]/30 px-3 py-1">
                Institutional Access
              </span>
            </div>
            <p className="text-sm text-[#FAF9F6]/70 leading-relaxed max-w-md">
              Secure access to proprietary research, off-market opportunities, and portfolio analytics for verified investors and family offices.
            </p>
          </div>

          {/* Mode Toggle */}
          <div className="flex border-b border-[#1B4332]/10">
            <button
              onClick={() => setMode('login')}
              className={`flex-1 py-4 text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                mode === 'login'
                  ? 'bg-[#B8956B] text-[#1B4332] font-medium'
                  : 'bg-transparent text-[#1B4332]/60 hover:bg-[#1B4332]/5'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode('register')}
              className={`flex-1 py-4 text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                mode === 'register'
                  ? 'bg-[#B8956B] text-[#1B4332] font-medium'
                  : 'bg-transparent text-[#1B4332]/60 hover:bg-[#1B4332]/5'
              }`}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <div className="p-8 md:p-10">
            <form onSubmit={mode === 'login' ? handleLogin : handleRegister} className="space-y-5">
              {mode === 'register' && (
                <div className="space-y-5 animate-in fade-in duration-500">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/60 mb-2">Full Name</label>
                      <input
                        className="w-full bg-[#FAF9F6] border border-[#1B4332]/20 text-[#1B4332] px-4 py-3 text-sm focus:border-[#B8956B] focus:outline-none transition-colors"
                        placeholder="Dr. James Morrison"
                        value={form.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/60 mb-2">Title</label>
                      <input
                        className="w-full bg-[#FAF9F6] border border-[#1B4332]/20 text-[#1B4332] px-4 py-3 text-sm focus:border-[#B8956B] focus:outline-none transition-colors"
                        placeholder="Managing Director"
                        value={form.title}
                        onChange={(e) => updateField('title', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/60 mb-2">Organisation</label>
                      <input
                        className="w-full bg-[#FAF9F6] border border-[#1B4332]/20 text-[#1B4332] px-4 py-3 text-sm focus:border-[#B8956B] focus:outline-none transition-colors"
                        placeholder="Morrison Family Office"
                        value={form.organisation}
                        onChange={(e) => updateField('organisation', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/60 mb-2">AUM Range</label>
                      <select
                        className="w-full bg-[#FAF9F6] border border-[#1B4332]/20 text-[#1B4332] px-4 py-3 text-sm focus:border-[#B8956B] focus:outline-none transition-colors"
                        value={form.aum}
                        onChange={(e) => updateField('aum', e.target.value)}
                      >
                        <option value="">Select Range</option>
                        <option value="<$10M">Under $10 Million</option>
                        <option value="$10M-$50M">$10 Million - $50 Million</option>
                        <option value="$50M-$100M">$50 Million - $100 Million</option>
                        <option value="$100M-$250M">$100 Million - $250 Million</option>
                        <option value=">$250M">Over $250 Million</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/60 mb-2">Phone</label>
                      <input
                        className="w-full bg-[#FAF9F6] border border-[#1B4332]/20 text-[#1B4332] px-4 py-3 text-sm focus:border-[#B8956B] focus:outline-none transition-colors"
                        placeholder="+254 712 345 678"
                        value={form.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/60 mb-2">Investment Focus</label>
                      <select
                        className="w-full bg-[#FAF9F6] border border-[#1B4332]/20 text-[#1B4332] px-4 py-3 text-sm focus:border-[#B8956B] focus:outline-none transition-colors"
                        value={form.investmentFocus}
                        onChange={(e) => updateField('investmentFocus', e.target.value)}
                      >
                        <option value="">Select Sector</option>
                        <option value="Commercial Office">Commercial Office</option>
                        <option value="Industrial/Logistics">Industrial & Logistics</option>
                        <option value="Residential">Residential & Living Sectors</option>
                        <option value="Hospitality">Hospitality & Tourism</option>
                        <option value="Mixed-Use">Mixed-Use Developments</option>
                        <option value="Land">Land & Development</option>
                        <option value="Diversified">Diversified Portfolio</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <div className={mode === 'register' ? '' : 'pt-4'}>
                <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/60 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-[#FAF9F6] border border-[#1B4332]/20 text-[#1B4332] px-4 py-3 text-sm focus:border-[#B8956B] focus:outline-none transition-colors"
                  placeholder="james@morrisonfamilyoffice.com"
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/60 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="w-full bg-[#FAF9F6] border border-[#1B4332]/20 text-[#1B4332] px-4 py-3 pr-12 text-sm focus:border-[#B8956B] focus:outline-none transition-colors"
                    placeholder="••••••••••••"
                    value={form.password}
                    onChange={(e) => updateField('password', e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1B4332]/40 hover:text-[#B8956B] transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700 text-sm">
                  {error}
                </div>
              )}
              
              {message && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 text-green-700 text-sm">
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#1B4332] text-[#FAF9F6] py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#2D5A47] transition-all duration-300 flex items-center justify-center group"
              >
                {submitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    {mode === 'login' ? 'Access Portal' : 'Submit Application'}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {mode === 'login' && (
                <p className="text-center text-xs text-[#1B4332]/50">
                  Forgot credentials? Contact <a href="mailto:investments@murivest.co.ke" className="text-[#B8956B] hover:underline">investments@murivest.co.ke</a>
                </p>
              )}
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-[#1B4332]/10">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-light text-[#B8956B]">256-bit</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#1B4332]/50">Encryption</div>
                </div>
                <div>
                  <div className="text-lg font-light text-[#B8956B]">SOC 2</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#1B4332]/50">Compliant</div>
                </div>
                <div>
                  <div className="text-lg font-light text-[#B8956B]">GDPR</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#1B4332]/50">Aligned</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-16">
      {/* Welcome Hero */}
      <section className="relative bg-[#1B4332] text-[#FAF9F6] rounded-lg overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
        <div className="relative p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-[#B8956B]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B]">
                  {profile?.investor_status === 'premium' ? 'Premium Access' : 'Verified Investor'}
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl mb-2">
                Welcome{profile?.full_name ? `, ${profile.full_name.split(' ')[0]}` : ''}
              </h2>
              <p className="text-[#FAF9F6]/70 max-w-2xl leading-relaxed">
                Access proprietary market intelligence, off-market opportunities, and institutional-grade analytics. 
                According to Knight Frank 2025, 68% of family offices with AUM exceeding $250M allocate over $100M to direct real estate—positioning you within a discerning global cohort.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#B8956B]/20 border border-[#B8956B]/30 text-[11px] uppercase tracking-[0.15em] text-[#B8956B]">
                Status: {profile?.investor_status || 'registered'}
              </span>
              <span className="px-4 py-2 bg-white/10 border border-white/20 text-[11px] uppercase tracking-[0.15em] text-white/80">
                {profile?.organisation || 'Individual Investor'}
              </span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[#B8956B]/20">
            {marketSnapshots.map((snapshot, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-light text-[#B8956B] mb-1">{snapshot.value}</div>
                <div className="text-xs text-white/80 mb-1">{snapshot.metric}</div>
                <div className="text-[10px] text-white/50 uppercase tracking-wider">{snapshot.region}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Insights */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-serif text-2xl text-[#1B4332] mb-1">Institutional Intelligence</h3>
            <p className="text-sm text-[#1B4332]/60">Synthesized from Knight Frank, Deloitte, and McKinsey research</p>
          </div>
          <Link href="/research" className="text-[11px] uppercase tracking-[0.15em] text-[#B8956B] hover:text-[#1B4332] transition-colors flex items-center gap-1">
            View All Research <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {institutionalInsights.map((insight, index) => (
            <div key={index} className="bg-white border border-[#1B4332]/10 p-6 hover:border-[#B8956B]/30 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#B8956B] block mb-1">{insight.source}</span>
                  <h4 className="text-lg font-medium text-[#1B4332] group-hover:text-[#B8956B] transition-colors">{insight.title}</h4>
                </div>
                <div className="text-3xl font-light text-[#B8956B]/20 group-hover:text-[#B8956B]/40 transition-colors">{insight.stat}</div>
              </div>
              <p className="text-sm text-[#2C3E35]/80 leading-relaxed mb-4">{insight.description}</p>
              <div className="pt-4 border-t border-[#1B4332]/5">
                <p className="text-xs text-[#1B4332]/60 italic">
                  <span className="font-medium text-[#B8956B]">Strategic Implication:</span> {insight.implication}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Action Cards */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border border-[#B8956B]/20 p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8956B]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />
          <TrendingUp className="h-8 w-8 text-[#B8956B] mb-4 relative z-10" />
          <h3 className="font-serif text-xl text-[#1B4332] mb-2 relative z-10">Portfolio Analytics</h3>
          <p className="text-sm text-[#1B4332]/70 mb-4 relative z-10">
            Track allocations across direct real estate, indirect exposures, and alternative investments with benchmark comparisons.
          </p>
          <Link href="/investor-portal/dashboard" className="inline-flex items-center text-[11px] uppercase tracking-[0.15em] text-[#B8956B] hover:text-[#1B4332] transition-colors relative z-10">
            View Dashboard <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="bg-white border border-[#B8956B]/20 p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8956B]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />
          <Lock className="h-8 w-8 text-[#B8956B] mb-4 relative z-10" />
          <h3 className="font-serif text-xl text-[#1B4332] mb-2 relative z-10">Off-Market Access</h3>
          <p className="text-sm text-[#1B4332]/70 mb-4 relative z-10">
            Exclusive opportunities not listed publicly. Direct investment and joint venture structures for qualified investors.
          </p>
          <Link href="/investor-portal/off-market" className="inline-flex items-center text-[11px] uppercase tracking-[0.15em] text-[#B8956B] hover:text-[#1B4332] transition-colors relative z-10">
            View Opportunities <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="bg-white border border-[#B8956B]/20 p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8956B]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />
          <FileText className="h-8 w-8 text-[#B8956B] mb-4 relative z-10" />
          <h3 className="font-serif text-xl text-[#1B4332] mb-2 relative z-10">Investment Briefs</h3>
          <p className="text-sm text-[#1B4332]/70 mb-4 relative z-10">
            Request detailed memoranda on specific assets or markets. Digital delivery or hard-copy with M-Pesa payment integration.
          </p>
          <Link href="/investor-portal/briefs" className="inline-flex items-center text-[11px] uppercase tracking-[0.15em] text-[#B8956B] hover:text-[#1B4332] transition-colors relative z-10">
            Request Brief <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Brief Request & Payment Section */}
      <section className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white border border-[#1B4332]/10 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="h-6 w-6 text-[#B8956B]" />
            <div>
              <h3 className="font-serif text-2xl text-[#1B4332]">Request Investment Brief</h3>
              <p className="text-xs text-[#1B4332]/60">Detailed analysis of specific opportunities</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <p className="text-sm text-[#2C3E35]/80 leading-relaxed">
              Our investment briefs provide comprehensive due diligence packages including market analysis, 
              financial projections, legal structure review, and ESG compliance assessment. Available in 
              digital format (instant delivery) or premium hard-copy with presentation case.
            </p>
            
            <div className="bg-[#1B4332]/5 p-4 rounded-sm">
              <h4 className="text-xs uppercase tracking-wider text-[#B8956B] mb-2">Brief Contents</h4>
              <ul className="text-sm text-[#1B4332]/70 space-y-1">
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#B8956B]" /> Executive Summary & Investment Thesis</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#B8956B]" /> Market & Competitive Analysis</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#B8956B]" /> Financial Model & Sensitivity Analysis</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#B8956B]" /> Legal Structure & Regulatory Review</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#B8956B]" /> ESG Compliance & Impact Assessment</li>
              </ul>
            </div>
          </div>

          {message && (
            <div className="mb-4 bg-green-50 border-l-4 border-green-500 p-4 text-green-700 text-sm">
              {message}
            </div>
          )}
          
          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 text-red-700 text-sm">
              {error}
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              onClick={requestDigitalBrief}
              className="flex-1 bg-[#1B4332] text-white px-6 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#2D5A47] transition-colors flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" />
              Digital Brief (Free)
            </button>
            <button
              onClick={requestHardCopy}
              className="flex-1 border-2 border-[#B8956B] text-[#B8956B] px-6 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#B8956B] hover:text-[#1B4332] transition-all flex items-center justify-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Hard Copy ($150)
            </button>
          </div>

          {lastOrderId && (
            <div className="mt-4 p-3 bg-[#B8956B]/10 text-xs text-[#1B4332]/70">
              <span className="font-medium">Active Order ID:</span> {lastOrderId}
            </div>
          )}
        </div>

        <div className="bg-white border border-[#1B4332]/10 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="h-6 w-6 text-[#B8956B]" />
            <div>
              <h3 className="font-serif text-2xl text-[#1B4332]">M-Pesa Confirmation</h3>
              <p className="text-xs text-[#1B4332]/60">Submit payment verification for hard-copy orders</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <p className="text-sm text-[#2C3E35]/80 leading-relaxed">
              For hard-copy brief orders, please complete M-Pesa payment to Paybill 522522, 
              Account Number: 1234567890. Paste the full confirmation message below to 
              trigger order processing and delivery coordination.
            </p>
            
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-sm">
              <p className="text-xs text-amber-800">
                <span className="font-medium">Payment Instructions:</span><br />
                Go to M-Pesa → Lipa na M-Pesa → Enter Paybill 522522 → Account 1234567890 → Amount $150 USD (converted to KES)
              </p>
            </div>
          </div>

          <form onSubmit={submitPaymentConfirmation} className="space-y-4">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/60 mb-2">
                Paste M-Pesa Confirmation Message
              </label>
              <textarea
                value={mpesaMessage}
                onChange={(e) => setMpesaMessage(e.target.value)}
                placeholder="Transaction ID: MPESA1234567890. Confirmed. You have received KES 19,500 from John Doe. Date: 23/03/2026..."
                className="w-full min-h-[120px] bg-[#FAF9F6] border border-[#1B4332]/20 px-4 py-3 text-sm focus:border-[#B8956B] focus:outline-none transition-colors resize-none"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#B8956B] text-[#1B4332] px-6 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#9A7B5A] transition-colors flex items-center justify-center gap-2"
            >
              <Clock className="h-4 w-4" />
              Submit Confirmation
            </button>
          </form>
        </div>
      </section>

      {/* Publications Library */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-serif text-2xl text-[#1B4332] mb-1">Research Library</h3>
            <p className="text-sm text-[#1B4332]/60">Knight Frank, McKinsey, and proprietary market intelligence</p>
          </div>
          <Link href="/investor-portal/publications" className="text-[11px] uppercase tracking-[0.15em] text-[#B8956B] hover:text-[#1B4332] transition-colors flex items-center gap-1">
            View All <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.slice(0, 6).map((item) => (
            <div key={item.id} className="bg-white border border-[#1B4332]/10 hover:border-[#B8956B]/30 transition-all duration-300 group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#B8956B]">
                    {item.category}
                  </span>
                  {item.access_level === 'premium' && (
                    <Lock className="h-3 w-3 text-[#B8956B]" />
                  )}
                </div>
                
                <h4 className="font-serif text-xl text-[#1B4332] mb-3 group-hover:text-[#B8956B] transition-colors leading-tight">
                  {item.title}
                </h4>
                
                <p className="text-sm text-[#1B4332]/70 mb-4 line-clamp-3">
                  {item.summary}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#1B4332]/5">
                  <span className="text-[10px] text-[#1B4332]/40">
                    {new Date(item.published_at).toLocaleDateString('en-GB', { 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                  </span>
                  
                  <div className="flex gap-2">
                    {item.fliphtml_url && (
                      <a
                        href={item.fliphtml_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 bg-[#1B4332] text-white px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] hover:bg-[#2D5A47] transition-colors"
                      >
                        <Globe className="h-3 w-3" />
                        View
                      </a>
                    )}
                    {item.file_url && (
                      <a
                        href={item.file_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 border border-[#1B4332]/20 text-[#1B4332] px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] hover:border-[#B8956B] hover:text-[#B8956B] transition-colors"
                      >
                        <Download className="h-3 w-3" />
                        PDF
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1B4332] text-[#FAF9F6] p-8 lg:p-12 rounded-lg text-center">
        <h3 className="font-serif text-3xl mb-4">Ready to Discuss Allocation?</h3>
        <p className="text-[#FAF9F6]/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Murivest advises family offices and institutional investors on African real estate strategy. 
          Our team combines local market expertise with global best practices to structure investments 
          that align with your risk, return, and impact objectives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <button className="bg-[#B8956B] text-[#1B4332] px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#9A7B5A] transition-colors flex items-center justify-center gap-2">
              <Users className="h-4 w-4" />
              Schedule Consultation
            </button>
          </Link>
          <Link href="/investor-portal/off-market">
            <button className="border-2 border-[#B8956B] text-[#B8956B] px-8 py-4 text-sm uppercase tracking-[0.15em] hover:bg-[#B8956B] hover:text-[#1B4332] transition-all flex items-center justify-center gap-2">
              <BarChart3 className="h-4 w-4" />
              View Opportunities
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}