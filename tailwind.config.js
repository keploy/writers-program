/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./styles.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Keploy brand helpers
        keploy: {
          navy: "#00163D",
          orange: "#F89559",
        }
      }
    },
  },
  plugins: [],
};