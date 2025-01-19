import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Expose the server to all network interfaces
    port: process.env.PORT ? parseInt(process.env.PORT as string, 10) : 3000, // Cast string to number
  },
})
