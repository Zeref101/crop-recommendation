/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          'primary-grey-#1e2127':'#1e2127',
          'primary-green-#c8ea61':'#c8ea61',
        }
      },
    },
    plugins: [],
  }