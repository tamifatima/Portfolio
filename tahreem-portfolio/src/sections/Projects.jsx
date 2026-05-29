import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import { PROJECTS } from '../constants/data'

const gradientMap = {
  0: 'from-purple/80 to-blue/80',
  1: 'from-blue/80 to-cyan/80',
  2: 'from-pink/80 to-purple/80',
}

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className="group relative rounded-2xl overflow-hidden
        bg-white/5 border border-white/10
        hover:border-purple/40 hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)]
        transition-all duration-400 cursor-pointer"
    >
      {/* Project header */}
      <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${gradientMap[index]} flex items-center justify-center`}>
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-black to-transparent" />
        <motion.span
          className="text-6xl relative z-10"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
        >
          {project.emoji}
        </motion.span>
        <div className="absolute top-4 left-4">
          <span className="text-xs font-bold text-white/60 font-sora tracking-widest">
            Project {project.num}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-sora text-base font-bold text-white mb-3 leading-tight group-hover:text-purple transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) => (
            <span key={tech}
              className="px-2 py-0.5 text-[10px] font-semibold rounded
                bg-blue/10 border border-blue/20 text-blue">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2">
          <a href={project.demo}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold
              bg-gradient-to-r from-purple/20 to-blue/20 border border-purple/30 text-purple
              hover:from-purple/30 hover:to-blue/30 transition-all duration-200">
            <ExternalLink size={12} /> Live Demo
          </a>
          <a href={project.github}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold
              border border-white/10 text-slate-400
              hover:bg-white/5 hover:border-white/20 hover:text-white transition-all duration-200">
            <Github size={12} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-4 sm:px-8">
      <div className="glow-line mb-16" />
      <SectionHeader
        label="My Work"
        title="Featured"
        highlight="Projects"
        subtitle="Real-world applications built with precision, performance, and purpose."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Projects
