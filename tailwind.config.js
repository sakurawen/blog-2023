/** @type {import('tailwindcss').Config} */
const tailwindcssConfig = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
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
