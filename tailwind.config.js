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
  plugins: [
    require('tailwindcss-fluid')({
      textSizes: {
        xs: {
          min: '0.87rem', //
          max: '0.96rem',
          minvw: '320px',
          maxvw: '1140px',
        },
        sm: {
          min: '1.04rem',
          max: '1.15rem',
          minvw: '320px',
          maxvw: '1140px',
        },
        md: {
          min: '1.25rem',
          max: '1.38rem',
          minvw: '320px',
          maxvw: '1140px',
        },
        lg: {
          min: '1.50rem',
          max: '1.65rem',
          minvw: '320px',
          maxvw: '1140px',
        },
        xl: {
          min: '1.80rem',
          max: '1,98rem',
          minvw: '320px',
          maxvw: '1140px',
        },
        '2xl': {
          min: '2.16rem',
          max: '2.38rem',
          minvw: '320px',
          maxvw: '1140px',
        },
        '3xl': {
          min: '2.59rem',
          max: '2.85rem',
          minvw: '320px',
          maxvw: '1140px',
        },
        '4xl': {
          min: '3.11rem',
          max: '3.42rem',
          minvw: '320px',
          maxvw: '1140px',
        },
        '5xl': {
          min: '3.73rem',
          max: '4.11rem',
          minvw: '320px',
          maxvw: '1140px',
        },
      },
    }),
  ],
};
