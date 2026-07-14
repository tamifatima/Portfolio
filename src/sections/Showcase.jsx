import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, Maximize2 } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'

const PROJECTS = [
  {
    id: 'outs',
    title: 'OUTS — Social Ticketing & Event Platform',
    subtitle: 'Mobile App · SOFTEC UI/UX Competition Entry',
    desc: 'A dual-sided event platform connecting hosts and socially active audiences. OUTS bridges the gap between high-energy nightlife and seamless digital logistics — covering event discovery, ticket booking, real-time analytics, QR access, and multi-role dashboards for Consumers, Hosts, and Admins.',
    badge: 'Figma · Mobile App',
    accent: 'purple',
    tags: ['Mobile UI', 'Event Platform', 'Multi-role', 'Figma'],
    figmaUrl: 'https://www.figma.com/design/kQVhM5ZHtkPA4b1szjRO1d/Outs-APP?node-id=165-2',
    image: '/outs-poster.png',
    features: ['Event Discovery', 'Ticket Booking', 'Real-time Analytics', 'QR Access', 'Multi-mode Access', 'Event Creation'],
  },
  {
    id: 'creativecrew',
    title: 'CreativeCrew — SOFTEC UI/UX Competition',
    subtitle: 'Competition Submission · FAST NUCES',
    desc: 'A Figma design submitted for the SOFTEC UI/UX Design Competition at FAST NUCES — showcasing advanced prototyping, user flow design, and polished visual interface craft.',
    badge: 'Figma · Competition',
    accent: 'pink',
    tags: ['UI/UX Design', 'Prototyping', 'Competition', 'Figma'],
    figmaUrl: 'https://www.figma.com/design/TxXX4itRuSCiIM8F6GlaNQ/CreativeCrew?node-id=0-1',
    image: null,
    features: ['User Research', 'Wireframing', 'Hi-Fi Prototype', 'Design System'],
  },
  {
    id: 'educare',
    title: 'Educare — Mobile Learning App',
    subtitle: 'Mobile App Design · Figma Make',
    desc: 'A mobile education app design featuring class scheduling, attendance marking, and student-teacher interaction flows. Built with clean, intuitive UX patterns for academic environments.',
    badge: 'Figma Make · Mobile',
    accent: 'cyan',
    tags: ['EdTech', 'Mobile UI', 'Figma Make', 'UX'],
    figmaUrl: 'https://www.figma.com/make/IRPQ74QNtNLIrAU9gx4Ky2/Mobile-App?t=6YwtVKHdLc8nygV9-1',
    image: null,
    features: ['Class Scheduling', 'Attendance Tracking', 'Student Dashboard', 'Teacher Tools'],
  },
  {
    id: 'pucit-quiz',
    title: 'PUCIT Online Quiz Assessment Portal',
    subtitle: 'Web App Design · Assessment Experience',
    desc: 'A polished UI concept for an online quiz and assessment portal focused on smooth question flow, progress tracking, and student-friendly evaluation experiences.',
    badge: 'Figma · Web App',
    accent: 'purple',
    tags: ['EdTech', 'Assessment UI', 'Figma', 'Web Design'],
    figmaUrl: 'https://www.figma.com/design/Ua3WzSGcvKcP2UsVpmLEpb/Untitled?node-id=0-1&t=jPPeVG5XVqoKcj2o-1',
    image: null,
    features: ['Quiz Flow', 'Progress Tracker', 'Assessment UX', 'Clean Interface'],
  },
  {
    id: 'nexus-gaming',
    title: 'Nexus — Gaming Platform UI',
    subtitle: 'Gaming App Design · Onboarding & Avatar Flow',
    desc: 'A modern gaming platform experience featuring onboarding screens, avatar creation, and game selection interactions designed to feel immersive and player-first.',
    badge: 'Figma · Gaming UI',
    accent: 'pink',
    tags: ['Gaming UI', 'Onboarding', 'Avatar Design', 'Figma'],
    figmaUrl: 'https://www.figma.com/design/EfIqGyDpaIeMlT262q56aZ/Nexus?node-id=0-1&t=1iLFj3OZIXHdXHjw-1',
    image: null,
    features: ['Onboarding Screens', 'Avatar Creation', 'Game Selection', 'Immersive UX'],
  },
  {
    id: 'ai-quiz-mobile',
    title: 'AI Quiz Portal — Mobile App',
    subtitle: 'Mobile App Design · Smart Learning Experience',
    desc: 'A mobile-first concept for an AI-powered quiz portal with interactive learning flow, personalized assessments, and a clean, intuitive experience for users.',
    badge: 'Figma · Mobile App',
    accent: 'cyan',
    tags: ['AI App', 'Mobile UI', 'Quiz UX', 'Figma'],
    figmaUrl: 'https://www.figma.com/design/sVEKYm46IRlE0cAr4XT83T/Untitled?node-id=0-1&t=N61XkdS7wXlBTDnD-1',
    image: null,
    features: ['AI Quiz Flow', 'Mobile UX', 'Personalized Learning', 'Interactive UI'],
  },
]

const accentMap = {
  purple: {
    border: 'hover:border-purple/50',
    shadow: 'hover:shadow-[0_20px_60px_rgba(139,92,246,0.18)]',
    badge: 'bg-purple/10 border-purple/30 text-purple',
    tag: 'bg-purple/10 border-purple/20 text-purple',
    glow: 'from-purple/20 to-blue/20',
    btn: 'bg-gradient-to-r from-purple to-blue shadow-[0_4px_20px_rgba(139,92,246,0.4)]',
    featureDot: 'bg-purple',
    mockupBg: 'from-purple/30 via-blue/20 to-purple/10',
  },
  pink: {
    border: 'hover:border-pink/50',
    shadow: 'hover:shadow-[0_20px_60px_rgba(236,72,153,0.18)]',
    badge: 'bg-pink/10 border-pink/30 text-pink',
    tag: 'bg-pink/10 border-pink/20 text-pink',
    glow: 'from-pink/20 to-purple/20',
    btn: 'bg-gradient-to-r from-pink to-purple shadow-[0_4px_20px_rgba(236,72,153,0.4)]',
    featureDot: 'bg-pink',
    mockupBg: 'from-pink/30 via-purple/20 to-pink/10',
  },
  cyan: {
    border: 'hover:border-cyan/50',
    shadow: 'hover:shadow-[0_20px_60px_rgba(6,182,212,0.18)]',
    badge: 'bg-cyan/10 border-cyan/30 text-cyan',
    tag: 'bg-cyan/10 border-cyan/20 text-cyan',
    glow: 'from-cyan/20 to-blue/20',
    btn: 'bg-gradient-to-r from-cyan to-blue shadow-[0_4px_20px_rgba(6,182,212,0.4)]',
    featureDot: 'bg-cyan',
    mockupBg: 'from-cyan/30 via-blue/20 to-cyan/10',
  },
}

// Animated placeholder mockup for projects without a real image
const MockupPlaceholder = ({ accent, features }) => {
  const c = accentMap[accent]
  return (
    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${c.mockupBg} relative overflow-hidden`}>
      {/* Abstract UI lines */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)`
        }}
      />
      {/* Floating phone mockup */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="w-32 h-56 rounded-3xl border-2 border-white/20 bg-[#0F172A]/80 backdrop-blur-sm relative overflow-hidden shadow-2xl"
      >
        {/* Screen header */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-white/10 rounded-b-xl" />
        <div className="pt-5 px-3 flex flex-col gap-2">
          {/* Nav bar */}
          <div className="flex justify-between items-center mb-1">
            <div className={`w-8 h-1.5 rounded-full bg-gradient-to-r ${c.glow} opacity-80`} />
            <div className="w-4 h-4 rounded-full bg-white/10" />
          </div>
          {/* Hero block */}
          <div className={`h-14 rounded-xl bg-gradient-to-br ${c.glow} border border-white/10`} />
          {/* Content rows */}
          {[80, 60, 90, 70].map((w, i) => (
            <div key={i} className={`h-1.5 rounded-full`}
              style={{ width: `${w}%`, background: `rgba(255,255,255,${0.06 + i * 0.02})` }} />
          ))}
          {/* Cards row */}
          <div className="flex gap-1.5 mt-1">
            {[1, 2].map(i => (
              <div key={i} className={`flex-1 h-8 rounded-lg bg-gradient-to-br ${c.glow} border border-white/10`} />
            ))}
          </div>
          {/* Bottom row */}
          {[50, 75].map((w, i) => (
            <div key={i} className="h-1.5 rounded-full bg-white/5" style={{ width: `${w}%` }} />
          ))}
        </div>
        {/* Bottom nav */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white/5 border-t border-white/10 flex items-center justify-around px-3">
          {['▤', '◎', '♡'].map((icon, i) => (
            <span key={i} className="text-white/30 text-xs">{icon}</span>
          ))}
        </div>
      </motion.div>

      {/* Floating feature chips */}
      {features.slice(0, 2).map((f, i) => (
        <motion.div
          key={f}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 1.5 }}
          className={`absolute ${i === 0 ? 'top-6 right-4' : 'bottom-8 left-3'} 
            px-2 py-1 rounded-lg text-[9px] font-semibold
            bg-[#0F172A]/90 border border-white/15 text-white/70 backdrop-blur-sm shadow-lg`}
        >
          {f}
        </motion.div>
      ))}
    </div>
  )
}

// Lightbox for the OUTS poster
const Lightbox = ({ src, title, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.85, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="relative max-w-3xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm
          flex items-center justify-center text-white hover:bg-black/80 transition-colors"
      >
        <X size={16} />
      </button>
      <img src={src} alt={title} className="w-full h-full object-contain" />
    </motion.div>
  </motion.div>
)

const ShowcaseCard = ({ project, index }) => {
  const [lightbox, setLightbox] = useState(false)
  const c = accentMap[project.accent]

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: index * 0.15 }}
        className={`group rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10
          ${c.border} ${c.shadow} transition-all duration-400 flex flex-col`}
      >
        {/* Image / Mockup area */}
        <div className="relative h-64 overflow-hidden">
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
              {/* Expand button */}
              <button
                onClick={() => setLightbox(true)}
                className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-black/50 backdrop-blur-sm
                  flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70
                  opacity-0 group-hover:opacity-100 transition-all duration-200 border border-white/10"
              >
                <Maximize2 size={14} />
              </button>
              {/* Badge over image */}
              <div className="absolute top-3 left-3">
                <span className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border ${c.badge} backdrop-blur-sm`}>
                  {project.badge}
                </span>
              </div>
            </>
          ) : (
            <>
              <MockupPlaceholder accent={project.accent} features={project.features} />
              <div className="absolute top-3 left-3">
                <span className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border ${c.badge} backdrop-blur-sm bg-[#0F172A]/70`}>
                  {project.badge}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1">
            {project.subtitle}
          </p>
          <h3 className="font-sora text-base font-bold text-white mb-3 leading-snug group-hover:text-purple transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">
            {project.desc}
          </p>

          {/* Feature chips */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.features.map(f => (
              <span key={f} className={`flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold rounded-full border ${c.tag}`}>
                <span className={`w-1 h-1 rounded-full ${c.featureDot}`} />
                {f}
              </span>
            ))}
          </div>

          {/* Tags row */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map(t => (
              <span key={t} className="px-2 py-0.5 text-[10px] rounded bg-white/5 border border-white/10 text-slate-400 font-medium">
                {t}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex gap-2">
            <motion.a
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl
                text-xs font-bold text-white ${c.btn} transition-shadow duration-300`}
            >
              <ExternalLink size={12} /> View in Figma
            </motion.a>
            {project.image && (
              <motion.button
                onClick={() => setLightbox(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl
                  text-xs font-semibold text-slate-400 border border-white/10
                  hover:border-white/20 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <Maximize2 size={12} /> Preview
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox src={project.image} title={project.title} onClose={() => setLightbox(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

const Showcase = () => {
  return (
    <section id="showcase" className="py-24 max-w-6xl mx-auto px-4 sm:px-8">
      <div className="glow-line mb-16" />
      <SectionHeader
        label="UI/UX Design"
        title="Design"
        highlight="Showcase"
        subtitle="Real Figma projects — from competition entries to full product designs. Click to open in Figma."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <ShowcaseCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Figma CTA banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-purple/10 via-blue/5 to-pink/10
          border border-purple/20 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div>
          <p className="font-sora text-sm font-bold text-white mb-1">Want to see all my design work?</p>
          <p className="text-slate-400 text-xs">All projects are live on Figma — full interactive prototypes included.</p>
        </div>
        <motion.a
          href="https://www.figma.com/@tahreemfatima"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex-shrink-0 flex items-center gap-2 px-6 py-2.5 rounded-xl
            bg-gradient-to-r from-purple to-blue text-white text-xs font-bold
            shadow-[0_4px_20px_rgba(139,92,246,0.35)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)]
            transition-shadow duration-300"
        >
          <ExternalLink size={13} /> View Figma Profile
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Showcase
