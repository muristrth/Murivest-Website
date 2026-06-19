// ─── app/sitemap-properties.xml/route.ts ─────────────────────────────────────
// Generates a dynamic XML sitemap for all published Sanity properties.
// Add to next.config.js: no change needed — Next.js handles this route automatically.

import { client } from '@/sanity/lib/client';

const BASE_URL = 'https://murivest.com';

interface SanityPropertyEntry {
  slug:      string;
  updatedAt?: string;
  publishedAt?: string;
  status?:   string;
}

export async function GET() {
  const properties: SanityPropertyEntry[] = await client.fetch(
    `*[_type == "property" && defined(slug.current)] | order(publishedAt desc) {
      "slug": slug.current,
      updatedAt,
      publishedAt,
      status,
    }`
  );

  const urls = properties
    .filter((p) => p.status !== 'sold' && p.status !== 'leased')
    .map((p) => {
      const lastmod = p.updatedAt ?? p.publishedAt ?? new Date().toISOString();
      return `
  <url>
    <loc>${BASE_URL}/properties/${p.slug}</loc>
    <lastmod>${lastmod.slice(0, 10)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}