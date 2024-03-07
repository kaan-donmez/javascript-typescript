import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  plugins: [react()],
});
