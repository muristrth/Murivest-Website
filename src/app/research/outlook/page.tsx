import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { Globe, ArrowLeftRight, Compass } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Global Outlook | Murivest Research',
  description: 'Cross-border perspective on capital flows and commercial real estate conditions across our covered markets.',
}

export default function OutlookPage() {
  return (
    <InstitutionalPage
      eyebrow="Research — Global Outlook"
      title="Cross-Border Market Outlook"
      subtitle="A forward view of how capital, occupier demand, and regulatory conditions are shifting across the markets we cover — East Africa, the Gulf, the UK, and Southeast Asia."
      sections={[
        {
          eyebrow: 'Why Cross-Border',
          title: 'Capital moves across borders, not within silos',
          body: [
            'Institutional and private capital increasingly allocates across multiple geographies in a single strategy. Our outlook tracks how relative pricing, currency, and regulatory conditions shift capital between our covered markets.',
            'This is a directional view intended to inform allocation conversations, not a substitute for market-specific due diligence.',
          ],
        },
        {
          eyebrow: 'Markets in Focus',
          title: 'Where we track cross-border flow',
          columns: 4,
          cards: [
            { icon: Compass, title: 'East Africa', description: 'Nairobi-anchored demand and regional infrastructure-led growth.' },
            { icon: Globe, title: 'Gulf & Middle East', description: 'Dubai as a capital gateway between East Africa, Asia, and Europe.' },
            { icon: ArrowLeftRight, title: 'United Kingdom', description: 'London as a mature, liquidity-deep comparator market.' },
            { icon: Globe, title: 'Southeast Asia', description: 'Singapore-anchored capital and logistics demand.' },
          ],
        },
      ]}
      cta={{
        title: 'See our market-specific coverage',
        body: 'Drill into any of our covered markets for country-specific listings and analysis.',
        primary: { label: 'Explore Markets', href: '/markets' },
        secondary: { label: 'Research Archive', href: '/research' },
      }}
    />
  )
}
