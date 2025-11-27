<!-- src/components/gallery/GalleryPagination.vue -->
<template>
  <footer class="pagination">
    <div class="pagination-info">
      Sahifa {{ currentPage }} / {{ totalPages }}
    </div>
    <div class="pagination-controls">
      <button 
        @click="$emit('prev')" 
        :disabled="currentPage === 1"
        class="btn-prev"
      >
        ← Oldingi
      </button>
      <button 
        @click="$emit('next')" 
        :disabled="currentPage === totalPages"
        class="btn-next"
      >
        Keyingi →
      </button>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
});

defineEmits(['prev', 'next']);
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  animation: fadeIn 0.5s ease-out;
}

.pagination-info {
  font-weight: 500;
  color: #555;
  font-size: 15px;
}

.pagination-controls {
  display: flex;
  gap: 12px;
}

.pagination-controls button {
  padding: 10px 20px;
  border-radius: 24px;
  border: 2px solid #e0e0e0;
  background: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 14px;
}

.pagination-controls button:hover:not(:disabled) {
  background: #0b5fff;
  color: white;
  border-color: #0b5fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(11, 95, 255, 0.3);
}

.pagination-controls button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 600px) {
  .pagination {
    flex-direction: column;
    gap: 16px;
  }
  
  .pagination-controls button {
    padding: 8px 16px;
    font-size: 13px;
  }
}
</style>