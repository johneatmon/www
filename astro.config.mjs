import astroImagePlugin from 'astro-imagetools/plugin';

export default {
  renderers: [],
  buildOptions: {
    site: 'https://johneatmon.dev',
    sitemap: true,
  },
  vite: {
    plugins: [astroImagePlugin],
    ssr: {
      external: ['svgo'],
    },
  },
};
