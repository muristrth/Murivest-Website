const BASE_URL = "https://murivest.com";

export function generateOrganizationSchema() {
  return {
    "@type": ["Organization", "RealEstateAgent"],
    "@id": `${BASE_URL}/#organization`,
    name: "Murivest",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/murivest-logo.png`,
      width: 512,
      height: 512,
    },
    description:
      "Murivest is an institutional real estate intelligence and advisory platform specializing in African and emerging-market property investments. We combine Bloomberg-grade research with JLL-style execution for sovereign wealth funds, family offices, and private equity investors.",
    sameAs: [
      "https://www.linkedin.com/company/murivest",
      "https://twitter.com/murivest",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "One Africa Place, Westlands",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254-XXX-XXXXXX",
      contactType: "Investment Advisory",
      areaServed: ["KE", "UG", "TZ", "RW", "ZA", "AE", "GB", "TH"],
      availableLanguage: ["English"],
    },
    knowsAbout: [
      "African Real Estate",
      "Commercial Property",
      "Office Space",
      "Property Investment",
      "Commercial Real Estate",
      "Property Leasing",
      "Emerging Market Investment",
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${items[items.length - 1]?.url || BASE_URL}/#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateRealEstateListingSchema(property: any) {
  return {
    "@type": ["RealEstateListing", "Product"],
    name: property.title,
    description: property.description,
    image: property.images || [],
    address: property.city
      ? {
          "@type": "PostalAddress",
          addressLocality: property.city,
          addressCountry: "KE",
        }
      : undefined,
    offers: {
      "@type": "Offer",
      price: property.price?.kes || property.price?.usd || "0",
      priceCurrency: property.price?.usd ? "USD" : "KES",
      availability:
        property.availabilityStatus === "Available"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
    },
  };
}

export function generateFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}) {
  return {
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Organization",
      name: article.author,
      url: `${BASE_URL}/authors/murivest-research`,
    },
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}