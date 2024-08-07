/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-innerShadow": '10px 10px 39px -1px rgba(239,50,202,0.75) inset'
      },
      
    },
  },
  plugins: [],
}

