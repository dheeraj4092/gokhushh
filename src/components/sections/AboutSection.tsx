'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Award, Lightbulb, Heart, Quote } from 'lucide-react'
import Card from '@/components/ui/Card'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const team = [
    {
      name: 'Priya Sharma',
      role: 'CEO & Co-Founder',
      bio: 'Former Ola executive with 10+ years in transportation tech',
      image: '/images/team/priya.jpg'
    },
    {
      name: 'Arjun Patel',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google engineer specializing in ad tech and machine learning',
      image: '/images/team/arjun.jpg'
    },
    {
      name: 'Dr. Anjali Singh',
      role: 'Head of Safety',
      bio: 'Former IPS officer with expertise in background verification systems',
      image: '/images/team/anjali.jpg'
    },
    {
      name: 'Rahul Kumar',
      role: 'Head of Business Development',
      bio: 'Former Uber India executive with deep connections in the ride-hailing industry',
      image: '/images/team/rahul.jpg'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Fairness First',
      description: 'We believe in creating value for everyone - riders, drivers, and businesses alike.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries to create better solutions for transportation challenges.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We build technology that strengthens local communities and supports local businesses.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in safety, technology, and customer service.'
    }
  ]

  const milestones = [
    { year: '2023', event: 'Company Founded', description: 'Started with a vision to revolutionize transportation in India' },
    { year: '2024 Q1', event: 'Beta Launch', description: 'Launched in Mumbai with 100 drivers' },
    { year: '2024 Q2', event: 'Series A', description: 'Raised ₹125 Cr from top-tier VCs' },
    { year: '2024 Q3', event: '5 City Expansion', description: 'Expanded to Delhi, Bangalore, Chennai, Hyderabad' },
    { year: '2024 Q4', event: '10K+ Rides', description: 'Reached 10,000+ completed rides milestone' }
  ]

  return (
    <section id="about" className="py-16 sm:py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src="/logo.png" 
              alt="Go Khush Logo" 
              className="h-16 sm:h-20 w-auto"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            About Our Mission
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;re building the future of transportation where everyone wins - riders save money, drivers earn more, and local businesses thrive.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-6 sm:p-8 md:p-12 text-center bg-gradient-to-r from-brand-blue/5 to-brand-green/5">
            <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-brand-blue mx-auto mb-4 sm:mb-6" />
            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 mb-6 sm:mb-8 leading-relaxed">
              &ldquo;We believe transportation should be affordable for riders, profitable for drivers, and beneficial for local communities. Our ad-supported model makes this vision a reality.&rdquo;
            </blockquote>
            <div className="text-base sm:text-lg text-gray-600">
              - Priya Sharma, CEO & Co-Founder
            </div>
          </Card>
        </motion.div>

        {/* Our Values */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Our Values
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="p-4 sm:p-6 text-center hover h-full">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-blue/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-blue" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      {value.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <Card className="p-6 text-center hover">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <div className="text-sm text-brand-blue mb-3">
                    {member.role}
                  </div>
                  <p className="text-sm text-gray-600">
                    {member.bio}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Timeline */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-blue/20" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6">
                      <div className="text-lg font-semibold text-brand-blue mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.event}
                      </h4>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                  
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center relative z-10">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Press Mentions */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Featured In
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {['Economic Times', 'Business Today', 'Mint', 'YourStory'].map((publication, index) => (
              <motion.div
                key={publication}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
              >
                <div className="text-lg font-semibold text-gray-700">
                  {publication}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
