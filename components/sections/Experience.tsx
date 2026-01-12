'use client'

import React, { useRef, memo, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import GlassCard from '@/components/ui/GlassCard'
import { experiences, Experience as ExperienceType } from '@/data/experience'
import { Briefcase, Calendar, MapPin, X, Code, Award, Info, ExternalLink, GraduationCap } from 'lucide-react'

const techIcons: Record<string, string> = {
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'Spring MVC': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'Spring Security': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'Hibernate': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Maven': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg',
  'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
}

function ExperienceModal({ experience, onClose }: { experience: ExperienceType; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-gray-900/95 via-gray-900/98 to-black/95 border border-white/10 shadow-2xl modal-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X size={24} />
        </motion.button>

        <div className="relative p-8 pb-0">
          <div className="absolute top-0 right-0 text-[200px] font-black opacity-5 leading-none pointer-events-none">
            {experience.company.charAt(0)}
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-medium border border-primary-500/30">
              {experience.type}
            </span>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30 flex items-center gap-1.5">
              <Calendar size={12} />
              {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {experience.endDate === 'Present' ? 'Present' : new Date(experience.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium flex items-center gap-1.5">
              <MapPin size={12} />
              {experience.location}
            </span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/30 flex items-center gap-1.5">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              Completed
            </span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            {experience.logo && (
              <motion.div
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-white flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <img src={experience.logo} alt={`${experience.company} logo`} className="w-full h-full object-cover" />
              </motion.div>
            )}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                {experience.title}
              </h2>
              <p className="text-xl text-primary-400 font-medium mt-1">{experience.company}</p>
            </div>
          </div>
          <p className="text-lg text-white/70 mb-6 leading-relaxed">{experience.description}</p>
        </div>

        <div className="p-8 pt-4">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white/80 mb-4 flex items-center gap-2">
              <Award size={18} className="text-primary-400" />
              Key Achievements
            </h3>
            <div className="space-y-3">
              {experience.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 text-white/70"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white/80 mb-4 flex items-center gap-2">
              <Code size={18} className="text-primary-400" />
              Technologies & Tools ({experience.technologies.length})
            </h3>
            <div className="flex flex-wrap gap-3">
              {experience.technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-white/5 text-white/80 border border-white/10 hover:border-primary-500/50 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {techIcons[tech] && <img src={techIcons[tech]} alt={tech} className="w-5 h-5 object-contain" />}
                  <span>{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {experience.credentialUrl && (
            <motion.a
              href={experience.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500/20 text-primary-400 rounded-xl border border-primary-500/30 hover:bg-primary-500/30 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink size={18} />
              View Program Details
            </motion.a>
          )}
        </div>
      </motion.div>
    </div>
  )
}

const Experience = memo(function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [selectedExperience, setSelectedExperience] = useState<ExperienceType | null>(null)

  const exp = experiences[0]

  return (
    <section ref={sectionRef} id="experience" className="section-padding relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-500/30 rounded-full animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-500/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeading title="Learning Journey" subtitle="Building expertise through structured training" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ y: -5, scale: 1.005 }} transition={{ duration: 0.3, ease: "easeOut" }}>
              <GlassCard variant="heavy" className="p-8 md:p-12 hover:bg-white/8 transition-all duration-300 group relative overflow-visible">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-primary-500/15 to-purple-500/15 rounded-full blur-3xl" />

                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 flex-shrink-0 bg-white group-hover:shadow-xl group-hover:shadow-primary-500/20">
                      {exp.logo ? (
                        <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-cover rounded-xl" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl">
                          {exp.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="text-primary-400 text-lg md:text-xl font-medium">{exp.company}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-full text-xs font-semibold text-primary-300 border border-primary-500/30">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {exp.type}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full text-xs font-medium text-white/70 border border-white/10">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {exp.endDate === 'Present' ? 'Present' : new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full text-xs font-medium text-white/70 border border-white/10">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 rounded-full text-xs font-medium text-emerald-400 border border-emerald-500/30">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                      Completed
                    </div>
                  </div>

                  <p className="text-white/70 text-base md:text-lg leading-relaxed">{exp.description}</p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white/80 flex items-center gap-2">
                      <Code className="w-4 h-4 text-primary-400" />
                      Key Technologies
                    </h4>
                    <div className="flex flex-wrap items-center gap-2">
                      {exp.technologies.slice(0, 5).map((tech) => (
                        <div key={tech} className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg text-sm text-white/80 border border-white/10 hover:border-white/25 transition-colors">
                          {techIcons[tech] && <img src={techIcons[tech]} alt={tech} className="w-4 h-4" />}
                          <span>{tech}</span>
                        </div>
                      ))}
                      {exp.technologies.length > 5 && (
                        <div className="px-3 py-2 bg-primary-500/10 rounded-lg text-sm text-primary-400 border border-primary-500/20 font-medium">
                          +{exp.technologies.length - 5} more
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <Award className="w-4 h-4 text-primary-400" />
                      <span>{exp.achievements.length} Key Achievements</span>
                    </div>
                    <motion.button
                      onClick={() => setSelectedExperience(exp)}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-primary-500/20 to-purple-500/20 hover:from-primary-500/30 hover:to-purple-500/30 border border-primary-500/30 hover:border-primary-500/50 backdrop-blur-sm transition-all duration-300"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Info size={16} className="text-primary-400" />
                      View Details
                    </motion.button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedExperience && (
          <ExperienceModal experience={selectedExperience} onClose={() => setSelectedExperience(null)} />
        )}
      </AnimatePresence>
    </section>
  )
})

export default Experience