import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './style.css';
import { registerComponents } from './plugins/baseLoader';

const app = createApp(App);

registerComponents(app);

app.use(store).use(router).mount('#app');
