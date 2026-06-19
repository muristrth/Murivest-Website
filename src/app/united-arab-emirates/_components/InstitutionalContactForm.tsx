'use client';

import { useState, FormEvent } from 'react';
import { ChevronDown } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

// ─── Field Configuration ───────────────────────────────────────────

const FORM_FIELDS = [
  {
    id: 'name',
    kind: 'text' as const,
    type: 'text',
    label: 'Full Name',
    placeholder: 'e.g. James Mwangi',
    required: true,
  },
  {
    id: 'email',
    kind: 'text' as const,
    type: 'email',
    label: 'Email Address',
    placeholder: 'james@organization.co.ke',
    required: true,
  },
  {
    id: 'phone',
    kind: 'text' as const,
    type: 'tel',
    label: 'Phone Number',
    placeholder: '+254 712 345 678',
    required: false,
  },
  {
    id: 'organization',
    kind: 'text' as const,
    type: 'text',
    label: 'Organization / Fund',
    placeholder: 'e.g. Acumen Capital Partners',
    required: false,
  },
  {
    id: 'mandateType',
    kind: 'select' as const,
    label: 'Mandate Type',
    placeholder: 'Select mandate category',
    required: true,
    options: [
      'Direct Real Estate Acquisition',
      'Portfolio Allocation Strategy',
      'Development Partnership',
      'Family Office Advisory',
      'Institutional Fund Placement',
      'Other',
    ],
  },
  {
    id: 'investmentRange',
    kind: 'select' as const,
    label: 'Investment Range (USD)',
    placeholder: 'Select approximate range',
    required: true,
    options: [
      'Under $500,000',
      '$500,000 — $2,000,000',
      '$2,000,000 — $5,000,000',
      '$5,000,000 — $10,000,000',
      '$10,000,000+',
      'To be discussed',
    ],
  },
  {
    id: 'timeline',
    kind: 'select' as const,
    label: 'Expected Timeline',
    placeholder: 'Select investment horizon',
    required: true,
    options: [
      'Immediate (0–3 months)',
      'Short-term (3–6 months)',
      'Medium-term (6–12 months)',
      'Long-term (12+ months)',
      'Exploratory / No fixed timeline',
    ],
  },
  {
    id: 'message',
    kind: 'textarea' as const,
    label: 'Mandate Details',
    placeholder:
      'Describe your objectives, preferred markets, risk parameters, or any specific requirements...',
    required: false,
  },
] as const;

// ─── Utility Components ──────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="block font-body text-[11px] md:text-xs tracking-[0.16em] uppercase text-[#A67C52]">
      {children}
    </span>
  );
}

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-body text-xs tracking-[0.08em] uppercase text-[#595959] mb-3"
    >
      {children}
      {required ? <span className="text-[#9a4b3a] ml-1">*</span> : null}
    </label>
  );
}

function Reveal({ children }: { children: React.ReactNode }) {
  return <div className="animate-fade-in-up">{children}</div>;
}

// ─── Styles ──────────────────────────────────────────────────────────

const fieldBaseClasses =
  'w-full bg-[#f9f8f6] border border-[#DED8CE] px-4 py-3.5 font-body text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#A67C52] focus:ring-1 focus:ring-[#A67C52] transition-colors';

// ─── Main Component ─────────────────────────────────────────────────

export default function InstitutionalContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Request failed');
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something interrupted the request. Please try again, or write to advisory@murivest.com.'
      );
    }
  }

  // ─── Success State ───────────────────────────────────────────────

  if (status === 'success') {
    return (
      <section
        id="contact-form"
        className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white border-b border-[#DED8CE]"
      >
        <div
          className="max-w-[640px] mx-auto text-center"
          role="status"
          aria-live="polite"
        >
          <Eyebrow>Request Received</Eyebrow>
          <h2 className="font-display text-[28px] md:text-[38px] text-[#111111] mt-6 mb-4">
            Thank You.
          </h2>
          <p className="font-body text-sm md:text-base text-[#595959] leading-relaxed">
            A member of the Murivest advisory team will respond within one
            business day. Every detail you have shared remains confidential.
          </p>
        </div>
      </section>
    );
  }

  // ─── Form State ──────────────────────────────────────────────────

  return (
    <section
      id="contact-form"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white border-b border-[#DED8CE]"
    >
      <div className="max-w-[640px] mx-auto">
        <Reveal>
          <Eyebrow>Begin The Conversation</Eyebrow>
          <h2 className="font-display text-[28px] md:text-[40px] text-[#111111] mt-6 mb-4">
            Request A Confidential Discussion
          </h2>
          <p className="font-body text-sm md:text-base text-[#595959] leading-relaxed mb-16">
            Share your mandate parameters below. A member of the advisory team
            will respond directly and confidentially.
          </p>
        </Reveal>

        <form onSubmit={handleSubmit} className="space-y-10" noValidate>
          {FORM_FIELDS.map((field) => {
            if (field.kind === 'text') {
              return (
                <div key={field.id}>
                  <FieldLabel htmlFor={field.id} required={field.required}>
                    {field.label}
                  </FieldLabel>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    className={fieldBaseClasses}
                    autoComplete={
                      field.id === 'email'
                        ? 'email'
                        : field.id === 'name'
                        ? 'name'
                        : field.id === 'phone'
                        ? 'tel'
                        : 'organization'
                    }
                  />
                </div>
              );
            }

            if (field.kind === 'select') {
              return (
                <div key={field.id}>
                  <FieldLabel htmlFor={field.id} required={field.required}>
                    {field.label}
                  </FieldLabel>
                  <div className="relative">
                    <select
                      id={field.id}
                      name={field.id}
                      defaultValue=""
                      required={field.required}
                      className={`${fieldBaseClasses} appearance-none pr-10`}
                    >
                      <option value="" disabled>
                        {field.placeholder}
                      </option>
                      {field.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="w-4 h-4 text-[#A67C52] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              );
            }

            return (
              <div key={field.id}>
                <FieldLabel htmlFor={field.id} required={field.required}>
                  {field.label}
                </FieldLabel>
                <textarea
                  id={field.id}
                  name={field.id}
                  rows={5}
                  required={field.required}
                  placeholder={field.placeholder}
                  className={`${fieldBaseClasses} resize-none`}
                />
              </div>
            );
          })}

          {status === 'error' ? (
            <div
              role="alert"
              className="p-4 bg-[#fdf6f4] border border-[#e8d5d0] rounded-sm"
            >
              <p className="font-body text-sm text-[#9a4b3a]">
                {errorMessage}
              </p>
            </div>
          ) : null}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex items-center justify-center gap-3 mt-4 px-8 py-4 bg-[#111111] text-white font-body text-sm tracking-[0.08em] uppercase hover:bg-[#8E6A45] disabled:opacity-40 disabled:cursor-not-allowed transition-colors w-full sm:w-auto"
          >
            {status === 'submitting' ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending…
              </>
            ) : (
              'Request Confidential Discussion'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}