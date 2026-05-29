import { motion } from 'framer-motion'
import SectionHeader from '../components/ui/SectionHeader'
import { CERTIFICATIONS } from '../constants/data'

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 max-w-6xl mx-auto px-4 sm:px-8">
      <div className="glow-line mb-16" />
      <SectionHeader
        label="Achievements"
        title="Certifications &"
        highlight="Awards"
        subtitle="Recognition across competitive programming, design, and community leadership."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex items-start gap-4 p-5 rounded-2xl
              bg-white/5 border border-white/10
              hover:border-purple/40 hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)]
              transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl
              bg-gradient-to-br from-purple/20 to-blue/20 border border-purple/20">
              {cert.icon}
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white leading-tight mb-1">{cert.title}</h4>
              <p className="text-xs text-purple font-medium">{cert.org}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
