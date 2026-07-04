import type { Metadata } from 'next';
import HeroSection from './(components)/sections/HeroSection';
import MarketSnapshot from './(components)/sections/MarketSnapshot';
import FeaturedProperties from './(components)/sections/FeaturedProperties';
import InvestmentThesis from './(components)/sections/InvestmentThesis';
import DistrictOverview from './(components)/sections/DistrictOverview';
import LatestInsights from './(components)/sections/LatestInsights';
import TrustSignals from './(components)/sections/TrustSignals';
import NewsletterSignup from './(components)/sections/NewsletterSignup';
import { OrganizationSchema, BreadcrumbSchema } from './(components)/shared/SchemaMarkup';
import { SEO_TEMPLATES } from './(components)/data/singapore-market-data';

export const metadata: Metadata = {
  title: SEO_TEMPLATES.home.title,
  description: SEO_TEMPLATES.home.description,
  keywords: SEO_TEMPLATES.home.keywords,
  openGraph: {
    title: SEO_TEMPLATES.home.title,
    description: SEO_TEMPLATES.home.description,
    type: 'website',
    locale: 'en_SG',
    siteName: 'Murivest Singapore',
  },
};

export default function SingaporeHomepage() {
  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://murivest.com' },
        { name: 'Singapore', url: 'https://murivest.com/singapore' },
      ]} />
      
      <main>
        <HeroSection />
        <MarketSnapshot />
        <InvestmentThesis />
        <FeaturedProperties />
        <DistrictOverview />
        <LatestInsights />
        <TrustSignals />
        <NewsletterSignup />
      </main>
    </>
  );
}
