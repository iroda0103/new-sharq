// src/composables/useGallery.js
import { ref, computed } from 'vue';

export function useGallery(images) {
  const activeCategory = ref('Barchasi');
  const searchQuery = ref('');

  const categories = computed(() => {
    const cats = new Set(images.value.map(img => img.category));
    return Array.from(cats);
  });

  const filteredImages = computed(() => {
    const query = searchQuery.value.trim().toLowerCase();
    
    return images.value.filter(img => {
      const matchesCategory = activeCategory.value === 'Barchasi' || 
                              img.category === activeCategory.value;
      
      const matchesSearch = !query || 
                           img.title.toLowerCase().includes(query) ||
                           img.category.toLowerCase().includes(query);
      
      return matchesCategory && matchesSearch;
    });
  });

  const setCategory = (category) => {
    activeCategory.value = category;
  };

  return {
    activeCategory,
    searchQuery,
    categories,
    filteredImages,
    setCategory
  };
}