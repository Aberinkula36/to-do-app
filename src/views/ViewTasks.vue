<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<template>
  <h1>Lista de tareas</h1>
  <div class="contenedor-tarea">
    <EditTask v-if="task" :taskProp="task" />
    <DeleteTask v-if="taskId" :taskId="taskId" />
  </div>
  <div class="contenedor">
    <div class="tareas" v-for="task in tasks" :key="task.id">
      <div class="tasks"> {{ task.title }} </div>
      <div class="description"> {{ task.desc }} </div>
      <div class="fecha"> {{ task.fecha }} </div>
      <div class="completada" v-if="task.isComplete">Completada ✅</div>
      <div class="incompleta" v-if="!task.isComplete">Por completar</div>
      <button class="btn btn-primary button" @click="selectTask(task)">Editar</button>
      <button class="btn btn-outline-danger button" @click="deleteTask(task.id)">Borrar</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import taskStore from '@/store/task';
import EditTask from '@/components/EditTask.vue';
import DeleteTask from '@/components/DeleteTask.vue';

export default {
  data() {
    return {
      task: null,
      taskId: null,
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks']), /* traemos las variables */
  },
  components: {
    EditTask,
    DeleteTask,
  },
  methods: {
    selectTask(task) {
      this.task = task;
    },
    deleteTask(id) {
      this.taskId = id;
    },
  },
};
</script>

<style scoped>
.contenedor {
  display: inline-block;
  max-width: 500px;
}

.button {
  margin: 5px;
}

.tareas {
  border: 1px solid lightblue;
  border-radius: 20px;
  margin: 20px;
  padding: 30px;
}

.tasks {
  background-color: lightblue;
  border-radius: 20px;
  font-weight: bold;
  padding: 15px;
  margin-bottom: -10px;
}

.description {
  background-color: rgb(241, 241, 241);
  border-radius: 20px;
  padding: 15px;
  margin: 10px;
}

.completada{
  color: green;
  font-weight: bold;
}

.incompleta{
  color: gray;
  font-weight: bold;
}

</style>
