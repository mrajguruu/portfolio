/**
 * Professional Experience Data Structure
 * 
 * Defines the structure for work experience and career history
 * used in the experience section of the portfolio.
 */

/**
 * Experience interface
 * Contains comprehensive information about professional work experience
 */
export interface Experience {
  id: string                    // Unique identifier for the experience
  title: string                 // Job title/position
  company: string               // Company name
  location: string              // Work location (city, remote, etc.)
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Learning Program'  // Employment type
  startDate: string             // Start date in YYYY-MM format
  endDate: string | 'Present'   // End date or 'Present' for current role
  description: string           // Brief job description
  achievements: string[]        // Key accomplishments and achievements
  technologies: string[]        // Technologies and tools used
  credentialUrl?: string        // URL to program details or certificate
  logo?: string                 // Company/program logo image path
}

/**
 * Professional Experience Data
 * 
 * Chronological list of work experience and career history.
 * Each entry includes detailed information about roles, achievements, and technologies used.
 * 
 * Note: Update credentialUrl with actual certificate URLs when available
 */
export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Java Full-Stack Development Trainee',
    company: 'QSpider Institute',
    location: 'Online',
    type: 'Learning Program',
    startDate: '2025-06',
    endDate: '2025-12',
    description: 'Completed enterprise-level Java full-stack development program covering Core Java, Spring ecosystem, Hibernate ORM, Angular frontend development, and complete web application architecture with database integration and REST API development.',
    achievements: [
      'Mastered Core Java including object-oriented programming, collections framework, and multithreading',
      'Built enterprise applications using Spring Boot, Spring MVC, and Spring Security',
      'Implemented persistent data storage with Hibernate ORM and MySQL database',
      'Developed RESTful APIs with proper error handling, validation, and documentation',
      'Created responsive frontend interfaces using Angular framework',
      'Implemented secure authentication and authorization using JWT and Spring Security',
      'Delivered end-to-end full-stack applications integrating Java backend with Angular frontend',
    ],
    technologies: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate', 'MySQL', 'JDBC', 'Maven', 'REST APIs', 'JWT', 'Angular', 'HTML', 'CSS', 'JavaScript', 'Servlets', 'JSP', 'Git'],
    logo: '/experience/qspider.png',
  },
]

export interface Education {
  id?: string
  degree: string
  institution: string
  location: string
  startYear: string
  endYear: string
  gpa?: string
  achievements?: string[]
}

export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'St. John College of Humanities and Sciences',
    location: 'Palghar, India',
    startYear: '2022',
    endYear: '2025',
    gpa: '3.8/4.0',
    achievements: [
      'Dean\'s List all semesters',
      'President of Computer Science Club',
      'Winner of Annual Hackathon 2019',
      'Published research paper on Machine Learning',
    ],
  },
  {
    degree: 'Science Stream',
    institution: 'Kishinchand Chellaram College',
    location: 'Mumbai, India',
    startYear: '2020',
    endYear: '2022',
    gpa: '3.9/4.0',
    achievements: [
      'Graduate Research Assistant',
      'Thesis on Distributed Systems',
      'Teaching Assistant for Data Structures',
      'Recipient of Merit Scholarship',
    ],
  },
]

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  credentialUrl?: string
  image?: string
}

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'Outskill Certificate',
    issuer: 'Outskill',
    date: '2025',
    credentialUrl: 'https://outskill.com/',
    image: '/certificates/outskill certificate.png',
  },
  {
    id: '2',
    name: 'Aspire Certificate',
    issuer: 'Aspire Institute',
    date: '2025',
    credentialUrl: 'https://aspireinstitute.org/',
    image: '/certificates/alp certificate.png',
  },
  {
    id: '3',
    name: 'Enjay Certificate',
    issuer: 'Enjay',
    date: '2025',
    credentialUrl: 'https://enjay.com/',
    image: '/certificates/enjay certificate.jpg',
  },
]