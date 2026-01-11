/**
 * Site Configuration
 * 
 * Centralized configuration object containing all site-wide settings,
 * personal information, social media links, and contact details.
 * 
 * This file serves as the single source of truth for:
 * - Personal branding and identity
 * - Social media profile links
 * - Contact information and availability
 * - File paths for downloadable assets
 */
export const siteConfig = {
  // Personal branding and professional identity
  name: 'MOHIT RAJGURU',
  title: 'Full-Stack Developer',
  description: 'Passionate about building exceptional digital experiences with modern technologies.',
  email: 'mohitrajguru@example.com',
  location: 'Umbergaon, India',
  availableForWork: true,

  // Social media profile links
  // Update these URLs with your actual social media profiles
  socials: {
    github: 'https://github.com/mrajguruu',
    linkedin: 'https://www.linkedin.com/in/mohitrajguru',
  },

  // Important file links and downloads
  // Ensure these files exist in the public directory
  links: {
    resume: '/resume.pdf', // Path to resume PDF in public folder
  },
}

