'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import FadeIn from '@/components/animations/FadeIn'
import { certifications } from '@/data/experience'
import { CheckCircle, Award } from 'lucide-react'

/**
 * Certifications - Professional credentials showcase section
 * 
 * Features:
 * - Grid layout for certification cards
 * - Glass morphism card design
 * - Hover animations and interactions
 * - External link functionality
 * - Scroll-triggered animations
 * - Responsive design with proper spacing
 * 
 * @component
 * @returns {JSX.Element} Certifications section with credential cards
 */
export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      {/* Background grid pattern for visual texture */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container-custom relative z-10">
        {/* Animated section header */}
        <FadeIn>
          <SectionHeading
            title="Certifications"
            subtitle="Professional credentials and achievements"
          />
        </FadeIn>

        {/* Certification cards grid layout */}
        <div className="max-w-[99.5vw] mx-auto mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full"
                >
                  <div className="h-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                    {/* Top Section - Certificate Image */}
                    <div className="relative h-64 bg-gray-800 overflow-hidden">
                      {cert.image ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={cert.image}
                            alt={cert.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{
                              objectPosition: cert.name === 'Aspire Certificate' ? 'center top' : 'center center',
                              width: '100%',
                              height: '100%'
                            }}
                          />
                          {/* Subtle overlay for better text visibility */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 flex items-center justify-center">
                          <Award className="w-16 h-16 text-white/50" />
                        </div>
                      )}
                    </div>

                    {/* Bottom Section - Content Details */}
                    <div className="p-6 bg-gray-900">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {cert.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {cert.name === 'Outskill Certificate'
                          ? 'A live 16-hour intensive workshop on generative AI tools, prompt engineering, custom GPTs and no-code automation.'
                          : cert.name === 'Aspire Certificate'
                            ? 'A fully-funded online leadership development program for first-generation students and recent grads, co-designed with faculty from Harvard University.'
                            : cert.name === 'Enjay Certificate'
                              ? 'This course introduces the fundamentals of Sangam CRM, focusing on helping first-time users navigate the platform&apos;s interface. It includes walkthroughs of both the web and mobile versions to familiarize users with essential features and tools.'
                              : `${cert.issuer} professional certification demonstrating expertise and competency in relevant technologies and best practices.`
                        }
                      </p>


                      {/* Bottom Info */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <div className="flex items-center gap-1.5">
                            <CheckCircle className="w-3 h-3" />
                            <span>{cert.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Award className="w-3 h-3 text-primary-400" />
                            <span>Verified</span>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">
                          Issued by: {cert.issuer}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}