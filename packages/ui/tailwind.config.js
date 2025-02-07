import baseConfig from "@repo/tailwind-config/tailwind.config.js";

/** @type {import('tailwindcss').Config} */
export default {
  ...baseConfig,
  content: ["./app/**/*.{html,js,jsx,ts,tsx}"],
  plugins: [],
};
