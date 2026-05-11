import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/CA_Vikas_Official/',

  plugins: [
    react(),
    tailwindcss(),
  ],

  css: {
    postcss: {
      plugins: [],
    },
  },

  build: {
    target: 'es2020',
    cssCodeSplit: true,

    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
          ],

          motion: [
            'gsap',
            'framer-motion',
            'lenis',
          ],
        },
      },
    },
  },
});
