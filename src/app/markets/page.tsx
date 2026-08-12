import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PublicPage, Hero, TrustStrip } from '@/components/public/PublicSite'

const marketWindows = [
  { name: 'Kenya', region: 'East Africa', href: '/kenya', detail: 'Nairobi headquarters · Commercial property advisory' },
  { name: 'United Arab Emirates', region: 'Gulf', href: '/united-arab-emirates', detail: 'Dubai and Abu Dhabi · Mandate-led market access' },
  { name: 'United Kingdom', region: 'Western Europe', href: '/united-kingdom', detail: 'London and regional cities · Cross-border intelligence' },
  { name: 'Singapore', region: 'Southeast Asia', href: '/singapore', detail: 'Institutional gateway · Research and advisory' },
]

export const metadata: Metadata = { title: 'Markets | Murivest', description: 'Selected commercial real estate market windows covered by Murivest.' }
export default function MarketsPage() { return <PublicPage><Hero eyebrow="Selected gateway markets" title="A connected view of commercial property." description="Explore our market windows. Public information is intentionally concise; detailed opportunities are shared privately after mandate definition and verification." /><TrustStrip /><section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="grid gap-px border border-[var(--mv-line)] bg-[var(--mv-line)] md:grid-cols-2">{marketWindows.map((m) => <Link href={m.href} key={m.name} className="group bg-[var(--mv-cream)] p-8 hover:bg-[var(--mv-forest)] hover:text-[var(--mv-cream)]"><p className="text-[10px] uppercase tracking-[0.2em] text-[var(--mv-brass)]">{m.region}</p><h2 className="mt-16 font-serif text-3xl">{m.name}</h2><p className="mt-3 text-sm text-[var(--mv-muted)] group-hover:text-[var(--mv-cream)]/65">{m.detail}</p><ArrowUpRight className="mt-8 text-[var(--mv-brass)]" /></Link>)}</div></section></PublicPage> }
