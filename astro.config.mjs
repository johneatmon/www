import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';
import AutoImport from 'astro-auto-import';
import compress from 'astro-compress';
import critters from 'astro-critters';
import robotsTxt from 'astro-robots-txt';
import sitemap from 'astro-sitemap';

export default defineConfig({
	site: 'https://jmae.xyz',
	experimental: {
		integrations: true,
	},
	markdown: {
		syntaxHighlight: 'prism',
	},
	integrations: [
		astroImageTools,
		AutoImport({
			imports: [
				{
					'astro-imagetools/components': ['Img'],
					'astro-icon': ['Icon'],
				},
			],
		}),
		compress({ html: false, img: false, svg: false }),
		critters(),
		robotsTxt(),
		sitemap(),
	],
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
});
