import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { Building2, TrendingUp, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Real Estate Insights | Murivest Research',
  description: 'Sector-level commentary on commercial real estate — office, retail, industrial, and mixed-use fundamentals.',
}

export default function InsightsCrePage() {
  return (
    <InstitutionalPage
      eyebrow="Research — CRE Insights"
      title="Commercial Real Estate Sector Commentary"
      subtitle="Sector-specific analysis of the fundamentals driving office, retail, industrial, and mixed-use commercial real estate."
      sections={[
        {
          eyebrow: 'Sector Lens',
          title: 'How we frame CRE sector commentary',
          body: [
            'Each asset class has a distinct demand driver and risk profile. We track occupier sentiment, supply pipeline, and financing conditions by sector rather than treating commercial real estate as a monolith.',
            'Our commentary is written for principals evaluating an acquisition or disposal decision, not as generic thought leadership.',
          ],
        },
        {
          eyebrow: 'Sectors We Track',
          title: 'Core commercial asset classes',
          columns: 3,
          cards: [
            { icon: Building2, title: 'Office', description: 'Occupier demand shifts, grade differentiation, and lease structure trends.' },
            { icon: Layers, title: 'Industrial & Logistics', description: 'Supply chain-driven demand and yield compression in logistics assets.' },
            { icon: TrendingUp, title: 'Retail & Mixed-Use', description: 'Footfall recovery, repositioning, and mixed-use densification.' },
          ],
        },
      ]}
      cta={{
        title: 'Explore our full research archive',
        body: 'Sector commentary sits alongside our broader market reports and transaction analysis.',
        primary: { label: 'View Research Archive', href: '/research' },
        secondary: { label: 'Market Reports', href: '/research/reports' },
      }}
    />
  )
}
