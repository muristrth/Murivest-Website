'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle, Briefcase, Upload, X, FileText } from 'lucide-react'
import { submitBrokerLead } from './actions'

export default function BrokerLeadPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [files, setFiles] = useState<File[]>([])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    window.scrollTo(0, 0);
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const formData = new FormData(e.currentTarget)
      
      // Append files manually since FormData from form doesn't always capture FileList cleanly in all browsers
      files.forEach((file) => {
        formData.append('attachments', file)
      })

      const result = await submitBrokerLead(formData)

      if (!result.success) {
        throw new Error(result.message)
      }

      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err: any) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <section className="relative bg-[#F8F7F4] text-[#2C2C2C] overflow-hidden min-h-screen">
      {/* Hairline borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E2DC]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* ─── LEFT: INFO ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
                Broker Portal
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-4 text-[#2C2C2C]">
              Submit a<br />
              <span className="italic text-[#8B7355] font-light">Property</span>
            </h1>

            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-8" />

            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-10">
              You do not need full documentation to start a conversation. If you know the owner, 
              the price, and the income, submit the property here. Our origination team will 
              qualify directly with the seller and protect your introduction under our co-broke policy.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Briefcase className="w-5 h-5 text-[#8B7355] mt-0.5" strokeWidth={1} />
                <div>
                  <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-1">Who This Is For</p>
                  <p className="text-[14px] text-[#2C2C2C] font-light leading-relaxed">
                    Authorized brokers, introducers, and intermediaries who have a direct or indirect 
                    relationship with the property owner.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#8B7355] mt-0.5" strokeWidth={1} />
                <div>
                  <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-1">Minimum Threshold</p>
                  <p className="text-[14px] text-[#2C2C2C] font-light leading-relaxed">
                    KES 30M for land / KES 50M for income-generating assets. All asset classes considered.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#8B7355] mt-0.5" strokeWidth={1} />
                <div>
                  <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-1">Response Time</p>
                  <p className="text-[14px] text-[#2C2C2C] font-light leading-relaxed">
                    Our BD team will contact you within 24 hours to discuss mandate protection and next steps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#8B7355] mt-0.5" strokeWidth={1} />
                <div>
                  <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-1">Direct Line</p>
                  <p className="text-[14px] text-[#2C2C2C] font-light">
                    capital@murivest.co.ke
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── RIGHT: FORM ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="border border-[#E5E2DC] bg-white p-6 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 md:py-20"
                >
                  <CheckCircle className="w-16 h-16 text-[#8B7355] mx-auto mb-6" strokeWidth={1} />
                  <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[#2C2C2C]">Lead Received</h3>
                  <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light max-w-md mx-auto">
                    Thank you. A senior originator will review your submission and contact you within 24 hours to confirm mandate protection and discuss the asset.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFiles([])
                    }}
                    className="mt-8 inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#8B7355] hover:text-[#2C2C2C] transition-colors"
                  >
                    Submit another lead
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Section: Broker */}
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#8B7355] mb-5 pb-2 border-b border-[#E5E2DC]">
                      Your Details
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                          Full Name *
                        </label>
                        <input
                          required
                          name="name"
                          type="text"
                          className="w-full px-1 py-3 bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300 placeholder:text-[#B0ADA6]"
                          placeholder="Your legal name"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                          Firm / Company
                        </label>
                        <input
                          name="firm"
                          type="text"
                          className="w-full px-1 py-3 bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300 placeholder:text-[#B0ADA6]"
                          placeholder="Agency or company name"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                          Email *
                        </label>
                        <input
                          required
                          name="email"
                          type="email"
                          className="w-full px-1 py-3 bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300 placeholder:text-[#B0ADA6]"
                          placeholder="you@firm.co.ke"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                          Phone *
                        </label>
                        <input
                          required
                          name="phone"
                          type="tel"
                          className="w-full px-1 py-3 bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300 placeholder:text-[#B0ADA6]"
                          placeholder="+254 7XX XXX XXX"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section: Asset */}
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#8B7355] mb-5 pb-2 border-b border-[#E5E2DC]">
                      Asset Overview
                    </p>
                    
                    <div className="mb-6">
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                        Owner Name & Contact *
                      </label>
                      <input
                        required
                        name="ownerInfo"
                        type="text"
                        className="w-full px-1 py-3 bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300 placeholder:text-[#B0ADA6]"
                        placeholder="e.g. John Doe / +254 7XX XXX XXX / john@email.com"
                      />
                      <p className="text-[11px] text-[#5A5A5A] italic mt-1">How you know them and how to reach them</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                          Asset Class *
                        </label>
                        <select
                          required
                          name="assetClass"
                          className="w-full px-1 py-3 bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300 cursor-pointer appearance-none"
                        >
                          <option value="" disabled>Select asset class</option>
                          <option value="Office">Office</option>
                          <option value="Retail">Retail</option>
                          <option value="Industrial">Industrial</option>
                          <option value="Logistics">Logistics</option>
                          <option value="Hospitality">Hospitality</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Data Center">Data Center</option>
                          <option value="Land">Land</option>
                          <option value="Mixed Use">Mixed Use</option>
                          <option value="Residential Block">Residential Block</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                          Location *
                        </label>
                        <input
                          required
                          name="location"
                          type="text"
                          className="w-full px-1 py-3 bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300 placeholder:text-[#B0ADA6]"
                          placeholder="e.g. Westlands, Nairobi"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="col-span-2">
                        <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                          Asking Price *
                        </label>
                        <input
                          required
                          name="askingPrice"
                          type="number"
                          min="30000000"
                          className="w-full px-1 py-3 bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300 placeholder:text-[#B0ADA6]"
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                          Currency *
                        </label>
                        <select
                          required
                          name="currency"
                          className="w-full px-1 py-3 bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300 cursor-pointer appearance-none"
                        >
                          <option value="KES">KES</option>
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="GBP">GBP</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                          Gross Annual Income
                        </label>
                        <input
                          name="annualIncome"
                          type="number"
                          className="w-full px-1 py-3 bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300 placeholder:text-[#B0ADA6]"
                          placeholder="If known"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                          Mandate Status *
                        </label>
                        <select
                          required
                          name="mandateStatus"
                          className="w-full px-1 py-3 bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300 cursor-pointer appearance-none"
                        >
                          <option value="" disabled>Select status</option>
                          <option value="Signed ATS">Signed ATS</option>
                          <option value="In discussion">In discussion with owner</option>
                          <option value="No mandate yet">No mandate yet — introduction only</option>
                          <option value="Co-broke available">Co-broke available</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      name="notes"
                      rows={4}
                      className="w-full px-1 py-3 bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300 resize-none placeholder:text-[#B0ADA6] leading-relaxed"
                      placeholder="Motivation for sale, debt situation, timeline, or anything else relevant..."
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-3">
                      Attachments
                    </label>
                    <div className="border border-dashed border-[#E5E2DC] hover:border-[#8B7355] p-5 text-center cursor-pointer transition-all duration-300 group bg-[#F8F7F4]">
                      <input
                        type="file"
                        name="attachments"
                        multiple
                        onChange={handleFileChange}
                        className="hidden"
                        id="broker-files"
                      />
                      <label htmlFor="broker-files" className="cursor-pointer block">
                        <Upload className="w-5 h-5 text-[#B0ADA6] group-hover:text-[#8B7355] mx-auto mb-2 transition-colors" strokeWidth={1} />
                        <p className="text-[12px] text-[#5A5A5A] group-hover:text-[#2C2C2C] transition-colors font-light">
                          Drop files or click to browse
                        </p>
                        <p className="text-[10px] text-[#B0ADA6] mt-1">ATS, LOI, photos, or rent roll</p>
                      </label>
                    </div>
                    
                    {files.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {files.map((file, i) => (
                          <div key={i} className="flex items-center gap-3 bg-[#F8F7F4] border border-[#E5E2DC] px-3 py-2">
                            <FileText className="w-4 h-4 text-[#8B7355]" strokeWidth={1} />
                            <span className="text-[12px] text-[#2C2C2C] font-light flex-1 truncate">{file.name}</span>
                            <span className="text-[10px] text-[#5A5A5A]">{(file.size / 1024 / 1024).toFixed(1)} MB</span>
                            <button
                              type="button"
                              onClick={() => removeFile(i)}
                              className="p-1 hover:bg-red-50 text-[#5A5A5A] hover:text-red-500 transition-colors"
                            >
                              <X className="w-3 h-3" strokeWidth={1.5} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 text-red-700 text-[13px]">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#2C2C2C] text-[#F8F7F4] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{isLoading ? 'Sending...' : 'Submit Property'}</span>
                      <Send className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                    <p className="text-[11px] text-[#5A5A5A] italic mt-4">
                      * Required fields. All submissions are held in strict confidence.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}