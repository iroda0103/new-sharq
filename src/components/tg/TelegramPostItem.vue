<!-- src/components/TelegramPostItem.vue -->
<template>
  <div class="post-card">
    <p v-if="post.text" class="text">{{ post.text }}</p>

    <div v-if="post.hasMedia" class="media-info">
      📷 Media mavjud
    </div>

    <div class="meta">
      <span>👁 {{ post.views || 0 }} views</span>
      <span>{{ formattedDate }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  post: { type: Object, required: true }
});

const formattedDate = computed(() =>
  new Date(props.post.date * 1000).toLocaleString()
);
</script>

<style scoped>
.post-card {
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 16px;
}
.text {
  font-size: 16px;
  margin-bottom: 10px;
}
.media-info {
  color: #777;
  font-size: 14px;
  margin-bottom: 6px;
}
.meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: gray;
}
</style>
