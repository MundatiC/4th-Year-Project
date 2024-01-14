/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'phone': '400px',
      'tablet': '600px'
    },
    colors: {
      'green': '#588517',
      'darkgreen': '#3a5a40',
      'darkergreen': '#344e41',
      'lightgreen': '#a3b18a',
      'cream': '#dad7cd',
    }
  },
  plugins: [],
}

