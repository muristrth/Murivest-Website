import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { HardHat, PencilRuler, Layers, Handshake } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Development Advisory | Murivest Advisory',
  description: 'Ground-up development and repositioning advisory, from feasibility through delivery, for commercial real estate mandates.',
}

export default function DevelopmentPage() {
  return (
    <InstitutionalPage
      eyebrow="Management — Development"
      title="Ground-Up Development & Repositioning Advisory"
      subtitle="Advisory support across the development lifecycle — feasibility, partner selection, and delivery oversight — for ground-up schemes and value-add repositioning."
      sections={[
        {
          eyebrow: 'How We Engage',
          title: 'From feasibility to delivery',
          body: [
            'Development mandates start with a feasibility view: highest-and-best-use analysis, indicative cost benchmarks, and a realistic view of achievable value on completion.',
            'Where a scheme proceeds, we support principal-side coordination of design, contractor, and financing counterparties through to delivery, without acting as the contractor or a licensed fund manager ourselves.',
          ],
        },
        {
          eyebrow: 'Scope',
          title: 'Where our development advisory adds value',
          columns: 4,
          cards: [
            { icon: PencilRuler, title: 'Feasibility Studies', description: 'Highest-and-best-use analysis and indicative development appraisals.' },
            { icon: HardHat, title: 'Delivery Coordination', description: 'Principal-side oversight of design and construction counterparties.' },
            { icon: Layers, title: 'Repositioning Strategy', description: 'Value-add and repositioning plans for underperforming assets.' },
            { icon: Handshake, title: 'Partner Selection', description: 'Sourcing and vetting contractors, JV partners, and financiers.' },
          ],
        },
      ]}
      cta={{
        title: 'Evaluating a development or repositioning opportunity?',
        body: 'Speak with our development advisory desk about feasibility and delivery structuring.',
        primary: { label: 'Contact Advisory', href: '/contact' },
        secondary: { label: 'Land Portfolio', href: '/land-portfolio' },
      }}
    />
  )
}
