/**
 * Project Interface
 * 
 * Defines the structure for project data used throughout the portfolio.
 * Each project contains comprehensive information for display in the projects section.
 */
export interface Project {
  id: string                    // Unique identifier for the project
  title: string                 // Project name/title
  description: string           // Short description for cards and previews
  longDescription: string       // Detailed description for project modals
  image: string                 // Path to project image/thumbnail
  favicon?: string              // Path to project favicon for modal display
  tags: string[]               // Categorization tags for filtering
  category: 'web' | 'mobile' | 'fullstack' | 'design'  // Project type classification
  featured: boolean            // Whether to highlight as featured project
  liveUrl?: string             // URL to live project (optional)
  githubUrl?: string           // URL to GitHub repository (optional)
  technologies: string[]       // Technologies and tools used
  year: string                 // Project completion year
  status: 'live' | 'in-development' | 'completed'  // Current project status
  accentColor: {               // Dynamic accent colors for the project
    primary: string            // Main accent color (hex)
    secondary: string          // Secondary accent color (hex)
    gradient: string           // CSS gradient string
  }
}

/**
 * Technology Icons Mapping
 * Uses devicon CDN for official tech logos
 */
export const techIcons: Record<string, string> = {
  // Languages
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  'Go': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
  'Rust': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
  'Swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
  'Kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',

  // Frontend
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Svelte': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Sass': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',

  // Backend & Frameworks
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
  'Spring': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',

  // Databases
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',

  // DevOps & Cloud
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  'GCP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
  'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  'Nginx': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
  'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',

  // Tools & Libraries
  'Chart.js': 'https://www.chartjs.org/img/chartjs-logo.svg',
  'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  'Webpack': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
  'Vite': 'https://vitejs.dev/logo.svg',
  'Jest': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'Expo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
}

/**
 * Projects Data Array
 * 
 * Contains all portfolio projects with detailed information for display.
 * Each project includes metadata, descriptions, links, and technology stack.
 */
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'TaskFlow',
    description: 'Cloud-native task management platform with drag-and-drop Kanban board, role-based access control, and real-time updates.',
    longDescription: 'TaskFlow is a production-ready task management platform showcasing full-stack development expertise through modern cloud technologies. Built from scratch without frameworks to demonstrate fundamental web development mastery.\n\nThe application features a comprehensive project and task lifecycle management system with team collaboration tools, real-time AJAX updates, and mobile-first responsive design. Implements production-grade security with bcrypt authentication, CSRF protection, SQL injection prevention (100% prepared statement coverage), and role-based access control.\n\nDeployed using Docker containerization on Render.com with TiDB Cloud distributed database, demonstrating cloud-native architecture and DevOps practices. The system includes automated maintenance via external cron services and environment-based configuration for seamless development-to-production deployment.\n\nLive demo includes 8 pre-configured users, 7 projects across various stages, and 119 realistic tasks demonstrating real-world team collaboration workflows.',
    image: '/projects/taskflow image.png',
    favicon: '/projects/taskflow favicon.png',
    tags: ['Full-Stack', 'Cloud-Native', 'TiDB Cloud', 'Render.com'],
    category: 'fullstack',
    featured: true,
    liveUrl: 'https://taskflow-wbld.onrender.com',
    githubUrl: 'https://github.com/mrajguruu/TaskFlow',
    technologies: ['PHP', 'JavaScript', 'Docker', 'MySQL'],
    year: '2025',
    status: 'live',
    accentColor: {
      primary: '#6366f1',      // Indigo (matches website theme)
      secondary: '#4f46e5',    // Darker indigo
      gradient: '#6366f1'      // Solid color, no gradient
    }
  },
  {
    id: 'project-2',
    title: 'Portfolio',
    description: 'Modern developer portfolio built with Next.js 15 and React 19, featuring glassmorphism design, smooth animations, and optimized performance.',
    longDescription: 'A premium developer portfolio website showcasing modern web development practices and cutting-edge frontend technologies. Built with Next.js 15 App Router and React 19, this portfolio demonstrates expertise in building performant, visually stunning web applications.\n\nThe design features a dark theme with glassmorphism effects, smooth Framer Motion animations throughout, and a fully responsive layout optimized for all devices. Key sections include an animated hero with floating tech icons, interactive periodic table-style tech stack display, project showcase with modal details, professional timeline, and education credentials.\n\nImplements performance best practices including component memoization, lazy loading, optimized images with Next.js Image component, and efficient animation handling. The codebase follows clean architecture principles with TypeScript for type safety, modular component structure, and reusable UI patterns.\n\nBuilt with attention to detail including SEO optimization, accessibility considerations, and smooth scroll navigation. The project represents a comprehensive demonstration of modern frontend development capabilities.',
    image: '/projects/portfolio.png',
    favicon: '/projects/portfolio favicon.png',
    tags: ['Next.js 15', 'React 19', 'Framer Motion', 'Vercel'],
    category: 'web',
    featured: true,
    liveUrl: 'https://mohitrajguru.com',
    githubUrl: 'https://github.com/mrajguruu/portfolio',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    year: '2025',
    status: 'live',
    accentColor: {
      primary: '#14b8a6',
      secondary: '#9333ea',
      gradient: 'linear-gradient(135deg, #14b8a6, #9333ea)'
    }
  },
  {
    id: 'project-3',
    title: 'PostForge',
    description: 'Modern blog CMS with dual-interface system, complete CRUD operations, comment moderation, and real-time analytics with security-first approach.',
    longDescription: 'PostForge is a full-featured blog management system demonstrating production-ready development practices and enterprise-grade security. Built with PHP and MySQL following MVC-inspired architecture, the application handles complete content lifecycle from creation through publication with built-in moderation workflows.\n\nThe platform features dual interfaces: a responsive public-facing blog with 3-column grid layout and category filtering, plus a comprehensive admin panel with real-time Chart.js analytics, trending posts widget, and activity timeline.\n\nImplements robust security including bcrypt password hashing, CSRF token validation, SQL injection prevention, XSS protection, and brute-force mitigation with 5-attempt rate limiting and 15-minute lockout.\n\nUnique session-isolated demo mode enables unrestricted visitor testing while protecting showcase content through database flags and automated 24-hour cleanup, demonstrating production-thinking approach to live demonstrations. Currently serving live users with 3,500+ lines of production code.',
    image: '/projects/postforge image.png',
    favicon: '/projects/postforge favicon.png',
    tags: ['CMS', 'Security', 'Full Stack'],
    category: 'fullstack',
    featured: true,
    liveUrl: 'https://postforge.infinityfree.me',
    githubUrl: 'https://github.com/mrajguruu/PostForge',
    technologies: ['PHP', 'MySQL', 'Chart.js', 'Bootstrap', 'JavaScript'],
    year: '2025',
    status: 'live',
    accentColor: {
      primary: '#6366f1',      // Indigo (matches website theme)
      secondary: '#4f46e5',    // Darker indigo
      gradient: '#6366f1'      // Solid color, no gradient
    }
  }
]

export const projectCategories = [
  { value: 'all', label: 'All Projects' },
  { value: 'fullstack', label: 'Full-Stack' },
  { value: 'web', label: 'Web Apps' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'design', label: 'Design' },
]
