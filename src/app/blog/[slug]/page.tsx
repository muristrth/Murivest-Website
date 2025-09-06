import type { Metadata } from 'next'
import BlogPost from '../../../components/BlogPost'

export const metadata: Metadata = {
  title: 'Real Estate Investment Insights - Blog Post | Murivest Realty Group',
  description: 'Expert insights and analysis on Kenya\'s real estate market. Professional commentary on investment strategies, market trends, and opportunities for discerning investors.',
  keywords: 'real estate insights Kenya, property investment analysis, commercial real estate trends Kenya, investment strategies Kenya, property market commentary',
  openGraph: {
    title: 'Real Estate Investment Insights - Blog Post | Murivest Realty Group',
    description: 'Expert insights and analysis on Kenya\'s real estate market.',
    images: ['/image.png'],
  },
}

export default function BlogPostPage() {
  return <BlogPost />
}