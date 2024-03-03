import { createApp } from 'vue';
import './styles/tailwind.css';
import App from './App.vue';
import router from './router/index.js';
import { VueQueryPlugin } from '@tanstack/vue-query';

createApp(App).use(router).use(VueQueryPlugin).mount('#app');
