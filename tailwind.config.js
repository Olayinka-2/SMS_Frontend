// tailwind.config.js  
module.exports = {  
    content: ["./src//*.{js,jsx,ts,tsx}", "./public/index.html"],  
    theme: {  
      extend: {},  
    },  
    plugins: [],  
  };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src//*.{js,jsx,ts,tsx}"], // Ensures Tailwind scans JSX files
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};