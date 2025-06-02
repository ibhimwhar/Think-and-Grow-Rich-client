import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import css from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    react(),
    css()
  ],
<<<<<<< HEAD
  base: "/"
=======
  base: "/",
>>>>>>> b6b711a5cf89f4cb7a3bdfbaa97a8d04012db300
})
