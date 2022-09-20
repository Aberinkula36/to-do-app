<template>
  <h1>Log out</h1>
  <div class="container">
  <div class="formulario">
    <form @submit.prevent="handleLogOut">
      <button class="button">Log out</button>
    </form>
  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'LogOut',
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
    ...mapActions(userStore, ['logOut']),
    handleLogOut() {
      this.logOut();
    },
  },
  watch: {
    user() {
      if (!this.user) {
        console.log(this.user);
        this.$router.push({ path: '/auth' });
      }
    },
  },
};
</script>

  <style>
  .container {
    display: inline-block;
    border: 1px solid lightblue;
    border-radius: 20px;
    padding: 40px;
  }

  .button {
    display: flex;
    flex-direction: column;
    align-self: center;
    font-size: 15px;
    border: none;
    border-radius: 20px;
    margin-top: 30px;
    margin-left: 0px;
    padding: 15px;
    cursor: pointer;
  }

  .formulario {
    display: inline-block;
  }

  label {
    display: flex;
    flex-direction: column;
  }
  </style>
