/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
       fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],
        lemon: ['Lemon', 'cursive'],
        rochester: ['Rochester', 'cursive'],
        saira: ['Saira Condensed', 'sans-serif'],
      },
      backgroundImage: {
        'lightpink': 'linear-gradient(90deg, #FFFFFF 0%, #F5A7F9 100%)',
      },
      colors: {
        lightpink: {
          DEFAULT: '#F5A7F9',
        },
        bluedarks:{
          DEFAULT: '#22356F',
        }
      },
    },
  },
  plugins: [],
}
