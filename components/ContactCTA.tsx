'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/Button'
import { fadeUp } from '@/lib/animations'

export function ContactCTA() {
  return (
    <Section variant="cream" size="large">
      <div className="text-center max-w-3xl mx-auto">
        <motion.span
          variants={fadeUp}
          className="block text-caption uppercase tracking-widest text-stone mb-6"
        >
          Ready to begin?
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="text-h2 md:text-h1 font-serif text-charcoal mb-6"
        >
          Let's create something extraordinary together.
        </motion.h2>

        <motion.p variants={fadeUp} className="text-body-lg text-stone mb-10">
          Whether you're launching a new venture, repositioning an established brand,
          or seeking ongoing creative partnership—we'd love to hear from you.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ButtonLink href="/contact" size="lg">
            Start a Conversation
          </ButtonLink>
          <span className="text-small text-stone">
            or email us at{' '}
            <a
              href="mailto:hello@studioash.com.au"
              className="text-charcoal underline underline-offset-4 hover:text-bronze transition-colors"
            >
              hello@studioash.com.au
            </a>
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-small text-stone"
        >
          Currently accepting new projects for Q2 2026
        </motion.p>
      </div>
    </Section>
  )
}
