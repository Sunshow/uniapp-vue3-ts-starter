import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// @ts-ignore
import nested from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss'
// @ts-ignore
import tailwindcssConfig from './tailwind.config.js'
// @ts-ignore
import postcssPresetEnv from 'postcss-preset-env'
import uniTailwind from '@uni-helper/vite-plugin-uni-tailwind'

// https://vitejs.dev/config/
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        nested(),
        tailwindcss({
          config: tailwindcssConfig,
        }),
        postcssPresetEnv({
          stage: 3,
          features: { 'nesting-rules': false },
        }),
      ],
    },
  },
  plugins: [
    uni(),
    uniTailwind({
      /* options */
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
