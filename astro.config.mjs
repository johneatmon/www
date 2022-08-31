import { defineConfig } from 'astro/config';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
	site: 'https://jmae.xyz',
	integrations: [image()],
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
});
