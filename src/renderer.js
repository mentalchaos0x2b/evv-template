import './index.css';

import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createMemoryHistory } from 'vue-router';

import MainView from './views/MainView.vue';

const router = createRouter({ history: createMemoryHistory(), 
    routes: [
        { path: '/', name: 'main', component: MainView },
    ] 
});

const app = createApp(App);

app.use(router);

app.mount('#app');
