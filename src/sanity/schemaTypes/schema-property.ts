import { defineField, defineType } from "sanity";

export default{
  name: "propertylet",
  title: "PropertyLet",
  type: "document",
  groups: [
    { name: "basic", title: "Basic Info" },
    { name: "location", title: "Location" },
    { name: "pricing", title: "Pricing" },
    { name: "details", title: "Property Details" },
    { name: "media", title: "Media" },
    { name: "seo", title: "SEO" },
    { name: "analysis", title: "Market Analysis" },
  ],
  fields: [
    // ─── Basic Info ──────────────────────────────────────────────
    defineField({
      name: "title",
      title: "Property Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "basic",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
      group: "basic",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      group: "basic",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 6,
      validation: (Rule) => Rule.required(),
      group: "basic",
    }),
    defineField({
      name: "propertyType",
      title: "Property Type",
      type: "string",
      options: {
        list: [
          { title: "Office", value: "Office" },
          { title: "Retail", value: "Retail" },
          { title: "Industrial", value: "Industrial" },
          { title: "Warehouse", value: "Warehouse" },
          { title: "Mixed-Use", value: "Mixed-Use" },
          { title: "Residential", value: "Residential" },
          { title: "Land", value: "Land" },
          { title: "Hotel", value: "Hotel" },
          { title: "Data Centre", value: "Data Centre" },
        ],
      },
      validation: (Rule) => Rule.required(),
      group: "basic",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Commercial", value: "Commercial" },
          { title: "Residential", value: "Residential" },
          { title: "Industrial", value: "Industrial" },
          { title: "Hospitality", value: "Hospitality" },
        ],
      },
      initialValue: "Commercial",
      validation: (Rule) => Rule.required(),
      group: "basic",
    }),
    defineField({
      name: "transactionType",
      title: "Transaction Type",
      type: "string",
      options: {
        list: [
          { title: "To Let", value: "To Let" },
          { title: "For Sale", value: "For Sale" },
          { title: "Sold", value: "Sold" },
          { title: "Leased", value: "Leased" },
        ],
      },
      validation: (Rule) => Rule.required(),
      group: "basic",
    }),
    defineField({
      name: "availabilityStatus",
      title: "Availability Status",
      type: "string",
      options: {
        list: [
          { title: "Available", value: "Available" },
          { title: "Under Offer", value: "Under Offer" },
          { title: "Sold", value: "Sold" },
          { title: "Withdrawn", value: "Withdrawn" },
        ],
      },
      initialValue: "Available",
      group: "basic",
    }),
    defineField({
      name: "featured",
      title: "Featured Property",
      type: "boolean",
      initialValue: false,
      group: "basic",
    }),
    defineField({
      name: "listingDate",
      title: "Listing Date",
      type: "date",
      initialValue: () => new Date().toISOString().split("T")[0],
      group: "basic",
    }),

    // ─── Location ──────────────────────────────────────────────────
    defineField({
      name: "country",
      title: "Country",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "location",
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "location",
    }),
    defineField({
      name: "neighborhood",
      title: "Neighborhood / Area",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "location",
    }),
    defineField({
      name: "address",
      title: "Full Address",
      type: "string",
      group: "location",
    }),
    defineField({
      name: "coordinates",
      title: "Coordinates",
      type: "object",
      fields: [
        defineField({ name: "lat", title: "Latitude", type: "number" }),
        defineField({ name: "lng", title: "Longitude", type: "number" }),
      ],
      group: "location",
    }),

    // ─── Pricing ───────────────────────────────────────────────────
    defineField({
      name: "price",
      title: "Pricing",
      type: "object",
      fields: [
        defineField({
          name: "displayPrice",
          title: "Display Price",
          type: "string",
          description: "e.g., 'KES 150 per sq ft' or 'USD 1.49 per sq ft'",
          validation: (Rule) => Rule.required(),
        }),
        defineField({ name: "kes", title: "KES Amount", type: "string" }),
        defineField({ name: "usd", title: "USD Amount", type: "string" }),
      ],
      group: "pricing",
    }),
    defineField({
      name: "sizeRange",
      title: "Size Range",
      type: "object",
      fields: [
        defineField({ name: "min", title: "Minimum Size", type: "number" }),
        defineField({ name: "max", title: "Maximum Size", type: "number" }),
        defineField({
          name: "unit",
          title: "Unit",
          type: "string",
          options: {
            list: [
              { title: "Square Feet", value: "sqft" },
              { title: "Square Meters", value: "sqm" },
              { title: "Acres", value: "acres" },
              { title: "Hectares", value: "hectares" },
            ],
          },
          initialValue: "sqft",
        }),
      ],
      group: "pricing",
    }),

    // ─── Property Details ──────────────────────────────────────────
    defineField({
      name: "grade",
      title: "Property Grade",
      type: "string",
      options: {
        list: [
          { title: "Grade A", value: "Grade A" },
          { title: "Grade A+", value: "Grade A+" },
          { title: "Grade B+", value: "Grade B+" },
          { title: "Grade B", value: "Grade B" },
          { title: "Grade C", value: "Grade C" },
        ],
      },
      group: "details",
    }),
    defineField({
      name: "yearBuilt",
      title: "Year Built",
      type: "number",
      group: "details",
    }),
    defineField({
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
      group: "details",
    }),
    defineField({
      name: "zoning",
      title: "Zoning",
      type: "string",
      group: "details",
    }),
    defineField({
      name: "utilities",
      title: "Utilities",
      type: "array",
      of: [{ type: "string" }],
      group: "details",
    }),
    defineField({
      name: "planningApprovals",
      title: "Planning Approvals",
      type: "array",
      of: [{ type: "string" }],
      group: "details",
    }),
    defineField({
      name: "environmentalAssessment",
      title: "Environmental Assessment",
      type: "text",
      group: "details",
    }),

    // ─── Media ───────────────────────────────────────────────────
    defineField({
      name: "images",
      title: "Property Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      group: "media",
    }),
    defineField({
      name: "brochure",
      title: "Investment Brochure / Memorandum",
      type: "file",
      group: "media",
    }),
    defineField({
      name: "videoTour",
      title: "Video Tour URL",
      type: "url",
      group: "media",
    }),

    // ─── Advisor ─────────────────────────────────────────────────
    defineField({
      name: "advisor",
      title: "Property Advisor",
      type: "object",
      fields: [
        defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "email", title: "Email", type: "string", validation: (Rule) => Rule.required() }),
        defineField({ name: "phone", title: "Phone", type: "string", validation: (Rule) => Rule.required() }),
        defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
      ],
      group: "basic",
    }),

    // ─── SEO ───────────────────────────────────────────────────────
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      group: "seo",
      fields: [
        defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
        defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 3 }),
        defineField({ name: "focusKeyword", title: "Focus Keyword", type: "string" }),
        defineField({ name: "secondaryKeywords", title: "Secondary Keywords", type: "array", of: [{ type: "string" }] }),
      ],
    }),

    // ─── Market Analysis ──────────────────────────────────────────
    defineField({
      name: "neighborhoodAnalysis",
      title: "Neighborhood Analysis",
      type: "text",
      rows: 4,
      group: "analysis",
    }),
    defineField({
      name: "infrastructureDetails",
      title: "Infrastructure & Accessibility",
      type: "text",
      rows: 4,
      group: "analysis",
    }),
    defineField({
      name: "investmentAngle",
      title: "Investment Thesis",
      type: "text",
      rows: 4,
      group: "analysis",
    }),
    defineField({
      name: "rentalDemand",
      title: "Rental Market Demand",
      type: "text",
      rows: 4,
      group: "analysis",
    }),
    defineField({
      name: "appreciationPotential",
      title: "Appreciation Potential",
      type: "text",
      rows: 4,
      group: "analysis",
    }),
    defineField({
      name: "nearbyLandmarks",
      title: "Nearby Landmarks & Amenities",
      type: "array",
      of: [{ type: "string" }],
      group: "analysis",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "city",
      media: "images.0",
      transactionType: "transactionType",
      propertyType: "propertyType",
    },
    prepare({
      title,
      subtitle,
      media,
      transactionType,
      propertyType,
    }: {
      title?: string;
      subtitle?: string;
      media?: unknown;
      transactionType?: string;
      propertyType?: string;
    }) {
      return {
        title: `${title}`,
        subtitle: `${transactionType} | ${propertyType} | ${subtitle}`,
        media,
      };
    },
  },
};