/** @type {import('tailwindcss').Config} */
const tailwindcssConfig = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'linear-theme': 'linear-gradient(132deg, rgb(247, 242, 234),rgb(249,248,244), white 70%)',
			},
			colors: {
				'light-main': 'rgb(140,70,60)',
			},
			maxWidth: {
				content: '576px',
			},
			width: {
				content: '576px',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};

module.exports = tailwindcssConfig;
