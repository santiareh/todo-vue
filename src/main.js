import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./index.css";

const app = createApp(App)
app.mount("#app");
