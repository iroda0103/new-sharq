// src/composables/useLightbox.js
import { ref, computed, onMounted, onUnmounted } from 'vue';

export function useLightbox(images) {
  const isOpen = ref(false);
  const currentIndex = ref(0);

  const currentImage = computed(() => images.value[currentIndex.value] || null);

  const open = (index) => {
    currentIndex.value = index;
    isOpen.value = true;
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    isOpen.value = false;
    document.body.style.overflow = '';
  };

  const next = () => {
    if (images.value.length === 0) return;
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  };

  const prev = () => {
    if (images.value.length === 0) return;
    currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
  };

  const handleKeydown = (e) => {
    if (!isOpen.value) return;
    
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  };

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
    document.body.style.overflow = '';
  });

  return {
    isOpen,
    currentIndex,
    currentImage,
    open,
    close,
    next,
    prev
  };
}