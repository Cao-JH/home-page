import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 配置@别名
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置@别名
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
