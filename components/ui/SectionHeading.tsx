import React from 'react'
import { cn } from '@/lib/utils'

/**
 * SectionHeading component props
 * Configuration for section title and subtitle display
 */
interface SectionHeadingProps {
  title: string      // Main section title
  subtitle?: string  // Optional subtitle description
  className?: string // Additional CSS classes
}

/**
 * SectionHeading - Styled section header component
 * 
 * Features:
 * - Large gradient text title with responsive sizing
 * - Optional subtitle with proper spacing
 * - Gradient text effect with blue-purple-pink colors
 * - Responsive typography (5xl on mobile, 7xl on desktop)
 * - Centered layout with consistent spacing
 * - Custom line height and padding for optimal appearance
 * 
 * @component
 * @param {SectionHeadingProps} props - SectionHeading properties
 * @returns {JSX.Element} Styled section header
 */
export default function SectionHeading({ 
  title, 
  subtitle, 
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-16 text-center', className)}>
      {/* Main title with gradient text effect */}
      <h2 
        className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" 
        style={{ lineHeight: '1.2', paddingBottom: '0.2em' }}
      >
        {title}
      </h2>
      {/* Optional subtitle with muted text color */}
      {subtitle && (
        <p className="text-xl text-white/60 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

