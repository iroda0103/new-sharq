// src/composables/usePagination.js
import { ref, computed, watch } from 'vue';

export function usePagination(items, itemsPerPage = 9) {
  const currentPage = ref(1);
  const perPage = ref(itemsPerPage);

  const totalPages = computed(() => 
    Math.max(1, Math.ceil(items.value.length / perPage.value))
  );

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * perPage.value;
    return items.value.slice(start, start + perPage.value);
  });

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };

  // Reset sahifa filtrlanganda
  watch(() => items.value.length, () => {
    currentPage.value = 1;
  });

  return {
    currentPage,
    totalPages,
    paginatedItems,
    nextPage,
    prevPage,
    goToPage
  };
}