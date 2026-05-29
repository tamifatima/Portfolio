/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        bg: { DEFAULT: '#0F172A', 2: '#111827', 3: '#1E293B' },
        purple: { DEFAULT: '#8B5CF6', light: '#A78BFA', dark: '#7C3AED' },
        blue: { DEFAULT: '#3B82F6', light: '#60A5FA' },
        pink: { DEFAULT: '#EC4899', light: '#F472B6' },
        cyan: { DEFAULT: '#06B6D4' },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 4s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        glow: { 'from': { boxShadow: '0 0 20px rgba(139,92,246,0.3)' }, 'to': { boxShadow: '0 0 40px rgba(139,92,246,0.6)' } },
        gradient: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
      },
      backgroundSize: { '200': '200% 200%' },
    },
  },
  plugins: [],
}
