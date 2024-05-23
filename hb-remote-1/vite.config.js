import federation from "@originjs/vite-plugin-federation";
import { fileURLToPath, URL } from 'node:url'


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'hb-remote',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './AppHeader': './src/components/AppHeader.vue',
      },
      shared: ['vue']
    })
  ],
  base: 'http://localhost:5001',
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"]
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
