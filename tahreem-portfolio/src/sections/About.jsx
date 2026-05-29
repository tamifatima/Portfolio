import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, User } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import { PERSONAL } from '../constants/data'
import avatarImg from '../assests/profile pic.jpeg'

const details = [
  { icon: User, label: 'Name', value: PERSONAL.name },
  { icon: MapPin, label: 'Location', value: PERSONAL.location },
  { icon: Mail, label: 'Email', value: PERSONAL.email },
  { icon: Phone, label: 'Phone', value: PERSONAL.phone },
]

const About = () => {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-4 sm:px-8">
      <div className="glow-line mb-16" />
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Avatar side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          {/* Avatar ring */}
          <div className="relative mb-8">
            <div className="w-52 h-52 rounded-full bg-gradient-to-br from-purple via-blue to-pink p-0.5">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src={avatarImg} alt={PERSONAL.name} className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Orbit ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-dashed border-purple/20"
              style={{ animation: 'spin-ring 12s linear infinite' }}
            />
            {/* Floating dots */}
            <div className="absolute -top-2 left-1/2 w-3 h-3 rounded-full bg-purple shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
            <div className="absolute top-1/2 -right-2 w-2 h-2 rounded-full bg-blue shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <div className="absolute -bottom-2 left-1/3 w-2 h-2 rounded-full bg-pink shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
          </div>

          {/* Detail cards */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
            {details.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple/30 transition-colors"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon size={11} className="text-purple" />
                  <span className="text-[10px] uppercase tracking-widest text-purple font-semibold">{label}</span>
                </div>
                <p className="text-xs text-white font-medium truncate">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            label="About Me"
            title="Crafting code with"
            highlight="purpose"
          />
          <p className="text-slate-400 leading-relaxed text-sm mb-6">
            {PERSONAL.bio}
          </p>
          <p className="text-slate-400 leading-relaxed text-sm mb-8">
            I bridge the gap between technical complexity and beautiful user experience,
            building systems that are as elegant under the hood as they are on screen.
            Currently pursuing my BS in Software Engineering at PUCIT with a CGPA of 3.74.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Full-Stack Dev', 'UI/UX Design', 'Machine Learning', 'Quality Engineering'].map((t) => (
              <span key={t}
                className="px-3 py-1.5 text-xs rounded-full bg-purple/10 border border-purple/20 text-purple font-medium">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
