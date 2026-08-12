'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../ui/WhatsAppButton';

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isInvestorPortal = pathname.startsWith('/portal');

  return (
    <div className="min-h-screen">
      {!isInvestorPortal && (
        <>
          <Header />
        </>
      )}

      <main>{children}</main>

      {!isInvestorPortal && <Footer />}
      {!isInvestorPortal && <WhatsAppButton />}

    </div>
  );
}