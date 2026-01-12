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
    title: 'MERN Stack & AI Development Student',
    company: 'Sheryians Coding School',
    location: 'Online',
    type: 'Learning Program',
    startDate: '2025-09',
    endDate: '2025-12',
    description: 'Comprehensive full-stack development program focusing on MERN stack (MongoDB, Express.js, React.js, Node.js), Generative AI integration, data structures and algorithms, DevOps fundamentals, and progressive web applications with real-world project implementations.',
    achievements: [
      'Building full-stack applications using MERN stack with hands-on projects',
      'Integrating Generative AI and LangChain for AI-powered applications',
      'Developing animated websites and e-commerce platforms',
      'Implementing data structures and algorithms with problem-solving techniques',
      'Creating progressive web applications with service workers and Redux state management',
      'Learning DevOps fundamentals including Docker and CI/CD pipelines',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JavaScript', 'HTML5', 'CSS3', 'SASS', 'GSAP', 'Socket.io', 'Redis', 'JWT', 'Docker', 'Git', 'LangChain', 'Redux'],
    logo: '/experience/sheryians.jpg',
  },
  {
    id: '2',
    title: 'Java Full-Stack Developer Student',
    company: 'QSpider Institute',
    location: 'Online',
    type: 'Learning Program',
    startDate: '2025-07',
    endDate: '2025-12',
    description: 'Enterprise-level Java full-stack development program covering Core Java, Spring ecosystem, Hibernate ORM, Angular frontend development, and complete web application architecture with database integration and REST API development.',
    achievements: [
      'Mastering Core Java with object-oriented programming, collections framework, and multithreading',
      'Building enterprise applications using Spring Boot, Spring MVC, and Spring Security',
      'Implementing persistent data storage with Hibernate ORM and MySQL',
      'Developing RESTful APIs with proper error handling and validation',
      'Building responsive frontends using Angular framework',
      'Implementing authentication and authorization with JWT and Spring Security',
      'Developing end-to-end full-stack applications integrating Java backend with web frontends',
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