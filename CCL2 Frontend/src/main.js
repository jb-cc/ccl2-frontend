// the main entry point of the application
// import all the necessary libraries and modules

import "./assets/tailwind.css";
import "./assets/fonts.css";

import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/router";

// create the app and mount it to the DOM
// create the pinia store and mount it to the app
// mount the router to the app

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount("#app");
