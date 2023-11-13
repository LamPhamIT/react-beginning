/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto mono, monospace',
    },
    extend: {
      height: {
        screen: "100dvh"
      }
    },
  },
  plugins: [],
};
