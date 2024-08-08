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
      borderColor:{
        'custom-slider-card-content': '#EA9B89',
        'custom-slider-card':'rgba(235, 168, 162, 0.5)'
      },
      backgroundImage:{
        'custom-body': 'linear-gradient(to top left, #713CBD, #CE257C, #EAA978)',
        'custom-card': 'linear-gradient(to bottom right, #DA696F, #B36291)'
      }
    },
  },
  plugins: [],
}

