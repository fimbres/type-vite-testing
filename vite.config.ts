import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    css: true,
    environment: "jsdom",
    // browser: {
    //   enabled: true,
    //   provider: 'playwright',
    //   instances: [
    //     { browser: 'chromium' },
    //   ],
    // },
  },
});
