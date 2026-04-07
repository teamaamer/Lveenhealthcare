/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F5F1EB',
          300: '#EDE7DD',
        },
        burgundy: {
          50: '#FDF4F4',
          100: '#FAE8E8',
          200: '#F4CFCF',
          300: '#E89B9B',
          400: '#D86767',
          500: '#B84444',
          600: '#8B2F2F',
          700: '#6B2424',
          800: '#4A1919',
          900: '#2D1010',
        },
        charcoal: {
          50: '#F7F7F7',
          100: '#E3E3E3',
          200: '#C8C8C8',
          300: '#A4A4A4',
          400: '#717171',
          500: '#4A4A4A',
          600: '#3A3A3A',
          700: '#2A2A2A',
          800: '#1F1F1F',
          900: '#141414',
        },
        taupe: {
          50: '#FAF9F7',
          100: '#F0EDE8',
          200: '#E0D9CF',
          300: '#C9BFB0',
          400: '#B0A393',
          500: '#8F8170',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.7s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
