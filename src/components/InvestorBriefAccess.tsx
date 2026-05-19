'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { 
  ChevronRight, 
  Mail,
  Book,
  Check,
  Copy,
  ArrowLeft,
  X,
  Lock
} from 'lucide-react'

const FLIPHTML5_URL = 'https://online.fliphtml5.com/murivest/yhhx/'
const COVER_IMAGE = '/brochure-asset-brief.webp'
const STORAGE_KEY = 'npcab_lounge_v2'
const SESSION_KEY = 'npcab_form_session'
const PAYBILL = '303030'
const ACCOUNT = '2048650433'
const AMOUNT = 'KES 2,000'

const C = {
  cream: '#F8F7F4',
  creamDark: '#F0EFE9',
  charcoal: '#2C2C2C',
  charcoalLight: '#4A4A4A',
  tobacco: '#8B7355',
  tobaccoDark: '#6B5A45',
  hairline: '#E5E2DC',
  white: '#FFFFFF',
}

interface FormState {
  fullName: string
  title: string
  organisation: string
  email: string
  phone: string
  aum: string
  investmentFocus: string
  copyType: 'digital' | 'hard'
  shippingAddress: string
  consent: boolean
}

type Stage = 'overview' | 'request' | 'payment' | 'success_digital' | 'success_hard'

const SESSION_TTL_MS = 30 * 60 * 1000

function saveSession(form: FormState, stage: Stage) {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify({
      form, stage,
      savedAt: Date.now(),
    }))
  } catch { /* silent */ }
}

function loadSession(): { form: FormState; stage: Stage } | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (Date.now() - parsed.savedAt > SESSION_TTL_MS) {
      localStorage.removeItem(SESSION_KEY)
      return null
    }
    return { form: parsed.form, stage: parsed.stage }
  } catch { return null; }
}

function clearSession() {
  try { localStorage.removeItem(SESSION_KEY); } catch { /* silent */ }
}

function scrollPanelTop() {
  setTimeout(() => {
    const panel = document.querySelector('.brief-panel')
    if (panel) {
      panel.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, 100)
}

function validatePaymentMessage(msg: string): string | null {
  const text = msg.trim()
  if (text.length < 10)
    return 'Please provide your complete confirmation details.'

  const hasMpesaCode = /[A-Z0-9]{10}/i.test(text)
  const hasAmount = /2[,.]?000|kes\s*2000|ksh\s*2000/i.test(text)

  if (!hasMpesaCode)
    return 'Could not detect a payment reference code.'
  if (!hasAmount)
    return 'Could not detect the expected amount (KES 2,000).'
  return null
}

interface InvestorBriefAccessProps {
  userEmail?: string
  userName?: string
  userPhone?: string
  userOrganisation?: string
}

export default function InvestorBriefAccess({ 
  userEmail, 
  userName, 
  userPhone, 
  userOrganisation 
}: InvestorBriefAccessProps) {
  const [stage, setStage] = useState<Stage>('overview')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [mpesaMsg, setMpesaMsg] = useState('')
  const [mpesaLoading, setMpesaLoading] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const [orderId, setOrderId] = useState<string>('')
  const [flipUrl, setFlipUrl] = useState<string>(FLIPHTML5_URL)

  const [form, setForm] = useState<FormState>({
    fullName: userName || '',
    title: '',
    organisation: userOrganisation || '',
    email: userEmail || '',
    phone: userPhone || '',
    aum: '',
    investmentFocus: '',
    copyType: 'digital',
    shippingAddress: '',
    consent: false,
  })

  // Restore session on mount
  useEffect(() => {
    const saved = loadSession()
    if (saved) {
      setForm(prev => ({
        ...prev,
        ...saved.form,
        fullName: saved.form.fullName || userName || prev.fullName,
        organisation: saved.form.organisation || userOrganisation || prev.organisation,
        email: saved.form.email || userEmail || prev.email,
        phone: saved.form.phone || userPhone || prev.phone,
      }))
      setStage(saved.stage)
      return
    }
    setForm(prev => ({
      ...prev,
      fullName: userName || prev.fullName,
      organisation: userOrganisation || prev.organisation,
      email: userEmail || prev.email,
      phone: userPhone || prev.phone,
    }))
  }, [])

  // Persist form + stage
  useEffect(() => {
    saveSession(form, stage)
  }, [form, stage])

  const canSubmit = !!(
    form.fullName.trim() &&
    form.organisation.trim() &&
    form.email.includes('@') &&
    form.aum &&
    form.consent &&
    (form.copyType === 'digital' || form.shippingAddress.trim())
  )

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      setTimeout(() => setCopied(null), 2000)
    } catch { /* silent */ }
  }

  const goToStage = useCallback((s: Stage) => {
    setStage(s)
    scrollPanelTop()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/investor-brief-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderType: form.copyType }),
      })
      
      const json = await res.json()
      
      if (!res.ok) {
        setError(json.error || 'Unable to process request.')
        setLoading(false)
        return
      }

      if (json.orderId) setOrderId(json.orderId)
      if (json.flipUrl) setFlipUrl(json.flipUrl)

      if (form.copyType === 'digital') {
        goToStage('success_digital')
        window.open(FLIPHTML5_URL, '_blank', 'noopener,noreferrer')
      } else {
        goToStage('payment')
      }
    } catch {
      setError('Unable to process request. Please contact your portfolio agent.')
    } finally {
      setLoading(false)
    }
  }

  const handleMpesaConfirm = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!mpesaMsg.trim() || !orderId) return

    const validationError = validatePaymentMessage(mpesaMsg)
    if (validationError) { setError(validationError); return; }

    setMpesaLoading(true)
    setError('')

    try {
      const res = await fetch('/api/mpesa-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, mpesaMessage: mpesaMsg }),
      })

      const json = await res.json()

      if (!res.ok) {
        setError(json.error || 'Confirmation failed.')
        setMpesaLoading(false)
        return
      }

      goToStage('success_hard')
    } catch {
      setError('Confirmation failed. Please contact your portfolio agent directly.')
    } finally {
      setMpesaLoading(false)
    }
  }

  // Sidebar Image Component
  const SidebarImage = () => (
    <div className="w-full lg:w-64 lg:flex-shrink-0">
      <div className="border border-[#E5E2DC] p-2 bg-white">
        <img 
          src={COVER_IMAGE} 
          alt="Nairobi Private Commercial Asset Brief" 
          className="w-full h-auto object-contain"
        />
        <div className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#8B7355]">
          <Lock className="h-3 w-3" />
          Restricted Access
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="mt-3 grid grid-cols-2 gap-px bg-[#E5E2DC] border border-[#E5E2DC]">
        {[
          { value: '12%', label: 'Peak Yields' },
          { value: '5.1%', label: 'CAGR' },
        ].map((s, i) => (
          <div key={i} className="bg-[#F8F7F4] p-2 text-center">
            <div className="text-base font-light text-[#2C2C2C]">{s.value}</div>
            <div className="text-[8px] uppercase tracking-wider text-[#8B7355]">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="brief-panel w-full overflow-y-auto">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        {/* Sidebar - Image on left for larger screens */}
        <div className="hidden lg:block">
          <SidebarImage />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Mobile Image - shown only on mobile */}
          <div className="lg:hidden mb-4">
            <div className="border border-[#E5E2DC] p-2 bg-white">
              <img 
                src={COVER_IMAGE} 
                alt="Nairobi Private Commercial Asset Brief" 
                className="w-full h-auto max-h-[150px] object-contain"
              />
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════════ */}
          {/* OVERVIEW STAGE */}
          {/* ════════════════════════════════════════════════════════════════════ */}
          {stage === 'overview' && (
            <div className="space-y-4">
              {/* Header */}
              <div>
                <div className="text-[9px] uppercase tracking-[0.25em] text-[#8B7355] mb-2">
                  Restricted Institutional Publication
                </div>
                <h2 className="font-serif text-xl lg:text-2xl text-[#2C2C2C] leading-tight">
                  Nairobi Private Commercial<br />Asset Brief
                </h2>
                <p className="text-xs text-[#4A4A4A] mt-2 leading-relaxed">
                  Independent intelligence for institutional capital allocators navigating East Africa's preeminent real estate market
                </p>
              </div>

              {/* Sidebar on Mobile for Stats */}
              <div className="lg:hidden grid grid-cols-2 gap-px bg-[#E5E2DC] border border-[#E5E2DC]">
                {[
                  { value: '12%', label: 'Peak Rental Yields' },
                  { value: 'KES 773B', label: 'Market Value 2025' },
                  { value: '5.1% CAGR', label: 'Projected Growth' },
                  { value: '90%', label: 'Industrial Occupancy' },
                ].map((s, i) => (
                  <div key={i} className="bg-[#F8F7F4] p-2 text-center">
                    <div className="text-sm font-light text-[#2C2C2C]">{s.value}</div>
                    <div className="text-[7px] uppercase tracking-wider text-[#8B7355]">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Quote - Desktop Only */}
              <div className="hidden lg:block border-l-2 border-[#8B7355] pl-4">
                <p className="font-serif italic text-sm text-[#2C2C2C] leading-relaxed">
                  "Nairobi remains East Africa's preeminent commercial real estate market..."
                </p>
                <div className="text-[10px] uppercase tracking-wider text-[#8B7355] mt-2">
                  — Knight Frank Kenya Research, 2025
                </div>
              </div>

              {/* Collection Contents - Summarized */}
              <div>
                <h3 className="font-serif text-base text-[#2C2C2C] mb-3 pb-2 border-b border-[#E5E2DC]">
                  Collection Highlights
                </h3>
                <div className="space-y-2">
                  {[
                    'Grade A Office Market Dynamics',
                    'Industrial & Logistics Alpha',
                    'Capital Stack & Structuring',
                    'Risk-Adjusted Return Scenarios',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#4A4A4A]">
                      <div className="w-1 h-1 bg-[#8B7355]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => goToStage('request')}
                className="w-full bg-[#8B7355] text-white px-4 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#6B5A45] transition-colors flex items-center justify-center gap-2"
              >
                Request Investment Memorandum <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════════ */}
          {/* REQUEST FORM STAGE */}
          {/* ════════════════════════════════════════════════════════════════════ */}
          {stage === 'request' && (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Back Button */}
              <button
                type="button"
                onClick={() => goToStage('overview')}
                className="flex items-center gap-2 text-[#8B7355] text-xs uppercase tracking-wider mb-2"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>

              {/* Header */}
              <div className="mb-4">
                <h2 className="font-serif text-xl text-[#2C2C2C]">Request Your Copy</h2>
                <p className="text-xs text-[#4A4A4A] mt-1">Complete the form below to access the Asset Brief</p>
              </div>

              {/* Form Fields */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#8B7355] mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-3 py-2 border border-[#E5E2DC] text-sm focus:border-[#8B7355] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#8B7355] mb-1.5">Organisation *</label>
                  <input
                    type="text"
                    name="organisation"
                    value={form.organisation}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full px-3 py-2 border border-[#E5E2DC] text-sm focus:border-[#8B7355] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#8B7355] mb-1.5">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 border border-[#E5E2DC] text-sm focus:border-[#8B7355] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#8B7355] mb-1.5">AUM Range *</label>
                  <select
                    name="aum"
                    value={form.aum}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-[#E5E2DC] text-sm focus:border-[#8B7355] focus:outline-none"
                    required
                  >
                    <option value="">Select AUM</option>
                    <option value="Under KES 50M">Under KES 50M</option>
                    <option value="KES 50-250M">KES 50-250M</option>
                    <option value="KES 250M-1B">KES 250M-1B</option>
                    <option value="KES 1-5B">KES 1-5B</option>
                    <option value="Over KES 5B">Over KES 5B</option>
                  </select>
                </div>
              </div>

              {/* Select Edition */}
              <div>
                <h3 className="font-serif text-base text-[#2C2C2C] mb-3 pb-2 border-b border-[#E5E2DC]">
                  Select Edition
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {(['digital', 'hard'] as const).map(t => (
                    <div
                      key={t}
                      className={`border p-3 cursor-pointer transition-all ${
                        form.copyType === t 
                          ? 'border-[#8B7355] bg-[#F0EFE9]' 
                          : 'border-[#E5E2DC] hover:border-[#8B7355]'
                      }`}
                      onClick={() => setForm(p => ({ ...p, copyType: t }))}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-[#8B7355]">
                          {t === 'digital' ? <Mail className="h-4 w-4" /> : <Book className="h-4 w-4" />}
                        </div>
                        {form.copyType === t && (
                          <div className="w-4 h-4 bg-[#8B7355] text-white flex items-center justify-center">
                            <Check className="h-3 w-3" />
                          </div>
                        )}
                      </div>
                      <h4 className="font-serif text-sm text-[#2C2C2C] mb-1">
                        {t === 'digital' ? 'Digital Edition' : 'Physical Copy'}
                      </h4>
                      <p className="text-[11px] text-[#4A4A4A] mb-1">
                        {t === 'digital' ? 'Instant email delivery' : 'KES 2,000 + shipping'}
                      </p>
                      <div className="text-[10px] uppercase tracking-wider text-[#8B7355]">
                        {t === 'digital' ? 'Complimentary' : 'KES 2,000'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address for Hard Copy */}
              {form.copyType === 'hard' && (
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#8B7355] mb-1.5">
                    Shipping Address *
                  </label>
                  <textarea
                    name="shippingAddress"
                    value={form.shippingAddress}
                    onChange={handleChange}
                    placeholder="Building, floor, street, area, city"
                    rows={2}
                    className="w-full px-3 py-2 border border-[#E5E2DC] text-sm focus:border-[#8B7355] focus:outline-none resize-none"
                    required
                  />
                </div>
              )}

              {/* Consent */}
              <div 
                className="flex gap-3 p-3 border border-[#E5E2DC] cursor-pointer"
                onClick={() => setForm(p => ({ ...p, consent: !p.consent }))}
              >
                <div className={`w-4 h-4 border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  form.consent ? 'bg-[#8B7355] border-[#8B7355] text-white' : 'border-[#D5D2CC]'
                }`}>
                  {form.consent && <Check className="h-3 w-3" />}
                </div>
                <div className="text-[11px] text-[#4A4A4A] leading-relaxed">
                  I confirm institutional investor status and consent to receive the Asset Brief and related communications from Murivest Realty.
                </div>
              </div>

              {error && (
                <div className="p-3 bg-[#8B4513]/10 border-l-2 border-[#8B4513] text-[11px] text-[#8B4513]">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={!canSubmit || loading}
                className="w-full bg-[#8B7355] text-white px-4 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#6B5A45] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : form.copyType === 'hard' ? 'Proceed to Payment' : 'Request Digital Copy'}
              </button>
            </form>
          )}

          {/* ════════════════════════════════════════════════════════════════════ */}
          {/* PAYMENT STAGE */}
          {/* ════════════════════════════════════════════════════════════════════ */}
          {stage === 'payment' && (
            <div className="space-y-4">
              {/* Back Button */}
              <button
                onClick={() => goToStage('request')}
                className="flex items-center gap-2 text-[#8B7355] text-xs uppercase tracking-wider mb-2"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Form
              </button>

              <div className="p-4 bg-gradient-to-br from-[#8B1A1A] to-[#A52020] text-white">
                <h3 className="font-serif text-lg mb-1">M-Pesa Payment</h3>
                <p className="text-[11px] opacity-80">Complete payment to confirm your order</p>
                
                <div className="mt-4 space-y-2">
                  {[
                    { label: 'Paybill', value: PAYBILL, key: 'paybill' },
                    { label: 'Account', value: ACCOUNT, key: 'account' },
                    { label: 'Amount', value: AMOUNT, key: 'amount' },
                  ].map(d => (
                    <div key={d.key} className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="text-[10px] uppercase opacity-70">{d.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-sm">{d.value}</span>
                        <button 
                          onClick={() => copyToClipboard(d.value, d.key)}
                          className="p-1 border border-white/30 hover:bg-white/10"
                        >
                          {copied === d.key ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 text-[10px] opacity-70">
                  1. M-Pesa → Lipa na M-Pesa → Paybill<br/>
                  2. Business No: {PAYBILL} | Account: {ACCOUNT}<br/>
                  3. Amount: KES 2,000 → Confirm with PIN
                </div>
              </div>

              {/* Digital Access Note */}
              <div className="p-3 bg-[#F0EFE9] border border-[#E5E2DC] text-center">
                <p className="text-[11px] text-[#4A4A4A]">
                  <strong>Digital copy sent to {form.email}</strong><br/>
                  Available now while physical copy is processed
                </p>
              </div>

              <form onSubmit={handleMpesaConfirm} className="space-y-3">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#8B7355] mb-1.5">
                    Payment Confirmation *
                  </label>
                  <textarea
                    value={mpesaMsg}
                    onChange={e => { setMpesaMsg(e.target.value); setError(''); }}
                    placeholder="Paste your M-Pesa confirmation SMS here..."
                    rows={3}
                    className="w-full px-3 py-2 border border-[#E5E2DC] text-sm focus:border-[#8B7355] focus:outline-none resize-none"
                    required
                  />
                </div>

                {error && (
                  <div className="p-3 bg-[#8B4513]/10 border-l-2 border-[#8B4513] text-[11px] text-[#8B4513]">
                    {error}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={!mpesaMsg.trim() || mpesaLoading}
                  className="w-full bg-[#8B7355] text-white px-4 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#6B5A45] transition-colors disabled:opacity-50"
                >
                  {mpesaLoading ? 'Confirming...' : 'Submit Payment Confirmation'}
                </button>
              </form>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════════ */}
          {/* SUCCESS - DIGITAL */}
          {/* ════════════════════════════════════════════════════════════════════ */}
          {stage === 'success_digital' && (
            <div className="text-center py-8 px-4">
              <div className="w-16 h-16 mx-auto mb-4 border-2 border-[#8B7355] flex items-center justify-center text-[#8B7355]">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl text-[#2C2C2C] mb-2">Access Confirmed</h3>
              <p className="text-xs text-[#4A4A4A] leading-relaxed mb-4">
                Thank you, <strong>{form.fullName.split(' ')[0]}</strong>. Your digital copy has been sent to <strong>{form.email}</strong>.
              </p>
              <a 
                href={flipUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#8B7355] text-white px-4 py-2 text-xs uppercase tracking-[0.15em] hover:bg-[#6B5A45]"
              >
                View Asset Brief
              </a>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════════ */}
          {/* SUCCESS - HARD COPY */}
          {/* ════════════════════════════════════════════════════════════════════ */}
          {stage === 'success_hard' && (
            <div className="text-center py-8 px-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#8B7355] flex items-center justify-center text-white">
                <Book className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl text-[#2C2C2C] mb-2">Payment Received</h3>
              <p className="text-xs text-[#4A4A4A] leading-relaxed mb-2">
                Thank you, <strong>{form.fullName.split(' ')[0]}</strong>. Your payment confirmation has been received.
              </p>
              <p className="text-xs text-[#4A4A4A] leading-relaxed mb-4">
                Physical copy will be dispatched to:<br/>
                <strong className="text-[#2C2C2C]">{form.shippingAddress}</strong>
              </p>
              <a 
                href={flipUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#8B7355] text-white px-4 py-2 text-xs uppercase tracking-[0.15em] hover:bg-[#6B5A45]"
              >
                View Digital Copy
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
