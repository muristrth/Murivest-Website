import Script from 'next/script';

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function jsonLd(data: Record<string, any>) {
  return (
    <Script
      id={data['@type'] || 'schema'}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema(overrides: Record<string, any> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Murivest',
    alternateName: 'Murivest Global',
    url: 'https://murivest.com',
    logo: 'https://murivest.com/logo.webp',
    description:
      'Murivest is an independent institutional commercial real estate advisory firm. We advise on capital markets, investment sales, tenant representation, and development projects across all major global markets.',
    sameAs: [
      'https://www.linkedin.com/company/murivest-realty-group',
      'https://www.instagram.com/murivest_realty',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254-115-277-610',
      contactType: 'sales',
      areaServed: ['US', 'GB', 'AE', 'KE', 'SG', 'ZA'],
      availableLanguage: ['English'],
    },
    ...overrides,
  };
}

export function webSiteSchema(overrides: Record<string, any> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Murivest',
    url: 'https://murivest.com',
    description:
      'Global commercial real estate intelligence, capital markets advisory, and property listings.',
    publisher: {
      '@type': 'Organization',
      name: 'Murivest',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://murivest.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    ...overrides,
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function faqPageSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function webPageSchema(data: Record<string, any> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    ...data,
  };
}

export function professionalServiceSchema(data: Record<string, any> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Murivest',
    image: 'https://murivest.com/logo.webp',
    telephone: '+254-115-277-610',
    email: 'capital@murivest.co.ke',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Murivest House, Riverside Drive',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      postalCode: '00100',
      addressCountry: 'KE',
    },
    url: 'https://murivest.com',
    ...data,
  };
}

export function realEstateAgentSchema(data: Record<string, any> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Murivest Realty Group',
    alternateName: 'Murivest',
    url: 'https://murivest.com',
    logo: 'https://murivest.com/logo.webp',
    description:
      'Independent institutional commercial real estate advisory firm based in Nairobi.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Westlands Business District',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      postalCode: '00100',
      addressCountry: 'KE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254-115-277-610',
      contactType: 'Investment Advisory',
      areaServed: ['KE', 'AE', 'SG', 'GB', 'US'],
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://www.linkedin.com/company/murivest-realty-group',
      'https://www.instagram.com/murivest_realty',
    ],
    foundingDate: '2015',
    ...data,
  };
}

export function localBusinessSchema(data: Record<string, any> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Murivest',
    image: 'https://murivest.com/logo.webp',
    '@id': 'https://murivest.com',
    url: 'https://murivest.com',
    telephone: '+254-115-277-610',
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Murivest House, Riverside Drive',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      postalCode: '00100',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-1.2921',
      longitude: '36.8219',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    sameAs: [
      'https://www.linkedin.com/company/murivest-realty-group',
      'https://www.instagram.com/murivest_realty',
    ],
    ...data,
  };
}

export function articleSchema(data: {
  title: string;
  description: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    image: data.image || 'https://murivest.com/logo.webp',
    datePublished: data.publishedTime || new Date().toISOString(),
    dateModified: data.modifiedTime || new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: data.authorName || 'Murivest Research Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Murivest',
      logo: {
        '@type': 'ImageObject',
        url: 'https://murivest.com/logo.webp',
      },
    },
    url: data.url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url,
    },
  };
}

export function serviceSchema(data: {
  name: string;
  description: string;
  url: string;
  providerName?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    url: data.url,
    provider: {
      '@type': 'Organization',
      name: data.providerName || 'Murivest',
    },
    areaServed: 'Worldwide',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: data.url,
      servicePhone: '+254-115-277-610',
    },
  };
}

export function realEstateListingSchema(data: Record<string, any>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    ...data,
  };
}

export function collectionPageSchema(data: {
  name: string;
  description: string;
  url: string;
  items?: Array<{ name: string; url: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: data.name,
    description: data.description,
    url: data.url,
    mainEntity: data.items?.map((item) => ({
      '@type': 'ListItem',
      position: 0,
      item: {
        '@type': 'ListItem',
        name: item.name,
        url: item.url,
      },
    })),
    publisher: {
      '@type': 'Organization',
      name: 'Murivest',
      url: 'https://murivest.com',
    },
  };
}

export function itemListSchema(data: {
  name: string;
  description: string;
  url: string;
  items: Array<{ name: string; description?: string; url?: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: data.name,
    description: data.description,
    url: data.url,
    itemListElement: data.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      description: item.description,
      url: item.url,
    })),
  };
}
