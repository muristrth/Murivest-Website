import type { Metadata } from 'next'
import { MapPin, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers | Murivest Advisory',
  description: 'Current vacancies at Murivest Realty Group across Nairobi, Dubai, London, and Singapore.',
}

const openPositions = [
  { title: 'Senior Investment Analyst', location: 'Nairobi, Kenya', type: 'Full-time' },
  { title: 'Associate, Asset Management', location: 'Nairobi, Kenya', type: 'Full-time' },
  { title: 'Business Development Manager — Gulf Capital', location: 'Dubai, UAE', type: 'Full-time' },
  { title: 'Research Analyst, CRE Markets', location: 'Nairobi, Kenya', type: 'Full-time' },
]

export default function CareersPage() {
  return (
    <div className="bg-[#FAF9F6]">
      <section className="bg-[#1B4332] text-white pt-36 pb-20 px-6 md:px-12 text-center">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B8956B]">
          Careers — Open Positions
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mt-6 max-w-3xl mx-auto text-balance">
          Build Your Career at Murivest
        </h1>
        <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed mt-6 max-w-2xl mx-auto text-pretty">
          We are always looking for disciplined, analytical talent to join our advisory practice across East Africa and the Gulf.
        </p>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-[#1B4332] mb-10">Current Vacancies</h2>
        <div className="space-y-4">
          {openPositions.map((p) => (
            <div key={p.title} className="flex items-center justify-between border border-[#1B4332]/10 rounded-sm p-6 hover:border-[#B8956B]/40 transition-colors">
              <div>
                <h3 className="font-serif text-lg text-[#1B4332]">{p.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-xs text-[#1B4332]/60 font-sans uppercase tracking-[0.1em]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    {p.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
                    {p.type}
                  </span>
                </div>
              </div>
              <a
                href="mailto:careers@murivest.com"
                className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-[#B8956B] hover:underline shrink-0"
              >
                Apply →
              </a>
            </div>
          ))}
        </div>
        <p className="font-sans text-sm text-[#1B4332]/60 mt-10 text-center">
          Don&apos;t see a fit?{' '}
          <a href="mailto:careers@murivest.com" className="text-[#B8956B] hover:underline">
            Send us your CV
          </a>{' '}
          for future consideration.
        </p>
      </section>
    </div>
  )
}
