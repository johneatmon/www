export default /** @type {import('astro').AstroUserConfig} */ ({
  buildOptions: {
    site: 'https://johneatmon.dev',
    sitemap: true,
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
  renderers: [],
});
