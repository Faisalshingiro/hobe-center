import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@emailjs/browser'],
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      external: ['@emailjs/browser'],
    },
  },
});