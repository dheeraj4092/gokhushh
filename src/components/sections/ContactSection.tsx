'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Modal from '@/components/ui/Modal'
import { ContactForm } from '@/types'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>()

  const contactTypes = [
    {
      id: 'investor',
      title: 'Investor Inquiry',
      description: 'Interested in investing? Let\'s discuss our growth potential.',
      icon: '💰',
      color: 'brand-blue'
    },
    {
      id: 'advertiser',
      title: 'Business Advertising',
      description: 'Want to advertise to riders? Learn about our targeting options.',
      icon: '📈',
      color: 'brand-green'
    },
    {
      id: 'partnership',
      title: 'Partnership',
      description: 'Looking to partner with us? Explore collaboration opportunities.',
      icon: '🤝',
      color: 'brand-orange'
    },
    {
      id: 'general',
      title: 'General Inquiry',
      description: 'Have questions? We\'d love to hear from you.',
      icon: '💬',
      color: 'accent-purple'
    }
  ]

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    
    setTimeout(() => {
      setIsSubmitted(false)
      setIsModalOpen(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@ridehail.in',
      description: 'We\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 80 1234 5678',
      description: 'Mon-Fri 9AM-6PM IST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Bangalore, Karnataka',
      description: '123 Koramangala, 5th Block'
    }
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to join our platform or have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Types */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
              How can we help you?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {contactTypes.map((type, index) => (
                <motion.button
                  key={type.id}
                  onClick={() => setIsModalOpen(true)}
                  className={`p-3 sm:p-4 rounded-lg sm:rounded-xl text-left transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-${type.color}/20`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{type.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                    {type.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {type.description}
                  </p>
                </motion.button>
              ))}
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                
                return (
                  <motion.div
                    key={info.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <div className="text-lg text-brand-blue mb-1">
                        {info.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {info.description}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    {...register('name', { required: 'Name is required' })}
                    error={errors.name?.message}
                  />
                  <Input
                    label="Email"
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    error={errors.email?.message}
                  />
                </div>
                
                <Input
                  label="Company (Optional)"
                  {...register('company')}
                />
                
                <div>
                  <label htmlFor="inquiry-type" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiry-type"
                    {...register('type', { required: 'Please select an inquiry type' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="investor">Investor Inquiry</option>
                    <option value="advertiser">Business Advertising</option>
                    <option value="partnership">Partnership</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  {errors.type && (
                    <p className="mt-1 text-sm text-error">{errors.type.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register('message', { required: 'Message is required' })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your inquiry..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-error">{errors.message.message}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Success Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Contact Us"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                label="First Name"
                {...register('name', { required: 'Name is required' })}
                error={errors.name?.message}
              />
              <Input
                label="Email"
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                error={errors.email?.message}
              />
            </div>
            
            <Input
              label="Company (Optional)"
              {...register('company')}
            />
            
            <div>
              <label htmlFor="modal-inquiry-type" className="block text-sm font-medium text-gray-700 mb-2">
                Inquiry Type
              </label>
              <select
                id="modal-inquiry-type"
                {...register('type', { required: 'Please select an inquiry type' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200"
              >
                <option value="">Select inquiry type</option>
                <option value="investor">Investor Inquiry</option>
                <option value="advertiser">Business Advertising</option>
                <option value="partnership">Partnership</option>
                <option value="general">General Inquiry</option>
              </select>
              {errors.type && (
                <p className="mt-1 text-sm text-error">{errors.type.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="modal-message"
                {...register('message', { required: 'Message is required' })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200"
                placeholder="Tell us about your inquiry..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-error">{errors.message.message}</p>
              )}
            </div>
            
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Modal>

        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            className="fixed top-4 right-4 z-50"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
          >
            <Card className="p-4 bg-green-50 border-green-200">
              <div className="flex items-center space-x-2 text-green-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Message sent successfully!</span>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ContactSection
