import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AuthView from '../views/AuthView.vue';
import SignIn from '../views/SignIn.vue';
import LogOut from '../views/LogOut.vue';
import ViewTasks from '../views/ViewTasks.vue';

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
    path: '/signin',
    name: 'signin',
    component: SignIn,
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogOut,
  },
  {
    path: '/viewtasks',
    name: 'viewtasks',
    component: ViewTasks,
  },
];

/* INTERCEPTOR -> PUNTAZO EXTRA */

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
