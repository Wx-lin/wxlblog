import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus"; //添加1
import "element-plus/dist/index.css"; //添加2
import ElementIcon from "@/icons/ElementIcon";
import piniaPresist from "pinia-plugin-persistedstate";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementIcon)) {
  //这里改为导入的对象
  app.component(key, component);
}

const pinia = createPinia();
pinia.use(piniaPresist);
app.use(pinia);
app.use(router);
app.use(ElementPlus); //添加3

app.mount("#app");
