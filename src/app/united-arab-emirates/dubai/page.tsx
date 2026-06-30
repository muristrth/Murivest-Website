// app/united-arab-emirates/dubai/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, TrendingUp, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dubai Commercial Real Estate | Institutional Investment Advisory | Murivest',
  description: 'Premium commercial real estate advisory for institutional investors in Dubai. Access exclusive opportunities across Business Bay, DIFC, Downtown Dubai, and Jebel Ali. Mandate-based services for UHNWIs and family offices.',
  keywords: 'Dubai commercial real estate, DIFC investment, Business Bay offices, Downtown Dubai, Jebel Ali industrial, institutional CRE advisory, UAE property investment',
  openGraph: {
    title: 'Dubai Commercial Real Estate | Institutional Investment Advisory',
    description: 'Premium CRE advisory for institutional capital in Dubai\'s premier markets',
    url: 'https://murivest.com/united-arab-emirates/dubai',
    siteName: 'Murivest Realty Group',
    locale: 'en_AE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://murivest.com/united-arab-emirates/dubai',
  },
};

const dubaiDistricts = [
  {
    id: 'business-bay',
    name: 'Business Bay',
    slug: 'business-bay',
    description: 'Premium mid-to-high-rise commercial and mixed-use development. Home to iconic office towers, serviced apartments, and corporate headquarters.',
    keyFeatures: ['A-Grade Offices', 'Mixed-Use Development', 'Waterfront Access'],
    investmentProfile: 'Institutional offices, premium residential conversion opportunities',
    icon: Building2,
  },
  {
    id: 'difc',
    name: 'Dubai International Financial Centre',
    slug: 'difc',
    description: 'The MENA region\'s leading financial hub. World-class infrastructure, competitive tax regime, and regulatory excellence attracting global financial institutions.',
    keyFeatures: ['Financial Hub', 'Regulatory Excellence', 'Global Institutions'],
    investmentProfile: 'High-yielding office assets, specialty financials, gateway capital',
    icon: TrendingUp,
  },
  {
    id: 'downtown-dubai',
    name: 'Downtown Dubai',
    slug: 'downtown-dubai',
    description: 'UAE\'s most iconic destination. Premium retail, luxury residential, and institutional office space in proximity to Burj Khalifa and Dubai Mall.',
    keyFeatures: ['Iconic Location', 'Premium Retail', 'Mixed-Use'],
    investmentProfile: 'Retail anchors, luxury residential, trophy office assets',
    icon: MapPin,
  },
  {
    id: 'jebel-ali',
    name: 'Jebel Ali',
    slug: 'jebel-ali',
    description: 'Industrial, logistics, and free-zone gateway. Strategic port proximity and expansive industrial capacity supporting regional and international trade.',
    keyFeatures: ['Industrial', 'Logistics Hub', 'Free Zone'],
    investmentProfile: 'Logistics real estate, industrial conversion, trade facilitation',
    icon: Building2,
  },
];

const DistrictCard = ({ district }: { district: (typeof dubaiDistricts)[0] }) => {
  const IconComponent = district.icon;
  
  return (
    <Link href={`/united-arab-emirates/dubai/${district.slug}`}>
      <div className="group relative bg-gradient-to-br from-[#151515] to-[#0B0B0B] border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37]/40 transition-all duration-300 cursor-pointer h-full">
        {/* Hover accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 flex items-center justify-center group-hover:from-[#D4AF37]/30 group-hover:to-[#D4AF37]/20 transition-all duration-300">
              <IconComponent className="w-6 h-6 text-[#D4AF37]" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-[#F5F5DC] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
            {district.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#B0B0B0] mb-6 leading-relaxed">
            {district.description}
          </p>

          {/* Key Features */}
          <div className="mb-6 space-y-2">
            {district.keyFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-2">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span className="text-xs text-[#B0B0B0]">{feature}</span>
              </div>
            ))}
          </div>

          {/* Investment Profile */}
          <div className="pt-4 border-t border-[#D4AF37]/10">
            <p className="text-xs text-[#D4AF37] mb-3">INVESTMENT PROFILE</p>
            <p className="text-sm text-[#F5F5DC] font-light">{district.investmentProfile}</p>
          </div>

          {/* CTA Arrow */}
          <div className="mt-6 flex items-center gap-2 text-[#D4AF37] group-hover:gap-3 transition-all duration-300">
            <span className="text-xs font-semibold uppercase tracking-wide">Explore Market</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function DubaiPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Murivest Dubai',
            description: 'Institutional commercial real estate advisory in Dubai',
            url: 'https://murivest.com/united-arab-emirates/dubai',
            image: 'https://murivest.com/og-image.jpg',
            areaServed: {
              '@type': 'City',
              name: 'Dubai',
              containedIn: {
                '@type': 'State',
                name: 'Dubai Emirate',
              },
            },
            founder: {
              '@type': 'Person',
              name: 'Mark Muriithi',
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent pointer-events-none" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(90deg, #D4AF37 1px, transparent 1px), linear-gradient(#D4AF37 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-8 text-sm text-[#B0B0B0]">
            <span>United Arab Emirates</span>
            <span className="text-[#D4AF37]">/</span>
            <span className="text-[#D4AF37]">Dubai</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-[#F5F5DC] leading-tight">
            Dubai <span className="text-[#D4AF37]">Commercial</span> Markets
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-[#B0B0B0] mb-8 leading-relaxed max-w-2xl mx-auto">
            Institutional investment advisory across Dubai's premier commercial real estate markets. Mandate-based advisory for UHNWIs, family offices, and international capital.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-[#D4AF37]/10">
            <div>
              <div className="text-2xl font-semibold text-[#D4AF37] mb-1">4</div>
              <div className="text-xs text-[#B0B0B0] uppercase tracking-wide">Primary Markets</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-[#D4AF37] mb-1">$800B+</div>
              <div className="text-xs text-[#B0B0B0] uppercase tracking-wide">Market Cap</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-[#D4AF37] mb-1">24/7</div>
              <div className="text-xs text-[#B0B0B0] uppercase tracking-wide">Advisory Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Districts Grid */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="text-xs text-[#D4AF37] uppercase tracking-widest mb-3">MARKET SEGMENTS</div>
          <h2 className="text-3xl md:text-4xl font-light text-[#F5F5DC] mb-4">
            Dubai's Premier Investment Markets
          </h2>
          <p className="text-[#B0B0B0] max-w-2xl">
            Each district offers distinct institutional investment opportunities, from financial services hubs to premium mixed-use destinations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {dubaiDistricts.map((district) => (
            <DistrictCard key={district.id} district={district} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-lg p-12 md:p-16">
          {/* Accent line */}
          <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-[#D4AF37] to-transparent rounded-full" />

          <h3 className="text-2xl md:text-3xl font-light text-[#F5F5DC] mb-4">
            Ready to Invest in Dubai?
          </h3>
          <p className="text-[#B0B0B0] mb-8 max-w-2xl">
            Our institutional advisors specialize in structuring bespoke investment solutions across Dubai's commercial real estate markets. Request a market brief or schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-[#D4AF37] text-[#0B0B0B] font-semibold rounded-lg hover:bg-[#E5C158] transition-colors duration-300">
              Request Market Brief
            </button>
            <button className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37]/10 transition-colors duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="px-6 py-16 border-t border-[#D4AF37]/10 text-center">
        <p className="text-sm text-[#B0B0B0] mb-4">
          Murivest Realty Group Ltd — Institutional Commercial Real Estate Advisory
        </p>
        <p className="text-xs text-[#B0B0B0]/60">
          Dubai, United Arab Emirates
        </p>
      </section>
    </div>
  );
}