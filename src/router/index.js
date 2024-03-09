import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../pages/home/Home.vue') },
  { path: '/about', component: () => import('../pages/about/About.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
