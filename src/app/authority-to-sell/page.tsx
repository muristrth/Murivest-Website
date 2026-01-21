'use client';

import { useState, FormEvent } from 'react';
import { ShieldCheck, Landmark, Scale, FileText, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

type FormData = {
  vendorName: string;
  vendorId: string;
  email: string;
  phone: string;
  titleNumber: string;
  location: string;
  price: string;
  commission: string;
};

export default function AuthorityToSellPage() {
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mandateRef, setMandateRef] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const target = e.currentTarget;
    const formData: FormData = {
      vendorName: (target.elements.namedItem('vendorName') as HTMLInputElement).value,
      vendorId: (target.elements.namedItem('vendorId') as HTMLInputElement).value,
      email: (target.elements.namedItem('email') as HTMLInputElement).value,
      phone: (target.elements.namedItem('phone') as HTMLInputElement).value,
      titleNumber: (target.elements.namedItem('titleNumber') as HTMLInputElement).value,
      location: (target.elements.namedItem('location') as HTMLInputElement).value,
      price: (target.elements.namedItem('price') as HTMLInputElement).value,
      commission: (target.elements.namedItem('commission') as HTMLInputElement).value,
    };

    try {
      const res = await fetch('/api/mandate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setMandateRef(result.mandateReference);
        setShowModal(true);
      } else {
        setError(result.error || 'Submission failed. Please try again.');
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  }

  const inputClasses = "w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-slate-200 outline-none focus:border-amber-500 transition-all text-[15px] placeholder:text-slate-600 focus:ring-4 focus:ring-amber-500/10";

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-12">

        <header className="space-y-6 text-center">
          <div className="inline-block px-6 py-2 bg-slate-900 rounded-full border border-amber-500/30">
            <p className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase">
              Official Mandate Documentation
            </p>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-white tracking-tight">
            Authority to <span className="text-amber-500">Sell</span>
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-lg font-light">
            This instrument constitutes a formal mandate authorizing Murivest Realty Limited 
            to market, negotiate, and procure a bona fide purchaser for the property.
          </p>
        </header>

        {error && (
          <div className="bg-red-950/40 border border-red-500/30 rounded-xl p-4 flex items-start gap-3 max-w-4xl mx-auto shadow-xl">
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <p className="text-red-200 text-sm font-medium">{error}</p>
          </div>
        )}

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: 'Legally Binding', desc: 'Digitally executed with audit trail' },
            { icon: Landmark, title: 'Compliance', desc: 'Estate Agents Act compliant' },
            { icon: Scale, title: 'Transparent', desc: 'Protected fee disclosure' },
            { icon: FileText, title: 'Audit Trail', desc: 'Immutable digital record' },
          ].map((item, i) => (
            <div key={i} className="border border-slate-900 rounded-2xl p-6 bg-slate-900/40 backdrop-blur-sm transition-all hover:border-amber-500/30 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-500/5 rounded-xl flex items-center justify-center group-hover:bg-amber-500/10 transition-colors">
                  <item.icon className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="font-serif text-lg text-white font-medium">{item.title}</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">{item.desc}</p>
            </div>
          ))}
        </section>

        {!showModal && (
          <form onSubmit={handleSubmit} className="space-y-12 max-w-4xl mx-auto bg-slate-900/20 p-8 md:p-12 rounded-3xl border border-slate-900/50">
            <section className="space-y-8">
              <div className="flex items-center gap-4 pb-4 border-b border-slate-900">
                <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 font-bold">1</div>
                <h2 className="font-serif text-2xl text-white">Vendor Particulars</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { label: 'Full Legal Name', name: 'vendorName', type: 'text', placeholder: 'Legal Owner Name' },
                  { label: 'National ID / Passport', name: 'vendorId', type: 'text', placeholder: 'Identification No.' },
                  { label: 'Email Address', name: 'email', type: 'email', placeholder: 'legal@example.com' },
                  { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '07xx xxx xxx' },
                ].map((f) => (
                  <div key={f.name} className="space-y-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">{f.label}</label>
                    <input 
                      required 
                      name={f.name} 
                      type={f.type}
                      placeholder={f.placeholder}
                      className={inputClasses}
                    />
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-4 pb-4 border-b border-slate-900">
                <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 font-bold">2</div>
                <h2 className="font-serif text-2xl text-white">Property Details</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { label: 'Property Title Number', name: 'titleNumber', placeholder: 'LR Number' },
                  { label: 'Property Location', name: 'location', placeholder: 'City / Area' },
                  { label: 'Asking Price (KES)', name: 'price', type: 'number', placeholder: 'Amount in KES' },
                  { label: 'Commission Rate', name: 'commission', default: '2%' },
                ].map((f) => (
                  <div key={f.name} className="space-y-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">{f.label}</label>
                    <input 
                      required 
                      name={f.name} 
                      type={f.type || 'text'}
                      defaultValue={f.default}
                      placeholder={f.placeholder}
                      className={inputClasses}
                    />
                  </div>
                ))}
              </div>
            </section>

            <div className="pt-8 text-center">
              <button
                type="submit"
                disabled={submitting}
                className="bg-amber-500 text-slate-950 font-bold px-16 py-5 rounded-2xl hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto text-sm uppercase tracking-widest shadow-2xl shadow-amber-500/10"
              >
                {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShieldCheck className="w-5 h-5" />}
                <span>{submitting ? 'Processing...' : 'Execute Mandate'}</span>
              </button>
              <p className="mt-6 text-[10px] text-slate-600 uppercase tracking-[0.2em]">
                Secure Digital Execution &bull; Institutional Compliance
              </p>
            </div>
          </form>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"></div>
          <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-12 max-w-xl w-full text-center space-y-8 shadow-3xl">
            <div className="w-24 h-24 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-12 h-12 text-amber-500" />
            </div>
            <div className="space-y-2">
              <h2 className="font-serif text-4xl text-white font-medium">Successfully Executed</h2>
              <p className="text-slate-400 font-light">Your formal mandate has been generated and logged.</p>
            </div>
            <div className="bg-slate-950 border border-white/5 rounded-2xl p-6">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">Mandate Reference</p>
              <p className="text-amber-500 font-mono font-bold text-2xl tracking-widest">{mandateRef}</p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              A copy of the mandate has been dispatched to <span className="text-white font-medium">your email</span> and our legal desk for immediate listing preparation.
            </p>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => window.location.reload()} 
                className="w-full bg-white text-slate-950 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-amber-500 transition-colors"
              >
                Submit Another Mandate
              </button>
              <button 
                onClick={() => setShowModal(false)} 
                className="w-full bg-slate-800 text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}