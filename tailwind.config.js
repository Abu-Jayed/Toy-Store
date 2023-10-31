/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        "xl":"1px 1px 10px 0.5px rgb(0 0 0 / 0.1)"
      }
    },
  },
  plugins: [require("daisyui")],
}

