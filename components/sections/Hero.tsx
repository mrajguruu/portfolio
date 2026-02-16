'use client'

import React, { useRef, memo } from 'react'
import { ArrowDown, Code2, Zap, Rocket, Terminal } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/data/siteConfig'
import ScrambleText from '@/components/animations/ScrambleText'
import FloatingParticles from '@/components/effects/FloatingParticles'
import FloatingTechIcons from '@/components/effects/FloatingTechIcons'

/**
 * Hero - Main landing section with animated introduction
 * 
 * @component
 * @returns {JSX.Element} Hero section with animated content
 */
const Hero = memo(() => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  const [hasAnimated, setHasAnimated] = React.useState(false)

  React.useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 md:px-6 lg:px-8 py-12 md:py-28 lg:py-32"
    >
      {/* Background Effects with Parallax */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-primary-500/10 via-transparent to-transparent"
      />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Floating Tech Icons */}
      <FloatingTechIcons />

      {/* Simplified background effects */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <motion.div
        className="container-custom relative z-10 w-full max-w-[1400px]"
      >
        <div className="w-full text-center space-y-3 md:space-y-8 lg:space-y-10">

          {/* Animated Badge Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl min-w-[220px]">
              <Code2 className="w-5 h-5 text-primary-400" />
              <ScrambleText
                words={['Building...', 'Designing...', 'Creating...', 'Innovating...']}
                className="text-primary-400 font-bold text-sm tracking-widest"
                scrambleSpeed={35}
                stayDuration={2500}
              />
            </div>
          </motion.div>

          {/* Massive Headline Name */}
          <motion.div
            className="px-4 relative z-20 -mt-4 sm:mt-0"
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-none tracking-tighter break-words pb-4">
              <span
                className="block"
                style={{
                  background: 'linear-gradient(to right, rgb(94, 234, 212), rgb(147, 51, 234))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                {siteConfig.name.toUpperCase().split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50, rotateY: 90 }}
                    animate={hasAnimated ? {
                      opacity: 1,
                      y: 0,
                      rotateY: 0
                    } : {
                      opacity: 0,
                      y: 50,
                      rotateY: 90
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + index * 0.03,
                      ease: "easeOut"
                    }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </motion.div>

          {/* Huge Tagline with Aurora Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative z-10"
          >
            <p className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/80 max-w-6xl mx-auto leading-tight px-2">
              <span className="text-purple-400 drop-shadow-lg">Full-Stack Developer</span> crafting exceptional digital experiences.
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-xl lg:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Specializing in building scalable applications with modern architecture and pixel-perfect design.
          </motion.p>

          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4 px-4 py-2.5 md:px-6 md:py-3 glass rounded-full border border-white/10 max-w-fit mx-auto"
          >
            <span className="flex items-center gap-1.5 md:gap-2">
              <Rocket className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary-400" />
              <span className="text-sm md:text-sm font-medium text-white/90">2 Projects Deployed</span>
            </span>
            <span className="text-white/30 text-xs">•</span>
            <span className="flex items-center gap-1.5 md:gap-2">
              <Terminal className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400" />
              <span className="text-sm md:text-sm font-medium text-white/90">5000+ Lines</span>
            </span>
            <span className="text-white/30 text-xs">•</span>
            <span className="flex items-center gap-1.5 md:gap-2">
              <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400" />
              <span className="text-sm md:text-sm font-medium text-white/90">28 Technologies</span>
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, x: "-50%" }}
        animate={{ opacity: 1, x: "-50%" }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 flex flex-col items-center gap-3 text-white/30"
      >
        <span className="text-sm font-medium tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero