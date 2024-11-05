<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Login from './views/login/Login.vue'
</script>

<template>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
  width: 100vw;
}
</style>
