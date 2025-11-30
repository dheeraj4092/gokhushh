'use client'

import { motion } from 'framer-motion'
import { Maximize2, Minimize2 } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface PhoneSimulatorProps {
  children: React.ReactNode
  className?: string
  allowFullscreen?: boolean
  deviceType?: 'iphone-14-pro' | 'pixel-7'
}

const PhoneSimulator = ({ 
  children, 
  className,
  allowFullscreen = true,
  deviceType = 'iphone-14-pro'
}: PhoneSimulatorProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false) // Default to fullscreen

  // iPhone 14 Pro dimensions: 393×852px (19.5:9 ratio)
  // Scaled down for web display
  const dimensions = deviceType === 'iphone-14-pro' 
    ? {
        width: 'w-[280px] md:w-[320px] lg:w-[340px]',
        height: 'h-[574px] md:h-[656px] lg:h-[697px]',
        notchWidth: 'w-[100px]',
        notchHeight: 'h-[26px]',
        borderRadius: 'rounded-[42px]',
        screenRadius: 'rounded-[38px]',
        bezelSize: 'p-[3px]'
      }
    : {
        width: 'w-[280px] md:w-[320px] lg:w-[340px]',
        height: 'h-[574px] md:h-[656px] lg:h-[697px]',
        notchWidth: 'w-[85px]',
        notchHeight: 'h-[22px]',
        borderRadius: 'rounded-[38px]',
        screenRadius: 'rounded-[35px]',
        bezelSize: 'p-[3px]'
      }

  return (
    <>
      {/* Normal Phone Simulator */}
      <motion.div 
        className={cn("relative mx-auto group", className)}
        animate={isFullscreen ? { scale: 0.95, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Fullscreen Toggle Button */}
        {allowFullscreen && !isFullscreen && (
          <motion.button
            onClick={() => setIsFullscreen(true)}
            className="absolute -top-12 right-0 z-20 px-4 py-2 bg-brand-green text-brand-black rounded-lg font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 hover:bg-brand-green-dark"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Enter fullscreen mode"
          >
            <Maximize2 className="w-4 h-4" />
            Fullscreen
          </motion.button>
        )}

        {/* Phone Frame */}
        <div className={cn(
          "relative mx-auto transition-all duration-300",
          dimensions.width,
          dimensions.height
        )}>
          {/* Outer shadow and glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 via-transparent to-brand-blue/20 rounded-[54px] blur-2xl opacity-50" />
          
          {/* Phone Body - Realistic metal frame */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black",
            dimensions.borderRadius,
            dimensions.bezelSize,
            "shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)]",
            "before:absolute before:inset-0 before:rounded-[50px] before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-50"
          )}>
            {/* Screen Bezel */}
            <div className={cn(
              "w-full h-full bg-black relative overflow-hidden",
              dimensions.screenRadius
            )}>
              {/* Status Bar Background */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/40 to-transparent z-20 pointer-events-none" />
              
              {/* Dynamic Island / Notch */}
              <motion.div 
                className={cn(
                  "absolute top-2 left-1/2 transform -translate-x-1/2 bg-black",
                  dimensions.notchWidth,
                  dimensions.notchHeight,
                  "rounded-full z-30 shadow-lg border border-gray-800/50"
                )}
                initial={{ scaleX: 1 }}
                animate={{ scaleX: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
              >
                {/* Camera and sensors - centered */}
                <div className="absolute inset-0 flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-900 border border-gray-700" />
                  <div className="w-2 h-2 rounded-full bg-blue-900/30 border border-blue-800/50" />
                </div>
              </motion.div>

              {/* Status Bar Icons */}
              <div className="absolute top-3 left-4 right-4 flex justify-between items-center z-20 text-white text-xs font-medium">
                <div className="flex items-center gap-1">
                  <span className="opacity-90">9:41</span>
                </div>
                <div className="flex items-center gap-0.5 opacity-90">
                  {/* Signal bars */}
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4].map((bar) => (
                      <div
                        key={`signal-${bar}`}
                        className="w-1 bg-white rounded-full"
                        style={{ height: `${bar * 2 + 2}px` }}
                      />
                    ))}
                  </div>
                  {/* WiFi icon */}
                  <svg className="w-3.5 h-3.5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 13.882l7.997-7.998A11.314 11.314 0 0010 2c-3.022 0-5.77 1.116-7.997 3.884z" />
                  </svg>
                  {/* Battery icon */}
                  <svg className="w-6 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 12">
                    <rect x="1" y="2" width="18" height="8" rx="2" strokeWidth="1.5" />
                    <rect x="3" y="4" width="14" height="4" fill="currentColor" />
                    <path d="M19 5v2" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              
              {/* Screen Content with proper scrolling */}
              <div className="w-full h-full bg-white overflow-y-auto overflow-x-hidden scrollbar-hide pt-12">
                {children}
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full z-20" />
            </div>
          </div>
          
          {/* Side Buttons - Volume and Power */}
          <div className="absolute -left-[2px] top-[120px] w-[3px] h-[50px] bg-gray-700 rounded-l-sm shadow-inner" />
          <div className="absolute -left-[2px] top-[180px] w-[3px] h-[50px] bg-gray-700 rounded-l-sm shadow-inner" />
          <div className="absolute -right-[2px] top-[150px] w-[3px] h-[70px] bg-gray-700 rounded-r-sm shadow-inner" />
        </div>
      </motion.div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Close Button - Moved to top left, away from phone */}
          <motion.button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 left-6 z-[110] px-4 py-2 bg-gokhush-green/10 text-gokhush-green border border-gokhush-green/30 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-gokhush-green/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Exit fullscreen mode"
          >
            <Minimize2 className="w-4 h-4" />
            Exit Fullscreen
          </motion.button>

          {/* Fullscreen Phone */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="relative w-[340px] h-[697px] max-w-[90vw] max-h-[90vh]">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/30 via-transparent to-brand-blue/30 rounded-[46px] blur-3xl" />
              
              {/* Phone Body */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[42px] p-[3px] shadow-[0_30px_80px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.1)]">
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
                            key={`fullscreen-signal-${bar}`}
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
                  
                  {/* Screen Content */}
                  <div className="w-full h-full bg-white overflow-y-auto overflow-x-hidden scrollbar-hide pt-12">
                    {children}
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
        </motion.div>
      )}
    </>
  )
}

export default PhoneSimulator
