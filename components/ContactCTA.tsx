'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/Button'
import { fadeUp } from '@/lib/animations'

export function ContactCTA() {
  return (
    <Section variant="elevated" size="large">
      <div className="text-center max-w-3xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-violet/6 rounded-full blur-[80px] pointer-events-none" />

        <motion.span
          variants={fadeUp}
          className="block font-mono text-micro uppercase tracking-[0.2em] text-muted mb-6"
        >
          Ready to begin?
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="text-h2 md:text-h1 font-serif text-white mb-6 relative"
        >
          Let&apos;s build something{' '}
          <span className="text-gradient">that lasts.</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="text-body-lg text-subtle mb-10">
          Whether you&apos;re launching, repositioning, or ready to look as good as you actually are&mdash;let&apos;s talk.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ButtonLink href="/contact" size="lg">
            Start a Conversation
          </ButtonLink>
          <span className="text-small text-muted">
            or{' '}
            <a
              href="mailto:hello@hexstudio.com.au"
              className="text-subtle underline underline-offset-4 hover:text-violet transition-colors"
            >
              hello@hexstudio.com.au
            </a>
          </span>
        </motion.div>
      </div>
    </Section>
  )
}
