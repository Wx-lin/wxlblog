import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite'; //加入这三条 配置自动导入vue
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';

// eslint-disable-next-line no-undef
const isDev = process.env.NODE_ENV === 'development';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      //这里配置内容  会生成几个文件
      resolvers: [ElementPlusResolver()],
      // 这里全局注册了所有vue和vue-router的API
      imports: ['vue', 'vue-router'],
      // 注册后将会存储在auto-imports中
      dts: 'auto-imports.d.ts'
    }),
    Components({
      //这里配置内容   会生成几个文件
      // 这里全局注册了components和views文件夹中的所有vue文件和tsx文件
      dirs: ['src/components', 'src/views'],
      extensions: ['vue', 'tsx'],
      // 注册后存储在components.d.ts中
      dts: 'components.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    viteMockServe({
      mockPath: 'mock',
      localEnbled: isDev,
      prodEnabled: !isDev,
      supports: false,
      watchFiles: true,
      injectCode: `
    import { setupProdMockServer } from './mockProdServer';
    setupProdMockServer();
    `,
      // eslint-disable-next-line no-undef
      injectFile: path.resolve(process.cwd(), 'src/main.js')
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    //配置代理服务器
    port: 5000,
    proxy: {
      '/api': {
        target: 'http://123.56.141.187:3004/',
        changeOrigin: true,
        // 需要将当前/a从地址中去掉
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
