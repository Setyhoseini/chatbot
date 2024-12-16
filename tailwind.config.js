/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-text-color': 'hsla(209, 73%, 7%, 1)',
        'gray-text': 'hsla(0, 0%, 38%, 1)',
        'green': 'hsla(164, 99%, 40%, 1)',
        'border-color': 'hsla(150, 5%, 93%, 1)',
      }
    },
    fontFamily: {
      BricolageGrotesque: ['BricolageGrotesque'],
    },

    screens: {
      'sm': '428px',
    },
  },
  plugins: [],
}

