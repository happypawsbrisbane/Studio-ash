'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader } from '@/components/ui/Section'
import { fadeUp } from '@/lib/animations'

const values = [
  {
    hex: '#7C3AED',
    title: 'Strategy First',
    description: 'Every visual decision rooted in research and strategic thinking.',
  },
  {
    hex: '#6366F1',
    title: 'Craft Obsessed',
    description: 'Every pixel, word, and interaction considered with precision.',
  },
  {
    hex: '#06B6D4',
    title: 'True Partnership',
    description: 'We embed in your vision. Your brand becomes our mission.',
  },
]

export function Philosophy() {
  return (
    <Section variant="elevated">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <motion.div variants={fadeUp}>
          <SectionHeader
            eyebrow="Philosophy"
            title="More than a logo."
          />
          <p className="text-body-lg text-subtle">
            A brand is the feeling someone has when they encounter your business.
            We craft that feeling with intention.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-8">
          {values.map((value) => (
            <div key={value.hex} className="group flex gap-5">
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-125"
                  style={{ backgroundColor: value.hex }}
                />
                <div className="w-px h-full bg-border" />
              </div>
              <div className="pb-8">
                <span className="font-mono text-micro text-muted tracking-widest block mb-2">
                  {value.hex}
                </span>
                <h3 className="text-h4 font-serif text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-body text-subtle">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
