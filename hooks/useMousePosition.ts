'use client'

import { useState, useEffect } from 'react'

/**
 * Mouse position coordinates
 * X and Y coordinates relative to the viewport
 */
interface MousePosition {
  x: number  // Horizontal position (clientX)
  y: number  // Vertical position (clientY)
}

/**
 * useMousePosition - Custom hook for tracking mouse position
 * 
 * Features:
 * - Real-time mouse position tracking
 * - Uses clientX and clientY for viewport-relative coordinates
 * - Automatic event listener cleanup
 * - Performance optimized with proper cleanup
 * - Returns current mouse coordinates
 * 
 * @returns {MousePosition} Current mouse position coordinates
 */
export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    /**
     * Handle mouse movement events
     * Updates position state with current mouse coordinates
     */
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Add event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return mousePosition
}