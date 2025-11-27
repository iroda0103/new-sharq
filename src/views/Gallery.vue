<template>
    <section class="gallery-page">
        <header class="gallery-header">
            <h1>Universitet galereyasi</h1>
            <p class="lead">Talabalar, kampus va tadbirlardan eng yaxshi lavhalar.</p>

            <div class="controls">
                <div class="filters" role="tablist" aria-label="Galereya filtrlar">
                    <button v-for="cat in ['Barchasi', ...categories]" :key="cat" :class="['filter-btn', { active: activeCategory === cat }]
                        " @click="setCategory(cat)" :aria-pressed="activeCategory === cat">
                        {{ cat }}
                    </button>
                </div>

                <div class="search">
                    <input v-model="query" @input="onSearch" placeholder="Rasm nomi yoki teg bo'yicha qidirish..."
                        aria-label="Image search" />
                </div>
            </div>
        </header>

        <main>
            <div class="gallery-grid" ref="grid" tabindex="0">
                <article v-for="(img, index) in pagedImages" :key="img.id" class="gallery-item"
                    :data-category="img.category">
                    <button class="thumb" @click="openLightbox(index)" @keydown.enter.prevent="openLightbox(index)"
                        :aria-label="`Rasmni kattalashtirish: ${img.title}`">
                        <img :src="img.thumb" :alt="img.alt || img.title" loading="lazy" decoding="async" />
                        <span class="caption">{{ img.title }}</span>
                    </button>
                </article>
            </div>

            <footer class="pager">
                <div class="pager-info">Sahifa {{ page }} / {{ totalPages }}</div>
                <div class="pager-controls">
                    <button @click="prevPage" :disabled="page === 1">Oldingi</button>
                    <button @click="nextPage" :disabled="page === totalPages">Keyingi</button>
                </div>
            </footer>
        </main>

        <!-- Lightbox modal -->
        <div class="lightbox" v-if="lightbox.open" @click.self="closeLightbox" role="dialog" aria-modal="true"
            :aria-label="`Rasm: ${currentImage?.title}`">
            <div class="lightbox-inner">
                <button class="close" @click="closeLightbox" aria-label="Yopish">✕</button>
                <button class="nav prev" @click="prevImage" aria-label="Oldingi rasm">◀</button>
                <figure>
                    <img :src="currentImage?.full" :alt="currentImage?.alt || currentImage?.title" />
                    <figcaption>
                        <strong>{{ currentImage?.title }}</strong>
                        <p v-if="currentImage?.description">{{ currentImage.description }}</p>
                    </figcaption>
                </figure>
                <button class="nav next" @click="nextImage" aria-label="Keyingi rasm">▶</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';


// --- sample data: replace with real urls from your CMS or storage ---
const images = ref([
    { id: 1, title: 'Rector uchrashuvi', category: 'Tadbir', thumb: '/img/galery/rector.png', full: '/img/galery/rector.png', alt: 'Rektor sahnada', description: 'Rektor va mehmonlar ishtirokidagi rasm' },
    // { id: 1, title: 'Rector uchrashuvi', category: 'Tadbir', thumb: '/img/galery/rector2.png', full: '/img/galery/rector2.png', alt: 'Rektor sahnada', description: 'Rektor va mehmonlar ishtirokidagi rasm' },
    { id: 1, title: 'Rector uchrashuvi', category: 'Tadbir', thumb: '/img/galery/flag.png', full: '/img/galery/flag.png', alt: 'Rektor sahnada', description: 'Rektor va mehmonlar ishtirokidagi rasm' },
    { id: 1, title: 'Rector uchrashuvi', category: 'Tadbir', thumb: '/img/club/tadbir.png', full: '/img/club/tadbir.png', alt: 'Rektor sahnada', description: 'Rektor va mehmonlar ishtirokidagi rasm' },
    // { id: 2, title: 'Kutubxona interyeri', category: 'Kampus', thumb: '/img/gallery/library-thumb.jpg', full: '/img/', alt: 'Kutubxona polkalari' },
    {
        id: 3, title: 'Laboratoriya ishlar', category: 'Ta\'lim', thumb: '/img/galery/lesson.png', full: '/img/galery/lesson.png', alt: 'Talabalar laboratoriyada'
    },
     {
        id: 8, title: 'Laboratoriya ishlar', category: 'Ta\'lim', thumb: '/img/galery/lesson1.png', full: '/img/galery/lesson1.png', alt: 'Talabalar laboratoriyada'
    },
       {
        id: 8, title: 'Musobaqalar', category: 'Musobaqalar', thumb: '/img/galery/event.png', full: '/img/galery/event.png', alt: 'Talabalar laboratoriyada'
    },
    {
        id: 4, title: 'Stadion musobaqasi', category: 'Sport', thumb: '/img/club/sport.png', full: '/img/club/sport.png', alt: 'Futbol o\'yini'
    },
    {
        id: 4, title: 'Stadion musobaqasi', category: 'Sport', thumb: '/img/galery/sport.png', full: '/img/galery/sport.png', alt: 'Futbol o\'yini'
    },
     {
        id: 4, title: 'Futbol musobaqasi', category: 'Sport', thumb: '/img/club/futbol.png', full: '/img/club/futbol.png', alt: 'Futbol o\'yini'
    },
    {
        id: 4, title: 'Osh festivali', category: 'Madaniyat', thumb: '/img/club/osh.png', full: '/img/club/osh.png', alt: 'Talabalar konserti'
    },
    { id: 5, title: 'Konsert oqshomi', category: 'Madaniyat', thumb: '/img/club/tadbir.png', full: '/img/club/tadbir.png', alt: 'Talabalar konserti' },
    // add more items as needed
]);

const categories = computed(() => {
    const set = new Set();
    images.value.forEach(i => set.add(i.category));
    return Array.from(set);
});

// UI state
const activeCategory = ref('Barchasi');
const query = ref('');
const page = ref(1);
const perPage = ref(9);

const filtered = computed(() => {
    const q = query.value.trim().toLowerCase();
    return images.value.filter(i => {
        const inCategory = activeCategory.value === 'Barchasi' || i.category === activeCategory.value;
        const matchesQuery = !q || i.title.toLowerCase().includes(q) || (i.category && i.category.toLowerCase().includes(q));
        return inCategory && matchesQuery;
    });
});

const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / perPage.value)));

const pagedImages = computed(() => {
    const start = (page.value - 1) * perPage.value;
    return filtered.value.slice(start, start + perPage.value);
});

watch([filtered], () => {
    // reset to first page if filter changes
    page.value = 1;
});

function setCategory(cat) {
    activeCategory.value = cat;
}

function onSearch() {
    // debouncing can be added if needed
    page.value = 1;
}

function prevPage() {
    if (page.value > 1) page.value -= 1;
}
function nextPage() {
    if (page.value < totalPages.value) page.value += 1;
}

// Lightbox state
const lightbox = ref({ open: false, index: 0 });
const currentImage = computed(() => pagedImages.value[lightbox.value.index] || filtered.value[lightbox.value.index] || null);

function openLightbox(index) {
    // index relative to pagedImages
    lightbox.value.open = true;
    lightbox.value.index = index;
    document.body.style.overflow = 'hidden';
}
function closeLightbox() {
    lightbox.value.open = false;
    document.body.style.overflow = '';
}

function prevImage() {
    const list = filtered.value;
    if (!list.length) return;
    // compute global index
    const globalIndex = (page.value - 1) * perPage.value + lightbox.value.index;
    const newIndex = (globalIndex - 1 + list.length) % list.length;
    // set page and index
    page.value = Math.floor(newIndex / perPage.value) + 1;
    lightbox.value.index = newIndex % perPage.value;
}
function nextImage() {
    const list = filtered.value;
    if (!list.length) return;
    const globalIndex = (page.value - 1) * perPage.value + lightbox.value.index;
    const newIndex = (globalIndex + 1) % list.length;
    page.value = Math.floor(newIndex / perPage.value) + 1;
    lightbox.value.index = newIndex % perPage.value;
}

// keyboard navigation
onMounted(() => {
    window.addEventListener('keydown', (e) => {
        if (!lightbox.value.open) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    });
});
</script>

<style scoped>
.gallery-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
    font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    color: #1b1b1b;
    padding-top: 140px;

}

.gallery-header h1 {
    margin: 0 0 6px;
    font-size: 28px;
}

.gallery-header .lead {
    margin: 0 0 12px;
    color: #555;
}

.controls {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
}

.filters {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.filter-btn {
    background: transparent;
    border: 1px solid #ddd;
    padding: 6px 10px;
    border-radius: 6px;
    cursor: pointer;
}

.filter-btn.active {
    background: #0b5fff;
    color: white;
    border-color: #0b5fff;
}

.search input {
    padding: 8px 10px;
    border-radius: 6px;
    border: 1px solid #ddd;
    min-width: 220px;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
}

.gallery-item {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}

.thumb {
    display: block;
    width: 100%;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    text-align: left;
}

.thumb img {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
}

.caption {
    display: block;
    padding: 8px 10px;
    font-size: 14px;
    color: #222;
}

.pager {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 18px;
}

.pager-controls button {
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
    background: #fff;
    cursor: pointer;
}

.pager-controls button[disabled] {
    opacity: 0.5;
    cursor: default;
}

/* Lightbox */
.lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.lightbox-inner {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    display: flex;
    align-items: center;
    gap: 12px;
}

.lightbox-inner figure {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.lightbox-inner img {
    max-width: 80vw;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 6px;
}

.lightbox .close {
    position: absolute;
    top: -10px;
    right: -10px;
    background: #fff;
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
}

.lightbox .nav {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
}

.lightbox figcaption {
    color: #fff;
    padding-top: 8px;
    text-align: center;
    max-width: 80vw;
}

/* Responsive */
@media (max-width: 900px) {
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .thumb img {
        height: 180px;
    }
}

@media (max-width: 600px) {
    .controls {
        flex-direction: column;
        align-items: stretch;
    }

    .gallery-grid {
        grid-template-columns: 1fr;
    }

    .thumb img {
        height: 160px;
    }
}
</style>
