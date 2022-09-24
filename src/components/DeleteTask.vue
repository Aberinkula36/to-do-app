<template>
    <div class="container">
        <div class="formulario">
            <form @submit.prevent="deleteTask">
            <p>Actualizando la tarea <br> <span class="actualizar">{{ taskProp.title }}</span></p>
                <label for="title">{{ taskProp.title }}
                    <input id="title" type="text" v-model="title">
                </label>
                <label for="desc">{{ taskProp.desc }}
                    <textarea id="desc" cols="30" rows="10" v-model="desc"></textarea>
                </label>
                <button class="button">Actualizar tarea</button>
            </form>
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
  },
  data() {
    return {
      title: '',
      desc: '',
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'edit']),
    async deleteTask() {
      try {
        await this.delete(this.title, this.desc);
        this.$router.push({ path: '/viewtasks' });
      } catch (e) {
        console.log(e);
      }
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
