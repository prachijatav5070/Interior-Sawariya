// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// for SPA fallback
export default defineConfig({
base: "/Interior-Sawariya/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.html'
    }
  }
});
