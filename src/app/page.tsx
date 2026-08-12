import type { Metadata } from 'next'
import { countrySEO, buildHreflang } from '@/lib/seo/countries'
import GlobalHomePage from '@/components/Globalhomepage'
import { MURIVEST_SEO } from '@/lib/content/brand'

const seo = countrySEO.global
const canonicalContent = MURIVEST_SEO

export const metadata: Metadata = {
  title: canonicalContent.title,
  description: canonicalContent.description,
  keywords: canonicalContent.keywords.join(', '),

  authors: [{ name: 'Murivest Realty Group' }],
  creator: 'Murivest Realty Group',
  publisher: 'Murivest Realty Group',

  openGraph: {
    title: canonicalContent.title,
    description: canonicalContent.description,
    url: seo.canonical,
    siteName: 'Murivest Global',
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: 'Murivest Global – Institutional Real Estate Advisory',
      },
    ],
    locale: seo.locale,
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: canonicalContent.title,
    description: canonicalContent.description,
    images: [seo.ogImage],
  },

  alternates: {
    canonical: seo.canonical,
    languages: buildHreflang(),
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
