import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      name: "index",
      entry: "./src/index.ts",
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
