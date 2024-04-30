import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@components', replacement: path.resolve(__dirname, 'src', 'components') },
      { find: '@types', replacement: path.resolve(__dirname, 'src', 'utils', 'types') },
      { find: '@public', replacement: path.resolve(__dirname, 'public') },
    ]
  }
})
