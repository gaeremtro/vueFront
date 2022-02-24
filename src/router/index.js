import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import UIVue from '../views/ui'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ui',
    name: 'ui',
    component: () => import(/* webpackChunkName: "ui" */ '../views/ui.vue')
  },
  {
    path: '/about',
    name: 'About us',
    component: () => import (/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import (/* webpackChunkName: "form" */ '../views/Form.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
