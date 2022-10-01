<!-- eslint-disable max-len -->
<template>
    <div class="footer">
        <img src="../assets/logo.jpg" alt="" class="logo">
        <p>App desarrollada por Pepe Sáez®</p>
    </div>
</template>

<script>
import { mapState } from 'pinia';
import userStore from '@/store/user';

export default {
  computed: {
    ...mapState(userStore, ['user']),
  },
  name: 'FooterApp',
};
</script>

<style scoped>
.footer {
    margin-top: 30px;
    background-color: lightblue;
    padding: 20px;
    display: flex;
    justify-content: space-between;
}

.logo{
  display: inline-block;
  width: 60px;
}

</style>
