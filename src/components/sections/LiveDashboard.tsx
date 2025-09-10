'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Car, Users, DollarSign, Building2, TrendingUp, MapPin, Download } from 'lucide-react'
import CounterAnimation from '@/components/ui/CounterAnimation'
import Card from '@/components/ui/Card'

const LiveDashboard = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const metrics = [
    {
      icon: Car,
      label: 'Rides Completed Today',
      value: 15420,
      suffix: '',
      color: 'brand-green',
      change: '+12%'
    },
    {
      icon: DollarSign,
      label: 'Extra Earnings for Drivers',
      value: 6700000,
      prefix: '₹',
      suffix: '',
      color: 'brand-green-dark',
      change: '+18%'
    },
    {
      icon: TrendingUp,
      label: 'Ads Served & Engagement',
      value: 87,
      suffix: '%',
      color: 'brand-green-light',
      change: '+5%'
    },
    {
      icon: Building2,
      label: 'Local Businesses Onboarded',
      value: 156,
      suffix: '',
      color: 'brand-green',
      change: '+8%'
    }
  ]

  const cities = [
    { name: 'Mumbai', rides: 3240, growth: '+15%' },
    { name: 'Delhi', rides: 2890, growth: '+12%' },
    { name: 'Bangalore', rides: 2560, growth: '+18%' },
    { name: 'Chennai', rides: 1980, growth: '+9%' },
    { name: 'Hyderabad', rides: 1420, growth: '+22%' }
  ]

  return (
    <section id="live-dashboard" className="py-16 sm:py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Live Platform Metrics
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time data showing the impact of our ad-supported ride-hailing platform
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-4 sm:p-6 text-center hover bg-brand-gray border-gray-800">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${
                    (() => {
                      switch (metric.color) {
                        case 'brand-green':
                          return 'bg-brand-green-muted'
                        case 'brand-green-dark':
                          return 'bg-brand-green-muted-dark'
                        default:
                          return 'bg-brand-green-muted'
                      }
                    })()
                  } rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                    <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${
                      (() => {
                        switch (metric.color) {
                          case 'brand-green':
                            return 'text-brand-green'
                          case 'brand-green-dark':
                            return 'text-brand-green-dark'
                          default:
                            return 'text-brand-green-light'
                        }
                      })()
                    }`} />
                  </div>
                  
                  <div className={`text-2xl sm:text-3xl font-bold ${
                    (() => {
                      switch (metric.color) {
                        case 'brand-green':
                          return 'text-brand-green'
                        case 'brand-green-dark':
                          return 'text-brand-green-dark'
                        default:
                          return 'text-brand-green-light'
                      }
                    })()
                  } mb-1 sm:mb-2`}>
                    <CounterAnimation
                      end={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      duration={2}
                    />
                  </div>
                  
                  <div className="text-xs sm:text-sm text-gray-300 mb-1 sm:mb-2">
                    {metric.label}
                  </div>
                  
                  <div className={`text-xs sm:text-sm font-semibold ${
                    (() => {
                      switch (metric.color) {
                        case 'brand-green':
                          return 'text-brand-green'
                        case 'brand-green-dark':
                          return 'text-brand-green-dark'
                        default:
                          return 'text-brand-green-light'
                      }
                    })()
                  }`}>
                    {metric.change} from last week
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* City Expansion Map */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                City Expansion
              </h3>
              <p className="text-gray-600">
                Growing rapidly across major metropolitan areas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {cities.map((city, index) => (
              <motion.div
                key={`city-${city.name}`}
                className="text-center p-4 bg-gray-50 rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-900">{city.name}</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {city.rides.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">rides today</div>
                  <div className="text-sm font-semibold text-green-500">
                    {city.growth}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Growth Chart Placeholder */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Platform Growth
              </h3>
              <p className="text-gray-600">
                Steady growth in rides, drivers, and business partnerships
              </p>
            </div>
            
            {/* Simple chart visualization */}
            <div className="h-64 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl flex items-end justify-center space-x-2 p-6">
              {[40, 55, 70, 85, 95, 100].map((height, index) => (
                <motion.div
                  key={`chart-bar-${height}-${index}`}
                  className="bg-blue-600 rounded-t-lg"
                  style={{ width: '40px' }}
                  initial={{ height: 0 }}
                  animate={isInView ? { height: `${height}%` } : { height: 0 }}
                  transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                />
              ))}
            </div>
            
            <div className="flex justify-between text-sm text-gray-600 mt-4">
              <span>Jan 2024</span>
              <span>Feb 2024</span>
              <span>Mar 2024</span>
              <span>Apr 2024</span>
              <span>May 2024</span>
              <span>Jun 2024</span>
            </div>
          </Card>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="p-8 text-center bg-gradient-to-r from-blue-600 to-green-500 text-white">
            <Download className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Download Pitch Deck</h3>
            <p className="text-lg mb-6 opacity-90">
              Get detailed insights into our business model and growth projections
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Download PDF
            </button>
          </Card>

          <Card className="p-8 text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-green-500" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Beta Program</h3>
            <p className="text-lg text-gray-600 mb-6">
              Be among the first to experience our revolutionary platform
            </p>
            <button className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors">
              Sign Up Now
            </button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default LiveDashboard
