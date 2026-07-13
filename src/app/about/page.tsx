import type { Metadata } from 'next'
import About from '../../components/About'
import {
  professionalServiceSchema,
  breadcrumbSchema,
  faqPageSchema,
  jsonLd,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Murivest Realty Group - Independent Advisory Firm Kenya',
  description:
    'Murivest Realty Group is an independent institutional commercial real estate advisory firm headquartered in Nairobi. Founded in 2015, we provide acquisition advisory, capital markets, and development strategy across East African markets to sovereign wealth funds, pension funds, and family offices. All engagements are mandate-based with full KYC/AML compliance.',
  keywords:
    'Murivest Realty Group, independent real estate advisory Kenya, commercial property advisory Nairobi, institutional real estate standards, mandate-based advisory East Africa, real estate consulting Africa, property investment advisory Kenya',
  openGraph: {
    title: 'About Murivest Realty Group - Institutional Advisory',
    description:
      'Independent commercial real estate advisory firm serving institutional investors across East Africa since 2015. Acquisition advisory, capital markets, and development strategy with full compliance standards.',
    images: ['/image.webp'],
  },
}

const aboutSchema = professionalServiceSchema({
  '@id': 'https://murivest.com/#organization',
  name: 'Murivest Realty Group',
  description:
    'Independent institutional commercial real estate advisory firm headquartered in Nairobi, providing acquisition advisory, capital markets, and development strategy.',
  foundingDate: '2015',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '45',
    unitText: 'professionals',
  },
  knowsAbout: [
    'Commercial Real Estate Advisory',
    'Capital Markets',
    'Investment Sales',
    'Tenant Representation',
    'Property Valuation',
    'Due Diligence',
    'Portfolio Strategy',
  ],
})

const aboutFaqs = [
  {
    question: 'What is Murivest Realty Group\'s investment philosophy?',
    answer:
      'Murivest operates on a research-first, mandate-based advisory model. We do not represent sellers or developers, ensuring every recommendation is aligned with the investor\'s objectives. Our underwriting standards mirror institutional investment committees, with full KYC/AML compliance on every engagement.',
  },
  {
    question: 'Which markets does Murivest operate in?',
    answer:
      'Murivest operates across East Africa (Kenya, Uganda, Rwanda, Tanzania), the Middle East (UAE, Saudi Arabia, Qatar), Asia Pacific (Singapore, Hong Kong), and Europe (UK). Each market is covered by local professionals with ground-level relationships.',
  },
  {
    question: 'What is the minimum investment size for advisory engagements?',
    answer:
      'Minimum engagement sizes vary by market and mandate type. For direct property acquisitions in Kenya, typical minimums start at USD 5M equivalent. For portfolio mandates and cross-border allocations, minimums are typically USD 25M+. Contact our team to discuss your specific requirements.',
  },
]

export default function AboutPage() {
  return (
    <>
      {jsonLd(aboutSchema)}
      {jsonLd(breadcrumbSchema([
        { name: 'Home', item: 'https://murivest.com' },
        { name: 'About', item: 'https://murivest.com/about' },
      ]))}
      {jsonLd(faqPageSchema(aboutFaqs))}
      <About />
    </>
  )
}
