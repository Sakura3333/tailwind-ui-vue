/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx,vue}",
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			dark: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			indigo: colors.indigo,
			red: colors.rose,
			yellow: colors.amber,
		},
	  	extend: {},
	},
	plugins: [],
}