'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Clock, DollarSign, Play, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

const RiderJourney = () => {
  const [step, setStep] = useState(0)
  const [isAdPlaying, setIsAdPlaying] = useState(false)
  const [priceDropped, setPriceDropped] = useState(false)

  const steps = [
    {
      title: "Book Your Ride",
      description: "Enter your destination and see the base price",
      price: 15.50,
      action: "Book Ride"
    },
    {
      title: "Watch Short Ad",
      description: "30-second ad plays during your ride",
      price: 8.25,
      action: "Watch Ad"
    },
    {
      title: "Save Money!",
      description: "Price drops significantly after watching ad",
      price: 8.25,
      action: "Try Again"
    }
  ]

  const currentStep = steps[step]

  const handleAction = () => {
    if (step === 0) {
      setStep(1)
      setTimeout(() => {
        setIsAdPlaying(true)
        setTimeout(() => {
          setIsAdPlaying(false)
          setPriceDropped(true)
          setStep(2)
        }, 3000)
      }, 1000)
    } else if (step === 2) {
      setStep(0)
      setPriceDropped(false)
    }
  }

  return (
    <div className="h-full bg-gray-50 p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Rider Experience</h3>
        <p className="text-gray-600">See how ads make your rides affordable</p>
      </div>

      <div className="space-y-6">
        {/* Progress Indicator */}
        <div className="flex justify-center space-x-2">
                  {steps.map((stepItem, index) => (
                    <div
                      key={`step-${index}`}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index <= step ? 'bg-primary-blue' : 'bg-gray-300'
                      }`}
                    />
                  ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {currentStep.title}
            </h4>
            <p className="text-gray-600 text-sm">
              {currentStep.description}
            </p>
          </div>

          {/* Price Display */}
          <div className="text-center mb-6">
            <div className="relative inline-block">
              <motion.div
                className="text-4xl font-bold text-gray-900"
                animate={priceDropped ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                ${currentStep.price.toFixed(2)}
              </motion.div>
              {priceDropped && (
                <motion.div
                  className="absolute -top-2 -right-2 text-green-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <CheckCircle className="w-6 h-6" />
                </motion.div>
              )}
            </div>
            {step === 1 && (
              <p className="text-sm text-gray-500 mt-2">
                Original price: ₹15.50
              </p>
            )}
          </div>

          {/* Ad Simulation */}
          <AnimatePresence>
            {isAdPlaying && (
            <motion.div
              className="bg-blue-600 text-white rounded-xl p-4 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
                <div className="flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span className="font-medium">Ad Playing...</span>
                </div>
                <div className="mt-2 text-sm opacity-90">
                  "Discover amazing local restaurants near you!"
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Button */}
          <Button
            onClick={handleAction}
            className="w-full"
            variant={step === 2 ? "secondary" : "primary"}
          >
            {currentStep.action}
          </Button>
        </div>

        {/* Features List */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>Location-based ads</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>30-second duration</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <DollarSign className="w-4 h-4 text-blue-600" />
            <span>Save up to 50%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RiderJourney
