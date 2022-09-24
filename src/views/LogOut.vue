<template>
  <h1>Log out</h1>
  <div class="container">
    <div class="formulario">
      <h3>¡Hasta la próxima!</h3>
      <form @submit.prevent="handleLogOut">
        <button class="button">Log out</button>
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
  display: inline-block;
  border: 1px solid lightblue;
  border-radius: 20px;
  padding: 40px;
}

.formulario {
  display: flex;
  flex-direction: column;
}

.button {
  background-color: lightblue;
  justify-content: center;
  color: white;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  margin-top: 30px;
  padding: 15px;
  cursor: pointer;
}

label {
  display: flex;
  flex-direction: column;
}
</style>
