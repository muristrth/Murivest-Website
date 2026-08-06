import type { Metadata } from 'next'
import Contact from '../../components/Contact'
import {
  professionalServiceSchema,
  breadcrumbSchema,
  jsonLd,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact Murivest Realty Group - Premier Real Estate Investment Consultations',
  description:
    'Contact Murivest, East Africa\'s premier commercial real estate investment advisory. Schedule private consultations for institutional investors, family offices and UHNWI seeking acquisition advisory, capital markets, and development strategy across Kenya, UAE, UK, US and Singapore markets. Mandate-based engagements only.',
  keywords:
    'contact Murivest Realty Group, real estate consultation Kenya, property investment advice Kenya, commercial real estate experts Kenya, investment consultation Nairobi, property advisory services Africa, institutional real estate contact, mandate submission',
  openGraph: {
    title: 'Contact Murivest - Institutional Real Estate Advisory',
    description:
      'Private consultation for institutional real estate investment across East Africa, Middle East, Europe and Asia Pacific. Mandate-based advisory for qualified investors only.',
    images: ['/image.webp'],
  },
}

const contactSchema = professionalServiceSchema({
  '@id': 'https://murivest.com/#contact',
  name: 'Murivest Realty Group - Contact',
  description:
    'Schedule a private consultation with Murivest\'s investment advisory team. Mandate-based engagements for institutional investors, family offices, and UHNWI.',
  telephone: '+254-115-277-610',
  email: 'capital@murivest.co.ke',
})

export default function ContactPage() {
  return (
    <>
      {jsonLd(contactSchema)}
      {jsonLd(breadcrumbSchema([
        { name: 'Home', item: 'https://murivest.com' },
        { name: 'Contact', item: 'https://murivest.com/contact' },
      ]))}
      <Contact />
    </>
  )
}
