import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'bbodek-ui',
      formats: ['es'],
      fileName: (format) => `bbodek-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'overlay-kit', 'tailwindcss'],
      output: {
        assetFileNames: ({ names }) => {
          if (/\.(ttf|otf|woff|woff2|eot)$/.test(names[0] ?? '')) {
            return 'fonts/[name][extname]';
          }

          return '[name][extname]';
        },
      },
    },
  },
});
