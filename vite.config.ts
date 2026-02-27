import { defineConfig } from "vite";
import vinext from "vinext";

export default defineConfig({
  plugins: [vinext()],
  build: {
    outDir: 'build',
    emptyOutDir: true, 
  },
});