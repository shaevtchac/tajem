/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '360px',
      sm: '530px',
      md: '700px',
      lg: '900px',
      xl: '1280px',
    },

    extend: {
      colors: {
        primary: '#00e0d0',
        tdark: '#413d4b',
        tlight: '#333333',
        whitetr: '#ffffff88',
        menubg: '#000000bb',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        roboto: ['Roboto', 'serif'],
      },
    },
  },

  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
