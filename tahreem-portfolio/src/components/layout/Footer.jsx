import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-8 text-center">
      <p className="text-slate-400 text-sm flex items-center justify-center gap-1.5">
        Designed & Built with{' '}
        <Heart size={14} className="text-pink fill-pink" />{' '}
        by{' '}
        <span className="bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent font-semibold">
          Tahreem Fatima
        </span>
        {' · '}Lahore, Pakistan
      </p>
      <p className="text-slate-600 text-xs mt-1">© 2025 All rights reserved</p>
    </footer>
  )
}

export default Footer
