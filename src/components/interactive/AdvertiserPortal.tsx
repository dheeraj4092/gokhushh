'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Target, DollarSign, Users, BarChart3, TrendingUp, Sparkles, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'

const AdvertiserPortal = () => {
  const [campaignActive, setCampaignActive] = useState(false)
  const [budget, setBudget] = useState(1000)
  const [radius, setRadius] = useState(3)
  const [impressions, setImpressions] = useState(0)
  const [clicks, setClicks] = useState(0)

  const handleStartCampaign = () => {
    setCampaignActive(true)
    
    // Simulate impressions and clicks growing
    let impCount = 0
    let clickCount = 0
    const interval = setInterval(() => {
      impCount += Math.floor(Math.random() * 8) + 3
      clickCount += Math.floor(Math.random() * 3)
      setImpressions(impCount)
      setClicks(clickCount)
      
      if (impCount >= 250) {
        clearInterval(interval)
      }
    }, 150)
  }

  const resetCampaign = () => {
    setCampaignActive(false)
    setImpressions(0)
    setClicks(0)
  }

  const estimatedImpressions = Math.floor(budget * 0.4)
  const estimatedClicks = Math.floor(estimatedImpressions * 0.15)
  const ctr = impressions > 0 ? ((clicks / impressions) * 100).toFixed(1) : '0.0'

  return (
    <div className="h-full bg-gradient-to-br from-gray-50 to-white p-6 overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-3"
        >
          <Building2 className="w-3.5 h-3.5 text-brand-blue" />
          <span className="text-xs font-medium text-brand-blue">Advertiser Portal</span>
        </motion.div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">Launch Campaign</h3>
        <p className="text-sm text-gray-600">Target riders with precision ads</p>
      </div>

      <div className="space-y-5">
        {/* Campaign Setup Card - Enhanced */}
        <motion.div
          className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h4 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
            <Target className="w-5 h-5 text-brand-blue" />
            Campaign Setup
          </h4>
          
          <div className="space-y-5">
            {/* Budget Slider - Enhanced */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-700">
                  Daily Budget
                </label>
                <div className="flex items-center gap-1 px-3 py-1 bg-brand-blue/10 rounded-lg">
                  <DollarSign className="w-4 h-4 text-brand-blue" />
                  <span className="text-base font-bold text-brand-blue">₹{budget}</span>
                </div>
              </div>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-gray-200 to-brand-blue/30 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                disabled={campaignActive}
                style={{
                  background: `linear-gradient(to right, #0066ff 0%, #0066ff ${((budget - 500) / (5000 - 500)) * 100}%, #e5e7eb ${((budget - 500) / (5000 - 500)) * 100}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹500</span>
                <span className="text-brand-blue font-medium">~{estimatedImpressions} impressions</span>
                <span>₹5000</span>
              </div>
            </div>

            {/* Radius Slider - Enhanced */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-700">
                  Target Radius
                </label>
                <div className="flex items-center gap-1 px-3 py-1 bg-brand-green/10 rounded-lg">
                  <MapPin className="w-4 h-4 text-brand-green" />
                  <span className="text-base font-bold text-brand-green">{radius} km</span>
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                disabled={campaignActive}
                style={{
                  background: `linear-gradient(to right, #00ff88 0%, #00ff88 ${((radius - 1) / (10 - 1)) * 100}%, #e5e7eb ${((radius - 1) / (10 - 1)) * 100}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 km</span>
                <span className="text-brand-green font-medium">Coverage area</span>
                <span>10 km</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Visualization - Enhanced */}
        <motion.div
          className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-brand-green" />
            Target Area
          </h4>
          
          <div className="relative h-40 bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 rounded-2xl overflow-hidden border-2 border-gray-100">
            {/* Map grid pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-8 grid-rows-8 h-full">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={`grid-${i}`} className="border border-gray-400" />
                ))}
              </div>
            </div>

            {/* Center marker with pulsing effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="relative flex items-center justify-center"
                animate={campaignActive ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, type: 'tween', ease: 'easeInOut' }}
              >
                {/* Pulsing rings */}
                {campaignActive && (
                  <>
                    <motion.div
                      className="absolute w-24 h-24 border-2 border-brand-blue rounded-full"
                      animate={{ scale: [1, 2, 2], opacity: [0.6, 0, 0] }}
                      transition={{ duration: 2, repeat: Infinity, type: 'tween', ease: 'linear' }}
                    />
                    <motion.div
                      className="absolute w-24 h-24 border-2 border-brand-blue rounded-full"
                      animate={{ scale: [1, 2, 2], opacity: [0.6, 0, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5, type: 'tween', ease: 'linear' }}
                    />
                  </>
                )}

                {/* Main marker */}
                <div className="relative z-10 w-16 h-16 bg-brand-blue rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </div>
            
            {/* Radius indicator */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-brand-green/40 rounded-full bg-brand-green/5"
              animate={campaignActive ? { scale: [0.95, 1, 0.95] } : {}}
              transition={{ duration: 3, repeat: Infinity, type: 'tween', ease: 'easeInOut' }}
              style={{
                width: `${radius * 15}px`,
                height: `${radius * 15}px`,
              }}
            />

            {/* Location pins */}
            {campaignActive && [
              { x: 30, y: 40, delay: 0 },
              { x: 70, y: 30, delay: 0.2 },
              { x: 60, y: 70, delay: 0.4 },
              { x: 40, y: 65, delay: 0.6 }
            ].map((pin, idx) => (
              <motion.div
                key={`pin-${idx}`}
                className="absolute w-3 h-3 bg-brand-green rounded-full border-2 border-white shadow-lg"
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: pin.delay, duration: 0.5 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Campaign Stats - Enhanced */}
        <motion.div
          className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h4 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-brand-blue" />
            Campaign Performance
          </h4>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-white rounded-2xl border-2 border-brand-blue/20">
              <motion.div
                className="text-3xl font-black text-brand-blue mb-1"
                key={`impressions-${impressions}`}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {campaignActive ? impressions : estimatedImpressions}
              </motion.div>
              <div className="text-xs text-gray-600 font-medium">Impressions</div>
              {campaignActive && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 flex items-center justify-center gap-1 text-xs text-brand-green"
                >
                  <TrendingUp className="w-3 h-3" />
                  <span>Live</span>
                </motion.div>
              )}
            </div>
            <div className="text-center p-4 bg-white rounded-2xl border-2 border-brand-green/20">
              <motion.div
                className="text-3xl font-black text-brand-green mb-1"
                key={`clicks-${clicks}`}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {campaignActive ? clicks : estimatedClicks}
              </motion.div>
              <div className="text-xs text-gray-600 font-medium">Clicks</div>
              {campaignActive && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-xs text-gray-600 font-semibold"
                >
                  CTR: {ctr}%
                </motion.div>
              )}
            </div>
          </div>

          {campaignActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 p-4 bg-brand-green/10 rounded-xl border border-brand-green/20"
            >
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700 font-medium">Est. ROI</span>
                <span className="text-brand-green font-bold text-lg">+340%</span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Action Button - Enhanced */}
        <AnimatePresence mode="wait">
          {!campaignActive ? (
            <motion.div
              key="start-campaign"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Button
                onClick={handleStartCampaign}
                className="w-full py-4 text-base font-bold bg-gradient-to-r from-brand-blue to-blue-600 shadow-xl hover:shadow-2xl"
                variant="primary"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Campaign
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="campaign-active"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-3"
            >
              <div className="bg-gradient-to-r from-brand-green to-brand-green-dark text-white rounded-2xl p-5 text-center shadow-xl">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Target className="w-5 h-5" />
                  </motion.div>
                  <span className="font-bold text-lg">Campaign is Live!</span>
                </div>
                <p className="text-sm opacity-90">
                  Your ads are reaching riders in the target area
                </p>
              </div>
              <Button
                onClick={resetCampaign}
                variant="outline"
                className="w-full py-4 font-bold"
              >
                Stop Campaign
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Benefits - Enhanced */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-blue" />
            Why Businesses Love Us
          </h4>
          <div className="space-y-2">
            {[
              { icon: Users, text: 'Hyper-local targeting' },
              { icon: BarChart3, text: 'Real-time analytics' },
              { icon: DollarSign, text: 'Pay for results only' }
            ].map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={`benefit-${idx}`}
                  className="flex items-center gap-2 text-xs text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                >
                  <div className="p-1.5 rounded-lg bg-brand-blue/10">
                    <Icon className="w-3 h-3 text-brand-blue" />
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Add Building2 import
const Building2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)

export default AdvertiserPortal
