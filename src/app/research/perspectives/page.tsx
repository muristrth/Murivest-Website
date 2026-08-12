import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { Mic, Users, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Leadership Perspectives | Murivest Research',
  description: 'Executive briefings and perspectives from Murivest advisory leadership on market conditions and transaction structuring.',
}

export default function PerspectivesPage() {
  return (
    <InstitutionalPage
      eyebrow="Research — Perspectives"
      title="Executive Perspectives"
      subtitle="Direct commentary from Murivest advisory leadership on market conditions, transaction structuring, and where we see risk building or easing."
      sections={[
        {
          eyebrow: 'Why Perspectives',
          title: 'Commentary from the people executing the mandates',
          body: [
            'Perspectives are written by the advisors and partners actively structuring transactions — not a separate research desk removed from live deal flow.',
            'Expect a point of view, not just a summary of consensus data.',
          ],
        },
        {
          eyebrow: 'Format',
          title: 'How perspectives are delivered',
          columns: 3,
          cards: [
            { icon: Mic, title: 'Executive Briefings', description: 'Short-form commentary on live market conditions.' },
            { icon: MessageSquare, title: 'Deal Retrospectives', description: 'What a completed mandate revealed about the market.' },
            { icon: Users, title: 'Leadership Roundtables', description: 'Cross-market discussion among senior advisors.' },
          ],
        },
      ]}
      cta={{
        title: 'Read our latest commentary',
        body: 'Executive perspectives are published alongside our broader research archive.',
        primary: { label: 'View Research Archive', href: '/research' },
        secondary: { label: 'Meet the Team', href: '/people' },
      }}
    />
  )
}
