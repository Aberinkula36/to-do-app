<template>
  <h1>Esta es la vista de SignUp/In</h1>
  <div class="container">
  <div class="formulario">
    <form @submit.prevent="handleSignUp">
      <label for="email">Email
        <input id="email" v-model="email">
      </label>
      <label for="password">Contraseña
        <input id="password" type="password" v-model="password">
      </label>
      <button class="button">SignUp</button>
    </form>
  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'AuthView',
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
    ...mapActions(userStore, ['signUp']),
    handleSignUp() {
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
      this.signUp(this.email, this.password);
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
  align-self: center;
  font-size: 15px;
  border: none;
  border-radius: 20px;
  margin-left: 35px;
  margin-top: 30px;
  padding: 15px;
}

.formulario {
  display: inline-block;
}

label {
  display: flex;
  flex-direction: column;
}
</style>
