import { NextResponse } from 'next/server'
import { getBookings } from '@/lib/bookings'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const date = searchParams.get('date')
    const bookings = getBookings()
    const all = date ? bookings.filter(b => b.date === date) : bookings
    return NextResponse.json({ bookings: all.map(b => ({ date: b.date, time: b.time })) })
  } catch {
    return NextResponse.json({ error: 'Unable to read ledger.' }, { status: 500 })
  }
}