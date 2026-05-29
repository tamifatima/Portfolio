import { motion } from 'framer-motion'
import SectionHeader from '../components/ui/SectionHeader'
import GlassCard from '../components/ui/GlassCard'
import { SKILLS } from '../constants/data'

const colorMap = {
  purple: 'bg-purple/10 border-purple/20 text-purple hover:bg-purple/20 hover:border-purple',
  blue: 'bg-blue/10 border-blue/20 text-blue hover:bg-blue/20 hover:border-blue',
  pink: 'bg-pink/10 border-pink/20 text-pink hover:bg-pink/20 hover:border-pink',
  cyan: 'bg-cyan/10 border-cyan/20 text-cyan hover:bg-cyan/20 hover:border-cyan',
}

const dotColorMap = {
  purple: 'bg-purple',
  blue: 'bg-blue',
  pink: 'bg-pink',
  cyan: 'bg-cyan',
}

const Skills = () => {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-4 sm:px-8">
      <div className="glow-line mb-16" />
      <SectionHeader
        label="Tech Stack"
        title="Skills &"
        highlight="Technologies"
        subtitle="A versatile toolkit spanning full-stack development, quality engineering, and design."
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {SKILLS.map((skill, i) => (
          <GlassCard key={skill.category} delay={i * 0.1} className="p-6">
            <h3 className="font-sora text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${dotColorMap[skill.color]}`} />
              {skill.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag, j) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: j * 0.04 }}
                  whileHover={{ y: -2 }}
                  className={`tech-tag px-3 py-1 text-xs font-medium rounded-full border
                    cursor-default transition-all duration-200
                    ${colorMap[skill.color]}
                  `}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}

export default Skills
