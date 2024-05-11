import { useEffect, useState } from 'react'

/**
 * @description https://usehooks-ts.com/react-hook/use-debounce
 * @param value The value to debounce
 * @param delay The delay in ms `default is 500ms`
 * @returns The debounced value
 */
export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
