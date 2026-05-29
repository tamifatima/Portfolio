import { motion } from 'framer-motion'
import { Download, FileText, Eye } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'

const highlights = [
  { icon: '🎓', label: 'CGPA', value: '3.74 / 4.00' },
  { icon: '💼', label: 'Experience', value: '2 TA Roles' },
  { icon: '🏆', label: 'Awards', value: '5 Certificates' },
  { icon: '🚀', label: 'Projects', value: '3+ Major' },
]

const Resume = () => {
  return (
    <section id="resume" className="py-24 max-w-6xl mx-auto px-4 sm:px-8">
      <div className="glow-line mb-16" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left — highlights */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold
            tracking-widest uppercase mb-4 bg-white/5 border border-purple/30 text-purple">
            <span className="w-1.5 h-1.5 rounded-full bg-purple animate-pulse" />
            Resume
          </div>
          <div className="w-16 h-0.5 rounded-full bg-gradient-to-r from-purple to-blue mb-3" />
          <h2 className="font-sora text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            My{' '}
            <span className="bg-gradient-to-r from-purple via-blue to-pink bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            A full overview of my academic background, technical skills, work experience, and project highlights —
            all in one polished document ready to share.
          </p>

          {/* Quick highlights */}
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-3 p-3.5 rounded-xl
                  bg-white/5 border border-white/10 hover:border-purple/30 transition-colors"
              >
                <span className="text-xl">{h.icon}</span>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">{h.label}</p>
                  <p className="text-sm font-bold text-white">{h.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — download card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-center p-10 rounded-3xl overflow-hidden
            bg-white/[0.04] border border-white/10"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple/8 to-blue/8 via-pink/4 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(139,92,246,0.18) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59,130,246,0.12) 0%, transparent 50%)',
            }}
          />

          <div className="relative z-10">
            {/* Animated icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-6
                bg-gradient-to-br from-purple/20 to-blue/20 border border-purple/30 mx-auto"
            >
              <FileText size={44} className="text-purple" />
            </motion.div>

            <h3 className="font-sora text-2xl font-bold text-white mb-1">Tahreem Fatima</h3>
            <p className="text-slate-400 text-sm mb-1">Software Engineer · Full-Stack Developer</p>
            <p className="text-slate-500 text-xs mb-8">Lahore, Pakistan · tahreemf274@gmail.com</p>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="/Tahreem_Fatima_Resume.pdf"
                download="Tahreem_Fatima_Resume.pdf"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl
                  font-bold text-sm text-white
                  bg-gradient-to-r from-purple to-blue
                  shadow-[0_4px_20px_rgba(139,92,246,0.4)]
                  hover:shadow-[0_8px_30px_rgba(139,92,246,0.55)]
                  transition-shadow duration-300"
              >
                <Download size={16} />
                Download PDF
              </motion.a>
              <motion.a
                href="/Tahreem_Fatima_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl
                  font-semibold text-sm text-slate-300
                  border border-white/15
                  hover:border-purple/40 hover:bg-purple/10 hover:text-white
                  transition-all duration-300"
              >
                <Eye size={16} />
                View Online
              </motion.a>
            </div>

            <p className="text-slate-600 text-[10px] mt-4 uppercase tracking-widest">
              PDF · Last updated May 2025
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
