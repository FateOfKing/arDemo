import { createApp } from 'vue'
import App from './App.vue'
import AFRAME from 'aframe'
import '@ar-js-org/ar.js/aframe/build/aframe-ar'
const app = createApp(App);
app.use(AFRAME);
app.mount('#app')
