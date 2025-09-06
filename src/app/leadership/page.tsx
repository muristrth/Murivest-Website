import type { Metadata } from 'next'
import ExecutiveLeadership from '../../components/ExecutiveLeadership'

export const metadata: Metadata = {
  title: 'Executive Leadership Team - Murivest Realty Group Kenya',
  description: 'Meet the distinguished leadership team behind Kenya\'s premier commercial real estate investment firm. Decades of combined experience in international finance and African markets.',
  keywords: 'Murivest leadership team, real estate executives Kenya, property investment experts Kenya, commercial real estate leadership, investment firm executives Kenya, Mark Muriithi CEO',
  openGraph: {
    title: 'Executive Leadership Team - Murivest Realty Group Kenya',
    description: 'Meet the distinguished leadership team behind Kenya\'s premier commercial real estate investment firm.',
    images: ['/CEO.Founder.jpg'],
  },
}

export default function LeadershipPage() {
  return <ExecutiveLeadership />
}