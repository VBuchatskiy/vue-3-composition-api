import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { worker } from "./mocks/browser";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/src/dark/css-vars.scss";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

createApp(App).use(createPinia()).use(router).mount("#app");
