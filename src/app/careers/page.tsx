'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Send,
  Upload,
  AlertCircle,
  Briefcase,
  TrendingUp,
  Laptop,
} from 'lucide-react';

export default function CareersPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('Secretary — Part-Time');

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

          {/* LEFT — CAREER INFORMATION */}
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
              Build Your Career In
              <br />
              <span className="italic text-[#8B7355] font-light">
                Institutional Real Estate
              </span>
            </h2>

            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-8" />

            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-10">
              Murivest is building a modern commercial real estate advisory and
              investment platform focused on connecting property owners,
              businesses, investors, developers, family offices, diaspora
              capital and institutional stakeholders across Kenya.
            </p>

            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-12">
              We are looking for disciplined, commercially minded individuals
              who can operate independently in a remote environment and
              contribute directly to the growth of the business.
            </p>

            {/* REMOTE WORK */}
            <div className="flex items-start gap-4 mb-12 p-5 border border-[#E5E2DC] bg-white">
              <Laptop
                className="w-5 h-5 text-[#8B7355] mt-1 shrink-0"
                strokeWidth={1.2}
              />
              <div>
                <p className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-2">
                  Work Arrangement
                </p>
                <p className="text-[15px] text-[#2C2C2C] font-light">
                  Remote-based only
                </p>
                <p className="text-[13px] text-[#777] font-light mt-1 leading-relaxed">
                  Both opportunities are designed for independent remote
                  execution using email, WhatsApp, online platforms and
                  Murivest's internal systems.
                </p>
              </div>
            </div>

            {/* POSITION 1 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Briefcase
                  className="w-5 h-5 text-[#8B7355]"
                  strokeWidth={1.2}
                />
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium">
                  Opportunity 01
                </p>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif text-[#2C2C2C] mb-6">
                Secretary — Part-Time
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-2">
                    Compensation
                  </p>
                  <p className="text-[16px] text-[#2C2C2C] font-light">
                    KSh 500 per week to start
                  </p>
                  <p className="text-[13px] text-[#777] font-light mt-2 leading-relaxed">
                    Approximately 1 hour per day on a part-time basis.
                    Compensation may grow as responsibilities, activity and
                    revenue generated through the role increase.
                  </p>
                </div>

                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">
                    Core Responsibilities
                  </p>

                  <ul className="space-y-2">
                    {[
                      'Monitor and organize incoming enquiries',
                      'Assist with email, WhatsApp and telephone follow-ups',
                      'Publish and maintain property listings',
                      'Create and update property advertisements',
                      'Maintain Murivest contact and prospect records',
                      'Track enquiries, follow-ups and appointments',
                      'Prepare basic weekly activity reports',
                      'Support day-to-day administrative operations',
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="text-[14px] text-[#5A5A5A] font-light flex items-start gap-2"
                      >
                        <span className="text-[#8B7355] mt-[2px]">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">
                    Additional Earning Opportunities
                  </p>

                  <div className="p-5 bg-[#FAF8F4] border border-[#E5E2DC]">
                    <div className="flex gap-3">
                      <TrendingUp
                        className="w-5 h-5 text-[#8B7355] shrink-0"
                        strokeWidth={1.2}
                      />
                      <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">
                        The starting weekly payment is not the only earning
                        opportunity. Additional fees and commissions may be
                        available for qualifying property activity and
                        successful transactions.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">
                    Property & Leasing Opportunities
                  </p>

                  <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">
                    For example, where you assist in publishing, following up
                    and coordinating a property opportunity that ultimately
                    results in a successful shop lease or other qualifying
                    transaction, additional commission or transaction-based
                    fees may become payable according to the applicable
                    arrangement.
                  </p>
                </div>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="w-full h-px bg-[#E5E2DC] mb-12" />

            {/* POSITION 2 */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <TrendingUp
                  className="w-5 h-5 text-[#8B7355]"
                  strokeWidth={1.2}
                />
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium">
                  Opportunity 02
                </p>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif text-[#2C2C2C] mb-6">
                Associate Capital Advisor
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-2">
                    Compensation
                  </p>
                  <p className="text-[16px] text-[#2C2C2C] font-light">
                    Commission-based — No fixed salary
                  </p>
                  <p className="text-[13px] text-[#777] font-light mt-2 leading-relaxed">
                    This is a performance and transaction-based opportunity.
                    Earnings are generated through qualifying business and
                    property transactions.
                  </p>
                </div>

                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">
                    Expected Activities
                  </p>

                  <ul className="space-y-2">
                    {[
                      'Publish and promote available properties',
                      'Identify and follow up with prospective clients',
                      'Maintain prospect and client communication',
                      'Source and develop property and investment leads',
                      'Coordinate qualified viewing opportunities',
                      'Follow up on active transactions',
                      'Develop relationships with owners, tenants and investors',
                      'Support the conversion of qualified opportunities',
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="text-[14px] text-[#5A5A5A] font-light flex items-start gap-2"
                      >
                        <span className="text-[#8B7355] mt-[2px]">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">
                    Revenue Opportunities
                  </p>

                  <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">
                    Associates may participate in commissions arising from
                    successful property sales, commercial leases, property
                    management opportunities, qualified introductions and
                    other approved revenue-generating transactions.
                  </p>
                </div>
              </div>
            </div>

            {/* GENERAL REQUIREMENTS */}
            <div className="mt-12 pt-10 border-t border-[#E5E2DC]">
              <p className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-4">
                Who We Are Looking For
              </p>

              <ul className="space-y-3">
                {[
                  'Strong written and verbal communication',
                  'Reliable and responsive when working remotely',
                  'Organized and able to manage follow-ups',
                  'Comfortable using WhatsApp, email and online platforms',
                  'Interest in commercial real estate and business',
                  'Ability to work independently with limited supervision',
                  'Professional approach to clients and property owners',
                  'Sales, administration, finance or property experience is an advantage',
                ].map((req, idx) => (
                  <li
                    key={idx}
                    className="text-[14px] text-[#5A5A5A] font-light flex items-start gap-2"
                  >
                    <span className="text-[#8B7355]">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT — APPLICATION FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7"
          >
            <div className="border border-[#E5E2DC] bg-white p-6 md:p-10">

              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle
                    className="w-16 h-16 text-[#8B7355] mx-auto mb-6"
                    strokeWidth={1}
                  />

                  <h3 className="text-2xl font-serif mb-4 text-[#2C2C2C]">
                    Application Submitted
                  </h3>

                  <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light">
                    Thank you for your interest in joining Murivest.
                    <br />
                    Our recruitment team will review your application and
                    contact qualified candidates.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* FORM HEADING */}
                  <div className="mb-10">
                    <p className="text-[11px] tracking-[0.25em] uppercase text-[#8B7355] mb-3">
                      Join Murivest
                    </p>

                    <h3 className="text-3xl font-serif text-[#2C2C2C] mb-4">
                      Apply For An Opportunity
                    </h3>

                    <p className="text-[14px] leading-[1.8] text-[#6A6A6A] font-light">
                      Select the opportunity that best matches your interests,
                      experience and preferred earning structure.
                    </p>
                  </div>

                  {/* POSITION SELECT */}
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                      Position *
                    </label>

                    <select
                      name="position"
                      required
                      value={selectedPosition}
                      onChange={(e) => setSelectedPosition(e.target.value)}
                      className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                    >
                      <option value="Secretary — Part-Time">
                        Secretary — Part-Time
                      </option>
                      <option value="Associate Capital Advisor">
                        Associate Capital Advisor
                      </option>
                    </select>
                  </div>

                  {/* NAME + EMAIL */}
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

                  {/* PHONE + LOCATION */}
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
                        placeholder="+254 115 277 610"
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

                  {/* CURRENT ROLE + EXPERIENCE */}
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
                        placeholder="e.g. Sales Assistant"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                        Relevant Experience *
                      </label>

                      <select
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                      >
                        <option value="">Select</option>
                        <option value="No Experience">
                          No Experience
                        </option>
                        <option value="0-1 Years">
                          0–1 Years
                        </option>
                        <option value="1-3 Years">
                          1–3 Years
                        </option>
                        <option value="3-5 Years">
                          3–5 Years
                        </option>
                        <option value="5-10 Years">
                          5–10 Years
                        </option>
                        <option value="10+ Years">
                          10+ Years
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* LINKEDIN */}
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

                  {/* MOTIVATION */}
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                      Why Do You Want To Join Murivest? *
                    </label>

                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your motivation, relevant experience and how you believe you can contribute..."
                    />
                  </div>

                  {/* CV UPLOAD */}
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
                        <Upload
                          className="w-8 h-8 text-[#8B7355] mb-3"
                          strokeWidth={1}
                        />

                        <p className="text-sm text-[#5B5752] mb-1">
                          {fileName
                            ? fileName
                            : 'Click or drag to upload CV'}
                        </p>

                        <p className="text-[11px] text-[#9B8F7E]">
                          PDF, DOC, DOCX • Max 5MB
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ERROR */}
                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* SUBMIT */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#2C2C2C] text-[#F8F7F4] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>
                        {loading ? 'Submitting...' : 'Submit Application'}
                      </span>

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