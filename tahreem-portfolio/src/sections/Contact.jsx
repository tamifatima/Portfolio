import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, Mail, MapPin, Phone, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import { PERSONAL } from '../constants/data'

// ── Replace these with your EmailJS credentials ──────────────────────────────
const EMAILJS_SERVICE_ID = 'service_x3qhtj6'
const EMAILJS_TEMPLATE_ID = 'template_e8zx3o3'
const EMAILJS_PUBLIC_KEY = '0iGPyddB79neoIkPc'
// ─────────────────────────────────────────────────────────────────────────────

const ContactItem = ({ icon: Icon, label, value, href }) => (
  <motion.a
    href={href}
    whileHover={{ x: 5 }}
    className="flex items-center gap-4 p-4 rounded-xl
      bg-white/5 border border-white/10
      hover:border-purple/40 hover:bg-white/[0.07]
      transition-all duration-200 cursor-pointer"
  >
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple/20 to-blue/20 border border-purple/20
      flex items-center justify-center flex-shrink-0">
      <Icon size={16} className="text-purple" />
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">{label}</p>
      <p className="text-sm font-medium text-white">{value}</p>
    </div>
  </motion.a>
)

const Contact = () => {
  const formRef = useRef(null)
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-4 sm:px-8">
      <div className="glow-line mb-16" />
      <SectionHeader
        label="Contact"
        title="Let's"
        highlight="Connect"
        subtitle="Whether it's a job opportunity, project collaboration, or just a hello — I'd love to hear from you!"
      />

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-sora text-xl font-bold text-white mb-6">Get in touch</h3>
          <div className="flex flex-col gap-3 mb-8">
            <ContactItem icon={Mail} label="Email" value={PERSONAL.email} href={`mailto:${PERSONAL.email}`} />
            <ContactItem icon={MapPin} label="Location" value={PERSONAL.location} href="#" />
            <ContactItem icon={Phone} label="Phone" value={PERSONAL.phone} href={`tel:${PERSONAL.phone}`} />
          </div>

          {/* Social */}
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-3">Find me online</p>
          <div className="flex gap-3">
            {[
              { icon: Github, href: PERSONAL.github, label: 'GitHub' },
              { icon: Linkedin, href: PERSONAL.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${PERSONAL.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={label}
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
                  text-slate-400 hover:text-purple hover:border-purple/40 hover:bg-purple/10
                  hover:shadow-[0_6px_20px_rgba(139,92,246,0.2)] transition-all duration-300"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-blue/5 pointer-events-none" />
          <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1.5">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600
                    bg-white/4 border border-white/10 outline-none
                    focus:border-purple/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)]
                    transition-all duration-200" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1.5">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600
                    bg-white/4 border border-white/10 outline-none
                    focus:border-purple/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)]
                    transition-all duration-200" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1.5">Subject</label>
              <input name="subject" value={form.subject} onChange={handleChange} required
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600
                  bg-white/4 border border-white/10 outline-none
                  focus:border-purple/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)]
                  transition-all duration-200" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1.5">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                placeholder="Tell me what you have in mind..."
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 resize-none
                  bg-white/4 border border-white/10 outline-none
                  focus:border-purple/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)]
                  transition-all duration-200" />
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 border border-green-400/20 rounded-xl px-4 py-3">
                <CheckCircle size={16} /> Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                <AlertCircle size={16} /> Something went wrong. Please try again.
              </div>
            )}

            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2
                bg-gradient-to-r from-purple to-blue
                shadow-[0_4px_20px_rgba(139,92,246,0.4)]
                hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)]
                disabled:opacity-60 disabled:cursor-not-allowed
                transition-shadow duration-300"
            >
              {status === 'loading' ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <><Send size={16} /> Send Message ✨</>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
