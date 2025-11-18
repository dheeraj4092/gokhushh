'use client'

import { Star, Users, TrendingUp, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

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
    src: 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
    poster: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=800&fit=crop',
    background: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&h=1080&fit=crop',
    title: 'Hyderabad Pilot Launch',
    date: 'September 2024',
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
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop',
    background: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop&blur=20',
    title: 'Driver Success Stories',
    date: 'October 2024',
    scrollToExpand: 'Scroll to read more',
    testimonial: {
      quote: "I used to lose 25-30% of my earnings to platform fees. With Gokhush, I keep 100% of my fares. This has genuinely changed my life and my family's future.",
      author: 'Mohammed Azhar',
      role: 'Full-time Driver',
      location: 'Jubilee Hills, Hyderabad',
      stats: [
        { label: 'Monthly Earnings', value: '₹85,000', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'Rides Completed', value: '450+', icon: <Users className="w-5 h-5" /> },
        { label: 'Rating', value: '4.9/5', icon: <Star className="w-5 h-5" /> },
      ]
    }
  },
  {
    mediaType: 'video',
    src: 'https://videos.pexels.com/video-files/5473765/5473765-uhd_2560_1440_25fps.mp4',
    poster: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    background: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop',
    title: 'Rider Experience Revolution',
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
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&h=800&fit=crop',
    background: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=1080&fit=crop',
    title: 'Business Growth Through Ads',
    date: 'November 2024',
    scrollToExpand: 'Scroll for insights',
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
    src: 'https://videos.pexels.com/video-files/4877839/4877839-uhd_2560_1440_25fps.mp4',
    poster: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=800&fit=crop',
    background: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop',
    title: 'Community Impact',
    date: 'December 2024',
    scrollToExpand: 'Scroll to see the impact',
    testimonial: {
      quote: "Gokhush isn't just a platform—it's a movement. Zero commission means real financial freedom for drivers, affordable rides for everyone, and a sustainable business model. This is how ride-sharing should work.",
      author: 'Dr. Anand Rao',
      role: 'Economics Professor & Early Adopter',
      location: 'Hitech City, Hyderabad',
      stats: [
        { label: 'Platform Users', value: '5,000+', icon: <Users className="w-5 h-5" /> },
        { label: 'Total Savings', value: '₹12L+', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'Community Rating', value: '4.8/5', icon: <Star className="w-5 h-5" /> },
      ]
    }
  }
]

const GokhushTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentTestimonial = hyderabadTestimonials[currentIndex]

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? hyderabadTestimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === hyderabadTestimonials.length - 1 ? 0 : prev + 1))
  }

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
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className='bg-gradient-to-br from-gokhush-dark/90 to-brand-black/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gokhush-green/30 shadow-2xl relative'
          >
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6'>
              {/* Media Section - Takes 3 columns */}
              <div className='lg:col-span-3'>
                <div className='mb-3'>
                  <h3 className='text-xl md:text-2xl font-bold text-white mb-1'>
                    {currentTestimonial.title}
                  </h3>
                  <p className='text-gokhush-green text-xs'>{currentTestimonial.date}</p>
                </div>
                
                <div className='relative aspect-video rounded-xl overflow-hidden bg-black'>
                  {currentTestimonial.mediaType === 'video' ? (
                    <video
                      src={currentTestimonial.src}
                      poster={currentTestimonial.poster}
                      controls
                      autoPlay
                      className='w-full h-full object-contain'
                    />
                  ) : (
                    <Image
                      src={currentTestimonial.src}
                      alt={currentTestimonial.title}
                      width={1200}
                      height={800}
                      className='w-full h-full object-cover'
                    />
                  )}
                </div>
              </div>

              {/* Testimonial Content - Takes 2 columns */}
              <div className='lg:col-span-2 flex flex-col justify-center'>
                <div className='p-4 md:p-6 bg-black/20 rounded-xl border border-gokhush-green/20 h-full flex flex-col justify-center'>
                  <Quote className='w-6 h-6 text-gokhush-green/40 mb-2' />
                  <p className='text-sm md:text-base text-gray-300 italic leading-relaxed mb-4'>
                    &ldquo;{currentTestimonial.testimonial.quote}&rdquo;
                  </p>
                  <div className='flex items-start gap-3 pt-3 mb-4 border-t border-gokhush-green/20'>
                    <div className='bg-gokhush-green/10 p-2 rounded-full flex-shrink-0'>
                      <Star className='w-4 h-4 text-gokhush-green fill-gokhush-green' />
                    </div>
                    <div>
                      <h4 className='text-base font-bold text-gokhush-green'>
                        {currentTestimonial.testimonial.author}
                      </h4>
                      <p className='text-gray-400 text-xs'>{currentTestimonial.testimonial.role}</p>
                      <p className='text-gray-500 text-xs'>📍 {currentTestimonial.testimonial.location}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  {currentTestimonial.testimonial.stats && (
                    <div className='grid grid-cols-3 gap-2 mt-auto'>
                      {currentTestimonial.testimonial.stats.map((stat, index) => (
                        <div
                          key={index}
                          className='bg-gokhush-green/5 border border-gokhush-green/20 rounded-lg p-2 text-center'
                        >
                          <div className='text-gokhush-green mb-1 flex justify-center scale-75'>
                            {stat.icon}
                          </div>
                          <p className='text-sm font-bold text-white'>{stat.value}</p>
                          <p className='text-[10px] text-gray-400 uppercase leading-tight'>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className='absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between pointer-events-none'>
              <button
                onClick={handlePrevious}
                className='pointer-events-auto bg-gokhush-green/90 hover:bg-gokhush-green text-brand-black rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 group'
                aria-label='Previous testimonial'
              >
                <ChevronLeft className='w-6 h-6 group-hover:-translate-x-0.5 transition-transform' />
              </button>
              <button
                onClick={handleNext}
                className='pointer-events-auto bg-gokhush-green/90 hover:bg-gokhush-green text-brand-black rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 group'
                aria-label='Next testimonial'
              >
                <ChevronRight className='w-6 h-6 group-hover:translate-x-0.5 transition-transform' />
              </button>
            </div>

            {/* Progress Indicators */}
            <div className='flex justify-center gap-2 mt-6'>
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
