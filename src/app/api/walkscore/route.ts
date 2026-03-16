/**
 * Walk Score API Proxy with Sanity Integration
 * Fetches property coordinates from Sanity then queries Walk Score API
 */

import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
});

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const propertyId = searchParams.get('propertyId');
  const address = searchParams.get('address') || '';
  
  // Allow manual override with lat/lon params for testing
  let lat = searchParams.get('lat');
  let lon = searchParams.get('lon');

  const apiKey = process.env.WALKSCORE_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'WalkScore API key not configured', walkscore: 0, transit: null, bike: null },
      { status: 500 }
    );
  }

  // If propertyId provided, fetch coordinates from Sanity
  if (propertyId && (!lat || !lon)) {
    try {
      // Query property - adjust field names based on your schema
      // Based on your memory: documents have 'location' (string) but schema defines 'coordinates' (geopoint)
      const property = await sanityClient.fetch(`
        *[_type == "property" && _id == $propertyId][0]{
          "coordinates": coordinates {
            lat,
            lng
          },
          "location": location, // fallback string address
          address,
          city,
          state
        }
      `, { propertyId });

      if (property?.coordinates?.lat && property?.coordinates?.lng) {
        lat = String(property.coordinates.lat);
        lon = String(property.coordinates.lng);
      } else if (property?.location) {
        // If no geopoint but has location string, you might need to geocode it
        // For now, return error or fallback
        return NextResponse.json(
          { 
            error: 'Property has no coordinates. Please update the property with lat/lng.',
            walkscore: 0, 
            transit: null, 
            bike: null 
          },
          { status: 400 }
        );
      }
    } catch (error) {
      console.error('Sanity fetch error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch property from Sanity', walkscore: 0, transit: null, bike: null },
        { status: 500 }
      );
    }
  }

  if (!lat || !lon) {
    return NextResponse.json(
      { error: 'Latitude and longitude required (provide propertyId or lat/lon)', walkscore: 0, transit: null, bike: null },
      { status: 400 }
    );
  }

  try {
    const wsUrl = new URL('https://api.walkscore.com/score/json');
    wsUrl.searchParams.set('address', address);
    wsUrl.searchParams.set('lat', lat);
    wsUrl.searchParams.set('lon', lon);
    wsUrl.searchParams.set('transit', '1');
    wsUrl.searchParams.set('bike', '1');
    wsUrl.searchParams.set('format', 'JSON');
    wsUrl.searchParams.set('wsapikey', apiKey);

    const res = await fetch(wsUrl.toString(), {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!res.ok) {
      return NextResponse.json({
        walkscore: 0,
        transit: { score: null },
        bike: { score: null },
        status: res.status
      });
    }

    const data = await res.json();

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
      },
    });
  } catch (error) {
    console.error('WalkScore fetch error:', error);
    return NextResponse.json(
      { walkscore: 0, transit: { score: null }, bike: { score: null }, error: 'Fetch failed' },
      { status: 500 }
    );
  }
}