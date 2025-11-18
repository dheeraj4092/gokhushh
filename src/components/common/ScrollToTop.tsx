'use client'

import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(() => {
    // Disable scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    
    // Force scroll to top immediately on mount
    window.scrollTo(0, 0)
    
    // Also scroll to top after a tiny delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
    
    // Handle browser back/forward buttons
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }
    
    window.addEventListener('popstate', handleRouteChange)
    
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  return null
}
