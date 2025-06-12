import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Ensure the dev server handles SPA routing
    historyApiFallback: true,
  },
  build: {
    // Ensure the build output works for SPA routing
    outDir: 'dist',
    assetsDir: 'assets',
  },
});