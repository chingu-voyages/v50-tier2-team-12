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
        'dark-violet': '#542E96',
        'hover-violet': '#9767E8',
      },
      width: {
        17: '71px',
      },
      borderWidth: {
        1: '1.41px',
      },
      padding: {
        17: '4.5rem',
      },
      borderRadius: {
        '5p': '5.62px',
      },
      zIndex: {
        high: '1010',
      },
      height: { cta: '3.4375rem' },
      boxShadow: {
        big: '0px 0px 36px rgba(0,0,0,0.04)',
        small: '0px -1px 36px rgba(0,0,0,0.04)',
        'card-shadow': '0px 0px 36px 0px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        tree: 'url("./assets/tree.webp")',
        'custom-gradient':
          'linear-gradient(0deg, #ECECEC 0%, #ECECEC 100%), #ECECEC',
        'order-bg': 'url("./assets/order-bg.svg")',
      },
      backgroundSize: {
        sm: '20px',
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
