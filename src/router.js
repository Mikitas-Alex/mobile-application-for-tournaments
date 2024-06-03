import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Feedback from './pages/Feedback.vue';
import Tour from './pages/Tour.vue';
import Profile from './pages/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/Feedback',
    name: 'Feedback',
    component: () => import('@/pages/Feedback.vue')
  },
  {
    path: '/Tour',
    name: 'Tournament',
    component: () => import('@/pages/Tour.vue')
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: () => import('@/pages/Profile.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
