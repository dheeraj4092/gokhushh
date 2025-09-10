'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Smartphone, Car, Building2, Play } from 'lucide-react'
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
    <section id="interactive-simulations" className="py-16 sm:py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Try It Yourself
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our platform through interactive simulations. See how it works for riders, drivers, and advertisers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Simulation Tabs */}
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {simulations.map((simulation) => {
                const Icon = simulation.icon
                const isActive = activeSimulation === simulation.id
                
                return (
                  <motion.button
                    key={simulation.id}
                    onClick={() => setActiveSimulation(simulation.id)}
                    className={`p-3 sm:p-4 rounded-lg sm:rounded-xl text-left transition-all duration-300 ${
                      isActive
                        ? (() => {
                            switch (simulation.color) {
                              case 'brand-green':
                                return 'bg-brand-green text-brand-black shadow-lg'
                              case 'brand-green-dark':
                                return 'bg-brand-green-dark text-white shadow-lg'
                              default:
                                return 'bg-brand-green-light text-brand-black shadow-lg'
                            }
                          })()
                        : 'bg-brand-gray text-gray-300 hover:bg-brand-green-muted'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3" />
                    <h3 className="font-semibold text-xs sm:text-sm mb-1">
                      {simulation.title}
                    </h3>
                    <p className="text-xs opacity-80">
                      {simulation.description}
                    </p>
                  </motion.button>
                )
              })}
            </div>

            {/* Simulation Info */}
            <motion.div
              key={activeSimulation}
              className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                {simulations.find(s => s.id === activeSimulation)?.title}
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                {simulations.find(s => s.id === activeSimulation)?.description}
              </p>
              
              {activeSimulation === 'rider' && (
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                  <p>• Watch 30-second ads during your ride</p>
                  <p>• Save up to 50% on ride costs</p>
                  <p>• Earn credits for future rides</p>
                  <p>• Discover local businesses</p>
                </div>
              )}
              
              {activeSimulation === 'driver' && (
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                  <p>• Keep 100% of your earnings</p>
                  <p>• Higher demand from affordable rides</p>
                  <p>• Flexible schedule and work-life balance</p>
                  <p>• Real-time earnings tracking</p>
                </div>
              )}
              
              {activeSimulation === 'advertiser' && (
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                  <p>• Target by location and demographics</p>
                  <p>• High engagement during rides</p>
                  <p>• Measurable ROI and performance</p>
                  <p>• Support local business growth</p>
                </div>
              )}
            </motion.div>

            {/* CTA */}
            <div className="text-center">
              <button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-primary-blue text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                Watch Full Demo
              </button>
            </div>
          </div>

          {/* Phone Simulator */}
          <div className="flex justify-center">
            <motion.div
              key={activeSimulation}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <PhoneSimulator>
                {renderSimulation()}
              </PhoneSimulator>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join our platform and experience the future of transportation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Download App
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InteractiveSimulations
