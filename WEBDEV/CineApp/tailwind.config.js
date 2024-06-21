/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'violet': "url('/public/violet 1.png')",
      'footer-texture': "url('/public/Rectangle 1.png')",
    }},
  },
  plugins: [],
}
