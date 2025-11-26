<!-- src/components/gallery/GalleryHeader.vue -->
<template>
  <header class="gallery-header">
    <h1>Universitet galereyasi</h1>
    <p class="lead">Talabalar, kampus va tadbirlardan eng yaxshi lavhalar.</p>

    <div class="controls">
      <div class="filters" role="tablist" aria-label="Galereya filtrlar">
        <button
          v-for="cat in ['Barchasi', ...categories]"
          :key="cat"
          :class="['filter-btn', { active: activeCategory === cat }]"
          @click="$emit('category-change', cat)"
          :aria-pressed="activeCategory === cat"
        >
          {{ cat }}
        </button>
      </div>

      <div class="search">
        <input
          :value="searchQuery"
          @input="$emit('search', $event.target.value)"
          placeholder="Rasm nomi yoki teg bo'yicha qidirish..."
          aria-label="Image search"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  },
  activeCategory: {
    type: String,
    required: true
  },
  searchQuery: {
    type: String,
    default: ''
  }
});

defineEmits(['category-change', 'search']);
</script>

<style scoped>
.gallery-header {
  margin-bottom: 32px;
  animation: fadeIn 0.6s ease-out;
}

.gallery-header h1 {
  margin: 0 0 8px;
  font-size: 32px;
  font-weight: 700;
  background: linear-gradient(135deg, #0b5fff 0%, #0099ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.lead {
  margin: 0 0 24px;
  color: #666;
  font-size: 16px;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
}

.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-btn {
  background: #f5f5f5;
  border: 2px solid transparent;
  padding: 8px 16px;
  border-radius: 24px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 14px;
}

.filter-btn:hover {
  background: #e8e8e8;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, #0b5fff 0%, #0099ff 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(11, 95, 255, 0.3);
}

.search input {
  padding: 10px 16px;
  border-radius: 24px;
  border: 2px solid #e0e0e0;
  min-width: 260px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.search input:focus {
  outline: none;
  border-color: #0b5fff;
  box-shadow: 0 0 0 4px rgba(11, 95, 255, 0.1);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 600px) {
  .controls {
    flex-direction: column;
    align-items: stretch;
  }

  .search input {
    width: 100%;
  }
  
  .gallery-header h1 {
    font-size: 24px;
  }
}
</style>