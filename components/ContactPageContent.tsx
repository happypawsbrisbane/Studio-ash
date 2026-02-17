'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Input, TextArea, Select } from '@/components/ui/Input'
import { fadeUp, smoothOut, viewportSettings } from '@/lib/animations'

const budgetOptions = [
  { value: '', label: 'Select budget range (optional)' },
  { value: '15k-25k', label: '$15,000 – $25,000' },
  { value: '25k-50k', label: '$25,000 – $50,000' },
  { value: '50k-100k', label: '$50,000 – $100,000' },
  { value: '100k+', label: '$100,000+' },
  { value: 'retainer', label: 'Ongoing retainer' },
]

interface FormData {
  name: string
  email: string
  company?: string
  budget?: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactPageContent() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide a bit more detail'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSuccess) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: smoothOut }}
          className="text-center max-w-xl"
        >
          <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-violet/20 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-violet"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-h2 md:text-h1 font-serif text-white mb-4">
            Message received.
          </h1>
          <p className="text-body-lg text-subtle mb-8">
            We&apos;ll review your message and respond within 1-2 business days.
          </p>
          <Button
            onClick={() => {
              setIsSuccess(false)
              setFormData({ name: '', email: '', company: '', budget: '', message: '' })
            }}
            variant="secondary"
          >
            Send another message
          </Button>
        </motion.div>
      </section>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="container-wide">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothOut }}
            className="block font-mono text-micro uppercase tracking-[0.15em] text-muted mb-6"
          >
            Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothOut }}
            className="text-h1 md:text-display font-serif text-white max-w-3xl"
          >
            Let&apos;s build something <span className="text-gradient">together.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: smoothOut }}
            className="mt-6 text-body-lg text-subtle max-w-xl"
          >
            Ready to discuss your project? We respond to every enquiry within 1-2 business days.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <Section animate={false}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Your name"
                  required
                  autoComplete="name"
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="you@company.com"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Company (optional)"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  autoComplete="organization"
                />
                <Select
                  label="Budget Range (optional)"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  options={budgetOptions}
                />
              </div>

              <TextArea
                label="About your project"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                placeholder="What are you looking to achieve? Timeline? Any key details..."
                required
              />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Button type="submit" size="lg" isLoading={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                <p className="text-small text-muted">
                  We respond within 1-2 business days.
                </p>
              </div>
            </form>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="lg:col-span-5 lg:pl-12 lg:border-l border-white/[0.06]"
          >
            <div className="space-y-10">
              <div>
                <h3 className="font-mono text-micro uppercase tracking-widest text-muted mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@hexstudio.com.au"
                    className="block text-body text-white hover:text-violet transition-colors duration-300"
                  >
                    hello@hexstudio.com.au
                  </a>
                  <a
                    href="tel:+61412345678"
                    className="block text-body text-white hover:text-violet transition-colors duration-300"
                  >
                    +61 412 345 678
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-mono text-micro uppercase tracking-widest text-muted mb-4">
                  Location
                </h3>
                <address className="not-italic text-body text-white">
                  Brisbane, Australia
                  <br />
                  <span className="text-subtle">
                    Working with clients worldwide
                  </span>
                </address>
              </div>

              <div>
                <h3 className="font-mono text-micro uppercase tracking-widest text-muted mb-4">
                  Availability
                </h3>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                  <span className="text-body text-white">
                    Accepting new projects
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-mono text-micro uppercase tracking-widest text-muted mb-4">
                  Connect
                </h3>
                <div className="flex gap-4">
                  {[
                    { href: 'https://instagram.com/hexstudio', label: 'Instagram' },
                    { href: 'https://linkedin.com/company/hexstudio', label: 'LinkedIn' },
                    { href: 'https://behance.net/hexstudio', label: 'Behance' },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-small text-muted hover:text-violet transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="elevated">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-h2 font-serif text-white text-center mb-12">
            Common questions
          </h2>
          <div className="space-y-8">
            {[
              {
                question: "What's your process?",
                answer: 'Four phases: Discovery, Strategy, Creation, and Launch. Research and strategy before any design.',
              },
              {
                question: 'How long do projects take?',
                answer: 'Brand identity: 8-12 weeks. Websites: 10-16 weeks. Detailed timeline provided after initial conversation.',
              },
              {
                question: 'Do you work internationally?',
                answer: 'Yes. Based in Brisbane, we work with clients across Australia and globally.',
              },
              {
                question: "What's the investment?",
                answer: 'Brand identity from $15,000. Complete brand and website packages from $35,000. Detailed proposals after understanding your needs.',
              },
            ].map((faq) => (
              <div key={faq.question} className="border-b border-white/[0.06] pb-8">
                <h3 className="text-h4 font-serif text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-body text-subtle">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>
    </>
  )
}
