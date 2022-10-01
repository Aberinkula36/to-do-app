<template>
  <div class="container">
  <h1>¡Comienza a gestionar tus tareas! 📌</h1>
  <div class="formulario">
    <form @submit.prevent="handleSignIn">
      <label for="email">Email
        <input id="email" v-model="email">
      </label>
      <label for="password">Contraseña
        <input id="password" type="password" v-model="password">
      </label> <br>
      <button class="btn btn-success">Entrar</button>
    </form>
  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
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
    ...mapActions(taskStore, ['fetchTasks']),
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
        await this.fetchTasks();
      } catch (error) {
        console.log(error);
        alert('Datos de acceso incorrectos');
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

<style scoped>
.container {
  display: inline-block;
  border: 1px solid lightblue;
  border-radius: 20px;
  padding: 40px;
  max-width: 500px;
}

.formulario {
  display: inline-block;
}

input {
  border: 1px solid rgb(198, 198, 198);
  border-radius: 20px;
  text-indent: 10px;
}

label {
  display: flex;
  flex-direction: column;
}
</style>
