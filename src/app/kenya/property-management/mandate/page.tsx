"use client";

import Image from "next/image";
import { useState } from "react";

const STYLE_BLOCK = `
  :root { --charcoal: #2C2C2C; --ivory: #F8F7F4; --brass: #8B7355; --grey: #5A5A5A; --hairline: #E5E2DC; }
  .font-serif { font-family: 'Playfair Display', 'Cormorant Garamond', 'Libre Baskerville', Georgia, serif; }
  .font-sans { font-family: 'Montserrat', 'Inter', 'Helvetica Neue', Arial, sans-serif; }
  .eyebrow { font-family: 'Montserrat', 'Inter', 'Helvetica Neue', Arial, sans-serif; font-size: 0.7rem; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: var(--brass); margin-bottom: 1.25rem; display: block; }
  .link-hover { transition: color 0.3s ease; } .link-hover:hover { color: var(--brass); }
  .footer-link { color: rgba(248,247,244,0.55); transition: color 0.3s ease; text-decoration: none; font-size: 0.78rem; }
  .footer-link:hover { color: var(--ivory); }
`;

export default function ManagementMandatePage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", assetLocation: "", assetType: "", units: "", currentOccupancy: "", managementType: "", notes: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/mandate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <>
      <style>{STYLE_BLOCK}</style>
      <main className="bg-[#F8F7F4]">
        <section className="relative bg-[#2C2C2C] overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/hero-institutional-asset.jpg" alt="Institutional asset" fill priority className="object-cover opacity-[0.08]" sizes="100vw" />
            <div className="absolute inset-0 bg-[#2C2C2C]/92" />
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-8 py-32 md:py-40">
            <span className="eyebrow">Asset Management</span>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.08] text-[#F8F7F4] tracking-tight max-w-[700px]">
              Submit a <em className="text-[#8B7355] not-italic">Management Mandate</em>
            </h1>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="max-w-[800px] mx-auto px-8">
            {status === "success" ? (
              <div className="border border-[#8B7355] p-12 text-center bg-white">
                <p className="font-serif text-2xl text-[#2C2C2C] mb-4">Mandate Received</p>
                <p className="font-sans text-[0.9rem] text-[#5A5A5A] font-light">Our asset management team will review your submission and contact you within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-[#E5E2DC] p-10 md:p-14 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Full Name *</label>
                    <input required name="name" value={form.name} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Email *</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Company / Ownership Vehicle</label>
                    <input name="company" value={form.company} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Asset Location *</label>
                    <input required name="assetLocation" value={form.assetLocation} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none" placeholder="e.g. Nairobi, London, Dubai" />
                  </div>
                  <div>
                    <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Asset Type *</label>
                    <select required name="assetType" value={form.assetType} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none">
                      <option value="">Select asset type</option>
                      <option value="Office">Office</option>
                      <option value="Retail">Retail</option>
                      <option value="Industrial">Industrial / Logistics</option>
                      <option value="Mixed-Use">Mixed-Use</option>
                      <option value="Hospitality">Hospitality</option>
                      <option value="Residential">Residential (Institutional)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Number of Units / lettable area</label>
                    <input name="units" value={form.units} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Current Occupancy</label>
                    <input name="currentOccupancy" value={form.currentOccupancy} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none" placeholder="e.g. 85%" />
                  </div>
                </div>
                <div>
                  <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Management Requirement *</label>
                  <select required name="managementType" value={form.managementType} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none">
                    <option value="">Select requirement</option>
                    <option value="Full Asset Management">Full Asset Management</option>
                    <option value="Tenant Acquisition Only">Tenant Acquisition Only</option>
                    <option value="NOI Optimisation">NOI Optimisation</option>
                    <option value="Lease Administration">Lease Administration</option>
                    <option value="Strategic Advisory">Strategic Advisory</option>
                  </select>
                </div>
                <div>
                  <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Additional Context</label>
                  <textarea name="notes" value={form.notes} onChange={handleChange} rows={4} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none resize-none" placeholder="Current challenges, investment objectives, special requirements..." />
                </div>
                <div className="pt-4">
                  <button type="submit" disabled={status === "submitting"} className="bg-[#2C2C2C] text-[#F8F7F4] font-sans text-xs font-semibold tracking-[0.15em] uppercase px-10 py-4 hover:bg-[#8B7355] transition-colors disabled:opacity-50">
                    {status === "submitting" ? "Submitting..." : "Submit Mandate"}
                  </button>
                  <p className="font-sans text-[0.75rem] text-[#5A5A5A] font-light mt-4">All information is treated in strict confidence.</p>
                </div>
                {status === "error" && <p className="font-sans text-sm text-red-700">Submission failed. Please try again.</p>}
              </form>
            )}
          </div>
        </section>

        <footer className="bg-[#2C2C2C] text-[rgba(248,247,244,0.55)] py-16 pb-8">
          <div className="max-w-[1280px] mx-auto px-8 flex flex-wrap justify-between items-center gap-4">
            <p className="font-sans text-[0.7rem] font-light">© {new Date().getFullYear()} Murivest. All rights reserved.</p>
            <p className="font-sans text-[0.7rem] font-light text-[rgba(248,247,244,0.4)]">Institutional Asset Management</p>
          </div>
        </footer>
      </main>
    </>
  );
}