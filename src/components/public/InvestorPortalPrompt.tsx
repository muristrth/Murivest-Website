'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

const STORAGE_KEY = 'murivest_portal_prompt_hidden_until'
const SHOW_AFTER_MS = 60_000
const HIDE_FOR_DAYS = 60

function getExpiry(days: number) {
  const d = new Date()
  d.setDate(d.getDate() + days)
  return d.toISOString()
}

export default function InvestorPortalPrompt() {
  const supabase = useMemo(() => createClient(), [])
  const [open, setOpen] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let active = true
    let timer: number | null = null

    async function init() {
      const hiddenUntil = localStorage.getItem(STORAGE_KEY)
      if (hiddenUntil && new Date(hiddenUntil).getTime() > Date.now()) {
        if (active) setReady(true)
        return
      }

      const { data } = await supabase.auth.getUser()
      if (data.user) {
        if (active) setReady(true)
        return
      }

      timer = window.setTimeout(() => {
        if (active) {
          setOpen(true)
          setReady(true)
        }
      }, SHOW_AFTER_MS)
    }

    init().finally(() => {
      if (active) setReady(true)
    })

    return () => {
      active = false
      if (timer) window.clearTimeout(timer)
    }
  }, [supabase])

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, getExpiry(HIDE_FOR_DAYS))
    setOpen(false)
  }

  if (!ready || !open) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-1/2 md:right-auto md:w-[720px] md:-translate-x-1/2">
      <div className="border border-[#D4AF37]/30 bg-[#0B1426]/95 backdrop-blur-sm text-white rounded-sm shadow-2xl">
        <div className="flex items-start justify-between gap-4 p-4 md:p-5">
          <div className="max-w-2xl">
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#D4AF37]/75 mb-2">
              Private Access
            </p>
            <h3 className="font-serif text-xl md:text-2xl text-white mb-2">
              Enter the Murivest Investor Portal
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Access publications, private briefs, and selected off-market opportunities.
            </p>
          </div>

          <button
            onClick={dismiss}
            aria-label="Dismiss portal prompt"
            className="text-white/60 hover:text-white transition-colors text-sm"
          >
            ✕
          </button>
        </div>

        <div className="border-t border-[#D4AF37]/15 px-4 py-4 md:px-5 flex flex-col sm:flex-row gap-3">
          <Link
            href="/investor-portal?mode=register"
            className="inline-flex items-center justify-center bg-[#D4AF37] text-[#0B1426] px-5 py-3 text-xs tracking-[0.18em] uppercase font-semibold hover:bg-[#B8941F] transition-colors"
          >
            Register
          </Link>

          <Link
            href="/investor-portal?mode=login"
            className="inline-flex items-center justify-center border border-[#D4AF37]/35 text-[#D4AF37] px-5 py-3 text-xs tracking-[0.18em] uppercase font-semibold hover:bg-[#D4AF37]/10 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}