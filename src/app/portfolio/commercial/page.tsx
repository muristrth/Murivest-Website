import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { Building2, Warehouse, ShoppingBag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Portfolio | Murivest Advisory',
  description: 'Office, retail, and industrial commercial real estate mandates across our covered markets.',
}

export default function CommercialPortfolioPage() {
  return (
    <InstitutionalPage
      eyebrow="Portfolio — By Asset Class"
      title="Commercial: Office, Retail & Industrial"
      subtitle="Institutional-grade office, retail, and industrial mandates across East Africa, the Gulf, the UK, and Southeast Asia."
      sections={[
        {
          eyebrow: 'Coverage',
          title: 'The commercial asset classes we advise on',
          columns: 3,
          cards: [
            { icon: Building2, title: 'Office', description: 'Grade A and B office assets, from single-let to multi-tenant.' },
            { icon: ShoppingBag, title: 'Retail', description: 'High street, neighbourhood, and mixed-use retail assets.' },
            { icon: Warehouse, title: 'Industrial', description: 'Logistics, warehousing, and light industrial facilities.' },
          ],
        },
        {
          eyebrow: 'Where to Look',
          title: 'Browse commercial listings by market',
          body: [
            'Active commercial mandates are organised by market. Select a country to view current listings within office, retail, and industrial asset classes.',
          ],
        },
      ]}
      cta={{
        title: 'Explore commercial listings by market',
        body: 'Current mandates are organised by country — start with the market you are interested in.',
        primary: { label: 'Browse Markets', href: '/markets' },
        secondary: { label: 'Investment Sales', href: '/services/investment-sales' },
      }}
    />
  )
}
