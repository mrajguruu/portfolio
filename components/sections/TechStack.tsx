'use client'

import React, { useState, useRef, memo, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

/**
 * Technology stack configuration
 * Strictly matching the requested 28 items and layout
 */
const techStack = [
  // Row 1: Top Tier (7) - Modern Web Focus
  { name: 'JavaScript', symbol: 'JS', atomicNumber: 1, category: 'frontend', brandColor: '#F7DF1E', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', description: 'Dynamic web programming' },
  { name: 'TypeScript', symbol: 'TS', atomicNumber: 2, category: 'frontend', brandColor: '#3178C6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', description: 'Typed JavaScript' },
  { name: 'React', symbol: 'R', atomicNumber: 3, category: 'frontend', brandColor: '#61DAFB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', description: 'UI component library' },
  { name: 'Next.js', symbol: 'N', atomicNumber: 4, category: 'frontend', brandColor: '#59666C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', description: 'React framework for production' },
  { name: 'Node.js', symbol: 'N', atomicNumber: 5, category: 'backend', brandColor: '#339933', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', description: 'JavaScript runtime' },
  { name: 'Express', symbol: 'E', atomicNumber: 6, category: 'backend', brandColor: '#59666C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', description: 'Web framework for Node.js' },
  { name: 'Tailwind CSS', symbol: 'T', atomicNumber: 7, category: 'frontend', brandColor: '#06B6D4', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', description: 'Utility-first CSS' },

  // Row 2: Mid Tier (6) - Infrastructure & Data
  { name: 'MongoDB', symbol: 'M', atomicNumber: 8, category: 'database', brandColor: '#47A248', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', description: 'NoSQL document database' },
  { name: 'MySQL', symbol: 'M', atomicNumber: 9, category: 'database', brandColor: '#4479A1', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', description: 'Relational database' },
  { name: 'Firebase', symbol: 'F', atomicNumber: 10, category: 'cloud', brandColor: '#FFCA28', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', description: 'Backend platform by Google' },
  { name: 'Docker', symbol: 'D', atomicNumber: 11, category: 'devops', brandColor: '#2496ED', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', description: 'Containerization platform' },
  { name: 'Git', symbol: 'G', atomicNumber: 12, category: 'tools', brandColor: '#F05032', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', description: 'Version control system' },
  { name: 'GitHub', symbol: 'GH', atomicNumber: 13, category: 'tools', brandColor: '#59666C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', description: 'Git repository hosting' },

  // Row 3: Foundations (5) - Core Web & Tools
  { name: 'HTML5', symbol: 'H', atomicNumber: 14, category: 'frontend', brandColor: '#E34F26', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', description: 'Markup language for web' },
  { name: 'CSS3', symbol: 'C', atomicNumber: 15, category: 'frontend', brandColor: '#1572B6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', description: 'Styling language for web pages' },
  { name: 'Eclipse', symbol: 'E', atomicNumber: 16, category: 'tools', brandColor: '#2C2255', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg', description: 'IDE for Java development' },
  { name: 'Chart.js', symbol: 'C', atomicNumber: 17, category: 'frontend', brandColor: '#FF6384', icon: 'https://www.chartjs.org/img/chartjs-logo.svg', description: 'Simple HTML5 Charts using the canvas tag' },
  { name: 'Postman', symbol: 'P', atomicNumber: 18, category: 'tools', brandColor: '#FF6C37', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', description: 'API testing platform' },

  // Row 4: Support (4) - Enterprise & Backend
  { name: 'PHP', symbol: 'P', atomicNumber: 19, category: 'backend', brandColor: '#777BB4', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', description: 'Server-side scripting language' },
  { name: 'Java', symbol: 'J', atomicNumber: 20, category: 'backend', brandColor: '#ED8B00', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', description: 'Enterprise programming language' },
  { name: 'Spring Boot', symbol: 'SB', atomicNumber: 21, category: 'backend', brandColor: '#6DB33F', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', description: 'Java framework' },
  { name: 'Hibernate', symbol: 'H', atomicNumber: 22, category: 'backend', brandColor: '#59666C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg', description: 'Java ORM framework' },

  // Row 5: Legacy / Tooling (6) - Build Systems & Support
  { name: 'Bootstrap', symbol: 'B', atomicNumber: 23, category: 'frontend', brandColor: '#7952B3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', description: 'CSS framework for responsive web design' },
  { name: 'jQuery', symbol: 'JQ', atomicNumber: 24, category: 'frontend', brandColor: '#0769AD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg', description: 'JavaScript library' },
  { name: 'Tomcat', symbol: 'T', atomicNumber: 25, category: 'server', brandColor: '#F8DC75', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg', description: 'Web server for Java' },
  { name: 'Maven', symbol: 'M', atomicNumber: 26, category: 'build', brandColor: '#C71A36', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg', description: 'Build automation for Java' },
  { name: 'Gradle', symbol: 'G', atomicNumber: 27, category: 'build', brandColor: '#59666C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg', description: 'Build automation tool' },
  { name: 'VS Code', symbol: 'V', atomicNumber: 28, category: 'tools', brandColor: '#007ACC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', description: 'Code editor' }
]

/**
 * TechStack - Interactive periodic table-style technology showcase
 * 
 * Features:
 * - Periodic table-inspired layout with atomic numbers
 * - Authentic brand colors and technology icons
 * - Interactive tooltips with detailed descriptions
 * - Responsive design optimized for desktop and mobile
 * - Staggered animations for visual appeal
 * - Hover effects with scale and shadow transitions
 * 
 * @component
 * @returns {JSX.Element} Technology stack section with interactive grid
 */
const TechStack = memo(() => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Desktop layout: 5 rows with fixed structure 7-6-5-4-6
  const rows = useMemo(() => [
    techStack.slice(0, 7),   // Row 1: 7 technologies
    techStack.slice(7, 13),  // Row 2: 6 technologies
    techStack.slice(13, 18), // Row 3: 5 technologies
    techStack.slice(18, 22), // Row 4: 4 technologies
    techStack.slice(22, 28)  // Row 5: 6 technologies
  ], [])

  // Mobile layout: Rows of 3
  const mobileRows = useMemo(() => {
    const rows = []
    for (let i = 0; i < techStack.length; i += 3) {
      rows.push(techStack.slice(i, i + 3))
    }
    return rows
  }, [])

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="section-padding relative overflow-hidden"
    >
      {/* Section background with clean black base */}
      <div className="absolute inset-0 bg-black" />

      <div className="container-custom relative z-10 w-full max-w-[1400px]">
        {/* Section header using SectionHeading component */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading
            title="Tech Stack"
            subtitle="Technologies and tools I work with to build amazing digital experiences"
          />
        </motion.div>

        {/* Interactive technology grid with responsive layouts */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Desktop Layout */}
          <div className="hidden sm:block">
            {rows.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                className="flex justify-center gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.4 + rowIndex * 0.08, ease: "easeOut" }}
              >
                {row.map((tech, techIndex) => {
                  const isLightColor = ['#F7DF1E', '#FFCA28', '#61DAFB', '#F8DC75'].includes(tech.brandColor)

                  return (
                    <motion.div
                      key={tech.name}
                      className="relative group"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + rowIndex * 0.08 + techIndex * 0.02,
                        ease: "easeOut"
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div
                        onMouseEnter={() => setHoveredTech(tech.name)}
                        onMouseLeave={() => setHoveredTech(null)}
                        className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 p-4 sm:p-5 md:p-6 cursor-pointer transition-all duration-200 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg hover:shadow-xl"
                        style={{
                          background: `linear-gradient(135deg, ${tech.brandColor}40 0%, ${tech.brandColor}30 50%, rgba(0,0,0,0.3) 100%)`,
                          borderColor: `${tech.brandColor}80`,
                          boxShadow: `0 4px 16px rgba(0,0,0,0.3), 0 0 0 1px ${tech.brandColor}40`
                        }}
                      >
                        {/* Atomic Number */}
                        <div
                          className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-sm sm:text-base border shadow-lg font-semibold"
                          style={{
                            backgroundColor: tech.brandColor,
                            color: '#FFFFFF',
                            borderColor: `${tech.brandColor}80`,
                            textShadow: '0 1px 2px rgba(0,0,0,0.8)'
                          }}
                        >
                          {tech.atomicNumber}
                        </div>

                        {/* Icon Container */}
                        <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-2 flex items-center justify-center">
                          <div
                            className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden"
                            style={{
                              backgroundColor: 'rgba(255,255,255,0.95)',
                              border: `2px solid ${tech.brandColor}60`,
                              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)'
                            }}
                          >
                            <div className="absolute inset-0 rounded-3xl bg-white border border-gray-300" />
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain relative z-10"
                              loading="lazy"
                              style={{
                                filter: isLightColor
                                  ? 'brightness(1.1) contrast(1.2)'
                                  : 'brightness(1.3) contrast(1.4)'
                              }}
                            />
                          </div>
                        </div>

                        {/* Tech Symbol */}
                        <div
                          className="text-xs sm:text-sm md:text-base text-center mb-1 font-semibold"
                          style={{
                            color: '#FFFFFF',
                            textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                            maxWidth: '100%',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          {tech.symbol}
                        </div>

                        {/* Tech Name */}
                        <div
                          className="text-[10px] sm:text-xs text-center px-1 leading-tight font-medium break-words z-20 relative"
                          style={{
                            color: '#FFFFFF',
                            textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                            maxWidth: '100%',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical'
                          }}
                        >
                          {tech.name}
                        </div>

                        {/* Tooltip */}
                        {hoveredTech === tech.name && (
                          <motion.div
                            className="absolute -top-28 sm:-top-36 md:-top-40 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm px-4 py-3 pointer-events-none z-[99999] border backdrop-blur-xl shadow-2xl w-48 sm:w-56 md:w-64 rounded-lg"
                            style={{
                              backgroundColor: 'rgba(0,0,0,0.95)',
                              borderColor: `${tech.brandColor}70`,
                              boxShadow: `0 0 30px ${tech.brandColor}50`
                            }}
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-base md:text-lg text-white font-semibold">
                                {tech.name}
                              </h4>
                              <span
                                className="text-xs px-2 py-1 rounded border font-semibold"
                                style={{
                                  backgroundColor: tech.brandColor,
                                  color: '#FFFFFF'
                                }}
                              >
                                #{tech.atomicNumber}
                              </span>
                            </div>
                            <p className="text-white text-xs sm:text-sm mb-2 leading-relaxed">
                              {tech.description}
                            </p>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-200">Category:</span>
                              <span
                                className="text-white capitalize px-2 py-1 rounded text-xs border font-semibold"
                                style={{
                                  backgroundColor: tech.brandColor,
                                  color: '#FFFFFF'
                                }}
                              >
                                {tech.category}
                              </span>
                            </div>
                            <div
                              className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent"
                              style={{ borderTopColor: tech.brandColor }}
                            />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="block sm:hidden">
            {mobileRows.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                className="flex justify-center gap-3 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.4 + rowIndex * 0.06, ease: "easeOut" }}
              >
                {row.map((tech) => {
                  const isLightColor = ['#F7DF1E', '#FFCA28', '#61DAFB', '#F8DC75'].includes(tech.brandColor)

                  return (
                    <div
                      key={tech.name}
                      // w-32 h-32 as requested from the snippet
                      className="relative w-32 h-32 p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${tech.brandColor}40 0%, ${tech.brandColor}30 50%, rgba(0,0,0,0.3) 100%)`,
                        borderColor: `${tech.brandColor}80`
                      }}
                    >
                      <div
                        className="absolute -top-1 -left-1 w-6 h-6 rounded-full flex items-center justify-center text-sm border shadow-lg font-semibold"
                        style={{
                          backgroundColor: tech.brandColor,
                          color: '#FFFFFF'
                        }}
                      >
                        {tech.atomicNumber}
                      </div>

                      <div className="w-16 h-16 mx-auto mb-1 flex items-center justify-center">
                        <div
                          className="w-16 h-16 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.95)',
                            border: `2px solid ${tech.brandColor}60`,
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)'
                          }}
                        >
                          <div className="absolute inset-0 rounded-3xl bg-white border border-gray-300" />
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-12 h-12 object-contain relative z-10"
                            loading="lazy"
                            style={{
                              filter: isLightColor ? 'brightness(1.1)' : 'brightness(1.3)'
                            }}
                          />
                        </div>
                      </div>

                      <div
                        className="text-xs text-center mb-1 font-semibold"
                        style={{
                          color: '#FFFFFF',
                          textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                          maxWidth: '100%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {tech.symbol}
                      </div>

                      <div
                        className="text-[10px] text-center px-1 leading-tight font-medium break-words z-20"
                        style={{
                          color: '#FFFFFF',
                          textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                          maxWidth: '100%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical'
                        }}
                      >
                        {tech.name}
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
})

TechStack.displayName = 'TechStack'

export default TechStack