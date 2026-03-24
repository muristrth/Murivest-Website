/**
 * Date formatting utilities
 */

/**
 * Format date to locale string
 */
export function formatDate(
  date: string | Date | null | undefined,
  options?: Intl.DateTimeFormatOptions
): string {
  if (!date) return ''
  
  const d = typeof date === 'string' ? new Date(date) : date
  
  if (isNaN(d.getTime())) return ''
  
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  })
}

/**
 * Format date short (MMM DD, YYYY)
 */
export function formatDateShort(
  date: string | Date | null | undefined
): string {
  if (!date) return ''
  
  const d = typeof date === 'string' ? new Date(date) : date
  
  if (isNaN(d.getTime())) return ''
  
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

/**
 * Format relative time (e.g., "2 days ago")
 */
export function formatRelativeTime(
  date: string | Date | null | undefined
): string {
  if (!date) return ''
  
  const d = typeof date === 'string' ? new Date(date) : date
  
  if (isNaN(d.getTime())) return ''
  
  const now = new Date()
  const diffInMs = now.getTime() - d.getTime()
  const diffInSeconds = Math.floor(diffInMs / 1000)
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  const diffInHours = Math.floor(diffInMinutes / 60)
  const diffInDays = Math.floor(diffInHours / 24)
  const diffInWeeks = Math.floor(diffInDays / 7)
  const diffInMonths = Math.floor(diffInDays / 30)
  const diffInYears = Math.floor(diffInDays / 365)
  
  if (diffInSeconds < 60) return 'just now'
  if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`
  if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`
  if (diffInWeeks < 4) return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`
  if (diffInMonths < 12) return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`
  return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`
}

/**
 * Format time (HH:MM AM/PM)
 */
export function formatTime(
  date: string | Date | null | undefined
): string {
  if (!date) return ''
  
  const d = typeof date === 'string' ? new Date(date) : date
  
  if (isNaN(d.getTime())) return ''
  
  return d.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  })
}

/**
 * Format date and time
 */
export function formatDateTime(
  date: string | Date | null | undefined
): string {
  if (!date) return ''
  
  const d = typeof date === 'string' ? new Date(date) : date
  
  if (isNaN(d.getTime())) return ''
  
  return `${formatDate(d)} at ${formatTime(d)}`
}

/**
 * Format ISO date for input fields
 */
export function toInputDateFormat(date: string | Date | null | undefined): string {
  if (!date) return ''
  
  const d = typeof date === 'string' ? new Date(date) : date
  
  if (isNaN(d.getTime())) return ''
  
  return d.toISOString().split('T')[0]
}

/**
 * Format date for API (ISO string)
 */
export function toAPIDateFormat(date: Date): string {
  return date.toISOString()
}

/**
 * Parse date from various formats
 */
export function parseDate(dateString: string): Date | null {
  const parsed = new Date(dateString)
  return isNaN(parsed.getTime()) ? null : parsed
}

/**
 * Get days between two dates
 */
export function getDaysBetween(start: Date, end: Date): number {
  const diffInMs = end.getTime() - start.getTime()
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24))
}

/**
 * Check if date is today
 */
export function isToday(date: Date): boolean {
  const today = new Date()
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

/**
 * Check if date is in the past
 */
export function isPast(date: Date): boolean {
  return date < new Date()
}

/**
 * Check if date is in the future
 */
export function isFuture(date: Date): boolean {
  return date > new Date()
}