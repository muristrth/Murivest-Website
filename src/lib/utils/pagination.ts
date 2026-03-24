/**
 * Pagination utilities
 */

export interface PaginationParams {
  page: number
  limit: number
}

export interface PaginatedResult<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
}

/**
 * Calculate pagination values
 */
export function calculatePagination(
  total: number,
  page: number,
  limit: number
): PaginatedResult<unknown>['pagination'] {
  const totalPages = Math.ceil(total / limit)
  
  return {
    page,
    limit,
    total,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1
  }
}

/**
 * Get offset for database query
 */
export function getOffset(page: number, limit: number): number {
  return (page - 1) * limit
}

/**
 * Generate page numbers for pagination UI
 */
export function getPageNumbers(
  currentPage: number,
  totalPages: number,
  maxVisible: number = 5
): (number | string)[] {
  if (totalPages <= maxVisible) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }
  
  const half = Math.floor(maxVisible / 2)
  let start = currentPage - half
  let end = currentPage + half
  
  if (start < 1) {
    start = 1
    end = maxVisible
  }
  
  if (end > totalPages) {
    end = totalPages
    start = totalPages - maxVisible + 1
  }
  
  const pages: (number | string)[] = []
  
  if (start > 1) {
    pages.push(1)
    if (start > 2) pages.push('...')
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  if (end < totalPages) {
    if (end < totalPages - 1) pages.push('...')
    pages.push(totalPages)
  }
  
  return pages
}

/**
 * Default pagination params
 */
export const defaultPagination: PaginationParams = {
  page: 1,
  limit: 12
}

/**
 * Common page sizes
 */
export const PAGE_SIZES = [6, 12, 24, 48, 96]

/**
 * Default page size
 */
export const DEFAULT_PAGE_SIZE = 12