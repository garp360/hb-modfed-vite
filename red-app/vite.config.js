import federation from "@originjs/vite-plugin-federation";
import { fileURLToPath, URL } from 'node:url'


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'red-app',
      filename: 'redAppRemote.js',
      // Modules to expose
      exposes: {
        './RedApp': './src/views/HomeView.vue',
      },
      shared: ['vue', 'vue-router']
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
