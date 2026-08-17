import { Metadata } from 'next';
import { headers } from 'next/headers';
import Team from '@/components/Team';

// ─── SEO & Metadata ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Our Team | Murivest — Institutional Real Estate Advisory',
  description:
    'Meet the Murivest leadership team. Seasoned investment advisors, asset managers, and capital specialists curating institutional-grade real estate opportunities for UHNWI and sovereign investors across East Africa and global markets.',
  keywords: [
    'Murivest team',
    'real estate advisors',
    'UHNWI advisory',
    'institutional investment team',
    'East Africa real estate',
    'capital advisory',
    'asset management',
    'sovereign wealth advisors',
    'private wealth real estate',
    'Mark Muriithi',
    'commercial real estate Kenya',
  ],
  alternates: {
    canonical: 'https://murivest.com/team',
  },
  openGraph: {
    title: 'Our Team | Murivest — Institutional Real Estate Advisory',
    description:
      'Seasoned investment advisors curating institutional-grade real estate opportunities for UHNWI and sovereign investors.',
    url: 'https://murivest.com/team',
    siteName: 'Murivest',
    locale: 'en_KE',
    type: 'profile',
    images: [
      {
        url: 'https://murivest.com/og-team.jpg',
        width: 1200,
        height: 630,
        alt: 'Murivest Leadership Team — Institutional Real Estate Advisory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | Murivest — Institutional Real Estate Advisory',
    description:
      'Seasoned investment advisors curating institutional-grade real estate opportunities for UHNWI and sovereign investors.',
    images: ['https://murivest.com/og-team.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'Murivest', url: 'https://murivest.com' }],
  publisher: 'Murivest',
  category: 'Real Estate Investment Advisory',
};

// ─── Structured Data Helpers ──────────────────────────────────────────────────

interface TeamMemberData {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
  phone?: string;
}

const teamMembers: TeamMemberData[] = [
  {
    id: '1',
    name: 'Mark Muriithi',
    title: 'Chief Executive Officer & Founder',
    bio: 'Over two decades of experience in East African commercial real estate. Former Managing Director at a leading property consultancy, with $500M+ in executed transactions.',
    image: 'https://murivest.com/CEO.Founder.webp',
    linkedin: 'https://www.linkedin.com/in/mark-muriithi-343365215/',
    email: 'mark.muriithi@murivest.com',
  },
  {
    id: '2',
    name: 'Moonyoi Ntagusa',
    title: 'Associate Capital Advisor',
    bio: 'Advises private investors and institutional clients on commercial real estate acquisitions, capital structuring, and investment opportunities across key African markets.',
    image: 'https://murivest.com/images/team/Moonyoi_Ntagusa.png',
    linkedin: 'https://www.linkedin.com/in/moonyoi-ntagusa-6bb3a2171',
    email: 'moonyoi@murivest.com',
  },
  {
    id: '3',
    name: 'Michael Chang',
    title: 'Head of Asset Management',
    bio: 'MSc Real Estate, University of Reading. RICS Member with 12+ years managing institutional portfolios exceeding $200M across East Africa.',
    image: 'https://murivest.com/p2/profile-placeholder.webp',
    linkedin: '#',
    email: 'michael@murivest.com',
  },
  {
    id: '4',
    name: 'Julie Maina',
    title: 'Head of Marketing',
    bio: 'MBA, BM. Former Marketing Director with deep network across East African commercial real estate markets.',
    image: 'https://murivest.com/p2/profile-placeholder.webp',
    linkedin: '#',
    email: 'julie@murivest.com',
  },
  {
    id: '5',
    name: 'Sarah Wanjiku',
    title: 'Head of Origination',
    bio: 'MBA, INSEAD. Former investment banker with deep network across East African commercial real estate markets.',
    image: 'https://murivest.com/p2/profile-placeholder.webp',
    linkedin: '#',
    email: 'sarah@murivest.com',
  },
  {
    id: '6',
    name: 'Danson Moonyoi',
    title: 'Junior Investment Advisor',
    bio: 'MBA, INSEAD. Former investment banker with deep network across East African commercial real estate markets.',
    image: 'https://murivest.com/images/team/passport_photo.jpg',
    linkedin: 'https://www.linkedin.com/in/moonyoi-ntagusa-6bb3a2171/',
    email: 'moonyoi.ntagusa@murivest.com',
  },
];

function buildSchemaJson(origin: string) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${origin}/#organization`,
    name: 'Murivest',
    url: origin,
    logo: {
      '@type': 'ImageObject',
      url: `${origin}/logo.png`,
      width: 512,
      height: 512,
    },
    description:
      'Murivest is an institutional real estate advisory firm curating premium commercial property and land banking opportunities for ultra-high-net-worth individuals, family offices, and sovereign wealth investors across East Africa and global markets.',
    sameAs: [
      'https://www.linkedin.com/company/murivest',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254-XXX-XXXXXX',
      contactType: 'Investment Advisory',
      areaServed: ['KE', 'UG', 'TZ', 'RW', 'SS', 'ET', 'GB', 'AE', 'ZA', 'TH'],
      availableLanguage: ['English'],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${origin}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Team',
        item: `${origin}/team`,
      },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${origin}/team#webpage`,
    url: `${origin}/team`,
    name: 'Our Team | Murivest — Institutional Real Estate Advisory',
    description:
      'Meet the Murivest leadership team. Seasoned investment advisors, asset managers, and capital specialists curating institutional-grade real estate opportunities for UHNWI and sovereign investors.',
    isPartOf: { '@id': `${origin}/#organization` },
    breadcrumb: { '@id': `${origin}/team#breadcrumb` },
    inLanguage: 'en-KE',
    datePublished: '2024-01-01T00:00:00+03:00',
    dateModified: '2026-08-17T00:00:00+03:00',
    author: { '@id': `${origin}/#organization` },
    publisher: { '@id': `${origin}/#organization` },
    image: {
      '@type': 'ImageObject',
      url: `${origin}/og-team.jpg`,
      width: 1200,
      height: 630,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: teamMembers.map((m, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: { '@id': `${origin}/team#person-${m.id}` },
      })),
    },
  };

  const personSchemas = teamMembers.map((member) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${origin}/team#person-${member.id}`,
    name: member.name,
    jobTitle: member.title,
    description: member.bio,
    image: member.image.startsWith('http') ? member.image : `${origin}${member.image}`,
    url: `${origin}/team`,
    worksFor: { '@id': `${origin}/#organization` },
    ...(member.linkedin && member.linkedin !== '#'
      ? { sameAs: [member.linkedin] }
      : {}),
    ...(member.email
      ? {
          email: member.email,
          contactPoint: {
            '@type': 'ContactPoint',
            email: member.email,
            contactType: 'Professional',
          },
        }
      : {}),
  }));

  return [organizationSchema, breadcrumbSchema, webPageSchema, ...personSchemas];
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default async function TeamPage() {
  const headersList = await headers();
  const host = headersList.get('host') || 'murivest.com';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const origin = `${protocol}://${host}`;

  const schemaJson = buildSchemaJson(origin);

  return (
    <>
      {/* Structured Data — JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaJson),
        }}
      />

      {/* Skip Link for Accessibility */}
      <a
        href="#team-main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1B4332] focus:text-[#FAF9F6] focus:rounded-sm focus:text-sm"
      >
        Skip to main content
      </a>

      <main id="team-main" role="main" aria-label="Murivest Leadership Team">
        {/* Hero Section — Institutional Tone */}
        <section
          className="relative bg-[#1B4332] text-[#FAF9F6] overflow-hidden"
          aria-labelledby="team-hero-heading"
        >
          {/* Decorative hairline */}
          <div className="absolute top-0 left-0 w-full h-px bg-[#B8956B]/30" />

          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-36">
            <div className="max-w-3xl">
              {/* Breadcrumb Navigation (Visual + Semantic) */}
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-[#B8956B]">
                  <li>
                    <a
                      href="/"
                      className="hover:text-[#FAF9F6] transition-colors duration-300 underline-offset-4 hover:underline"
                    >
                      Home
                    </a>
                  </li>
                  <li aria-hidden="true" className="text-[#B8956B]/50">
                    /
                  </li>
                  <li aria-current="page" className="text-[#FAF9F6]/80">
                    Team
                  </li>
                </ol>
              </nav>

              <p className="text-[11px] tracking-[0.4em] uppercase text-[#B8956B] font-medium mb-6">
                Leadership
              </p>

              <h1
                id="team-hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.05] mb-8"
              >
                Advisors Curated to{' '}
                <span className="italic text-[#B8956B] font-light">Advise</span>
              </h1>

              <p className="text-[15px] md:text-[17px] leading-[1.8] text-[#FAF9F6]/80 font-light max-w-2xl mb-10">
                Our team comprises senior investment professionals with deep institutional
                experience across commercial real estate, capital markets, and sovereign
                wealth advisory. Each advisor is selected for their track record of
                executing complex, high-value transactions and their commitment to
                delivering executive-level service to ultra-high-net-worth individuals
                and institutional investors.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-[12px] tracking-[0.2em] uppercase text-[#B8956B]">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8956B]" aria-hidden="true" />
                  Institutional Advisory
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8956B]" aria-hidden="true" />
                  UHNWI Services
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8956B]" aria-hidden="true" />
                  Sovereign Wealth
                </span>
              </div>
            </div>
          </div>

          {/* Decorative bottom hairline */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-[#B8956B]/20" />
        </section>

        {/* Service Pillars — Executive Services for UHNWI */}
        <section
          className="bg-[#F8F7F4] text-[#2C2C2C]"
          aria-labelledby="services-heading"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  title: 'Investment Advisory',
                  desc: 'Bespoke acquisition and divestiture strategies tailored to institutional mandates, risk parameters, and long-term wealth preservation objectives.',
                },
                {
                  title: 'Capital Structuring',
                  desc: 'Sophisticated debt and equity arrangements for large-scale commercial and development assets, including cross-border structuring for international investors.',
                },
                {
                  title: 'Asset Management',
                  desc: 'Full-cycle portfolio oversight — from due diligence and acquisition to active management, value-add execution, and exit strategy formulation.',
                },
              ].map((service, idx) => (
                <article
                  key={idx}
                  className="border-t border-[#E5E2DC] pt-6"
                >
                  <h3 className="text-[13px] tracking-[0.2em] uppercase text-[#8B7355] font-medium mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light">
                    {service.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Team Grid — Client Component */}
        <Team />

        {/* CTA Section — Institutional Engagement */}
        <section
          className="bg-[#1B4332] text-[#FAF9F6] relative overflow-hidden"
          aria-labelledby="cta-heading"
        >
          <div className="absolute top-0 left-0 w-full h-px bg-[#B8956B]/20" />

          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28 text-center">
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#B8956B] font-medium mb-6">
              Private Advisory
            </p>

            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-8 max-w-3xl mx-auto"
            >
              Engage Our Advisory{' '}
              <span className="italic text-[#B8956B] font-light">Privately</span>
            </h2>

            <p className="text-[15px] leading-[1.8] text-[#FAF9F6]/70 font-light max-w-2xl mx-auto mb-10">
              For UHNWI and institutional investors seeking confidential advisory on
              premium real estate opportunities, our senior partners are available for
              private consultations. All enquiries are handled with the utmost discretion
              and governed by strict confidentiality protocols.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:investments@murivest.co.ke"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8956B] text-[#1B4332] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[#FAF9F6] transition-colors duration-500"
              >
                Schedule Private Consultation
              </a>
              <a
                href="/properties"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#B8956B]/40 text-[#FAF9F6] text-[12px] tracking-[0.2em] uppercase font-medium hover:border-[#B8956B] hover:bg-[#B8956B]/10 transition-all duration-500"
              >
                View Current Opportunities
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-px bg-[#B8956B]/20" />
        </section>
      </main>
    </>
  );
}