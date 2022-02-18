import { createApp } from 'vue'
import App from './App.vue'
import AFRAME from 'a-frame'
import '@ar-js-org/ar.js'
const app = createApp(App);
app.use(AFRAME);
app.mount('#app')
