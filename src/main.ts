import ui from "@nuxt/ui/vue-plugin";
import { createApp } from "vue";

// oxlint-disable-next-line import/no-unassigned-import
import "./assets/css/main.css";
import App from "./App.vue";
import { router } from "./routes/router.ts";

const app = createApp(App);

app.use(router);
app.use(ui);

app.mount("#app");
