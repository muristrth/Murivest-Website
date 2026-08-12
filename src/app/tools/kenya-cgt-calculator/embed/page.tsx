import { Metadata } from 'next';
import KenyaCGTCalculatorClient from '../page';

export const metadata: Metadata = {
  title: 'Embed - Kenya Capital Gains Tax Calculator',
  description: 'Embeddable Kenya CGT calculator for property capital gains tax. Free widget for accountants, law firms, and property blogs.',
};

export default function EmbedPage() {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, sans-serif', backgroundColor: '#F8F7F4' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '24px' }}>
          <KenyaCGTCalculatorClient />
          <div style={{ marginTop: '32px', paddingTop: '16px', borderTop: '1px solid #E5E2DC', textAlign: 'center' }}>
            <p style={{ fontSize: '11px', color: '#5A5A5A', margin: 0 }}>
              Powered by{' '}
              <a href="https://murivest.com/tools/kenya-cgt-calculator" style={{ color: '#8B7355', textDecoration: 'none' }}>
                Murivest Realty Group
              </a>
              {' '}— Nairobi-based commercial real estate advisory founded 2025.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
