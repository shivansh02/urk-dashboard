/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        textDark: "#19193D",
        textLight: "#616161",
        grayLight: "#F2F2F4",
        darkBlue: "#0800A3",
        accent: "#445CEE",
        lightestBlue: "#A8B4EE",
        accentGreen: "#3CABA0",
    
    
      }, 
      
      fontFamily: {
        'roboto-slab': ['Roboto Slab', 'sans-serif'],
      },
    },
  },
  
  plugins: [],
}