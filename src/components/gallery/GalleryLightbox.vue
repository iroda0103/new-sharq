<!-- src/components/gallery/GalleryLightbox.vue -->
<template>
  <Transition name="lightbox">
    <div 
      v-if="isOpen" 
      class="lightbox" 
      @click.self="$emit('close')"
      role="dialog"
      aria-modal="true"
      :aria-label="`Rasm: ${currentImage?.title}`"
    >
      <div class="lightbox-content">
        <button 
          class="btn-close" 
          @click="$emit('close')"
          aria-label="Yopish"
        >
          ✕
        </button>

        <button 
          class="btn-nav btn-prev" 
          @click="$emit('prev')"
          aria-label="Oldingi rasm"
        >
          ◀
        </button>

        <figure class="lightbox-figure">
          <Transition name="fade" mode="out-in">
            <img 
              :key="currentImage?.id"
              :src="currentImage?.full" 
              :alt="currentImage?.alt || currentImage?.title"
            />
          </Transition>
          <figcaption v-if="currentImage">
            <strong>{{ currentImage.title }}</strong>
            <p v-if="currentImage.description">{{ currentImage.description }}</p>
          </figcaption>
        </figure>

        <button 
          class="btn-nav btn-next" 
          @click="$emit('next')"
          aria-label="Keyingi rasm"
        >
          ▶
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
  currentImage: Object
});

defineEmits(['close', 'prev', 'next']);
</script>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(8px);
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  gap: 24px;
}

.lightbox-figure {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.lightbox-figure img {
  max-width: 80vw;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

figcaption {
  color: white;
  text-align: center;
  max-width: 600px;
  padding: 0 16px;
}

figcaption strong {
  display: block;
  font-size: 20px;
  margin-bottom: 8px;
}

figcaption p {
  opacity: 0.8;
  font-size: 14px;
  margin: 0;
}

.btn-close {
  position: absolute;
  top: -50px;
  right: -10px;
  background: white;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.btn-close:hover {
  transform: rotate(90deg) scale(1.1);
  background: #ff4444;
  color: white;
}

.btn-nav {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-nav:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

/* Transitions */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: all 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-from .lightbox-content {
  transform: scale(0.9);
}

.lightbox-leave-to .lightbox-content {
  transform: scale(0.9);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .btn-nav {
    width: 44px;
    height: 44px;
    font-size: 18px;
  }

  .btn-close {
    top: -40px;
    right: 0;
  }

  .lightbox-figure img {
    max-width: 90vw;
    max-height: 60vh;
  }

  figcaption strong {
    font-size: 16px;
  }
}
</style>