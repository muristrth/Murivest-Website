import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { FileText, Calendar, Globe2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Market Reports | Murivest Research',
  description: 'Quarterly market outlooks and structural analysis of commercial real estate markets we cover.',
}

export default function ResearchReportsPage() {
  return (
    <InstitutionalPage
      eyebrow="Research — Market Reports"
      title="Quarterly Market Reports"
      subtitle="Structural analysis of capital flows, pricing, and occupier demand across the commercial real estate markets we cover."
      sections={[
        {
          eyebrow: 'What We Publish',
          title: 'Grounded in transaction evidence, not consensus commentary',
          body: [
            'Our market reports draw on our own deal flow, underwriting archive, and direct market monitoring rather than syndicated third-party data alone.',
            'Reports are published on a quarterly cadence, with interim notes issued when material market shifts warrant commentary ahead of schedule.',
          ],
        },
        {
          eyebrow: 'Coverage',
          title: 'What each report covers',
          columns: 3,
          cards: [
            { icon: Globe2, title: 'Capital Flows', description: 'Tracking institutional and private capital movement across covered markets.' },
            { icon: FileText, title: 'Pricing & Yields', description: 'Cap rate movement and pricing evidence from active transactions.' },
            { icon: Calendar, title: 'Forward Outlook', description: 'A structural view of demand and supply over the coming quarters.' },
          ],
        },
      ]}
      cta={{
        title: 'Read our latest published research',
        body: 'The full research archive, including our most recent market analysis, is available in the research library.',
        primary: { label: 'View Research Archive', href: '/research' },
        secondary: { label: 'CRE Insights', href: '/insights-cre' },
      }}
    />
  )
}
