import type { Metadata } from 'next'
import BlogPost, { blogData } from '../../../components/BlogPost'
import Script from 'next/script'

// Generate static pages for all blog ids
export async function generateStaticParams() {
  return Object.keys(blogData).map((id) => ({
    id: id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>
}

interface BlogPostData {
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
  tags: string[];
  excerpt?: string;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  
  // Lookup post in the shared blogData object
  const post = blogData[id as keyof typeof blogData] as BlogPostData | undefined;

  // Return generic blog title if not found (stops showing "Not Found" in tab)
  if (!post) {
    return {
      title: 'Commercial Real Estate Blog | Murivest Realty Group',
      description: 'Explore our latest real estate insights, investment tips, and property guides for Kenya.',
    }
  }

  const description = post.excerpt || `Read about ${post.title} on Murivest Realty Group. ${post.category} insights and more.`;

  return {
    title: `${post.title} | Murivest Realty Group`,
    description,
    keywords: `real estate ${post.category.toLowerCase()} Kenya, ${post.title.toLowerCase()}, property investment Kenya`,
    openGraph: {
      title: post.title,
      description,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [post.image],
    },
  }
}

// Generate Article Schema for blog posts
function generateArticleSchema(post: BlogPostData, id: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt || `Read about ${post.title} on Murivest Realty Group`,
    image: post.image,
    author: {
      '@type': 'Organization',
      name: 'Murivest Realty Group',
      url: 'https://murivest.co.ke',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Murivest Realty Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://murivest.co.ke/logo.png',
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://murivest.co.ke/blog/${id}`,
    },
    articleSection: post.category,
    keywords: post.tags?.join(', ') || post.category,
    inLanguage: 'en-KE',
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = blogData[id as keyof typeof blogData] as BlogPostData | undefined;

  return (
    <>
      {post && (
        <Script
          id={`article-schema-${id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateArticleSchema(post, id)) }}
        />
      )}
      <BlogPost />
    </>
  );
}