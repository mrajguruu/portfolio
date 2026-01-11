'use client'

import React, { useRef, memo } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import GlassCard from '@/components/ui/GlassCard'
import { education } from '@/data/experience'
import { Calendar, MapPin, CheckCircle, GraduationCap } from 'lucide-react'

/**
 * Education - Academic background and qualifications section
 * 
 * Features:
 * - Educational timeline with institution logos
 * - Glass morphism cards for each qualification
 * - Scroll-triggered animations
 * - Institution-specific logo mapping
 * - Degree level classification
 * - Performance optimized with memoization
 * 
 * @component
 * @returns {JSX.Element} Education section with academic timeline
 */
const Education = memo(() => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  /**
   * Get institution logo based on education index
   * Maps education entries to their respective institution logos
   */
  const getInstitutionLogo = (index: number) => {
    return index === 0 ? '/education/sjchs logo.png' : '/education/kc logo.jpg'
  }

  /**
   * Get degree level based on education index
   * Maps education entries to their respective degree levels
   */
  const getDegreeLevel = (index: number) => {
    return index === 0 ? 'Bachelor&apos;s Degree' : 'Higher Secondary Certificate'
  }

  return (
    <section id="education" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Dark Background - Simplified */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-800/30 via-transparent to-gray-900/20" />
      
      {/* Minimal floating orbs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gray-700/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Simplified Floating Book Pages */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          className="absolute top-20 left-10 w-16 h-20 bg-gradient-to-br from-gray-50/8 to-gray-100/12 rounded-sm transform rotate-12"
          animate={{
            y: [0, -10, 0],
            rotate: [12, 8, 12]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 right-1/3 w-18 h-14 bg-gradient-to-br from-gray-50/5 to-gray-100/8 rounded-sm transform -rotate-9"
          animate={{
            y: [0, 12, 0],
            rotate: [-9, -5, -9]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </motion.div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading
            title="Education"
            subtitle="My academic journey and qualifications"
          />
        </motion.div>

        {/* Education Cards Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Achievement Badge */}
                <div className="absolute -top-3 -right-3 z-20">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GraduationCap size={20} className="text-white" />
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative h-full"
                >
                  <GlassCard variant="heavy" className="p-6 md:p-8 hover:bg-primary-900/20 transition-all duration-300 group border-primary-500/20 h-full">
                    {/* Academic Period Badge */}
                    <div className="absolute -top-3 -left-3 flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-primary-600/90 to-purple-600/90 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold text-white shadow-lg shadow-primary-500/30">
                      <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      {edu.startYear} - {edu.endYear}
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-6">
                      {/* Header with Institution Logo */}
                      <div className="flex flex-col items-center text-center space-y-4">
                        {/* Institution Logo */}
                        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-primary-500/30 flex items-center justify-center overflow-hidden group-hover:border-primary-400/50 transition-colors shadow-lg shadow-primary-500/20">
                          <Image
                            src={getInstitutionLogo(index)}
                            alt={`${edu.institution} logo`}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                            loading="lazy"
                          />
                        </div>
                        
                        {/* Degree Level Badge */}
                        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-full text-xs md:text-sm font-semibold text-primary-300 border border-primary-500/30 shadow-sm">
                          <CheckCircle className="w-3 h-3 md:w-3.5 md:h-3.5" />
                          {getDegreeLevel(index)}
                        </div>
                      </div>

                      {/* Degree Information */}
                      <div className="text-center space-y-3">
                        {/* Degree Name */}
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                          {edu.degree}
                        </h3>
                        
                        {/* Institution */}
                        <div className="text-primary-400 text-base md:text-lg font-medium mb-2">
                          {edu.institution}
                        </div>
                        
                        {/* Location */}
                        <div className="flex items-center justify-center gap-2 text-white/70 text-sm md:text-base">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>

                      {/* Academic Details */}
                      <div className="space-y-4 pt-4 border-t border-primary-500/20">
                        <div className="flex items-center justify-between text-xs md:text-sm">
                          <span className="text-primary-300/80">
                            Duration: {parseInt(edu.endYear) - parseInt(edu.startYear)} years
                          </span>
                          <div className="flex items-center gap-2 text-primary-400">
                            <CheckCircle className="w-4 h-4" />
                            <span className="font-semibold">Completed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

Education.displayName = 'Education'

export default Education