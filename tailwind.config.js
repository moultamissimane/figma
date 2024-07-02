// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js}', // Adjust this to the paths where your files are located
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
