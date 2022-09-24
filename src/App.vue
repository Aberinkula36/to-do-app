<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
import taskStore from '@/store/task';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  computed: {
    ...mapState(userStore, ['user']),
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(userStore, ['fetchUser']),
    ...mapActions(taskStore, ['fetchTasks']),
  },
  components: {
    NavBar,
  },
  async created() {
    try {
      await this.fetchUser();
      console.log(this.user);
      if (!this.user) {
        this.$router.push({ path: '/auth' });
      } else {
        this.$router.push({ path: '/' });
      }
    } catch (e) {
      console.log(e);
    }
    try {
      await this.fetchTasks();
      console.log(this.tasks);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
