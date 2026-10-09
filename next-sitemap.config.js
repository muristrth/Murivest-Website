/** @type {import('next-sitemap').IConfig} */
const fs = require('fs');

// Audit 2026-10-09: research articles (src/lib/researchData.ts) are served by /kenya/research/[id]
// (no generateStaticParams, so next-sitemap cannot discover them). Read keys at sitemap-build time.
function researchKeys() {
  try {
    const src = fs.readFileSync('src/lib/researchData.ts', 'utf8');
    const keys = [...src.matchAll(/^\s{2}['"]([a-z0-9]+(?:-[a-z0-9]+)+)['"]\s*:\s*\{/gm)].map((m) => m[1]);
    return [...new Set(keys)];
  } catch {
    return [];
  }
}

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://murivest.com', // change to your live domain
  generateRobotsTxt: true, // also generates robots.txt
  sitemapSize: 5000,
  // Audit 2026-10-09: keep private/auth/internal and duplicate (non-canonical) URLs out of the sitemap.
  // NOTE: this is sitemap hygiene only; it is NOT access control and does not change robots.txt policy.
  exclude: [
    '/institutional-portal',
    '/admin', '/admin/*', '/admin2', '/admin2/*',
    '/portal', '/portal/*',
    '/studio', '/studio/*',
    '/api/*',
    '/login', '/kenya/login', '/united-kingdom/login',
    '/kenya/advisors', '/kenya/advisors/*',
    '/singapore/investor-portal/dashboard', '/singapore/investor-portal/deals',
    '/singapore/investor-portal/documents', '/singapore/investor-portal/login',
    // duplicates whose canonical points elsewhere
    '/uk-properties/*', '/united-arab-emirates/listings/*',
    '/kenya/faq/*', '/united-kingdom/faq/*',
  ],
  additionalPaths: async () => researchKeys().map((k) => ({
    loc: `/kenya/research/${k}`,
    changefreq: 'monthly',
    priority: 0.6,
  })),
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: []
      }
    ]
  },
  transform: async (config, path) => {
    // lastmod intentionally omitted: it was new Date() at build time for every URL (not a real modification date).
    return {
      loc: path, // the URL
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
    };
  }
};
