/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'branding-sans': ['Ubuntu', 'sans-serif']
			},
			colors: {
				'branding-primary': {
					50: '#eff7ff',
					100: '#dcebfd',
					200: '#c1ddfc',
					300: '#96c9fa',
					400: '#65abf5',
					500: '#4b91f1',
					600: '#2b6de5',
					700: '#2358d2',
					800: '#2248ab',
					900: '#214087',
					950: '#192852'
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'base',
			strategy: 'class'
		})
	]
};
