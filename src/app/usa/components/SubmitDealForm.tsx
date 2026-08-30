"use client";

import { useState } from "react";
import type { InquirySubmission } from "../lib/types";

const ASSET_CLASSES = [
  "Office",
  "Industrial",
  "Logistics",
  "Multifamily",
  "Retail",
  "Hospitality",
  "Healthcare",
  "Self-Storage",
  "Data Centers",
  "Life Sciences",
  "Net Lease",
  "Mixed-Use",
  "Land",
  "Other",
] as const;

export default function SubmitDealForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<InquirySubmission>({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiry_type: "property_inquiry",
    message: "",
    property_ref: "",
  });

  const update = (field: keyof InquirySubmission, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#E8E6E1] bg-[#FAF9F6] p-8 text-center">
        <h3 className="font-serif text-2xl text-[#2C2C2C]">Thank you</h3>
        <p className="mt-3 text-[#8B8680]">
          Your submission has been received. A member of the Murivest team will
          review the information and respond within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-[#8B8680] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full rounded-lg border border-[#E8E6E1] bg-white px-4 py-3 text-sm text-[#2C2C2C] outline-none focus:border-[#B8956B] focus:ring-2 focus:ring-[#B8956B]/20"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-[#8B8680] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full rounded-lg border border-[#E8E6E1] bg-white px-4 py-3 text-sm text-[#2C2C2C] outline-none focus:border-[#B8956B] focus:ring-2 focus:ring-[#B8956B]/20"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-[#8B8680] mb-2">
            Company / Firm
          </label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            className="w-full rounded-lg border border-[#E8E6E1] bg-white px-4 py-3 text-sm text-[#2C2C2C] outline-none focus:border-[#B8956B] focus:ring-2 focus:ring-[#B8956B]/20"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-[#8B8680] mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full rounded-lg border border-[#E8E6E1] bg-white px-4 py-3 text-sm text-[#2C2C2C] outline-none focus:border-[#B8956B] focus:ring-2 focus:ring-[#B8956B]/20"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-[#8B8680] mb-2">
          Property Name / Address
        </label>
        <input
          type="text"
          value={form.property_ref}
          onChange={(e) => update("property_ref", e.target.value)}
          className="w-full rounded-lg border border-[#E8E6E1] bg-white px-4 py-3 text-sm text-[#2C2C2C] outline-none focus:border-[#B8956B] focus:ring-2 focus:ring-[#B8956B]/20"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-[#8B8680] mb-2">
          Asset Class
        </label>
        <select
          value={form.inquiry_type}
          onChange={(e) =>
            update("inquiry_type", e.target.value as InquirySubmission["inquiry_type"])
          }
          className="w-full rounded-lg border border-[#E8E6E1] bg-white px-4 py-3 text-sm text-[#2C2C2C] outline-none focus:border-[#B8956B] focus:ring-2 focus:ring-[#B8956B]/20"
        >
          {ASSET_CLASSES.map((ac) => (
            <option key={ac} value={ac.toLowerCase().replace(/\s+/g, "_")}>
              {ac}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-[#8B8680] mb-2">
          Transaction Type
        </label>
        <select
          value={form.inquiry_type}
          onChange={(e) =>
            update("inquiry_type", e.target.value as InquirySubmission["inquiry_type"])
          }
          className="w-full rounded-lg border border-[#E8E6E1] bg-white px-4 py-3 text-sm text-[#2C2C2C] outline-none focus:border-[#B8956B] focus:ring-2 focus:ring-[#B8956B]/20"
        >
          <option value="property_inquiry">Sale / Disposition</option>
          <option value="capital_markets">Capital / Financing</option>
          <option value="investment_sales">Investment Sales</option>
          <option value="mandate">Mandate Inquiry</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-[#8B8680] mb-2">
          Description *
        </label>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Describe the property, location, asset class, asking price, NOI, occupancy, tenant profile, lease profile, and any other relevant details."
          className="w-full rounded-lg border border-[#E8E6E1] bg-white px-4 py-3 text-sm text-[#2C2C2C] outline-none focus:border-[#B8956B] focus:ring-2 focus:ring-[#B8956B]/20 resize-none"
        />
      </div>

      <div className="rounded-lg border border-[#E8E6E1] bg-[#FAF9F6] p-4">
        <p className="text-xs text-[#8B8680]">
          Submission is an expression of interest, not a guarantee of representation,
          acquisition, financing, distribution, sale, investment, or approval.
          Murivest evaluates all submissions against current mandate criteria.
        </p>
      </div>

      <button
        type="submit"
        className="w-full md:w-auto rounded-lg bg-[#1B4332] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#B8956B] transition-colors"
      >
        Submit Opportunity
      </button>
    </form>
  );
}
