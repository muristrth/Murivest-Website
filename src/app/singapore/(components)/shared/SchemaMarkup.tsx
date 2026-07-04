'use client';

import Script from 'next/script';

interface SchemaMarkupProps {
  type: 'Organization' | 'LocalBusiness' | 'RealEstateListing' | 'Article' | 'FAQPage' | 'BreadcrumbList';
  data: Record<string, any>;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <SchemaMarkup
      type="Organization"
      data={{
        name: 'Murivest Singapore',
        url: 'https://murivest.com/singapore',
        logo: 'https://murivest.com/logo.png',
        description: 'Singapore\'s premier institutional commercial real estate advisory serving UHNWI, family offices, and sovereign wealth funds.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1 Raffles Place',
          addressLocality: 'Singapore',
          postalCode: '048616',
          addressCountry: 'SG',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+65-6123-4567',
          contactType: 'Investment Advisory',
          email: 'singapore@murivest.com',
          availableLanguage: ['English', 'Chinese'],
        },
        sameAs: [
          'https://www.linkedin.com/company/murivest',
        ],
      }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  return (
    <SchemaMarkup
      type="BreadcrumbList"
      data={{
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}
