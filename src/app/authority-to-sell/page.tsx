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

  const inputClasses = "w-full bg-white border border-[#E8E6E1] rounded-none p-4 text-[#2C2C2C] outline-none focus:border-[#B8956B] transition-all text-[15px] placeholder:text-[#2C2C2C]/40 focus:ring-1 focus:ring-[#B8956B]/20 font-light";

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C] pt-[64px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 space-y-16">

        {/* Editorial Header */}
        <header className="space-y-8 border-b border-[#E8E6E1] pb-16">
          <div className="flex items-center gap-4">
            <div className="w-16 h-[1px] bg-[#B8956B]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#B8956B] font-medium">
              Mandate Documentation
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1B4332] leading-[1.1]">
                Authority to <span className="italic text-[#B8956B] font-light">Sell</span>
              </h1>
            </div>
            <p className="text-[#2C2C2C]/70 font-light leading-relaxed text-lg md:text-right border-l-0 md:border-l border-[#E8E6E1] md:pl-8">
              This instrument constitutes a formal mandate authorizing Murivest Realty 
              to market and procure a bona fide purchaser for the herein described property.
            </p>
          </div>
        </header>

        {/* Error Alert */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-none p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <p className="text-red-800 text-sm font-light">{error}</p>
          </div>
        )}

        {/* Features Grid */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: 'Legally Binding', desc: 'Formal execution with audit trail' },
            { icon: Landmark, title: 'Compliance', desc: 'Estate Agents Act compliant' },
            { icon: Scale, title: 'Transparent', desc: 'Protected fee structure' },
            { icon: FileText, title: 'Documentation', desc: 'Complete legal record' },
          ].map((item, i) => (
            <div key={i} className="border-t-2 border-[#E8E6E1] pt-6 bg-white/50 p-6 hover:border-[#B8956B] transition-colors duration-500">
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="h-5 w-5 text-[#B8956B]" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-[#1B4332]">{item.title}</h3>
              </div>
              <p className="text-sm text-[#2C2C2C]/60 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Form */}
        {!showModal && (
          <form onSubmit={handleSubmit} className="space-y-16 bg-white border border-[#E8E6E1] p-8 md:p-12 lg:p-16">
            
            {/* Section 1 */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 pb-4 border-b border-[#E8E6E1]">
                <span className="font-serif text-2xl text-[#B8956B]">01</span>
                <h2 className="font-serif text-2xl text-[#1B4332]">Vendor Particulars</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-2">
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C]/60 font-medium">Full Legal Name</label>
                  <input required name="vendorName" type="text" placeholder="Legal Owner Name" className={inputClasses} />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C]/60 font-medium">National ID / Passport</label>
                  <input required name="vendorId" type="text" placeholder="Identification Number" className={inputClasses} />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C]/60 font-medium">Email Address</label>
                  <input required name="email" type="email" placeholder="legal@example.com" className={inputClasses} />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C]/60 font-medium">Telephone</label>
                  <input required name="phone" type="tel" placeholder="+254 7XX XXX XXX" className={inputClasses} />
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 pb-4 border-b border-[#E8E6E1]">
                <span className="font-serif text-2xl text-[#B8956B]">02</span>
                <h2 className="font-serif text-2xl text-[#1B4332]">Property & Transaction</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-2">
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C]/60 font-medium">Title Number</label>
                  <input required name="titleNumber" type="text" placeholder="LR Number / Title Deed" className={inputClasses} />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C]/60 font-medium">Location</label>
                  <input required name="location" type="text" placeholder="Property Address" className={inputClasses} />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C]/60 font-medium">Asking Price (KES)</label>
                  <input required name="price" type="number" placeholder="0.00" className={inputClasses} />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C]/60 font-medium">Commission</label>
                  <input required name="commission" type="text" defaultValue="2%" className={inputClasses} />
                </div>
              </div>
            </section>

            {/* Submit */}
            <div className="pt-8 border-t border-[#E8E6E1] flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-xs text-[#2C2C2C]/50 font-light italic max-w-md">
                By executing this mandate, you confirm legal authority to dispose of the aforementioned property.
              </p>
              
              <button
                type="submit"
                disabled={submitting}
                className="bg-[#1B4332] text-[#FAF9F6] font-medium px-12 py-4 hover:bg-[#2D5A45] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase shadow-lg shadow-[#1B4332]/10"
              >
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
                <span>{submitting ? 'Processing...' : 'Execute Mandate'}</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#1B4332]/20 backdrop-blur-sm">
          <div className="relative bg-[#FAF9F6] border border-[#E8E6E1] p-12 md:p-16 max-w-lg w-full text-center space-y-8 shadow-2xl">
            <div className="w-16 h-16 bg-[#1B4332] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-[#B8956B]" />
            </div>
            
            <div className="space-y-2">
              <h2 className="font-serif text-3xl text-[#1B4332]">Mandate Executed</h2>
              <p className="text-[#2C2C2C]/60 font-light">Your formal authority has been recorded.</p>
            </div>
            
            <div className="bg-white border border-[#E8E6E1] p-6">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C]/50 mb-2">Reference Number</p>
              <p className="text-[#B8956B] font-mono text-xl tracking-widest font-medium">{mandateRef}</p>
            </div>
            
            <p className="text-sm text-[#2C2C2C]/70 font-light leading-relaxed">
              Confirmation has been dispatched to your email. Our legal team will 
              review the documentation and contact you within 24 hours.
            </p>
            
            <div className="flex flex-col gap-3 pt-4">
              <button 
                onClick={() => window.location.reload()} 
                className="w-full bg-[#1B4332] text-[#FAF9F6] py-4 font-medium text-[11px] tracking-[0.2em] uppercase hover:bg-[#2D5A45] transition-colors"
              >
                Submit New Mandate
              </button>
              <button 
                onClick={() => setShowModal(false)} 
                className="w-full border border-[#E8E6E1] text-[#2C2C2C] py-4 font-medium text-[11px] tracking-[0.2em] uppercase hover:bg-[#E8E6E1] transition-colors"
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