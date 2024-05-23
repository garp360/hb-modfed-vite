import { createApp, defineAsyncComponent } from "vue";
import './assets/main.css'

import App from './App.vue'
import router from './router'

const AppHeader = defineAsyncComponent(() => import("remote_app/AppHeader"));

const app = createApp(App)
app.use(router)

app.component("AppHeader", AppHeader);

app.mount('#app')
