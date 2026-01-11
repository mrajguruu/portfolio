'use client'

import React, { memo } from 'react'
import { motion } from 'framer-motion'

interface TechIcon {
  name: string
  icon: string
  x: number
  y: number
  delay: number
  duration: number
}

// Using devicon CDN for consistent, high-quality icons
const techIcons: TechIcon[] = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', x: 8, y: 20, delay: 0, duration: 20 },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', x: 90, y: 15, delay: 2, duration: 18 },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', x: 5, y: 55, delay: 1, duration: 22 },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', x: 92, y: 45, delay: 3, duration: 17 },
  { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', x: 10, y: 80, delay: 1.5, duration: 21 },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', x: 88, y: 75, delay: 2.5, duration: 20 },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', x: 3, y: 35, delay: 0.8, duration: 19 },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', x: 95, y: 60, delay: 1.8, duration: 23 },
]

const FloatingTechIcons = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {techIcons.map((tech, index) => {
        return (
          <motion.div
            key={tech.name}
            className="absolute"
            style={{
              left: `${tech.x}%`,
              top: `${tech.y}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.2, 0.4, 0.2, 0],
              scale: [0.8, 1, 1.1, 1, 0.8],
              y: [0, -15, -30, -45, -60],
              x: [0, Math.sin(index) * 8, Math.cos(index) * 8, Math.sin(index) * -8, 0],
              rotate: [0, 3, -3, 2, 0],
            }}
            transition={{
              duration: tech.duration * 0.6,
              delay: tech.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div className="drop-shadow-2xl opacity-60 md:opacity-80">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14"
              />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
})

FloatingTechIcons.displayName = 'FloatingTechIcons'

export default FloatingTechIcons