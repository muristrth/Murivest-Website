/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://murivest.co.ke', // change to your live domain
  generateRobotsTxt: true, // also generates robots.txt
  sitemapSize: 5000,
  exclude: [
    '/dashboard',        // private dashboard
    '/auth',             // if you have a login/signup page
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/auth']
      }
    ]
  },
  transform: async (config, path) => {
    // Skip dashboard & auth pages completely
    if (path.includes('/dashboard') || path.includes('/auth')) {
      return null;
    }

    return {
      loc: path, // the URL
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  }
};