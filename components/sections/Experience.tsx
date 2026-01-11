'use client'

import React, { useRef, memo } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import GlassCard from '@/components/ui/GlassCard'
import { experiences } from '@/data/experience'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = memo(() => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"]
  })

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="section-padding relative overflow-hidden bg-black"
    >
      {/* Background Effects - Simplified */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 via-transparent to-purple-500/5" />
      
      {/* Minimal floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-500/30 rounded-full animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-500/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeading
            title="Professional Experience"
            subtitle="My career journey and key milestones"
          />
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-500/20" />
          
          {/* Progress Indicator - Optimized */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <motion.div
              className="w-full bg-primary-500/80 shadow-lg shadow-primary-500/30"
              style={{ height: timelineHeight }}
            />
          </div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => {
              const companyInitials = exp.company.split(' ').map(word => word[0]).join('').slice(0, 2)
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start md:justify-start' : 'justify-start md:justify-end'
                  }`}
                >
                  {/* Card */}
                  <div className={`w-full max-w-lg ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <GlassCard variant="heavy" className="p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group">
                        {/* Experience Period Badge */}
                        <div className={`absolute -top-2 md:-top-3 ${index % 2 === 0 ? '-right-2 md:-right-3' : '-left-2 md:-left-3'} flex items-center gap-1.5 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-gradient-to-r from-primary-500/90 to-primary-600/90 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium text-white shadow-lg shadow-primary-500/30`}>
                          <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5" />
                          {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                          {' - '}
                          {exp.endDate === 'Present' ? 'Present' : new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-6">
                          {/* Header with Logo */}
                          <div className="flex items-start gap-4">
                            {/* Company Logo */}
                            <div className={`relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden transition-colors flex-shrink-0 ${exp.company === 'QSpider Institute' ? 'bg-white group-hover:bg-white' : 'group-hover:bg-white/10'}`}>
                              {exp.logo ? (
                                <img 
                                  src={exp.logo} 
                                  alt={`${exp.company} logo`}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-white font-bold text-base md:text-lg">
                                  {companyInitials}
                                </div>
                              )}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              {/* Job Type Badge */}
                              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-full text-xs font-semibold text-primary-300 border border-primary-500/30 mb-3 shadow-sm">
                                <Briefcase className="w-3 h-3" />
                                {exp.type}
                              </div>
                              
                              {/* Job Title */}
                              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 break-words">
                                {exp.title}
                              </h3>
                              
                              {/* Company */}
                              <div className="text-primary-400 text-sm md:text-base lg:text-lg font-medium mb-1">
                                {exp.company}
                              </div>
                              
                              {/* Location */}
                              <div className="flex items-center gap-2 text-white/60 text-xs md:text-sm">
                                <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                {exp.location}
                              </div>
                            </div>
                          </div>

                          {/* Description - Shortened */}
                          <div className="text-white/70 text-sm leading-relaxed">
                            {exp.description.length > 120 
                              ? `${exp.description.substring(0, 120)}...` 
                              : exp.description
                            }
                          </div>

                          {/* Key Achievements - Top 3 only */}
                          <div className="space-y-2">
                            <h4 className="text-xs font-semibold text-white mb-2">Key Highlights:</h4>
                            {exp.achievements.slice(0, 3).map((achievement, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-white/80">
                                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0" />
                                <span>{achievement}</span>
                              </div>
                            ))}
                          </div>

                          {/* Technologies - Top 8 only */}
                          <div className="space-y-2">
                            <h4 className="text-xs font-semibold text-white mb-2">Key Technologies:</h4>
                            <div className="flex flex-wrap gap-1.5">
                              {exp.technologies.slice(0, 8).map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-white/5 rounded text-xs text-white/60 border border-white/10"
                                >
                                  {tech}
                                </span>
                              ))}
                              {exp.technologies.length > 8 && (
                                <span className="px-2 py-1 bg-white/5 rounded text-xs text-white/40 border border-white/10">
                                  +{exp.technologies.length - 8} more
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
})

Experience.displayName = 'Experience'

export default Experience