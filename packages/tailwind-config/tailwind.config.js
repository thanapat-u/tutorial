/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./app/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ci-green": "#1DB954",
      },
    },
  },
  plugins: [],
};
