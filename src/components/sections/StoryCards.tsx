'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AppleCardsCarouselDemo from '@/components/ui/apple-cards-carousel-demo'

const StoryCards = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="story" className="py-16 sm:py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            The Story Behind{' '}
            <span className="block text-brand-green">RideHail</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how we&apos;re revolutionizing transportation by making it fair for everyone
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AppleCardsCarouselDemo />
        </motion.div>
      </div>
    </section>
  )
}

export default StoryCards