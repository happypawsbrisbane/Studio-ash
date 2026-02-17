'use client'

import { motion } from 'framer-motion'
import { ButtonLink } from '@/components/ui/Button'
import { smoothOut } from '@/lib/animations'

const hexColors = ['#7C3AED', '#6366F1', '#06B6D4', '#F43F5E', '#10B981', '#F59E0B']

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet/8 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo/6 rounded-full blur-[100px] animate-glow-pulse animation-delay-200" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-cyan/4 rounded-full blur-[80px] animate-glow-pulse animation-delay-400" />
      </div>

      {/* Floating hex codes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {hexColors.map((color, i) => (
          <motion.span
            key={color}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            transition={{ delay: 1 + i * 0.2, duration: 1 }}
            className="absolute font-mono text-caption tracking-wider animate-float"
            style={{
              color,
              top: `${15 + i * 13}%`,
              left: i % 2 === 0 ? `${5 + i * 4}%` : undefined,
              right: i % 2 !== 0 ? `${5 + i * 3}%` : undefined,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            {color}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: smoothOut }}
          className="inline-flex items-center gap-3 font-mono text-caption uppercase tracking-[0.2em] text-muted mb-8"
        >
          <span className="w-8 h-px bg-violet/50" />
          Brand & Design Studio
          <span className="w-8 h-px bg-violet/50" />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: smoothOut }}
          className="text-h1 md:text-display font-serif text-white text-balance mb-8"
        >
          Brands defined{' '}
          <span className="text-gradient">by colour.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: smoothOut }}
          className="text-body-lg md:text-h4 font-sans text-subtle max-w-xl mx-auto mb-12"
        >
          Strategy. Identity. Digital. We build brands that don&apos;t blend in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: smoothOut }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ButtonLink href="/work" size="lg">
            View Work
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
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
