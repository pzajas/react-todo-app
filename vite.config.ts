import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@utils': '/src/utils',
      '@typescript': '/src/typescript',
      '@elements': '/src/elements',
      '@libs': '/src/libs',
      '@components': '/src/components',
      '@redux': '/src/redux',
    },
  },
  plugins: [react()],
})
