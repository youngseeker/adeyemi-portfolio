import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import MindshiftLibrary from '@/components/MindshiftLibrary'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <MindshiftLibrary />
      <Blog />
      <Footer />
    </div>
  )
}
