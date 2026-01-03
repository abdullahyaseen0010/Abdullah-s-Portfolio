'use client'

import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import SkillsSection from '../components/Marquee/SkillsSection'
import Projects from '../components/Project/Projects'
import Services from '../components/Services/Services'
import Contact from '../components/Contact/Contact'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import { useSmoothScroll } from '../lib/hooks/Navbar/useSmoothScroll'

export default function Home() {
  // Enable smooth scrolling
  useSmoothScroll()

  return (
    <main>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <SkillsSection />
      <section id="projects">
        <Projects />
      </section>
      <section id="services">
        <Services />
      </section>
      <Testimonials />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}