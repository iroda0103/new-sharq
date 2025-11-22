<!-- src/components/TelegramPostList.vue -->
<template>
  <div>
    <h2 class="title">Telegram Posts</h2>

    <div v-if="loading" class="loading">
      Loading posts...
    </div>

    <TelegramPostItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getTelegramPosts } from "../../api/telegramApi";
import TelegramPostItem from "./TelegramPostItem.vue";

const posts = ref([]);
const loading = ref(true);

async function load() {
  try {
    const a = await getTelegramPosts();
    console.log('TEST',a);
    
  } catch (err) {
    console.error("Error loading posts:", err);
  } finally {
    loading.value = false;
  }
}

onMounted(load);
</script>

<style scoped>
.title {
  font-size: 22px;
  margin-bottom: 20px;
}
.loading {
  color: gray;
  margin-bottom: 20px;
}
</style>
