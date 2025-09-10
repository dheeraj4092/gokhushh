'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Shield, Phone, MapPin, UserCheck, AlertTriangle, CheckCircle } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const SafetySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [emergencyActive, setEmergencyActive] = useState(false)

  const safetyFeatures = [
    {
      icon: Shield,
      title: '24/7 Safety Support',
      description: 'Round-the-clock safety team monitoring all rides',
      stats: '99.9% safety record'
    },
    {
      icon: UserCheck,
      title: 'Verified Drivers',
      description: 'Comprehensive background checks and vehicle inspections',
      stats: '100% verified drivers'
    },
    {
      icon: MapPin,
      title: 'Live Tracking',
      description: 'Real-time location sharing with emergency contacts',
      stats: 'Real-time updates'
    },
    {
      icon: Phone,
      title: 'Emergency Button',
      description: 'One-tap emergency assistance and direct 911 connection',
      stats: 'Instant response'
    }
  ]

  const safetyStats = [
    { label: 'Rides Completed Safely', value: '2.5M+', color: 'brand-green' },
    { label: 'Average Response Time', value: '30s', color: 'brand-blue' },
    { label: 'Safety Incidents', value: '0.01%', color: 'brand-orange' },
    { label: 'Driver Verification Rate', value: '100%', color: 'brand-green' }
  ]

  const handleEmergencyDemo = () => {
    setEmergencyActive(true)
    setTimeout(() => setEmergencyActive(false), 3000)
  }

  return (
    <section id="safety" className="py-16 sm:py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Safety First, Always
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Your safety is our top priority. We&apos;ve built comprehensive safety features to ensure every ride is secure and comfortable.
          </p>
        </motion.div>

        {/* Safety Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {safetyFeatures.map((feature, index) => {
            const Icon = feature.icon
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-4 sm:p-6 text-center hover h-full bg-brand-gray border-gray-800">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-green-muted rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-green" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    {feature.description}
                  </p>
                  <div className="text-xs sm:text-sm font-semibold text-brand-green">
                    {feature.stats}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Emergency Button Demo */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Emergency Response Demo
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Experience our emergency response system. Click the button below to see how quickly we can connect you with help.
            </p>
            
            <div className="flex justify-center">
              <motion.button
                onClick={handleEmergencyDemo}
                className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg transition-all duration-300 ${
                  emergencyActive
                    ? 'bg-red-500 scale-110 shadow-2xl'
                    : 'bg-red-600 hover:bg-red-700 hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={emergencyActive ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.button>
            </div>
            
            {emergencyActive && (
              <motion.div
                className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center space-x-2 text-red-700">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Emergency services contacted!</span>
                </div>
                <p className="text-sm text-red-600 mt-1">
                  Response time: 15 seconds • Location shared • Help is on the way
                </p>
              </motion.div>
            )}
          </Card>
        </motion.div>

        {/* Safety Statistics */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Safety by the Numbers
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {safetyStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Driver Verification Process */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Rigorous Driver Verification
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Every driver goes through our comprehensive verification process to ensure the highest safety standards.
            </p>
            
            <div className="space-y-4">
              {[
                'Background check and criminal history verification',
                'Driving record review and license validation',
                'Vehicle inspection and insurance verification',
                'Identity verification and document authentication',
                'Ongoing monitoring and performance reviews'
              ].map((step, index) => (
                <motion.div
                  key={step}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <span className="text-gray-700">{step}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <Card className="p-8">
              <div className="text-center">
                <UserCheck className="w-16 h-16 text-brand-blue mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Driver Verification
                </h4>
                <p className="text-gray-600 mb-6">
                  See how we verify every driver
                </p>
                <Button variant="outline">
                  View Process
                </Button>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SafetySection
