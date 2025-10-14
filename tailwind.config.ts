import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Gokhush brand colors - Black and Green theme
        'gokhush-black': '#000000',
        'gokhush-dark': '#111111',
        'gokhush-gray': '#1a1a1a',
        'gokhush-green': '#00ff88', // Signature Gokhush green
        'gokhush-green-dark': '#00cc6a',
        'gokhush-green-light': '#33ff99',
        'gokhush-green-muted': '#00ff8810',
        'gokhush-green-muted-dark': '#00ff8820',
        
        // Legacy brand colors (maintain compatibility)
        'brand-black': '#000000',
        'brand-dark': '#111111',
        'brand-gray': '#1a1a1a',
        'brand-green': '#00ff88',
        'brand-green-dark': '#00cc6a',
        'brand-green-light': '#33ff99',
        'brand-green-muted': '#00ff8810',
        'brand-green-muted-dark': '#00ff8820',
        
        // Supporting colors
        'brand-blue': '#0066ff',
        'brand-orange': '#ff6600',
        'brand-purple': '#6600ff',
        
        // Neutral grays
        'gray-50': '#fafafa',
        'gray-100': '#f5f5f5',
        'gray-200': '#e5e5e5',
        'gray-300': '#d4d4d4',
        'gray-400': '#a3a3a3',
        'gray-500': '#737373',
        'gray-600': '#525252',
        'gray-700': '#404040',
        'gray-800': '#262626',
        'gray-900': '#171717',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        
        // Gokhush signature gradients
        'gokhush-hero': 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #00ff88 100%)',
        'gokhush-primary': 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
        'gokhush-dark': 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        'gokhush-accent': 'linear-gradient(135deg, #00ff88 0%, #33ff99 100%)',
        'gokhush-cta': 'linear-gradient(135deg, #00ff88 0%, #33ff99 100%)',
        
        // Legacy gradients (maintain compatibility)
        'hero-gradient': 'linear-gradient(135deg, #000000 0%, #111111 50%, #00ff88 100%)',
        'green-gradient': 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
        'dark-gradient': 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        'accent-gradient': 'linear-gradient(135deg, #00ff88 0%, #0066ff 100%)',
      },
    },
  },
  plugins: [],
}
export default config
