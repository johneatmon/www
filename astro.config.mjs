import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
	site: 'https://jmae.xyz',
	experimental: {
		integrations: true,
	},
	markdown: {
		syntaxHighlight: 'prism',
	},
	integrations: [astroImageTools, compress({ html: false, img: false, svg: false }), robotsTxt()],
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
});
