import type { Metadata } from 'next'
import Contact from '../../components/Contact'

export const metadata: Metadata = {
  title: 'Contact Murivest Realty Group - Premier Real Estate Investment Consultations',
  description: 'Get in touch with Kenya\'s leading commercial real estate investment firm. Schedule a private consultation with our expert team. Offices in Nairobi, serving international investors worldwide.',
  keywords: 'contact Murivest Realty Group, real estate consultation Kenya, property investment advice Kenya, commercial real estate experts Kenya, investment consultation Nairobi, property advisory services Kenya',
  openGraph: {
    title: 'Contact Murivest Realty Group - Premier Real Estate Investment Consultations',
    description: 'Get in touch with Kenya\'s leading commercial real estate investment firm.',
    images: ['/image.png'],
  },
}

export default function ContactPage() {
  return <Contact />
}