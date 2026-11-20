import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Vite defaults to dist/ but the site is deployed from build/ (what CRA used to output to)
    // TODO: once everything is working try switching to dist/
    outDir: 'build',
  },
})
