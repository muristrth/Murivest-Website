import type { Metadata } from 'next'
import BlogPost from '../../../components/BlogPost'

// Import blog data from Blog component
const blog = [
  {
    id: 'improve-credit-score-property-loans-kenya',
    title: 'How to Improve Your Credit Score for Property Loans in Kenya',
    excerpt: 'A vital guide for aspiring homeowners in Kenya, detailing actionable steps to enhance your credit score and secure favorable property loan terms in 2025.',
    author: 'Esther Wanjiku',
    category: 'Financing',
    date: '2025-06-15',
    readTime: '8 min read',
    image: 'https://www.pesapal.com/media/118211/02_25-pesapal-ea-blog-how-to-improve-your-credit-score-1.png?center=0.49805447470817121,0.49833333333333335&mode=crop&width=355&height=218&rnd=133863137910000000',
    featured: false,
  },
  // Add more blog entries as needed...
];

export async function generateStaticParams() {
  return blog.map((post) => ({
    id: post.id,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  const post = blog.find(p => p.id === slug);

  if (!post) {
    return {
      title: 'Commercial Real Estate Blogs | Murivest Realty Group',
      description: 'Independent real estate investment advisory firm specializing in commercial asset origination and structuring for institutional investors in East Africa. Mandate sizes $10M–$100M+ across office, logistics, and industrial sectors.',
    };
  }

  return {
    title: `${post.title} | Murivest Realty Group`,
    description: post.excerpt,
    keywords: `real estate ${post.category.toLowerCase()} Kenya, ${post.title.toLowerCase()}, property investment Kenya`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params

  return <BlogPost />
}