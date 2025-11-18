'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const PhoneTransition = () => {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Phone animations based on scroll
  const phoneScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.5])
  const phoneY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 300])
  const phoneX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, typeof window !== 'undefined' && window.innerWidth > 1024 ? 300 : 0])
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.8, 0])
  
  // Content opacity - fades out quickly
  const contentOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="h-[200vh] relative bg-[#030303]"
    >
      {/* Text at the very start of section - before sticky content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute top-24 left-0 right-0 text-center z-30 px-4 pointer-events-none"
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Experience <span className="text-gokhush-green">Gokhush</span>
        </motion.h2>
      </motion.div>

      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#050505] to-brand-black" />
        
        {/* Animated phone mockup */}
        <motion.div
          style={{
            scale: phoneScale,
            y: phoneY,
            x: phoneX,
            opacity: phoneOpacity,
          }}
          className="relative z-10"
        >
          {/* Phone Frame */}
          <div className="relative w-[340px] h-[697px]">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-gokhush-green/30 via-transparent to-gokhush-green/20 rounded-[46px] blur-3xl" />
            
            {/* Phone Body */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[42px] p-[3px] shadow-[0_30px_80px_rgba(0,255,136,0.3)]">
              <div className="w-full h-full bg-black rounded-[38px] relative overflow-hidden">
                {/* Status Bar Background */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/40 to-transparent z-20 pointer-events-none" />
                
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[100px] h-[26px] bg-black rounded-full z-30 shadow-lg border border-gray-800/50">
                  <div className="absolute inset-0 flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900 border border-gray-700" />
                    <div className="w-2 h-2 rounded-full bg-blue-900/30 border border-blue-800/50" />
                  </div>
                </div>

                {/* Status Bar Icons */}
                <div className="absolute top-3 left-4 right-4 flex justify-between items-center z-20 text-white text-xs font-medium">
                  <div className="flex items-center gap-1">
                    <span className="opacity-90">9:41</span>
                  </div>
                  <div className="flex items-center gap-1 opacity-90">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4].map((bar) => (
                        <div
                          key={`signal-${bar}`}
                          className="w-1 bg-white rounded-full"
                          style={{ height: `${bar * 2 + 2}px` }}
                        />
                      ))}
                    </div>
                    <svg className="w-3.5 h-3.5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 13.882l7.997-7.998A11.314 11.314 0 0010 2c-3.022 0-5.77 1.116-7.997 3.884z" />
                    </svg>
                    <svg className="w-6 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 12">
                      <rect x="1" y="2" width="18" height="8" rx="2" strokeWidth="1.5" />
                      <rect x="3" y="4" width="14" height="4" fill="currentColor" />
                      <path d="M19 5v2" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                
                {/* Screen Content - Gokhush App Preview */}
                <div className="w-full h-full bg-gradient-to-br from-brand-black via-gokhush-dark to-brand-black overflow-hidden pt-12">
                  <div className="flex flex-col items-center justify-center h-full px-8">
                    {/* Gokhush Logo/Brand */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="text-center mb-8"
                    >
                      <div className="text-6xl font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gokhush-green to-white">
                          Gokhush
                        </span>
                      </div>
                      <div className="text-gokhush-green text-lg font-medium">
                        Zero Commission Rides
                      </div>
                    </motion.div>

                    {/* Animated Stats */}
                    <motion.div 
                      className="grid grid-cols-2 gap-4 w-full max-w-xs"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <div className="bg-gokhush-green/10 border border-gokhush-green/20 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-gokhush-green">0%</div>
                        <div className="text-xs text-gray-400 mt-1">Commission</div>
                      </div>
                      <div className="bg-gokhush-green/10 border border-gokhush-green/20 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-gokhush-green">2.4K+</div>
                        <div className="text-xs text-gray-400 mt-1">Rides</div>
                      </div>
                      <div className="bg-gokhush-green/10 border border-gokhush-green/20 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-gokhush-green">25%</div>
                        <div className="text-xs text-gray-400 mt-1">Savings</div>
                      </div>
                      <div className="bg-gokhush-green/10 border border-gokhush-green/20 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-gokhush-green">94%</div>
                        <div className="text-xs text-gray-400 mt-1">Engagement</div>
                      </div>
                    </motion.div>

                    {/* Pulsing indicator */}
                    <motion.div
                      className="mt-12"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-3 h-3 rounded-full bg-gokhush-green shadow-lg shadow-gokhush-green/50" />
                    </motion.div>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full z-20" />
              </div>
            </div>
            
            {/* Side Buttons */}
            <div className="absolute -left-[2px] top-[120px] w-[3px] h-[50px] bg-gray-700 rounded-l-sm shadow-inner" />
            <div className="absolute -left-[2px] top-[180px] w-[3px] h-[50px] bg-gray-700 rounded-l-sm shadow-inner" />
            <div className="absolute -right-[2px] top-[150px] w-[3px] h-[70px] bg-gray-700 rounded-r-sm shadow-inner" />
          </div>
        </motion.div>

        {/* Minimal scroll indicator at bottom */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-gokhush-green/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PhoneTransition
