import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'hone',
      component: () => import('../pages/home/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/about/About.vue'),
    },
  ],
});

export default router;
