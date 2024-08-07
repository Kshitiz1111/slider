/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-innerShadow": '10px 10px 39px -1px rgba(234, 155, 137,0.75) inset'
      },
      colors: {
        'custom-pink': '#DA696F',
        'custom-pink-2': '#CF7782'
      },
    },
  },
  plugins: [],
}

