import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/N-kanaka/',  // Ensure this matches your GitHub repository name
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom'],  // Exclude react-router-dom from the bundle
    },
  },
});
