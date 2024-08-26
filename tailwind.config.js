/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Manrope:['Manrope']
      },
      boxShadow:{
        '3xl':"0 0 20px rgb(83,255,170)"
      },
    },
  },
  plugins: [],
}

