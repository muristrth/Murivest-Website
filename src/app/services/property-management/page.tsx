import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { Wrench, Receipt, Users2, ClipboardCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Property Management | Murivest Advisory',
  description: 'Day-to-day operational management for commercial real estate assets — tenant relations, facilities, and service charge administration.',
}

export default function PropertyManagementPage() {
  return (
    <InstitutionalPage
      eyebrow="Management — Property Management"
      title="Operational Excellence at the Property Level"
      subtitle="Day-to-day operational management of commercial assets — tenant relations, facilities oversight, and service charge administration — coordinated with the owner's asset management strategy."
      sections={[
        {
          eyebrow: 'On the Ground',
          title: 'Operational management that protects income',
          body: [
            'Property management is where asset strategy meets daily reality. We coordinate facilities, security, and maintenance vendors while keeping the owner informed through structured reporting.',
            'Service charge budgets are prepared and reconciled transparently, with variance flagged before it becomes a dispute.',
          ],
        },
        {
          eyebrow: 'Core Functions',
          title: 'What day-to-day management covers',
          columns: 4,
          cards: [
            { icon: Wrench, title: 'Facilities Oversight', description: 'Coordinating maintenance, security, and vendor performance.' },
            { icon: Receipt, title: 'Service Charge Administration', description: 'Budgeting, billing, and year-end reconciliation.' },
            { icon: Users2, title: 'Tenant Relations', description: 'First point of contact for occupier issues and lease compliance.' },
            { icon: ClipboardCheck, title: 'Compliance & Reporting', description: 'Statutory compliance tracking and periodic owner reporting.' },
          ],
        },
      ]}
      cta={{
        title: 'Need day-to-day management for a commercial asset?',
        body: 'We coordinate closely with asset management to keep operations and strategy aligned.',
        primary: { label: 'Contact Advisory', href: '/contact' },
        secondary: { label: 'Asset Management', href: '/services/asset-management' },
      }}
    />
  )
}
