import type { Metadata } from 'next'
import { Users2, Globe2, ScaleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Diversity & Inclusion | Murivest Advisory',
  description: 'Murivest\u2019s commitment to diversity and inclusion across its offices in East Africa, the Gulf, Europe, and Asia.',
}

export default function DiversityPage() {
  return (
    <div className="bg-[#FAF9F6]">
      <section className="bg-[#1B4332] text-white pt-36 pb-20 px-6 md:px-12 text-center">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B8956B]">
          Careers — Diversity
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mt-6 max-w-3xl mx-auto text-balance">
          Diversity & Inclusion
        </h1>
        <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed mt-6 max-w-2xl mx-auto text-pretty">
          Operating across four continents, our strength comes from the diversity of perspective across our advisory teams.
        </p>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <Globe2 className="w-6 h-6 text-[#B8956B] mb-3" aria-hidden="true" />
          <h3 className="font-serif text-lg text-[#1B4332] mb-2">Global by Design</h3>
          <p className="font-sans text-sm text-[#1B4332]/70 leading-relaxed">
            Our teams span East Africa, the Gulf, Europe, and Asia — bringing distinct market fluency to every mandate.
          </p>
        </div>
        <div>
          <Users2 className="w-6 h-6 text-[#B8956B] mb-3" aria-hidden="true" />
          <h3 className="font-serif text-lg text-[#1B4332] mb-2">Inclusive Recruitment</h3>
          <p className="font-sans text-sm text-[#1B4332]/70 leading-relaxed">
            We recruit on merit and market insight, actively broadening the pool of candidates we consider for every role.
          </p>
        </div>
        <div>
          <ScaleIcon className="w-6 h-6 text-[#B8956B] mb-3" aria-hidden="true" />
          <h3 className="font-serif text-lg text-[#1B4332] mb-2">Equal Opportunity</h3>
          <p className="font-sans text-sm text-[#1B4332]/70 leading-relaxed">
            Murivest is an equal opportunity employer committed to fair advancement across all levels of the firm.
          </p>
        </div>
      </section>
    </div>
  )
}
