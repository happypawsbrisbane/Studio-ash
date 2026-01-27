'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader } from '@/components/ui/Section'
import { fadeUp } from '@/lib/animations'

export function Philosophy() {
  return (
    <Section variant="cream" size="large">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left column - Statement */}
        <motion.div variants={fadeUp}>
          <SectionHeader
            eyebrow="Our Philosophy"
            title="We believe a brand is more than a logo."
          />
          <p className="text-body-lg text-stone">
            It's the feeling someone has when they encounter your business—and every
            moment thereafter. We craft that feeling with intention, building brands
            that resonate deeply and endure meaningfully.
          </p>
        </motion.div>

        {/* Right column - Values */}
        <motion.div variants={fadeUp} className="space-y-8">
          {[
            {
              title: 'Strategy First',
              description: 'Every visual decision is rooted in strategic thinking. We understand your market, your audience, and your ambitions before we design.',
            },
            {
              title: 'Craft Obsessed',
              description: 'Details matter. We sweat the small stuff because excellence lives in the margins. Every pixel, every word, every interaction is considered.',
            },
            {
              title: 'Partnership Approach',
              description: 'The best work emerges from true collaboration. We embed ourselves in your vision, becoming an extension of your team.',
            },
          ].map((value, index) => (
            <div key={index} className="border-l-2 border-gold pl-6">
              <h3 className="text-h4 font-serif text-charcoal mb-2">
                {value.title}
              </h3>
              <p className="text-body text-stone">
                {value.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
