import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

/* Font Awesome CSS */
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"

/* Bootstrap CSS */
import "../node_modules/bootstrap/dist/css/bootstrap.css"

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
