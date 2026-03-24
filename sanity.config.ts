'use client'

/**
 * SANITY CONFIGURATION
 * ====================
 * Murivest Realty CMS Configuration
 * 
 * Document Types:
 * - property: Commercial real estate (offices, retail, industrial)
 * - land: Land banking and development parcels
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schemaTypes } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  
  // Schema configuration
  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev,
      // Custom initial value templates
      {
        id: 'property-for-sale',
        title: 'Commercial Property - For Sale',
        schemaType: 'property',
        value: {
          listingType: 'For Sale',
          propertyType: 'Commercial Office',
          occupancyRate: '100%',
        },
      },

      {
        id: 'property-for-lease',
        title: 'Commercial Property - For Lease',
        schemaType: 'property',
        value: {
          listingType: 'For Lease',
          propertyType: 'Commercial Office',
          occupancyRate: '95%',
        },
      },
      {
        id: 'land-strategic',
        title: 'Land Parcel - Strategic Bank',
        schemaType: 'land',
        value: {
          landCategory: 'Strategic Land Bank',
          availabilityStatus: 'Available',
          confidentiality: 'Qualified',
          titleType: 'Freehold',
        },
      },
      {
        id: 'land-development',
        title: 'Land Parcel - Development Ready',
        schemaType: 'land',
        value: {
          landCategory: 'Development Ready',
          availabilityStatus: 'Available',
          confidentiality: 'Qualified',
          titleType: 'Freehold',
        },
      },
      {
        id: 'house-for-sale',
        title: 'House For Sale',
        schemaType: 'land',
        value: {
          landCategory: 'House For Sale',
          availabilityStatus: 'Available',
          confidentiality: 'Qualified',
          titleType: 'Freehold',
        },
      }
    ],
  },
  
  // Plugins
  plugins: [
    structureTool({ 
      structure,
      // Default document node resolver
      defaultDocumentNode: (S, { schemaType }) => {
        // Return default for all types
        return S.document().views([
          S.view.form(),
          // Preview view for properties and land
          ...(schemaType === 'property' || schemaType === 'land' 
            ? [S.view
                .component(function PreviewComponent({ document }: { document: any }) {
                  // You can render your preview UI here, or return null for now
                  return null
                })
                .title('Preview')]
            : []
          ),
        ])
      },
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  
  // Theme customization (Old Money aesthetic for Studio)
  theme: {
    // You can customize the studio theme here
    // Note: Requires @sanity/ui theme configuration
  },
  
  // Document actions customization
  document: {
    actions: (prev, { schemaType }) => {
      // Add custom actions for real estate documents
      if (schemaType === 'property' || schemaType === 'land') {
        return [
          ...prev,
          // Custom publish with validation action could go here
        ]
      }
      return prev
    },
    // Production URL for previews
    productionUrl: async (
      prev,
      { document }: { document: { _type?: string; slug?: { current?: string } } }
    ) => {
      const { _type, slug } = document
      
      if (_type === 'property' && slug?.current) {
        return `https://murivest.co.ke/properties/${slug.current}`
      }
      if (_type === 'land' && slug?.current) {
        return `https://murivest.co.ke/land-portfolio/${slug.current}`
      }
      return prev
    },
  },
})