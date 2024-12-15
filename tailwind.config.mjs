/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			maxWidth: {
				'custom-sm': '400px',   
				'custom-md': '600px',    
				'custom-lg': '900px',    
				'custom-xl': '1200px',   
			  },
			colors:{
				primary_bg:'#ffffff',
				secondary_bg:'#3e4142',


				logo_text:'#252729',
			},
			fontSize:{
				12: '12px',
				14: '14px',
				16: '16px',
				18: '18px',
				20: '20px',
				24: '24px',
				32: '32px',
				40: '40px',
				48: '48px',
				56: '56px',
				64: '64px',

			}
		},
	},
	plugins: [],
}
