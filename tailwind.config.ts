import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        charcoal: '#1A1A1A',
        'off-white': '#FAFAF9',
        stone: '#78716C',
        // Accent
        bronze: '#92400E',
        gold: '#D4A574',
        // Neutral
        'line-grey': '#E7E5E4',
        muted: '#A8A29E',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        // Custom typographic scale
        'display': ['4.5rem', { lineHeight: '5rem', letterSpacing: '-0.02em' }],
        'h1': ['3.5rem', { lineHeight: '4rem', letterSpacing: '-0.02em' }],
        'h2': ['2.5rem', { lineHeight: '3rem', letterSpacing: '-0.01em' }],
        'h3': ['1.75rem', { lineHeight: '2.25rem', letterSpacing: '0' }],
        'h4': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0' }],
        'body': ['1rem', { lineHeight: '1.625rem', letterSpacing: '0' }],
        'small': ['0.875rem', { lineHeight: '1.375rem', letterSpacing: '0.01em' }],
        'caption': ['0.75rem', { lineHeight: '1.125rem', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'smooth-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}

export default config
