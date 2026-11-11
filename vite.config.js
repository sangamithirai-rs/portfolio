// vite.config.js – minimal configuration for a plain‑HTML/JS portfolio
import { defineConfig } from 'vite';

export default defineConfig({
  // Project root (where index.html lives)
  root: '.',
  // Build output directory
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  // If you later add React/TSX you can enable the plugin here:
  // plugins: [require('@vitejs/plugin-react')()],
});
