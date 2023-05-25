/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '530px',
      md: '700px',
      lg: '900px',
      xl: '1280px',
    },

    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
      roboto: ['Roboto', 'serif'],
    },
    extend: {
      colors: {
        primary: '#00e0d0',
        tdark: '#413d4b',
        tlight: '#333333',
        menubg: '#00000088',
      },
    },
  },

  plugins: [],
};

