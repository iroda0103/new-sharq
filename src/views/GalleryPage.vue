<!-- src/views/GalleryPage.vue -->
<template>
  <section class="gallery-page">
    <GalleryHeader
      :categories="categories"
      :active-category="activeCategory"
      :search-query="searchQuery"
      @category-change="setCategory"
      @search="searchQuery = $event"
    />

    <GalleryGrid
      :images="paginatedItems"
      @image-click="handleImageClick"
    />

    <GalleryPagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @prev="prevPage"
      @next="nextPage"
    />

    <GalleryLightbox
      :is-open="isLightboxOpen"
      :current-image="currentLightboxImage"
      @close="closeLightbox"
      @prev="prevLightboxImage"
      @next="nextLightboxImage"
    />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import GalleryHeader from '@/components/gallery/GalleryHeader.vue';
import GalleryGrid from '@/components/gallery/GalleryGrid.vue';
import GalleryPagination from '@/components/gallery/GalleryPagination.vue';
import GalleryLightbox from '@/components/gallery/GalleryLightbox.vue';
import { galleryImages } from '@/data/galleryData';
import { useGallery } from '@/composables/useGallery';
import { usePagination } from '@/composables/usePagination';
import { useLightbox } from '@/composables/useLightbox';

const images = ref(galleryImages);

// Gallery logic
const { 
  activeCategory, 
  searchQuery, 
  categories, 
  filteredImages, 
  setCategory 
} = useGallery(images);

// Pagination logic
const { 
  currentPage, 
  totalPages, 
  paginatedItems, 
  nextPage, 
  prevPage 
} = usePagination(filteredImages, 9);

// Lightbox logic
const { 
  isOpen: isLightboxOpen, 
  currentImage: currentLightboxImage, 
  open: openLightbox, 
  close: closeLightbox, 
  next: nextLightboxImage, 
  prev: prevLightboxImage 
} = useLightbox(filteredImages);

const handleImageClick = (index) => {
  const globalIndex = (currentPage.value - 1) * 9 + index;
  openLightbox(globalIndex);
};
</script>

<style scoped>
.gallery-page {
  max-width: 1280px;
  margin: 0 auto;
  padding: 140px 24px 48px;
  min-height: 100vh;
}

@media (max-width: 768px) {
  .gallery-page {
    padding: 120px 16px 32px;
  }
}
</style>