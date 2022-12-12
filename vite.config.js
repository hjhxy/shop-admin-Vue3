import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import windicss from 'vite-plugin-windicss'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    windicss()
  ],
  resolve: {
    alias: [ //配置别名
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ],
  }
})