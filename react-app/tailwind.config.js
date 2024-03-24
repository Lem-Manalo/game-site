/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3cda5a',
        secondary: '#7def93',
        accent: '#52f371',
        background: '#f6fdf8',
        text: '#061108'
      },
    },
  },
  plugins: [],
}

