/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'greenberry': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',  // Primary brand color
          600: '#16a34a',  // Darker primary for hover states
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'cool-gray': {
          50: '#f8fafc',   // Background for sections (off-white)
          100: '#f1f5f9',  // Secondary background
          200: '#e2e8f0',  // Borders
          800: '#1e293b',  // Dark text
        }
      },
      backgroundColor: {
        'cool-white': '#f8fafc', // Very light blue-gray instead of yellow-white
        'cool-gray': '#f1f5f9', // Light blue-gray for subtle sections
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'ping-slow': 'ping-slow 5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(6deg)' },
          '50%': { transform: 'translateY(-6px) rotate(8deg)' },
        },
        'ping-slow': {
          '0%': { transform: 'scale(1)', opacity: '0.2' },
          '50%': { transform: 'scale(1.5)', opacity: '0.1' },
          '100%': { transform: 'scale(1)', opacity: '0.2' },
        },
      },
      boxShadow: {
        'inner-sm': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'brand': '0 4px 10px -2px rgba(22, 163, 74, 0.2)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'green-glow': '0 0 15px 2px rgba(34, 197, 94, 0.3)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'green-glow-start': 'rgba(34, 197, 94, 0.2)',
        'green-glow-end': 'rgba(34, 197, 94, 0.05)',
      }),
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--tw-prose-body)',
            a: {
              color: 'var(--tw-prose-links)',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}