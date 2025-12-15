<!-- NewsDetail.vue - Yangilik batafsil sahifasi -->
<template>
    <div class="news-detail">
        <!-- <Banner></Banner> -->

        <!-- <div class="container"> -->

        <!-- <BreadCrumb></BreadCrumb> -->
        <article class="news-article">
            <div class="news-header">
                <h1 class="page-title" >{{ news.title }}</h1>
                <div class="news-meta">
                    <span><i class="far fa-calendar"></i> {{ formatDate(news.date) }}</span>
                    <span><i class="far fa-eye"></i> {{ news.views }}</span>
                </div>
            </div>

            <img :src="news.image" :alt="news.title" class="news-main-image" />

            <div class="news-body" v-html="news.content"></div>

            <div class="news-share">
                <h3>Share:</h3>
                <div class="share-buttons">
                    <a :href="`https://t.me/share/url?url=${shareUrl}`" target="_blank" class="share-btn telegram">
                        <i class="fab fa-telegram"></i>
                    </a>
                    <a :href="`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`" target="_blank"
                        class="share-btn facebook">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a :href="`https://twitter.com/intent/tweet?url=${shareUrl}`" target="_blank"
                        class="share-btn twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </article>
        <!-- </div> -->
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import BreadCrumb from '../breadcrumb/BreadCrumb.vue'
import Banner from '../banner/Banner.vue'

const route = useRoute()
const newsData = ref([
    {
        id: 1,
        title: "🎉 YANGI YIL KECHASI — MASQUARADE BALL! 🎭",
        image: "/img/blog/news.png",
        date: "2025-12-14",
        views: 543,
        featured: true,
        content: `Sharq Universiteti barcha talabalarni unutilmas Yangi yil bayramiga taklif etadi!

Dress code: Black
Sana: 24-dekabr
Vaqt: 12:00

Musiqa, raqs, taomlar va ichimliklar, foto zona hamda sovg‘alar sizni kutmoqda.

Murojaat uchun: @Samadovaa_7`

    },
    {
        id: 2,
        title: `Sharq Universiteti hamda Prague Institute of Management and Technology universiteti o‘rtasida hamkorlik bo‘yicha memorandum imzolandi.`,
        image: "/img/blog/praga.png",
        date: "2025-12-11",
        views: 591,
        featured: true,
        content: `Mazkur memorandum professor-o‘qituvchilar malakasini oshirish, talaba almashinuvi, qisqa o‘quv kurslari, qo‘shma ilmiy tadqiqotlar va xalqaro ilmiy-amaliy tadbirlarni tashkil etish kabi yo‘nalishlarda hamkorlikni rivojlantirishni nazarda tutadi.

Shuningdek, zamonaviy ta’lim yo‘nalishlari bo‘yicha o‘quv dasturlarini birgalikda takomillashtirish hamda ushbu sohada mutaxassislar ishtirokida mahorat darslari tashkil etish bo‘yicha kelishuvga erishildi.`

    },
    {
        id: 3,
        title: ' “Sharq kitobxonlari” tanlovi',
        image: "/img/blog/kitobxon3.png",
        date: "2025-12-3",
        views: 807,
        featured: true,
        content: `Filologiya yo‘nalishi talabalari o‘rtasida o‘tkaziladigan mazkur tanlovning 3-bosqichi: 
O‘tkir Hoshimov — “Dunyoning ishlari” asari asosida

➛ Sana: 4-dekabr 2025-yil
➛ Vaqt: 14:00
➛  Joy: Universitet kutubxonasi`

    },
    {
        id: 4,
        title: '📚 Sharq Universiteti kutubxonasida “Tanishing: yangi adabiyotlar” nomli kitoblar taqdimoti bo‘lib o‘tdii',
        image: "/img/blog/kitob.png",
        date: "2025-12-2",
        views: 807,
        featured: true,
        content: `Tadbir davomida talabalarga zamonaviy va ilmiy adabiyotlar tanishtirilib, mutolaa madaniyatini rivojlantirishga alohida e’tibor qaratildi`

    },
    {
        id: 5,
        title: 'Sharq universitetida Talabalar ligasiga START berildi! Guruhlar o‘rtasida futbol musobaqasi bo‘lib o‘tadi.',
        image: "/img/blog/futbol.png",
        date: "2025-12-2",
        views: 569,
        featured: true,
        content: `🎓 Sharq universitetida Talabalar ligasiga START berildi! Guruhlar o‘rtasida futbol musobaqasi bo‘lib o‘tadi.

➤ Sana: 1-dekabr
➤ Vaqt: 15:00

 🏆 Barcha talabalarni faol ishtirok etishga va o‘z guruhlari sha’nini himoya qilishga chaqiramiz! 

📌 Savol va takliflar: Sharq universiteti Yoshlar yetakchisiga murojaat qiling @Usmon_Abduqayimov`

    },
    {
        id: 6,
        title: "🇺🇿 Yurt bayrog‘i — milliy g‘urur, tinchlik va hamjihatlik timsoli.",
        image: "/img/blog/flag.jpg",
        date: "2025-11-18",
        views: 264,
        featured: true,
        content: `🎓 Sharq Universitetida “English Speaking Countries” festivali o‘tkazildi!
<br>
Talabalar ingliz tilida so‘zlashuvchi mamlakatlarning madaniyati va an’analarini ijodiy chiqishlar orqali namoyish etishdi.`
    },
    {
        id: 7,
        title: ' “Sharq kitobxonlari” tanlovi',
        image: "/img/blog/reader_competetion.jpg",
        date: "2025-11-13",
        views: 507
    },
    {
        id: 8,
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

const news = ref({
    id: route.params.id,
    ...newsData.value[route.params.id - 1]
})

const shareUrl = computed(() => window.location.href)

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
}
</script>

<style scoped lang="scss">
.news-detail {
    // padding: 130px 0 60px;
    // background: #f5f7fa;
    min-height: 100vh;
}

.container {
    max-width: 900px;
    margin: 0 auto;
}

.news-article {
    background: white;
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.news-header {
    margin-bottom: 24px;

    // h1 {
    //     font-size: 32px;
    //     font-weight: 700;
    //     color: #1a1a1a;
    //     margin: 0 0 12px;
    //     line-height: 1.3;
    // }

    .news-meta {
        display: flex;
        gap: 20px;
        font-size: 14px;
        color: #666;

        span {
            display: flex;
            align-items: center;
            gap: 8px;

            i {
                color: #0066cc;
            }
        }
    }
}

.news-main-image {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 32px;
}

.news-body {
    font-size: 16px;
    line-height: 1.8;
    color: #333;
    margin-bottom: 32px;

    :deep(p) {
        margin-bottom: 16px;
    }

    :deep(h2) {
        font-size: 24px;
        margin: 24px 0 16px;
        color: #1a1a1a;
    }
}

.news-share {
    padding-top: 24px;
    border-top: 2px solid #e8eef5;

    h3 {
        font-size: 16px;
        margin: 0 0 12px;
        color: #1a1a1a;
    }

    .share-buttons {
        display: flex;
        gap: 12px;
    }

    .share-btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 18px;
        transition: transform 0.3s;

        &:hover {
            transform: translateY(-3px);
        }

        &.telegram {
            background: #0088cc;
        }

        &.facebook {
            background: #1877f2;
        }

        &.twitter {
            background: #1da1f2;
        }
    }
}

@media (max-width: 768px) {
    .news-detail {
        padding: 100px 15px 40px;
    }

    .news-article {
        padding: 24px;
    }

    .news-header h1 {
        font-size: 24px;
    }

    .news-body {
        font-size: 14px;
    }
}
</style>