'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Check, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  variant?: 'full' | 'compact';
}

export default function ContactForm({ variant = 'full' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'acquisition',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.fullName || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-[#E8E6E1] p-8 md:p-12 text-center"
      >
        <div className="w-16 h-16 border border-[#1B4332] flex items-center justify-center mx-auto mb-6">
          <Check className="w-6 h-6 text-[#1B4332]" strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-2xl text-[#2C2C2C] mb-3">Thank You</h3>
        <p className="text-sm text-[#5A5A5A] font-light leading-relaxed max-w-md mx-auto">
          Your inquiry has been received by our Singapore advisory team. A senior advisor will respond within 24 hours. 
          Reference: <span className="font-mono text-[#B8956B]">MRV-SG-{Date.now().toString(36).toUpperCase()}</span>
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
      {/* Left: Contact Info */}
      {variant === 'full' && (
        <div className="lg:col-span-2 bg-[#1B4332] p-8 md:p-12">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] mb-6 font-medium">
            Get in Touch
          </p>
          <h3 className="font-serif text-2xl text-white mb-6 leading-tight">
            Speak to a Senior Advisor
          </h3>
          <p className="text-sm text-white/60 font-light leading-relaxed mb-10">
            Our Singapore team advises UHNWI, family offices, and sovereign wealth funds on institutional-grade commercial real estate transactions.
          </p>

          <div className="space-y-6">
            {[
              { icon: <MapPin className="w-4 h-4" strokeWidth={1.5} />, label: 'Office', value: '1 Raffles Place, #24-01, Singapore 048616' },
              { icon: <Phone className="w-4 h-4" strokeWidth={1.5} />, label: 'Phone', value: '+65 6123 4567' },
              { icon: <Mail className="w-4 h-4" strokeWidth={1.5} />, label: 'Email', value: 'singapore@murivest.com' },
              { icon: <Clock className="w-4 h-4" strokeWidth={1.5} />, label: 'Hours', value: 'Mon – Fri: 09:00 – 18:00 SGT' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#B8956B] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-white/40 mb-1">{item.label}</p>
                  <p className="text-sm text-white/80">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-white/10">
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Confidentiality</p>
            <p className="text-[11px] text-white/50 leading-relaxed">
              All inquiries are handled under strict confidentiality. We operate under Singapore PDPA compliance and can execute NDAs prior to any information disclosure.
            </p>
          </div>
        </div>
      )}

      {/* Right: Form */}
      <div className={`${variant === 'full' ? 'lg:col-span-3' : 'lg:col-span-5'} bg-white border border-[#E8E6E1] p-8 md:p-12`}>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm p-3 bg-red-50 border border-red-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                Full Name <span className="text-[#B8956B]">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] py-3 outline-none focus:border-[#8B7355] transition-colors placeholder:text-[#B0ADA6]"
                placeholder="As per passport / ID"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                Email Address <span className="text-[#B8956B]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] py-3 outline-none focus:border-[#8B7355] transition-colors placeholder:text-[#B0ADA6]"
                placeholder="primary@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] py-3 outline-none focus:border-[#8B7355] transition-colors placeholder:text-[#B0ADA6]"
                placeholder="+65 XXXX XXXX"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                Company / Family Office
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] py-3 outline-none focus:border-[#8B7355] transition-colors placeholder:text-[#B0ADA6]"
                placeholder="Entity name (if applicable)"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
              Inquiry Type
            </label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] py-3 outline-none focus:border-[#8B7355] transition-colors cursor-pointer"
            >
              <option value="acquisition">Property Acquisition</option>
              <option value="disposition">Property Disposition</option>
              <option value="advisory">General Advisory</option>
              <option value="portfolio">Portfolio Advisory</option>
              <option value="portal">Investor Portal Access</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
              Message <span className="text-[#B8956B]">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] py-3 outline-none focus:border-[#8B7355] transition-colors resize-none placeholder:text-[#B0ADA6]"
              placeholder="Describe your investment mandate, target asset class, and any specific requirements..."
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-10 py-4 bg-[#1B4332] text-white text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#2D5A45] transition-colors"
            >
              Submit Inquiry
            </button>
            <p className="text-[10px] text-[#8B8680] mt-4">
              By submitting this form, you agree to our privacy policy and consent to contact regarding your inquiry.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
