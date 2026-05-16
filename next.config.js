// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  transpilePackages: ['mapbox-gl', 'react-map-gl'],
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'content.knightfrank.com',
      },
      {
        protocol: 'https',
        hostname: 'streamlinefeed.co.ke',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'nyjbuhvfbjutcfbphchh.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'properties.avenuevaluers.co.ke',
      },
      {
        protocol: 'https',
        hostname: 'www.pesapal.com',
      },
      {
        protocol: 'https',
        hostname: '*.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'www.loopnet.com',
      },
      {
        protocol: 'https',
        hostname: 'www.buyrentkenya.com',
      },
      {
        protocol: 'https',
        hostname: '*.co.ke',
      },
      {
        protocol: 'https',
        hostname: '*.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.radioafrica.digital',
      },
      {
        protocol: 'https',
        hostname: '*.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'usafactsdata.blob.core.windows.net',
      },
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: '*.businessday.ng',
      },
      {
        protocol: 'https',
        hostname: 'chinaglobalsouth.com',
      },
      {
        protocol: 'https',
        hostname: 'housingfinanceafrica.org',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.mwakilishi.com',
      },
      {
        protocol: 'https',
        hostname: 'trendipgroup.co.za',
      },
      {
        protocol: 'https',
        hostname: 'www.policeinvestment.com',
      },
      {
        protocol: 'https',
        hostname: '*.ng',
      },
      {
        protocol: 'https',
        hostname: 'samrack.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'jkbhousing.com',
      },
      {
        protocol: 'https',
        hostname: 'shiftersmovers.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'usernameproperties.com',
      },
      {
        protocol: 'https',
        hostname: 'www.usernameproperties.com',
      },
      {
        protocol: 'https',
        hostname: 'www.constructionkenya.com',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: "https",
        hostname: "c7.alamy.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "murivest.co.ke",
      },
      {
        protocol: "https",
        hostname: "proxima.co.ke",
      },
      {
        protocol: 'https',
        hostname: 'www.kenyaforum.net',
      },
      {
        protocol: 'https',
        hostname: 'yourhost.io',
      },



      
    ],
  },

  // Performance optimizations
  compress: true,

  // Redirects for canonicalization (www to non-www)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.murivest.co.ke',
          },
        ],
        destination: 'https://murivest.co.ke/:path*',
        permanent: true,
      },
    ]
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, s-maxage=600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Experimental features for performance
  experimental: {
    optimizeCss: false,
    scrollRestoration: true,
  },
};

module.exports = nextConfig;