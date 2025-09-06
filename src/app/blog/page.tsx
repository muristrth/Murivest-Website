import type { Metadata } from 'next'
import Blog from '../../components/Blog'

export const metadata: Metadata = {
  title: 'Property Insights - Real Estate Investment Blog | Murivest Realty Group',
  description: 'Stay informed with the latest trends, analysis, and insights from Nairobi\'s real estate market. Expert commentary on REITs, commercial properties, residential investments, and data-driven insights to guide your investment decisions in Kenya.',
  keywords: 'real estate blog Kenya, property investment insights Kenya, REITs Kenya, commercial real estate trends Nairobi, residential property investment Kenya, property market analysis Kenya, real estate investment advice Kenya, Nairobi property market news, commercial property insights Kenya, apartment investment Kenya',
  openGraph: {
    title: 'Property Insights - Real Estate Investment Blog | Murivest Realty Group',
    description: 'Stay informed with the latest trends, analysis, and insights from Nairobi\'s real estate market.',
    images: ['/image.png'],
  },
}

export default function BlogPage() {
  return <Blog />
}