import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './style.css';
import { registerComponents } from './plugins/baseLoader';
import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core' // Import css here if you haven't elsewhere

const app = createApp(App);

registerComponents(app);
app.use(VueAnimXyz).use(store).use(router).mount('#app');
