import { motion } from 'framer-motion'

export const PrimaryButton = ({ children, onClick, className = '', href }) => {
  const Tag = href ? 'a' : motion.button
  const props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { onClick }

  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      href={href || '#'}
      onClick={onClick}
      className={`
        relative inline-flex items-center gap-2 px-8 py-3 rounded-full
        font-semibold text-sm text-white overflow-hidden
        bg-gradient-to-r from-purple to-blue
        shadow-[0_4px_20px_rgba(139,92,246,0.4)]
        hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)]
        transition-shadow duration-300 ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-blue to-pink opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.a>
  )
}

export const OutlineButton = ({ children, onClick, className = '', href }) => {
  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      href={href || '#'}
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-8 py-3 rounded-full
        font-semibold text-sm text-white
        border border-white/20 backdrop-blur-sm
        hover:border-purple/60 hover:bg-purple/10
        hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]
        transition-all duration-300 ${className}
      `}
    >
      {children}
    </motion.a>
  )
}

export const GradientButton = ({ children, onClick, className = '', href }) => {
  return (
    <motion.a
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      href={href || '#'}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full
        font-bold text-base text-white
        bg-gradient-to-r from-purple to-blue
        shadow-[0_4px_20px_rgba(139,92,246,0.4)]
        hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)]
        transition-shadow duration-300 ${className}
      `}
    >
      {children}
    </motion.a>
  )
}
