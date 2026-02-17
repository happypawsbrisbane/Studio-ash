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
        void: '#06060A',
        surface: '#0E0E14',
        elevated: '#16161F',
        border: '#1E1E2A',
        white: '#FAFAFA',
        muted: '#52526B',
        subtle: '#71718A',
        violet: '#7C3AED',
        indigo: '#6366F1',
        cyan: '#06B6D4',
        rose: '#F43F5E',
        amber: '#F59E0B',
        emerald: '#10B981',
        line: '#1E1E2A',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display': ['5.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        'h1': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'h2': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h3': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h4': ['1.25rem', { lineHeight: '1.5', letterSpacing: '0' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'small': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.06em' }],
        'micro': ['0.625rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
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
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'smooth-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth-in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(48px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, #7C3AED, #6366F1, #06B6D4)',
        'gradient-warm': 'linear-gradient(135deg, #F43F5E, #F59E0B)',
        'gradient-cool': 'linear-gradient(135deg, #6366F1, #06B6D4, #10B981)',
      },
      screens: {
        'xs': '480px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}

export default config
