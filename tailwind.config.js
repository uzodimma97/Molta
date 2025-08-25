/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // if your project is in src/
    "./components/**/*.{js,ts,jsx,tsx}", // if you have a components folder
    "./pages/**/*.{js,ts,jsx,tsx}", // if Next.js
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}