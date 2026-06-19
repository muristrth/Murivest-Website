'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

type UaeLink = {
  label: string;
  href: string;
};

type UaeLinkGroup = {
  title: string;
  links: UaeLink[];
};

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export const uaeInternalLinkGroups: UaeLinkGroup[] = [
  {
    title: 'UAE Overview',
    links: [
      { label: 'UAE Overview', href: '/united-arab-emirates' },
      { label: 'UAE Listings', href: '/united-arab-emirates/listings' },
      { label: 'Contact Advisory', href: '/united-arab-emirates/contact' },
    ],
  },
  {
    title: 'Emirates',
    links: [
      { label: 'Dubai', href: '/united-arab-emirates/dubai' },
      { label: 'Abu Dhabi', href: '/united-arab-emirates/abu-dhabi' },
      { label: 'Sharjah', href: '/united-arab-emirates/sharjah' },
      { label: 'Ras Al Khaimah', href: '/united-arab-emirates/ras-al-khaimah' },
      { label: 'Ajman', href: '/united-arab-emirates/ajman' },
      { label: 'Fujairah', href: '/united-arab-emirates/fujairah' },
    ],
  },
  {
    title: 'Dubai Districts',
    links: [
      { label: 'DIFC', href: '/united-arab-emirates/dubai/difc' },
      { label: 'Business Bay', href: '/united-arab-emirates/dubai/business-bay' },
      { label: 'Jebel Ali', href: '/united-arab-emirates/dubai/jebel-ali' },
      { label: 'Downtown Dubai', href: '/united-arab-emirates/dubai/downtown-dubai' },
    ],
  },
  {
    title: 'Abu Dhabi Districts',
    links: [
      { label: 'Saadiyat Island', href: '/united-arab-emirates/abu-dhabi/saadiyat-island' },
      { label: 'Yas Island', href: '/united-arab-emirates/abu-dhabi/yas-island' },
    ],
  },
  {
    title: 'Asset Classes',
    links: [
      { label: 'Office', href: '/united-arab-emirates/asset-classes/office' },
      { label: 'Industrial', href: '/united-arab-emirates/asset-classes/industrial' },
      { label: 'Logistics', href: '/united-arab-emirates/asset-classes/logistics' },
      { label: 'Retail', href: '/united-arab-emirates/asset-classes/retail' },
      { label: 'Hospitality', href: '/united-arab-emirates/asset-classes/hospitality' },
      { label: 'Mixed Use', href: '/united-arab-emirates/asset-classes/mixed-use' },
      { label: 'Land', href: '/united-arab-emirates/asset-classes/land' },
      { label: 'Data Centers', href: '/united-arab-emirates/asset-classes/data-centers' },
    ],
  },
  {
    title: 'Capital Markets',
    links: [
      { label: 'Capital Markets Overview', href: '/united-arab-emirates/capital-markets' },
      { label: 'Portfolio Sales', href: '/united-arab-emirates/capital-markets/portfolio-sales' },
      { label: 'Joint Ventures', href: '/united-arab-emirates/capital-markets/joint-ventures' },
      { label: 'Development Sites', href: '/united-arab-emirates/capital-markets/development-sites' },
      { label: 'Sale Leaseback', href: '/united-arab-emirates/capital-markets/sale-leaseback' },
      { label: 'Institutional Acquisitions', href: '/united-arab-emirates/capital-markets/institutional-acquisitions' },
    ],
  },
  {
    title: 'Research',
    links: [
      { label: 'Research Overview', href: '/united-arab-emirates/research' },
      { label: 'UAE Office Market Report', href: '/united-arab-emirates/research/uae-office-market-report' },
      { label: 'UAE Industrial Market Report', href: '/united-arab-emirates/research/uae-industrial-market-report' },
      { label: 'UAE Logistics Market Report', href: '/united-arab-emirates/research/uae-logistics-market-report' },
      { label: 'UAE Cap Rates', href: '/united-arab-emirates/research/uae-cap-rates' },
      { label: 'Dubai Office Rents', href: '/united-arab-emirates/research/dubai-office-rents' },
      { label: 'GCC Real Estate Outlook', href: '/united-arab-emirates/research/gcc-real-estate-outlook' },
    ],
  },
  {
    title: 'Investment Guides',
    links: [
      { label: 'Investment Guides Overview', href: '/united-arab-emirates/investment-guides' },
      { label: 'How To Invest In UAE Real Estate', href: '/united-arab-emirates/investment-guides/how-to-invest-in-uae-real-estate' },
      { label: 'How To Buy Commercial Property In Dubai', href: '/united-arab-emirates/investment-guides/how-to-buy-commercial-property-in-dubai' },
      { label: 'Dubai Vs London Office Investment', href: '/united-arab-emirates/investment-guides/dubai-vs-london-office-investment' },
      { label: 'UAE Vs Singapore Real Estate', href: '/united-arab-emirates/investment-guides/uae-vs-singapore-real-estate' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'Developers Overview', href: '/united-arab-emirates/developers' },
      { label: 'Emaar', href: '/united-arab-emirates/developers/emaar' },
      { label: 'Aldar', href: '/united-arab-emirates/developers/aldar' },
      { label: 'Damac', href: '/united-arab-emirates/developers/damac' },
      { label: 'Nakheel', href: '/united-arab-emirates/developers/nakheel' },
      { label: 'Sobha', href: '/united-arab-emirates/developers/sobha' },
    ],
  },
  {
    title: 'Off-Market',
    links: [
      { label: 'Off-Market Overview', href: '/united-arab-emirates/off-market' },
      { label: 'Office Assets', href: '/united-arab-emirates/off-market/office-assets' },
      { label: 'Industrial Assets', href: '/united-arab-emirates/off-market/industrial-assets' },
      { label: 'Logistics Assets', href: '/united-arab-emirates/off-market/logistics-assets' },
      { label: 'Land Opportunities', href: '/united-arab-emirates/off-market/land-opportunities' },
    ],
  },
];

const pagePathLabels: Record<string, string> = {
  '/united-arab-emirates': 'United Arab Emirates',
  '/united-arab-emirates/dubai': 'Dubai',
  '/united-arab-emirates/dubai/difc': 'DIFC',
  '/united-arab-emirates/dubai/business-bay': 'Business Bay',
  '/united-arab-emirates/dubai/jebel-ali': 'Jebel Ali',
  '/united-arab-emirates/dubai/downtown-dubai': 'Downtown Dubai',
  '/united-arab-emirates/abu-dhabi': 'Abu Dhabi',
  '/united-arab-emirates/abu-dhabi/saadiyat-island': 'Saadiyat Island',
  '/united-arab-emirates/abu-dhabi/yas-island': 'Yas Island',
  '/united-arab-emirates/sharjah': 'Sharjah',
  '/united-arab-emirates/ras-al-khaimah': 'Ras Al Khaimah',
  '/united-arab-emirates/ajman': 'Ajman',
  '/united-arab-emirates/fujairah': 'Fujairah',
  '/united-arab-emirates/asset-classes': 'Asset Classes',
  '/united-arab-emirates/asset-classes/office': 'Office',
  '/united-arab-emirates/asset-classes/industrial': 'Industrial',
  '/united-arab-emirates/asset-classes/logistics': 'Logistics',
  '/united-arab-emirates/asset-classes/retail': 'Retail',
  '/united-arab-emirates/asset-classes/hospitality': 'Hospitality',
  '/united-arab-emirates/asset-classes/mixed-use': 'Mixed Use',
  '/united-arab-emirates/asset-classes/land': 'Land',
  '/united-arab-emirates/asset-classes/data-centers': 'Data Centers',
  '/united-arab-emirates/capital-markets': 'Capital Markets',
  '/united-arab-emirates/capital-markets/portfolio-sales': 'Portfolio Sales',
  '/united-arab-emirates/capital-markets/joint-ventures': 'Joint Ventures',
  '/united-arab-emirates/capital-markets/development-sites': 'Development Sites',
  '/united-arab-emirates/capital-markets/sale-leaseback': 'Sale Leaseback',
  '/united-arab-emirates/capital-markets/institutional-acquisitions': 'Institutional Acquisitions',
  '/united-arab-emirates/research': 'Research',
  '/united-arab-emirates/research/uae-office-market-report': 'UAE Office Market Report',
  '/united-arab-emirates/research/uae-industrial-market-report': 'UAE Industrial Market Report',
  '/united-arab-emirates/research/uae-logistics-market-report': 'UAE Logistics Market Report',
  '/united-arab-emirates/research/uae-cap-rates': 'UAE Cap Rates',
  '/united-arab-emirates/research/dubai-office-rents': 'Dubai Office Rents',
  '/united-arab-emirates/research/gcc-real-estate-outlook': 'GCC Real Estate Outlook',
  '/united-arab-emirates/investment-guides': 'Investment Guides',
  '/united-arab-emirates/investment-guides/how-to-invest-in-uae-real-estate': 'How To Invest In UAE Real Estate',
  '/united-arab-emirates/investment-guides/how-to-buy-commercial-property-in-dubai': 'How To Buy Commercial Property In Dubai',
  '/united-arab-emirates/investment-guides/dubai-vs-london-office-investment': 'Dubai Vs London Office Investment',
  '/united-arab-emirates/investment-guides/uae-vs-singapore-real-estate': 'UAE Vs Singapore Real Estate',
  '/united-arab-emirates/developers': 'Developers',
  '/united-arab-emirates/developers/emaar': 'Emaar',
  '/united-arab-emirates/developers/aldar': 'Aldar',
  '/united-arab-emirates/developers/damac': 'Damac',
  '/united-arab-emirates/developers/nakheel': 'Nakheel',
  '/united-arab-emirates/developers/sobha': 'Sobha',
  '/united-arab-emirates/off-market': 'Off-Market',
  '/united-arab-emirates/off-market/office-assets': 'Office Assets',
  '/united-arab-emirates/off-market/industrial-assets': 'Industrial Assets',
  '/united-arab-emirates/off-market/logistics-assets': 'Logistics Assets',
  '/united-arab-emirates/off-market/land-opportunities': 'Land Opportunities',
  '/united-arab-emirates/listings': 'UAE Listings',
  '/united-arab-emirates/contact': 'Contact',
};

const pagePathDescriptions: Record<string, string> = {
  '/united-arab-emirates': 'Institutional-grade commercial real estate opportunities, research and advisory across the UAE.',
  '/united-arab-emirates/dubai': 'Dubai commercial real estate districts, market intelligence and investment access.',
  '/united-arab-emirates/abu-dhabi': 'Abu Dhabi commercial real estate investment pages and district-level market access.',
  '/united-arab-emirates/asset-classes': 'Commercial real estate asset classes for UAE institutional allocation.',
  '/united-arab-emirates/capital-markets': 'Capital markets services for portfolio sales, joint ventures and institutional acquisitions.',
  '/united-arab-emirates/research': 'UAE commercial real estate research, market reports and capital markets data.',
  '/united-arab-emirates/investment-guides': 'Investment guides for UAE and Dubai commercial property allocation.',
  '/united-arab-emirates/developers': 'UAE developer profiles for institutional real estate due diligence.',
  '/united-arab-emirates/off-market': 'Off-market commercial property opportunities across the UAE.',
  '/united-arab-emirates/listings': 'Curated UAE commercial property listings and portfolio opportunities.',
  '/united-arab-emirates/contact': 'Contact the Murivest UAE advisory team.',
};

function formatSegment(segment: string) {
  return segment
    .replace(/-/g, ' ')
    .replace(/\[slug\]/g, 'Listing')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getPageTitle(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  const lastSegment = segments[segments.length - 1];

  return pagePathLabels[pathname] ?? formatSegment(lastSegment ?? 'United Arab Emirates');
}

function getPageBreadcrumb(pathname: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

  if (!pathname.startsWith('/united-arab-emirates')) {
    return items;
  }

  items.push({ label: 'United Arab Emirates', href: '/united-arab-emirates' });

  const relativePath = pathname.replace('/united-arab-emirates', '');
  const segments = relativePath.split('/').filter(Boolean);

  if (segments.length === 0) {
    return items;
  }

  const isDynamicListing = pathname.includes('/listings/[slug]');

  if (isDynamicListing) {
    items.push({ label: 'Listings', href: '/united-arab-emirates/listings' });
    items.push({ label: 'Listing Detail' });
    return items;
  }

  items.push({
    label: getPageTitle(pathname),
    href: segments.length > 1 ? pathname : undefined,
  });

  return items;
}

export function UaeInternalBreadcrumb({ items }: { items?: BreadcrumbItem[] }) {
  const pathname = usePathname();
  const breadcrumbItems = items ?? getPageBreadcrumb(pathname);

  return (
    <nav aria-label="Breadcrumb" className="mb-8 md:mb-10">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-[#8A8A8A]">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 && <span className="text-[#B8956B]">/</span>}
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-[#1B4332] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function UaeInternalLinks({
  title = 'Internal Links',
  compact = false,
}: {
  title?: string;
  compact?: boolean;
}) {
  const pathname = usePathname();

  return (
    <section id="internal-links" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <p className="font-body text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#B8956B] block mb-4">
            Internal Links
          </p>
          <h2 className="font-display text-[28px] md:text-[36px] lg:text-[40px] leading-[1.1] text-[#1A1A1A] mb-4">
            {title}
          </h2>
          <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">
            Navigate Murivest&apos;s UAE commercial real estate pages, district pages, research, capital markets services and investment guides.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {uaeInternalLinkGroups.map((group) => (
            <div
              key={group.title}
              className={`rounded-2xl border border-[#1A1A1A]/5 bg-white p-6 md:p-8 ${compact ? 'p-5 md:p-6' : ''}`}
            >
              <h3 className="font-display text-lg md:text-xl text-[#1A1A1A] mb-5">{group.title}</h3>
              <ul className={compact ? 'space-y-2' : 'space-y-3'}>
                {group.links.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`group flex items-center justify-between gap-3 text-sm leading-snug transition-colors ${
                          isActive
                            ? 'text-[#1B4332] font-medium'
                            : 'text-[#4A4A4A] hover:text-[#1B4332]'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className={`w-3.5 h-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100 ${isActive ? 'opacity-100' : ''}`} strokeWidth={1.5} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UaeInternalPageShell({ eyebrow = 'United Arab Emirates' }: { eyebrow?: string }) {
  const pathname = usePathname();
  const title = getPageTitle(pathname);
  const description = pagePathDescriptions[pathname] ?? 'Explore related Murivest UAE commercial real estate pages below.';

  return (
    <main className="bg-[#FAF9F6] text-[#1A1A1A] font-body antialiased">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <UaeInternalBreadcrumb />

        <section className="py-12 md:py-16">
          <p className="font-body text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#B8956B] block mb-4">
            {eyebrow}
          </p>
          <h1 className="font-display text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] text-[#1A1A1A] mb-6 max-w-4xl">
            {title}
          </h1>
          <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed max-w-2xl">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/united-arab-emirates"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1B4332] text-white text-sm font-medium tracking-wide hover:bg-[#142d23] transition-colors"
              style={{ minHeight: 48 }}
            >
              UAE Overview
            </Link>
            <Link
              href="/united-arab-emirates/listings"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#1A1A1A]/20 text-[#1A1A1A] text-sm font-medium tracking-wide hover:border-[#1B4332] hover:text-[#1B4332] transition-colors"
              style={{ minHeight: 48 }}
            >
              View Listings
            </Link>
            <Link
              href="/united-arab-emirates/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#1A1A1A]/20 text-[#1A1A1A] text-sm font-medium tracking-wide hover:border-[#1B4332] hover:text-[#1B4332] transition-colors"
              style={{ minHeight: 48 }}
            >
              Contact Advisory
            </Link>
          </div>
        </section>

        <UaeInternalLinks title="Related UAE Pages" compact />
      </div>
    </main>
  );
}
