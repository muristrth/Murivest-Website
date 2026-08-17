'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Building2,
  KeyRound,
  CalendarDays,
  Clock,
  MapPin,
  User,
  Mail,
  Phone,
  Wallet,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CreditCard,
  Send,
  Loader2,
  ChevronRight,
  BookOpen,
} from 'lucide-react'

// ═════════════════════════════════════════════════════════════════
//  TYPES
// ═════════════════════════════════════════════════════════════════

type ViewingType = 'tenant' | 'buyer'

interface FormData {
  viewingType: ViewingType | null
  fullName: string
  email: string
  phone: string
  propertyLocation: string
  propertyName: string
  budget: string
  shopSize: 'small_stall' | 'large_shop' | ''
  preferredDate: string
  preferredTime: string
  mpesaMessage: string
}

// ═════════════════════════════════════════════════════════════════
//  CONSTANTS
// ═════════════════════════════════════════════════════════════════

const VIEWING_FEES: Record<ViewingType, number> = {
  tenant: 500,
  buyer: 10000,
}

const PAYBILL_NUMBER = '714888'
const ACCOUNT_NUMBER = '478891'
const RECIPIENT_NAME = 'MARK MAINA MURIITHI'

const SHOP_SIZES = [
  { value: 'small_stall', label: 'Small Stall' },
  { value: 'large_shop', label: 'Large Shop' },
]

// MORNING ONLY — 08:00, 09:00, 10:00
const TIME_SLOTS = ['08:00 AM', '09:00 AM', '10:00 AM']

const STORAGE_KEY = 'murivest-visit-session'

const getMinBookingDate = () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow.toISOString().split('T')[0]
}

const isValidBookingDate = (dateStr: string): boolean => {
  if (!dateStr) return false
  const selected = new Date(dateStr)
  const minDate = new Date()
  minDate.setDate(minDate.getDate() + 1)
  minDate.setHours(0, 0, 0, 0)
  selected.setHours(0, 0, 0, 0)
  return selected >= minDate
}

// ═════════════════════════════════════════════════════════════════
//  DESIGN TOKENS
// ═════════════════════════════════════════════════════════════════

const D = {
  forest: '#1B4332',
  forestSoft: '#234B3A',
  brass: '#B8956B',
  cream: '#FAF9F6',
  ink: '#1A1A1A',
  slate: '#6B6B6B',
  hairline: '#E8E6E1',
  error: '#9B2C2C',
  errorBg: '#FDF2F2',
}

// ═════════════════════════════════════════════════════════════════
//  ANIMATION
// ═════════════════════════════════════════════════════════════════

const easeOut = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

// ═════════════════════════════════════════════════════════════════
//  HELPERS
// ═════════════════════════════════════════════════════════════════

function Hairline({ className = '' }: { className?: string }) {
  return <div className={`h-px bg-[${D.hairline}] ${className}`} style={{ backgroundColor: D.hairline }} />
}

function MicroLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A] mb-3">
      {children}
    </span>
  )
}

function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mb-10">
      <h2
        className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] tracking-tight leading-tight"
        style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
      >
        {children}
      </h2>
      {subtitle && <p className="mt-3 text-[#6B6B6B] text-sm leading-relaxed max-w-lg">{subtitle}</p>}
      <div className="mt-5 w-12 h-px bg-[#B8956B]" />
    </div>
  )
}

// ═════════════════════════════════════════════════════════════════
//  COMPONENTS
// ═════════════════════════════════════════════════════════════════

function StepIndicator({ step }: { step: number }) {
  const labels = ['Engagement Type', 'Advisory Session', 'Settlement']
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-4 mb-16">
      {labels.map((label, i) => {
        const n = i + 1
        const active = n === step
        const done = n < step
        return (
          <div key={label} className="flex items-center gap-2 sm:gap-4">
            <div className="flex flex-col items-center gap-2 min-w-[80px] sm:min-w-[100px]">
              <span
                className={`text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.15em] transition-colors duration-500 ${
                  active || done ? 'text-[#1B4332]' : 'text-[#B0ADA7]'
                }`}
              >
                {label}
              </span>
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    active ? 'bg-[#1B4332] scale-125' : done ? 'bg-[#1B4332]' : 'bg-[#E5E2DC]'
                  }`}
                />
                {i < 2 && (
                  <div
                    className={`w-8 sm:w-20 h-px transition-colors duration-500 ${
                      done ? 'bg-[#1B4332]' : 'bg-[#E5E2DC]'
                    }`}
                  />
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function ViewingCard({
  type,
  selected,
  onSelect,
}: {
  type: ViewingType
  selected: boolean
  onSelect: () => void
}) {
  const isTenant = type === 'tenant'
  const Icon = isTenant ? KeyRound : Building2
  const fee = VIEWING_FEES[type]

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      onClick={onSelect}
      className={`group relative w-full text-left p-8 sm:p-10 rounded-none border transition-all duration-500 ${
        selected
          ? 'border-[#1B4332] bg-[#FAF9F6]'
          : 'border-[#E8E6E1] bg-white hover:border-[#B8956B]/60'
      }`}
    >
      {selected && <div className="absolute top-0 left-0 w-full h-1 bg-[#1B4332]" />}
      <div className="flex items-start justify-between mb-8">
        <div
          className={`w-12 h-12 flex items-center justify-center border transition-colors duration-300 ${
            selected ? 'border-[#1B4332] text-[#1B4332]' : 'border-[#E8E6E1] text-[#8A8A8A] group-hover:border-[#B8956B]/40 group-hover:text-[#B8956B]'
          }`}
        >
          <Icon size={22} strokeWidth={1.2} />
        </div>
        {selected && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.15 }}>
            <CheckCircle2 size={18} className="text-[#1B4332]" strokeWidth={1.5} />
          </motion.div>
        )}
      </div>

      <h3
        className="text-xl sm:text-2xl font-normal text-[#1A1A1A] mb-3 tracking-tight"
        style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
      >
        {isTenant ? 'Tenant Advisory' : 'Acquisition Advisory'}
      </h3>
      <p className="text-sm text-[#6B6B6B] leading-[1.7] mb-8 max-w-xs">
        {isTenant
          ? 'For discerning clients seeking commercial tenancy — shops, stalls, and premium office space.'
          : 'For principals and investors evaluating property for acquisition or long-term capital deployment.'}
      </p>

      <Hairline className="mb-6" />
      <div className="flex items-baseline justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A]">
          Viewing Fee
        </span>
        <span
          className={`text-2xl font-light tracking-tight ${
            selected ? 'text-[#1B4332]' : 'text-[#1A1A1A]'
          }`}
        >
          Ksh {fee.toLocaleString()}
        </span>
      </div>
    </motion.button>
  )
}

function FormField({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  required = true,
  icon: Icon,
  min,
  helper,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  type?: string
  placeholder?: string
  required?: boolean
  icon?: React.ElementType
  min?: string
  helper?: string
}) {
  return (
    <div className="space-y-2.5">
      <label className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8A8A]">
        {label}
        {required && <span className="text-[#B8956B] ml-1">·</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[#B0ADA7] pointer-events-none">
            <Icon size={15} strokeWidth={1.2} />
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          min={min}
          className={`w-full bg-transparent border-0 border-b border-[#E8E6E1] py-3 text-[15px] text-[#1A1A1A] placeholder:text-[#B0ADA7] focus:outline-none focus:border-[#1B4332] transition-colors duration-300 ${
            Icon ? 'pl-7' : ''
          }`}
        />
      </div>
      {helper && <p className="text-[11px] text-[#9CA3AF] leading-relaxed">{helper}</p>}
    </div>
  )
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required = true,
  icon: Icon,
  helper,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: { value: string; label: string; disabled?: boolean }[]
  required?: boolean
  icon?: React.ElementType
  helper?: string
}) {
  return (
    <div className="space-y-2.5">
      <label className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8A8A]">
        {label}
        {required && <span className="text-[#B8956B] ml-1">·</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[#B0ADA7] pointer-events-none">
            <Icon size={15} strokeWidth={1.2} />
          </div>
        )}
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full bg-transparent border-0 border-b border-[#E8E6E1] py-3 text-[15px] text-[#1A1A1A] appearance-none focus:outline-none focus:border-[#1B4332] transition-colors duration-300 cursor-pointer ${
            Icon ? 'pl-7' : ''
          } ${!value ? 'text-[#B0ADA7]' : ''}`}
        >
          <option value="" disabled>
            Select {label.toLowerCase()}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.disabled ? `${opt.label} · Reserved` : opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[#B0ADA7] pointer-events-none">
          <ChevronRight size={12} className="rotate-90" strokeWidth={1.5} />
        </div>
      </div>
      {helper && <p className="text-[11px] text-[#9CA3AF] leading-relaxed">{helper}</p>}
    </div>
  )
}

function PolicyPanel({ type }: { type: ViewingType | null }) {
  return (
    <div className="border-l-2 border-[#B8956B] pl-6 py-1 mb-12">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B8956B] mb-4">
        Advisory Protocol
      </p>
      <ul className="space-y-3 text-[13px] text-[#6B6B6B] leading-[1.8]">
        <li className="flex items-start gap-3">
          <span className="w-1 h-1 rounded-full bg-[#B8956B] mt-2 shrink-0" />
          <span>
            Viewing fee of{' '}
            <strong className="text-[#1A1A1A] font-medium">
              Ksh {type ? VIEWING_FEES[type].toLocaleString() : '500 / 10,000'}
            </strong>{' '}
            per appointment.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-1 h-1 rounded-full bg-[#B8956B] mt-2 shrink-0" />
          <span>
            All viewings require{' '}
            <strong className="text-[#1A1A1A] font-medium">24-hour advance notice</strong>.
            Same-day requests are not accommodated.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-1 h-1 rounded-full bg-[#B8956B] mt-2 shrink-0" />
          <span>
            Morning sessions only:{' '}
            <strong className="text-[#1A1A1A] font-medium">08:00 — 10:00 AM</strong>.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-1 h-1 rounded-full bg-[#B8956B] mt-2 shrink-0" />
          <span>
            Confirmation is final only upon{' '}
            <strong className="text-[#1A1A1A] font-medium">fee settlement</strong> and mutual agreement of appointment time.
          </span>
        </li>
      </ul>
    </div>
  )
}

// ═════════════════════════════════════════════════════════════════
//  MAIN PAGE
// ═════════════════════════════════════════════════════════════════

export default function VisitPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    viewingType: null,
    fullName: '',
    email: '',
    phone: '',
    propertyLocation: '',
    propertyName: '',
    budget: '',
    shopSize: '',
    preferredDate: '',
    preferredTime: '',
    mpesaMessage: '',
  })
  const [showVerification, setShowVerification] = useState(false)
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'verifying' | 'success' | 'error'>('idle')
  const [verificationError, setVerificationError] = useState('')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [submitError, setSubmitError] = useState('')
  const [bookedSlots, setBookedSlots] = useState<Record<string, string[]>>({})

  // ── Scroll to top on every step / view change ─────────────────
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [step, showVerification])

  // ── Session Persistence: localStorage + mobile app switch ─────
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setFormData((prev) => ({ ...prev, ...parsed }))
        if (parsed._step) setStep(parsed._step)
        if (parsed._showVerification) setShowVerification(parsed._showVerification)
      } catch {}
    }
  }, [])

  useEffect(() => {
    const payload = { ...formData, _step: step, _showVerification: showVerification }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  }, [formData, step, showVerification])

  // Warn before unload / refresh
  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      if (submitStatus !== 'success') {
        e.preventDefault()
        e.returnValue = ''
      }
    }
    window.addEventListener('beforeunload', handler)
    return () => window.removeEventListener('beforeunload', handler)
  }, [submitStatus])

  // Restore on visibility change (mobile app switch)
  useEffect(() => {
    const handler = () => {
      if (document.visibilityState === 'visible') {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) {
          try {
            const parsed = JSON.parse(saved)
            setFormData((prev) => ({ ...prev, ...parsed }))
          } catch {}
        }
      }
    }
    document.addEventListener('visibilitychange', handler)
    return () => document.removeEventListener('visibilitychange', handler)
  }, [])

  // ── Fetch booked slots when date changes ──────────────────────
  useEffect(() => {
    if (!formData.preferredDate) return
    fetch(`/api/bookings?date=${formData.preferredDate}`)
      .then((r) => r.json())
      .then((data) => {
        const map: Record<string, string[]> = {}
        data.bookings.forEach((b: { date: string; time: string }) => {
          if (!map[b.date]) map[b.date] = []
          map[b.date].push(b.time)
        })
        setBookedSlots(map)
      })
      .catch(() => {})
  }, [formData.preferredDate])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    },
    []
  )

  const isSlotTaken = useCallback(
    (date: string, time: string) => {
      return bookedSlots[date]?.includes(time) ?? false
    },
    [bookedSlots]
  )

  const validateMpesaMessage = (msg: string, expectedAmount: number): { valid: boolean; error: string } => {
    const text = msg.trim()
    if (text.length < 30) {
      return { valid: false, error: 'Please paste the complete M-Pesa confirmation SMS.' }
    }
    const requiredKeywords = ['Confirmed', 'Ksh', RECIPIENT_NAME, 'sent to']
    for (const kw of requiredKeywords) {
      if (!text.includes(kw)) {
        return { valid: false, error: `Missing required field: "${kw}".` }
      }
    }
    const amountStr = expectedAmount.toLocaleString()
    const hasAmount =
      text.includes(`Ksh ${amountStr}`) ||
      text.includes(`Ksh${amountStr}`) ||
      new RegExp(`Ksh\\s*${amountStr.replace(/,/g, '[,]?')}`).test(text)
    if (!hasAmount) {
      return { valid: false, error: `Amount must be exactly Ksh ${amountStr}.` }
    }
    if (!text.includes(ACCOUNT_NUMBER)) {
      return { valid: false, error: `Account number ${ACCOUNT_NUMBER} not detected.` }
    }
    if (!/\d{1,2}:\d{2}\s*(AM|PM)/i.test(text)) {
      return { valid: false, error: 'Valid transaction time not found.' }
    }
    if (!/[A-Z0-9]{8,12}/.test(text)) {
      return { valid: false, error: 'Transaction reference not found.' }
    }
   
    return { valid: true, error: '' }
  }

  const handleVerifyPayment = async () => {
    if (!formData.viewingType) return
    setVerificationStatus('verifying')
    setVerificationError('')
    const expectedAmount = VIEWING_FEES[formData.viewingType]
    const result = validateMpesaMessage(formData.mpesaMessage, expectedAmount)
    await new Promise((r) => setTimeout(r, 700))
    if (!result.valid) {
      setVerificationStatus('error')
      setVerificationError(result.error)
      return
    }
    setVerificationStatus('success')
  }

  const handleSubmit = async () => {
    if (!formData.viewingType) return
    setSubmitStatus('submitting')
    setSubmitError('')
    try {
      const payload = {
        ...formData,
        viewingFee: VIEWING_FEES[formData.viewingType],
        paybillNumber: PAYBILL_NUMBER,
        accountNumber: ACCOUNT_NUMBER,
      }
      const res = await fetch('/api/email-confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || 'Submission failed. Please contact our advisory desk.')
      }
      setSubmitStatus('success')
      localStorage.removeItem(STORAGE_KEY)
    } catch (err: any) {
      setSubmitStatus('idle')
      setSubmitError(err.message || 'An unexpected error occurred.')
    }
  }

  const formatDate = (dateStr: string) => {
    if (!dateStr) return ''
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  const canProceedStep2 = formData.viewingType !== null
  const canProceedStep3 =
    !!formData.fullName &&
    !!formData.email &&
    !!formData.phone &&
    !!formData.propertyLocation &&
    !!formData.preferredDate &&
    isValidBookingDate(formData.preferredDate) &&
    !!formData.preferredTime &&
    !isSlotTaken(formData.preferredDate, formData.preferredTime)

  const isTenant = formData.viewingType === 'tenant'
  const isBuyer = formData.viewingType === 'buyer'

  // Build time options with disabled state for booked slots
  const timeOptions = useMemo(() => {
    const date = formData.preferredDate
    return TIME_SLOTS.map((t) => ({
      value: t,
      label: t,
      disabled: date ? isSlotTaken(date, t) : false,
    }))
  }, [formData.preferredDate, bookedSlots, isSlotTaken])

  const allSlotsTaken = formData.preferredDate
    ? TIME_SLOTS.every((t) => isSlotTaken(formData.preferredDate, t))
    : false

  // ─────────────────────────────────────────────────────────────

  return (
    <main className="min-h-screen bg-white">
      {/* ═══════ HERO ═══════ */}
      <section className="relative bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 pt-20 sm:pt-32 pb-16 sm:pb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: easeOut }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#B8956B]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B8956B]">
                Murivest Group
              </span>
            </div>
            <h1
              className="text-4xl sm:text-6xl font-normal text-[#1A1A1A] tracking-tight leading-[1.1] max-w-3xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
            >
              Schedule a Private Viewing
            </h1>
            <p className="mt-6 text-[#6B6B6B] text-base sm:text-lg leading-[1.7] max-w-xl">
              Arrange an exclusive advisory session at one of our curated commercial properties.
              A nominal engagement fee ensures priority scheduling and serious representation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ CONTENT ═══════ */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 py-16 sm:py-24">
        <StepIndicator step={step} />

        <AnimatePresence mode="wait">
          {/* ━━━━━━━━━ STEP 1 ━━━━━━━━━ */}
          {step === 1 && (
            <motion.div
              key="step1"
              variants={stagger}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -16, transition: { duration: 0.3 } }}
            >
              <motion.div variants={fadeUp} className="mb-16">
                <SectionTitle subtitle="Select the engagement model that aligns with your property objectives.">
                  Engagement Type
                </SectionTitle>
              </motion.div>

              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6 mb-20">
                <ViewingCard
                  type="tenant"
                  selected={formData.viewingType === 'tenant'}
                  onSelect={() => setFormData((p) => ({ ...p, viewingType: 'tenant' }))}
                />
                <ViewingCard
                  type="buyer"
                  selected={formData.viewingType === 'buyer'}
                  onSelect={() => setFormData((p) => ({ ...p, viewingType: 'buyer' }))}
                />
              </motion.div>

              <motion.div variants={fadeUp} className="flex justify-end">
                <button
                  onClick={() => canProceedStep2 && setStep(2)}
                  disabled={!canProceedStep2}
                  className={`group inline-flex items-center gap-3 px-10 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 shadow-sm ${
                    canProceedStep2
                      ? 'bg-[#1B4332] text-white hover:bg-[#234B3A] hover:shadow-md'
                      : 'bg-[#E5E2DC] text-[#9CA3AF] cursor-not-allowed'
                  }`}
                >
                  Continue to Advisory Session
                  <ArrowRight size={16} strokeWidth={1.5} className={`transition-transform duration-300 ${canProceedStep2 ? 'group-hover:translate-x-1' : ''}`} />
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* ━━━━━━━━━ STEP 2 ━━━━━━━━━ */}
          {step === 2 && (
            <motion.div
              key="step2"
              variants={stagger}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -16, transition: { duration: 0.3 } }}
            >
              <motion.div variants={fadeUp} className="mb-16">
                <SectionTitle subtitle="Provide your particulars and preferred appointment details. All fields are held in strict confidence.">
                  Advisory Session
                </SectionTitle>
              </motion.div>

              <div className="grid lg:grid-cols-[1fr_340px] gap-16">
                {/* ── Form ── */}
                <motion.div variants={fadeUp} className="space-y-14">
                  <PolicyPanel type={formData.viewingType} />

                  <div>
                    <MicroLabel>Principal Information</MicroLabel>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                      <FormField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="e.g. Jonathan Muriithi" icon={User} />
                      <FormField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="principal@firm.com" icon={Mail} />
                      <FormField label="Telephone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+254 115 277 610 " icon={Phone} />
                      {isBuyer && (
                        <FormField label="Investment Budget (Ksh)" name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g. 45,000,000" icon={Wallet} helper="Indicative range for acquisition." />
                      )}
                      {isTenant && (
                        <SelectField
                          label="Premises Category"
                          name="shopSize"
                          value={formData.shopSize}
                          onChange={handleChange}
                          options={SHOP_SIZES}
                          icon={Building2}
                          helper="Select the approximate scale of tenancy required."
                        />
                      )}
                    </div>
                  </div>

                  <Hairline />

                  <div>
                    <MicroLabel>Property Particulars</MicroLabel>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                      <FormField label="Property Location" name="propertyLocation" value={formData.propertyLocation} onChange={handleChange} placeholder="e.g. Westlands, Nairobi" icon={MapPin} />
                      <FormField label="Property Name (if known)" name="propertyName" value={formData.propertyName} onChange={handleChange} placeholder="e.g. The Meridian Tower" icon={Building2} required={false} />
                    </div>
                  </div>

                  <Hairline />

                  <div>
                    <MicroLabel>Appointment Preference</MicroLabel>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                      <FormField
                        label="Preferred Date"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        icon={CalendarDays}
                        min={getMinBookingDate()}
                        helper="Minimum 24 hours advance notice required."
                      />
                      <SelectField
                        label="Preferred Time"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        options={timeOptions}
                        icon={Clock}
                        helper={formData.preferredDate && allSlotsTaken ? 'All morning slots reserved for this date.' : 'Morning sessions only: 08:00 — 10:00 AM.'}
                      />
                    </div>
                    {formData.preferredDate && !isValidBookingDate(formData.preferredDate) && (
                      <p className="text-xs text-[#9B2C2C] mt-4 flex items-center gap-1.5">
                        <AlertCircle size={12} />
                        Appointments must be scheduled at least one day in advance.
                      </p>
                    )}
                    {formData.preferredDate && allSlotsTaken && (
                      <p className="text-xs text-[#9B2C2C] mt-4 flex items-center gap-1.5">
                        <AlertCircle size={12} />
                        All morning slots for this date are reserved. Please select another date.
                      </p>
                    )}
                  </div>
                </motion.div>

                {/* ── Sidebar Summary ── */}
                <motion.div variants={fadeUp} className="hidden lg:block">
                  <div className="sticky top-24">
                    <div className="border border-[#E8E6E1] bg-[#FAF9F6] p-8">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A] mb-6">
                        Engagement Summary
                      </p>
                      <div className="space-y-5">
                        <div className="flex justify-between items-baseline pb-4 border-b border-[#E8E6E1]">
                          <span className="text-[13px] text-[#6B6B6B]">Engagement</span>
                          <span className="text-[13px] font-medium text-[#1A1A1A] capitalize">
                            {formData.viewingType || '—'}
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline pb-4 border-b border-[#E8E6E1]">
                          <span className="text-[13px] text-[#6B6B6B]">Property</span>
                          <span className="text-[13px] font-medium text-[#1A1A1A] text-right max-w-[140px] truncate">
                            {formData.propertyName || formData.propertyLocation || '—'}
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline pb-4 border-b border-[#E8E6E1]">
                          <span className="text-[13px] text-[#6B6B6B]">Date</span>
                          <span className="text-[13px] font-medium text-[#1A1A1A]">
                            {formatDate(formData.preferredDate) || '—'}
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline pb-4 border-b border-[#E8E6E1]">
                          <span className="text-[13px] text-[#6B6B6B]">Time</span>
                          <span className="text-[13px] font-medium text-[#1A1A1A]">
                            {formData.preferredTime || '—'}
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline pt-2">
                          <span className="text-[13px] text-[#6B6B6B]">Engagement Fee</span>
                          <span className="text-xl font-light text-[#1B4332]">
                            Ksh {formData.viewingType ? VIEWING_FEES[formData.viewingType].toLocaleString() : '—'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {canProceedStep3 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-6 border border-[#1B4332]/10 bg-[#1B4332]/[0.02]"
                      >
                        <p className="text-[11px] text-[#6B6B6B] leading-relaxed">
                          Your advisory session is ready for confirmation. Please review the particulars above before proceeding to settlement.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Mobile summary */}
              {canProceedStep3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="lg:hidden mt-12 p-6 border border-[#E8E6E1] bg-[#FAF9F6]"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A] mb-4">
                    Engagement Summary
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="block text-xs text-[#8A8A8A] mb-1">Engagement</span>
                      <span className="font-medium capitalize">{formData.viewingType}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-[#8A8A8A] mb-1">Fee</span>
                      <span className="font-medium text-[#1B4332]">
                        Ksh {formData.viewingType ? VIEWING_FEES[formData.viewingType].toLocaleString() : '—'}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className="block text-xs text-[#8A8A8A] mb-1">Appointment</span>
                      <span className="font-medium">
                        {formatDate(formData.preferredDate)} at {formData.preferredTime}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              <motion.div variants={fadeUp} className="flex justify-between items-center mt-20">
                <button
                  onClick={() => setStep(1)}
                  className="group inline-flex items-center gap-2 text-sm text-[#8A8A8A] hover:text-[#1A1A1A] transition-colors duration-200"
                >
                  <ArrowLeft size={14} strokeWidth={1.5} className="group-hover:-translate-x-0.5 transition-transform" />
                  Back
                </button>
                <button
                  onClick={() => canProceedStep3 && setStep(3)}
                  disabled={!canProceedStep3}
                  className={`inline-flex items-center gap-3 px-10 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 shadow-sm ${
                    canProceedStep3
                      ? 'bg-[#1B4332] text-white hover:bg-[#234B3A] hover:shadow-md'
                      : 'bg-[#E5E2DC] text-[#9CA3AF] cursor-not-allowed'
                  }`}
                >
                  Proceed to Settlement
                  <ArrowRight size={14} strokeWidth={1.5} />
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* ━━━━━━━━━ STEP 3 ━━━━━━━━━ */}
          {step === 3 && (
            <motion.div
              key="step3"
              variants={stagger}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -16, transition: { duration: 0.3 } }}
            >
              {!showVerification ? (
                <>
                  <motion.div variants={fadeUp} className="mb-16">
                    <SectionTitle subtitle="Complete the M-Pesa settlement to confirm your advisory appointment.">
                      Settlement
                    </SectionTitle>
                  </motion.div>

                  <div className="grid lg:grid-cols-[1fr_380px] gap-16">
                    {/* ── Left: Instructions ── */}
                    <motion.div variants={fadeUp} className="space-y-12">
                      <div className="border border-[#E8E6E1] p-8 sm:p-10">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 border border-[#E8E6E1] flex items-center justify-center">
                            <CreditCard size={20} strokeWidth={1.2} className="text-[#1B4332]" />
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A]">
                              Lipa na M-Pesa
                            </p>
                            <p className="text-lg font-medium text-[#1A1A1A] mt-0.5">Paybill Transaction</p>
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-8 mb-10">
                          <div>
                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A] block mb-2">
                              Paybill Number
                            </span>
                            <span className="text-2xl font-light text-[#1A1A1A] tracking-tight font-mono">
                              {PAYBILL_NUMBER}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A] block mb-2">
                              Account Number
                            </span>
                            <span className="text-2xl font-light text-[#1A1A1A] tracking-tight font-mono">
                              {ACCOUNT_NUMBER}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A] block mb-2">
                              Amount Due
                            </span>
                            <span className="text-2xl font-light text-[#1B4332] tracking-tight">
                              Ksh {formData.viewingType ? VIEWING_FEES[formData.viewingType].toLocaleString() : '—'}
                            </span>
                          </div>
                        </div>

                        <Hairline className="mb-8" />

                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A] mb-5">
                          Transaction Protocol
                        </p>
                        <ol className="space-y-5">
                          {[
                            'Open M-Pesa on your mobile device and select Lipa na M-Pesa.',
                            `Select Paybill and enter business number ${PAYBILL_NUMBER}.`,
                            `Enter account number ${ACCOUNT_NUMBER}.`,
                            `Enter amount Ksh ${formData.viewingType ? VIEWING_FEES[formData.viewingType].toLocaleString() : '—'} and confirm with your PIN.`,
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-[14px] text-[#6B6B6B] leading-[1.7]">
                              <span className="w-5 h-5 border border-[#E8E6E1] flex items-center justify-center text-[10px] font-semibold text-[#8A8A8A] shrink-0 mt-0.5">
                                {i + 1}
                              </span>
                              {item}
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="border-l-2 border-[#B8956B] pl-6 py-1">
                        <p className="text-[13px] text-[#6B6B6B] leading-[1.8]">
                          <strong className="text-[#1A1A1A] font-medium">Notice:</strong> Settlement must be completed before the advisory session is formally confirmed. Upon verification, you and our advisory desk will receive immediate confirmation via email.
                        </p>
                      </div>
                    </motion.div>

                    {/* ── Right: Appointment Card ── */}
                    <motion.div variants={fadeUp}>
                      <div className="sticky top-24 border border-[#E8E6E1] bg-[#FAF9F6] p-8">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A] mb-6">
                          Appointment Particulars
                        </p>
                        <div className="space-y-4">
                          <div className="pb-4 border-b border-[#E8E6E1]">
                            <span className="text-[11px] text-[#8A8A8A] uppercase tracking-wider">Principal</span>
                            <p className="text-[15px] text-[#1A1A1A] mt-1 font-medium">{formData.fullName}</p>
                          </div>
                          <div className="pb-4 border-b border-[#E8E6E1]">
                            <span className="text-[11px] text-[#8A8A8A] uppercase tracking-wider">Engagement</span>
                            <p className="text-[15px] text-[#1A1A1A] mt-1 font-medium capitalize">{formData.viewingType}</p>
                          </div>
                          <div className="pb-4 border-b border-[#E8E6E1]">
                            <span className="text-[11px] text-[#8A8A8A] uppercase tracking-wider">Property</span>
                            <p className="text-[15px] text-[#1A1A1A] mt-1 font-medium">
                              {formData.propertyName || formData.propertyLocation}
                            </p>
                          </div>
                          <div className="pb-4 border-b border-[#E8E6E1]">
                            <span className="text-[11px] text-[#8A8A8A] uppercase tracking-wider">Schedule</span>
                            <p className="text-[15px] text-[#1A1A1A] mt-1 font-medium">
                              {formatDate(formData.preferredDate)} at {formData.preferredTime}
                            </p>
                          </div>
                          <div className="pt-2">
                            <span className="text-[11px] text-[#8A8A8A] uppercase tracking-wider">Fee</span>
                            <p className="text-2xl font-light text-[#1B4332] mt-1">
                              Ksh {formData.viewingType ? VIEWING_FEES[formData.viewingType].toLocaleString() : '—'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div variants={fadeUp} className="flex justify-between items-center mt-20">
                    <button
                      onClick={() => setStep(2)}
                      className="group inline-flex items-center gap-2 text-sm text-[#8A8A8A] hover:text-[#1A1A1A] transition-colors duration-200"
                    >
                      <ArrowLeft size={14} strokeWidth={1.5} className="group-hover:-translate-x-0.5 transition-transform" />
                      Back
                    </button>
                    <button
                      onClick={() => setShowVerification(true)}
                      className="inline-flex items-center gap-3 px-10 py-4 text-sm font-medium tracking-wide uppercase bg-[#1B4332] text-white hover:bg-[#234B3A] shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <CheckCircle2 size={14} strokeWidth={1.5} />
                      I Have Completed Payment
                    </button>
                  </motion.div>
                </>
              ) : (
                /* ── Verification ── */
                <>
                  <motion.div variants={fadeUp} className="mb-16">
                    <SectionTitle subtitle="Paste your M-Pesa confirmation SMS below for automated verification.">
                      Verify Settlement
                    </SectionTitle>
                  </motion.div>

                  <div className="max-w-2xl">
                    <motion.div variants={fadeUp} className="mb-10 p-6 bg-[#FAF9F6] border border-[#E8E6E1]">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A] mb-4">
                        Principal Details
                      </p>
                      <div className="grid sm:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="block text-[11px] text-[#8A8A8A] mb-1">Name</span>
                          <span className="text-[#1A1A1A] font-medium">{formData.fullName}</span>
                        </div>
                        <div>
                          <span className="block text-[11px] text-[#8A8A8A] mb-1">Email</span>
                          <span className="text-[#1A1A1A] font-medium">{formData.email}</span>
                        </div>
                        <div>
                          <span className="block text-[11px] text-[#8A8A8A] mb-1">Telephone</span>
                          <span className="text-[#1A1A1A] font-medium">{formData.phone}</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="mb-8">
                      <label className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8A8A] mb-3">
                        M-Pesa Confirmation Message
                        <span className="text-[#B8956B] ml-1">·</span>
                      </label>
                      <textarea
                        name="mpesaMessage"
                        value={formData.mpesaMessage}
                        onChange={handleChange}
                        placeholder={`QGH82P7L5 Confirmed. Ksh ${formData.viewingType ? VIEWING_FEES[formData.viewingType].toLocaleString() : '10,000'}.00 sent to ${RECIPIENT_NAME} for account ${ACCOUNT_NUMBER} on 9 August 2026 at 2:35 PM. New M-PESA balance is Ksh X,XXX.00.`}
                        required
                        rows={6}
                        className={`w-full bg-[#FAF9F6] border p-5 text-[14px] text-[#1A1A1A] placeholder:text-[#B0ADA7] leading-relaxed focus:outline-none focus:ring-1 transition-all duration-200 resize-none ${
                          verificationStatus === 'error'
                            ? 'border-[#9B2C2C] focus:ring-[#9B2C2C]/10'
                            : verificationStatus === 'success'
                              ? 'border-[#1B4332] focus:ring-[#1B4332]/10'
                              : 'border-[#E8E6E1] focus:border-[#1B4332] focus:ring-[#1B4332]/10'
                        }`}
                      />

                      <AnimatePresence>
                        {verificationStatus === 'error' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 p-4 bg-[#FDF2F2] border border-[#9B2C2C]/20"
                          >
                            <div className="flex items-start gap-3">
                              <AlertCircle size={16} className="text-[#9B2C2C] shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium text-[#9B2C2C]">Verification Unsuccessful</p>
                                <p className="text-sm text-[#9B2C2C]/80 mt-1">{verificationError}</p>
                                <p className="text-xs text-[#9B2C2C]/60 mt-2">
                                  Please paste the complete confirmation message exactly as received.
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {verificationStatus === 'success' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 p-4 bg-[#1B4332]/[0.03] border border-[#1B4332]/20"
                          >
                            <div className="flex items-start gap-3">
                              <CheckCircle2 size={16} className="text-[#1B4332] shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium text-[#1B4332]">Settlement Verified</p>
                                <p className="text-sm text-[#1B4332]/70 mt-1">
                                  Your transaction has passed validation. Submit to finalize the advisory appointment.
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {submitStatus === 'success' ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: easeOut }}
                        className="text-center py-20 border border-[#1B4332]/10 bg-[#1B4332]/[0.02]"
                      >
                        <div className="w-16 h-16 border border-[#1B4332] flex items-center justify-center mx-auto mb-8">
                          <CheckCircle2 size={28} className="text-[#1B4332]" strokeWidth={1.2} />
                        </div>
                        <h3
                          className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] mb-4"
                          style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
                        >
                          Appointment Confirmed
                        </h3>
                        <p className="text-[#6B6B6B] leading-relaxed max-w-md mx-auto mb-8">
                          Your advisory session is confirmed for{' '}
                          <strong className="text-[#1A1A1A]">{formatDate(formData.preferredDate)}</strong> at{' '}
                          <strong className="text-[#1A1A1A]">{formData.preferredTime}</strong>. Confirmation has been dispatched to{' '}
                          <span className="text-[#1B4332]">{formData.email}</span>.
                        </p>
                        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#8A8A8A]">
                          <Mail size={13} strokeWidth={1.5} />
                          {formData.email}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div variants={fadeUp} className="flex justify-between items-center">
                        <button
                          onClick={() => {
                            setShowVerification(false)
                            setVerificationStatus('idle')
                            setVerificationError('')
                          }}
                          className="group inline-flex items-center gap-2 text-sm text-[#8A8A8A] hover:text-[#1A1A1A] transition-colors duration-200"
                        >
                          <ArrowLeft size={14} strokeWidth={1.5} className="group-hover:-translate-x-0.5 transition-transform" />
                          Back
                        </button>

                        <div className="flex items-center gap-4">
                          {verificationStatus !== 'success' && (
                            <button
                              onClick={handleVerifyPayment}
                              disabled={!formData.mpesaMessage.trim() || verificationStatus === 'verifying'}
                              className={`inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wide uppercase border transition-all duration-300 ${
                                formData.mpesaMessage.trim() && verificationStatus !== 'verifying'
                                  ? 'border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white'
                                  : 'border-[#E8E6E1] text-[#B0ADA7] cursor-not-allowed'
                              }`}
                            >
                              {verificationStatus === 'verifying' ? (
                                <>
                                  <Loader2 size={14} className="animate-spin" />
                                  Verifying
                                </>
                              ) : (
                                <>
                                  <ShieldCheck size={14} strokeWidth={1.5} />
                                  Verify
                                </>
                              )}
                            </button>
                          )}

                          {verificationStatus === 'success' && (
                            <button
                              onClick={handleSubmit}
                              disabled={submitStatus === 'submitting'}
                              className={`inline-flex items-center gap-3 px-10 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 shadow-sm ${
                                submitStatus === 'submitting'
                                  ? 'bg-[#234B3A] text-white cursor-wait'
                                  : 'bg-[#1B4332] text-white hover:bg-[#234B3A] hover:shadow-md'
                              }`}
                            >
                              {submitStatus === 'submitting' ? (
                                <>
                                  <Loader2 size={14} className="animate-spin" />
                                  Processing
                                </>
                              ) : (
                                <>
                                  <Send size={14} strokeWidth={1.5} />
                                  Confirm Appointment
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {submitError && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-[#9B2C2C] text-sm mt-6">
                        {submitError}
                      </motion.p>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="border-t border-[#E8E6E1] bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 py-12 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-px bg-[#B8956B]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A]">
              Murivest Group
            </span>
          </div>
          <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.15em] text-[#9CA3AF]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={12} strokeWidth={1.5} />
              Secure
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={12} strokeWidth={1.5} />
              Verified
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen size={12} strokeWidth={1.5} />
              Institutional
            </span>
          </div>
        </div>
      </footer>
    </main>
  )
}