import type { Metadata } from 'next';
import styles from '../enquiries.module.css';

export const metadata: Metadata = {
  title: 'Enquiry received | Murivest UK',
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <main className={styles.wrap}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Murivest UK</p>
        <h1 className={styles.h1}>Thank you. Your enquiry has been received.</h1>
        <p className={styles.lede}>
          A member of the Murivest team will review your details and respond using your preferred contact method.
          Eligibility checks apply to some opportunities, and nothing here is an offer or a commitment.
        </p>
        <p className={styles.notice}>
          For your protection, verify any payment instructions through an independent channel before sending funds to
          anyone, including anyone claiming to act for Murivest.
        </p>
        <p className={styles.links}>
          While you wait: read{' '}
          <a href="/research/kenyan-investors-uk-real-estate-ksh-3-5-million-cross-border">
            Kenyan Investors and UK Real Estate from KSh 3.5 Million
          </a>
          , or return to the <a href="/united-kingdom">UK hub</a>.
        </p>
      </div>
    </main>
  );
}