import type { Metadata } from 'next'
import { ContactPageContent } from '@/components/ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with HexStudio. We\'d love to hear about your project and discuss how we can help transform your brand.',
}

export default function ContactPage() {
  return <ContactPageContent />
}
