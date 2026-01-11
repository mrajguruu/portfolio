'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * useInView hook options
 * Configuration for intersection observer behavior
 */
interface UseInViewOptions {
  threshold?: number      // Intersection threshold (0-1)
  rootMargin?: string     // Root margin for intersection calculation
  triggerOnce?: boolean   // Whether to trigger only once
}

/**
 * useInView - Custom hook for detecting element visibility
 * 
 * Features:
 * - Uses Intersection Observer API for performance
 * - Configurable threshold and root margin
 * - Optional one-time triggering
 * - Automatic cleanup on unmount
 * - Returns ref and visibility state
 * 
 * @param {UseInViewOptions} options - Observer configuration
 * @returns {object} Object containing ref and inView state
 */
export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Create intersection observer with provided options
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          // Disconnect observer if triggerOnce is enabled
          if (triggerOnce) observer.disconnect()
        } else if (!triggerOnce) {
          // Reset state if not triggerOnce and element leaves view
          setInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return { ref, inView }
}

