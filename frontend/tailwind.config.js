/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}

