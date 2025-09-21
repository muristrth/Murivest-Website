import type { Metadata } from 'next';
import ITProjectManagementClient from './ITProjectManagementClient';

export const metadata: Metadata = {
  title: 'IT Property Management Services Kenya | Smart Property Solutions | Murivest Realty',
  description: 'Revolutionary IT-enabled property management services in Kenya. Real-time tracking, automated payments, AI tenant support, and 50% lower fees. Perfect for landlords in Nairobi and beyond.',
  keywords: 'IT property management Kenya, smart property management Nairobi, automated rent collection Kenya, AI tenant assistant, real-time property tracking Kenya, low-cost property management',
  openGraph: {
    title: 'IT Property Management Services Kenya | Smart Property Solutions',
    description: 'Revolutionary IT-enabled property management with real-time tracking, automated payments, and AI support. 50% lower fees than traditional managers.',
    images: ['/kenya-night.png'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke/it-project-management',
  },
};

export default function ITProjectManagementPage() {
  return <ITProjectManagementClient />;
}