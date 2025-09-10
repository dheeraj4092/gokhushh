'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Play } from 'lucide-react'
import { animations } from '@/lib/animations'
import { content } from '@/lib/constants'
import ImagesSliderDemo from '@/components/ui/images-slider-demo'

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('story-cards')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen relative bg-brand-black">
      {/* Mobile Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-dark to-brand-gray md:hidden" />
      
      {/* Desktop Images Slider Background */}
      <div className="hidden md:block">
        <ImagesSliderDemo />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-50 flex items-center justify-center min-h-screen bg-black/20 md:absolute md:inset-0">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 sm:mb-12">
            
          </div>

          {/* Main Headline */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight"
            {...animations.fadeInDelay(0.2)}
          >
            {content.hero.tagline}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed"
            {...animations.fadeInDelay(0.4)}
          >
            {content.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20"
            {...animations.fadeInDelay(0.6)}
          >
            <button
              onClick={scrollToNext}
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-lg font-semibold transition-colors bg-brand-green text-brand-black hover:bg-brand-green-dark hover:text-white"
            >
              {content.hero.cta}
            </button>
            
            <button
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-lg font-semibold transition-colors border-2 border-brand-green text-brand-green bg-transparent hover:bg-brand-green hover:text-brand-black"
            >
              <Play className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 inline" />
              Watch Demo
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center text-gray-400"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-base sm:text-lg mb-2 sm:mb-3">Scroll to explore</span>
            <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
