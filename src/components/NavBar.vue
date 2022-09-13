<template>
    <nav v-if="user !== null">
        <router-link to="/">Home</router-link> |
        <router-link to="/auth">Sign out</router-link> |
    </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.menu {
    display: flex;
    justify-content: space-around;
    margin-left: -40px;
}

li {
    list-style: none;
}
</style>
