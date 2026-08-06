import type { Metadata } from 'next'
import InvestmentProcess from '../../components/sections/InvestmentProcess'
import {
  webPageSchema,
  breadcrumbSchema,
  serviceSchema,
  jsonLd,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Investment Process - How We Preserve & Grow Wealth | Murivest Realty',
  description: 'Discover our time-tested investment methodology for commercial real estate in Kenya. From due diligence to portfolio management, learn how we protect and multiply generational wealth.',
  keywords: 'real estate investment process Kenya, property investment methodology, commercial real estate due diligence Kenya, investment strategy Kenya, wealth preservation Kenya, property investment steps',
  openGraph: {
    title: 'Investment Process - How We Preserve & Grow Wealth | Murivest Realty',
    description: 'Discover our time-tested investment methodology for commercial real estate in Kenya.',
    images: ['/image.webp'],
  },
}

export default function ProcessPage() {
  return (
    <>
      {jsonLd(webPageSchema({
        '@id': 'https://murivest.com/#process',
        name: 'Investment Process',
        description: 'Murivest\'s six-phase investment methodology for commercial real estate advisory: mandate, research, shortlist, due diligence, IC paper, closing.',
      }))}
      {jsonLd(breadcrumbSchema([
        { name: 'Home', item: 'https://murivest.com' },
        { name: 'Investment Process', item: 'https://murivest.com/process' },
      ]))}
      {jsonLd(serviceSchema({
        name: 'Investment Advisory Process',
        description: 'End-to-end commercial real estate investment advisory process including mandate origination, market research, target identification, due diligence, negotiation and closing support.',
        url: 'https://murivest.com/process',
        providerName: 'Murivest Realty Group',
      }))}
      <InvestmentProcess />
    </>
  )
}
