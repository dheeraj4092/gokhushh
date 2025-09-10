'use client'

import { cn } from '@/lib/utils'

interface PhoneSimulatorProps {
  children: React.ReactNode
  className?: string
}

const PhoneSimulator = ({ children, className }: PhoneSimulatorProps) => {
  return (
    <div className={cn("relative mx-auto", className)}>
      {/* Phone Frame */}
      <div className="relative w-72 sm:w-80 h-[540px] sm:h-[600px] mx-auto">
        {/* Phone Body */}
        <div className="absolute inset-0 bg-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl">
          {/* Screen */}
          <div className="w-full h-full bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-4 sm:h-6 bg-gray-900 rounded-b-xl sm:rounded-b-2xl z-10" />
            
            {/* Screen Content */}
            <div className="w-full h-full bg-white overflow-hidden">
              {children}
            </div>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-0.5 sm:h-1 bg-white/30 rounded-full" />
      </div>
    </div>
  )
}

export default PhoneSimulator
