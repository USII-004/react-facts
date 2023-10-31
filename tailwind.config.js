/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-white': 'url("../public/img/reactjs-icon2.png")',
        'hero-black': 'url("../public/img/reactjs-icon-bg-black.png")', 
      }
    },
  },
  plugins: [],
}

