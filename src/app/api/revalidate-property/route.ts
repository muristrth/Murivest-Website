// ─── app/api/revalidate-property/route.ts ────────────────────────────────────
// Sanity webhook → trigger Next.js revalidation when a property is published.
//
// In Sanity Studio:
//   Dashboard → API → Webhooks → Add webhook
//   URL: https://murivest.com/api/revalidate-property
//   Secret: same as SANITY_REVALIDATE_SECRET env var
//   Dataset: production
//   Trigger on: create, update, delete

import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

const SECRET = process.env.SANITY_REVALIDATE_SECRET;

export async function POST(req: NextRequest) {
  // Validate secret
  const authHeader = req.headers.get('authorization');
  if (SECRET && authHeader !== `Bearer ${SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { slug?: string; _type?: string } = {};

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { slug, _type } = body;

  if (_type !== 'property') {
    return NextResponse.json({ message: 'Ignored — not a property document' });
  }

  try {
    if (slug) {
      // Revalidate the specific property page
      revalidatePath(`/properties/${slug}`);
    } else {
      // Revalidate all property pages if no slug provided
      revalidatePath('/properties', 'layout');
    }

    // Always revalidate the sitemap
    revalidatePath('/sitemap-properties.xml');

    return NextResponse.json({
      revalidated: true,
      slug,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error('[revalidate-property] Error:', err);
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 });
  }
}