import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Optimize build for production
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion', 'react-intersection-observer'],
          icons: ['react-icons']
        }
      }
    },
    // Optimize assets
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000
  },
  // Development server optimization
  server: {
    open: true,
    host: true
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-intersection-observer']
  }
})
