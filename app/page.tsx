import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Philosophy } from '@/components/Philosophy'
import { WorkPreview } from '@/components/WorkPreview'
import { ServicesOverview } from '@/components/ServicesOverview'
import { ContactCTA } from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'HexStudio — Brand & Design Studio, Brisbane',
  description: 'HexStudio is a premium brand and design studio in Brisbane. We craft brands that command attention through strategy, design, and digital experiences.',
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
