/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const CustomStyle = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective-1000": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    }
  })
})

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ESummitBlue-900": '#080F2B',
        "ESummitBlue-700": '#1B1A54',
        "ESummitBlue-500": '#525C91',
        "ESummitBlue-300": '#9290C2',
      }
    },
  },
  plugins: [CustomStyle],
}

