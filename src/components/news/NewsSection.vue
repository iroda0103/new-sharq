
<!-- NewsSection.vue - Asosiy komponent -->
<template>
    <section class="news-section" id="posts">
        <div class="container">
            <div class="news-header">
                <h2>Universitet <span>Yangiliklari</span></h2>
                <router-link to="/news" class="see-more">
                    ko‘proq ko‘rish <i class="fas fa-chevron-right"></i>
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
     
    // {
    //       id: 1,
    //     title: "📣  SHARQ UNIVERSITETI TALABALARI DIQQATIGA!",
    //     image: "/img/blog/winter-school.jpg",
    //     date: "2026-01-02",
    //     views: 308,
    //     featured: true
    // },
    
    {
          id: 1,
        title: "🔥 Bugun viloyatimiz markazidagi Navro‘z sayli – obyektivlarimiz nigohida. ",
        image: "/img/blog/NAVRUZ.png",
        date: "2026-03-21",
        views: 387,
        featured: true
    },
       
    {
          id: 2,
        title: "🌷 Navro‘z — yangilanish, umid va yangi boshlanishlar bayrami!",
        image: "/img/blog/navruz-poster.png",
        date: "2026-03-21",
        views: 420,
        featured: true
    },
       {
          id: 3,
        title: "🎉  SHARQ Universitetida Navro‘z tantanasi!",
        image: "/img/blog/navruz-sayl.png",
        date: "2026-03-21",
        views: 430,
        featured: true
    },
  {
          id: 4,
        title: "SHARQ Universitetining Psixologiya klubidan lavhalar ",
        image: "/img/blog/p-club.png",
        date: "2026-03-18",
        views: 534,
        featured: true
    },
      {
          id: 5,
        title: "🎓 Universitetimizning hamkorlik doiralari kengaymoqda!",
        image: "/img/blog/m-shartnoma.png",
        date: "2026-03-13",
        views: 665,
        featured: true
    },
    {
          id: 3,
        title: "🎉 Kirib kelayotgan Yangi 2026-yilingiz bilan!",
        image: "/img/blog/new-year.png",
        date: "2026-01-01",
        views: 401,
        featured: true
    },
   {
          id: 4,
        title: "🎉 YANGI YIL KECHASI — MASQUARADE BALL! 🎭",
        image: "/img/blog/news.png",
        date: "2025-12-24",
        views: 543,
        featured: true
    },
    //  {
    //     id: 3,
    //     title: ' “Sharq kitobxonlari” tanlovi',
    //     image: "/img/blog/kitobxon3.png",
    //     date: "2025-12-3",
    //     views: 807
    // },
    //     {
    //     id: 4,
    //     title: '📚 Sharq Universiteti kutubxonasida “Tanishing: yangi adabiyotlar” nomli kitoblar taqdimoti bo‘lib o‘tdii',
    //     image: "/img/blog/kitob.png",
    //     date: "2025-12-2",
    //     views: 807
    // },
    //       {
    //     id: 5,
    //     title: 'Sharq universitetida Talabalar ligasiga START berildi! Guruhlar o‘rtasida futbol musobaqasi bo‘lib o‘tadi.',
    //     image: "/img/blog/futbol.png",
    //     date: "2025-12-2",
    //     views: 569
    // },
    
      {
          id: 5,
        title: "📚 Sharq Universitetining hamkorlik aloqalari kengaymoqda!",
        image: "/img/blog/kutubxona-hamkorlik.jpg",
        date: "2025-12-25",
        views: 611,
        featured: true
    },
       {
          id: 6,
        title: `Sharq Universiteti hamda Prague Institute of Management and Technology universiteti o‘rtasida hamkorlik bo‘yicha memorandum imzolandi.`,
        image: "/img/blog/praga.png",
        date: "2025-12-11",
        views: 591,
        featured: true
    },
    {
        id: 7,
        title: "🇺🇿 Yurt bayrog‘i — milliy g‘urur, tinchlik va hamjihatlik timsoli.",
        image: "/img/blog/flag.jpg",
        date: "2025-11-18",
        views: 264,
        featured: true
    },
    {
        id: 8,
        title: ' “Sharq kitobxonlari” tanlovi',
        image: "/img/blog/reader_competetion.jpg",
        date: "2025-11-13",
        views: 507
    },
    {
        id: 9,
        title: "🎭 Diqqat, ijodkor talabalar!",
        image: "/img/blog/kasting.jpg",
        date: "2025-11-13",
        views: 701
    },
    {
        id: 9,
        title: "🎓 Sharq Universiteti “Tarix” yo‘nalishi talabalari Arxeologiya fanidan seminar mashg‘ulotini amaliy shaklda Navoiy viloyati tarixi va madaniyati davlat muzeyida tashkil etdilar. ",
        image: "/img/blog/muzey.jpg",
        date: "2025-11-07",
        views: 544
    },
    {
        id: 10,
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
        .news-image img{
            height: 100% !important;
        }
        .news-image{
            height: auto;
            width: auto;
            max-height: 500px;
        }
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