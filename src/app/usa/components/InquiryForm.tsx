"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";
import type { InquiryType } from "../lib/types";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

interface InquiryFormProps {
  defaultType?: InquiryType;
  propertyRef?: string;
  variant?: "card" | "inline";
}

const INQUIRY_TYPES: { value: InquiryType; label: string }[] = [
  { value: "capital_markets", label: "Capital Markets & Financing" },
  { value: "investment_sales", label: "Investment Sales Advisory" },
  { value: "leasing", label: "Leasing Advisory" },
  { value: "mandate", label: "Engage Murivest on a Mandate" },
  { value: "property_inquiry", label: "Property Inquiry" },
  { value: "general", label: "General Inquiry" },
];

export default function InquiryForm({
  defaultType = "general",
  propertyRef,
  variant = "card",
}: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || "") || undefined,
      phone: String(formData.get("phone") || "") || undefined,
      inquiry_type: (String(formData.get("inquiry_type") || defaultType)) as InquiryType,
      message: String(formData.get("message") || ""),
      property_ref: propertyRef || undefined,
    };

    if (!data.name || !data.email || !data.message) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email, and message.");
      return;
    }

    const { error } = await supabase.from("usa_inquiries").insert(data);

    if (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
      return;
    }

    setStatus("success");
  }

  const containerClass =
    variant === "card"
      ? "rounded-2xl border border-ink-100 bg-white p-8 shadow-sm"
      : "";

  if (status === "success") {
    return (
      <div className={containerClass}>
        <div className="flex flex-col items-center py-12 text-center">
          <CheckCircle2 size={48} className="text-success-500" />
          <h3 className="mt-4 font-serif text-2xl font-semibold text-ink-900">
            Thank you for reaching out
          </h3>
          <p className="mt-2 max-w-md text-ink-500">
            Your inquiry has been received. A member of the Murivest capital
            markets team will respond within one business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-ink-700"
            >
              Full name <span className="text-error-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1.5 block w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-ink-900 placeholder:text-ink-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 focus:outline-none transition-colors"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-ink-700"
            >
              Email <span className="text-error-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1.5 block w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-ink-900 placeholder:text-ink-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 focus:outline-none transition-colors"
              placeholder="jane@firm.com"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-ink-700"
            >
              Company / Firm
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="mt-1.5 block w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-ink-900 placeholder:text-ink-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 focus:outline-none transition-colors"
              placeholder="Acme Capital"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-ink-700"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="mt-1.5 block w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-ink-900 placeholder:text-ink-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 focus:outline-none transition-colors"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="inquiry_type"
            className="block text-sm font-medium text-ink-700"
          >
            Inquiry type
          </label>
          <select
            id="inquiry_type"
            name="inquiry_type"
            defaultValue={defaultType}
            className="mt-1.5 block w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-ink-900 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 focus:outline-none transition-colors"
          >
            {INQUIRY_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-ink-700"
          >
            Message <span className="text-error-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="mt-1.5 block w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-ink-900 placeholder:text-ink-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 focus:outline-none transition-colors resize-none"
            placeholder="Tell us about your investment objectives, property requirements, or the mandate you'd like to discuss."
          />
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 rounded-lg bg-error-500/10 px-4 py-3 text-sm text-error-500">
            <AlertCircle size={18} />
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-navy-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" && (
            <Loader2 size={18} className="animate-spin" />
          )}
          {status === "submitting" ? "Sending..." : "Submit Inquiry"}
        </button>

        <p className="text-center text-xs text-ink-400">
          Your information is kept confidential and is never shared with third
          parties.
        </p>
      </form>
    </div>
  );
}
