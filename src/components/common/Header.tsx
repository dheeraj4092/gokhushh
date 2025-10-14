'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import { navigation } from '@/lib/constants'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.95)']
  )
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  )

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor,
        backdropFilter,
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gokhush-green rounded-xl flex items-center justify-center">
              <span className="text-gokhush-black font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold text-white">Gokhush</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className="text-gray-300 hover:text-gokhush-green transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('download')}
            >
              Download App
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 border-t border-gray-200">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 pt-4 space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection('download')}
              >
                Download App
              </Button>
              <Button
                className="w-full"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header
