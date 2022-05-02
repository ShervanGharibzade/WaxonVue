import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/default.css'
import VueSmoothScroll from 'vue3-smooth-scroll'
import './assets/css/lightbox.css'
import './assets/js/lightbox-plus-jquery'


createApp(App)
    .use(store)
    .use(router)
    .use(VueSmoothScroll).mount('#app')
