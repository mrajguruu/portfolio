'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { siteConfig } from '@/data/siteConfig'
import { ArrowUp, Github, Linkedin, MapPin, Clock } from 'lucide-react'

/**
 * Footer navigation links
 * Quick access to main sections of the portfolio
 */
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
]

/**
 * Footer - Site footer with navigation, contact info, and back-to-top functionality
 * 
 * Features:
 * - Animated Lottie coding animation
 * - Back-to-top button with scroll detection
 * - Real-time local time display
 * - Social media links
 * - Responsive design with glass morphism effects
 * - Performance optimized with error handling
 * 
 * @component
 * @returns {JSX.Element} Footer section with navigation and contact information
 */
export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [localTime, setLocalTime] = useState('')
  const [animationData, setAnimationData] = useState<any>(null)
  const [animationError, setAnimationError] = useState(false)

  // Back-to-top button visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Real-time clock display with timezone support
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setLocalTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata' // Update to your timezone
      }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  // Load and handle Lottie animation with error handling
  useEffect(() => {
    // Load Lottie animation data
    const loadAnimation = async () => {
      try {
        const response = await fetch('/coding.json')

        if (response.ok) {
          const data = await response.json()
          setAnimationData(data)
          setAnimationError(false)
        } else {
          setAnimationError(true)
        }
      } catch (error) {
        setAnimationError(true)
      }
    }

    loadAnimation()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const section = href.replace('#', '')
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-gray-950 to-black">
      <div className="container-custom py-8 lg:py-10">
        {/* Desktop/Tablet Layout */}
        <div className="hidden md:flex justify-between items-center mb-8">
          {/* Lottie Animation - Left Side */}
          <div className="w-80 h-80 -ml-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full h-full"
            >
              {animationData ? (
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  style={{ width: '100%', height: '100%' }}
                  rendererSettings={{
                    preserveAspectRatio: 'xMidYMid slice'
                  }}
                />
              ) : animationError ? (
                <div className="w-full h-full bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-white/60 text-sm">Animation failed to load</div>
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-white/60 text-sm animate-pulse">Loading animation...</div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Center Content - Personal Introduction */}
          <div className="flex flex-col items-center justify-center text-center px-8 flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  I&apos;m Mohit,
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  A Full-Stack Developer
                </span>
              </h3>
              <p className="text-lg max-w-md bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                &quot;Building digital experiences that matter, one line of code at a time.&quot;
              </p>
              <p className="text-sm bg-gradient-to-r from-gray-300 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Thanks for visiting my site!
              </p>
            </motion.div>
          </div>

          {/* Quick Links - Two Columns on the Right */}
          <div className="flex flex-col gap-6 w-auto">
            {/* Quick Links Heading */}
            <h4 className="text-xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Quick Links</h4>

            {/* Two Columns */}
            <div className="flex gap-12">
              {/* Left Column */}
              <div className="flex flex-col gap-2">
                {navLinks.slice(0, 3).map((link, index) => (
                  <div key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/60 hover:text-white transition-colors text-lg group w-full text-left relative"
                    >
                      <span className="flex items-center gap-2">
                        {link.name}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                    </button>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-2">
                {navLinks.slice(3, 6).map((link, index) => (
                  <div key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/60 hover:text-white transition-colors text-lg group w-full text-left relative"
                    >
                      <span className="flex items-center gap-2">
                        {link.name}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {/* Personal Introduction - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                I&apos;m Mohit,
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                A Full-Stack Developer
              </span>
            </h3>
            <p className="text-base bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              &quot;Building digital experiences that matter, one line of code at a time.&quot;
            </p>
            <p className="text-sm bg-gradient-to-r from-gray-300 via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Thanks for visiting my site!
            </p>
          </motion.div>

          {/* Connect Links - Mobile Only */}
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Connect</h4>
            <div className="flex justify-center gap-4">
              <motion.a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110 min-w-[48px] min-h-[48px] flex items-center justify-center"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110 min-w-[48px] min-h-[48px] flex items-center justify-center"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links - Mobile */}
          <div className="text-center">
            <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Quick Links</h4>

            {/* Two Columns for Mobile */}
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              {/* Left Column */}
              <div className="flex flex-col gap-3">
                {navLinks.slice(0, 3).map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-white transition-colors text-base group py-2 px-3 rounded-lg hover:bg-white/5 min-h-[44px] flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center gap-2">
                      {link.name}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-3">
                {navLinks.slice(3, 6).map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-white transition-colors text-base group py-2 px-3 rounded-lg hover:bg-white/5 min-h-[44px] flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center gap-2">
                      {link.name}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info - Responsive layout */}
        <div className="flex justify-center mb-6">
          {/* Desktop Layout - Left and Right */}
          <div className="hidden md:flex items-center justify-between w-full text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary-400" />
              <span className="text-white/60">{siteConfig.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary-400" />
              <div className="text-white/60">
                <span className="block text-xs">Local Time</span>
                <span className="text-white font-mono text-sm">{localTime}</span>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Side by side */}
          <div className="md:hidden flex items-center justify-center gap-6 text-sm mt-4">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary-400" />
              <span className="text-white/60">{siteConfig.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary-400" />
              <div className="text-white/60">
                <span className="block text-xs">Local Time</span>
                <span className="text-white font-mono text-sm">{localTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-white/40 text-xs flex items-center gap-1">
              Designed & Built with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-red-500"
              >
                ♥
              </motion.span>
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-br from-primary-500 to-purple-500 text-white rounded-2xl shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 z-40 group"
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </footer>
  )
}