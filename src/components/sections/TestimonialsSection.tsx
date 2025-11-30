'use client'

import { Star, Users, TrendingUp, Quote, ChevronLeft, ChevronRight, Play, Volume2, VolumeX } from 'lucide-react'
import Button from '@/components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

interface TestimonialData {
  mediaType: 'video' | 'image'
  src: string
  poster?: string
  background: string
  title: string
  date: string
  scrollToExpand: string
  testimonial: {
    quote: string
    author: string
    role: string
    location: string
    stats?: {
      label: string
      value: string
      icon: React.ReactNode
    }[]
  }
}

const hyderabadTestimonials: TestimonialData[] = [
  {
    mediaType: 'video',
    src: '/testimonials/videos/Bavabro collab.mp4',
    poster: '/testimonials/posters/bavabro-collab-poster.jpg',
    background: '/testimonials/posters/bavabro-collab-poster.jpg',
    title: 'Bavabro Partnership Success',
    date: 'November 2024',
    scrollToExpand: 'Scroll to see the journey',
    testimonial: {
      quote: "In just 3 months, we completed over 2,400 rides with zero commission. The drivers are earning 40% more, and riders love the ad-supported model. It's been an incredible success!",
      author: 'Rajesh Kumar',
      role: 'Lead Driver Partner',
      location: 'Hyderabad, Telangana',
      stats: [
        { label: 'Total Rides', value: '2,400+', icon: <Users className="w-5 h-5" /> },
        { label: 'Driver Earnings Increase', value: '40%', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'User Satisfaction', value: '94%', icon: <Star className="w-5 h-5" /> },
      ]
    }
  },
  {
    mediaType: 'video',
    src: '/testimonials/videos/Koi.mp4',
    poster: '/testimonials/posters/koi-poster.jpg',
    background: '/testimonials/posters/koi-poster.jpg',
    title: 'Koi Restaurant Campaign',
    date: 'October 2024',
    scrollToExpand: 'Scroll to read more',
    testimonial: {
      quote: "We saw a 340% ROI on our first campaign with Gokhush. The location-based targeting brought actual foot traffic to our restaurant. This is the future of local advertising!",
      author: 'Vikram Reddy',
      role: 'Restaurant Owner',
      location: 'Banjara Hills, Hyderabad',
      stats: [
        { label: 'Campaign ROI', value: '340%', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'New Customers', value: '280+', icon: <Users className="w-5 h-5" /> },
        { label: 'Ad Engagement', value: '94%', icon: <Star className="w-5 h-5" /> },
      ]
    }
  },
  {
    mediaType: 'video',
    src: '/testimonials/videos/Swach water.mp4',
    poster: '/testimonials/posters/swach-water-poster.jpg',
    background: '/testimonials/posters/swach-water-poster.jpg',
    title: 'Swach Water Partnership',
    date: 'November 2024',
    scrollToExpand: 'Scroll to explore',
    testimonial: {
      quote: "Watching 3-5 short ads per ride and earning ₹15-25 credits? It's brilliant! I'm saving 25% on every ride, and the ads are actually relevant to my route. Win-win!",
      author: 'Priya Sharma',
      role: 'Regular Rider',
      location: 'Gachibowli, Hyderabad',
      stats: [
        { label: 'Monthly Savings', value: '₹800+', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'Credits Earned', value: '₹2,100', icon: <Star className="w-5 h-5" /> },
        { label: 'Rides Taken', value: '45', icon: <Users className="w-5 h-5" /> },
      ]
    }
  },
  {
    mediaType: 'video',
    src: '/testimonials/videos/Swachhhh collab.mp4',
    poster: '/testimonials/posters/swachhhh-collab-poster.jpg',
    background: '/testimonials/posters/swachhhh-collab-poster.jpg',
    title: 'Swachhhh Collaboration',
    date: 'November 2024',
    scrollToExpand: 'Scroll for insights',
    testimonial: {
      quote: "Gokhush isn't just a platform—it's a movement. Zero commission means real financial freedom for drivers, affordable rides for everyone, and a sustainable business model.",
      author: 'Dr. Anand Rao',
      role: 'Economics Professor & Early Adopter',
      location: 'Hitech City, Hyderabad',
      stats: [
        { label: 'Platform Users', value: '5,000+', icon: <Users className="w-5 h-5" /> },
        { label: 'Total Savings', value: '₹12L+', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'Community Rating', value: '4.8/5', icon: <Star className="w-5 h-5" /> },
      ]
    }
  },
  {
    mediaType: 'video',
    src: '/testimonials/videos/ilatte.mp4',
    poster: '/testimonials/posters/ilatte-poster.jpg',
    background: '/testimonials/posters/ilatte-poster.jpg',
    title: 'iLatte Coffee Success',
    date: 'November 2024',
    scrollToExpand: 'Scroll to see the impact',
    testimonial: {
      quote: "The targeted advertising through Gokhush brought us 250+ new customers in the first month. Our coffee shop has become a community hub for riders!",
      author: 'Suresh Patel',
      role: 'Café Owner',
      location: 'Madhapur, Hyderabad',
      stats: [
        { label: 'New Customers', value: '250+', icon: <Users className="w-5 h-5" /> },
        { label: 'Revenue Growth', value: '180%', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'Ad Views', value: '8,500+', icon: <Star className="w-5 h-5" /> },
      ]
    }
  },
  {
    mediaType: 'video',
    src: '/testimonials/videos/teluguthaanam collab .mp4',
    poster: '/testimonials/posters/teluguthaanam-collab-poster.jpg',
    background: '/testimonials/posters/teluguthaanam-collab-poster.jpg',
    title: 'Telugu Thaanam Partnership',
    date: 'December 2024',
    scrollToExpand: 'Scroll to see more',
    testimonial: {
      quote: "Partnering with Gokhush has helped us reach authentic Telugu food lovers. The response has been overwhelming with customers coming directly from ride ads!",
      author: 'Lakshmi Devi',
      role: 'Restaurant Owner',
      location: 'Kukatpally, Hyderabad',
      stats: [
        { label: 'Monthly Orders', value: '450+', icon: <Users className="w-5 h-5" /> },
        { label: 'Customer Retention', value: '85%', icon: <Star className="w-5 h-5" /> },
        { label: 'Ad Conversion', value: '12%', icon: <TrendingUp className="w-5 h-5" /> },
      ]
    }
  }
]

const GokhushTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const currentTestimonial = hyderabadTestimonials[currentIndex]

  const handlePrevious = () => {
    setCurrentIndex((prev: number) => (prev === 0 ? hyderabadTestimonials.length - 1 : prev - 1))
    setIsPlaying(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev: number) => (prev === hyderabadTestimonials.length - 1 ? 0 : prev + 1))
    setIsPlaying(false)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    // Reset playing state when testimonial changes
    setIsPlaying(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [currentIndex])

  useEffect(() => {
    // Scroll to the testimonial section on mount
    const testimonialSection = document.getElementById('testimonial-section')
    if (testimonialSection) {
      testimonialSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <section id='testimonial-section' className='py-16 md:py-24 bg-gradient-to-b from-brand-black via-gokhush-dark to-brand-black relative overflow-hidden'>
      {/* Section Header */}
      <div className='container mx-auto px-4 mb-12 text-center'>
        <motion.h2 
          className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Hyderabad Pilot <span className='text-gokhush-green'>Success Stories</span>
        </motion.h2>
        <motion.p 
          className='text-xl text-gray-400 max-w-3xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real testimonials from our 3-month pilot run in Hyderabad
        </motion.p>
      </div>

      {/* Main Testimonial Display with Navigation */}
      <div className='container mx-auto px-4 mb-12'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className='relative'
          >
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
              {/* Mobile Phone Mockup - Takes 5 columns on large screens */}
              <div className='lg:col-span-5 flex justify-center'>
                <motion.div
                  className='relative group'
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Phone Frame */}
                  <div className='relative w-[320px] md:w-[360px] lg:w-[380px] mx-auto'>
                    {/* Phone Shadow */}
                    <div className='absolute inset-0 bg-gokhush-green/20 blur-3xl rounded-[3rem] scale-95 opacity-60 group-hover:opacity-100 transition-opacity duration-300' />
                    
                    {/* Phone Body */}
                    <div className='relative bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl border-[6px] border-gray-800'>
                      {/* Notch */}
                      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10 flex items-center justify-center gap-2'>
                        <div className='w-12 h-1.5 bg-gray-700 rounded-full' />
                        <div className='w-2 h-2 bg-gray-700 rounded-full' />
                      </div>

                      {/* Screen Container */}
                      <div className='relative bg-black rounded-[2.5rem] overflow-hidden aspect-[9/19.5]'>
                        {/* Status Bar */}
                        <div className='absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/80 to-transparent z-20 flex items-center justify-between px-6 pt-2'>
                          <span className='text-white text-xs font-semibold'>9:41</span>
                          <div className='flex items-center gap-1'>
                            <div className='w-4 h-3 border border-white rounded-sm' />
                            <div className='w-1 h-2 bg-white rounded-sm' />
                          </div>
                        </div>

                        {/* Video/Image Content */}
                        <div className='relative w-full h-full bg-black'>
                          {currentTestimonial.mediaType === 'video' ? (
                            <>
                              <video
                                ref={videoRef}
                                src={currentTestimonial.src}
                                poster={currentTestimonial.poster}
                                muted={isMuted}
                                loop
                                playsInline
                                className='w-full h-full object-cover'
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                              />
                              
                              {/* Video Controls Overlay */}
                              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                {/* Play/Pause Button */}
                                <button
                                  onClick={togglePlay}
                                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gokhush-green/90 hover:bg-gokhush-green text-black rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110'
                                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                                >
                                  {isPlaying ? (
                                    <div className='w-4 h-4 flex gap-1'>
                                      <div className='w-1.5 h-full bg-black' />
                                      <div className='w-1.5 h-full bg-black' />
                                    </div>
                                  ) : (
                                    <Play className='w-6 h-6 fill-black' />
                                  )}
                                </button>

                                {/* Mute Button */}
                                <button
                                  onClick={toggleMute}
                                  className='absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all duration-300'
                                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                                >
                                  {isMuted ? (
                                    <VolumeX className='w-4 h-4' />
                                  ) : (
                                    <Volume2 className='w-4 h-4' />
                                  )}
                                </button>
                              </div>

                              {/* "Tap to play" hint */}
                              {!isPlaying && (
                                <div className='absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-4 py-2 rounded-full backdrop-blur-sm animate-pulse'>
                                  Tap to play
                                </div>
                              )}
                            </>
                          ) : (
                            <Image
                              src={currentTestimonial.src}
                              alt={currentTestimonial.title}
                              width={800}
                              height={1600}
                              className='w-full h-full object-cover'
                            />
                          )}
                        </div>

                        {/* Bottom Indicator Bar (iPhone style) */}
                        <div className='absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-50' />
                      </div>
                    </div>

                    {/* Side Buttons */}
                    <div className='absolute left-0 top-20 w-1 h-8 bg-gray-800 rounded-r-full -translate-x-full' />
                    <div className='absolute left-0 top-32 w-1 h-12 bg-gray-800 rounded-r-full -translate-x-full' />
                    <div className='absolute right-0 top-24 w-1 h-16 bg-gray-800 rounded-l-full translate-x-full' />
                  </div>

                  {/* Platform Label */}
                  <div className='absolute -bottom-8 left-1/2 -translate-x-1/2 text-center'>
                    <p className='text-gokhush-green text-sm font-semibold'>Mobile Ad Experience</p>
                  </div>
                </motion.div>
              </div>

              {/* Testimonial Content - Takes 7 columns on large screens */}
              <div className='lg:col-span-7'>
                <div className='bg-gradient-to-br from-gokhush-dark/90 to-brand-black/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gokhush-green/30 shadow-2xl'>
                  {/* Header */}
                  <div className='mb-6'>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2'>
                      {currentTestimonial.title}
                    </h3>
                    <p className='text-gokhush-green text-sm font-medium'>{currentTestimonial.date}</p>
                  </div>

                  {/* Quote */}
                  <div className='mb-6'>
                    <Quote className='w-8 h-8 text-gokhush-green/40 mb-3' />
                    <p className='text-base md:text-lg text-gray-300 italic leading-relaxed'>
                      &ldquo;{currentTestimonial.testimonial.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className='flex items-start gap-4 p-4 bg-black/30 rounded-xl border border-gokhush-green/20'>
                    <div className='bg-gokhush-green/10 p-3 rounded-full flex-shrink-0'>
                      <Star className='w-5 h-5 text-gokhush-green fill-gokhush-green' />
                    </div>
                    <div>
                      <h4 className='text-lg font-bold text-gokhush-green mb-1'>
                        {currentTestimonial.testimonial.author}
                      </h4>
                      <p className='text-gray-400 text-sm'>{currentTestimonial.testimonial.role}</p>
                      <p className='text-gray-500 text-sm mt-1'>📍 {currentTestimonial.testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows - Positioned outside the main container */}
            <div className='hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none -mx-16'>
              <button
                onClick={handlePrevious}
                className='pointer-events-auto bg-gokhush-green/90 hover:bg-gokhush-green text-brand-black rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group'
                aria-label='Previous testimonial'
              >
                <ChevronLeft className='w-6 h-6 group-hover:-translate-x-1 transition-transform' />
              </button>
              <button
                onClick={handleNext}
                className='pointer-events-auto bg-gokhush-green/90 hover:bg-gokhush-green text-brand-black rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group'
                aria-label='Next testimonial'
              >
                <ChevronRight className='w-6 h-6 group-hover:translate-x-1 transition-transform' />
              </button>
            </div>

            {/* Mobile Navigation Buttons */}
            <div className='flex lg:hidden justify-center gap-4 mt-8'>
              <button
                onClick={handlePrevious}
                className='bg-gokhush-green/90 hover:bg-gokhush-green text-brand-black rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 group'
                aria-label='Previous testimonial'
              >
                <ChevronLeft className='w-6 h-6 group-hover:-translate-x-0.5 transition-transform' />
              </button>
              <button
                onClick={handleNext}
                className='bg-gokhush-green/90 hover:bg-gokhush-green text-brand-black rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 group'
                aria-label='Next testimonial'
              >
                <ChevronRight className='w-6 h-6 group-hover:translate-x-0.5 transition-transform' />
              </button>
            </div>

            {/* Progress Indicators */}
            <div className='flex justify-center gap-2 mt-8'>
              {hyderabadTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gokhush-green w-8' 
                      : 'bg-gray-600 hover:bg-gray-500 w-2'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <div className='container mx-auto px-4'>
        <motion.div 
          className='text-center py-12 bg-gradient-to-r from-gokhush-green/10 to-transparent rounded-2xl border border-gokhush-green/20'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Join the <span className='text-gokhush-green'>Gokhush</span> Revolution
          </h3>
          <p className='text-gray-400 text-lg mb-6 max-w-2xl mx-auto'>
            Be part of India&apos;s first zero-commission ride platform
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Button variant='primary' size='lg'>
              Download App
            </Button>
            <Button variant='outline' size='lg'>
              Become a Driver
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GokhushTestimonials
