import type { Metadata } from 'next'
import { StudioPageContent } from '@/components/studio/StudioPageContent'

export const metadata: Metadata = {
  title: 'Studio',
  description: 'Meet Studio Ash — a premium brand studio in Brisbane, Australia. Learn about our philosophy, approach, and the people behind the work.',
}

export default function StudioPage() {
  return <StudioPageContent />
}
