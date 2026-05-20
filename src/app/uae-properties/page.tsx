// app/uae-properties/page.tsx
// Murivest — UAE Portfolio Listing Page (Server Component)

import type { Metadata } from 'next';
import { getUaeProperties } from '../.././lib/sanity/client';
import UaePropertiesClient from '@/components/UaePropertiesClient';

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:       'UAE Portfolio | Murivest — Institutional Real Estate Advisory',
  description:
    'Off-market and mandated properties across Dubai, Abu Dhabi and the Emirates. ' +
    'Residential, commercial, off-plan and portfolio acquisitions for qualified investors.',
  openGraph: {
    title:       'UAE Property Portfolio — Murivest',
    description: 'Premium real estate opportunities across the UAE, curated for institutional and UHNWI investors.',
    type:        'website',
    locale:      'en_AE',
    siteName:    'Murivest',
  },
  alternates: {
    canonical: 'https://murivest.co.ke/uae-properties',
  },
};

// ─── Revalidate every 60 seconds (ISR) ───────────────────────────────────────
export const revalidate = 60;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function UaePropertiesPage() {
  const properties = await getUaeProperties();

  return (
    <UaePropertiesClient initialProperties={properties} />
  );
}