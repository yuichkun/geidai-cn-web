const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			...colors,
			primary: '#BCC1D1'
		},
		extend: {}
	},
	plugins: []
};
