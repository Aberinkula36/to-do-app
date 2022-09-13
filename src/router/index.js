import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AuthView from '../views/AuthView.vue';
import SignedIn from '../views/SignedIn.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
  },
  {
    path: '/signedin',
    name: 'signedin',
    component: SignedIn,
  },
];

/* INTERCEPTOR -> PUNTAZO EXTRA */

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
