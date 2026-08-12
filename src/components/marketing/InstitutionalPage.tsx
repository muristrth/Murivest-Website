'use client'

import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

/**
 * Shared institutional marketing-page template.
 * Matches the brand system used by Header/Footer/Markets:
 * Forest #1B4332 · Brass #B8956B · Cream #FAF9F6 · Charcoal #1A1A1A
 */

export interface PageStat {
  value: string
  label: string
}

export interface PageCard {
  icon?: LucideIcon
  title: string
  description: string
  href?: string
  meta?: string
}

export interface PageSection {
  eyebrow?: string
  title: string
  body?: string[]
  cards?: PageCard[]
  columns?: 2 | 3 | 4
}

export interface InstitutionalPageProps {
  eyebrow: string
  title: string
  subtitle: string
  stats?: PageStat[]
  sections: PageSection[]
  cta?: {
    title: string
    body: string
    primary: { label: string; href: string }
    secondary?: { label: string; href: string }
  }
}

export default function InstitutionalPage({
  eyebrow,
  title,
  subtitle,
  stats,
  sections,
  cta,
}: InstitutionalPageProps) {
  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A]">
      {/* Hero */}
      <section className="bg-[#1B4332] text-white pt-36 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B8956B]">
            {eyebrow}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mt-6 text-balance">
            {title}
          </h1>
          <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed mt-6 max-w-2xl mx-auto text-pretty">
            {subtitle}
          </p>
        </div>

        {stats && stats.length > 0 && (
          <div className="max-w-4xl mx-auto mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#1B4332] px-4 py-6 text-center">
                <div className="font-serif text-2xl md:text-3xl text-[#B8956B]">{s.value}</div>
                <div className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/60 mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Content sections */}
      {sections.map((section, i) => (
        <section
          key={section.title}
          className={i % 2 === 1 ? 'bg-white' : 'bg-[#FAF9F6]'}
        >
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
            {section.eyebrow && (
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B8956B]">
                {section.eyebrow}
              </span>
            )}
            <h2 className="font-serif text-2xl md:text-3xl text-[#1B4332] mt-3 max-w-2xl text-balance">
              {section.title}
            </h2>

            {section.body && (
              <div className="mt-6 max-w-2xl space-y-4">
                {section.body.map((p, idx) => (
                  <p key={idx} className="font-sans text-[15px] leading-relaxed text-[#1A1A1A]/75">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {section.cards && section.cards.length > 0 && (
              <div
                className={`mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 ${
                  section.columns === 3
                    ? 'lg:grid-cols-3'
                    : section.columns === 4
                    ? 'lg:grid-cols-4'
                    : ''
                }`}
              >
                {section.cards.map((card) => {
                  const Icon = card.icon
                  const content = (
                    <div className="bg-white border border-[#1B4332]/10 p-7 h-full flex flex-col hover:border-[#B8956B]/50 transition-colors">
                      {Icon && <Icon className="w-6 h-6 text-[#B8956B] mb-4" strokeWidth={1.5} />}
                      <h3 className="font-serif text-lg text-[#1B4332]">{card.title}</h3>
                      {card.meta && (
                        <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-[#B8956B] mt-1">
                          {card.meta}
                        </span>
                      )}
                      <p className="font-sans text-sm text-[#1A1A1A]/70 leading-relaxed mt-3 flex-1">
                        {card.description}
                      </p>
                      {card.href && (
                        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1B4332] mt-5 inline-flex items-center gap-2">
                          Learn more <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  )
                  return card.href ? (
                    <Link key={card.title} href={card.href} className="block h-full">
                      {content}
                    </Link>
                  ) : (
                    <div key={card.title} className="h-full">
                      {content}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTA */}
      {cta && (
        <section className="bg-[#1A1A1A] text-white">
          <div className="max-w-3xl mx-auto px-6 md:px-12 py-20 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-balance">{cta.title}</h2>
            <p className="font-sans text-white/60 leading-relaxed mt-4 max-w-xl mx-auto text-pretty">
              {cta.body}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={cta.primary.href}
                className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] bg-[#B8956B] text-[#1A1A1A] px-8 py-4 hover:bg-white transition-colors"
              >
                {cta.primary.label}
              </Link>
              {cta.secondary && (
                <Link
                  href={cta.secondary.href}
                  className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] border border-white/25 text-white px-8 py-4 hover:border-white transition-colors"
                >
                  {cta.secondary.label}
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
