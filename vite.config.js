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
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: `@import "${resolve(
          __dirname,
          "./src/assets/css/publicCss.less"
        )}";`,
      },
    },
  },
});
