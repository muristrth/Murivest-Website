import type { Metadata } from 'next'
import { Wallet, HeartPulse, Plane, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Benefits | Murivest Advisory',
  description: 'Compensation and benefits offered to Murivest Realty Group employees.',
}

const benefits = [
  { icon: Wallet, title: 'Competitive Compensation', desc: 'Market-benchmarked base salary with performance and deal-linked bonus structures.' },
  { icon: HeartPulse, title: 'Health & Wellness', desc: 'Comprehensive medical cover for employees and dependents across all office locations.' },
  { icon: Plane, title: 'Cross-Border Mobility', desc: 'Opportunities to rotate across our Nairobi, Dubai, London, and Singapore desks.' },
  { icon: BookOpen, title: 'Professional Development', desc: 'Sponsorship for RICS, CFA, and other relevant professional qualifications.' },
]

export default function BenefitsPage() {
  return (
    <div className="bg-[#FAF9F6]">
      <section className="bg-[#1B4332] text-white pt-36 pb-20 px-6 md:px-12 text-center">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B8956B]">
          Careers — Benefits
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mt-6 max-w-3xl mx-auto text-balance">
          Compensation & Benefits
        </h1>
        <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed mt-6 max-w-2xl mx-auto text-pretty">
          We invest in our people with compensation and benefits that reflect the quality of talent we recruit.
        </p>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {benefits.map((b) => (
          <div key={b.title} className="flex items-start gap-4">
            <b.icon className="w-6 h-6 text-[#B8956B] mt-1 shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-serif text-xl text-[#1B4332]">{b.title}</h3>
              <p className="font-sans text-sm text-[#1B4332]/70 leading-relaxed mt-2">{b.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
