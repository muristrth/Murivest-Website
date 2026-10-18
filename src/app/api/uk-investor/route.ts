import { NextResponse } from 'next/server';
import { validateEnquiry } from '@/lib/uk/uk-enquiry-schema';
import { sendUkEnquiryEmail } from '@/lib/uk/uk-enquiry-mail';

export const runtime = 'nodejs'; // nodemailer needs the Node runtime
export const dynamic = 'force-dynamic';

// Simple in-memory rate limit: 5 submissions per IP per hour.
// On serverless platforms this resets per instance; use Upstash/Redis if you need a hard limit.
const WINDOW_MS = 60 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_HITS;
}

export async function POST(req: Request) {
  const ip = (req.headers.get('x-forwarded-for') ?? 'unknown').split(',')[0].trim();
  if (limited(ip)) {
    return NextResponse.json({ ok: false, message: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  if (!(req.headers.get('content-type') ?? '').includes('application/json')) {
    return NextResponse.json({ ok: false, message: 'Unsupported request.' }, { status: 415 });
  }

  let body: Record<string, unknown>;
  try {
    const text = await req.text();
    if (text.length > 20_000) {
      return NextResponse.json({ ok: false, message: 'Request too large.' }, { status: 413 });
    }
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 });
  }

  // Bot traps: hidden "website" field must be empty; real users take more than 2 seconds.
  const startedAt = Number(body.startedAt);
  if (
    (typeof body.website === 'string' && body.website.trim() !== '') ||
    (Number.isFinite(startedAt) && Date.now() - startedAt < 2000)
  ) {
    return NextResponse.json({ ok: true }); // pretend success, send nothing
  }

  const result = validateEnquiry(body);
  if (!result.ok) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 422 });
  }

  try {
    await sendUkEnquiryEmail(result.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    // Log the error type only, never the submitted personal data.
    console.error('[uk-investor-enquiry] email failed:', err instanceof Error ? err.message : 'unknown');
    return NextResponse.json(
      { ok: false, message: 'We could not send your enquiry. Please try again or email us directly.' },
      { status: 502 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: false, message: 'Method not allowed.' }, { status: 405 });
}