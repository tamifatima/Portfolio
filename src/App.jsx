import { useEffect } from 'react'
import { useLenis } from './hooks/useLenis'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Certifications from './sections/Certifications'
import Showcase from './sections/Showcase'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

function App() {
  useLenis()

  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.style.cssText = `
      position: fixed; width: 400px; height: 400px; border-radius: 50%;
      background: radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%);
      pointer-events: none; z-index: 0; transform: translate(-50%, -50%);
      transition: opacity 0.3s; opacity: 0;
    `
    document.body.appendChild(cursor)

    const move = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
      cursor.style.opacity = '1'
    }
    const leave = () => { cursor.style.opacity = '0' }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
      cursor.remove()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse at 10% 20%, rgba(139,92,246,0.07) 0%, transparent 50%),
              radial-gradient(ellipse at 90% 80%, rgba(59,130,246,0.07) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(236,72,153,0.03) 0%, transparent 60%)
            `
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Showcase />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
