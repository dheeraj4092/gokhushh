'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Car, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'

const DriverDashboard = () => {
  const [hasRequest, setHasRequest] = useState(false)
  const [tripInProgress, setTripInProgress] = useState(false)
  const [earnings, setEarnings] = useState(0)
  const [tripDistance, setTripDistance] = useState(0)

  useEffect(() => {
    // Simulate new ride request after 3 seconds
    const timer = setTimeout(() => {
      setHasRequest(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleAcceptRide = () => {
    setHasRequest(false)
    setTripInProgress(true)
    
    // Simulate trip progress
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setTripDistance(progress)
      
      if (progress >= 100) {
        clearInterval(interval)
        setTripInProgress(false)
        setEarnings(prev => prev + 12.50) // Driver keeps 100%
      }
    }, 200)
  }

  const resetSimulation = () => {
    setHasRequest(false)
    setTripInProgress(false)
    setEarnings(0)
    setTripDistance(0)
  }

  return (
    <div className="h-full bg-gray-50 p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Driver Dashboard</h3>
        <p className="text-gray-600">See how you keep 100% of earnings</p>
      </div>

      <div className="space-y-6">
        {/* Earnings Display */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Today&apos;s Earnings
            </h4>
            <div className="text-3xl font-bold text-brand-green mb-2">
              ₹{earnings.toFixed(2)}
            </div>
            <p className="text-sm text-gray-600">
              You keep 100% - no platform fees!
            </p>
          </div>
        </div>

        {/* Ride Request Notification */}
        <AnimatePresence>
          {hasRequest && (
            <motion.div
              className="bg-blue-600 text-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="text-center">
                <Car className="w-8 h-8 mx-auto mb-3" />
                <h4 className="text-lg font-semibold mb-2">New Ride Request!</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Distance:</span>
                    <span>2.3 miles</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Earnings:</span>
                    <span className="font-semibold">₹12.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform Fee:</span>
                    <span className="text-green-300">₹0.00</span>
                  </div>
                </div>
                <Button
                  onClick={handleAcceptRide}
                  className="w-full mt-4 bg-white text-blue-600 hover:bg-gray-100"
                >
                  Accept Ride
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trip in Progress */}
        <AnimatePresence>
          {tripInProgress && (
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Trip in Progress
                </h4>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <motion.div
                    className="bg-brand-green h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${tripDistance}%` }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>Pickup</span>
                  <span>Destination</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-green-500">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Estimated arrival: 5 min</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Comparison */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            vs Traditional Platforms
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Your Platform:</span>
              <span className="font-semibold text-brand-green">₹12.50</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Uber/Lyft:</span>
              <span className="font-semibold text-gray-500">₹8.75</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-200">
              <span className="text-sm font-semibold text-gray-900">Extra Earnings:</span>
              <span className="font-bold text-green-500">+₹3.75</span>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <Button
          onClick={resetSimulation}
          variant="outline"
          className="w-full"
        >
          Reset Simulation
        </Button>
      </div>
    </div>
  )
}

export default DriverDashboard
