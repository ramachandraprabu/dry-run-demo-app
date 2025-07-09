import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
    emptyOutDir: true, // also necessary
  },
  plugins: [react()],
  server: {
    historyApiFallback: true,
    proxy: {
      "/api/service-a": {
        target: "http://localhost:3001",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/service-a/, ""),
      },
      "/api/service-b": {
        target: "http://localhost:3002",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/service-b/, ""),
      },
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
