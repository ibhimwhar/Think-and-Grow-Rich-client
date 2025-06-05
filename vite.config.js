import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import css from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    react(),
    css()
  ],
})
