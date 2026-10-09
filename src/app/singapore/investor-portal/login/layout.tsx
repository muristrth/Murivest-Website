import type { Metadata } from 'next';

// Added in audit 2026-10-09: private/non-public area. Pure noindex metadata (no access-control change).
// noindex is NOT access control - see audit/2026-10-09-security-crawl-report.md.
export const metadata: Metadata = {
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function PrivateAreaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}