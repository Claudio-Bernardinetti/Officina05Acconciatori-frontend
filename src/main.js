import { createApp } from "vue";
import "./assets/scss/style.scss";
import App from "./App.vue";
import { router } from "./router.js";
import { setupCalendar, Calendar, DatePicker } from "v-calendar";
import "v-calendar/style.css";
// Create app instance
const app = createApp(App);

// Use plugin defaults (optional)
app.use(setupCalendar, {});

// Use the components
app.component("VCalendar", Calendar);
app.component("VDatePicker", DatePicker);

// Use router and mount the app
app.use(router).mount("#app");
