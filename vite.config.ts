import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://blog.maxxxu.com/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});