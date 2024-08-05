/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        light: '#8A8A8A',
        'primary-violet': '#7D41E3',
        grey: '#757575',
        black: '#33293B',
        disabled: '#919191',
        'light-violet': '#F7EFFF',
        'light-grey': '#f7f7f7',
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
      minHeight: {
        view: 'calc(100vh-10rem)',
      },
      zIndex: {
        high: '1010',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: '380px' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
