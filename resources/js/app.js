import {createApp} from "vue"
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import "../css/app.css"
import router from "./router"
import axios from "axios"

axios.defaults.baseURL= "/api"

import App from "./App.vue";


const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");

// import "bootstrap/dist/js/bootstrap.js"