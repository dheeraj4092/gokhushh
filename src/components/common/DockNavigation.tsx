'use client'

import { useState, useEffect } from 'react'
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
import { LimelightNav } from '@/components/ui/limelight-nav'

const DockNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)

  // Navigation items optimized for Gokhush website
  const navItems = [
    { 
      id: 'hero', 
      icon: <Home className="w-6 h-6" />, 
      label: 'Home',
      onClick: () => scrollToSection('hero')
    },
    { 
      id: 'story', 
      icon: <Car className="w-6 h-6" />, 
      label: 'Story',
      onClick: () => scrollToSection('story-cards')
    },
    { 
      id: 'simulations', 
      icon: <Users className="w-6 h-6" />, 
      label: 'Simulations',
      onClick: () => scrollToSection('interactive-demo')
    },
    { 
      id: 'dashboard', 
      icon: <BarChart3 className="w-6 h-6" />, 
      label: 'Dashboard',
      onClick: () => scrollToSection('live-dashboard')
    },
    { 
      id: 'safety', 
      icon: <Shield className="w-6 h-6" />, 
      label: 'Safety',
      onClick: () => scrollToSection('safety')
    },
    { 
      id: 'advertisers', 
      icon: <Building2 className="w-6 h-6" />, 
      label: 'Advertisers',
      onClick: () => scrollToSection('advertisers')
    },
    { 
      id: 'about', 
      icon: <Info className="w-6 h-6" />, 
      label: 'About',
      onClick: () => scrollToSection('about')
    },
    { 
      id: 'download', 
      icon: <Download className="w-6 h-6" />, 
      label: 'Download',
      onClick: () => scrollToSection('download')
    },
    { 
      id: 'contact', 
      icon: <MessageCircle className="w-6 h-6" />, 
      label: 'Contact',
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

  // Show/hide dock based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <LimelightNav
        items={navItems}
        defaultActiveIndex={navItems.findIndex(item => item.id === activeSection)}
        onTabChange={(index) => {
          const item = navItems[index]
          if (item) {
            scrollToSection(item.id)
          }
        }}
        className="bg-gokhush-dark/95 backdrop-blur-md border border-gokhush-green/20 shadow-2xl shadow-gokhush-green/10"
        limelightClassName="bg-gokhush-green shadow-[0_0_20px_rgba(0,255,136,0.5)]"
        iconContainerClassName="hover:bg-gokhush-green/10 rounded-lg transition-colors duration-200"
        iconClassName="text-white"
      />
    </motion.div>
  )
}

export default DockNavigation


