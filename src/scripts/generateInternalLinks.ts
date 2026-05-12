// scripts/generateInternalLinks.ts
import fs from 'fs';
import path from 'path';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');
const OUTPUT_FILE = path.join(process.cwd(), 'lib/generatedInternalLinks.json');

function getAllPosts() {
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((f) => f.endsWith('.json') || f.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
      return JSON.parse(raw);
    });
}

function generateLinks() {
  const posts = getAllPosts();
  
  const links = posts.map((post) => ({
    keyword: post.title,
    href: `/blog/${post.slug}`,
  }));

  // Add category-based links
  const categories = [...new Set(posts.map((p) => p.category).filter(Boolean))];
  categories.forEach((cat) => {
    const representative = posts.find((p) => p.category === cat);
    if (representative) {
      links.push({
        keyword: cat,
        href: `/blog/${representative.slug}`,
      });
    }
  });

  // Deduplicate
  const unique = Array.from(
    new Map(links.map((l) => [l.keyword.toLowerCase(), l])).values()
  );

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(unique, null, 2));
  console.log(`Generated ${unique.length} internal links`);
}

generateLinks();