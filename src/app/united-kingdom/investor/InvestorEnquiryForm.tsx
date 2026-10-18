'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import styles from './enquiries.module.css';
import {
  BUDGETS,
  CONTACT_METHODS,
  INTERESTS,
  INVESTOR_CATEGORIES,
  TIMEFRAMES,
} from '@/lib/uk/uk-enquiry-schema';

type Errors = Record<string, string>;

export default function InvestorEnquiryForm({ refSource }: { refSource: string }) {
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [startedAt] = useState(() => Date.now());

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError('');
    setErrors({});
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);
    const payload = {
      fullName: fd.get('fullName'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      country: fd.get('country'),
      city: fd.get('city'),
      investorCategory: fd.get('investorCategory'),
      interest: fd.get('interest'),
      budget: fd.get('budget'),
      timeframe: fd.get('timeframe'),
      contactMethod: fd.get('contactMethod'),
      message: fd.get('message'),
      consent: fd.get('consent') === 'on',
      website: fd.get('website'), // honeypot
      startedAt,
      ref: refSource,
    };

    try {
      const res = await fetch('/api/uk-investor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        router.push('/united-kingdom/investor/thank-you');
        return;
      }
      if (json.errors) setErrors(json.errors);
      else setServerError(json.message || 'Something went wrong. Please try again.');
    } catch {
      setServerError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  }

  const Err = ({ name }: { name: string }) =>
    errors[name] ? <span className={styles.err} role="alert">{errors[name]}</span> : null;

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="fullName">Full name <span className={styles.req}>*</span></label>
          <input className={styles.input} id="fullName" name="fullName" autoComplete="name" required maxLength={120} />
          <Err name="fullName" />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">Email <span className={styles.req}>*</span></label>
          <input className={styles.input} id="email" name="email" type="email" autoComplete="email" required maxLength={200} />
          <Err name="email" />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">Phone or WhatsApp <span className={styles.req}>*</span></label>
          <input className={styles.input} id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+254 ..." required maxLength={25} />
          <Err name="phone" />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="contactMethod">Preferred contact method <span className={styles.req}>*</span></label>
          <select className={styles.select} id="contactMethod" name="contactMethod" defaultValue="" required>
            <option value="" disabled>Select</option>
            {CONTACT_METHODS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          <Err name="contactMethod" />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="country">Country of residence <span className={styles.req}>*</span></label>
          <input className={styles.input} id="country" name="country" defaultValue="Kenya" autoComplete="country-name" required maxLength={80} />
          <Err name="country" />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="city">City</label>
          <input className={styles.input} id="city" name="city" autoComplete="address-level2" placeholder="Nairobi" maxLength={80} />
        </div>

        <div className={`${styles.field} ${styles.full}`}>
          <label className={styles.label} htmlFor="investorCategory">Which best describes you? <span className={styles.req}>*</span></label>
          <select className={styles.select} id="investorCategory" name="investorCategory" defaultValue="" required>
            <option value="" disabled>Select</option>
            {INVESTOR_CATEGORIES.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          <Err name="investorCategory" />
        </div>

        <div className={`${styles.field} ${styles.full}`}>
          <label className={styles.label} htmlFor="interest">What would you like information on? <span className={styles.req}>*</span></label>
          <select className={styles.select} id="interest" name="interest" defaultValue="" required>
            <option value="" disabled>Select</option>
            {INTERESTS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          <Err name="interest" />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="budget">Approximate capital to allocate <span className={styles.req}>*</span></label>
          <select className={styles.select} id="budget" name="budget" defaultValue="" required>
            <option value="" disabled>Select</option>
            {BUDGETS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          <Err name="budget" />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="timeframe">Timeframe</label>
          <select className={styles.select} id="timeframe" name="timeframe" defaultValue="">
            <option value="">Select (optional)</option>
            {TIMEFRAMES.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          <Err name="timeframe" />
        </div>

        <div className={`${styles.field} ${styles.full}`}>
          <label className={styles.label} htmlFor="message">Anything we should know? (optional)</label>
          <textarea className={styles.textarea} id="message" name="message" maxLength={2000} />
        </div>

        {/* Honeypot: hidden from people, visible to bots */}
        <div className={styles.hp} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className={`${styles.field} ${styles.full}`}>
          <label className={styles.consent}>
            <input type="checkbox" name="consent" />
            <span>
              I agree that Murivest Group Ltd may use these details to respond to my enquiry, and I have read the{' '}
              <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. <span className={styles.req}>*</span>
            </span>
          </label>
          <Err name="consent" />
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <button className={styles.btn} type="submit" disabled={submitting}>
          {submitting ? 'Sending...' : 'Submit enquiry'}
        </button>
        <div aria-live="polite">
          {serverError && <p className={`${styles.status} ${styles.statusErr}`}>{serverError}</p>}
        </div>
      </div>

      <p className={styles.fine}>
        This form is a request for information, not an application to invest and not an offer. Submitting it does not
        commit you to anything. Do not include bank details or ID numbers.
      </p>
    </form>
  );
}