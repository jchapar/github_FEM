/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryBlue: '#0079FF',
        // Light Mode Colors
        ironBlue: '#697C9A',
        steelBlue: '#4B6A9B',
        darkcolor: '#2B3442',
        lightColor: '#F6F8FF',
        white: '#FFFFFF',
        // Dark Mode Colors
        dark: '#141D2F',
        darkBlue: '#1E2A47',
      },
      fontFamily: {
        sans: ['Space Mono', 'monospace'],
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
};
