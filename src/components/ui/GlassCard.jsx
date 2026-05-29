import { motion } from 'framer-motion'

const GlassCard = ({ children, className = '', hover = true, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -6 } : {}}
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/5 border border-white/10 backdrop-blur-sm
        transition-all duration-300
        hover:border-purple/40 hover:shadow-[0_10px_40px_rgba(139,92,246,0.12)]
        ${className}
      `}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-blue/5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
      {children}
    </motion.div>
  )
}

export default GlassCard
