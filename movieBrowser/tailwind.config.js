/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,ts,tsx}", 'index.html'],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#15141F'
      },
      backgroundColor: {
        'input-dark': "#211F30"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(200deg, #FF8F71 0%, #EF2D1A 100%)'
      },
      backdropFilter: {
        'blur-2': 'blur(2px)'
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    function ({ addUtilities }) {
      addUtilities({
        '.bg-clip-text': {
          '-webkit-background-clip': 'text',
        },
        '.text-fill-transparent': {
          '-webkit-text-fill-color': 'transparent',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  // IE and Edge
          'scrollbar-width': 'none',  // Firefox
        },
      });
    },
  ],
}
