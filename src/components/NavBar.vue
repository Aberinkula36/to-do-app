<template>
  <div class="logo">
    <img src="../assets/logo.jpg" alt="" class="img-fluid">
  </div>
  <nav>
    <router-link to="/" v-if="user">Home </router-link>
    <router-link to="/auth" v-if="!user">Registro | </router-link>
    <router-link to="/signin" v-if="!user">Entrar </router-link>
    <router-link to="/viewtasks" v-if="user">| Mis tareas </router-link>
    <router-link to="/logout" v-if="user"> | Cerrar sesión</router-link>
  </nav>
</template>

<script>
import { mapState } from 'pinia';
import userStore from '@/store/user';

export default {
  computed: {
    ...mapState(userStore, ['user']),
  },
  name: 'NavBar',
};
</script>

<style scoped>
.logo{
  display: inline-block;
  width: 140px;
}

nav a {
  text-decoration: none;
}

.menu {
  display: flex;
  justify-content: space-around;
  margin-left: -40px;
}

li {
  list-style: none;
}
</style>
