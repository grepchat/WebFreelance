import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Для LUMIERE
        manrope: ['var(--font-manrope)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
        // Для IRONPULSE
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        bebas: ['var(--font-bebas)', 'sans-serif'],
        // Для CODEFORGE
        inter: ['var(--font-inter)', 'sans-serif'],
        space: ['var(--font-space)', 'sans-serif'],
        // Для VERTEX
        dmsans: ['var(--font-dmsans)', 'sans-serif'],
        archivo: ['var(--font-archivo)', 'sans-serif'],
        // Для APEX
        oswald: ['var(--font-oswald)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      colors: {
        // LUMIERE
        lumiere: {
          bg: '#FDF8F5',
          accent: '#C9A96E',
          pink: '#F5D0C5',
          dark: '#1C1917',
          muted: '#78716C',
        },
        // IRONPULSE
        iron: {
          bg: '#1A1A2E',
          accent: '#FF6B35',
          dark: '#16213E',
          text: '#C4C4C4',
        },
        // CODEFORGE
        code: {
          bg: '#0A0E17',
          card: '#111827',
          blue: '#3B82F6',
          purple: '#8B5CF6',
          text: '#F9FAFB',
          muted: '#9CA3AF',
        },
        // VERTEX
        vertex: {
          bg: '#0F172A',
          light: '#F1F5F9',
          accent: '#F59E0B',
          navy: '#1E3A5F',
          muted: '#64748B',
        },
        // APEX
        apex: {
          bg: '#0A0A0A',
          card: '#1A1A1A',
          red: '#DC2626',
          metal: '#9CA3AF',
          muted: '#A1A1AA',
        },
      },
      animation: {
        'count-up': 'countUp 2s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        countUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config