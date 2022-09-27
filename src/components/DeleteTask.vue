<template>
  <div class="container">
    <div class="formulario">
        <p>¿Está seguro de que desea eliminar esta tarea? <br></p>
        <button class="btn btn-secondary" @click="deleteTask()">Sí</button>
        <button class="btn btn-secondary" @click="returnToTasks()">No</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import userStore from '@/store/user';

export default {
  name: 'deleteTask',
  props: {
    taskProp: Object,
    taskId: Number,
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'delete']),
    async deleteTask() {
      try {
        console.log('taskId: ', this.taskId);
        await this.delete(this.taskId);
        console.log(this.taskId);
        this.$router.push({ path: '/' });
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
