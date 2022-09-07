import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import critters from 'astro-critters';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import robotsTxt from 'astro-robots-txt';
import sitemap from 'astro-sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://jmae.xyz',
	integrations: [
		compress({
			html: false,
			img: false,
			svg: false,
		}),
		critters(),
		image(),
		mdx(),
		prefetch(),
		robotsTxt(),
		sitemap(),
	],
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
});
