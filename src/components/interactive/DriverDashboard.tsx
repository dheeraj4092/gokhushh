'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Car, Clock, TrendingUp, CheckCircle, Sparkles, IndianRupee } from 'lucide-react'
import Button from '@/components/ui/Button'

const DriverDashboard = () => {
  const [hasRequest, setHasRequest] = useState(false)
  const [tripInProgress, setTripInProgress] = useState(false)
  const [earnings, setEarnings] = useState(0)
  const [tripDistance, setTripDistance] = useState(0)
  const [completedTrips, setCompletedTrips] = useState(0)

  useEffect(() => {
    // Simulate new ride request after 2 seconds
    const timer = setTimeout(() => {
      setHasRequest(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleAcceptRide = () => {
    setHasRequest(false)
    setTripInProgress(true)
    
    // Simulate trip progress
    let progress = 0
    const interval = setInterval(() => {
      progress += 5
      setTripDistance(progress)
      
      if (progress >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          setTripInProgress(false)
          setEarnings(prev => prev + 187.50) // Driver keeps 100%
          setCompletedTrips(prev => prev + 1)
        }, 500)
      }
    }, 150)
  }

  const resetSimulation = () => {
    setHasRequest(false)
    setTripInProgress(false)
    setEarnings(0)
    setTripDistance(0)
    setCompletedTrips(0)
    
    // Restart simulation
    setTimeout(() => {
      setHasRequest(true)
    }, 2000)
  }

  return (
    <div className="h-full bg-gradient-to-br from-gray-50 to-white p-6 overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 mb-3"
        >
          <Car className="w-3.5 h-3.5 text-brand-green" />
          <span className="text-xs font-medium text-brand-green">Driver Dashboard</span>
        </motion.div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">100% Earnings</h3>
        <p className="text-sm text-gray-600">Zero platform commission</p>
      </div>

      <div className="space-y-5">
        {/* Earnings Display - Enhanced */}
        <motion.div
          className="bg-gradient-to-br from-brand-green to-brand-green-dark rounded-3xl p-6 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-semibold text-brand-black/70">
                Today&apos;s Earnings
              </h4>
              <div className="px-2 py-1 bg-brand-black/20 rounded-lg text-xs font-bold text-brand-black">
                {completedTrips} trips
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-3">
              <IndianRupee className="w-8 h-8 text-brand-black" />
              <motion.div
                className="text-5xl font-black text-brand-black"
                key={earnings}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {earnings.toFixed(2)}
              </motion.div>
            </div>

            <div className="flex items-center gap-2 text-brand-black/80">
              <CheckCircle className="w-4 h-4" />
              <p className="text-sm font-medium">
                You keep 100% - no platform fees!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Ride Request Notification - Enhanced */}
        <AnimatePresence>
          {hasRequest && (
            <motion.div
              className="bg-gradient-to-br from-brand-blue to-blue-600 text-white rounded-3xl p-6 shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              {/* Pulsing background */}
              <motion.div
                className="absolute inset-0 bg-white/10"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity, type: 'tween', ease: 'easeInOut' }}
                    className="p-3 bg-white/20 rounded-full"
                  >
                    <Car className="w-8 h-8" />
                  </motion.div>
                </div>

                <h4 className="text-xl font-bold mb-4 text-center">New Ride Request!</h4>
                
                <div className="space-y-3 mb-5">
                  <div className="flex justify-between items-center bg-white/10 rounded-xl p-3">
                    <span className="text-sm opacity-90">Distance</span>
                    <span className="font-bold">5.2 km</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-xl p-3">
                    <span className="text-sm opacity-90">Estimated Time</span>
                    <span className="font-bold">12 minutes</span>
                  </div>
                  <div className="flex justify-between items-center bg-brand-green/20 rounded-xl p-3 ring-2 ring-brand-green">
                    <span className="text-sm font-semibold">Your Earnings</span>
                    <span className="text-xl font-black">₹187.50</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-xl p-3">
                    <span className="text-sm opacity-90">Platform Fee</span>
                    <span className="font-bold text-brand-green">₹0.00</span>
                  </div>
                </div>

                <Button
                  onClick={handleAcceptRide}
                  className="w-full bg-white text-brand-blue hover:bg-gray-100 font-bold py-4 shadow-xl"
                  animated={true}
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Accept Ride
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trip in Progress - Enhanced */}
        <AnimatePresence>
          {tripInProgress && (
            <motion.div
              className="bg-white rounded-3xl p-6 shadow-xl border-2 border-brand-green"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-5">
                <motion.div
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block mb-3"
                >
                  <Car className="w-12 h-12 text-brand-green" />
                </motion.div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Trip in Progress
                </h4>
                <p className="text-sm text-gray-600">
                  {Math.floor(tripDistance)}% complete
                </p>
              </div>
              
              {/* Enhanced Progress Bar */}
              <div className="mb-5">
                <div className="relative w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-brand-green to-brand-green-dark rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${tripDistance}%` }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
                
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-brand-green" />
                    Pickup
                  </span>
                  <span className="flex items-center gap-1">
                    Destination
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-brand-green bg-brand-green/10 rounded-xl p-3">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-semibold">Est. arrival: 8 min</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Comparison Card - Enhanced */}
        {!hasRequest && !tripInProgress && earnings > 0 && (
          <motion.div
            className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-brand-green" />
              vs Traditional Platforms
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-brand-green/10 rounded-xl">
                <span className="text-sm font-medium text-gray-700">Gokhush (You):</span>
                <span className="text-lg font-black text-brand-green">₹187.50</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                <span className="text-sm font-medium text-gray-700">Uber/Ola (30% cut):</span>
                <span className="text-lg font-bold text-gray-500 line-through">₹131.25</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t-2 border-brand-green">
                <span className="text-sm font-bold text-gray-900">Extra in Your Pocket:</span>
                <span className="text-xl font-black text-brand-green">+₹56.25</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Benefits Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-green" />
            Why Drivers Love Us
          </h4>
          <div className="space-y-2">
            {[
              '100% of earnings, zero commission',
              'Higher ride demand = more income',
              'Flexible schedule on your terms'
            ].map((benefit, idx) => (
              <motion.div
                key={`benefit-${idx}`}
                className="flex items-center gap-2 text-xs text-gray-700"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
              >
                <CheckCircle className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reset Button */}
        {!hasRequest && !tripInProgress && (
          <Button
            onClick={resetSimulation}
            variant="outline"
            className="w-full py-4 font-bold"
          >
            Reset Simulation
          </Button>
        )}
      </div>
    </div>
  )
}

export default DriverDashboard
