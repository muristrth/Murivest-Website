import type { Metadata } from 'next'
import { GraduationCap, TrendingUp, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Graduate Programme | Murivest Advisory',
  description: 'The Murivest Analyst Track — a two-year rotational graduate programme in commercial real estate advisory.',
}

const rotations = [
  { year: 'Year 1, Rotation 1', desc: 'Investment Sales & Underwriting — deal sourcing, financial modeling, and market research.' },
  { year: 'Year 1, Rotation 2', desc: 'Asset & Property Management — portfolio reporting, tenant relations, and valuation support.' },
  { year: 'Year 2, Rotation 1', desc: 'Research & Market Intelligence — authoring market reports and investor-facing analysis.' },
  { year: 'Year 2, Rotation 2', desc: 'Client Advisory — direct mandate exposure with senior advisors on live transactions.' },
]

export default function GraduatePage() {
  return (
    <div className="bg-[#FAF9F6]">
      <section className="bg-[#1B4332] text-white pt-36 pb-20 px-6 md:px-12 text-center">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B8956B]">
          Careers — Graduate Programme
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mt-6 max-w-3xl mx-auto text-balance">
          The Analyst Track
        </h1>
        <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed mt-6 max-w-2xl mx-auto text-pretty">
          A two-year rotational programme for exceptional graduates entering commercial real estate advisory.
        </p>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="flex items-start gap-3">
            <GraduationCap className="w-5 h-5 text-[#B8956B] mt-1 shrink-0" aria-hidden="true" />
            <p className="font-sans text-sm text-[#1B4332]/70 leading-relaxed">Open to graduates in finance, economics, real estate, or related disciplines.</p>
          </div>
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-[#B8956B] mt-1 shrink-0" aria-hidden="true" />
            <p className="font-sans text-sm text-[#1B4332]/70 leading-relaxed">Structured mentorship with direct exposure to live institutional mandates.</p>
          </div>
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-[#B8956B] mt-1 shrink-0" aria-hidden="true" />
            <p className="font-sans text-sm text-[#1B4332]/70 leading-relaxed">Cohort-based intake with peer learning and cross-market rotations.</p>
          </div>
        </div>

        <h2 className="font-serif text-2xl text-[#1B4332] mb-8">Programme Structure</h2>
        <div className="space-y-6">
          {rotations.map((r) => (
            <div key={r.year} className="border-l-2 border-[#B8956B] pl-6">
              <span className="font-sans text-xs uppercase tracking-[0.15em] text-[#B8956B]">{r.year}</span>
              <p className="font-sans text-sm text-[#1B4332]/80 leading-relaxed mt-1">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="mailto:careers@murivest.com"
            className="inline-block font-sans text-xs font-semibold uppercase tracking-[0.15em] text-white bg-[#1B4332] px-8 py-4 hover:bg-[#153726] transition-colors"
          >
            Apply to the Graduate Programme
          </a>
        </div>
      </section>
    </div>
  )
}
