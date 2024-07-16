/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
      },
      colors: {
        light: '#8A8A8A',
        'primary-violet': '#7D41E3',
        grey: '#757575',
        black: '#33293B',
      },
    },
  },
  plugins: [],
};
