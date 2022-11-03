import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000
  },
  build: {
    target: 'esnext',
    lib: {
      entry: './src/lib/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => `solid-paginate.${format === 'es' ? 'mjs' : 'cjs'}`
    },
    rollupOptions: {
      external: ['solid-js', 'solid-js/web', 'solid-js/store']
    }
  }
})
