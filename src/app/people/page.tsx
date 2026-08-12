import type { Metadata } from 'next'
import Team from '@/components/Team'

export const metadata: Metadata = {
  title: 'Advisors | Murivest Advisory',
  description: 'Meet the senior advisory team at Murivest Realty Group.',
}

export default function PeoplePage() {
  return (
    <div className="bg-[#FAF9F6]">
      <section className="bg-[#1B4332] text-white pt-36 pb-20 px-6 md:px-12 text-center">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B8956B]">
          People — Advisors
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mt-6 max-w-3xl mx-auto text-balance">
          Our Senior Team
        </h1>
        <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed mt-6 max-w-2xl mx-auto text-pretty">
          The advisors and specialists guiding institutional mandates across East Africa, the Gulf, and beyond.
        </p>
      </section>
      <Team />
    </div>
  )
}
