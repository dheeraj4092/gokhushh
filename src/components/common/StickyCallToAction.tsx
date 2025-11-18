'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Download, ArrowUp, X } from 'lucide-react'
import Button from '@/components/ui/Button'

const StickyCallToAction = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const { scrollY } = useScroll()
  
  const y = useTransform(scrollY, [0, 100], [100, 0])
  const opacity = useTransform(scrollY, [0, 100], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToDownload = () => {
    const element = document.getElementById('download')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (isDismissed || !isVisible) return null

  return (
    <motion.div
      className="fixed bottom-20 md:bottom-4 right-2 md:right-4 z-40"
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl border border-gray-200 p-3 sm:p-4 max-w-[280px] sm:max-w-xs md:max-w-sm">
        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors z-10"
        >
          <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-600" />
        </button>

        {/* Content */}
        <div className="pr-3 sm:pr-4 md:pr-6">
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
            Ready to get started?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4">
            Download our app and start saving on rides today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              size="sm"
              onClick={scrollToDownload}
              className="flex-1 text-xs sm:text-sm h-9 sm:h-10"
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Download</span>
              <span className="sm:hidden">Get App</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={scrollToTop}
              className="text-xs sm:text-sm h-9 sm:h-10 w-full sm:w-auto"
            >
              <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-0" />
              <span className="ml-1 sm:hidden">Back to Top</span>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default StickyCallToAction
