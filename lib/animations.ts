// Smooth easing curve for natural animations
export const smoothOut = [0.22, 1, 0.36, 1]

// Fade up animation variant
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothOut,
    },
  },
}

// Fade in animation variant
export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: smoothOut,
    },
  },
}

// Stagger container for children animations
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Scale up animation
export const scaleUp = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: smoothOut,
    },
  },
}

// Viewport settings for triggering animations
export const viewportSettings = {
  once: true,
  margin: '-100px',
}
