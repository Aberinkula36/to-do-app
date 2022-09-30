<!-- eslint-disable max-len -->
<template>
  <div class="container">
  <h1>¿Todavía no estás registrado?</h1>
  <p>To-Do-App es un gestor de tareas creado para ti, <span class="fun">despistado/a <span class="big">🤔</span> </span>. Crea, modifica, y completa tareas sin olvidar nada por el camino. <span class="fun">¿A qué esperas?</span></p>
  <div class="formulario">
    <form @submit.prevent="handleSignUp">
      <label for="email">Email
        <input id="email" v-model="email">
      </label>
      <label for="password">Contraseña
        <input id="password" type="password" v-model="password">
      </label> <br>
      <button class="btn btn-info">¡Regístrate!</button>
    </form>
  </div>
  </div>
</template>

<script>
import 'animate.css';
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
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
    ...mapActions(taskStore, ['fetchTasks']),
    async handleSignUp() {
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
        await this.signUp(this.email, this.password);
        await this.fetchTasks();
      } catch (error) {
        console.log(error);
        alert('Este email ya está registrado.');
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

.fun {
  font-size: 20px;
  font-weight: bold;
}

.big {
  font-size: 25px;
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
