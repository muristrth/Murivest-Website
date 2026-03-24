/**
 * URL-safe slug generation
 */

/**
 * Convert string to URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    // Replace special characters with spaces
    .replace(/[^\w\s-]/g, ' ')
    // Replace multiple spaces with single dash
    .replace(/[\s_-]+/g, '-')
    // Replace leading/trailing dashes
    .replace(/^-+|-+$/g, '')
}

/**
 * Generate unique slug from title
 */
export async function generateSlug(
  baseSlug: string,
  exists: (slug: string) => Promise<boolean>,
  maxAttempts: number = 5
): Promise<string> {
  let slug = slugify(baseSlug)
  
  // Check if base slug exists
  if (!(await exists(slug))) {
    return slug
  }
  
  // Try appending numbers
  for (let i = 2; i <= maxAttempts; i++) {
    const newSlug = `${slug}-${i}`
    if (!(await exists(newSlug))) {
      return newSlug
    }
  }
  
  // Fallback to UUID-based slug
  return `${slug}-${Date.now().toString(36)}`
}

/**
 * Extract slug from URL path
 */
export function extractSlug(pathname: string): string {
  const segments = pathname.split('/')
  return segments[segments.length - 1] || ''
}

/**
 * Validate slug format
 */
export function isValidSlug(slug: string): boolean {
  // Allow alphanumeric, hyphens, and underscores
  // Length between 2 and 100 characters
  return /^[a-z0-9][a-z0-9-]{1,98}[a-z0-9]$/i.test(slug)
}