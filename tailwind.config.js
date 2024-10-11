/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js','./src/**/*.jsx','./src/*.js','./src/*.jsx', './public/index.html'],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}

