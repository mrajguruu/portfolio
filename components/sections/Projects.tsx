
'use client'

import React from 'react'
import FadeIn from '@/components/animations/FadeIn'
import ProjectSlider from '@/components/features/ProjectSlider'

/**
 * Projects - Portfolio projects showcase section
 * 
 * Features:
 * - Animated section header with gradient text
 * - Interactive project slider component
 * - Grid pattern background for visual appeal
 * - Staggered fade-in animations
 * - Responsive design with proper spacing
 * - Gradient background for depth
 * 
 * @component
 * @returns {JSX.Element} Projects section with interactive slider
 */
export default function Projects() {
  return (
    <section id="projects" className="pt-8 pb-16 lg:pt-12 lg:pb-20 relative bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Background grid pattern for visual texture */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container-custom relative z-10">
        {/* Animated section header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent" style={{ lineHeight: '1.2', paddingBottom: '0.2em' }}>
              Projects
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Innovative solutions that push boundaries and deliver exceptional user experiences through cutting-edge technology and creative problem-solving.
            </p>
          </div>
        </FadeIn>

        {/* Interactive project slider with delayed animation */}
        <FadeIn delay={0.2}>
          <ProjectSlider />
        </FadeIn>
      </div>
    </section>
  )
}
