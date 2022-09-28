import { defineStore } from 'pinia';
import supabase from '../supabase/index';

export default defineStore('tasks', {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: true });
      this.tasks = data;
    },
    async create(userId, title, desc, fecha) {
      const { data, error } = await supabase
        .from('tasks')
        .insert([{
          user_id: userId, title, desc, fecha,
        }]);
      if (error) throw error;
      if (data) this.user = data;
      this.tasks.push(data[0]);
    },
    async edit(id, title, desc, fecha) {
      const { data, error } = await supabase
        .from('tasks')
        .update({ title, desc, fecha })
        .match({ id });
      if (error) throw error;
      if (data) this.user = data;
    },
    async delete(id) {
      const { data, error } = await supabase
        .from('tasks')
        .delete()
        .match({ id });
      if (error) throw error;
      if (data) this.user = data;
      const indexTask = this.tasks.indexOf(data[0]);
      this.tasks.splice(indexTask, 1);
    },
  },
});
