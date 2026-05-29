import { motion } from 'framer-motion'
import { GraduationCap, BookOpen } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import { EDUCATION } from '../constants/data'

const icons = [GraduationCap, BookOpen]
const accentColors = ['from-purple to-blue', 'from-blue to-cyan']

const Education = () => {
  return (
    <section id="education" className="py-24 max-w-6xl mx-auto px-4 sm:px-8">
      <div className="glow-line mb-16" />
      <SectionHeader
        label="Education"
        title="Academic"
        highlight="Background"
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {EDUCATION.map((edu, i) => {
          const Icon = icons[i]
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative p-6 rounded-2xl
                bg-white/5 border border-white/10 overflow-hidden
                hover:border-purple/40 hover:shadow-[0_10px_40px_rgba(139,92,246,0.1)]
                transition-all duration-300"
            >
              {/* Gradient corner accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${accentColors[i]} opacity-10 rounded-bl-full`} />

              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4
                text-xs font-semibold bg-purple/10 border border-purple/20 text-purple`}>
                {edu.badge}
              </div>

              <div className="flex items-start gap-3 mb-4">
                <div className={`p-2 rounded-xl bg-gradient-to-br ${accentColors[i]} bg-opacity-20 flex-shrink-0`}
                  style={{ background: 'rgba(139,92,246,0.15)' }}>
                  <Icon size={18} className="text-purple" />
                </div>
                <div>
                  <h3 className="font-sora text-base font-bold text-white">{edu.degree}</h3>
                  <p className="text-blue text-sm font-medium mt-0.5">{edu.school}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{edu.period}</p>
                </div>
              </div>

              <div className="flex gap-6 pt-4 border-t border-white/5">
                {edu.stats.map((s, j) => (
                  <div key={j} className="text-center">
                    <div className={`font-sora text-2xl font-bold bg-gradient-to-r ${accentColors[i]} bg-clip-text text-transparent`}>
                      {s.val}
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Education
