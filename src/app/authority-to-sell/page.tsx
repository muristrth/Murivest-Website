'use client';

import { useState } from 'react';
import { ShieldCheck, Landmark, Scale, FileText } from 'lucide-react';

export default function AuthorityToSellPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    const res = await fetch('/api/mandate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) setSuccess(true);
    setSubmitting(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-14">

        {/* Header */}
        <header className="space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl text-amber-500 tracking-wide">
            Authority to Sell Mandate
          </h1>
          <p className="text-slate-400 max-w-3xl leading-relaxed">
            This mandate formally authorizes Murivest Realty Limited to market,
            negotiate, and procure a purchaser for the property described herein,
            in accordance with the laws of Kenya and professional real estate practice.
          </p>
        </header>

        {/* Legal Highlights */}
        <section className="grid md:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: 'Legally Binding', desc: 'Executed digitally with formal acknowledgment' },
            { icon: Landmark, title: 'Institutional Grade', desc: 'Compliant with Kenyan property law' },
            { icon: Scale, title: 'Transparent Commission', desc: 'Disclosed and contractually protected' },
            { icon: FileText, title: 'Audit Trail', desc: 'Email confirmation to all parties' },
          ].map((item, i) => (
            <div key={i} className="border border-slate-800 rounded-2xl p-6 bg-slate-900/60">
              <item.icon className="h-6 w-6 text-amber-500 mb-4" />
              <h3 className="font-serif text-lg text-slate-100">{item.title}</h3>
              <p className="text-sm text-slate-400 mt-2">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Form */}
        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-10">
            <section className="grid md:grid-cols-2 gap-6">
              <input required name="vendorName" placeholder="Seller Full Name"
                className="input" />
              <input required name="vendorId" placeholder="National ID / Passport"
                className="input" />
              <input required name="email" type="email" placeholder="Seller Email Address"
                className="input" />
              <input required name="phone" placeholder="Phone Number"
                className="input" />
            </section>

            <section className="grid md:grid-cols-2 gap-6">
              <input required name="titleNumber" placeholder="Property LR No."
                className="input" />
              <input required name="location" placeholder="Property Location"
                className="input" />
              <input required name="price" placeholder="Asking Price (KES)"
                className="input" />
              <input required name="commission" placeholder="Standard 2%"
                className="input" />
            </section>

            <section>
              <label className="flex items-start gap-3 text-sm text-slate-400">
                <input type="checkbox" required className="mt-1 accent-amber-500" />
                <span>
                  I hereby grant Murivest Realty Limited authority to market and sell the
                  above property and confirm that the information provided is accurate.
                </span>
              </label>
            </section>

            <button
              disabled={submitting}
              className="bg-amber-500 text-slate-950 font-semibold px-10 py-4 rounded-xl hover:bg-amber-400 transition"
            >
              {submitting ? 'Submitting Mandate…' : 'Execute Authority to Sell'}
            </button>
          </form>
        ) : (
          <div className="border border-amber-500/30 rounded-2xl p-10 bg-slate-900">
            <h2 className="font-serif text-2xl text-amber-500 mb-4">
              Authority Successfully Executed
            </h2>
            <p className="text-slate-400">
              A formal confirmation has been issued to your email address and to
              Murivest Realty Limited for record, compliance, and execution.
            </p>
          </div>
        )}
      </div>

      {/* Input styling */}
      <style jsx>{`
        .input {
          background: #020617;
          border: 1px solid #1e293b;
          border-radius: 0.75rem;
          padding: 0.9rem 1rem;
          color: #e5e7eb;
          outline: none;
        }
        .input:focus {
          border-color: #f59e0b;
        }
      `}</style>
    </main>
  );
}
