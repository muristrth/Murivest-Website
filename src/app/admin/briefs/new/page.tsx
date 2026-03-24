"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewBriefPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    
    // Constructing the payload based on your investment_briefs schema
    const data = {
      title: formData.get("title"),
      subtitle: formData.get("subtitle"),
      slug: formData.get("slug"),
      asset_class: formData.get("asset_class"),
      status: formData.get("status"),
      location: formData.get("location"),
      price_kes: formData.get("price_kes") ? Number(formData.get("price_kes")) : null,
      target_irr: formData.get("target_irr"),
      target_yield: formData.get("target_yield"),
      summary: formData.get("summary"),
      requires_auth: formData.get("requires_auth") === "on",
      is_public_teaser: formData.get("is_public_teaser") === "on",
    };

    try {
      const response = await fetch("/api/briefs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create brief. Please check your inputs.");
      }

      router.push("/admin/briefs");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mt-8">
      <h1 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-4">Create Investment Brief</h1>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6 text-sm border border-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Section 1: General Information */}
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">General Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input type="text" id="title" name="title" required className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
              <input type="text" id="subtitle" name="subtitle" className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">URL Slug (e.g., nairobi-commercial-plaza)</label>
              <input type="text" id="slug" name="slug" className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="asset_class" className="block text-sm font-medium text-gray-700 mb-1">Asset Class</label>
              <select id="asset_class" name="asset_class" className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500 bg-white">
                <option value="Commercial">Commercial</option>
                <option value="Residential">Residential</option>
                <option value="Mixed-Use">Mixed-Use</option>
                <option value="Land">Land</option>
                <option value="Industrial">Industrial</option>
              </select>
            </div>
          </div>
        </section>

        {/* Section 2: Location & Status */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input type="text" id="location" name="location" placeholder="e.g., Westlands, Nairobi" className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status *</label>
              <select id="status" name="status" required className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500 bg-white">
                <option value="Draft">Draft</option>
                <option value="Active">Active</option>
                <option value="Closed">Closed</option>
                <option value="Fully Funded">Fully Funded</option>
              </select>
            </div>
          </div>
        </section>

        {/* Section 3: Financials */}
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Financials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="price_kes" className="block text-sm font-medium text-gray-700 mb-1">Price (KES)</label>
              <input type="number" id="price_kes" name="price_kes" className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="target_irr" className="block text-sm font-medium text-gray-700 mb-1">Target IRR (%)</label>
              <input type="text" id="target_irr" name="target_irr" placeholder="e.g., 15%" className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="target_yield" className="block text-sm font-medium text-gray-700 mb-1">Target Yield (%)</label>
              <input type="text" id="target_yield" name="target_yield" placeholder="e.g., 8%" className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>
        </section>

        {/* Section 4: Details & Content */}
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Content</h2>
          <div>
            <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">Brief Summary</label>
            <textarea id="summary" name="summary" rows={4} className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500 resize-y" placeholder="Brief overview of the investment opportunity..."></textarea>
          </div>
        </section>

        {/* Section 5: Access Controls */}
        <section className="bg-gray-50 p-4 rounded-md border border-gray-200">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Visibility & Access Controls</h2>
          <div className="flex flex-col space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" name="is_public_teaser" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <span className="text-sm text-gray-700">Make this a Public Teaser (Visible to logged-out users)</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" name="requires_auth" defaultChecked className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <span className="text-sm text-gray-700">Require Authentication to view full details</span>
            </label>
          </div>
        </section>

        {/* Submit Actions */}
        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button type="button" onClick={() => router.push("/admin/briefs")} className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Cancel
          </button>
          <button type="submit" disabled={isSubmitting} className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50">
            {isSubmitting ? "Saving Deal..." : "Create Investment Brief"}
          </button>
        </div>
      </form>
    </div>
  );
}