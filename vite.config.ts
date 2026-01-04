import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const repoBase = '/final-project-10211_team_9/'
  const base = command === 'serve' ? '/' : repoBase

  return {
    plugins: [react()],
    base,
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api/, ''),
        },
      },
    },
  }
})
