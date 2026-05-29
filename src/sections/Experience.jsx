import { motion } from 'framer-motion'
import SectionHeader from '../components/ui/SectionHeader'
import { EXPERIENCE } from '../constants/data'

const colorDotMap = {
  purple: 'bg-purple shadow-[0_0_15px_rgba(139,92,246,0.6)]',
  blue: 'bg-blue shadow-[0_0_15px_rgba(59,130,246,0.6)]',
}

const Experience = () => {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-4 sm:px-8">
      <div className="glow-line mb-16" />
      <SectionHeader
        label="Experience"
        title="Teaching"
        highlight="Experience"
        subtitle="Mentoring and guiding students through complex concepts at PUCIT."
      />

      <div className="relative pl-8 max-w-3xl">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple via-blue to-transparent" />

        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative pb-12 last:pb-0"
          >
            {/* Dot */}
            <div className={`absolute -left-10 top-1 w-4 h-4 rounded-full border-2 border-[#0F172A]
              ${colorDotMap[exp.color]} timeline-dot-pulse`}
            />

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6
              hover:border-purple/30 hover:bg-white/[0.07] transition-all duration-300">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-sora text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-blue text-sm font-semibold mt-0.5">{exp.org}</p>
                </div>
                <span className="text-xs text-purple font-semibold uppercase tracking-widest
                  bg-purple/10 border border-purple/20 px-3 py-1.5 rounded-full whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.responsibilities.map((r, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * j }}
                    className="flex items-start gap-2 text-sm text-slate-400"
                  >
                    <span className="text-purple mt-0.5 flex-shrink-0">▹</span>
                    {r}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
