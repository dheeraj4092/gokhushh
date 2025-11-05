'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, BarChart3, Users, Calendar } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const AdvertiserSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedBusinessType, setSelectedBusinessType] = useState('restaurant')

  const businessTypes = [
    { id: 'restaurant', name: 'Restaurants', icon: '🍽️', color: 'brand-blue' },
    { id: 'retail', name: 'Retail', icon: '🛍️', color: 'brand-green' },
    { id: 'services', name: 'Services', icon: '🔧', color: 'brand-orange' },
    { id: 'entertainment', name: 'Entertainment', icon: '🎬', color: 'accent-purple' }
  ]

  const targetingOptions = [
    {
      icon: MapPin,
      title: 'Location Targeting',
      description: 'Reach customers within specific radius of your business',
      features: ['1-10 mile radius', 'Real-time location data', 'Geofencing technology']
    },
    {
      icon: Users,
      title: 'Demographic Targeting',
      description: 'Target by age, income, interests, and behavior patterns',
      features: ['Age groups', 'Income levels', 'Interest categories', 'Ride patterns']
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track impressions, clicks, and conversion rates in real-time',
      features: ['Real-time metrics', 'ROI tracking', 'A/B testing', 'Custom reports']
    }
  ]

  const caseStudies = [
    {
      business: 'Spice Garden Restaurant',
      type: 'Restaurant',
      results: '40% increase in delivery orders',
      investment: '₹35,000/month',
      roi: '320%',
      description: 'Targeted riders within 3 km during dinner hours'
    },
    {
      business: 'TechFix Solutions',
      type: 'Services',
      results: '25% more walk-ins',
      investment: '₹20,000/month',
      roi: '280%',
      description: 'Reached IT professionals commuting to tech parks'
    },
    {
      business: 'Trendy Threads',
      type: 'Retail',
      results: '60% boost in weekend traffic',
      investment: '₹28,000/month',
      roi: '450%',
      description: 'Targeted fashion-conscious riders on weekends'
    }
  ]

  return (
    <section id="advertisers" className="py-16 sm:py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            For Local Businesses
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Reach customers when they&apos;re most engaged - during their rides. Our platform offers unprecedented targeting and ROI for local businesses.
          </p>
        </motion.div>

        {/* Business Type Selector */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
              Choose Your Business Type
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {businessTypes.map((type) => (
                <motion.button
                  key={type.id}
                  onClick={() => setSelectedBusinessType(type.id)}
                  className={`p-3 sm:p-4 rounded-lg sm:rounded-xl text-center transition-all duration-300 ${
                    selectedBusinessType === type.id
                      ? `bg-${type.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{type.icon}</div>
                  <div className="font-semibold text-sm sm:text-base">{type.name}</div>
                </motion.button>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Targeting Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {targetingOptions.map((option, index) => {
            const Icon = option.icon
            
            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-4 sm:p-6 hover h-full">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-blue/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-blue" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    {option.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                    {option.description}
                  </p>
                  
                  <ul className="space-y-1 sm:space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <li key={`${option.title}-feature-${featureIndex}`} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-brand-blue rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Interactive Map Demo */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Interactive Targeting Demo
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Set Your Targeting Parameters
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="radius-slider" className="block text-sm font-medium text-gray-700 mb-2">
                      Target Radius: 3 km
                    </label>
                    <input
                      id="radius-slider"
                      type="range"
                      min="1"
                      max="10"
                      step="0.5"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="budget-slider" className="block text-sm font-medium text-gray-700 mb-2">
                      Daily Budget: ₹15,000
                    </label>
                    <input
                      id="budget-slider"
                      type="range"
                      min="50"
                      max="1000"
                      step="25"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  
                  <div>
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-700 mb-2">
                        Peak Hours: 5-8 PM
                      </legend>
                      <div className="flex space-x-2">
                        {['12-5 PM', '5-8 PM', '8-11 PM', 'All Day'].map((time) => (
                          <button
                            key={time}
                            className="px-3 py-1 text-xs bg-gray-100 rounded-full hover:bg-brand-blue hover:text-white transition-colors"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Coverage Preview
                </h4>
                
                <div className="relative h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      className="w-20 h-20 bg-brand-blue/20 rounded-full border-2 border-brand-blue flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, type: 'tween', ease: 'easeInOut' }}
                    >
                      <MapPin className="w-8 h-8 text-brand-blue" />
                    </motion.div>
                  </div>
                  
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-brand-blue/30 rounded-full"
                    style={{ width: '120px', height: '120px' }}
                  />
                </div>
                
                <div className="mt-4 text-center">
                  <div className="text-2xl font-bold text-brand-blue mb-1">1,240</div>
                  <div className="text-sm text-gray-600">Estimated daily impressions</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Success Stories
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={`study-${study.business}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card className="p-6 hover h-full">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                      {study.business}
                    </h4>
                    <span className="text-sm text-gray-500">{study.type}</span>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-brand-green mb-1">
                      {study.results}
                    </div>
                    <div className="text-sm text-gray-600">
                      {study.description}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold text-gray-900">
                        {study.investment}
                      </div>
                      <div className="text-xs text-gray-600">Monthly Spend</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-brand-green">
                        {study.roi}
                      </div>
                      <div className="text-xs text-gray-600">ROI</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Card className="p-8 bg-gradient-to-r from-brand-blue to-brand-green text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Grow Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of local businesses already seeing results with our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-4 bg-white text-brand-blue hover:bg-gray-100"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 border-white text-white hover:bg-white hover:text-brand-blue"
              >
                Start Campaign
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default AdvertiserSection
