'use client'

import React, { ReactNode, memo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

/**
 * FadeIn animation component props
 * Configurable animation properties for scroll-triggered fade effects
 */
interface FadeInProps {
  children: ReactNode        // Content to animate
  delay?: number            // Animation delay in seconds
  direction?: 'up' | 'down' | 'left' | 'right'  // Animation direction
  className?: string        // Additional CSS classes
}

/**
 * FadeIn - Scroll-triggered fade animation component
 * 
 * Features:
 * - Scroll-triggered animations using intersection observer
 * - Multiple animation directions (up, down, left, right)
 * - Configurable delay and timing
 * - Performance optimized with memoization
 * - Smooth easeOut transitions
 * 
 * @component
 * @param {FadeInProps} props - Component properties
 * @returns {JSX.Element} Animated container with children
 */
const FadeIn = memo(({ 
  children, 
  delay = 0, 
  direction = 'up',
  className 
}: FadeInProps) => {
  const { ref, inView } = useInView({ threshold: 0.2 })

  // Animation direction configurations
  // Defines initial position offsets for different animation directions
  const directions = {
    up: { y: 30, x: 0 },      // Fade in from below
    down: { y: -30, x: 0 },   // Fade in from above
    left: { y: 0, x: 30 },    // Fade in from right
    right: { y: 0, x: -30 },  // Fade in from left
  }

  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
})

FadeIn.displayName = 'FadeIn'

export default FadeIn