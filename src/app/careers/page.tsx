'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Send,
  Upload,
  AlertCircle,
} from 'lucide-react';

export default function CareersPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    currentRole: '',
    experience: '',
    linkedin: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.currentTarget;
    const formDataFull = new FormData(form);

    const file = formDataFull.get('cv') as File;
    if (file && file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5 MB.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        body: formDataFull,
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          currentRole: '',
          experience: '',
          linkedin: '',
          message: '',
        });
        setFileName('');
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Network error – please check your connection.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative bg-[#F8F7F4] text-[#2C2C2C] overflow-hidden">
      {/* Hairline top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Job Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
                Murivest Careers
              </p>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-8 text-[#2C2C2C]">
              Build A Career In
              <br />
              <span className="italic text-[#8B7355] font-light">
                Institutional Real Estate
              </span>
            </h2>

            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-8" />

            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-12">
              Murivest is building one of East Africa’s most sophisticated
              commercial real estate advisory platforms. We work with investors,
              developers, family offices, diaspora capital, and institutional
              stakeholders seeking strategic real estate acquisition and market
              intelligence across Kenya.
            </p>

            {/* Position & Compensation */}
            <div className="space-y-8">
              <div>
                <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-2">
                  Position
                </p>
                <p className="text-[16px] text-[#2C2C2C] font-light">Associate Capital Advisor</p>
              </div>

              <div>
                <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-2">
                  Compensation
                </p>
                <p className="text-[14px] text-[#2C2C2C] font-light leading-relaxed">
                  Commission‑based structure with uncapped earning potential.
                  No fixed salary is provided.
                </p>
              </div>

              <div>
                <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-4">
                  Requirements
                </p>
                <ul className="space-y-3">
                  {[
                    'Strong communication and negotiation capability',
                    'Professional presentation and client handling',
                    'Strong interest in commercial real estate',
                    'Ability to work independently and remotely',
                    'Sales, finance, or property experience is an advantage',
                    'High‑performance and execution‑oriented mindset',
                  ].map((req, idx) => (
                    <li key={idx} className="text-[14px] text-[#5A5A5A] font-light flex items-start gap-2">
                      <span className="text-[#8B7355]">•</span> {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right: Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="border border-[#E5E2DC] bg-white p-6 md:p-10">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle className="w-16 h-16 text-[#8B7355] mx-auto mb-6" strokeWidth={1} />
                  <h3 className="text-2xl font-serif mb-4 text-[#2C2C2C]">Application Submitted</h3>
                  <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light">
                    Thank you for your interest in joining Murivest.
                    <br />
                    Our recruitment team will review your application and contact qualified candidates.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                        placeholder="+254 XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                        Current Location *
                      </label>
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                        Current Role
                      </label>
                      <input
                        type="text"
                        name="currentRole"
                        value={formData.currentRole}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                        placeholder="e.g., Sales Manager"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                        Years of Sales Experience *
                      </label>
                      <select
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                      >
                        <option value="">Select</option>
                        <option value="0-1 Years">0–1 Years</option>
                        <option value="1-3 Years">1–3 Years</option>
                        <option value="3-5 Years">3–5 Years</option>
                        <option value="5-10 Years">5–10 Years</option>
                        <option value="10+ Years">10+ Years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                      LinkedIn Profile (Optional)
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                      placeholder="https://linkedin.com/in/..."
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                      Why Do You Want To Join Murivest? *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your motivation..."
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                      Upload CV / Resume *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        name="cv"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) setFileName(file.name);
                        }}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="border border-dashed border-[#CFC3B4] bg-[#FAF8F4] p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#8B7355]">
                        <Upload className="w-8 h-8 text-[#8B7355] mb-3" strokeWidth={1} />
                        <p className="text-sm text-[#5B5752] mb-1">
                          {fileName ? fileName : 'Click or drag to upload CV'}
                        </p>
                        <p className="text-[11px] text-[#9B8F7E]">PDF, DOC, DOCX • Max 5MB</p>
                      </div>
                    </div>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#2C2C2C] text-[#F8F7F4] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{loading ? 'Submitting...' : 'Submit Application'}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[11px] text-[#5A5A5A] italic">
                    * Required fields. All information is held in strict confidence.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hairline bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E2DC]" />
    </section>
  );
}