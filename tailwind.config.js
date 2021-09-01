const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}'],
  darkMode: 'media',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
      screens: {
        xl: '1080px',
      },
    },
    extend: {
      fontFamily: {
        sans: ["'Lota\\ Grotesque'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
