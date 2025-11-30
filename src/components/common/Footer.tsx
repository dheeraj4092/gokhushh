'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { socialLinks } from '@/lib/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'For Riders', href: '#riders' },
        { name: 'For Drivers', href: '#drivers' },
        { name: 'For Businesses', href: '#businesses' },
        { name: 'Safety', href: '#safety' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Press', href: '#press' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#help' },
        { name: 'Safety Center', href: '#safety' },
        { name: 'Community Guidelines', href: '#guidelines' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Privacy Policy', href: '#privacy' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Download App', href: '#download' },
        { name: 'Driver Application', href: '#driver-app' },
        { name: 'Business Portal', href: '#business-portal' },
        { name: 'API Documentation', href: '#api' },
        { name: 'Developer Resources', href: '#dev' }
      ]
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      text: 'hello@gokhush.in',
      href: 'mailto:hello@gokhush.in'
    },
    {
      icon: Phone,
      text: '+91 80 1234 5678',
      href: 'tel:+918012345678'
    },
    {
      icon: MapPin,
      text: 'Hyderabad, Telangana',
      href: '#'
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Go Khush Logo" 
                  className="h-8 sm:h-10 w-auto"
                />
                <span className="text-lg sm:text-xl font-bold">Gokhush</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm sm:text-base">
                Revolutionizing transportation with ad-supported rides that benefit everyone.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon
                  return (
                    <motion.a
                      key={contact.text}
                      href={contact.href}
                      className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{contact.text}</span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{section.title}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href.replace('#', ''))}
                      className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="border-t border-gray-800 pt-6 sm:pt-8 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-md">
            <h3 className="text-base sm:text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
              Get the latest news and updates about our platform.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-sm"
              />
              <button className="px-4 sm:px-6 py-2 bg-brand-blue text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} RideHail. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-blue transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="text-white text-sm font-semibold">
                  {social.name.charAt(0)}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
