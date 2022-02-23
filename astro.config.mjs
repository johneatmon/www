// import { astroImagePlugin } from 'astro-imagetools';

export default {
  renderers: [],
  buildOptions: {
    site: 'https://johneatmon.dev',
    sitemap: true,
  },
  vite: {
    // plugins: [astroImagePlugin],
    ssr: {
      external: ['svgo'],
    },
  },
};
