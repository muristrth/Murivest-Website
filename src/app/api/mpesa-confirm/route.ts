import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Standalone endpoint for validating/logging a raw M-Pesa message
// (kept separate from email-confirm so mpesa parsing logic can be
// reused/tested independently, or swapped for a real C2B callback later)

function validatePaymentMessage(msg: string, expectedAmount: number): { valid: boolean; error: string } {
  const text = msg.trim()

  if (text.length < 30) {
    return { valid: false, error: 'Please paste the complete M-Pesa confirmation SMS.' }
  }

  const requiredKeywords = ['Confirmed', 'Ksh', 'MARK MAINA MURIITHI', 'sent to']
  for (const kw of requiredKeywords) {
    if (!text.includes(kw)) {
      return { valid: false, error: `Missing required keyword: "${kw}".` }
    }
  }

  const amountStr = expectedAmount.toLocaleString()
  const amountPatterns = [
    new RegExp(`Ksh\\s*${amountStr.replace(/,/g, '[,]?')}`),
    new RegExp(`Ksh${amountStr.replace(/,/g, '[,]?')}`),
    new RegExp(`${amountStr.replace(/,/g, '[,]?')}\\s*Ksh`, 'i'),
  ]
  const hasCorrectAmount = amountPatterns.some((re) => re.test(text))
  if (!hasCorrectAmount) {
    return { valid: false, error: `Amount must be exactly Ksh ${amountStr}.` }
  }

  if (!text.includes('478891')) {
    return { valid: false, error: 'Account number 478891 not found.' }
  }

  if (!/[A-Z0-9]{8,12}/.test(text)) {
    return { valid: false, error: 'Could not detect a valid transaction reference.' }
  }

  return { valid: true, error: '' }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { mpesaMessage, viewingFee } = body as { mpesaMessage: string; viewingFee: number }

    if (!mpesaMessage || !viewingFee) {
      return NextResponse.json({ error: 'Missing mpesaMessage or viewingFee.' }, { status: 400 })
    }

    const validation = validatePaymentMessage(mpesaMessage, Number(viewingFee))
    if (!validation.valid) {
      return NextResponse.json(
        {
          verified: false,
          error: 'Payment could not be verified. Please confirm that you pasted the complete M-Pesa confirmation SMS.',
          detail: validation.error,
        },
        { status: 400 }
      )
    }

    return NextResponse.json({ verified: true, message: 'Payment Verified Successfully.' })
  } catch (error) {
    console.error('[mpesa-confirm] error:', error)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 })
}