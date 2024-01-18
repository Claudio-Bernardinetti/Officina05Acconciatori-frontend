import { createApp } from "vue";
import "./assets/scss/style.scss";
import App from "./App.vue";
import { router } from "./router.js";
import { setupCalendar, Calendar, DatePicker } from "v-calendar";
import "v-calendar/style.css";
// Create app instance
const app = createApp(App);

// Use plugin defaults (optional)
app.use(setupCalendar, {
  locales: {
    it: {
      firstDayOfWeek: 1,
      masks: {
        weekdays: "WW",
        title: "MMMM YYYY",
        navMonths: "MMM",
        input: ["L", "YYYY-MM-DD", "YYYY/MM/DD"],
        dayPopover: "L",
        data: ["L", "YYYY-MM-DD", "YYYY/MM/DD"],
        // ...aggiungi altre maschere se necessario
      },
    },
  },
  modelConfig: {
    start: {
      timeAdjust: "09:30:00",
    },
    end: {
      timeAdjust: "20:59:59",
    },
  },
});

// Use the components
app.component("VCalendar", Calendar);
app.component("VDatePicker", DatePicker);

// Use router and mount the app
app.use(router).mount("#app");
