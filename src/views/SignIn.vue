<template>
  <h1>Sign In</h1>
  <div class="container">
  <div class="formulario">
    <form @submit.prevent="handleSignIn">
      <label for="email">Email
        <input id="email" v-model="email">
      </label>
      <label for="password">Contraseña
        <input id="password" type="password" v-model="password">
      </label>
      <button class="button">SignIn</button>
    </form>
  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'SignIn',
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
    ...mapActions(userStore, ['signIn']),
    async handleSignIn() {
      const validarEmail = (email) => {
        const validar = email
          .toLowerCase()
          .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
        return validar;
      };

      if (!validarEmail(this.email)) {
        alert('Por favor, introduzca un email válido');
        return;
      }

      if (this.password.length < 8) {
        alert('Por favor, introduzca una contraseña de mínimo 8 caracteres');
      }
      try {
        await this.signIn(this.email, this.password);
      } catch (error) {
        console.log(this.email);
        console.log(this.password);
        console.log(error);
      }
    },
  },
  watch: {
    user() {
      if (this.user) {
        console.log(this.user);
        this.$router.push({ path: '/' });
      }
    },
  },
};
</script>

<style>
.container {
  display: inline-block;
  border: 1px solid lightblue;
  border-radius: 20px;
  padding: 40px;
}

.button {
  display: flex;
  flex-direction: column;
  background-color: lightblue;
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

.formulario {
  display: inline-block;
}

label {
  display: flex;
  flex-direction: column;
}
</style>
