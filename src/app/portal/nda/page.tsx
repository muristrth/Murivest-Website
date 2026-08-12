import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Lock, FileText, Shield, ArrowRight } from 'lucide-react'

export default async function NDAPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="bg-white border border-[#B8956B]/20 p-12 max-w-md text-center">
          <Lock className="h-12 w-12 text-[#B8956B] mx-auto mb-4" />
          <h1 className="font-serif text-3xl text-[#1B4332] mb-3">Authentication Required</h1>
          <p className="text-sm text-[#2C3E35]/70 mb-6 leading-relaxed">
            Please sign in to access non-disclosure agreements and view restricted investment opportunities.
          </p>
          <Link 
            href="/portal?mode=login" 
            className="inline-block bg-[#1B4332] text-white px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#2D5A47] transition-colors"
          >
            Sign In to Portal
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8 border-b border-[#1B4332]/10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B]">Confidentiality</span>
            <span className="text-[#B8956B]/30">|</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#1B4332]/50">
              Legal Agreements
            </span>
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl text-[#1B4332]">Non-Disclosure Agreements</h1>
          <p className="text-sm text-[#2C3E35]/70 mt-3 max-w-2xl leading-relaxed">
            Review and manage confidentiality agreements for accessing sensitive investment opportunities 
            and proprietary market analysis.
          </p>
        </div>
      </div>

      <section className="bg-[#1B4332] text-[#FAF9F6] p-8 lg:p-12 rounded-sm">
        <div className="mb-8">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B] block mb-2">Purpose</span>
          <h2 className="font-serif text-3xl mb-2">Confidential Investment Access</h2>
          <p className="text-sm text-[#FAF9F6]/70 max-w-3xl">
            Certain investment opportunities require signed non-disclosure agreements before detailed 
            information can be disclosed. This ensures compliance with securities regulations and 
            protects sensitive business information.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <Shield className="h-6 w-6 text-[#B8956B] flex-shrink-0" />
          <div>
            <h3 className="font-medium text-white mb-2">Why NDAs Are Required</h3>
            <p className="text-sm text-[#FAF9F6]/70 leading-relaxed">
              Many investment opportunities include confidential information about target companies, 
              financial projections, and strategic details that are protected by regulation and require 
              investor qualification before access.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#B8956B]/20">
          <Link 
            href="/portal/briefs"
            className="inline-flex items-center gap-2 text-[#B8956B] hover:text-white transition-colors"
          >
            <FileText className="h-4 w-4" />
            <span className="text-sm">Browse Available Briefs</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}