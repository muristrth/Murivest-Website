import type { Metadata } from 'next'
import { MapPin, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Dubai | Murivest Advisory',
  description: 'Contact Murivest\u2019s DIFC Gate Village office for Gulf institutional advisory enquiries.',
}

export default function ContactDubaiPage() {
  return (
    <div className="bg-[#FAF9F6]">
      <section className="bg-[#1B4332] text-white pt-36 pb-20 px-6 md:px-12 text-center">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B8956B]">
          Contact — Dubai
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mt-6 max-w-3xl mx-auto text-balance">
          DIFC Gate Village
        </h1>
        <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed mt-6 max-w-2xl mx-auto text-pretty">
          Speak directly with our Dubai desk for Gulf institutional and family office mandates.
        </p>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-2xl mx-auto space-y-6">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[#B8956B] mt-0.5 shrink-0" aria-hidden="true" />
          <span className="font-sans text-sm text-[#1B4332]/80 leading-relaxed">DIFC Gate Village, Dubai, United Arab Emirates</span>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-[#B8956B] mt-0.5 shrink-0" aria-hidden="true" />
          <a href="mailto:dubai@murivest.com" className="font-sans text-sm text-[#1B4332]/80 hover:text-[#B8956B]">
            dubai@murivest.com
          </a>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-[#B8956B] mt-0.5 shrink-0" aria-hidden="true" />
          <span className="font-sans text-sm text-[#1B4332]/80">+971 4 000 0000</span>
        </div>
      </section>
    </div>
  )
}
