import type { Metadata } from 'next'
import { Building2, Landmark, Scale, Globe2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Strategic Partners | Murivest Advisory',
  description: 'The legal, financial, and institutional partners that support Murivest mandates across borders.',
}

const partnerCategories = [
  {
    icon: Landmark,
    title: 'Banking & Finance',
    description: 'Correspondent relationships with regional and international banks providing structured debt, escrow, and treasury services for cross-border transactions.',
  },
  {
    icon: Scale,
    title: 'Legal & Tax Advisory',
    description: 'Panel counsel across Kenya, the UAE, the UK, and Singapore ensuring every mandate is structured for regulatory and tax efficiency.',
  },
  {
    icon: Building2,
    title: 'Valuation & Surveying',
    description: 'RICS-accredited valuation partners providing independent asset appraisals for underwriting and lender due diligence.',
  },
  {
    icon: Globe2,
    title: 'Institutional Capital',
    description: 'Relationships with sovereign wealth desks, family offices, and pension allocators seeking direct and co-investment exposure to African and Gulf real estate.',
  },
]

export default function PartnersPage() {
  return (
    <div className="bg-[#FAF9F6]">
      <section className="bg-[#1B4332] text-white pt-36 pb-20 px-6 md:px-12 text-center">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B8956B]">
          People — Partners
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mt-6 max-w-3xl mx-auto text-balance">
          Strategic Alliances
        </h1>
        <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed mt-6 max-w-2xl mx-auto text-pretty">
          Murivest mandates are underpinned by a network of legal, financial, and institutional partners across every market we serve.
        </p>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {partnerCategories.map((p) => (
          <div key={p.title} className="flex items-start gap-4">
            <p.icon className="w-6 h-6 text-[#B8956B] mt-1 shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-serif text-xl text-[#1B4332]">{p.title}</h3>
              <p className="font-sans text-sm text-[#1B4332]/70 leading-relaxed mt-2">{p.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
