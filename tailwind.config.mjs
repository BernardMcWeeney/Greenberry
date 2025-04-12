/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enables dark mode by toggling a "dark" class on the root element
  theme: {
    extend: {
      colors: {
        // Core brand color “greenberry” updated for improved accessibility
        greenberry: {
          50:  '#F3FAF3',
          100: '#E1F7E1',
          200: '#C4EDC4',
          300: '#A6E2A6',
          400: '#88D888',
          500: '#5AC55A', // Primary brand color
          600: '#43A343', // Darker shade for hover states
          700: '#2C7B2C',
          800: '#205D20',
          900: '#163F16',
        },
        // Accessible accent colors with increased contrast
        accent: {
          blue: {
            50:  '#F0F9FF',
            100: '#E0F2FE',
            200: '#B9E6FE',
            300: '#8CD9FD',
            400: '#57CBF1',
            500: '#2AA6E0',
            600: '#1088C0',
            700: '#0E77A6',
            800: '#0B6490',
            900: '#084D74',
          },
          red: {
            50:  '#FFF5F5',
            100: '#FFE3E3',
            200: '#FFC8C8',
            300: '#FFA8A8',
            400: '#FF8787',
            500: '#FF6B6B',
            600: '#FA5252',
            700: '#F03E3E',
            800: '#E03131',
            900: '#C92A2A',
          },
          orange: {
            50:  '#FFF8F1',
            100: '#FFECDE',
            200: '#FFD8BD',
            300: '#FFC59C',
            400: '#FFB37B',
            500: '#FF9F5A',
            600: '#FF8C39',
            700: '#FF7900',
            800: '#E66F00',
            900: '#CC6600',
          },
          purple: {
            50:  '#F6F5FF',
            100: '#EDEBFF',
            200: '#D4CEFF',
            300: '#B8AFFF',
            400: '#9D90FF',
            500: '#8371FF',
            600: '#6D5FFB',
            700: '#564EEE',
            800: '#433EDD',
            900: '#322DDC',
          },
        },
        // Neutral scales updated to offer clear contrast on both light and dark backgrounds
        neutral: {
          50:  '#FFFFFF',
          100: '#FDFDFD',
          200: '#F7F7F7',
          300: '#EFEFEF',
          400: '#E7E7E7',
          500: '#CECECE',
          600: '#A6A6A6',
          700: '#8D8D8D',
          800: '#4D4D4D',
          900: '#2F2F2F',
        },
      },
      // Custom background naming; update these if needed based on contrast testing
      backgroundColor: {
        'light': '#FFFFFF', // For primary light backgrounds
        'subtle': '#F7F7F7', // For secondary or subtle light sections
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
      // Box shadows are kept minimal; they complement the new color tones
      boxShadow: {
        card: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
        cardHover: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
        brand: '0 4px 10px -2px rgba(43, 163, 67, 0.2)',
      },
      // Typography configuration optimized for readability
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
