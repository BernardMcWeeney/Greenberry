/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enables dark mode by adding a "dark" class to the root element
  theme: {
    extend: {
      colors: {
        // Core brand color
        greenberry: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',  // Primary brand
          600: '#16a34a',  // Darker shade for hover states
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Additional accessible accent colors
        accent: {
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
          },
          red: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
          },
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          },
          purple: {
            50: '#f5f3ff',
            100: '#ede9fe',
            200: '#ddd6fe',
            300: '#c4b5fd',
            400: '#a78bfa',
            500: '#8b5cf6',
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95',
          }
        },
        // Neutral scales useful for backgrounds and text
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      // Optionally define background colors if you want custom naming
      backgroundColor: {
        'light': '#fafafa', // For light sections
        'subtle': '#f5f5f5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      // Simplified animation and keyframe for a floating effect
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      // Minimal yet effective box-shadow definitions
      boxShadow: {
        card: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
        cardHover: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
        brand: '0 4px 10px -2px rgba(22, 163, 74, 0.2)',
      },
      // The following configuration is minimal yet sufficient for typography
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.700'),
            maxWidth: '65ch',
            a: {
              color: theme('colors.accent.blue.600'),
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': { textDecoration: 'underline' },
            },
          },
        },
      }),
    },
  },
  plugins: [],
}
