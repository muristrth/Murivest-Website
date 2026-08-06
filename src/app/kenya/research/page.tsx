
import type { Metadata } from 'next';
import Script from 'next/script';
import Research from '@/components/Research';

interface researchPost {
  title: string;
  description: string;
  author: string;
  datePublished: string; // ISO format
  slug: string;
  image?: string;
}

// Example: this could come from a CMS or static props
const researchPost: researchPost = {
  title: "Property Insights: Global Real Estate Market Trends 2026",
  description: "Get expert analysis of Global's real estate market, including REITs, residential and commercial property investment insights.",
  author: "Murivest Realty Group",
  datePublished: "2026-05-11T08:00:00Z",
  slug: "nairobi-real-estate-trends-2026",
  image: "/default-research-image.webp",
};

export const metadata: Metadata = {
  title: researchPost.title + ' | Murivest Realty Group',
  description: researchPost.description,
  keywords: [
    'real estate research Kenya',
    'property investment insights Kenya',
    'REITs Kenya',
    'commercial real estate trends Nairobi',
    'residential property investment Kenya',
    'property market analysis Kenya',
    'real estate investment advice Kenya',
    'Nairobi property market news',
    'commercial property insights Kenya',
    'apartment investment Kenya'
  ],
  openGraph: {
    title: researchPost.title,
    description: researchPost.description,
    images: [
      {
        url: researchPost.image || '/default-research-image.webp',
        width: 1200,
        height: 630,
        alt: researchPost.title
      }
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: researchPost.title,
    description: researchPost.description,
    images: [researchPost.image || '/default-research-image.webp'],
  },
};

export default function researchPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "researchPosting",
    "headline": researchPost.title,
    "description": researchPost.description,
    "author": {
      "@type": "Organization",
      "name": researchPost.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Murivest Realty Group",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.webp"
      }
    },
    "datePublished": researchPost.datePublished,
    "image": researchPost.image || "/image.webp",
    "mainEntityOfPage": `https://murivest.com/research/${researchPost.slug}`,
    "url": `https://murivest.com/research/${researchPost.slug}`
  };

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* @ts-expect-error Suppress prop type error if Research does not declare 'post' */}
      <Research post={researchPost} />
    </>
  );
}