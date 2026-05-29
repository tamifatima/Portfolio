import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../constants/data'
import { useScrollProgress } from '../../hooks/useScrollProgress'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')
  const progress = useScrollProgress()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) setActive(s.id)
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 h-0.5 z-[9999] bg-gradient-to-r from-purple via-blue to-pink transition-all duration-100"
        style={{ width: `${progress}%` }}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[1000] px-6 py-4 flex items-center justify-between
          transition-all duration-300
          ${scrolled ? 'bg-[#0F172A]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent'}
        `}
      >
        <motion.a
          href="#home"
          onClick={() => handleNav('#home')}
          className="font-sora text-xl font-bold bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          TF.
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                className={`text-xs font-medium tracking-wide transition-all duration-200 relative group
                  ${active === link.href.slice(1) ? 'text-white' : 'text-slate-400 hover:text-white'}
                `}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-gradient-to-r from-purple to-blue
                  transition-all duration-300
                  ${active === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'}
                `} />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:tahreemf274@gmail.com"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full
            text-xs font-semibold text-white
            border border-purple/40 bg-purple/10
            hover:bg-purple/20 hover:border-purple/60
            hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]
            transition-all duration-300"
        >
          Hire Me ✨
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-[999] mx-4 rounded-2xl
              bg-[#111827]/95 backdrop-blur-xl border border-white/10 p-6"
          >
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
