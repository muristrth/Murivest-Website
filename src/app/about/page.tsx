import type { Metadata } from "next";
import AboutClient from "./Aboutclient";

export const metadata: Metadata = {
  title: "About Murivest | Independent Commercial Real Estate Advisory",
  description:
    "Murivest is an independent, Nairobi-founded commercial real estate advisory practice helping owners, investors and occupiers navigate commercial property mandates across selected gateway markets.",
  alternates: { canonical: "https://murivest.com/about" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "About Murivest | Independent Commercial Real Estate Advisory",
    description:
      "Independent commercial real estate advisory across East Africa, the Gulf, Western Europe and Southeast Asia. Founded in 2025.",
    url: "https://murivest.com/about",
    siteName: "Murivest",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Murivest",
    description:
      "Independent commercial real estate advisory. Local intelligence. Institutional discipline.",
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Murivest",
    url: "https://murivest.com/about",
    description:
      "Independent commercial real estate advisory practice founded in 2025.",
    mainEntity: {
      "@type": "Organization",
      name: "Murivest Group Ltd Ltd",
      url: "https://murivest.com",
      foundingDate: "2025",
      founders: [
        {
          "@type": "Person",
          name: "Mark Muriithi",
          jobTitle: "Founder & Principal",
        },
      ],
      areaServed: ["Kenya", "United Arab Emirates", "United Kingdom", "Singapore"],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://murivest.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://murivest.com/about",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutClient />
    </>
  );
}