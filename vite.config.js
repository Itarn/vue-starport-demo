import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    }),

    /**
     * 自动补全 import
     * @see https://github.com/antfu/unplugin-auto-import
     */
    AutoImport({
      eslintrc: {
        enabled: true
      },
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],

      dts: true
    })
  ]
})
