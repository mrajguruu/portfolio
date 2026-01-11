'use client'

import React, { useState, useEffect, memo } from 'react'
import { motion } from 'framer-motion'

/**
 * Particle interface defining the structure for individual floating particles
 * Each particle has unique properties for position, movement, and animation timing
 */
interface Particle {
  id: number
  startX: number
  startY: number
  scale: number
  moveY: number
  moveX: number
  duration: number
  delay: number
}

/**
 * FloatingParticles - Animated background particles component
 * 
 * Features:
 * - Responsive particle count (mobile vs desktop)
 * - Performance optimized with reduced particles on mobile
 * - Smooth floating animations with random trajectories
 * - Fade in/out opacity transitions for natural particle behavior
 * 
 * @component
 * @returns {JSX.Element} Particle animation container
 */
const FloatingParticles = memo(() => {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Performance optimization: Reduce particle count on mobile devices
    // to maintain smooth 60fps animations on lower-end hardware
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const particleCount = isMobile ? 2 : 4

    /**
     * Generate random particle configurations for animation
     * Each particle has unique starting position, movement vector, and timing
     */
    const generateParticles = (): Particle[] => {
      return Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        startX: Math.random() * window.innerWidth,
        startY: Math.random() * window.innerHeight,
        scale: Math.random() * 0.3 + 0.3,
        moveY: Math.random() * -150 - 50,
        moveX: Math.random() * 100 - 50,
        duration: Math.random() * 4 + 4,
        delay: Math.random() * 2,
      }))
    }

    setParticles(generateParticles())
  }, [])

  // Early return if particles haven't been generated yet
  if (particles.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary-500/30 rounded-full particle"
          initial={{
            x: particle.startX,
            y: particle.startY,
            scale: particle.scale,
          }}
          animate={{
            y: [null, particle.moveY],
            x: [null, particle.moveX],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
})

FloatingParticles.displayName = 'FloatingParticles'

export default FloatingParticles