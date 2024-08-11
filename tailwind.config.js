/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'680px',
      lg:'1024px',
      
    },
    extend: {},
  },
  plugins: [],
}