import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5182,
    strictPort: true,
    host: true,
  },
  build: {
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/app.js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(png|jpe?g|webp|svg|gif|avif|ico)$/i.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]'
          }
          return 'assets/[name][extname]'
        },
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'helmet-vendor': ['react-helmet-async'],
        },
      },
    },
  },
})
