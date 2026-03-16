/**
 * Walk Score API Proxy
 * Server-side proxy to avoid CORS issues with Walk Score API
 */

import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const address = searchParams.get('address') || '';
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  const apiKey = process.env.WALKSCORE_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'WalkScore API key not configured', walkscore: 0, transit: null, bike: null },
      { status: 500 }
    );
  }

  if (!lat || !lon) {
    return NextResponse.json(
      { error: 'Latitude and longitude required', walkscore: 0, transit: null, bike: null },
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
      // Return fallback data if API fails
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