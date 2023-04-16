module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  'sans': ["'Poppins'", 'sans-serif'],
			  'open': ["'Open Sans'", 'sans-serif']
			},
			gridTemplateColumns: {
				'partnersGrid': 'repeat(3, 250px)'
			},
		},
	},
	plugins: [require('tailwind-scrollbar'),require('@tailwindcss/typography')],
};
