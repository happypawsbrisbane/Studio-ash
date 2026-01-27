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
      newErrors.message = 'Please provide a bit more detail about your project'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
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
          <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-gold/20 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gold"
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
          <h1 className="text-h2 md:text-h1 font-serif text-charcoal mb-4">
            Message received.
          </h1>
          <p className="text-body-lg text-stone mb-8">
            Thank you for reaching out. We'll review your message and get back to you
            within 1-2 business days.
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
            className="block text-caption uppercase tracking-widest text-stone mb-6"
          >
            Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothOut }}
            className="text-h1 md:text-display font-serif text-charcoal max-w-3xl"
          >
            Let's create something extraordinary together.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: smoothOut }}
            className="mt-6 text-body-lg text-stone max-w-xl"
          >
            Ready to discuss your project? Fill out the form below or reach out
            directly. We respond to every enquiry within 1-2 business days.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <Section animate={false}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Form */}
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
                label="Tell us about your project"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                placeholder="What are you looking to achieve? What's the timeline? Any other details that would help us understand your needs..."
                required
              />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Button type="submit" size="lg" isLoading={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                <p className="text-small text-stone">
                  We'll respond within 1-2 business days.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="lg:col-span-5 lg:pl-12 lg:border-l border-line-grey"
          >
            <div className="space-y-10">
              {/* Direct Contact */}
              <div>
                <h3 className="text-small font-medium uppercase tracking-wider text-stone mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@studioash.com.au"
                    className="block text-body text-charcoal hover:text-bronze transition-colors duration-300"
                  >
                    hello@studioash.com.au
                  </a>
                  <a
                    href="tel:+61412345678"
                    className="block text-body text-charcoal hover:text-bronze transition-colors duration-300"
                  >
                    +61 412 345 678
                  </a>
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-small font-medium uppercase tracking-wider text-stone mb-4">
                  Location
                </h3>
                <address className="not-italic text-body text-charcoal">
                  Brisbane, Australia
                  <br />
                  <span className="text-stone">
                    Working with clients worldwide
                  </span>
                </address>
              </div>

              {/* Availability */}
              <div>
                <h3 className="text-small font-medium uppercase tracking-wider text-stone mb-4">
                  Availability
                </h3>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-body text-charcoal">
                    Currently accepting new projects for Q2 2026
                  </span>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-small font-medium uppercase tracking-wider text-stone mb-4">
                  Connect
                </h3>
                <div className="flex gap-4">
                  {[
                    { href: 'https://instagram.com/studioash', label: 'Instagram' },
                    { href: 'https://linkedin.com/company/studioash', label: 'LinkedIn' },
                    { href: 'https://behance.net/studioash', label: 'Behance' },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-small text-stone hover:text-charcoal transition-colors duration-300"
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
      <Section variant="cream">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-h2 font-serif text-charcoal text-center mb-12">
            Common questions
          </h2>
          <div className="space-y-8">
            {[
              {
                question: "What's your typical process?",
                answer: 'We follow a four-phase approach: Discovery, Strategy, Creation, and Launch. Each project begins with deep research and strategic thinking before any design work begins.',
              },
              {
                question: 'How long does a typical project take?',
                answer: "Brand identity projects typically take 8-12 weeks. Website projects range from 10-16 weeks depending on complexity. We'll provide a detailed timeline during our initial conversation.",
              },
              {
                question: 'Do you work with clients outside Australia?',
                answer: "Absolutely. While we're based in Brisbane, we regularly work with clients across Australia and internationally. Modern tools make remote collaboration seamless.",
              },
              {
                question: "What's the investment for a brand project?",
                answer: 'Brand identity projects start from $15,000. Complete brand and website packages start from $35,000. We provide detailed proposals after understanding your specific needs.',
              },
            ].map((faq) => (
              <div key={faq.question} className="border-b border-line-grey pb-8">
                <h3 className="text-h4 font-serif text-charcoal mb-3">
                  {faq.question}
                </h3>
                <p className="text-body text-stone">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>
    </>
  )
}
