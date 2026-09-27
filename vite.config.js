import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portofolio-radit-fase1', // Ganti dengan nama repositori kamu di GitHub
})