<template>
  <div class="container">
    <h1>¿Te vas? </h1>
    <div class="formulario">
      <h5>¡Hasta la próxima! <span class="big">🙋🏼‍♀️</span></h5>
      <form @submit.prevent="handleLogOut">
        <button class="btn btn-info">Salir</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'LogOut',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['logOut']),
    handleLogOut() {
      this.logOut();
    },
  },
  watch: {
    user() {
      if (!this.user) {
        console.log(this.user);
        this.$router.push({ path: '/auth' });
      }
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid lightblue;
  border-radius: 20px;
  padding: 40px;
  max-width: 500px;
}

.formulario {
  display: flex;
  flex-direction: column;
}

.big {
  font-size: 25px;
}

label {
  display: flex;
  flex-direction: column;
}
</style>
