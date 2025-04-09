import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base:
    process.env.NODE_ENV === 'production' && process.env.VERCEL !== '1'
      ? '/Reactfrontend/' // For GitHub Pages
      : '/',              // For Vercel or localhost
  plugins: [react()],
});
