"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPublicationPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    
    // Construct payload matching your database schema
    const data = {
      title: formData.get("title"),
      subtitle: formData.get("subtitle"),
      category: formData.get("category"),
      author: formData.get("author"),
      summary: formData.get("summary"),
      content: formData.get("content"),
      cover_image_url: formData.get("cover_image_url"),
      file_url: formData.get("file_url"),
      fliphtml_url: formData.get("fliphtml_url"),
      source: formData.get("source"),
      access_level: formData.get("access_level"),
      
      // Checkbox boolean conversions
      is_public: formData.get("is_public") === "on",
      is_portal_visible: formData.get("is_portal_visible") === "on",
      is_featured: formData.get("is_featured") === "on",
    };

    try {
      const response = await fetch("/api/publications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create publication. Please check your inputs.");
      }

      router.push("/admin/publications");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mt-8">
      <h1 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-4">Create New Publication</h1>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6 text-sm border border-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Section 1: General Information */}
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">General Details</h2>
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
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
              <select id="category" name="category" required className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500 bg-white">
                <option value="Market Report">Market Report</option>
                <option value="Research">Research</option>
                <option value="News">News</option>
                <option value="Newsletter">Newsletter</option>
                <option value="Case Study">Case Study</option>
              </select>
            </div>
            <div>
              <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">Author</label>
              <input type="text" id="author" name="author" className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>
        </section>

        {/* Section 2: Content */}
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Content</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">Summary (Short description)</label>
              <textarea id="summary" name="summary" rows={3} className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500 resize-y"></textarea>
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Full Content</label>
              <textarea id="content" name="content" rows={8} className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500 resize-y" placeholder="Full publication body (if applicable)..."></textarea>
            </div>
          </div>
        </section>

        {/* Section 3: Media & External Links */}
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Media & URLs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="cover_image_url" className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL</label>
              <input type="url" id="cover_image_url" name="cover_image_url" placeholder="https://..." className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="file_url" className="block text-sm font-medium text-gray-700 mb-1">Downloadable File URL (PDF, etc.)</label>
              <input type="url" id="file_url" name="file_url" placeholder="https://..." className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="fliphtml_url" className="block text-sm font-medium text-gray-700 mb-1">FlipHTML URL (Interactive Reader)</label>
              <input type="url" id="fliphtml_url" name="fliphtml_url" placeholder="https://..." className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">Original Source (If external)</label>
              <input type="text" id="source" name="source" className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>
        </section>

        {/* Section 4: Visibility & Access Settings */}
        <section className="bg-gray-50 p-6 rounded-md border border-gray-200">
          <h2 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">Settings & Access</h2>
          
          <div className="mb-6">
            <label htmlFor="access_level" className="block text-sm font-medium text-gray-700 mb-1">Access Level *</label>
            <select id="access_level" name="access_level" required className="w-full md:w-1/2 border border-gray-300 rounded-md p-2.5 focus:ring-blue-500 focus:border-blue-500 bg-white">
              <option value="Free">Free / Open</option>
              <option value="Registered">Registered Users Only</option>
              <option value="Premium">Premium / Paid Only</option>
            </select>
          </div>

          <div className="flex flex-col space-y-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" name="is_public" defaultChecked className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <span className="text-sm text-gray-700 font-medium">Is Public <span className="text-gray-500 font-normal">(Allow access via standard website routing)</span></span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" name="is_portal_visible" defaultChecked className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <span className="text-sm text-gray-700 font-medium">Visible in Portal <span className="text-gray-500 font-normal">(Show this inside the logged-in dashboard)</span></span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" name="is_featured" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <span className="text-sm text-gray-700 font-medium">Feature this publication <span className="text-gray-500 font-normal">(Highlight on the homepage or top of lists)</span></span>
            </label>
          </div>
        </section>

        {/* Submit Actions */}
        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button type="button" onClick={() => router.push("/admin/publications")} className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button type="submit" disabled={isSubmitting} className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors">
            {isSubmitting ? "Saving Publication..." : "Publish Document"}
          </button>
        </div>
      </form>
    </div>
  );
}