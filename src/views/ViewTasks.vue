<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <h1>Lista de tareas</h1>
  <div class="contenedor-tarea">
    <EditTask v-if="task" :taskProp="task" />
  </div>
  <div class="contenedor">
    <div class="tareas" v-for="task in tasks" :key="task.id">
      <div class="tasks">{{ task.title }} </div>
      <div class="description">{{ task.desc }} </div>
      <button class="edit-button" @click="selectTask(task)">Editar</button>
      <button class="delete-button">Borrar</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import taskStore from '@/store/task';
import EditTask from '@/components/EditTask.vue';

export default {
  data() {
    return {
      task: null,
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks']), /* traemos las variables */
  },
  components: {
    EditTask,
  },
  methods: {
    selectTask(task) {
      this.task = task;
    },
  },
};
</script>

<style scoped>
.contenedor-tarea {
  display: inline-block;
}
.contenedor {
  display: block;
  width: 30%;
  margin-left: 100px;
}

.tareas {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid lightblue;
  border-radius: 20px;
  margin: 20px;
  padding: 30px;
}
.edit-button {
  display: flex;
  justify-content: center;
  align-self: center;
  color: blue;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  width: 15%;
  margin-bottom: 10px;
}

.edit-button:hover {
  opacity: 0.7;
  transition: 0.3s;
}

.delete-button {
  display: flex;
  justify-content: center;
  align-self: center;
  color: salmon;
  font-size: 10px;
  text-align: center;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  width: 15%;
}

.delete-button:hover {
  opacity: 0.7;
  transition: 0.3s;
}

.tasks {
  font-weight: bold;
  padding: 15px;
}

.description {
  background-color: lightblue;
  border-radius: 20px;
  padding: 15px;
  margin: 10px;
}
</style>
