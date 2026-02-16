'use client'

import React, { useState, useRef, memo, useMemo } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
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
  { name: 'Next.js', symbol: 'N', atomicNumber: 4, category: 'frontend', brandColor: '#59666C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', description: 'React framework for production', darkIcon: true },
  { name: 'Node.js', symbol: 'N', atomicNumber: 5, category: 'backend', brandColor: '#339933', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', description: 'JavaScript runtime' },
  { name: 'Express', symbol: 'E', atomicNumber: 6, category: 'backend', brandColor: '#59666C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', description: 'Web framework for Node.js', darkIcon: true },
  { name: 'Tailwind CSS', symbol: 'T', atomicNumber: 7, category: 'frontend', brandColor: '#06B6D4', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', description: 'Utility-first CSS' },

  // Row 2: Mid Tier (6) - Infrastructure & Data
  { name: 'MongoDB', symbol: 'M', atomicNumber: 8, category: 'database', brandColor: '#47A248', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', description: 'NoSQL document database' },
  { name: 'MySQL', symbol: 'M', atomicNumber: 9, category: 'database', brandColor: '#4479A1', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', description: 'Relational database' },
  { name: 'Firebase', symbol: 'F', atomicNumber: 10, category: 'cloud', brandColor: '#FFCA28', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', description: 'Backend platform by Google' },
  { name: 'Docker', symbol: 'D', atomicNumber: 11, category: 'devops', brandColor: '#2496ED', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', description: 'Containerization platform' },
  { name: 'Git', symbol: 'G', atomicNumber: 12, category: 'tools', brandColor: '#F05032', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', description: 'Version control system' },
  { name: 'GitHub', symbol: 'GH', atomicNumber: 13, category: 'tools', brandColor: '#59666C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', description: 'Git repository hosting', darkIcon: true },

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
  { name: 'Gradle', symbol: 'G', atomicNumber: 27, category: 'build', brandColor: '#59666C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg', description: 'Build automation tool', darkIcon: true },
  { name: 'VS Code', symbol: 'V', atomicNumber: 28, category: 'tools', brandColor: '#007ACC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', description: 'Code editor' }
]

/**
 * TechCard - Individual interactive tech card
 * Uses a static anchor system for perfect tooltip alignment
 */
const TechCard = memo(({ tech }: { tech: typeof techStack[0] }) => {
  const [isHovered, setIsHovered] = useState(false)
  // Check for 'darkIcon' property to apply background fix
  const isDarkIcon = (tech as any).darkIcon

  return (
    <div className="p-1 sm:p-1.5 isolate overflow-visible">
      {/* 
        Static Anchor Point: 
        This box stays fixed to provide a stable coordinate system for the tooltip.
      */}
      <div
        className="relative w-20 h-20 sm:w-24 sm:h-24"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip Popover - Professional sharp corners & Fluid Physics */}
        <AnimatePresence mode="wait">
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: "-50%", y: 8, scale: 0.96, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: "-50%", y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: "-50%", y: 6, scale: 0.96, filter: "blur(2px)" }}
              transition={{
                type: "spring",
                damping: 40,  // Critical damping - no overshoot
                stiffness: 400, // Firm but fluid
                mass: 0.8
              }}
              className="absolute bottom-full left-1/2 mb-5 z-[100] w-64 p-6 rounded-xl border border-white/20 backdrop-blur-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] pointer-events-none origin-bottom text-center bg-gradient-to-b from-[#1a1a1a]/95 to-[#050505]/95" // Deep gradient
              style={{ borderColor: `${tech.brandColor}40` }}
            >
              {/* Specular Highlight (Top Rim) */}
              <div
                className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50"
              />

              {/* Subtle Ambient Glow */}
              <div
                className="absolute inset-0 opacity-[0.12] blur-[40px] rounded-xl pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${tech.brandColor}, transparent)` }}
              />

              <div className="relative z-10 space-y-2">
                <h4 className="text-lg font-bold text-white tracking-tight leading-none">{tech.name}</h4>
                <p className="text-white/50 text-[12px] leading-relaxed font-medium px-1">
                  {tech.description}
                </p>
              </div>

              {/* Refined Arrow */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 border-r border-b border-white/20 bg-[#0a0a0a]"
                style={{ borderColor: `${tech.brandColor}40` }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Professional Minimalist Card */}
        <motion.div
          className="relative group w-full h-full p-4 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/10 transition-all duration-300 group-hover:border-white/20 flex flex-col items-center justify-between overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05, y: -2 }}
          animate={{
            backgroundColor: isHovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)',
            boxShadow: isHovered ? `0 15px 45px -15px ${tech.brandColor}40` : '0 4px 25px rgba(0,0,0,0.3)',
            zIndex: isHovered ? 50 : 1
          }}
        >
          {/* Tech Icon Container */}
          <div className="flex-grow flex items-center justify-center -mt-1">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Subdued Label */}
          <span className="text-[10px] font-bold text-center uppercase tracking-[0.15em] text-white/40 group-hover:text-white/75 transition-colors truncate w-full">
            {tech.name}
          </span>

          {/* Internal Hover Bloom */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700 blur-3xl rounded-2xl pointer-events-none"
            style={{ backgroundColor: tech.brandColor }}
          />
        </motion.div>
      </div>
    </div>
  )
})

TechCard.displayName = 'TechCard'

/**
 * BentoCard - Styling for category containers
 */
const BentoCard = ({
  title,
  subtitle,
  items,
  className = "",
}: {
  title: string,
  subtitle: string,
  items: typeof techStack,
  className?: string,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative p-8 rounded-[2rem] bg-white/[0.06] backdrop-blur-md border border-white/15 overflow-visible group/bento shadow-2xl ${className}`}
      style={{
        boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6)'
      }}
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none rounded-[2rem] overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-emerald-500/10 to-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter">
              {title}
            </h3>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 whitespace-nowrap">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                {items.length} Techs
              </span>
            </div>
          </div>
          <p className="text-sm text-white/40 font-medium max-w-xs">{subtitle}</p>
        </div>

        <div className="flex-grow flex flex-wrap gap-2 items-center justify-center md:justify-start">
          {items.map(tech => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

BentoCard.displayName = 'BentoCard'

/**
 * TechStack - Premium Category Bento Grid Layout
 */
const TechStack = memo(() => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Categorize technologies
  const categories = useMemo(() => {
    return {
      frontend: {
        title: "Frontend Engineering",
        desc: "Modern UI frameworks and reactive design patterns",
        items: techStack.filter(t => t.category === 'frontend')
      },
      backend: {
        title: "Backend Systems",
        desc: "Scalable server architectures and enterprise logic",
        items: techStack.filter(t => t.category === 'backend')
      },
      infra: {
        title: "Infrastructure & Data",
        desc: "Cloud platforms, containerization, and data structures",
        items: techStack.filter(t => ['database', 'cloud', 'devops'].includes(t.category))
      },
      tools: {
        title: "Dev Productivity",
        desc: "Essential workflows, IDES, and automation suites",
        items: techStack.filter(t => ['tools', 'build', 'server'].includes(t.category))
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="section-padding relative overflow-visible bg-black py-32"
    >
      {/* Background Section Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10 w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Technical Arsenal</span>
          </div>
          <SectionHeading
            title="Design & Development Ecosystem"
            subtitle="Categorized collection of technologies I use to build premium digital experiences"
          />
        </motion.div>

        {/* Bento Grid Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Frontend - Large Block */}
          <BentoCard
            title={categories.frontend.title}
            subtitle={categories.frontend.desc}
            items={categories.frontend.items}
            className="lg:col-span-8 md:min-h-[450px]"
          />

          {/* Infrastructure - Vertical Block */}
          <BentoCard
            title={categories.infra.title}
            subtitle={categories.infra.desc}
            items={categories.infra.items}
            className="lg:col-span-4"
          />

          {/* Backend - Medium Block */}
          <BentoCard
            title={categories.backend.title}
            subtitle={categories.backend.desc}
            items={categories.backend.items}
            className="lg:col-span-12 xl:col-span-5"
          />

          {/* Tools - Wide Bottom Block */}
          <BentoCard
            title={categories.tools.title}
            subtitle={categories.tools.desc}
            items={categories.tools.items}
            className="lg:col-span-12 xl:col-span-7"
          />
        </div>
      </div>
    </section>
  )
})

TechStack.displayName = 'TechStack'

export default TechStack