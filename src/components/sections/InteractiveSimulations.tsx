'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Smartphone, Car, Building2, Play, Sparkles } from 'lucide-react'
import PhoneSimulator from '@/components/interactive/PhoneSimulator'
import RiderJourney from '@/components/interactive/RiderJourney'
import DriverDashboard from '@/components/interactive/DriverDashboard'
import AdvertiserPortal from '@/components/interactive/AdvertiserPortal'

const InteractiveSimulations = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeSimulation, setActiveSimulation] = useState<'rider' | 'driver' | 'advertiser'>('rider')

  const simulations: Array<{
    id: 'rider' | 'driver' | 'advertiser'
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    color: string
  }> = [
    {
      id: 'rider',
      title: 'Rider Experience',
      description: 'See how ads make your rides affordable',
      icon: Smartphone,
      color: 'brand-green'
    },
    {
      id: 'driver',
      title: 'Driver Dashboard',
      description: 'Keep 100% of your earnings',
      icon: Car,
      color: 'brand-green-dark'
    },
    {
      id: 'advertiser',
      title: 'Advertiser Portal',
      description: 'Target customers with precision',
      icon: Building2,
      color: 'brand-green-light'
    }
  ]

  const renderSimulation = () => {
    switch (activeSimulation) {
      case 'rider':
        return <RiderJourney />
      case 'driver':
        return <DriverDashboard />
      case 'advertiser':
        return <AdvertiserPortal />
      default:
        return <RiderJourney />
    }
  }

  return (
    <section id="interactive-simulations" className="py-8 sm:py-12 bg-brand-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-brand-green" />
            <span className="text-sm font-medium text-brand-green">Interactive Demo</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Experience It{' '}
            <span className="bg-gradient-to-r from-brand-green to-brand-green-light bg-clip-text text-transparent">
              Yourself
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Interactive simulations showing how our platform works for riders, drivers, and advertisers
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,auto] gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Simulation Tabs */}
          <div className="space-y-6 lg:space-y-8">
            {/* Tabs with enhanced design */}
            <div className="grid grid-cols-1 gap-4">
              {simulations.map((simulation, index) => {
                const Icon = simulation.icon
                const isActive = activeSimulation === simulation.id
                
                return (
                  <motion.button
                    key={simulation.id}
                    onClick={() => setActiveSimulation(simulation.id)}
                    className={`relative p-5 rounded-2xl text-left transition-all duration-300 overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-br from-brand-green to-brand-green-dark text-brand-black shadow-[0_10px_40px_rgba(0,255,136,0.3)] ring-2 ring-brand-green/50'
                        : 'bg-brand-gray/50 text-gray-300 hover:bg-brand-gray hover:shadow-lg backdrop-blur-sm border border-gray-800'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={`Switch to ${simulation.title}`}
                    role="tab"
                    aria-selected={isActive}
                  >
                    {/* Glow effect for active tab */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-brand-green-light/20 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      />
                    )}

                    <div className="relative z-10 flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${
                        isActive 
                          ? 'bg-brand-black/20' 
                          : 'bg-brand-green/10'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          isActive ? 'text-brand-black' : 'text-brand-green'
                        }`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`font-bold text-base mb-1 ${
                          isActive ? 'text-brand-black' : 'text-white'
                        }`}>
                          {simulation.title}
                        </h3>
                        <p className={`text-sm ${
                          isActive ? 'text-brand-black/70' : 'text-gray-400'
                        }`}>
                          {simulation.description}
                        </p>
                      </div>

                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute right-5 top-1/2 -translate-y-1/2"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-brand-black" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Enhanced Features Card */}
            <motion.div
              key={`features-${activeSimulation}`}
              className="bg-gradient-to-br from-brand-gray to-brand-dark rounded-2xl p-6 border border-brand-green/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-green" />
                Key Features
              </h3>
              
              {activeSimulation === 'rider' && (
                <div className="space-y-3">
                  {[
                    { icon: '🎬', text: 'Watch 30-second ads during your ride' },
                    { icon: '💰', text: 'Save up to 50% on ride costs' },
                    { icon: '🎁', text: 'Earn credits for future rides' },
                    { icon: '🏪', text: 'Discover local businesses' }
                  ].map((feature, idx) => (
                    <motion.div
                      key={`rider-feature-${idx}`}
                      className="flex items-start gap-3 text-sm text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <span className="text-lg">{feature.icon}</span>
                      <span>{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              )}
              
              {activeSimulation === 'driver' && (
                <div className="space-y-3">
                  {[
                    { icon: '💯', text: 'Keep 100% of your earnings' },
                    { icon: '📈', text: 'Higher demand from affordable rides' },
                    { icon: '⏰', text: 'Flexible schedule and work-life balance' },
                    { icon: '📊', text: 'Real-time earnings tracking' }
                  ].map((feature, idx) => (
                    <motion.div
                      key={`driver-feature-${idx}`}
                      className="flex items-start gap-3 text-sm text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <span className="text-lg">{feature.icon}</span>
                      <span>{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              )}
              
              {activeSimulation === 'advertiser' && (
                <div className="space-y-3">
                  {[
                    { icon: '🎯', text: 'Target by location and demographics' },
                    { icon: '📱', text: 'High engagement during rides' },
                    { icon: '📉', text: 'Measurable ROI and performance' },
                    { icon: '🚀', text: 'Support local business growth' }
                  ].map((feature, idx) => (
                    <motion.div
                      key={`advertiser-feature-${idx}`}
                      className="flex items-start gap-3 text-sm text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <span className="text-lg">{feature.icon}</span>
                      <span>{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Enhanced CTA */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <button className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl font-semibold hover:shadow-[0_10px_30px_rgba(0,102,255,0.4)] transition-all duration-300 text-sm">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Full Demo
              </button>
            </motion.div>
          </div>

          {/* Phone Simulator - Enhanced */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              key={activeSimulation}
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <PhoneSimulator allowFullscreen={true}>
                {renderSimulation()}
              </PhoneSimulator>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="relative bg-gradient-to-br from-brand-blue via-blue-600 to-brand-green rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-[0_20px_60px_rgba(0,102,255,0.3)]">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-green/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Join our platform and experience the future of transportation with zero commissions
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <motion.button
                  className="px-8 py-4 bg-white text-brand-blue rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download App
                </motion.button>
                <motion.button
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-brand-blue transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Sales
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InteractiveSimulations
