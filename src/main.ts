import { createApp } from 'vue'
import App from './App.vue'
import AFRAME from 'aframe'
const app = createApp(App);
app.use(AFRAME);
app.mount('#app')
