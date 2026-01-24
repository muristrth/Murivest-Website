import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';
import BlogClientView from "@/components/BlogClientView";

/* Sanity Query */
const query = `
*[_type == "post" && slug.current == $slug][0]{
  title,
  excerpt,
  author,
  category,
  "date": publishedAt,
  readTime,
  "image": coverImage.asset->url,
  "content": body,
  tags
}
`;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await client.fetch(query, { slug });

  if (!post) {
    return notFound();
  }

  // Format the date for the view
  const formattedPost = {
    ...post,
    date: post.date 
      ? new Date(post.date).toLocaleDateString('en-US', { 
          month: 'long', 
          day: 'numeric', 
          year: 'numeric' 
        })
      : 'Unpublished'
  };

  return <BlogClientView post={formattedPost} />;
}

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`);
  return slugs.map((s: { slug: string }) => ({
    slug: s.slug,
  }));
}
