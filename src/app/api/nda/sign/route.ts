/**
 * app/api/nda/sign/route.ts
 *
 * Next.js App Router API route for NDA signing.
 *
 * This route proxies the request to the Python FastAPI microservice
 * (nda_sign.py) running at NDA_SERVICE_URL (default: http://localhost:3001).
 *
 * SETUP:
 *  1. pip install fastapi uvicorn reportlab python-dotenv
 *  2. Copy nda_sign.py to your project root or a /services directory
 *  3. Start the service: uvicorn nda_sign:app --host 0.0.0.0 --port 3001
 *  4. Add to .env.local:
 *       NDA_SERVICE_URL=http://localhost:3001
 *       SMTP_HOST=smtp.gmail.com
 *       SMTP_PORT=587
 *       SMTP_USER=your@gmail.com
 *       SMTP_PASS=your_app_password
 *       ADMIN_EMAIL=admin@ murivest.com
 *       COMPANY_NAME=Murivest Realty Ltd
 */

import { NextRequest, NextResponse } from "next/server";

const NDA_SERVICE_URL =
  process.env.NDA_SERVICE_URL || "http://localhost:3001";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Basic validation at the route level
    if (!body.fullName || !body.email || !body.signatureData) {
      return NextResponse.json(
        { error: "fullName, email, and signatureData are required." },
        { status: 400 }
      );
    }

    // Forward to Python service
    const serviceRes = await fetch(`${NDA_SERVICE_URL}/api/nda/sign`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      // 30 second timeout — PDF generation + email can take a moment
      signal: AbortSignal.timeout(30_000),
    });

    const data = await serviceRes.json();

    if (!serviceRes.ok) {
      return NextResponse.json(
        { error: data.error || "Signing service error." },
        { status: serviceRes.status }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err: unknown) {
    console.error("[NDA sign route]", err);

    if (err instanceof Error && err.name === "TimeoutError") {
      return NextResponse.json(
        { error: "Request timed out. Please try again." },
        { status: 504 }
      );
    }

    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

/**
 * ALTERNATIVE: Run Python inline via child_process (no separate service needed)
 * Uncomment the block below and remove the fetch-based handler above
 * if you prefer not to run a separate Python server.
 *
 * Requires: pip install reportlab installed in the system Python
 * that Next.js's Node process can reach.
 */

/*
import { exec } from "child_process";
import { promisify } from "util";
const execAsync = promisify(exec);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const json = JSON.stringify(body);
  const escaped = json.replace(/'/g, "'\\''");

  // Pass env vars to the Python subprocess
  const env = {
    ...process.env,
    SMTP_HOST: process.env.SMTP_HOST ?? "smtp.gmail.com",
    SMTP_PORT: process.env.SMTP_PORT ?? "587",
    SMTP_USER: process.env.SMTP_USER ?? "",
    SMTP_PASS: process.env.SMTP_PASS ?? "",
    ADMIN_EMAIL: process.env.ADMIN_EMAIL ?? "",
    COMPANY_NAME: process.env.COMPANY_NAME ?? "Murivest Realty Ltd",
  };

  try {
    const { stdout } = await execAsync(
      `echo '${escaped}' | python3 -c "
import sys, json
from nda_sign import handle_sign_request
body = json.load(sys.stdin)
print(json.dumps(handle_sign_request(body)))
"`,
      { env, timeout: 30_000 }
    );
    const result = JSON.parse(stdout.trim());
    if (result.status >= 400) {
      return NextResponse.json({ error: result.error }, { status: result.status });
    }
    return NextResponse.json(result);
  } catch (err) {
    console.error("[NDA sign route]", err);
    return NextResponse.json({ error: "Signing failed." }, { status: 500 });
  }
}
*/