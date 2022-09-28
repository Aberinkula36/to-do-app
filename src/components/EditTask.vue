<template>
  <div class="container">
    <div class="formulario">
      <form @submit.prevent="editTask">
        <p>Actualizando la tarea <br> <span class="actualizar">{{ taskProp.title }}</span></p>
        <label for="title">{{ taskProp.title }}
          <input id="title" type="text" v-model="title">
        </label>
        <label for="desc">{{ taskProp.desc }}
          <textarea id="desc" cols="30" rows="10" v-model="desc"></textarea>
        </label>
        <label for="fecha">Fecha
          <input id="fecha" type="date" v-model="fecha">
        </label>
        <label for="completada"> Finalizada
          <input id="completada" type="checkbox" v-model="is_complete">
        </label> <br>
        <button class="btn btn-secondary" @click="editTask()">Actualizar tarea</button>
        <button class="btn btn-danger" @click="returnToTasks()">Cancelar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import taskStore from '@/store/task';

export default {
  name: 'selectedTask',
  props: {
    taskProp: Object,
  },
  data() {
    return {
      title: '',
      desc: '',
      fecha: '',
    };
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'edit']),
    async editTask() {
      try {
        await this.edit(this.taskProp.id, this.title, this.desc, this.fecha);
        this.$router.go(0);
      } catch (e) {
        console.log(e);
      }
    },
    returnToTasks() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<style scoped>
p {
  font-weight: bold;
}

.actualizar {
  font-size: 20px;
}

.container {
  background-color: lightblue;
  border-radius: 20px;
  padding: 40px;
  max-width: 500px;
}

.button {
  background-color: white;
  color: black;
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

input,
textarea {
  background-color: white;
  border-radius: 20px;
  border: none;
  padding: 5px;
  text-indent: 10px;
}
</style>
