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
        title: "🌍 Sharq Universiteti talabalari uchun — UNESCO grant dasturi!",
        image: "/img/blog/unesco.png",
        date: "2026-02-05",
        views: 308,
        featured: true,
        content: `🌍 Sharq Universiteti talabalari uchun — UNESCO grant dasturi!

UNESCO tashkiloti tomonidan a’zo davlatlar universitetlariga rasmiy taklif xati yuborildi. 
Ushbu tashabbus doirasida Sharq Universiteti talabalari va yosh tadqiqotchilaridan turli ijtimoiy, innovatsion va ilmiy loyihalar bo‘yicha takliflar qabul qilinmoqda.

💰 Agar loyiha UNESCO talablariga mos deb topilsa, uni amalga oshirish uchun 26 000 AQSH dollargacha grant ajratiladi!

🎯 Bu — nafaqat grant, balki:
➤ xalqaro tajriba;
➤ UNESCO bilan hamkorlik;
➤ global miqyosdagi loyiha yuritish imkoniyati;
➤ CV uchun kuchli yutuq.

❗️Befarq bo‘lmang! O‘z g‘oyangizni loyiha sifatida taqdim eting va xalqaro moliyalashtirish imkoniyatiga ega bo‘ling!

📌 Batafsil ma’lumot uchun Xalqaro aloqalar bo‘limiga (https://t.me/beautyofdreams) murojaat qiling
`

    },
    {
          id: 2,
        title: " Universitetimiz hamkorlik doiralari kengayib bormoqda!",
        image: "/img/blog/malaka.png",
        date: "2026-02-05",
        views: 308,
        featured: true,
        content: `
SHARQ Universiteti hamda Sharof Rashidov nomidagi Samarqand davlat universiteti huzuridagi pedagog kadrlarni qayta tayyorlash va ularning malakasini oshirish mintaqaviy markazi o‘rtasida hamkorlik memorandumi imzolandi.

🤝 Mazkur hamkorlik doirasida:
➤ Ta’lim va ilmiy hamkorlikni rivojlantirish;
➤ Professor-o‘qituvchilar va mutaxassislar almashinuvi;
➤ Pedagog kadrlar uchun amaliy dasturlar;
➤ Seminar va ilmiy tadbirlarni birgalikda o‘tkazish;
➤ Masofaviy ta’lim va onlayn platformalarni rivojlantirish kabi vazifalar ko‘zda tutilgan.
`

    },
    
    {
        id: 4,
        title: "📣 Sharq Universiteti talabalari uchun “Navoiyga ehtirom” tanlovi e’lon qilinadi.",
        image: "/img/blog/navoiy.jpg",
        date: "2026-01-01",
        views: 401,
        featured: true,
        content: `📣 Sharq Universiteti talabalari uchun “Navoiyga ehtirom” tanlovi e’lon qilinadi.

Tanlovda universitetning barcha talabalari yakka tartibda ishtirok etishlari mumkin.

🔹 Tanlov shartlari:
■ Alisher Navoiy shaxsiyati va ijodiga ta’rif berish.
■ Alisher Navoiyning g‘azallaridan 5 ta, ruboiylaridan 5 ta yoddan aytib berish.
■ Alisher Navoiyning “Xamsa” (Kitob nashriyoti: “Yoshlar matbuoti”, 2023-yil) asari yuzasidan qisqacha sharh va savol-javob.

📅 O‘tkazilish sanasi: 05.02.2026-yil

🏆 G‘oliblarni taqdirlash:
➤ 1-o‘rin: 1 000 000 so‘m pul mukofoti
➤ 2- va 3-o‘rinlar: qimmatbaho sovg‘alar

Murojaat uchun: 91-333-56-01`

    },
    {
          id: 3,
        title: " Universitetimiz hamkorlik doiralari kengayib bormoqda!",
        image: "/img/blog/indoneziya.png",
        date: "2026-02-05",
        views: 308,
        featured: true,
        content: `📣 DIQQAT! TANLOV!

Indoneziyadagi Universitas Muhammadiyah Yogyakarta bilan tuzilgan hamkorlik memorandumi doirasida Sharq Universitetining 6 nafar talabasi bir semestr davomida Indoneziyada o‘qish imkoniyatiga ega bo‘ladi.

Nomzodlar tanlov asosida saralab olinadi.

Asosiy talablar:
• Ingliz tilida erkin muloqot qila olish (asosiy mezon);
• Semestr yakunlari bo‘yicha a’lo yoki yuqori akademik ko‘rsatkichlar;
• Universitet hayotida faol ishtirok.

Tanlov shakli:
• Ingliz tilidan test;
• Ingliz tilida suhbat (intervyu)

Tanlov sanasi va joyi:
📅 02.02.2026 | ⏰ 14:00 |📍 302-xona

Qo‘shimcha ma’lumot uchun universitetning xalqaro aloqalar bo‘limiga (https://t.me/beautyofdreams) murojaat qilishingiz mumkin.
`

    },
    {
        id: 5,
        title: "SHARQ universitetida “Zakovat” intellektual o‘yini",
        image: "/img/blog/zakovat.png",
        date: "2026-01-23",
        views: 401,
        featured: true,
        content: `🎓 SHARQ universitetida “Zakovat” intellektual o‘yini

SHARQ universiteti professor-o‘qituvchilari va ishchi xodimlari o‘rtasida “Zakovat” intellektual o‘yini tashkil etildi.
Tadbirda barcha bo‘lim va kafedralar jamoalari ishtirok etdi.

🏆 Tadbir yakunida g‘olib jamoalar va faol ishtirokchilar esdalik sovg‘alari bilan taqdirlandi.`

    },
    {
        id: 3,
        title: "🎉 Kirib kelayotgan Yangi 2026-yilingiz bilan!",
        image: "/img/blog/new-year.png",
        date: "2026-01-01",
        views: 401,
        featured: true,
        content: `🎉 Kirib kelayotgan Yangi 2026-yilingiz bilan!

Aziz talabalar va hurmatli professor-o‘qituvchilar! 
Sizlarni Yangi 2026-yil bilan chin qalbimizdan muborakbod etamiz. 

2026-yil yurtimizda tinchlik va taraqqiyot, har bir inson hayotida esa sog‘lik, baxt va muvaffaqiyatlar yili bo‘lishini tilaymiz. Birgalikdagi sa’y-harakatlarimiz ilm-fan ravnaqi va jamiyatimizning farovon kelajagiga munosib hissa bo‘lsin.

✨ Yangi 2026-yil Sharq universiteti uchun yangi zafarlar yili bo‘lsin!`

    },
    {
         id: 4,
        title: "🎉 YANGI YIL KECHASI — MASQUARADE BALL! 🎭",
        image: "/img/blog/news.png",
        date: "2025-12-24",
        views: 543,
        featured: true,
        content: `✨ Bayram davomida talabalar uchun qiziqarli, interaktiv va ko‘ngilochar o‘yinlar o‘tkazildi.`

    },
    {
        id: 5,
        title: "📚 Sharq Universitetining hamkorlik aloqalari kengaymoqda!",
        image: "/img/blog/kutubxona-hamkorlik.jpg",
        date: "2025-12-25",
        views: 611,
        featured: true,
        content: `📚 Sharq Universitetining hamkorlik aloqalari kengaymoqda!

Sharq Universiteti va Abdulla Qodiriy nomidagi Navoiy viloyat axborot-kutubxona markazi o‘rtasida hamkorlik memorandumi imzolandi.

✨ Mazkur memorandum asosida talaba va o‘qituvchilar uchun kitobxonlikni rivojlantirishga qaratilgan ko‘rik-tanlovlar, ijodiy uchrashuvlar va davra suhbatlari, yangi kitoblar bilan muntazam tanishtirish, shuningdek “Ochiq eshiklar kuni” va “Kitob yarmarkasi” kabi tadbirlar tashkil etilishi ko‘zda tutilgan.`

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
    // width: 100%;
    height: 300px;
    border-radius: 12px;
    margin-bottom: 32px;
}

.news-body {
    font-size: 16px;
    line-height: 1.8;
    color: #333;
    margin-bottom: 32px;
white-space: pre-line;
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