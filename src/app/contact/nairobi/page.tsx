import type { Metadata } from 'next'
import { MapPin, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Nairobi | Murivest Advisory',
  description: 'Contact Murivest\u2019s private Nairobi office for institutional advisory enquiries.',
}

export default function ContactNairobiPage() {
  return (
    <div className="bg-[#FAF9F6]">
      <section className="bg-[#1B4332] text-white pt-36 pb-20 px-6 md:px-12 text-center">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B8956B]">
          Contact — Nairobi
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mt-6 max-w-3xl mx-auto text-balance">
          Private Office, Nairobi
        </h1>
        <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed mt-6 max-w-2xl mx-auto text-pretty">
          Speak directly with our Nairobi advisory team for confidential, mandate-based engagements.
        </p>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-2xl mx-auto space-y-6">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[#B8956B] mt-0.5 shrink-0" aria-hidden="true" />
          <span className="font-sans text-sm text-[#1B4332]/80 leading-relaxed">Westlands Business District, Nairobi, Kenya</span>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-[#B8956B] mt-0.5 shrink-0" aria-hidden="true" />
          <a href="mailto:capital@murivest.co.ke" className="font-sans text-sm text-[#1B4332]/80 hover:text-[#B8956B]">
            capital@murivest.co.ke
          </a>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-[#B8956B] mt-0.5 shrink-0" aria-hidden="true" />
          <span className="font-sans text-sm text-[#1B4332]/80">+254 700 000 000</span>
        </div>
      </section>
    </div>
  )
}
