import { useEffect } from 'react'

export const useLenis = () => {
  useEffect(() => {
    let lenis
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
        })

        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
      } catch (e) {
        console.warn('Lenis not available, using native scroll', e)
      }
    }

    initLenis()
    return () => lenis?.destroy()
  }, [])
}
