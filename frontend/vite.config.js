import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This keeps it consistent everywhere. 
  // You will just always visit http://localhost:5173/Dashboard/
  base: '/Dashboard/',
  server: {
    open: '/Dashboard/', // This tells Vite to automatically open the right subpage
  }
})