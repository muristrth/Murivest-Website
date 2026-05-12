import type { Metadata } from 'next';
import Blog from '../../components/Blog';

// Ensure Blog component accepts 'post' prop
// If using TypeScript, add the prop type here for clarity
interface BlogProps {
  post: BlogPost;
}

// Type assertion to satisfy TS if Blog is a default export without props defined
const BlogWithProps = Blog as React.ComponentType<BlogProps>;
import Script from 'next/script';

interface BlogPost {
  title: string;
  description: string;
  author: string;
  datePublished: string; // ISO format
  slug: string;
  image?: string;
}

// Example: this could come from a CMS or static props
const blogPost: BlogPost = {
  title: "Property Insights: Nairobi Real Estate Market Trends 2026",
  description: "Get expert analysis of Nairobi's real estate market, including REITs, residential and commercial property investment insights.",
  author: "Murivest Realty Group",
  datePublished: "2026-05-11T08:00:00Z",
  slug: "nairobi-real-estate-trends-2026",
  image: "/default-blog-image.png",
};

export const metadata: Metadata = {
  title: blogPost.title + ' | Murivest Realty Group',
  description: blogPost.description,
  keywords: [
    'real estate blog Kenya',
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
    title: blogPost.title,
    description: blogPost.description,
    images: [
      {
        url: blogPost.image || '/default-blog-image.png',
        width: 1200,
        height: 630,
        alt: blogPost.title
      }
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: blogPost.title,
    description: blogPost.description,
    images: [blogPost.image || '/default-blog-image.png'],
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogPost.title,
    "description": blogPost.description,
    "author": {
      "@type": "Organization",
      "name": blogPost.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Murivest Realty Group",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    },
    "datePublished": blogPost.datePublished,
    "image": blogPost.image || "/image.png",
    "mainEntityOfPage": `https://murivest.co.ke/blog/${blogPost.slug}`,
    "url": `https://murivest.co.ke/blog/${blogPost.slug}`
  };

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogWithProps post={blogPost} />
    </>
  );
}