import Hero from '@/components/sections/Hero'
import TechStack from '@/components/sections/TechStack'
import Projects from '@/components/sections/Projects'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Certifications from '@/components/sections/Certifications'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <main className="relative">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </>
  )
}

