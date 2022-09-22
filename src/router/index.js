import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AuthView from '../views/AuthView.vue';
import SignedIn from '../views/SignedIn.vue';
import LogOut from '../views/LogOut.vue';

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
  {
    path: '/logout',
    name: 'logout',
    component: LogOut,
  },
];

/* INTERCEPTOR -> PUNTAZO EXTRA */

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
