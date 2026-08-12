export const MURIVEST_BRAND = {
  name: 'Murivest Realty Group',
  shortName: 'Murivest',
  descriptor: 'Independent commercial real estate advisory',
  founded: 'Founded in Nairobi in 2025',
  description:
    'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across selected global markets. Engagements are by mandate only.',
  shortDescription:
    'Independent commercial real estate advisory from Nairobi, supporting defined mandates across selected global markets.',
  services: [
    'Investment sales and acquisitions',
    'Tenant and occupier representation',
    'Development and project advisory',
    'Capital markets and mandate strategy',
  ],
  markets: ['East Africa', 'Middle East', 'Asia Pacific', 'Europe'],
  engagement: 'Engagements by mandate only.',
  language: 'English',
  url: 'https://murivest.com',
  logo: 'https://murivest.com/logo.webp',
  telephone: '+254-115-277-610',
  email: 'info@murivest.com',
} as const

export const MURIVEST_SEO = {
  title: 'Murivest | Independent Commercial Real Estate Advisory',
  description: MURIVEST_BRAND.description,
  keywords: [
    'commercial real estate advisory',
    'institutional real estate advisory',
    'capital markets advisory',
    'investment sales',
    'tenant representation',
    'development advisory',
    'Nairobi commercial real estate',
    'Murivest Realty Group',
  ],
} as const
