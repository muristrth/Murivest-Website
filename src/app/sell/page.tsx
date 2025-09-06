import type { Metadata } from 'next'
import SellProperty from '../../components/SellProperty'

export const metadata: Metadata = {
  title: 'Sell Your Property to Global Investors - Murivest Realty Group Kenya',
  description: 'Connect your premium commercial property with our exclusive network of international investors. Achieve maximum value with minimum effort through our global investor network.',
  keywords: 'sell commercial property Kenya, property sales Kenya, international property investors, commercial real estate sales Kenya, property valuation Kenya, sell office building Kenya',
  openGraph: {
    title: 'Sell Your Property to Global Investors - Murivest Realty Group Kenya',
    description: 'Connect your premium commercial property with our exclusive network of international investors.',
    images: ['/image.png'],
  },
}

export default function SellPage() {
  return <SellProperty />
}