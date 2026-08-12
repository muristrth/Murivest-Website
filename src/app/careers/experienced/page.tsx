import type { Metadata } from 'next'
import { Target, Award, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Experienced Hire | Murivest Advisory',
  description: 'Lateral recruitment opportunities for experienced commercial real estate professionals at Murivest.',
}

export default function ExperiencedHirePage() {
  return (
    <div className="bg-[#FAF9F6]">
      <section className="bg-[#1B4332] text-white pt-36 pb-20 px-6 md:px-12 text-center">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B8956B]">
          Careers — Experienced Hire
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mt-6 max-w-3xl mx-auto text-balance">
          Lateral Recruitment
        </h1>
        <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed mt-6 max-w-2xl mx-auto text-pretty">
          We recruit experienced professionals who bring proven transaction records and specialist market expertise.
        </p>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <Target className="w-6 h-6 text-[#B8956B] mb-3" aria-hidden="true" />
          <h3 className="font-serif text-lg text-[#1B4332] mb-2">Who We Look For</h3>
          <p className="font-sans text-sm text-[#1B4332]/70 leading-relaxed">
            Professionals with 5+ years in investment sales, asset management, valuation, or capital markets advisory.
          </p>
        </div>
        <div>
          <Award className="w-6 h-6 text-[#B8956B] mb-3" aria-hidden="true" />
          <h3 className="font-serif text-lg text-[#1B4332] mb-2">What We Offer</h3>
          <p className="font-sans text-sm text-[#1B4332]/70 leading-relaxed">
            Direct mandate ownership, transparent economics, and a platform to build cross-border institutional relationships.
          </p>
        </div>
        <div>
          <Building2 className="w-6 h-6 text-[#B8956B] mb-3" aria-hidden="true" />
          <h3 className="font-serif text-lg text-[#1B4332] mb-2">Where We Hire</h3>
          <p className="font-sans text-sm text-[#1B4332]/70 leading-relaxed">
            Nairobi, Dubai, London, and Singapore, with priority given to candidates fluent in regional market dynamics.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6 md:px-12 text-center">
        <a
          href="mailto:careers@murivest.com"
          className="inline-block font-sans text-xs font-semibold uppercase tracking-[0.15em] text-white bg-[#1B4332] px-8 py-4 hover:bg-[#153726] transition-colors"
        >
          Submit Your Profile
        </a>
      </section>
    </div>
  )
}
