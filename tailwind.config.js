/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.js", "./src/pages/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
