'use client'

import Link from 'next/link'
import { ArrowUpRight, Menu, Search, ShieldCheck, X } from 'lucide-react'
import { useState } from 'react'

const markets = [
  { name: 'Kenya', region: 'East Africa', href: '/kenya', detail: 'Nairobi headquarters · Commercial property advisory' },
  { name: 'United Arab Emirates', region: 'Gulf', href: '/united-arab-emirates', detail: 'Dubai and Abu Dhabi · Mandate-led market access' },
  { name: 'United Kingdom', region: 'Western Europe', href: '/united-kingdom', detail: 'London and regional cities · Cross-border intelligence' },
  { name: 'Singapore', region: 'Southeast Asia', href: '/singapore', detail: 'Institutional gateway · Research and advisory' },
]

const services = ['Acquisition advisory', 'Disposition strategy', 'Capital introductions', 'Commercial property research']

export function PublicHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--mv-line)] bg-[var(--mv-cream)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-[var(--mv-forest)]" onClick={() => setOpen(false)}>
          <span className="font-serif text-xl tracking-tight">Murivest</span>
          <span className="hidden border-l border-[var(--mv-brass)] pl-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--mv-muted)] sm:inline">Realty Group</span>
        </Link>
        <nav className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--mv-muted)] lg:flex">
          <Link href="/markets" className="hover:text-[var(--mv-forest)]">Markets</Link>
          <Link href="/about" className="hover:text-[var(--mv-forest)]">About</Link>
          <Link href="/leadership" className="hover:text-[var(--mv-forest)]">Leadership</Link>
          <Link href="/research" className="hover:text-[var(--mv-forest)]">Research</Link>
          <Link href="/contact" className="flex items-center gap-2 bg-[var(--mv-forest)] px-4 py-3 text-[var(--mv-cream)] hover:bg-[var(--mv-forest-light)]">Private enquiry <ArrowUpRight size={14} /></Link>
        </nav>
        <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} className="text-[var(--mv-forest)] lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="flex flex-col gap-1 border-t border-[var(--mv-line)] bg-[var(--mv-cream)] px-5 py-4 lg:hidden">
        {['Markets', 'About', 'Leadership', 'Research', 'Contact'].map((item) => <Link key={item} href={item === 'Markets' ? '/markets' : `/${item.toLowerCase()}`} onClick={() => setOpen(false)} className="py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--mv-forest)]">{item}</Link>)}
      </nav>}
    </header>
  )
}

export function PublicFooter() {
  return <footer className="border-t border-[var(--mv-line)] bg-[var(--mv-forest)] text-[var(--mv-cream)]">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
      <div><p className="font-serif text-2xl">Murivest</p><p className="mt-4 max-w-sm text-sm leading-7 text-[var(--mv-cream)]/70">An independent, Nairobi-founded commercial real estate advisory practice. Engagements are mandate-led, confidential, and subject to appropriate KYC.</p><p className="mt-6 text-[10px] uppercase tracking-[0.18em] text-[var(--mv-brass-light)]">Westlands · Nairobi · Kenya</p></div>
      <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--mv-brass-light)]">Explore</p><div className="mt-5 flex flex-col gap-3 text-sm text-[var(--mv-cream)]/75"><Link href="/markets">Markets</Link><Link href="/about">About</Link><Link href="/leadership">Leadership</Link><Link href="/research">Research</Link><Link href="/contact">Contact</Link></div></div>
      <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--mv-brass-light)]">Disclosure</p><p className="mt-5 text-sm leading-7 text-[var(--mv-cream)]/70">Murivest does not operate collective investment schemes, pool investor capital, or offer regulated financial products. Property availability and market information are subject to verification and formal engagement.</p><Link href="/legal/privacy" className="mt-4 inline-block text-sm text-[var(--mv-cream)] underline underline-offset-4">Privacy notice</Link></div>
    </div>
    <div className="border-t border-[var(--mv-cream)]/10 px-5 py-5 text-center text-[10px] uppercase tracking-[0.16em] text-[var(--mv-cream)]/45">© 2025 Murivest Realty Group Ltd · Founded in Nairobi</div>
  </footer>
}

export function PublicPage({ children }: { children: React.ReactNode }) { return <div className="bg-[var(--mv-cream)] text-[var(--mv-ink)]">{children}</div> }

export function Hero({ eyebrow, title, description, cta = 'Begin a private enquiry', href = '/contact' }: { eyebrow: string; title: string; description: string; cta?: string; href?: string }) {
  return <section className="bg-[var(--mv-forest)] text-[var(--mv-cream)]"><div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-32"><div><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--mv-brass-light)]">{eyebrow}</p><h1 className="mt-7 max-w-4xl font-serif text-4xl leading-[1.1] tracking-tight md:text-6xl">{title}</h1><p className="mt-8 max-w-2xl text-base leading-8 text-[var(--mv-cream)]/70">{description}</p><Link href={href} className="mt-10 inline-flex items-center gap-3 border border-[var(--mv-brass)] bg-[var(--mv-brass)] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--mv-forest)]">{cta}<ArrowUpRight size={15} /></Link></div><div className="flex items-end border-l border-[var(--mv-brass)]/40 pl-7 lg:pl-10"><div><p className="text-6xl font-serif text-[var(--mv-brass-light)]">2025</p><p className="mt-3 max-w-xs text-sm leading-6 text-[var(--mv-cream)]/65">Founded in Nairobi. Built for disciplined commercial property mandates and cross-border referral.</p></div></div></div></section>
}

export function TrustStrip() { return <div className="border-b border-[var(--mv-line)] bg-[var(--mv-paper)]"><div className="mx-auto flex max-w-7xl flex-wrap gap-x-10 gap-y-3 px-5 py-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--mv-muted)] lg:px-8"><span className="flex items-center gap-2"><ShieldCheck size={15} className="text-[var(--mv-brass)]" /> Mandate-based advisory</span><span>Westlands, Nairobi headquarters</span><span>NDA / KYC subject to engagement</span><span>Verified opportunities only</span></div></div> }

export function MarketCards() { return <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="flex items-end justify-between gap-6"><div><p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--mv-brass)]">Local intelligence, connected</p><h2 className="mt-4 font-serif text-4xl text-[var(--mv-forest)]">Our market windows</h2></div><Link href="/markets" className="hidden text-xs font-semibold uppercase tracking-[0.14em] text-[var(--mv-forest)] sm:flex sm:items-center sm:gap-2">View all markets <ArrowUpRight size={14} /></Link></div><div className="mt-10 grid gap-px overflow-hidden border border-[var(--mv-line)] bg-[var(--mv-line)] md:grid-cols-2">{markets.map((market) => <Link key={market.name} href={market.href} className="group bg-[var(--mv-cream)] p-7 transition-colors hover:bg-[var(--mv-forest)] hover:text-[var(--mv-cream)]"><div className="flex items-start justify-between"><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--mv-brass)]">{market.region}</p><ArrowUpRight size={17} className="text-[var(--mv-brass)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div><h3 className="mt-12 font-serif text-3xl">{market.name}</h3><p className="mt-3 text-sm leading-6 text-[var(--mv-muted)] group-hover:text-[var(--mv-cream)]/65">{market.detail}</p><p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--mv-forest)] group-hover:text-[var(--mv-brass-light)]">Mandate window open</p></Link>)}</div></section> }

export function Disclosure({ children = 'Listings, market figures, partner relationships, and availability are subject to verification and formal engagement.' }: { children?: React.ReactNode }) { return <p className="border-l-2 border-[var(--mv-brass)] pl-4 text-xs leading-6 text-[var(--mv-muted)]">{children}</p> }

export { markets, services }
