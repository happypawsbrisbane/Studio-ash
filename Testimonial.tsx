'use client'

import { Section } from '@/components/ui/Section'
import { TestimonialCard } from '@/components/ui/Card'

export function Testimonial() {
  return (
    <Section size="large">
      <TestimonialCard
        quote="Studio Ash transformed how we see ourselves—and how the world sees us. Their strategic approach uncovered opportunities we hadn't considered, and their execution exceeded every expectation."
        author="Sarah Chen"
        role="Founder"
        company="Paws & Peace"
      />
    </Section>
  )
}
