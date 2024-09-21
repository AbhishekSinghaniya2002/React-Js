/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // here why we use darkMode because ye jo functionality hai jo html se hamare pass aati hai ye functionality enable karne ke liye tailwind ke under yeh ek mode hota hai jo humko enable karna hota hai jiska naam hai darkmode . aur yaha par hame 2 chije milti hai ek ye midia ke basis par chalta hai ek ye class ke basis par cahlta hai. to mai nahi chahta KI ye jo system hai uske  basis par cahle kyunki bydefault system ke basis par hi chalta hai  isliye mai class use kar raha hu. 
  darkMode: "class", // 
  theme: {
    extend: {},
  },
  plugins: [],
}

