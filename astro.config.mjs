import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://jmae.xyz',
	integrations: [image(), mdx()],
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
});
