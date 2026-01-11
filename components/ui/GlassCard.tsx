import React, { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

/**
 * GlassCard component props
 * Configuration for glass morphism card styling
 */
interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'medium' | 'heavy'  // Glass effect intensity level
}

/**
 * GlassCard - Glass morphism card component with multiple variants
 * 
 * Features:
 * - Three glass effect variants (light, medium, heavy)
 * - Backdrop blur and transparency effects
 * - Consistent rounded corners and styling
 * - Flexible content container
 * - Extends native div attributes for customization
 * 
 * @component
 * @param {GlassCardProps} props - GlassCard properties
 * @returns {JSX.Element} Glass morphism card container
 */
export default function GlassCard({ 
  children, 
  className, 
  variant = 'light',
  ...props 
}: GlassCardProps) {
  // Glass morphism variants with different opacity and blur levels
  const variants = {
    light: 'glass',                                                    // Light glass effect
    medium: 'bg-white/10 backdrop-blur-lg border border-white/20',    // Medium glass effect
    heavy: 'glass-heavy',                                             // Heavy glass effect
  }

  return (
    <div 
      className={cn('rounded-2xl', variants[variant], className)} 
      {...props}
    >
      {children}
    </div>
  )
}

