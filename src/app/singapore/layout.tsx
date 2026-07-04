import type { Metadata } from 'next';
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
  twitter: {
    card: 'summary_large_image',
    title: SEO_TEMPLATES.home.title,
    description: SEO_TEMPLATES.home.description,
  },
  alternates: {
    canonical: 'https://murivest.com/singapore',
    languages: {
      'en-SG': 'https://murivest.com/singapore',
      'zh-SG': 'https://murivest.com/singapore?lang=zh',
    },
  },
};

export default function SingaporeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C] antialiased">
      {children}
    </div>
  );
}
