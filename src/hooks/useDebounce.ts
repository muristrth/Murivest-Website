'use client'

import { useEffect, useState } from 'react'

/**
 * Custom hook for debouncing values
 * @param value - The value to debounce
 * @param delay - The delay in milliseconds (default: 500ms)
 * @returns The debounced value
 * 
 * @example
 * const debouncedSearch = useDebounce(searchTerm, 300)
 * // Use debouncedSearch in your effect or component
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])
  
  return debouncedValue
}

/**
 * Custom hook for debouncing a callback function
 * @param callback - The callback function to debounce
 * @param delay - The delay in milliseconds (default: 500ms)
 * @returns The debounced callback function
 * 
 * @example
 * const debouncedSearch = useDebouncedCallback((query) => {
 *   // Search logic
 * }, 300)
 */
export function useDebouncedCallback<T extends (...args: Parameters<T>) => ReturnType<T>>(
  callback: T,
  delay: number = 500
): (...args: Parameters<T>) => void {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
  
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [timeoutId])
  
  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    
    const newTimeoutId = setTimeout(() => {
      callback(...args)
    }, delay)
    
    setTimeoutId(newTimeoutId)
  }
}

/**
 * Custom hook for debouncing multiple values at once
 * @param values - Object containing values to debounce
 * @param delay - The delay in milliseconds (default: 500ms)
 * @returns Object with debounced values
 * 
 * @example
 * const { search, filter, page } = useDebouncedValues({
 *   search: searchTerm,
 *   filter: filterOption,
 *   page: currentPage
 * }, 300)
 */
export function useDebouncedValues<T extends Record<string, unknown>>(
  values: T,
  delay: number = 500
): Record<string, unknown> {
  const [debouncedValues, setDebouncedValues] = useState(values)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValues(values)
    }, delay)
    
    return () => {
      clearTimeout(timer)
    }
  }, [JSON.stringify(values), delay])
  
  return debouncedValues
}