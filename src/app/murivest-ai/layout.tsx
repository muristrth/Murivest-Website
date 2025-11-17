import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Murivest Falcon AI - Advanced Real Estate Intelligence | Murivest Realty Group',
  description: 'Experience Murivest Falcon AI, our advanced artificial intelligence system providing real-time market analysis, investment insights, and personalized real estate intelligence for institutional investors.',
  keywords: 'AI real estate analysis, artificial intelligence property investment, real estate AI insights, investment intelligence AI, market analysis AI, Murivest Falcon AI',
  openGraph: {
    title: 'Murivest Falcon AI - Advanced Real Estate Intelligence',
    description: 'Advanced AI-powered insights for commercial real estate intelligence and investment decision-making.',
    images: ['/kenya-night.png'],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}