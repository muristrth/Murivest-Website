import type { Metadata } from 'next'
import { Newspaper, Mail, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Press | Murivest Advisory',
  description: 'Media resources, press releases, and press contact information for Murivest Realty Group.',
}

const releases = [
  {
    date: 'March 2026',
    title: 'Murivest Expands Advisory Coverage to the United Arab Emirates',
    summary: 'Murivest opens a dedicated Dubai advisory desk to serve institutional capital seeking exposure to Gulf commercial real estate.',
  },
  {
    date: 'November 2025',
    title: 'Murivest Closes $42M Nairobi Logistics Portfolio Sale',
    summary: 'A cross-border institutional mandate concludes with the sale of a four-asset logistics portfolio in the Nairobi Northern Corridor.',
  },
  {
    date: 'August 2025',
    title: 'Murivest Launches East Africa Commercial Real Estate Outlook 2026',
    summary: 'Our annual flagship research report examines yield compression, capital flows, and asset-class performance across Kenya, Tanzania, and Uganda.',
  },
]

export default function PressPage() {
  return (
    <div className="bg-[#FAF9F6]">
      <section className="bg-[#1B4332] text-white pt-36 pb-20 px-6 md:px-12 text-center">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B8956B]">
          About — Press
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mt-6 max-w-3xl mx-auto text-balance">
          Press & Media
        </h1>
        <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed mt-6 max-w-2xl mx-auto text-pretty">
          Press releases, media resources, and press contact information for Murivest Realty Group.
        </p>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-[#1B4332] mb-10">Recent Releases</h2>
        <div className="space-y-8">
          {releases.map((r) => (
            <article key={r.title} className="border-b border-[#1B4332]/10 pb-8">
              <div className="flex items-start gap-4">
                <Newspaper className="w-5 h-5 text-[#B8956B] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <span className="font-sans text-xs uppercase tracking-[0.15em] text-[#B8956B]">{r.date}</span>
                  <h3 className="font-serif text-xl text-[#1B4332] mt-2">{r.title}</h3>
                  <p className="font-sans text-sm text-[#1B4332]/70 leading-relaxed mt-2">{r.summary}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-white border-t border-[#1B4332]/10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <Mail className="w-5 h-5 text-[#B8956B] mt-1 shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.1em] text-[#1B4332]">Media Inquiries</h3>
              <p className="font-sans text-sm text-[#1B4332]/70 leading-relaxed mt-2">
                For interview requests, commentary, or media inquiries, contact our press office.
              </p>
              <a href="mailto:press@murivest.com" className="font-sans text-sm font-semibold text-[#B8956B] mt-3 inline-block hover:underline">
                press@murivest.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Download className="w-5 h-5 text-[#B8956B] mt-1 shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.1em] text-[#1B4332]">Brand Assets</h3>
              <p className="font-sans text-sm text-[#1B4332]/70 leading-relaxed mt-2">
                Logos, executive headshots, and brand guidelines are available on request.
              </p>
              <a href="mailto:press@murivest.com" className="font-sans text-sm font-semibold text-[#B8956B] mt-3 inline-block hover:underline">
                Request Media Kit
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
