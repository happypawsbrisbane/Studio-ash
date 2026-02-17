'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ButtonLink } from '@/components/ui/Button'
import { smoothOut } from '@/lib/animations'

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }
    const el = containerRef.current
    el?.addEventListener('mousemove', handleMouseMove)
    return () => el?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 lg:px-20 pt-24 pb-12 overflow-hidden"
    >
      {/* Cursor-reactive gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-[160px] opacity-[0.07] transition-all duration-[2000ms] ease-out"
          style={{
            background: 'conic-gradient(from 0deg, #7C3AED, #6366F1, #06B6D4, #10B981, #7C3AED)',
            left: `${mousePos.x * 100 - 25}%`,
            top: `${mousePos.y * 100 - 25}%`,
          }}
        />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-violet/5 rounded-full blur-[100px] animate-glow-pulse" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: smoothOut }}
          className="inline-flex items-center gap-3 font-mono text-caption uppercase tracking-[0.2em] text-muted mb-8"
        >
          <span className="w-8 h-px bg-violet/50" />
          Brisbane Brand Studio
          <span className="w-8 h-px bg-violet/50" />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: smoothOut }}
          className="text-h1 md:text-display font-serif text-white text-balance mb-6"
        >
          Your brand should feel{' '}
          <span className="text-gradient">inevitable.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: smoothOut }}
          className="text-body-lg md:text-h4 font-sans text-subtle max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Not louder. Not trendier. Inevitable&mdash;like it couldn&apos;t have been anything else.
          We build brands for Brisbane businesses who&apos;ve outgrown their first identity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: smoothOut }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ButtonLink href="/work" size="lg">
            See the Work
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" size="lg">
            Start a Project
          </ButtonLink>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-white/10 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-0.5 h-1.5 bg-violet/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
