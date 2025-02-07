import baseConfig from "@repo/tailwind-config/tailwind.config.js";

/** @type {import('tailwindcss').Config} */
export default {
  ...baseConfig,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
};
