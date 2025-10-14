'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { content } from '@/lib/constants'

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('story-cards')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen relative bg-[#030303]">
      {/* Geometric Background with Custom Content */}
      <div className="absolute inset-0">
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
          
          {/* Animated shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: -150, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: 12 }}
              transition={{ duration: 2.4, delay: 0.3, ease: [0.23, 0.86, 0.39, 0.96] }}
              className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative w-[600px] h-[140px]"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -150, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: -15 }}
              transition={{ duration: 2.4, delay: 0.5, ease: [0.23, 0.86, 0.39, 0.96] }}
              className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative w-[500px] h-[120px]"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
              </motion.div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gokhush-green/20 border border-gokhush-green mb-8 md:mb-12"
              >
                <div className="h-2 w-2 rounded-full bg-gokhush-green" />
                <span className="text-sm text-gokhush-green tracking-wide">
                  {content.hero.pilot_badge}
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
                  <span className="block text-white mb-2">
                    India&apos;s First
                  </span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gokhush-green via-white to-gokhush-green">
                    Zero-Commission
                  </span>
                  <span className="block text-white">
                    Ride Platform
                  </span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p 
                className="text-xl md:text-3xl text-gokhush-green font-semibold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                {content.hero.subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
              >
                {content.hero.description}
              </motion.p>
              
              {/* Key Metrics Row */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.3 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gokhush-green">0%</div>
                  <div className="text-gray-400">Commission</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gokhush-green">2,400+</div>
                  <div className="text-gray-400">Pilot Rides</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gokhush-green">25%</div>
                  <div className="text-gray-400">Avg Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gokhush-green">94%</div>
                  <div className="text-gray-400">Ad Engagement</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <button
                  onClick={scrollToNext}
                  className="px-8 py-4 bg-gokhush-cta text-gokhush-black font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  {content.hero.cta}
                </button>
                <button
                  className="px-8 py-4 border-2 border-gokhush-green text-gokhush-green hover:bg-gokhush-green hover:text-gokhush-black font-semibold rounded-lg transition-all duration-200"
                >
                  {content.hero.secondary_cta}
                </button>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                className="flex flex-col items-center text-gray-400"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-base sm:text-lg mb-2 sm:mb-3">Scroll to explore</span>
                <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.div>
            </div>
          </div>

          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default Hero
