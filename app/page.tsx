import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Philosophy } from '@/components/Philosophy'
import { WorkPreview } from '@/components/WorkPreview'
import { Testimonials } from '@/components/Testimonial'
import { ServicesOverview } from '@/components/ServicesOverview'
import { ContactCTA } from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'HexStudio — Brand & Design Studio, Brisbane',
  description: 'Brisbane brand and design studio helping businesses close the gap between how good they are and how good they look. Strategy, identity, and digital.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <WorkPreview />
      <Testimonials />
      <ServicesOverview />
      <ContactCTA />
    </>
  )
}
