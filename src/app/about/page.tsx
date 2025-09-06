import type { Metadata } from 'next'
import About from '../../components/About'

export const metadata: Metadata = {
  title: 'About Murivest Realty Group - Premier Real Estate Investment Firm Kenya',
  description: 'Learn about Murivest Realty Group, Kenya\'s leading commercial real estate investment firm. Our heritage, values, and commitment to delivering exceptional returns for international investors.',
  keywords: 'about Murivest Realty Group, real estate investment firm Kenya, commercial property experts Kenya, property investment company Nairobi, real estate advisory Kenya, investment management Kenya',
  openGraph: {
    title: 'About Murivest Realty Group - Premier Real Estate Investment Firm Kenya',
    description: 'Learn about Murivest Realty Group, Kenya\'s leading commercial real estate investment firm.',
    images: ['/image.png'],
  },
}

export default function AboutPage() {
  return <About />
}