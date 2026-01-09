import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Professional font stack
      fontFamily: {
        display: ['Cabinet Grotesk', 'Satoshi', 'system-ui', 'sans-serif'],
        body: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
      },
      
      // Refined color palette - NOT AI-generic
      colors: {
        // Primary - Confident green, not lime
        primary: {
          DEFAULT: '#00C853',
          dark: '#00A844',
          light: '#69F0AE',
          soft: 'rgba(0, 200, 83, 0.1)',
        },
        
        // Accent - Warm contrast (use sparingly)
        accent: {
          DEFAULT: '#FF6B35',
          soft: 'rgba(255, 107, 53, 0.1)',
        },
        
        // Neutrals - Warm undertones
        dark: {
          DEFAULT: '#0F0F12',
          card: '#18181B',
          lighter: '#27272A',
          elevated: '#3F3F46',
        },
        
        // Text hierarchy
        text: {
          primary: '#FAFAFA',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
        
        // Borders - Subtle, not harsh
        border: {
          subtle: 'rgba(255, 255, 255, 0.06)',
          default: 'rgba(255, 255, 255, 0.1)',
          strong: 'rgba(255, 255, 255, 0.2)',
        },
        
        // Light theme
        light: {
          DEFAULT: '#FFFFFF',
          card: '#F8FAFC',
          surface: '#F1F5F9',
          text: '#1E293B',
          'text-secondary': '#64748B',
        },
      },
      
      // Refined spacing scale
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      
      // Border radius - NOT everything is super rounded
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      
      // Box shadows - Subtle, purposeful
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(0, 0, 0, 0.15)',
        'medium': '0 4px 16px -4px rgba(0, 0, 0, 0.2)',
        'large': '0 8px 32px -8px rgba(0, 0, 0, 0.3)',
        'glow-primary': '0 4px 14px -4px rgba(0, 200, 83, 0.4)',
        'glow-primary-lg': '0 8px 24px -4px rgba(0, 200, 83, 0.5)',
      },
      
      // Refined animations
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(16px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      
      // Backdrop blur
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      
      // Transition timing
      transitionDuration: {
        '0': '0ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      
      // Z-index scale
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Add custom utilities
    function({ addUtilities }: { addUtilities: Function }) {
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.bg-noise': {
          'position': 'relative',
        },
        '.bg-noise::before': {
          'content': '""',
          'position': 'absolute',
          'inset': '0',
          'background-image': `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          'opacity': '0.03',
          'pointer-events': 'none',
        },
      })
    },
  ],
}

export default config