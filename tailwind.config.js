const { Odibee_Sans } = require("next/font/google");
const { Roboto } = require("next/font/google");
const { Lobster } = require("next/font/google");
import scrollbar from "tailwind-scrollbar"
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideInOnce: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideInOnce: 'slideInOnce 1s ease-out forwards',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        lobster: ['Lobster', 'sans-serif'],
        odibee: ['Odibee_Sans', 'sans-serif'],
      },
    },
  },
  plugins: [scrollbar],
}
