import type {Config} from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			transitionProperty: {
				height: 'height',
			},
			screens:{
				'2lg': '1020px'
			},
			keyframes: {
				drop: {
					'0%': {bottom: '100%'},
					'50%': {bottom: '50%'},
					'100%': {bottom: '0%'},
				},
				menuIn: {
					'0%': {opacity: '0', display: 'none'},
					'1%': {opacity: '0', display: 'flex'},
					'100%': {opacity: '1', display: 'flex'},
				},
			},
			animation: {
				'drop-menu': 'drop .2s linear forwards',
				'drop-reverse': 'drop 2s linear forwards',
        'menu-in': 'menuIn .6s linear forwards'
			},
		},
	},
	darkMode: 'class',
}
export default config
