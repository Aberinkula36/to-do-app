<template>
    <h1>Estás loggeado</h1>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'SignedIn',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp']),
    /* Aquí ponemos el INPUT del login: Usuario y Contraseña */
    handleSignIn() {
      const userData = {
        email: 'jmsaezteruel@hotmail.com', /* Sacar datos de los INPUTS */
        password: 'pruebasignup',
      };
      this.signUp(userData.email, userData.password);
    },
  },
  watch: {
    user() {
      if (this.user) {
        console.log(this.user);
        this.$router.push({ path: '/' });
      }
    },
  },
};
</script>
