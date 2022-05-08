import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { defineConfig } from 'vite';

//root: path.resolve(__dirname, 'dev'),

const config = defineConfig({

  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/entry.js'),
      name: 'Tree',
      fileName(format) {
        if (format === 'es') return 'ten-form.mjs';
        if (format === 'umd') return 'ten-form.cjs';
        if (format === 'iife') return 'ten-form.js';
      },
      formats: ['iife', 'es', 'umd'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
        exports: 'named'
      },
    }
  },
});

export default config;
