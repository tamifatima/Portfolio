import { motion } from 'framer-motion'

const SectionHeader = ({ label, title, highlight, subtitle, center = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4
          bg-white/5 border border-purple/30 text-purple`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-purple animate-pulse" />
        {label}
      </motion.div>
      <div className="w-16 h-0.5 rounded-full bg-gradient-to-r from-purple to-blue mb-3" />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-sora text-4xl md:text-5xl font-bold leading-tight text-white"
      >
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-purple via-blue to-pink bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-slate-400 max-w-lg leading-relaxed text-sm"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeader
