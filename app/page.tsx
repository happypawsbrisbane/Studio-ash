import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Philosophy } from '@/components/Philosophy'
import { WorkPreview } from '@/components/WorkPreview'
import { ServicesOverview } from '@/components/ServicesOverview'
import { ContactCTA } from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'Studio Ash — Premium Brand Studio, Brisbane',
  description: 'Studio Ash is a premium creative and brand studio based in Brisbane, Australia. We craft extraordinary brands for extraordinary people through strategy, design, and digital experiences.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <WorkPreview />
      <ServicesOverview />
      <ContactCTA />
    </>
  )
}
