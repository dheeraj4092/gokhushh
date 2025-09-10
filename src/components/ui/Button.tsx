'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { animations } from '@/lib/animations'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  animated?: boolean
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  animated = true,
  ...props 
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    primary: "bg-brand-green text-brand-black hover:bg-brand-green-dark hover:text-white focus:ring-brand-green",
    secondary: "bg-brand-blue text-white hover:bg-brand-blue/80 focus:ring-brand-blue",
    outline: "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-black focus:ring-brand-green",
    ghost: "text-brand-green hover:bg-brand-green-muted focus:ring-brand-green"
  }
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }
  
  const buttonClasses = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  )
  
  if (animated) {
    return (
      <motion.button
        className={buttonClasses}
        {...animations.buttonHover}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}

export default Button
