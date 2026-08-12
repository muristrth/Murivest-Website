// page.tsx - Investor Portal Main Page (Mobile-First Responsive)
'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
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
  Users,
  X,
  Menu,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

import InvestorBriefAccess from '@/components/InvestorBriefAccess'

type Mode = 'login' | 'register'

type Profile = {
  id: string
  email: string
  full_name: string | null
  title: string | null
  organisation: string | null
  phone: string | null
  aum: string | null
  investment_focus: string | null
  investor_status: 'registered' | 'verified' | 'admin' | 'premium'
  last_login?: string
  portfolio_value?: number
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
  
  // Mobile UI states
  const [expandedInsight, setExpandedInsight] = useState<number | null>(null)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

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

  // Market intelligence data
  const marketSnapshots: MarketSnapshot[] = [
    {
      region: "Nairobi Prime",
      metric: "Price Growth",
      value: "+8.3%",
      trend: "Top 12 Globally",
      source: "Knight Frank 2025"
    },
    {
      region: "Family Office",
      metric: "Direct RE Allocation",
      value: "68%",
      trend: ">$100M AUM",
      source: "Knight Frank 2025"
    },
    {
      region: "African UHNWI",
      metric: ">$100M Net Worth",
      value: "1,746",
      trend: "By 2028",
      source: "Knight Frank"
    },
    {
      region: "Top Challenge",
      metric: "Reliable Partners",
      value: "23%",
      trend: "Primary Concern",
      source: "KF Survey"
    }
  ]

  const institutionalInsights = [
    {
      title: "The Trust Imperative",
      source: "Knight Frank 2025",
      stat: "23%",
      description: "of family offices cite identifying reliable partners as their top challenge—surpassing tax regimes and regulatory barriers.",
      implication: "Partner selection is the critical success factor in African real estate."
    },
    {
      title: "Direct Real Estate Dominance",
      source: "Knight Frank Analysis",
      stat: "68%",
      description: "of family offices with AUM exceeding $250M allocate over $100M to direct real estate investments.",
      implication: "UHNWI prefer direct control and governance oversight."
    },
    {
      title: "Technology Adoption",
      source: "Deloitte 2025",
      stat: "33%",
      description: "of family offices used AI by 2025, with 69% expecting AI deployment for financial reporting within five years.",
      implication: "Investor portals must prioritize clarity over complexity."
    },
    {
      title: "Nairobi's Global Position",
      source: "Knight Frank Index",
      stat: "+8.3%",
      description: "Nairobi prime residential price growth ranks 12th globally, ahead of Miami, London, and New York.",
      implication: "Kenya's capital offers defensive characteristics."
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
      const { data: { user } } = await supabase.auth.getUser()
      if (!mounted) return
      setAuthUser(user ?? null)
      if (user) await loadPortal(user.id)
      setLoading(false)
    }

    init()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const user = session?.user ?? null
      setAuthUser(user)
      if (user) await loadPortal(user.id)
      else {
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
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/portal`,
        data: { full_name: form.fullName },
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

    setMessage('Registration submitted. Please verify your email.')
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

    setMessage('Authentication successful.')
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
    const json = await res.json()
    if (!res.ok) {
      setError(json.error || 'Request failed.')
      return
    }
    setMessage(json.nextStep || 'Digital brief request created.')
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
    const json = await res.json()
    if (!res.ok) {
      setError(json.error || 'Request failed.')
      return
    }
    setMessage(json.nextStep || 'Hard-copy order created.')
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
      body: JSON.stringify({ orderId: lastOrderId, mpesaMessage }),
    })
    const json = await res.json()
    if (!res.ok) {
      setError(json.error || 'Payment confirmation failed.')
      return
    }
    setMessage('Payment confirmation submitted.')
    setMpesaMessage('')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1B4332] text-[#FAF9F6] flex items-center justify-center p-4">
        <div className="text-center">
          <Shield className="h-12 w-12 text-[#B8956B] mx-auto mb-4 animate-pulse" />
          <p className="text-sm uppercase tracking-[0.2em] text-[#B8956B]">Authenticating...</p>
        </div>
      </div>
    )
  }

  if (!authUser) {
    return (
      <div className="min-h-screen bg-[#1B4332] flex items-center justify-center p-4 sm:p-6 lg:p-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#B8956B_1px,_transparent_1px)] bg-[length:32px_32px] sm:bg-[length:40px_40px]" />
        </div>

        <div className="w-full max-w-md lg:max-w-2xl bg-[#FAF9F6] rounded-lg shadow-2xl relative z-10 overflow-hidden">
          {/* Header */}
          <div className="bg-[#1B4332] px-6 py-6 lg:px-8 lg:py-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#B8956B] flex items-center justify-center">
                  <Shield className="h-5 w-5 text-[#B8956B]" />
                </div>
                <div>
                  <h1 className="font-serif text-2xl lg:text-3xl text-white">Murivest</h1>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B]/80">Private Investor Portal</p>
                </div>
              </div>
              <span className="text-[10px] tracking-[0.2em] text-[#B8956B]/70 uppercase border border-[#B8956B]/30 px-3 py-1 hidden sm:block">
                Institutional
              </span>
            </div>
            <p className="text-sm text-[#FAF9F6]/70 leading-relaxed max-w-md">
              Secure access to proprietary research and off-market opportunities for verified investors.
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
          <div className="p-6 lg:p-10">
            <form onSubmit={mode === 'login' ? handleLogin : handleRegister} className="space-y-4 lg:space-y-5">
              {mode === 'register' && (
                <div className="space-y-4 animate-in fade-in duration-500">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/60 mb-2">Full Name</label>
                      <input
                        className="w-full bg-[#FAF9F6] border border-[#1B4332]/20 text-[#1B4332] px-4 py-3 text-sm focus:border-[#B8956B] focus:outline-none transition-colors rounded-sm"
                        placeholder="Dr. James Morrison"
                        value={form.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/60 mb-2">Title</label>
                      <input
                        className="w-full bg-[#FAF9F6] border border-[#1B4332]/20 text-[#1B4332] px-4 py-3 text-sm focus:border-[#B8956B] focus:outline-none transition-colors rounded-sm"
                        placeholder="Managing Director"
                        value={form.title}
                        onChange={(e) => updateField('title', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/60 mb-2">Organisation</label>
                      <input
                        className="w-full bg-[#FAF9F6] border border-[#1B4332]/20 text-[#1B4332] px-4 py-3 text-sm focus:border-[#B8956B] focus:outline-none transition-colors rounded-sm"
                        placeholder="Morrison Family Office"
                        value={form.organisation}
                        onChange={(e) => updateField('organisation', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/60 mb-2">AUM Range</label>
                      <select
                        className="w-full bg-[#FAF9F6] border border-[#1B4332]/20 text-[#1B4332] px-4 py-3 text-sm focus:border-[#B8956B] focus:outline-none transition-colors rounded-sm"
                        value={form.aum}
                        onChange={(e) => updateField('aum', e.target.value)}
                      >
                        <option value="">Select Range</option>
                        <option value="<$10M">Under $10M</option>
                        <option value="$10M-$50M">$10M - $50M</option>
                        <option value="$50M-$100M">$50M - $100M</option>
                        <option value="$100M-$250M">$100M - $250M</option>
                        <option value=">$250M">Over $250M</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <div className={mode === 'register' ? '' : 'pt-2'}>
                <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/60 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-[#FAF9F6] border border-[#1B4332]/20 text-[#1B4332] px-4 py-3 text-sm focus:border-[#B8956B] focus:outline-none transition-colors rounded-sm"
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
                    className="w-full bg-[#FAF9F6] border border-[#1B4332]/20 text-[#1B4332] px-4 py-3 pr-12 text-sm focus:border-[#B8956B] focus:outline-none transition-colors rounded-sm"
                    placeholder="••••••••••••"
                    value={form.password}
                    onChange={(e) => updateField('password', e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1B4332]/40 hover:text-[#B8956B] transition-colors p-1"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700 text-sm rounded-r-sm">
                  {error}
                </div>
              )}
              
              {message && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 text-green-700 text-sm rounded-r-sm">
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#1B4332] text-[#FAF9F6] py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#2D5A47] transition-all duration-300 flex items-center justify-center group rounded-sm"
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
                  Forgot credentials? Contact <a href="mailto:info@murivest.co.ke" className="text-[#B8956B] hover:underline">info@murivest.co.ke</a>
                </p>
              )}
            </form>

            {/* Trust Indicators - Responsive Grid */}
            <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-[#1B4332]/10">
              <div className="grid grid-cols-3 gap-2 lg:gap-4 text-center">
                <div className="p-2 lg:p-3">
                  <div className="text-base lg:text-lg font-light text-[#B8956B]">256-bit</div>
                  <div className="text-[9px] lg:text-[10px] uppercase tracking-wider text-[#1B4332]/50">Encryption</div>
                </div>
                <div className="p-2 lg:p-3">
                  <div className="text-base lg:text-lg font-light text-[#B8956B]">SOC 2</div>
                  <div className="text-[9px] lg:text-[10px] uppercase tracking-wider text-[#1B4332]/50">Compliant</div>
                </div>
                <div className="p-2 lg:p-3">
                  <div className="text-base lg:text-lg font-light text-[#B8956B]">GDPR</div>
                  <div className="text-[9px] lg:text-[10px] uppercase tracking-wider text-[#1B4332]/50">Aligned</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8 lg:space-y-16">
      {/* Welcome Hero - Responsive padding and text sizes */}
      <section className="relative bg-[#1B4332] text-[#FAF9F6] rounded-xl overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/image.webp')] bg-cover bg-center" />
        </div>
        <div className="relative p-6 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3 lg:mb-4">
                <Award className="h-4 w-4 lg:h-5 lg:w-5 text-[#B8956B]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B]">
                  {profile?.investor_status === 'premium' ? 'Premium Access' : 'Verified Investor'}
                </span>
              </div>
              <h2 className="font-serif text-2xl lg:text-4xl mb-2">
                Welcome{profile?.full_name ? `, ${profile.full_name.split(' ')[0]}` : ''}
              </h2>
              <p className="text-sm lg:text-base text-[#FAF9F6]/70 max-w-2xl leading-relaxed">
                Access proprietary market intelligence and institutional-grade analytics. 
                68% of family offices with AUM exceeding $250M allocate over $100M to direct real estate.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 lg:gap-3">
              <span className="px-3 py-2 lg:px-4 lg:py-2 bg-[#B8956B]/20 border border-[#B8956B]/30 text-[10px] lg:text-[11px] uppercase tracking-[0.15em] text-[#B8956B] rounded-sm">
                Status: {profile?.investor_status || 'registered'}
              </span>
              <span className="px-3 py-2 lg:px-4 lg:py-2 bg-white/10 border border-white/20 text-[10px] lg:text-[11px] uppercase tracking-[0.15em] text-white/80 rounded-sm hidden sm:inline-block">
                {profile?.organisation || 'Individual'}
              </span>
            </div>
          </div>

          {/* Quick Stats - Horizontal scroll on mobile, grid on desktop */}
          <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-[#B8956B]/20">
            <div className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto pb-2 lg:pb-0 snap-x">
              {marketSnapshots.map((snapshot, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-36 lg:w-auto snap-start text-center lg:text-left p-3 lg:p-0 bg-[#1B4332]/30 lg:bg-transparent rounded-lg lg:rounded-none"
                >
                  <div className="text-xl lg:text-3xl font-light text-[#B8956B] mb-1">{snapshot.value}</div>
                  <div className="text-xs lg:text-sm text-white/80 mb-1">{snapshot.metric}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-wider">{snapshot.region}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Insights - Progressive Disclosure on Mobile */}
      <section>
        <div className="flex items-center justify-between mb-4 lg:mb-8">
          <div>
            <h3 className="font-serif text-xl lg:text-2xl text-[#1B4332] mb-1">Institutional Intelligence</h3>
            <p className="text-xs lg:text-sm text-[#1B4332]/60">Knight Frank, Deloitte, and McKinsey research</p>
          </div>
          <Link href="/research" className="text-[10px] lg:text-[11px] uppercase tracking-[0.15em] text-[#B8956B] hover:text-[#1B4332] transition-colors flex items-center gap-1">
            <span className="hidden sm:inline">View All</span> <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
          {institutionalInsights.map((insight, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#1B4332]/10 rounded-lg lg:rounded-none p-4 lg:p-6 hover:border-[#B8956B]/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3 lg:mb-4">
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.15em] text-[#B8956B] block mb-1">{insight.source}</span>
                  <h4 className="text-base lg:text-lg font-medium text-[#1B4332] leading-tight">{insight.title}</h4>
                </div>
                <div className="text-2xl lg:text-3xl font-light text-[#B8956B]/20 ml-4">{insight.stat}</div>
              </div>
              
              {/* Mobile: Truncate description, Desktop: Full text */}
              <p className="text-sm text-[#2C3E35]/80 leading-relaxed mb-3 lg:mb-4 line-clamp-2 lg:line-clamp-none">
                {insight.description}
              </p>
              
              {/* Mobile: Expandable implication */}
              <div className="lg:hidden">
                <button
                  onClick={() => setExpandedInsight(expandedInsight === index ? null : index)}
                  className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#B8956B] w-full justify-between py-2 border-t border-[#1B4332]/5"
                >
                  <span>Strategic Implication</span>
                  {expandedInsight === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {expandedInsight === index && (
                  <p className="text-xs text-[#1B4332]/60 italic pt-2 pb-1 animate-in slide-in-from-top-2">
                    {insight.implication}
                  </p>
                )}
              </div>
              
              {/* Desktop: Always visible implication */}
              <div className="hidden lg:block pt-4 border-t border-[#1B4332]/5">
                <p className="text-xs text-[#1B4332]/60 italic">
                  <span className="font-medium text-[#B8956B]">Strategic Implication:</span> {insight.implication}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Action Cards - Responsive Grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {[
          {
            icon: BarChart3,
            title: "Portfolio Analytics",
            desc: "Track allocations across direct real estate and alternatives with benchmark comparisons.",
            link: "/portal/dashboard",
            cta: "View Dashboard"
          },
          {
            icon: Lock,
            title: "Off-Market Access",
            desc: "Exclusive opportunities not listed publicly. Direct investment and JV structures.",
            link: "/portal/off-market",
            cta: "View Opportunities"
          },
          {
            icon: FileText,
            title: "Investment Briefs",
            desc: "Request detailed memoranda. Digital delivery or hard-copy with M-Pesa integration.",
            link: "/portal/briefs",
            cta: "Request Brief"
          }
        ].map((card, index) => (
          <Link 
            key={index}
            href={card.link}
            className="group bg-white border border-[#B8956B]/20 p-4 lg:p-6 relative overflow-hidden hover:shadow-lg transition-all duration-300 rounded-lg lg:rounded-none"
          >
            <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-[#B8956B]/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150" />
            <card.icon className="h-6 w-6 lg:h-8 lg:w-8 text-[#B8956B] mb-3 lg:mb-4 relative z-10" />
            <h3 className="font-serif text-lg lg:text-xl text-[#1B4332] mb-2 relative z-10 group-hover:text-[#B8956B] transition-colors">{card.title}</h3>
            <p className="text-xs lg:text-sm text-[#1B4332]/70 mb-3 lg:mb-4 relative z-10 line-clamp-2 lg:line-clamp-none">{card.desc}</p>
            <span className="inline-flex items-center text-[10px] lg:text-[11px] uppercase tracking-[0.15em] text-[#B8956B] group-hover:text-[#1B4332] transition-colors relative z-10">
              {card.cta} <ArrowRight className="ml-2 h-3 w-3 lg:h-4 lg:w-4" />
            </span>
          </Link>
        ))}
      </section>

      {/* Investor Brief Access - Full Magazine Flow */}
      <section className="bg-white border border-[#1B4332]/10 rounded-lg lg:rounded-none p-4 lg:p-8">
        <div className="flex items-center gap-3 mb-6 lg:mb-8">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-[#B8956B]/10 flex items-center justify-center">
            <Briefcase className="h-5 w-5 lg:h-6 lg:w-6 text-[#B8956B]" />
          </div>
          <div>
            <h3 className="font-serif text-lg lg:text-2xl text-[#1B4332]">Nairobi Private Commercial Asset Brief</h3>
            <p className="text-[10px] lg:text-xs text-[#1B4332]/60">Institutional-grade market intelligence</p>
          </div>
        </div>
        
        <InvestorBriefAccess 
          userEmail={profile?.email || authUser?.email}
          userName={profile?.full_name || undefined}
          userPhone={profile?.phone || undefined}
          userOrganisation={profile?.organisation || undefined}
        />
      </section>

      {/* Publications Library - Horizontal Scroll on Mobile */}
      <section>
        <div className="flex items-center justify-between mb-4 lg:mb-8">
          <div>
            <h3 className="font-serif text-xl lg:text-2xl text-[#1B4332] mb-1">Research Library</h3>
            <p className="text-xs lg:text-sm text-[#1B4332]/60">Knight Frank, McKinsey, and proprietary intelligence</p>
          </div>
          <Link href="/portal/publications" className="text-[10px] lg:text-[11px] uppercase tracking-[0.15em] text-[#B8956B] hover:text-[#1B4332] transition-colors flex items-center gap-1">
            <span className="hidden sm:inline">View All</span> <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="lg:hidden flex gap-4 overflow-x-auto pb-4 snap-x -mx-4 px-4">
          {publications.slice(0, 4).map((item) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 w-72 snap-start bg-white border border-[#1B4332]/10 rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-[#B8956B]">{item.category}</span>
                  {item.access_level === 'premium' && <Lock className="h-3 w-3 text-[#B8956B]" />}
                </div>
                <h4 className="font-serif text-base text-[#1B4332] mb-2 line-clamp-2">{item.title}</h4>
                <p className="text-xs text-[#1B4332]/70 mb-3 line-clamp-2">{item.summary}</p>
                <div className="flex items-center justify-between pt-3 border-t border-[#1B4332]/5">
                  <span className="text-[9px] text-[#1B4332]/40">
                    {new Date(item.published_at).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
                  </span>
                  <div className="flex gap-2">
                    {item.fliphtml_url && (
                      <a href={item.fliphtml_url} target="_blank" rel="noreferrer" className="px-2 py-1 bg-[#1B4332] text-white text-[9px] uppercase tracking-wider rounded-sm">
                        View
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.slice(0, 6).map((item) => (
            <div key={item.id} className="bg-white border border-[#1B4332]/10 hover:border-[#B8956B]/30 transition-all duration-300 group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#B8956B]">{item.category}</span>
                  {item.access_level === 'premium' && <Lock className="h-3 w-3 text-[#B8956B]" />}
                </div>
                <h4 className="font-serif text-xl text-[#1B4332] mb-3 group-hover:text-[#B8956B] transition-colors leading-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-[#1B4332]/70 mb-4 line-clamp-3">{item.summary}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#1B4332]/5">
                  <span className="text-[10px] text-[#1B4332]/40">
                    {new Date(item.published_at).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
                  </span>
                  <div className="flex gap-2">
                    {item.fliphtml_url && (
                      <a href={item.fliphtml_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 bg-[#1B4332] text-white px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] hover:bg-[#2D5A47] transition-colors">
                        <Globe className="h-3 w-3" /> View
                      </a>
                    )}
                    {item.file_url && (
                      <a href={item.file_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 border border-[#1B4332]/20 text-[#1B4332] px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] hover:border-[#B8956B] hover:text-[#B8956B] transition-colors">
                        <Download className="h-3 w-3" /> PDF
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Responsive padding */}
      <section className="bg-[#1B4332] text-[#FAF9F6] p-6 lg:p-12 rounded-xl text-center">
        <h3 className="font-serif text-2xl lg:text-3xl mb-3 lg:mb-4">Ready to Discuss Allocation?</h3>
        <p className="text-sm lg:text-base text-[#FAF9F6]/70 max-w-2xl mx-auto mb-6 lg:mb-8 leading-relaxed">
          Murivest advises family offices and institutional investors on African real estate strategy.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
          <Link href="/contact">
            <button className="w-full sm:w-auto bg-[#B8956B] text-[#1B4332] px-6 lg:px-8 py-3 lg:py-4 text-xs lg:text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#9A7B5A] transition-colors flex items-center justify-center gap-2 rounded-sm">
              <Users className="h-4 w-4" />
              Schedule Consultation
            </button>
          </Link>
          <Link href="/portal/off-market">
            <button className="w-full sm:w-auto border-2 border-[#B8956B] text-[#B8956B] px-6 lg:px-8 py-3 lg:py-4 text-xs lg:text-sm uppercase tracking-[0.15em] hover:bg-[#B8956B] hover:text-[#1B4332] transition-all flex items-center justify-center gap-2 rounded-sm">
              <BarChart3 className="h-4 w-4" />
              View Opportunities
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}