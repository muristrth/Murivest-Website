import type { Metadata } from 'next';
import InvestorEnquiryForm from './InvestorEnquiryForm';
import styles from './enquiries.module.css';

export const metadata: Metadata = {
  title: 'UK Property Investor Enquiry | Murivest',
  description:
    'Request information on selected UK property opportunities from Murivest. For Kenyan and international investors. Mandate-based, confidential, no obligation.',
  alternates: { canonical: 'https://murivest.com/united-kingdom/investor-enquiry' },
  // Conversion page, not a ranking page. Remove this line if you want it indexed.
  robots: { index: false, follow: true },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;
  const refSource = typeof ref === 'string' && /^[a-z0-9-]{1,80}$/.test(ref) ? ref : '';

  return (
    <main className={styles.wrap}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Murivest UK</p>
        <h1 className={styles.h1}>UK property investor enquiry</h1>
        <p className={styles.lede}>
          Tell us what you are looking for and we will respond with the relevant information. Murivest provides a
          Nairobi-based point of contact for investors exploring selected UK opportunities, alongside its UK commercial
          real estate advisory.
        </p>
        <p className={styles.notice}>
          Some opportunities are restricted to professional or high-net-worth investors and are subject to identity,
          source-of-funds and eligibility checks. Murivest does not pool investor capital and does not provide regulated
          investment advice. Capital is at risk.
        </p>

        <section id="form" aria-label="Enquiry form">
          <InvestorEnquiryForm refSource={refSource} />
        </section>

        <p className={styles.links}>
          Prefer to read first? See the <a href="/kenya/research/kenyan-investors-uk-real-estate-ksh-3-5-million-cross-border">research note for Kenyan investors</a>,
          or explore the <a href="/united-kingdom">UK commercial real estate hub</a>.
        </p>
      </div>
    </main>
  );
}