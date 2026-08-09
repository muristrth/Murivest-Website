// sanity/schemas/schema-property.ts
// Document schema for "propertylet" — supports To Let listings on Murivest.

import { defineField, defineType } from "sanity";

export default defineType({
  name: "propertylet",
  title: "Propertylet",
  type: "document",



  // ── Field groups (organise Studio tabs) ────────────────────────────────
  groups: [
    { name: "basic",       title: "Basic Info",    default: true },
    { name: "location",    title: "Location"                      },
    { name: "pricing",     title: "Pricing & Size"                },
    { name: "media",       title: "Media"                         },
    { name: "details",     title: "Details & Features"            },
    { name: "leasing",     title: "Leasing"                       },
    { name: "broker",      title: "Broker"                        },
  ],

  fields: [
    // ── Basic Info ────────────────────────────────────────────────────────

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "basic",
      description: "Primary listing headline shown on cards and the detail page.",
      validation: (R) => R.required().min(5).max(120),
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      group: "basic",
      description: "Optional secondary headline (e.g. 'Grade A Office Space').",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "basic",
      options: { source: "title", maxLength: 96 },
      validation: (R) => R.required(),
    }),

    defineField({
      name: "transactionType",
      title: "Transaction Type",
      type: "string",
      group: "basic",
      description: "Must be 'To Let' for this listing type.",
      options: {
        list: [
          { title: "To Let",    value: "To Let"    },
          { title: "For Sale",  value: "For Sale"  },
        ],
        layout: "radio",
      },
      initialValue: "To Let",
      validation: (R) => R.required(),
    }),

    defineField({
      name: "propertyType",
      title: "Property Type",
      type: "string",
      group: "basic",
      options: {
        list: [
          { title: "Office",        value: "Office"        },
          { title: "Retail",        value: "Retail"        },
          { title: "Industrial",    value: "Industrial"    },
          { title: "Warehouse",     value: "Warehouse"     },
          { title: "Residential",   value: "Residential"   },
          { title: "Mixed Use",     value: "Mixed Use"     },
          { title: "Land",          value: "Land"          },
          { title: "Other",         value: "Other"         },
        ],
      },
      validation: (R) => R.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "basic",
      description: "Optional sub-category (e.g. 'Serviced Office', 'Cold Storage').",
    }),
          {
      name: "country",
      title: "Country",
      type: 'string',
      options: {
        list: [
          { title: 'United Kingdom', value: 'united-kingdom' },
          { title: 'United States', value: 'united-states' },
          { title: 'Canada', value: 'canada' },
          { title: 'Kenya', value: 'kenya' },
          { title: 'South Africa', value: 'south-africa' },
          { title: 'UAE', value: 'uae' },
          { title: 'Singapore', value: 'singapore' },
        ],
      },
    },
    {
      name: "assetType",
      title: "Asset Type",
      type: 'string',
      options: {
        list: [
          { title: 'Office', value: 'office' },
          { title: 'Hotel', value: 'hotel' },
          { title: 'Retail', value: 'retail' },
          { title: 'Industrial', value: 'industrial' },
          { title: 'Mixed-Use', value: 'mixed-use' },
          { title: 'Residential', value: 'residential' },
          { title: 'Commercial', value: 'commercial' },
        ],
      },
    },
    {
      name: "listingType",
      title: "Listing Type",
      type: 'string',
      options: {
        list: [
          { title: 'For Sale', value: 'for-sale' },
          { title: 'For Lease', value: 'for-lease' },
        ],
      },
    },

    defineField({
      name: "grade",
      title: "Grade",
      type: "string",
      group: "basic",
      description: "Building grade shown on the card badge.",
      options: {
        list: [
          { title: "Grade A",   value: "Grade A"   },
          { title: "Grade B",   value: "Grade B"   },
          { title: "Grade C",   value: "Grade C"   },
          { title: "Prime",     value: "Prime"     },
          { title: "Standard",  value: "Standard"  },
        ],
      },
      validation: (R) => R.required(),
    }),

    defineField({
      name: "availabilityStatus",
      title: "Availability Status",
      type: "string",
      group: "basic",
      options: {
        list: [
          { title: "Available",     value: "Available"     },
          { title: "Under Offer",   value: "Under Offer"   },
          { title: "Let",           value: "Let"           },
          { title: "Coming Soon",   value: "Coming Soon"   },
        ],
        layout: "radio",
      },
      initialValue: "Available",
      validation: (R) => R.required(),
    }),

    defineField({
      name: "featured",
      title: "Featured Listing",
      type: "boolean",
      group: "basic",
      description: "Featured listings appear first in search results and on the homepage.",
      initialValue: false,
    }),

    defineField({
      name: "listingDate",
      title: "Listing Date",
      type: "date",
      group: "basic",
      options: { dateFormat: "YYYY-MM-DD" },
      validation: (R) => R.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "basic",
      rows: 6,
      description: "Full property description shown on the detail page (first 160 chars used as SEO meta description).",
    }),


    defineField({
      name: "city",
      title: "City",
      type: "string",
      group: "location",
      description: "Used to group related properties (e.g. 'Nairobi', 'Mombasa').",
      validation: (R) => R.required(),
    }),

    defineField({
      name: "neighborhood",
      title: "Neighborhood",
      type: "string",
      group: "location",
      description: "Shown on the property card alongside city.",
      validation: (R) => R.required(),
    }),

    defineField({
      name: "address",
      title: "Full Address",
      type: "string",
      group: "location",
      description: "Optional street address shown on the detail page.",
    }),

    // ── Pricing & Size ────────────────────────────────────────────────────

    defineField({
      name: "price",
      title: "Price",
      type: "object",
      group: "pricing",
      fields: [
        defineField({
          name: "displayPrice",
          title: "Display Price",
          type: "string",
          description: "Formatted string shown to users, e.g. 'Ksh 120 /sqft/month' or 'Price on Request'.",
          validation: (R) => R.required(),
        }),
        defineField({
          name: "Ksh",
          title: "Price (Ksh)",
          type: "string",
          description: "Raw Ksh figure for filtering/sorting (optional).",
        }),
        defineField({
          name: "usd",
          title: "Price (USD)",
          type: "string",
          description: "Raw USD figure for filtering/sorting (optional).",
        }),
      ],
    }),

    defineField({
      name: "sizeRange",
      title: "Size Range",
      type: "object",
      group: "pricing",
      fields: [
        defineField({
          name: "min",
          title: "Min Size",
          type: "number",
          validation: (R) => R.required().min(0),
        }),
        defineField({
          name: "max",
          title: "Max Size",
          type: "number",
          validation: (R) => R.required().min(0),
        }),
        defineField({
          name: "unit",
          title: "Unit",
          type: "string",
          options: {
            list: [
              { title: "sqft", value: "sqft" },
              { title: "sqm",  value: "sqm"  },
              { title: "acres", value: "acres" },
            ],
            layout: "radio",
          },
          initialValue: "sqft",
          validation: (R) => R.required(),
        }),
      ],
    }),

    // ── Media ─────────────────────────────────────────────────────────────

    defineField({
      name: "images",
      title: "Property Images",
      type: "array",
      group: "media",
      description: "First image is used as the card thumbnail. Upload multiple for the gallery.",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Describe the image for accessibility and SEO.",
            }),
          ],
        },
      ],
      validation: (R) => R.required().min(1),
    }),

    defineField({
      name: "floorPlans",
      title: "Floor Plans",
      type: "array",
      group: "media",
      description: "Floor plan images shown on the detail page.",
      of: [
        {
          type: "image",
          options: { hotspot: false },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "brochureUrl",
      title: "Brochure URL",
      type: "url",
      group: "media",
      description: "External link or uploaded PDF URL for the property brochure.",
    }),

    // ── Details & Features ────────────────────────────────────────────────

    defineField({
      name: "features",
      title: "Features",
      type: "array",
      group: "details",
      description: "Key selling points shown as a bullet list on the detail page (e.g. 'Backup Generator', '24/7 Security').",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "details",
      title: "Property Details",
      type: "array",
      group: "details",
      description: "Structured key-value pairs displayed in the details table (e.g. Label: 'Parking Bays', Value: '50').",
      of: [
        {
          type: "object",
          name: "detail",
          title: "Detail",
          preview: {
            select: { title: "label", subtitle: "value" },
          },
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (R) => R.required(),
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              validation: (R) => R.required(),
            }),
          ],
        },
      ],
    }),

    // ── Leasing ───────────────────────────────────────────────────────────

    defineField({
      name: "availableFrom",
      title: "Available From",
      type: "date",
      group: "leasing",
      options: { dateFormat: "YYYY-MM-DD" },
      description: "Earliest move-in / occupation date.",
    }),

    defineField({
      name: "leaseTerm",
      title: "Lease Term",
      type: "string",
      group: "leasing",
      description: "Describe the lease term, e.g. 'Minimum 1 year', 'Flexible – monthly'.",
    }),

    // ── Broker ────────────────────────────────────────────────────────────

    defineField({
      name: "broker",
      title: "Broker / Agent",
      type: "object",
      group: "broker",
      description: "Contact shown on the detail page enquiry panel.",
      fields: [
        defineField({
          name: "name",
          title: "Name",
          type: "string",
          validation: (R) => R.required(),
        }),
        defineField({
          name: "email",
          title: "Email",
          type: "string",
          validation: (R) => R.required().email(),
        }),
        defineField({
          name: "phone",
          title: "Phone",
          type: "string",
          validation: (R) => R.required(),
        }),
        defineField({
          name: "photo",
          title: "Photo",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
  ],
});