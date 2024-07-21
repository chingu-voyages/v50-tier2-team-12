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
        disabled: '#919191',
        'light-violet': '#F7EFFF',
      },
      width: {
        17: '71px',
      },
      borderWidth: {
        1: '1.41px',
      },
      borderRadius: {
        '5p': '5.62px',
      },
    },
  },
  plugins: [],
};
