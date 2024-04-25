/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
       backgroundImage: {
        'aboutHeaderBgImg': 'url("./src/assets/images/aboutHeader3.webp)',
       },
       position: {
        'unset': 'unset',
       },
    },
  },
  plugins: [],
}

