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
  // /portal, /advisor, and /admin are authenticated dashboard trees that
  // each render their own dedicated header/nav/footer chrome. Wrapping them
  // in the public marketing Header/Footer/WhatsApp widget would double up
  // the page chrome, so all three are excluded here.
  const isDashboardTree =
    pathname.startsWith('/portal') ||
    pathname.startsWith('/advisor') ||
    pathname.startsWith('/admin');

  return (
    <div className="min-h-screen">
      {!isDashboardTree && (
        <>
          <Header />
        </>
      )}

      <main>{children}</main>

      {!isDashboardTree && <Footer />}
      {!isDashboardTree && <WhatsAppButton />}

    </div>
  );
}
