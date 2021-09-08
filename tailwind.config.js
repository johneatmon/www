const { colors } = require('tailwindcss/defaultTheme');
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
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      cyan: {
        50: 'var(--jm-cyan-50)',
        100: 'var(--jm-cyan-100)',
        200: 'var(--jm-cyan-200)',
        300: 'var(--jm-cyan-300)',
        400: 'var(--jm-cyan-400)',
        500: 'var(--jm-cyan-500)',
        600: 'var(--jm-cyan-600)',
        700: 'var(--jm-cyan-700)',
        800: 'var(--jm-cyan-800)',
        900: 'var(--jm-cyan-900)',
      },
      pink: {
        50: 'var(--jm-magenta-50)',
        100: 'var(--jm-magenta-100)',
        200: 'var(--jm-magenta-200)',
        300: 'var(--jm-magenta-300)',
        400: 'var(--jm-magenta-400)',
        500: 'var(--jm-magenta-500)',
        600: 'var(--jm-magenta-600)',
        700: 'var(--jm-magenta-700)',
        800: 'var(--jm-magenta-800)',
        900: 'var(--jm-magenta-900)',
      },
      indigo: {
        50: 'var(--jm-indigo-50)',
        100: 'var(--jm-indigo-100)',
        200: 'var(--jm-indigo-200)',
        300: 'var(--jm-indigo-300)',
        400: 'var(--jm-indigo-400)',
        500: 'var(--jm-indigo-500)',
        600: 'var(--jm-indigo-600)',
        700: 'var(--jm-indigo-700)',
        800: 'var(--jm-indigo-800)',
        900: 'var(--jm-indigo-900)',
      },
      gray: {
        50: 'var(--jm-blueGray-50)',
        100: 'var(--jm-blueGray-100)',
        200: 'var(--jm-blueGray-200)',
        300: 'var(--jm-blueGray-300)',
        400: 'var(--jm-blueGray-400)',
        500: 'var(--jm-blueGray-500)',
        600: 'var(--jm-blueGray-600)',
        700: 'var(--jm-blueGray-700)',
        800: 'var(--jm-blueGray-800)',
        900: 'var(--jm-blueGray-900)',
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
