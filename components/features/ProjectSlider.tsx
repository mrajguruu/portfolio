'use client'

import React, { useState, memo, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronLeft, ChevronRight, Play, Code, Wrench, CheckCircle, X, Info, Sparkles } from 'lucide-react'
import { projects, Project, techIcons } from '@/data/projects'
import GlassCard from '@/components/ui/GlassCard'

// Project Detail Modal Component
const ProjectModal = memo(({ project, onClose }: { project: Project; onClose: () => void }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const getStatusConfig = (status: string) => {
    const configs: Record<string, { icon: typeof Play; label: string; color: string }> = {
      'live': { icon: Play, label: 'Live', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
      'in-development': { icon: Wrench, label: 'In Development', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
      'completed': { icon: CheckCircle, label: 'Completed', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
      'default': { icon: Code, label: 'Unknown', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30' }
    }
    return configs[status] || configs['default']
  }

  const statusConfig = getStatusConfig(project.status)
  const StatusIcon = statusConfig.icon

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-gray-900/95 via-gray-900/98 to-black/95 border border-white/10 shadow-2xl modal-scrollbar"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </motion.button>

          {/* Header Section */}
          <div className="relative p-8 pb-0">
            {/* Large Letter Background */}
            <div className="absolute top-0 right-0 text-[200px] font-black opacity-5 leading-none pointer-events-none">
              {project.title.charAt(0)}
            </div>

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-white/15 rounded-full text-xs font-medium text-white">
                Featured
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">
                {project.year}
              </span>
              <span className={`px-3 py-1 rounded-full border flex items-center gap-2 text-xs font-medium ${statusConfig.color}`}>
                <StatusIcon size={12} />
                {statusConfig.label}
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium capitalize">
                {project.category}
              </span>
            </div>

            {/* Title with Favicon */}
            <div className="flex items-center gap-4 mb-4">
              {project.favicon && (
                <motion.img
                  src={project.favicon}
                  alt={`${project.title} icon`}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover shadow-lg border border-white/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                />
              )}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                {project.title}
              </h2>
            </div>

            {/* Short Description */}
            <p className="text-xl text-white/60 mb-6">
              {project.description}
            </p>
          </div>

          {/* Content Section */}
          <div className="p-8 pt-4">
            {/* Long Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white/80 mb-3 flex items-center gap-2">
                <Info size={18} className="text-white/60" />
                About This Project
              </h3>
              <p className="text-white/70 leading-relaxed text-lg whitespace-pre-line">
                {project.longDescription}
              </p>
            </div>

            {/* Technologies with Icons */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white/80 mb-3 flex items-center gap-2">
                <Code size={18} className="text-white/60" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-white/5 text-white/80 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      borderColor: project.accentColor.primary
                    }}
                  >
                    {techIcons[tech] && (
                      <img
                        src={techIcons[tech]}
                        alt={tech}
                        className="w-5 h-5 object-contain"
                      />
                    )}
                    <span>{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white/80 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-white/5 text-white/70 border border-white/10"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
              {project.liveUrl && (
                <motion.a
                  whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.15, ease: "easeOut" } }}
                  whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-6 py-3 bg-gradient-to-r from-primary-500/90 via-purple-500/90 to-primary-500/90 text-sm font-bold text-white rounded-xl shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <ExternalLink size={18} />
                    View Live Demo
                  </span>
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl text-white font-medium hover:bg-white/20 transition-colors"
                >
                  <Github size={18} />
                  View Source Code
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
})
ProjectModal.displayName = 'ProjectModal'

const ProjectSlider = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const featuredProjects = projects.filter(p => p.featured)

  // Show coming soon state if no projects
  if (featuredProjects.length === 0) {
    return (
      <div className="relative">
        <GlassCard className="overflow-hidden relative group project-card-glass">
          <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-4xl">🚧</span>
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Projects in Progress
              </h3>

              {/* Description */}
              <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                I&apos;m currently working on some exciting projects that showcase my skills and creativity.
                Check back soon to see what I&apos;ve been building!
              </p>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full">
                <Wrench className="w-4 h-4" />
                <span className="text-sm font-medium">In Development</span>
              </div>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    )
  }

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  const currentProject = featuredProjects[currentIndex]

  const getStatusConfig = (status: string) => {
    const configs: Record<string, any> = {
      'live': { icon: Play, label: 'Live', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
      'in-development': { icon: Wrench, label: 'In Development', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
      'completed': { icon: CheckCircle, label: 'Completed', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
      'default': { icon: Code, label: 'Unknown', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30' }
    }
    return configs[status] || configs['default']
  }

  const statusConfig = getStatusConfig(currentProject.status)
  const StatusIcon = statusConfig.icon

  return (
    <div className="relative">
      {/* Main Card */}
      <GlassCard className="overflow-hidden relative group project-card-glass">
        <div className="grid md:grid-cols-2 relative z-10 project-card-container project-card-grid" style={{ gap: 0 }}>
          {/* Image Section */}
          <div className="relative w-full h-full overflow-hidden project-card-image min-h-[300px] md:min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${currentIndex}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                {/* Project Image */}
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay for better badge visibility */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />
                {/* Large Letter Overlay - Hidden on Mobile */}
                <div className="absolute inset-0 hidden md:flex items-center justify-center text-9xl font-black opacity-10 text-white project-card-large-letter">
                  {currentProject.title.charAt(0)}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Status Badge - Top Left */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`status-${currentIndex}`}
                initial={{ opacity: 0, y: -10, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: 10, x: -10 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className={`absolute top-6 left-6 px-3 py-1 rounded-full border backdrop-blur-sm flex items-center gap-2 text-xs font-medium ${statusConfig.color} shadow-lg project-card-status-badge`}
              >
                <StatusIcon size={12} />
                {statusConfig.label}
              </motion.div>
            </AnimatePresence>

            {/* Links */}
            <div className="absolute bottom-6 right-6 flex gap-2">
              <AnimatePresence mode="wait">
                {currentProject.liveUrl && (
                  <motion.a
                    key={`live-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2, delay: 0.15 }}
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-lg hover:bg-white/20 transition-all duration-300 group/link project-card-link-icons"
                    whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} className="group-hover/link:text-primary-400 transition-colors" />
                  </motion.a>
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait">
                {currentProject.githubUrl && (
                  <motion.a
                    key={`github-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-lg hover:bg-white/20 transition-all duration-300 group/link project-card-link-icons"
                    whileHover={{ scale: 1.1, rotate: -5, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} className="group-hover/link:text-primary-400 transition-colors" />
                  </motion.a>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between min-h-[320px] md:min-h-[395px] lg:min-h-[450px] project-card-content overflow-hidden">
            <div className="overflow-hidden">
              {/* Title */}
              <AnimatePresence mode="wait">
                <motion.h3
                  key={`title-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent project-card-title"
                >
                  {currentProject.title}
                </motion.h3>
              </AnimatePresence>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`description-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="text-white/70 text-base lg:text-lg leading-relaxed mb-6 project-card-description line-clamp-3"
                >
                  {currentProject.description}
                </motion.p>
              </AnimatePresence>

              {/* Technologies with Icons */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`tech-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex flex-wrap gap-2 mb-4 project-card-tags-container"
                >
                  {currentProject.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm bg-white/5 text-white/80 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 project-card-tech-tag"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + index * 0.05 }}
                    >
                      {techIcons[tech] && (
                        <img
                          src={techIcons[tech]}
                          alt={tech}
                          className="w-4 h-4 object-contain"
                        />
                      )}
                      <span>{tech}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Project Tags */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`tags-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  className="flex flex-wrap gap-2 project-card-tags-container"
                >
                  {currentProject.tags.map((tag, index) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/5 text-white/70 border border-white/10 project-card-project-tag"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Info */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.span
                  className="text-white/40 text-sm font-medium project-card-bottom-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  {String(currentIndex + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}
                </motion.span>

                <motion.span
                  className="text-white/30 text-xs project-card-bottom-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentProject.technologies.length} technologies
                </motion.span>
              </div>

              {/* Know More Button - Glass Style */}
              <motion.button
                onClick={() => setSelectedProject(currentProject)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300 group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
                whileHover={{ scale: 1.02, y: -1, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.98 }}
              >
                <Info size={16} className="text-white/60 group-hover:text-white/80" />
                Know More
              </motion.button>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Navigation with Dynamic Colors */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <motion.button
          onClick={prevProject}
          className="p-4 glass rounded-full hover:bg-white/10 transition-all duration-300 group"
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={24} className="group-hover:text-white transition-colors" />
        </motion.button>

        <div className="flex gap-2 items-center">
          {featuredProjects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'w-8 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500 shadow-lg shadow-primary-500/40'
                : 'w-2 bg-white/20 hover:bg-white/40 hover:w-4'
                }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        <motion.button
          onClick={nextProject}
          className="p-4 glass rounded-full hover:bg-white/10 transition-all duration-300 group"
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={24} className="group-hover:text-white transition-colors" />
        </motion.button>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
})

ProjectSlider.displayName = 'ProjectSlider'

export default ProjectSlider