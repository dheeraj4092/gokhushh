'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, Car, Building2, QrCode, Download, ArrowRight } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const AppDownload = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const downloadPaths = [
    {
      id: 'rider',
      title: 'For Riders',
      description: 'Download our app and start saving on every ride',
      icon: Smartphone,
      color: 'brand-blue',
      features: [
        'Save up to 50% on rides',
        'Earn credits for future trips',
        'Discover local businesses',
        'Safe and reliable service'
      ],
      cta: 'Download App',
      stores: [
        { name: 'App Store', icon: '🍎' },
        { name: 'Google Play', icon: '🤖' },
        { name: 'Samsung Galaxy Store', icon: '📱' }
      ]
    },
    {
      id: 'driver',
      title: 'For Drivers',
      description: 'Join our platform and keep 100% of your earnings',
      icon: Car,
      color: 'brand-green',
      features: [
        'Keep 100% of earnings',
        'Higher demand from affordable rides',
        'Flexible schedule',
        'Better work-life balance'
      ],
      cta: 'Apply to Drive',
      form: true
    },
    {
      id: 'business',
      title: 'For Businesses',
      description: 'Advertise to engaged riders in your area',
      icon: Building2,
      color: 'brand-orange',
      features: [
        'Target by location & demographics',
        'High engagement during rides',
        'Measurable ROI',
        'Support local business growth'
      ],
      cta: 'Start Advertising',
      form: true
    }
  ]

  return (
    <section id="download" className="py-16 sm:py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Get Started Today
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your path and join thousands of users already benefiting from our platform
          </p>
        </motion.div>

        {/* Download Paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {downloadPaths.map((path, index) => {
              const Icon = path.icon
              
              return (
                <motion.div
                  key={`path-${path.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className={`p-6 sm:p-8 text-center hover h-full border-2 ${
                  path.id === 'rider' ? 'border-brand-blue' : ''
                }`}>
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-${path.color}/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                    <Icon className={`w-8 h-8 sm:w-10 sm:h-10 text-${path.color}`} />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {path.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                    {path.description}
                  </p>
                  
                  <ul className="text-left space-y-1 sm:space-y-2 mb-6 sm:mb-8">
                    {path.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                        <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 bg-${path.color} rounded-full`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {path.stores ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {path.stores.map((store, storeIndex) => (
                          <button
                            key={`store-${storeIndex}`}
                            className="flex items-center justify-center space-x-2 p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                          >
                            <span className="text-lg">{store.icon}</span>
                            <span className="text-sm font-medium">{store.name}</span>
                          </button>
                        ))}
                      </div>
                      
                      {/* QR Code */}
                      <div className="mt-4">
                        <div className="w-24 h-24 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                          <QrCode className="w-12 h-12 text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Scan to download</p>
                      </div>
                    </div>
                  ) : (
                    <Button
                      className={`w-full bg-${path.color} text-white hover:opacity-90`}
                    >
                      {path.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Beta Program */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="p-8 bg-gradient-to-r from-brand-blue to-brand-green text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">
                Join Our Beta Program
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Be among the first to experience our revolutionary platform. Get early access and exclusive benefits.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Early Access</div>
                  <div className="text-sm opacity-80">Try new features first</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Exclusive Benefits</div>
                  <div className="text-sm opacity-80">Special discounts and perks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Direct Feedback</div>
                  <div className="text-sm opacity-80">Help shape our platform</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="px-8 py-4 bg-white text-brand-blue hover:bg-gray-100"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Join Beta
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 border-white text-white hover:bg-white hover:text-brand-blue"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by Thousands
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue mb-2">15K+</div>
              <div className="text-sm text-gray-600">Active Riders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-green mb-2">1.2K+</div>
              <div className="text-sm text-gray-600">Verified Drivers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-orange mb-2">150+</div>
              <div className="text-sm text-gray-600">Business Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-purple mb-2">4.9★</div>
              <div className="text-sm text-gray-600">App Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AppDownload
