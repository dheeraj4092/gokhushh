export const animations = {
  // Page transitions
  pageTransition: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  
  // Card reveals
  cardReveal: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4 }
  },
  
  // Counter animations
  counterUp: {
    initial: { scale: 0.8 },
    animate: { scale: 1 },
    transition: { type: "spring", stiffness: 100 }
  },
  
  // Hover effects
  buttonHover: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  },
  
  // Stagger animations
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  },
  
  // Logo animation
  logoAnimation: {
    initial: { scale: 0, rotate: -180 },
    animate: { scale: 1, rotate: 0 },
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 20,
      duration: 0.8 
    }
  },
  
  // Slide in from left
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  
  // Slide in from right
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  
  // Fade in with delay
  fadeInDelay: (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, delay }
  }),
  
  // Scale in with bounce
  scaleInBounce: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }
  }
};
