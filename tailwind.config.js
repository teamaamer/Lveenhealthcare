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
          50: '#FAF9F7',
          100: '#F5F3EF',
          200: '#E9E7E3',
          300: '#DDD9D2',
        },
        // Brand red (from logo) — used for CTAs and accents
        burgundy: {
          50: '#FFF3F3',
          100: '#FDE2E2',
          200: '#FAC5C5',
          300: '#F29999',
          400: '#E36666',
          500: '#C93636',
          600: '#B22222',
          700: '#991F1F',
          800: '#7A1919',
          900: '#5C1313',
        },
        // Navy-tinted neutrals (from logo) — used for text and dark surfaces
        charcoal: {
          50: '#F7F8FA',
          100: '#EDEFF3',
          200: '#D7DBE3',
          300: '#AEB6C4',
          400: '#7C879C',
          500: '#5B6472',
          600: '#434D60',
          700: '#2C3549',
          800: '#16233F',
          900: '#0C1526',
        },
        // Brand navy/blue (from logo) — used for secondary accents & icons
        navy: {
          50: '#EEF3FA',
          100: '#D7E3F4',
          200: '#AFC7E9',
          300: '#7CA3D6',
          400: '#4A7EC0',
          500: '#2C5FA0',
          600: '#164A8A',
          700: '#0E3470',
          800: '#0B2A5A',
          900: '#081F42',
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
