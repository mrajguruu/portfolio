'use client'

import React, { useEffect, useRef, memo } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'

/**
 * CursorGradient - Interactive cursor-following gradient effect
 * 
 * Features:
 * - Dynamic radial gradient that follows mouse cursor
 * - Performance optimized for desktop devices only
 * - Disabled on touch devices to prevent performance issues
 * - Subtle blue gradient with transparency for visual appeal
 * 
 * @component
 * @returns {JSX.Element} Fixed gradient overlay element
 */
const CursorGradient = memo(() => {
  const { x, y } = useMousePosition()
  const gradientRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Performance optimization: Disable cursor gradient on touch devices
    // to prevent performance issues and improve mobile user experience
    const isTouchDevice = () => window.matchMedia("(hover: none)").matches
    if (isTouchDevice()) return

    // Update gradient position to follow mouse cursor
    if (gradientRef.current) {
      gradientRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
    }
  }, [x, y])

  return (
    <div
      ref={gradientRef}
      className="pointer-events-none fixed inset-0 z-30 transition-all duration-75"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
      }}
    />
  )
})

CursorGradient.displayName = 'CursorGradient'

export default CursorGradient