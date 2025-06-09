/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F9F4',
          100: '#D8EFE2',
          200: '#B2DFCC',
          300: '#8BCFB5',
          400: '#65BF9F',
          500: '#40916C',
          600: '#2D6A4F',
          700: '#245240',
          800: '#1B3A30',
          900: '#132320'
        },
        secondary: {
          50: '#FFF9E6',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCA3A',
          500: '#FFB800',
          600: '#CC9200',
          700: '#996D00',
          800: '#664800',
          900: '#332400'
        },
        accent: {
          50: '#F2F2EC',
          100: '#E6E6D8',
          200: '#CCCCB2',
          300: '#B7B7A4',
          400: '#A3A38B',
          500: '#8A8A72',
          600: '#72725A',
          700: '#595943',
          800: '#40402D',
          900: '#262616'
        },
        success: {
          500: '#10B981',
          600: '#059669'
        },
        warning: {
          500: '#F59E0B',
          600: '#D97706'
        },
        error: {
          500: '#EF4444',
          600: '#DC2626'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};