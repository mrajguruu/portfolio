'use client'

import React, { useRef, memo } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import GlassCard from '@/components/ui/GlassCard'
import { Palette, Server, Cloud, Rocket, Quote } from 'lucide-react'

/**
 * Statistics data for the about section
 * Displays key metrics and achievements in an animated format
 * 
 * Performance optimization: Memoized to prevent unnecessary re-renders
 */
const stats = [
  { label: 'Frontend', value: 'Specialist', sublabel: 'React/Next.js\nTypeScript', icon: Palette },
  { label: 'Backend', value: 'Developer', sublabel: 'Java/Spring\nPHP/MySQL', icon: Server },
  { label: 'Cloud', value: '& DevOps', sublabel: 'Docker/Deploy\nProduction', icon: Cloud },
  { label: 'Beyond', value: 'Code', sublabel: 'Cricket/Gaming\nROM Testing', icon: Rocket },
]

/**
 * About - Personal introduction and statistics section
 * 
 * Features:
 * - Animated statistics counters
 * - Personal introduction with professional background
 * - Interactive hover effects on stat cards
 * - Responsive design for all screen sizes
 * - Performance optimized with memoization
 * 
 * @component
 * @returns {JSX.Element} About section with personal information and stats
 */
const About = memo(() => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Animation state management
  // Prevents re-triggering animations on scroll
  const [hasAnimated, setHasAnimated] = React.useState(false)

  React.useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <section ref={sectionRef} id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements - Simplified for performance */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeading
            title="About Me"
            subtitle="Get to know more about my journey, passion, and what drives me"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <GlassCard variant="heavy" className="p-2 lg:p-3 overflow-visible">
              <div className="aspect-square relative overflow-visible group">
                <img
                  src="/about section.png"
                  alt="Mohit Rajguru"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Simplified decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-xl group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-xl group-hover:scale-105 transition-transform duration-300" />

                {/* Professional Status Badge - On Edge of Image */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-gray-900/95 backdrop-blur-xl rounded-2xl p-3 lg:p-4 group cursor-pointer z-30 border border-white/10"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75" />
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
                      Available for work
                    </span>
                  </div>
                </motion.div>
              </div>
            </GlassCard>

            {/* Quote Container - Below Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="mt-8 glass rounded-2xl p-5 border border-white/10"
            >
              <div className="flex items-start gap-3">
                <Quote className="w-6 h-6 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/90 text-sm lg:text-base font-medium italic leading-relaxed">
                    &ldquo;The best developers{' '}
                    <span className="relative inline-block">
                      <span className="relative z-10">aren&apos;t those who know everything</span>
                      {/* Underline only for first phrase */}
                      <motion.span
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-500"
                        initial={{ scaleX: 0 }}
                        animate={hasAnimated ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                        style={{ transformOrigin: 'left' }}
                      />
                    </span>
                    —they&apos;re those who{' '}
                    <span className="relative inline-block">
                      <span className="relative z-10">know how to learn anything</span>
                      {/* Highlight marker only for second phrase */}
                      <motion.span
                        className="absolute inset-0 bg-purple-400/30 rounded-sm -z-0"
                        initial={{ scaleX: 0 }}
                        animate={hasAnimated ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
                        style={{ transformOrigin: 'left' }}
                      />
                    </span>
                    .&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="space-y-5 max-w-prose">
              <h3 className="text-3xl lg:text-4xl font-bold">
                Building Digital Experiences That{' '}
                <span className="text-gradient">Stand Out</span>
              </h3>

              <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
                <p>
                  I&apos;m a <span className="text-white font-medium">Full-Stack Developer</span> who turned curiosity into code and classroom projects into production applications. What started as tinkering with HTML in school evolved into building scalable web applications with modern technologies—React, Next.js, TypeScript on the frontend, and Java Spring Boot, PHP on the backend.
                </p>

                <p>
                  What drives me? The thrill of solving complex problems with elegant solutions. The satisfaction of finally cracking that 3 AM bug. The pride of writing code so clean that future-me sends a thank-you note. I believe great software comes from strong fundamentals, attention to detail, and genuine curiosity about how things work under the hood.
                </p>

                <p>
                  I&apos;m the developer who reads documentation for fun, writes commit messages like they&apos;re going in a history book, and treats every code review as a masterclass. Whether it&apos;s crafting pixel-perfect responsive designs, optimizing database queries, or containerizing deployments with Docker—I approach each challenge systematically and don&apos;t stop until it works beautifully.
                </p>

                <p>
                  Beyond the keyboard, I&apos;m a cricket player, badminton enthusiast, and gaming strategist. My side quest? Testing custom ROMs for OnePlus 7—because breaking things in a controlled environment is basically debugging at scale.
                </p>

                <p className="text-white/90 font-medium">
                  Ready to bring technical skills, fresh perspective, and genuine passion to a team building software that matters.
                </p>
              </div>
            </div>
          </motion.div>
        </div >

        {/* Professional Stats Grid - Optimized animations */}
        < motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={hasAnimated ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{
                  delay: 0.6 + index * 0.1,
                  duration: 0.6,
                  ease: "easeOut"
                }}
              >
                <GlassCard variant="heavy" className="p-6 lg:p-7 text-center group hover:bg-gradient-to-b hover:from-white/5 hover:to-transparent transition-all duration-500 relative overflow-hidden min-h-[200px] flex flex-col border border-white/10 hover:border-primary-500/40">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-purple-500/0 group-hover:from-primary-500/5 group-hover:to-purple-500/5 transition-all duration-500" />

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    {/* Top: Large Icon with gradient background */}
                    <div className="flex flex-col items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <span className="text-xs font-medium text-white/60 uppercase tracking-wider">{stat.label}</span>
                    </div>

                    {/* Separator line */}
                    <div className="w-12 h-0.5 bg-gradient-to-r from-primary-500/50 to-purple-500/50 mx-auto mb-4 group-hover:w-16 transition-all duration-300" />

                    {/* Middle: Value - Main Title */}
                    <motion.div
                      className="text-2xl lg:text-3xl font-bold text-white mb-4"
                      initial={{ scale: 0.8 }}
                      animate={hasAnimated ? { scale: 1 } : { scale: 0.8 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                    >
                      {stat.value}
                    </motion.div>

                    {/* Bottom: Sublabel - Tech Stack */}
                    <div className="text-xs text-white/50 whitespace-pre-line leading-relaxed mt-auto">
                      {stat.sublabel}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div >
      </div >
    </section >
  )
})

About.displayName = 'About'

export default About