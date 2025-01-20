import './index.css';

import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createMemoryHistory } from 'vue-router';

import naive from 'naive-ui';

import LoadingView from './views/LoadingView.vue';
import MainView from './views/MainView.vue';

const router = createRouter({ history: createMemoryHistory(), 
    routes: [
        { path: '/', name: 'loading', component: LoadingView },
        { path: '/main', name: 'main', component: MainView },
    ] 
});

const app = createApp(App);

app.use(router);

app.use(naive);

app.mount('#app');
