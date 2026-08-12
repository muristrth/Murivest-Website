import type { Metadata } from 'next'
import HomePage from '@/components/public/HomePage'

export const metadata: Metadata = {
  title: 'Murivest | Commercial Real Estate Advisory from Nairobi',
  description: 'Independent, mandate-led commercial real estate advisory across Kenya, the United Arab Emirates, the United Kingdom, and Singapore.',
  alternates: { canonical: 'https://murivest.com' },
  openGraph: { title: 'Murivest | Local intelligence. Institutional discipline.', description: 'Commercial property advisory for defined mandates and verified opportunities.', url: 'https://murivest.com', siteName: 'Murivest', type: 'website' },
}

export default function Page() { return <HomePage /> }
