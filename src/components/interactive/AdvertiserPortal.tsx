'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Target, DollarSign, Users, BarChart3 } from 'lucide-react'
import Button from '@/components/ui/Button'

const AdvertiserPortal = () => {
  const [campaignActive, setCampaignActive] = useState(false)
  const [budget, setBudget] = useState(500)
  const [radius, setRadius] = useState(2)
  const [impressions, setImpressions] = useState(0)

  const handleStartCampaign = () => {
    setCampaignActive(true)
    
    // Simulate impressions growing
    let count = 0
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 5) + 1
      setImpressions(count)
      
      if (count >= 150) {
        clearInterval(interval)
      }
    }, 200)
  }

  const resetCampaign = () => {
    setCampaignActive(false)
    setImpressions(0)
  }

  const estimatedImpressions = Math.floor(budget * 0.3) // Rough estimate

  return (
    <div className="h-full bg-gray-50 p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Advertiser Portal</h3>
        <p className="text-gray-600">Create targeted campaigns for local businesses</p>
      </div>

      <div className="space-y-6">
        {/* Campaign Setup */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Campaign Setup
          </h4>
          
          <div className="space-y-4">
            {/* Budget Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Daily Budget: ${budget}
              </label>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                disabled={campaignActive}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$100</span>
                <span>$2000</span>
              </div>
            </div>

            {/* Radius Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Radius: {radius} miles
              </label>
              <input
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                disabled={campaignActive}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 mile</span>
                <span>10 miles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Visualization */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Target Area
          </h4>
          
          <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden">
            {/* Map placeholder with target area */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="w-16 h-16 bg-brand-blue/20 rounded-full border-2 border-brand-blue flex items-center justify-center"
                animate={campaignActive ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="w-6 h-6 text-brand-blue" />
              </motion.div>
            </div>
            
            {/* Radius indicator */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-brand-blue/30 rounded-full"
              style={{
                width: `${radius * 20}px`,
                height: `${radius * 20}px`,
              }}
            />
          </div>
        </div>

        {/* Campaign Stats */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Campaign Performance
          </h4>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-blue mb-1">
                {campaignActive ? impressions : estimatedImpressions}
              </div>
              <div className="text-sm text-gray-600">Impressions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-green mb-1">
                {campaignActive ? '87%' : '~85%'}
              </div>
              <div className="text-sm text-gray-600">Engagement</div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <AnimatePresence>
          {!campaignActive ? (
            <Button
              onClick={handleStartCampaign}
              className="w-full"
              variant="primary"
            >
              Start Campaign
            </Button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="space-y-3"
            >
              <div className="bg-brand-green text-white rounded-xl p-4 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Target className="w-5 h-5" />
                  <span className="font-semibold">Campaign Active!</span>
                </div>
                <p className="text-sm opacity-90">
                  Your ads are being shown to riders in the target area
                </p>
              </div>
              <Button
                onClick={resetCampaign}
                variant="outline"
                className="w-full"
              >
                Stop Campaign
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Benefits */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <Users className="w-4 h-4 text-brand-blue" />
            <span>Target by location & demographics</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <BarChart3 className="w-4 h-4 text-brand-blue" />
            <span>Real-time performance tracking</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <DollarSign className="w-4 h-4 text-brand-blue" />
            <span>Pay only for engaged viewers</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvertiserPortal
