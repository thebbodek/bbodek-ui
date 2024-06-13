import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'bbodek-ui',
      formats: ['cjs', 'es'],
      fileName: (format) => `bbodek-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
});
