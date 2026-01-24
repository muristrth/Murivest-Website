import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';
import BlogList from './BlogList';

/* Revalidate every 60 seconds */
export const revalidate = 60;

/* Sanity Query */
const query = `
*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  excerpt,
  "slug": slug.current,
  author,
  category,
  publishedAt,
  readTime,
  "image": coverImage.asset->url
}
`;

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  author: string;
  category: string;
  publishedAt: string;
  readTime: string;
  image: string;
}

async function getPosts(): Promise<Blog[]> {
  return client.fetch(query);
}

export default async function BlogPage() {
  const posts = await getPosts();

  if (!posts || posts.length === 0) {
    return notFound();
  }

  return <BlogList posts={posts} />;
}
