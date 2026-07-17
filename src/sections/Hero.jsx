import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { PrimaryButton, OutlineButton } from '../components/ui/Button'
import { PERSONAL } from '../constants/data'

const Blob = ({ className, delay = 0 }) => (
  <div
    className={`blob pointer-events-none ${className}`}
    style={{ animationDelay: `${delay}s` }}
  />
)

const Hero = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60, skewY: 3 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.2, ease: 'power4.out', delay: 0.2 }
      )
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center
        px-4 pt-20 pb-16 relative overflow-hidden"
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Blob
          className="w-[500px] h-[500px] -top-32 -left-32"
          style={{ background: '#8B5CF6', filter: 'blur(80px)', opacity: 0.15 }}
          delay={0}
        />
        <div
          className="blob absolute w-[400px] h-[400px] -bottom-20 -right-20"
          style={{ background: '#3B82F6', filter: 'blur(80px)', opacity: 0.15, animationDelay: '2s' }}
        />
        <div
          className="blob absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: '#EC4899', filter: 'blur(80px)', opacity: 0.1, animationDelay: '4s' }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full
          bg-white/5 border border-white/10 backdrop-blur-sm mb-8
          text-xs font-semibold text-purple tracking-wide"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Available for opportunities
      </motion.div>

      {/* Name */}
      <div ref={titleRef} className="overflow-hidden mb-4">
        <h1 className="font-sora text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none">
          <span className="text-white">Tahreem </span>
          <span className="gradient-text">Fatima</span>
        </h1>
      </div>

      {/* Subtitle */}
      <div ref={subtitleRef}>
        <p className="text-slate-300 text-lg sm:text-xl md:text-2xl mb-4 font-light">
          Software Engineer · Full-Stack Developer · UI/UX Designer
        </p>
        <p className="text-slate-400 max-w-xl mx-auto mb-3 text-sm sm:text-base leading-relaxed">
          {PERSONAL.tagline}
        </p>
        <p className="text-slate-500 max-w-2xl mx-auto mb-10 text-sm sm:text-base leading-relaxed">
          To explore my UI/UX work, head to the Design section below.
        </p>
      </div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex items-center gap-4 flex-wrap justify-center mb-14"
      >
        <PrimaryButton href="#projects">View Projects →</PrimaryButton>
        <OutlineButton href="#contact">Get In Touch</OutlineButton>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="flex gap-8 sm:gap-14 justify-center flex-wrap"
      >
        {PERSONAL.stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="font-sora text-3xl font-bold bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent">
              {s.num}
            </div>
            <div className="text-slate-400 text-xs uppercase tracking-widest mt-0.5">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-slate-500"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4 }}
        className="fixed left-6 bottom-1/3 hidden lg:flex lg:flex-col items-center gap-4"
      >
        <div className="w-px h-16 bg-gradient-to-t from-purple to-transparent" />
        <a href={`mailto:${PERSONAL.email}`}
          className="text-slate-500 hover:text-purple transition-colors p-1">
          <Mail size={16} />
        </a>
        <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
          className="text-slate-500 hover:text-purple transition-colors p-1">
          <Github size={16} />
        </a>
        <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer"
          className="text-slate-500 hover:text-blue transition-colors p-1">
          <Linkedin size={16} />
        </a>
        <div className="w-px h-16 bg-gradient-to-b from-purple to-transparent" />
      </motion.div>
    </section>
  )
}

export default Hero
