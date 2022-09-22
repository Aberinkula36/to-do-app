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
    async create(userId, title) {
      const { data, error } = await supabase
        .from('tasks')
        .insert([{ user_id: userId, title }]);
      if (error) throw error;
      if (data) this.user = data;
    },
  },
});
