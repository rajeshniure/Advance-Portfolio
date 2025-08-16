import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          three: ['three'],
          r3f: ['@react-three/fiber'],
          drei: ['@react-three/drei'],
          animation: ['framer-motion']
        }
      }
    },
    chunkSizeWarningLimit: 1200
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@mui/material', 'framer-motion']
  }
})
