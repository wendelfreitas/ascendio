/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', './.storybook/preview.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e5f0ff',
          100: '#cfe3ff',
          200: '#a9c9ff',
          300: '#75a2ff',
          400: '#3f6aff',
          500: '#1434ff',
          600: '#001aff',
          700: '#001bff',
          800: '#0018e3',
          900: '#000dbd',
          950: '#000466',
        },
      },
    },
  },
  plugins: [],
};
