import type { Metadata } from 'next'
import GlobalHomePage from '@/components/Globalhomepage'

export const metadata: Metadata = {
  title: 'Commercial Real Estate Advisory Kenya | Office, Industrial & Investment | Murivest - Est. 2025',
  description:
    'Murivest Realty Group is a Nairobi-based commercial real estate advisory founded in 2025 by Mark Muriithi. Mandate-based advisory for office, industrial, and investment across Kenya and East Africa.',
  keywords: [
    'commercial real estate advisory Kenya',
    'Nairobi commercial property',
    'office space Nairobi',
    'industrial property Kenya',
    'investment advisory Kenya',
    'East Africa real estate',
    'Murivest Realty Group',
    'Mark Muriithi',
    'commercial property underwriting',
    'exit strategy advisory',
  ],
  authors: [{ name: 'Murivest Realty Group' }],
  creator: 'Murivest Realty Group',
  publisher: 'Murivest Realty Group',

  openGraph: {
    title: 'Murivest Realty Group | Commercial Real Estate Advisory Kenya',
    description:
      'Nairobi-based commercial real estate advisory founded in 2025 by Mark Muriithi. Mandate-based advisory for office, industrial, and investment across Kenya and East Africa.',
    url: 'https://murivest.com',
    siteName: 'Murivest Realty Group',
    images: [
      {
        url: 'https://murivest.com/og-global.webp',
        width: 1200,
        height: 630,
        alt: 'Murivest Realty Group – Commercial Real Estate Advisory Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Murivest Realty Group | Commercial Real Estate Advisory Kenya',
    description:
      'Nairobi-based commercial real estate advisory founded in 2025 by Mark Muriithi.',
    images: ['https://murivest.com/og-global.webp'],
  },

  alternates: {
    canonical: 'https://murivest.com',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Page() {
  return <GlobalHomePage />
}