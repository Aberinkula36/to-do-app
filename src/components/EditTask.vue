<!-- eslint-disable max-len -->
<template>
  <div class="container">
    <div class="formulario">
      <form @submit.prevent="editTask">
        <p>Actualizando la tarea <br> <span class="actualizar">{{ taskProp.title }}</span></p>
        <label for="title">
          <input id="title" type="text" v-model="title">
        </label>
        <label for="desc">{{ taskProp.desc }}
          <textarea id="desc" cols="30" rows="10" v-model="desc"></textarea>
        </label>
        <label for="fecha">Fecha
          <input id="fecha" type="date" v-model="fecha">
        </label>
        <label for="completada"> Completada
          <input id="completada" type="checkbox" v-model="isComplete">
        </label> <br>
        <button class="btn btn-secondary button" @click="editTask()">Actualizar tarea</button>
        <button class="btn btn-danger button" @click="returnToTasks()">Cancelar</button>
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
      title: this.taskProp.title,
      desc: this.taskProp.desc,
      fecha: this.taskProp.fecha,
      isComplete: this.taskProp.isComplete,
    };
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'edit']),
    async editTask() {
      try {
        await this.edit(this.taskProp.id, this.title, this.desc, this.fecha, this.isComplete);
        this.$router.push({ path: '/' });
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
  margin: 5px;
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
