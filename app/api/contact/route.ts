import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  message: string
  budget?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // In production, integrate with your preferred email service
    // Examples: Resend, SendGrid, Postmark, etc.
    //
    // if (process.env.RESEND_API_KEY) {
    //   const resend = new Resend(process.env.RESEND_API_KEY)
    //   await resend.emails.send({
    //     from: 'HexStudio <noreply@hexstudio.com.au>',
    //     to: process.env.CONTACT_EMAIL || 'hello@hexstudio.com.au',
    //     subject: `New inquiry from ${body.name}`,
    //     text: `
    //       Name: ${body.name}
    //       Email: ${body.email}
    //       Budget: ${body.budget || 'Not specified'}
    //
    //       Message:
    //       ${body.message}
    //     `,
    //   })
    // }

    // Log submission for development
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      budget: body.budget,
      message: body.message.substring(0, 100) + '...',
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will be in touch soon.'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}

// Optionally handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
