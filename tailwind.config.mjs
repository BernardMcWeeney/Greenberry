/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Toggle dark mode with a "dark" class on the root element
  theme: {
    extend: {
      colors: {
        // Updated brand color “greenberry” with stronger, deeper hues
        greenberry: {
          50:  '#e9fbe6',
          100: '#c8f2c8',
          200: '#9ae099',
          300: '#6dcc6d',
          400: '#42ba42',
          500: '#2fa22f',  // Primary brand color updated for better contrast
          600: '#238123',  // Darker accent for hover and strong emphasis
          700: '#176d16',
          800: '#0e5f0e',
          900: '#074107',
        },
        // Updated accent colors with stronger contrast (inspired by Material Design)
        accent: {
          blue: {
            50:  '#e3f2fd',
            100: '#bbdefb',
            200: '#90caf9',
            300: '#64b5f6',
            400: '#42a5f5',
            500: '#2196f3',
            600: '#1e88e5',
            700: '#1976d2',
            800: '#1565c0',
            900: '#0d47a1',
          },
          red: {
            50:  '#ffebee',
            100: '#ffcdd2',
            200: '#ef9a9a',
            300: '#e57373',
            400: '#ef5350',
            500: '#f44336',
            600: '#e53935',
            700: '#d32f2f',
            800: '#c62828',
            900: '#b71c1c',
          },
          orange: {
            50:  '#fff3e0',
            100: '#ffe0b2',
            200: '#ffcc80',
            300: '#ffb74d',
            400: '#ffa726',
            500: '#ff9800',
            600: '#fb8c00',
            700: '#f57c00',
            800: '#ef6c00',
            900: '#e65100',
          },
          purple: {
            50:  '#f3e5f5',
            100: '#e1bee7',
            200: '#ce93d8',
            300: '#ba68c8',
            400: '#ab47bc',
            500: '#9c27b0',
            600: '#8e24aa',
            700: '#7b1fa2',
            800: '#6a1b9a',
            900: '#4a148c',
          },
        },
        // Rich, contrasting neutral scale (inspired by Material grayscale)
        neutral: {
          50:  '#ffffff',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      // Custom background color names for light sections
      backgroundColor: {
        'light': '#ffffff',  // Primary light background
        'subtle': '#f5f5f5', // Secondary subtle background
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      // Simplified animation and keyframe for a floating effect remains unchanged
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      // Box shadows defined for added depth
      boxShadow: {
        card: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
        cardHover: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
        brand: '0 4px 10px -2px rgba(35, 129, 35, 0.2)',
      },
      // Typography optimized for readability using the revised neutral colors
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.800'),
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
