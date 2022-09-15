<template>
    <nav v-if="user">
        <router-link to="/">Home</router-link> |
        <router-link to="/auth" v-if="!user">Sign up |</router-link>
        <router-link to="/logout">Log out</router-link> |
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
.menu {
    display: flex;
    justify-content: space-around;
    margin-left: -40px;
}

li {
    list-style: none;
}
</style>
