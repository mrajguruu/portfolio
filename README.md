<div align="center">

# ✨ Developer Portfolio

<p align="center">
  <img src="public/logos/mr logo.png" alt="Logo" width="120" height="120" />
</p>

### A premium, modern portfolio built with cutting-edge technologies

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

[🔗 Live Demo](https://mohitrajguru.vercel.app) • [📂 Source Code](https://github.com/mrajguruu/portfolio)

</div>

---

## 🎯 Overview

A visually stunning developer portfolio featuring glassmorphism design, smooth animations, and optimized performance. Built with Next.js 15 and React 19 to showcase projects, skills, and professional journey using modern web technologies.

<div align="center">
  <img src="public/projects/portfolio.png" alt="Portfolio Preview" width="90%" style="border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.3);" />
</div>

---

## ⚡ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Glassmorphism Design** | Beautiful frosted glass effects with backdrop blur |
| 🌊 **Smooth Animations** | Framer Motion powered scroll and hover animations |
| 📱 **Fully Responsive** | Optimized for mobile, tablet, and desktop |
| 🌙 **Dark Theme** | Premium dark mode with teal-purple accent gradient |
| ⚡ **Performance First** | Fast load times, optimized images, minimal CLS |
| 🔍 **SEO Optimized** | Meta tags, Open Graph, structured data |

---

## 🏗️ Project Structure

```
portfolio/
├── app/                        # Next.js 15 App Router
│   ├── layout.tsx             # Root layout with metadata, fonts
│   ├── page.tsx               # Homepage composition
│   └── globals.css            # Global styles, Tailwind directives
│
├── components/
│   ├── animations/            # Reusable animation components
│   │   ├── FadeIn.tsx        # Scroll-triggered fade animations
│   │   └── ScrambleText.tsx  # Text scramble effect
│   │
│   ├── effects/               # Visual effect components
│   │   ├── CursorGradient.tsx      # Mouse-following gradient
│   │   ├── FloatingParticles.tsx   # Background particles
│   │   └── FloatingTechIcons.tsx   # Animated tech icons
│   │
│   ├── features/              # Complex feature components
│   │   └── ProjectSlider.tsx # Project carousel with modal
│   │
│   ├── layout/                # Layout components
│   │   ├── Navbar.tsx        # Navigation with smooth scroll
│   │   └── Footer.tsx        # Footer with social links
│   │
│   ├── sections/              # Page sections
│   │   ├── Hero.tsx          # Landing section with animations
│   │   ├── About.tsx         # Introduction and skills
│   │   ├── TechStack.tsx     # Technology showcase grid
│   │   ├── Projects.tsx      # Project slider integration
│   │   ├── Experience.tsx    # Work history timeline
│   │   ├── Education.tsx     # Academic credentials
│   │   └── Certifications.tsx # Certificate gallery
│   │
│   └── ui/                    # Base UI components
│       ├── GlassCard.tsx     # Glassmorphism card wrapper
│       └── SectionHeading.tsx # Consistent section titles
│
├── data/                      # Content configuration
│   ├── experience.ts         # Work experience, education, certs
│   ├── projects.ts           # Portfolio projects with metadata
│   └── siteConfig.ts         # Site-wide configuration
│
├── hooks/                     # Custom React hooks
│   ├── useInView.ts          # Intersection Observer wrapper
│   └── useMousePosition.ts   # Real-time mouse tracking
│
├── lib/
│   └── utils.ts              # Utility functions (cn, scrollToSection)
│
└── public/                    # Static assets
    ├── logos/                # Brand and company logos
    ├── projects/             # Project screenshots
    └── certificates/         # Certificate images
```

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="48" height="48" alt="Next.js" />
<br>Next.js 15
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="48" height="48" alt="React" />
<br>React 19
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="48" height="48" alt="TypeScript" />
<br>TypeScript 5.7
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="48" height="48" alt="Tailwind" />
<br>Tailwind CSS 3.4
</td>
<td align="center" width="96">
<img src="https://cdn.simpleicons.org/framer/0055FF" width="48" height="48" alt="Framer Motion" />
<br>Framer Motion 11
</td>
</tr>
</table>

**Core Technologies:**
- **Framework:** Next.js 15 with App Router
- **UI Library:** React 19 with TypeScript for type safety
- **Styling:** Tailwind CSS 3.4 with custom glassmorphism effects
- **Animations:** Framer Motion 11 for smooth animations
- **Icons:** Lucide React for consistent iconography
- **Deployment:** Vercel with automatic CI/CD

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/mrajguruu/portfolio.git

# Navigate to directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## 🎨 Sections

| Section | Features | Animations |
|---------|----------|------------|
| **Hero** | Scramble text, floating tech icons, gradient cursor | Staggered fade-in, icon animations |
| **About** | Personal intro, skill cards with icons | Scroll-triggered fade, hover effects |
| **Tech Stack** | Interactive 28-technology grid | Grid reveal, icon pulse on hover |
| **Projects** | Project slider, detail modals | Slide transitions, spring animations |
| **Experience** | Timeline with company logos | Timeline slide-in, logo fade |
| **Education** | Academic credentials with logos | Card animations on scroll |
| **Certifications** | Certificate gallery with images | Staggered grid reveal |

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "^15.1.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.11.17",
    "lucide-react": "^0.468.0",
    "lottie-react": "^2.4.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0"
  }
}
```

---

## 🔧 Customization

### Site Configuration (`data/siteConfig.ts`)
```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description...",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile"
  },
  links: {
    resume: "/resume.pdf"
  }
}
```

### Quick Customization Guide
- **Colors:** Edit `tailwind.config.ts`
- **Content:** Modify files in `/data` directory
- **Animations:** Adjust Framer Motion variants in components
- **SEO:** Update metadata in `app/layout.tsx`

---

## 🌐 Deployment

This portfolio is optimized for **Vercel** deployment:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mrajguruu/portfolio)

**Alternative Platforms:** Netlify, Cloudflare Pages, AWS Amplify

---

## 📝 Development Notes

### Component Architecture
- **Client Components:** Used for interactivity (Navbar, animations)
- **Memoization:** React.memo on heavy components
- **Performance:** Next.js Image optimization, lazy loading

### Browser Support
| Browser | Supported |
|---------|-----------|
| Chrome  | ✅ Last 2 versions |
| Firefox | ✅ Last 2 versions |
| Safari  | ✅ Last 2 versions |
| Edge    | ✅ Last 2 versions |

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

<div align="center">

### Built with modern web technologies

**Created by [Mohit Rajguru](https://github.com/mrajguruu)**

[![GitHub](https://img.shields.io/badge/GitHub-mrajguruu-181717?style=for-the-badge&logo=github)](https://github.com/mrajguruu)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-mohitrajguru-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/mohitrajguru)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live-00D9FF?style=for-the-badge&logo=vercel)](https://mohitrajguru.com)

⭐ Star this repo if you found it helpful!

</div>
