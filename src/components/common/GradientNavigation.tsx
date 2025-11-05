'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Home, 
  Car, 
  Users, 
  BarChart3, 
  Shield, 
  Building2, 
  Info,
  Download,
  MessageCircle
} from 'lucide-react'

const GradientNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)

  // Navigation items optimized for Gokhush website with custom gradients
  const menuItems = [
    { 
      title: 'Home', 
      icon: <Home className="w-6 h-6" />, 
      gradientFrom: '#00ff88', 
      gradientTo: '#00cc6a',
      sectionId: 'hero',
      onClick: () => scrollToSection('hero')
    },
    { 
      title: 'Story', 
      icon: <Car className="w-6 h-6" />, 
      gradientFrom: '#a955ff', 
      gradientTo: '#ea51ff',
      sectionId: 'story-cards',
      onClick: () => scrollToSection('story-cards')
    },
    { 
      title: 'Simulations', 
      icon: <Users className="w-6 h-6" />, 
      gradientFrom: '#56CCF2', 
      gradientTo: '#2F80ED',
      sectionId: 'interactive-demo',
      onClick: () => scrollToSection('interactive-demo')
    },
    { 
      title: 'Dashboard', 
      icon: <BarChart3 className="w-6 h-6" />, 
      gradientFrom: '#FF9966', 
      gradientTo: '#FF5E62',
      sectionId: 'live-dashboard',
      onClick: () => scrollToSection('live-dashboard')
    },
    { 
      title: 'Safety', 
      icon: <Shield className="w-6 h-6" />, 
      gradientFrom: '#80FF72', 
      gradientTo: '#7EE8FA',
      sectionId: 'safety',
      onClick: () => scrollToSection('safety')
    },
    { 
      title: 'Advertisers', 
      icon: <Building2 className="w-6 h-6" />, 
      gradientFrom: '#ffa9c6', 
      gradientTo: '#f434e2',
      sectionId: 'advertisers',
      onClick: () => scrollToSection('advertisers')
    },
    { 
      title: 'About', 
      icon: <Info className="w-6 h-6" />, 
      gradientFrom: '#00ff88', 
      gradientTo: '#0066ff',
      sectionId: 'about',
      onClick: () => scrollToSection('about')
    },
    { 
      title: 'Download', 
      icon: <Download className="w-6 h-6" />, 
      gradientFrom: '#00cc6a', 
      gradientTo: '#00ff88',
      sectionId: 'download',
      onClick: () => scrollToSection('download')
    },
    { 
      title: 'Contact', 
      icon: <MessageCircle className="w-6 h-6" />, 
      gradientFrom: '#ff6600', 
      gradientTo: '#ff9900',
      sectionId: 'contact',
      onClick: () => scrollToSection('contact')
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'story-cards', 'interactive-demo', 'live-dashboard', 'safety', 'advertisers', 'about', 'download', 'contact']
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Show navigation when scrolling, hide when stopped
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // Only show navbar when past 200px
      if (scrollY > 200) {
        setIsVisible(true)
        
        // Clear existing timeout
        if (scrollTimeout) {
          clearTimeout(scrollTimeout)
        }
        
        // Hide navbar 2 seconds after scrolling stops
        scrollTimeout = setTimeout(() => {
          setIsVisible(false)
        }, 2000)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [])

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex justify-center items-center">
        <ul className="flex gap-4 bg-gokhush-dark/90 backdrop-blur-md rounded-full p-2 border border-gokhush-green/20 shadow-2xl">
          {menuItems.map(({ title, icon, gradientFrom, gradientTo, sectionId, onClick }, idx) => (
            <motion.li
              key={idx}
              style={{ 
                '--gradient-from': gradientFrom, 
                '--gradient-to': gradientTo 
              } as React.CSSProperties}
              className={`relative w-[50px] h-[50px] bg-white/10 shadow-lg rounded-full flex items-center justify-center transition-all duration-500 hover:w-[160px] hover:shadow-none group cursor-pointer ${
                activeSection === sectionId ? 'ring-2 ring-gokhush-green' : ''
              }`}
              onClick={onClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Gradient background on hover */}
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
              {/* Blur glow */}
              <span className="absolute top-[5px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[10px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50"></span>

              {/* Icon */}
              <span className="relative z-10 transition-all duration-500 group-hover:scale-0 delay-0">
                <span className={`text-xl ${activeSection === sectionId ? 'text-gokhush-green' : 'text-gray-400'}`}>
                  {icon}
                </span>
              </span>

              {/* Title */}
              <span className="absolute text-white uppercase tracking-wide text-xs font-medium transition-all duration-500 scale-0 group-hover:scale-100 delay-150">
                {title}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default GradientNavigation


