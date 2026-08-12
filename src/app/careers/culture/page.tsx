import type { Metadata } from 'next'
import { ShieldCheck, Handshake, LineChart, Compass } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Values | Murivest Advisory',
  description: 'The values and working environment that define Murivest Realty Group.',
}

const values = [
  { icon: ShieldCheck, title: 'Integrity', desc: 'We advise with independence, disclosing conflicts and putting client interests first in every mandate.' },
  { icon: LineChart, title: 'Analytical Rigor', desc: 'Every recommendation is grounded in underwriting discipline and defensible market data.' },
  { icon: Handshake, title: 'Long-Term Relationships', desc: 'We measure success by repeat mandates and multi-decade institutional trust, not single transactions.' },
  { icon: Compass, title: 'Market Fluency', desc: 'We invest in deep, on-the-ground knowledge of every market we advise in.' },
]

export default function CulturePage() {
  return (
    <div className="bg-[#FAF9F6]">
      <section className="bg-[#1B4332] text-white pt-36 pb-20 px-6 md:px-12 text-center">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B8956B]">
          Careers — Our Values
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mt-6 max-w-3xl mx-auto text-balance">
          Values & Environment
        </h1>
        <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed mt-6 max-w-2xl mx-auto text-pretty">
          The principles that shape how we advise clients and work with each other.
        </p>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {values.map((v) => (
          <div key={v.title} className="flex items-start gap-4">
            <v.icon className="w-6 h-6 text-[#B8956B] mt-1 shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-serif text-xl text-[#1B4332]">{v.title}</h3>
              <p className="font-sans text-sm text-[#1B4332]/70 leading-relaxed mt-2">{v.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
