<!-- src/pages/TelegramPage.vue -->
<template>
  <div class="container">
    <TelegramPostList />
  </div>
</template>

<script setup>
import TelegramPostList from "../components/tg/TelegramPostList.vue";
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
</style>
