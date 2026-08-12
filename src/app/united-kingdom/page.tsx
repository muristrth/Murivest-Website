import type { Metadata } from 'next'
import MarketPage from '@/components/public/MarketPage'
export const metadata: Metadata = { title: 'United Kingdom Commercial Property Advisory | Murivest', description: 'Mandate-led commercial real estate advisory and cross-border research for the United Kingdom.' }
export default function Page() { return <MarketPage market={{ name: 'United Kingdom', region: 'Western Europe', href: '/united-kingdom', detail: 'London and regional cities · Cross-border intelligence' }} sectors={['Office and mixed-use', 'Industrial and logistics', 'Development strategy', 'Occupier requirements']} intro="A focused window into UK commercial property for investors and occupiers seeking local context, disciplined screening, and clear next steps." /> }
