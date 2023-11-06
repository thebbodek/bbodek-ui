import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import reactRefresh from "@vitejs/plugin-react-refresh";
import linaria from "@linaria/vite";

export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    linaria({
      include: ["**/*.{ts,tsx}"],
      babelOptions: {
        presets: [ "@babel/preset-typescript", "@babel/preset-react" ],
      },
    }),
  ],
});
