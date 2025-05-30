import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import ElementPlus from 'unplugin-element-plus/vite'
  
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus({}), 
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 关键配置
      '#': path.resolve(__dirname, './public'),
    }
  },
  build: {
    outDir: 'dist',
  },
})