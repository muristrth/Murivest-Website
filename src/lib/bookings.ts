import fs from 'fs'
import path from 'path'

const LEDGER_PATH = path.join(process.cwd(), 'data', 'bookings.json')
const dir = path.dirname(LEDGER_PATH)
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

export interface BookingRecord {
  date: string
  time: string
  email: string
  fullName: string
  createdAt: string
}

function readLedger(): BookingRecord[] {
  try {
    if (!fs.existsSync(LEDGER_PATH)) return []
    return JSON.parse(fs.readFileSync(LEDGER_PATH, 'utf-8'))
  } catch { return [] }
}

function writeLedger(records: BookingRecord[]) {
  fs.writeFileSync(LEDGER_PATH, JSON.stringify(records, null, 2))
}

export function getBookings(): BookingRecord[] { return readLedger() }
export function getBookingsForDate(date: string): BookingRecord[] {
  return readLedger().filter(b => b.date === date)
}
export function isSlotBooked(date: string, time: string): boolean {
  return readLedger().some(b => b.date === date && b.time === time)
}
export function reserveSlot(record: BookingRecord): boolean {
  const bookings = readLedger()
  if (bookings.some(b => b.date === record.date && b.time === record.time)) return false
  bookings.push(record)
  writeLedger(bookings)
  return true
}