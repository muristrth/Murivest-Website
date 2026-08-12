import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { Video, Youtube, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Video Commentary | Murivest Research',
  description: 'Video market briefings and commentary from the Murivest advisory team.',
}

export default function VideosPage() {
  return (
    <InstitutionalPage
      eyebrow="Research — Video Commentary"
      title="Video Market Briefings"
      subtitle="Short-form video commentary on market conditions from the Murivest advisory team, published on our official channels."
      sections={[
        {
          eyebrow: 'Where to Watch',
          title: 'Video content is published on our YouTube channel',
          body: [
            'We publish video market briefings and commentary directly to our YouTube channel as they are recorded. This page will host embedded briefings as our video library grows.',
          ],
          cards: [
            {
              icon: Youtube,
              title: 'Murivest on YouTube',
              description: 'Subscribe for market briefings, transaction retrospectives, and advisory commentary as they are published.',
              href: 'https://www.youtube.com/@murivestrealty',
            },
            {
              icon: Calendar,
              title: 'New Briefings',
              description: 'Video commentary is recorded to accompany our quarterly market reports.',
            },
            {
              icon: Video,
              title: 'Written Research',
              description: 'Prefer to read? Our written research archive is updated more frequently than video.',
              href: '/research',
            },
          ],
          columns: 3,
        },
      ]}
      cta={{
        title: 'Follow our video commentary',
        body: 'Subscribe on YouTube to be notified when new market briefings are published.',
        primary: { label: 'Visit YouTube Channel', href: 'https://www.youtube.com/@murivestrealty' },
        secondary: { label: 'Research Archive', href: '/research' },
      }}
    />
  )
}
