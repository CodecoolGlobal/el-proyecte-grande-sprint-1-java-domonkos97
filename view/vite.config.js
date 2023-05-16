import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '^/api/login$': {
        target: 'http://10.44.23.185:8080',
        rewrite: (path) => '/login'
      },
      '/api': {
        target: 'http://10.44.23.185:8080',
      }
    }
  }
})
