/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tenor: ["'Tenor Sans'", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
