'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { animations } from '@/lib/animations'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  animated?: boolean
  delay?: number
}

const Card = ({ 
  children, 
  className, 
  hover = false, 
  animated = true,
  delay = 0 
}: CardProps) => {
  const baseClasses = "bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
  
  const hoverClasses = hover ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300" : ""
  
  const cardClasses = cn(baseClasses, hoverClasses, className)
  
  if (animated) {
    return (
      <motion.div
        className={cardClasses}
        {...animations.cardReveal}
        transition={{ ...animations.cardReveal.transition, delay }}
      >
        {children}
      </motion.div>
    )
  }
  
  return (
    <div className={cardClasses}>
      {children}
    </div>
  )
}

export default Card
