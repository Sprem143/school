import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
server: {
host: true,
strictPort: true,
port:"https://school-backend-wz4q.onrender.com",
}
})
