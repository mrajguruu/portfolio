'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

/**
 * Navigation items configuration
 * Defines the main navigation structure with section links
 */
const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
]

/**
 * Navbar - Main navigation component with glass morphism design
 * 
 * Features:
 * - Responsive design with mobile menu
 * - Active section detection with animated underline
 * - Smooth scroll navigation
 * - Glass morphism styling with backdrop blur
 * - Social media links and resume download
 * 
 * @component
 * @returns {JSX.Element} Navigation bar with mobile menu
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navRef = useRef<HTMLElement>(null)
  const navContainerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })

  // Scroll event handler for active section detection
  // Uses viewport offset to account for fixed navbar height
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Determine active navigation section based on scroll position
      const sections = ['home', ...navItems.map(item => item.href.replace('#', ''))]
      const scrollY = window.scrollY + 100

      // Special handling for home section - if we're at the very top, show home as active
      if (window.scrollY < 50) {
        setActiveSection('home')
        return
      }

      // Find current section by checking scroll position against element boundaries
      let current = 'home'
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          if (scrollY >= elementTop) {
            current = sectionId
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update animated underline position based on active section
  // Calculates precise positioning relative to the navigation container
  useEffect(() => {
    const updateUnderline = () => {
      // For home section, hide the underline since it's the logo
      if (activeSection === 'home') {
        setUnderlineStyle({ left: 0, width: 0 })
        return
      }

      const activeButton = itemRefs.current[`#${activeSection}`]
      if (!activeButton || !navContainerRef.current) return

      const containerRect = navContainerRef.current.getBoundingClientRect()
      const buttonRect = activeButton.getBoundingClientRect()

      setUnderlineStyle({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width
      })
    }

    updateUnderline()
    window.addEventListener('resize', updateUnderline)
    return () => window.removeEventListener('resize', updateUnderline)
  }, [activeSection])

  /**
   * Smooth scroll to target section with proper offset
   * Accounts for fixed navbar height to prevent content overlap
   */
  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '')
    const element = document.getElementById(sectionId)

    if (element) {
      const offset = 80 // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }

    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className={`max-w-7xl mx-auto mt-3 transition-all duration-700 ease-in-out ${isScrolled
              ? 'bg-white/20 backdrop-blur-3xl border border-white/30 shadow-3xl shadow-black/60 rounded-3xl'
              : 'bg-white/12 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/40 rounded-3xl'
            }`}
        >
          <div className="max-w-full px-4 lg:px-6">
            <div className="flex items-center justify-between h-20">

              {/* Logo */}
              <motion.button
                onClick={() => scrollToSection('#home')}
                className="flex items-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src="/logos/mr logo.png"
                  alt="MR Logo"
                  className="w-14 h-14 group-hover:scale-105 transition-transform duration-200"
                />
                <div className="flex flex-col items-start">
                  <span className="text-[16px] font-bold tracking-wide text-white group-hover:text-blue-300 transition-colors leading-none drop-shadow-sm">
                    {siteConfig.name.split(' ')[0]}
                  </span>
                  <span className="text-[12px] font-semibold tracking-wider text-white/90 uppercase leading-none mt-1 drop-shadow-sm">
                    {siteConfig.name.split(' ')[1]}
                  </span>
                </div>
              </motion.button>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center justify-center">
                <div ref={navContainerRef} className="relative flex items-center gap-1 px-2 py-2 rounded-2xl bg-white/12 backdrop-blur-3xl border border-white/25 shadow-2xl shadow-black/40">

                  {/* Animated Underline */}
                  <motion.div
                    className="absolute bottom-1 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full"
                    animate={underlineStyle}
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    style={{ pointerEvents: 'none' }}
                  />

                  {navItems.map((item) => (
                    <motion.button
                      key={item.name}
                      ref={(el) => {
                        itemRefs.current[item.href] = el
                      }}
                      onClick={() => scrollToSection(item.href)}
                      className={`relative px-4 py-2.5 text-[15px] font-semibold transition-all duration-200 rounded-xl group text-white/90 hover:text-white hover:bg-white/10 hover:shadow-md hover:shadow-white/10 drop-shadow-sm ${activeSection === item.href.replace('#', '') ? 'text-white' : ''
                        }`}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Right Side - Social Icons and Resume */}
              <div className="hidden lg:flex items-center gap-12">
                {/* Social Icons */}
                <div className="flex items-center gap-1 px-2 py-2 rounded-2xl bg-white/12 backdrop-blur-3xl border border-white/25 shadow-2xl shadow-black/40">
                  {siteConfig.socials.github && (
                    <motion.a
                      href={siteConfig.socials.github as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 group"
                      whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.15, ease: "easeOut" } }}
                      whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                      aria-label="GitHub"
                    >
                      <Github size={18} strokeWidth={2} className="group-hover:drop-shadow-lg transition-all duration-200" />
                    </motion.a>
                  )}
                  {siteConfig.socials.linkedin && (
                    <motion.a
                      href={siteConfig.socials.linkedin as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 group"
                      whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.15, ease: "easeOut" } }}
                      whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} strokeWidth={2} className="group-hover:drop-shadow-lg transition-all duration-200" />
                    </motion.a>
                  )}
                </div>

                {/* Resume Button */}
                <motion.button
                  onClick={() => window.open(siteConfig.links.resume, '_blank')}
                  className="relative px-7 py-3.5 bg-gradient-to-r from-primary-500/90 via-purple-500/90 to-primary-500/90 text-[15px] font-bold text-white rounded-2xl transition-all duration-200 shadow-2xl shadow-primary-500/30 hover:shadow-3xl hover:shadow-primary-500/50 overflow-hidden group"
                  whileHover={{ y: -3, scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-400 via-purple-400 to-primary-400 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%", transition: { duration: 0.4, ease: "easeInOut" } }}
                  />
                  <span className="relative z-10 flex items-center gap-2 font-bold text-white drop-shadow-sm">
                    Download Resume
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3, transition: { duration: 0.2 } }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </motion.svg>
                  </span>
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl transition-all duration-200 shadow-lg shadow-black/20 hover:bg-white/15"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay with blur effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile menu panel with glass morphism design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-x-4 top-28 bg-white/12 backdrop-blur-3xl border border-white/35 rounded-3xl z-50 lg:hidden shadow-3xl shadow-black/70"
            >
              <div className="p-6">
                {/* Mobile navigation items with staggered animation */}
                <nav className="flex flex-col gap-2 mb-8">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, ease: 'easeOut' }}
                      onClick={() => scrollToSection(item.href)}
                      className={`text-left text-lg font-semibold py-4 px-5 rounded-2xl transition-all duration-200 group relative overflow-hidden drop-shadow-sm ${activeSection === item.href.replace('#', '')
                          ? 'text-white bg-white/15 border border-white/30 shadow-lg shadow-white/10'
                          : 'text-white/90 hover:text-white hover:bg-white/8 border border-transparent hover:border-white/20'
                        }`}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center justify-between">
                        {item.name}
                        {/* Animated indicator dot */}
                        <motion.div
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.2 }}
                        />
                      </span>
                    </motion.button>
                  ))}
                </nav>

                {/* Mobile social media links container */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  <div className="flex items-center gap-1 px-3 py-2 rounded-2xl bg-white/12 backdrop-blur-3xl border border-white/25 shadow-2xl shadow-black/40">
                    {siteConfig.socials.github && (
                      <motion.a
                        href={siteConfig.socials.github as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
                        whileHover={{ scale: 1.15, y: -3, transition: { duration: 0.15, ease: "easeOut" } }}
                        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                      >
                        <Github size={18} strokeWidth={2} className="group-hover:drop-shadow-lg transition-all duration-200" />
                      </motion.a>
                    )}
                    {siteConfig.socials.linkedin && (
                      <motion.a
                        href={siteConfig.socials.linkedin as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
                        whileHover={{ scale: 1.15, y: -3, transition: { duration: 0.15, ease: "easeOut" } }}
                        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                      >
                        <Linkedin size={18} strokeWidth={2} className="group-hover:drop-shadow-lg transition-all duration-200" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Mobile resume download button with shimmer effect */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => {
                    window.open(siteConfig.links.resume, '_blank')
                    setIsMobileMenuOpen(false)
                  }}
                  className="relative w-full py-4 bg-gradient-to-r from-primary-500/90 via-purple-500/90 to-primary-500/90 text-base font-bold text-white rounded-2xl shadow-2xl shadow-primary-500/30 hover:shadow-3xl hover:shadow-primary-500/50 overflow-hidden group"
                  whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } }}
                  whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                >
                  {/* Shimmer effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-400 via-purple-400 to-primary-400 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%", transition: { duration: 0.4, ease: "easeInOut" } }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2 font-bold text-white drop-shadow-sm">
                    Download Resume
                    {/* Animated download icon */}
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3, transition: { duration: 0.2 } }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </motion.svg>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}