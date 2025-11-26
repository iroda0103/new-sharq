<!-- src/components/gallery/GalleryItem.vue -->
<template>
  <article class="gallery-item" :data-category="image.category">
    <button 
      class="thumb" 
      @click="$emit('click')"
      :aria-label="`Rasmni kattalashtirish: ${image.title}`"
    >
      <img 
        :src="image.thumb" 
        :alt="image.alt || image.title" 
        loading="lazy" 
        decoding="async"
      />
      <span class="caption">{{ image.title }}</span>
    </button>
  </article>
</template>

<script setup>
defineProps({
  image: {
    type: Object,
    required: true
  }
});

defineEmits(['click']);
</script>

<style scoped>
.gallery-item {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.5s ease-out;
}

.gallery-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.thumb {
  display: block;
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  text-align: left;
  position: relative;
  overflow: hidden;
}

.thumb::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.6));
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.thumb:hover::before {
  opacity: 1;
}

.thumb img {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.thumb:hover img {
  transform: scale(1.1);
}

.caption {
  display: block;
  padding: 12px 14px;
  font-size: 14px;
  font-weight: 500;
  color: #222;
  position: relative;
  z-index: 1;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 600px) {
  .thumb img {
    height: 180px;
  }
}
</style>