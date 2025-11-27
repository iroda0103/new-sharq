<!-- src/components/gallery/GalleryGrid.vue -->
<template>
  <div class="gallery-grid">
    <GalleryItem
      v-for="(image, index) in images"
      :key="image.id"
      :image="image"
      :style="{ animationDelay: `${index * 0.05}s` }"
      @click="$emit('image-click', index)"
    />
  </div>
</template>

<script setup>
import GalleryItem from './GalleryItem.vue';

defineProps({
  images: {
    type: Array,
    required: true
  }
});

defineEmits(['image-click']);
</script>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>