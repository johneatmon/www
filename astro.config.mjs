import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import critters from 'astro-critters';
import fonts from 'astro-fonts-next';
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
		fonts({
			url: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,700;1,6..72,400;1,6..72,700&display=swap',
		}),
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
