import { mapActions } from 'pinia';
<template>
  <div class="container">
    <h2>Crea una tarea</h2>
    <div class="formulario">
      <form @submit.prevent="handleNewTask">
        <label for="title">Título
          <input id="title" type="text" v-model="title">
        </label>
        <label for="desc">Descripción
          <textarea id="desc" cols="30" rows="10" v-model="desc"></textarea>
        </label>
        <label for="fecha">Fecha
          <input id="fecha" type="date" v-model="fecha">
        </label>
        <br>
        <button class="btn btn-outline-info">Crear tarea</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import userStore from '@/store/user';

export default {
  name: 'HomeView',
  data() {
    return {
      title: '',
      desc: '',
      fecha: '',
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'create']),
    async handleNewTask() {
      try {
        await this.create(this.user.id, this.title, this.desc, this.fecha, this.is_complete);
        this.$router.push({ path: '/viewtasks' });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid #dfdfdf;
  border-radius: 20px;
  padding: 40px;
  max-width: 500px;
}

.formulario {
  display: inline-block;
}

label {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  background-color: #eaeaea;
  border-radius: 20px;
  border: none;
  padding: 5px;
  text-indent: 10px;
}
</style>
