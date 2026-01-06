'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import {
  Crown,
  Globe,
  Shield,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Building2,
  Clock,
  ArrowRight,
  Lock,
  BarChart3
} from 'lucide-react';

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  propertyType?: string;
};

interface FormData {
  propertyType: string;
  location: string;
  price: string;
  name: string;
  email: string;
  phone: string;
  description: string;
}

const SellProperty = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<'success' | 'error' | 'validation-error' | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    propertyType: '',
    location: '',
    price: '',
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Required';
    if (!formData.propertyType) newErrors.propertyType = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name as keyof FormErrors]: undefined }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      setSubmitStatus('validation-error');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/property-inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'asset-divestment' })
      });

      if (!response.ok) throw new Error();
      setSubmitStatus('success');
      setFormData({
        propertyType: '',
        location: '',
        price: '',
        name: '',
        email: '',
        phone: '',
        description: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-amber-500/30">
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 border border-amber-500/20 rounded-full">
              <Crown className="h-8 w-8 text-amber-500" />
            </div>
          </div>
          <p className="text-amber-200/60 uppercase tracking-[0.4em] text-[10px] mb-6">
            Confidential Capital Placement
          </p>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight leading-tight">
            Institutional Asset <span className="italic text-amber-200/90">Disposition</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg font-light leading-relaxed mb-16">
            Murivest facilitates the discreet disposition of prime commercial assets, 
            connecting property owners with global sovereign wealth, pension funds, 
            and family office capital.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 max-w-4xl mx-auto bg-white/[0.02] backdrop-blur-sm">
            <div className="p-10 border-b md:border-b-0 md:border-r border-white/10">
              <div className="text-3xl font-serif text-amber-200 mb-2">$10M+</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Mandate Floor</div>
            </div>
            <div className="p-10 border-b md:border-b-0 md:border-r border-white/10">
              <div className="text-3xl font-serif text-amber-200 mb-2">Tier 1</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Investor Pipeline</div>
            </div>
            <div className="p-10">
              <div className="text-3xl font-serif text-amber-200 mb-2">Off-Market</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Protocol</div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC MANDATE FORM */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20">
            
            {/* Left side: Context */}
            <div className="lg:col-span-4 space-y-12">
              <div>
                <h3 className="text-xs uppercase tracking-[0.4em] text-amber-500 font-bold mb-8 text-left">The Murivest Standard</h3>
                <div className="space-y-10">
                  {[
                    { icon: Globe, title: "Capital Reach", text: "Direct access to institutional LPs in London, Dubai, and Singapore." },
                    { icon: Lock, title: "Discretion", text: "Selective information disclosure protocols to protect asset value." },
                    { icon: BarChart3, title: "Yield Optimization", text: "Financial modeling designed to satisfy institutional risk-return mandates." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <item.icon size={24} className="text-amber-500/40 shrink-0 group-hover:text-amber-500 transition-colors duration-500" />
                      <div>
                        <h4 className="font-serif text-xl mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-sm font-light leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-8 bg-amber-500/5 border border-amber-500/10 italic text-slate-400 font-light text-sm leading-loose">
                "Our disposition process is engineered to reduce time-on-market while maintaining the valuation integrity expected by top-tier owners."
              </div>
            </div>

            {/* Right side: Form */}
            <div className="lg:col-span-8">
              <div className="bg-white/[0.02] border border-white/5 p-10 md:p-16 shadow-2xl">
                <h2 className="text-3xl font-serif mb-12">Submit <span className="italic text-amber-200/90">Asset for Review</span></h2>
                
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="relative group">
                      <label className="block text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2 group-focus-within:text-amber-500 transition-colors">Principal Name</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-transparent border-b border-white/10 w-full py-3 outline-none focus:border-amber-500 transition-colors text-amber-50 text-lg font-light"
                        placeholder="Full Legal Name"
                      />
                    </div>
                    <div className="relative group">
                      <label className="block text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2 group-focus-within:text-amber-500 transition-colors">Institutional Email</label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-transparent border-b border-white/10 w-full py-3 outline-none focus:border-amber-500 transition-colors text-amber-50 text-lg font-light"
                        placeholder="email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="relative group">
                      <label className="block text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2 group-focus-within:text-amber-500 transition-colors">Primary Asset Class</label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="bg-transparent border-b border-white/10 w-full py-3 outline-none focus:border-amber-500 transition-colors text-amber-50 text-lg font-light appearance-none"
                      >
                        <option value="" className="bg-slate-900">Select Asset Class</option>
                        <option value="office" className="bg-slate-900">Grade A Office</option>
                        <option value="industrial" className="bg-slate-900">Logistics / Industrial</option>
                        <option value="hospitality" className="bg-slate-900">Hospitality Portfolio</option>
                        <option value="retail" className="bg-slate-900">Prime Retail / Mixed-Use</option>
                      </select>
                    </div>
                    <div className="relative group">
                      <label className="block text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2 group-focus-within:text-amber-500 transition-colors">Target Valuation</label>
                      <input
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="bg-transparent border-b border-white/10 w-full py-3 outline-none focus:border-amber-500 transition-colors text-amber-50 text-lg font-light"
                        placeholder="USD / KES Range"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2 group-focus-within:text-amber-500 transition-colors">Asset Summary</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={3}
                      className="bg-transparent border-b border-white/10 w-full py-3 outline-none focus:border-amber-500 transition-colors text-amber-50 text-lg font-light resize-none"
                      placeholder="High-level overview of tenancy and lease duration"
                    />
                  </div>

                  <div className="pt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 bg-amber-600 hover:bg-amber-500 text-slate-950 text-[10px] tracking-[0.4em] uppercase font-bold transition-all flex items-center justify-center gap-4 group"
                    >
                      {isSubmitting ? 'Processing Mandate...' : (
                        <>Initialize Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></>
                      )}
                    </button>
                    <p className="text-center text-[10px] text-slate-600 mt-8 tracking-[0.2em] uppercase font-light">
                      All engagements are governed by strict non-disclosure protocols
                    </p>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 text-emerald-400 text-center flex items-center justify-center gap-3">
                      <CheckCircle size={18} /> Mandate received. A Senior Partner will contact you shortly.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVATE DISCLOSURE FOOTER */}
      <section className="bg-black py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif mb-12 italic">Bespoke <span className="text-amber-200/90">Briefings</span></h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 text-slate-400 text-sm">
            <span className="flex items-center justify-center gap-3">
              <Phone className="h-4 w-4 text-amber-500" />
              +254 729 170 156
            </span>
            <span className="flex items-center justify-center gap-3">
              <Mail className="h-4 w-4 text-amber-500" />
              investments@murivest.co.ke
            </span>
            <span className="flex items-center justify-center gap-3">
              <MapPin className="h-4 w-4 text-amber-500" />
              Nairobi, Kenya
            </span>
          </div>
          <div className="mt-16 max-w-2xl mx-auto border-t border-white/5 pt-12">
            <p className="text-[9px] uppercase tracking-[0.3em] text-slate-700 leading-loose">
              Murivest Asset Stewardship © 2026. This portal is for qualified institutional investors and asset owners. 
              The information provided herein is subject to the Murivest Privacy and Confidentiality Framework.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellProperty;