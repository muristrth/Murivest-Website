import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { Leaf, Gauge, FileBarChart, Recycle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sustainability & ESG Advisory | Murivest Advisory',
  description: 'ESG and sustainability advisory for commercial real estate — energy performance, retrofit planning, and regulatory readiness.',
}

export default function SustainabilityPage() {
  return (
    <InstitutionalPage
      eyebrow="Specialist — Sustainability"
      title="ESG & Sustainability Advisory"
      subtitle="Non-compliant, energy-inefficient assets are increasingly stranded assets. We advise owners on regulatory readiness, retrofit economics, and the value impact of ESG positioning."
      sections={[
        {
          eyebrow: 'Why It Matters',
          title: 'Sustainability as a value driver, not a checkbox',
          body: [
            'Energy efficiency standards, green building certification, and tenant ESG expectations increasingly influence rent, occupancy, and exit value.',
            'We assess assets against current and anticipated regulatory thresholds and model the cost and value case for retrofit versus disposal.',
          ],
        },
        {
          eyebrow: 'Scope',
          title: 'What our sustainability advisory covers',
          columns: 4,
          cards: [
            { icon: Gauge, title: 'Energy Performance Review', description: 'Benchmarking current energy performance against regulatory thresholds.' },
            { icon: Recycle, title: 'Retrofit Economics', description: 'Modelling the cost and payback of retrofit interventions.' },
            { icon: FileBarChart, title: 'Regulatory Readiness', description: 'Assessing exposure to upcoming efficiency and disclosure requirements.' },
            { icon: Leaf, title: 'Green Premium Positioning', description: 'Advising on certification and positioning to capture rental premiums.' },
          ],
        },
      ]}
      cta={{
        title: 'Assessing an asset\'s ESG exposure?',
        body: 'Our sustainability advisory works alongside due diligence to build a defensible retrofit case.',
        primary: { label: 'Contact Advisory', href: '/contact' },
        secondary: { label: 'Due Diligence', href: '/due-diligence' },
      }}
    />
  )
}
