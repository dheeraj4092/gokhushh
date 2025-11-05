'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Clock, DollarSign, Play, CheckCircle, TrendingDown, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'

const RiderJourney = () => {
  const [step, setStep] = useState(0)
  const [isAdPlaying, setIsAdPlaying] = useState(false)
  const [priceDropped, setPriceDropped] = useState(false)
  const [adProgress, setAdProgress] = useState(0)

  const steps = [
    {
      title: "Book Your Ride",
      description: "Enter your destination and see the base price",
      price: 250,
      action: "Book Ride"
    },
    {
      title: "Watch Short Ad",
      description: "30-second ad plays - get rewarded for watching",
      price: 250,
      action: "Watch Ad"
    },
    {
      title: "Save Money!",
      description: "Price drops significantly after watching ad",
      price: 187.50,
      action: "Try Again"
    }
  ]

  const currentStep = steps[step]

  const handleAction = () => {
    if (step === 0) {
      setStep(1)
      setTimeout(() => {
        setIsAdPlaying(true)
        
        // Animate ad progress
        let progress = 0
        const interval = setInterval(() => {
          progress += 3.33
          setAdProgress(progress)
          
          if (progress >= 100) {
            clearInterval(interval)
            setTimeout(() => {
              setIsAdPlaying(false)
              setPriceDropped(true)
              setStep(2)
              setAdProgress(0)
            }, 300)
          }
        }, 100)
      }, 800)
    } else if (step === 2) {
      setStep(0)
      setPriceDropped(false)
      setAdProgress(0)
    }
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
          <Sparkles className="w-3.5 h-3.5 text-brand-green" />
          <span className="text-xs font-medium text-brand-green">Rider Experience</span>
        </motion.div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">See How Ads Work</h3>
        <p className="text-sm text-gray-600">Watch ads, save money on every ride</p>
      </div>

      <div className="space-y-5">
        {/* Progress Indicator - Enhanced */}
        <div className="flex justify-center items-center gap-2">
          {steps.map((stepItem, index) => (
            <div key={`progress-${index}`} className="flex items-center">
              <motion.div
                className={`relative flex items-center justify-center ${
                  index <= step ? 'text-brand-green' : 'text-gray-300'
                }`}
                initial={false}
                animate={{
                  scale: index === step ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-xs transition-all duration-300 ${
                    index < step
                      ? 'bg-brand-green text-white'
                      : index === step
                      ? 'bg-brand-green text-white ring-4 ring-brand-green/20'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {index < step ? <CheckCircle className="w-4 h-4" /> : index + 1}
                </div>
              </motion.div>
              {index < steps.length - 1 && (
                <div
                  className={`w-12 h-0.5 mx-1 transition-all duration-500 ${
                    index < step ? 'bg-brand-green' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Main Content Card */}
        <motion.div
          key={`step-${step}`}
          className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center mb-6">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              {currentStep.title}
            </h4>
            <p className="text-sm text-gray-600">
              {currentStep.description}
            </p>
          </div>

          {/* Price Display - Enhanced */}
          <div className="text-center mb-6 relative">
            <div className="inline-block relative">
              {/* Original price strikethrough */}
              {priceDropped && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xl text-gray-400 line-through"
                >
                  ₹{steps[0].price.toFixed(2)}
                </motion.div>
              )}

              <motion.div
                className={`text-5xl font-black ${
                  priceDropped ? 'text-brand-green' : 'text-gray-900'
                }`}
                animate={priceDropped ? { scale: [1, 1.15, 1] } : {}}
                transition={{ duration: 0.6, type: 'tween', ease: 'easeInOut' }}
              >
                ₹{currentStep.price.toFixed(2)}
              </motion.div>

              {/* Savings badge */}
              {priceDropped && (
                <motion.div
                  className="absolute -top-2 -right-12 bg-gradient-to-r from-brand-green to-brand-green-dark text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  <TrendingDown className="w-3 h-3 inline mr-1" />
                  25% OFF
                </motion.div>
              )}
            </div>

            {step === 1 && !isAdPlaying && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-gray-500 mt-3"
              >
                Watch ad to unlock discount
              </motion.p>
            )}
          </div>

          {/* Ad Simulation - Enhanced */}
          <AnimatePresence>
            {isAdPlaying && (
              <motion.div
                className="bg-gradient-to-br from-brand-blue to-blue-600 text-white rounded-2xl p-5 mb-6 overflow-hidden relative"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Play className="w-5 h-5" />
                      </motion.div>
                      <span className="font-bold text-sm">Ad Playing...</span>
                    </div>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {Math.floor((adProgress / 100) * 30)}s / 30s
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mb-3">
                    <motion.div
                      className="h-full bg-white rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${adProgress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <p className="text-sm font-medium mb-1">
                      🍕 Discover Amazing Local Restaurants
                    </p>
                    <p className="text-xs opacity-90">
                      &ldquo;Best pizza in town! 20% off for Gokhush riders&rdquo;
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Button - Enhanced */}
          <Button
            onClick={handleAction}
            className="w-full py-4 text-base font-bold shadow-lg hover:shadow-xl"
            variant={step === 2 ? "primary" : "primary"}
            disabled={isAdPlaying}
          >
            {isAdPlaying ? (
              <span className="flex items-center justify-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  ⏳
                </motion.div>
                Please wait...
              </span>
            ) : (
              currentStep.action
            )}
          </Button>
        </motion.div>

        {/* Features List - Enhanced */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-green" />
            How It Works
          </h4>
          <div className="space-y-3">
            {[
              { icon: MapPin, text: 'Location-based relevant ads', color: 'text-brand-blue' },
              { icon: Clock, text: 'Only 30 seconds per ride', color: 'text-brand-green' },
              { icon: DollarSign, text: 'Save up to 50% instantly', color: 'text-brand-green-dark' }
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={`feature-${idx}`}
                  className="flex items-center gap-3 text-sm text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <div className={`p-2 rounded-lg bg-gray-100 ${feature.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default RiderJourney
