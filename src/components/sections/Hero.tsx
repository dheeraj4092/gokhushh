'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { content } from '@/lib/constants'
import { useRef } from 'react'
import Image from 'next/image'

// ============================================
// LOGO PLACEMENT CONFIGURATION
// Change this value to switch between designs:
// 'watermark' - Large faint background logo
// 'corner' - Top-left corner positioned logo
// 'floating' - Animated floating logo with parallax
// ============================================
const LOGO_PLACEMENT: 'watermark' | 'corner' | 'floating' = 'watermark'

// Logo asset path - easy to configure
const LOGO_PATH = '/logo.png'

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })
  
  // Parallax transforms for floating logo
  const logoY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const logoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollToNext = () => {
    const nextSection = document.getElementById('story-cards')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={sectionRef} className="min-h-screen relative bg-[#030303]">
      {/* Geometric Background with Custom Content */}
      <div className="absolute inset-0">
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
          
          {/* ============================================
              OPTION 1: Logo as Watermark Background
              Large, centered, very low opacity
              ============================================ */}
          {LOGO_PLACEMENT === 'watermark' && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
              >
                <Image
                  src={LOGO_PATH}
                  alt=""
                  fill
                  className="object-contain opacity-[0.03] blur-[1px]"
                  aria-hidden="true"
                  priority
                />
              </motion.div>
            </motion.div>
          )}

          {/* ============================================
              OPTION 2: Logo in Top-Left Corner
              Clean, professional positioning
              ============================================ */}
          {LOGO_PLACEMENT === 'corner' && (
            <motion.div
              className="absolute top-6 left-6 md:top-8 md:left-8 lg:top-10 lg:left-10 z-20"
              initial={{ opacity: 0, x: -20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gokhush-green/20 blur-xl rounded-full" />
                <Image
                  src={LOGO_PATH}
                  alt="Go Khush Logo"
                  width={120}
                  height={48}
                  className="relative h-10 md:h-12 lg:h-14 w-auto drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                  priority
                />
              </motion.div>
            </motion.div>
          )}

          {/* ============================================
              OPTION 3: Floating Logo with Parallax
              Creative, modern, animated
              ============================================ */}
          {LOGO_PLACEMENT === 'floating' && (
            <>
              {/* Main floating logo - top right */}
              <motion.div
                className="absolute top-[15%] right-[5%] md:right-[10%] z-10 pointer-events-none"
                style={{ y: logoY, scale: logoScale, opacity: logoOpacity }}
                initial={{ opacity: 0, y: -50, rotate: -10 }}
                animate={{ opacity: 0.15, y: 0, rotate: 5 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [5, 8, 5]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative w-[150px] h-[60px] md:w-[200px] md:h-[80px] lg:w-[250px] lg:h-[100px]"
                >
                  <Image
                    src={LOGO_PATH}
                    alt=""
                    fill
                    className="object-contain drop-shadow-[0_0_30px_rgba(34,197,94,0.4)]"
                    aria-hidden="true"
                  />
                </motion.div>
              </motion.div>

              {/* Secondary floating logo - bottom left */}
              <motion.div
                className="absolute bottom-[20%] left-[5%] md:left-[8%] z-10 pointer-events-none"
                initial={{ opacity: 0, y: 50, rotate: 10 }}
                animate={{ opacity: 0.1, y: 0, rotate: -8 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [-8, -5, -8]
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative w-[100px] h-[40px] md:w-[150px] md:h-[60px]"
                >
                  <Image
                    src={LOGO_PATH}
                    alt=""
                    fill
                    className="object-contain blur-[0.5px]"
                    aria-hidden="true"
                  />
                </motion.div>
              </motion.div>
            </>
          )}

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
              {/* Center Logo - Shows when corner or floating placement is active */}
              {LOGO_PLACEMENT !== 'corner' && (
                <motion.div 
                  className="flex justify-center mb-8 md:mb-12"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gokhush-green/30 blur-2xl rounded-full" />
                    <Image
                      src={LOGO_PATH}
                      alt="Go Khush Logo"
                      width={200}
                      height={80}
                      className="relative h-16 md:h-20 w-auto drop-shadow-[0_0_25px_rgba(34,197,94,0.4)]"
                      priority
                    />
                  </motion.div>
                </motion.div>
              )}
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
