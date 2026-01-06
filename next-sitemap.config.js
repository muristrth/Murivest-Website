/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://murivest.co.ke', // change to your live domain
  generateRobotsTxt: true, // also generates robots.txt
  sitemapSize: 5000,
  exclude: ['/institutional-portal'],
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
    return {
      loc: path, // the URL
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  }
};