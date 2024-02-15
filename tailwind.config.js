/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors:{
        fondo:{
          start: '#0b0b0b',
          end:'#0b0b0b'
        } 
      }
    },
  },
  plugins: [],
}

