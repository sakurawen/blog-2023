/** @type {import('tailwindcss').Config} */
const tailwindcssConfig = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        content: '648px',
      },
      width: {
        content: '648px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

module.exports = tailwindcssConfig;
