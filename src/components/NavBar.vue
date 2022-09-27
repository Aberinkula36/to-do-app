<template>
  <nav>
    <router-link to="/" v-if="user">Home </router-link>
    <router-link to="/auth" v-if="!user">Sign up | </router-link>
    <router-link to="/signin" v-if="!user">Sign in </router-link>
    <router-link to="/viewtasks" v-if="user">| Mis tareas </router-link>
    <router-link to="/logout" v-if="user"> | Log out</router-link>
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
