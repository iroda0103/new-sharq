
<!-- NewsSection.vue - Asosiy komponent -->
<template>
    <section class="news-section" id="posts">
        <div class="container">
            <div class="news-header">
                <h2>University <span>Posts</span></h2>
                <router-link to="/news" class="see-more">
                    See more <i class="fas fa-chevron-right"></i>
                </router-link>
            </div>

            <div class="news-grid">
                <NewsCard 
                    v-for="news in featuredNews" 
                    :key="news.id" 
                    :news="news"
                    :featured="news.id === featuredNews[0]?.id"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import NewsCard from './NewsCard.vue'

// Props (API dan kelgan data uchun)
const props = defineProps({
    limit: { type: Number, default: 5 }
})

const newsData = ref([
    {
          id: 10,
        title: "🎉 YANGI YIL KECHASI — MASQUARADE BALL! 🎭",
        image: "/img/blog/news.png",
        date: "2025-12-14",
        views: 543,
        featured: true
    },
      {
          id: 9,
        title: `Sharq Universiteti hamda Prague Institute of Management and Technology universiteti o‘rtasida hamkorlik bo‘yicha memorandum imzolandi.`,
        image: "/img/blog/praga.png",
        date: "2025-12-11",
        views: 591,
        featured: true
    },
     {
        id: 8,
        title: ' “Sharq kitobxonlari” tanlovi',
        image: "/img/blog/kitobxon3.png",
        date: "2025-12-3",
        views: 807
    },
        {
        id: 7,
        title: '📚 Sharq Universiteti kutubxonasida “Tanishing: yangi adabiyotlar” nomli kitoblar taqdimoti bo‘lib o‘tdii',
        image: "/img/blog/kitob.png",
        date: "2025-12-2",
        views: 807
    },
          {
        id: 6,
        title: 'Sharq universitetida Talabalar ligasiga START berildi! Guruhlar o‘rtasida futbol musobaqasi bo‘lib o‘tadi.',
        image: "/img/blog/futbol.png",
        date: "2025-12-2",
        views: 569
    },
    {
        id: 1,
        title: "🇺🇿 Yurt bayrog‘i — milliy g‘urur, tinchlik va hamjihatlik timsoli.",
        image: "/img/blog/flag.jpg",
        date: "2025-11-18",
        views: 264,
        featured: true
    },
    {
        id: 2,
        title: ' “Sharq kitobxonlari” tanlovi',
        image: "/img/blog/reader_competetion.jpg",
        date: "2025-11-13",
        views: 507
    },
    {
        id: 3,
        title: "🎭 Diqqat, ijodkor talabalar!",
        image: "/img/blog/kasting.jpg",
        date: "2025-11-13",
        views: 701
    },
    {
        id: 4,
        title: "🎓 Sharq Universiteti “Tarix” yo‘nalishi talabalari Arxeologiya fanidan seminar mashg‘ulotini amaliy shaklda Navoiy viloyati tarixi va madaniyati davlat muzeyida tashkil etdilar. ",
        image: "/img/blog/muzey.jpg",
        date: "2025-11-07",
        views: 544
    },
    {
        id: 5,
        title: "Talabalar bilan huquqbuzarlik va jinoyatchilikni oldini olish mavzusida uchrashuv bo‘lib o‘tdi.",
        image: "/img/blog/uchrashuv.jpg",
        date: "2025-11-07",
        views: 526
    }
])

const featuredNews = computed(() => newsData.value.slice(0, props.limit))
</script>

<style scoped lang="scss">
.news-section {
    padding: 60px 20px;
    background: #f5f7fa;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.news-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;

    h2 {
        font-size: 32px;
        font-weight: 700;
        color: #1a1a1a;

        span {
            color: #0066cc;
        }
    }

    .see-more {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #0066cc;
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
        transition: gap 0.3s;

        &:hover {
            gap: 12px;
        }

        i {
            font-size: 12px;
        }
    }
}

.news-grid {
    display: grid;
    grid-template-columns:2fr repeat(2, 1fr);
    gap: 20px;

    :deep(.news-card:first-child) {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
    }
}

@media (max-width: 992px) {
    .news-grid {
        grid-template-columns: 1fr;

        :deep(.news-card:first-child) {
            grid-column: 1;
            grid-row: auto;
        }
    }
}

@media (max-width: 768px) {
    .news-section {
        padding: 40px 15px;
    }

    .news-header {
        h2 {
            font-size: 24px;
        }

        .see-more {
            font-size: 14px;
        }
    }
}
</style>