'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import { PublicHeader, PublicFooter } from '@/components/public/PublicSite';
import WhatsAppButton from '../ui/WhatsAppButton';

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPrivate = pathname.startsWith('/admin') || pathname.startsWith('/admin2') || pathname.startsWith('/studio') || pathname.startsWith('/api') || pathname.includes('/investor-portal');

  return (
    <div className="min-h-screen">
      {!isPrivate && <PublicHeader />}
      {isPrivate && !pathname.includes('/investor-portal') && <Header />}

      <main>{children}</main>

      {!isPrivate && <PublicFooter />}
      {isPrivate && !pathname.includes('/investor-portal') && <Footer />}
      {!isPrivate && <WhatsAppButton />}
    </div>
  );
}
