import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import "@/assets/icon/iconfont.css";
// 路由
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
