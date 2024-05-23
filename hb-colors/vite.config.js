import federation from "@originjs/vite-plugin-federation";
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'hb-colors',
      remotes: {
        red_app: "http://localhost:5888/assets/redAppRemote.js",
        blue_app: "http://localhost:5889/assets/blueAppRemote.js",
      },
      shared: ['vue', 'vue-router']
    })
  ],
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
