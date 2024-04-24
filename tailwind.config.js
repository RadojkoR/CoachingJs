/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'parallaxHome': 'url("./public/assets/images/parallaxHome.webp")'
      }
    },
  },
  plugins: [],
}

