<template>
    <!-- START HERO SECTION -->
    <section class="hero">
        <div class="hero-bg"></div>

        <div class="container hero__container">
            <div class="hero__content">
                <h2 class="hero__title">
                    <span class="highlight-white animate-slide">Zamonaviy</span>
                    <span class="highlight-gradient animate-fade">Ta'lim</span>,
                    <span class="highlight-outline animate-slide">Imkoniyat</span> va
                    <span class="highlight-outline animate-fade">Qadriyatlar</span> uyg‘unligi
                </h2>
                <p class="hero__text">
                    Sizni zamonaviy kelajak sari yetaklovchi, innovatsion universitetda oʻqish imkoniyati
                    kutmoqda!
                </p>
                <a href="https://qabul.sharqedu.uz/"><button disabled class="blue-link font-bold">Ariza berish</button></a>
            </div>
            <!-- <Stats :stats="statsData" :title="'Bizning Statistikalar'" :delay="200" /> -->

            <div class="hero__wrapper">
                <!-- Video o‘rniga rasm -->
                <!-- <img
          loading="lazy"
          class="hero__img"
          src="/img/place.webp"
          alt="Hero image"
        /> -->
            </div>
            <LocationButton></LocationButton>
        </div>
    </section>
    <!-- END HERO SECTION -->
</template>
<script>
import LocationButton from '../utilits/other/locationButton.vue';
import Stats from './about/Stats.vue';

export default {
    name: 'HeroSection',
    components: {
        Stats,
        LocationButton
    },
    data() {
        return {
            statsData: [
                { icon: "trophy", value: "98%", label: "Bitiruvchilarning ishga joylashish ko'rsatkichi" },
                { icon: "journal-whills", value: "150+", label: "Nashr etilgan ilmiy maqolalar" },
                { icon: "globe", value: "30+", label: "Xalqaro hamkorlikdagi loyihalar" },
                { icon: "people-group", value: "5000+", label: "Faol talabalar jamoasi" }
            ]
        };
    }
};
</script>
<style lang="scss">
header {
    background-color: transparent !important;
}

main {
    margin-top: 0 !important;
}

.hero {
    position: relative;
    padding: 130px 0;
    overflow: hidden;
    color: #fff; // fon ustida matn ko‘rinishi uchun oq rang

    &-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("/img/20250801_124851.jpg"); // public/img dan
        background-size: cover;
        background-position: center 10%;
        background-repeat: no-repeat;
        z-index: -1;
        filter: brightness(0.6); // matn ko‘rinishi uchun biroz qoraytirib qo‘ydim
    }

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        flex-wrap: wrap;
        gap: 32px;
        height: 420px;
        padding-top: 140px;

        .blue-link {
            padding: 12px 35px;
        }
    }

    &__content {
        max-width: 600px;
    }

    &__title {
        font-size: 45px;
        line-height: 130%;
        margin-bottom: 16px;

        mark {
            background-color: transparent;
            color: #00bafc;
            font-weight: bold;
        }
    }

    &__text {
        font-size: 18px;
        line-height: 28px;
        margin-bottom: 20px;
    }

    &__wrapper {
        flex: 1 1 400px;
        max-width: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__img,
    &__video {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
    }
}

.blue-link {
    display: inline-block;
    padding: 9px 26px;
    background: linear-gradient(to right,
            rgba(0, 69, 94, 0.87),
            rgba(27, 106, 233, 0.93));
    border-radius: 85px;
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    opacity: 0.4;
    transition: opacity 0.3s;
}

.blue-link:hover {
    // opacity: 0.8;
    cursor: no-drop;
}

.blue-link:active {
    opacity: 0.6;
}

/* Tablet (≤ 992px) */
@media only screen and (max-width: 894px) {
    .hero {
        padding: 80px;

        &__title {
            font-size: 32px;
        }

        &__text {
            font-size: 16px;
            line-height: 24px;
        }


    }


}

@media only screen and (max-width: 768px) {
    .hero {
        padding: 40px;
        padding-bottom: 80px !important;

        &__container {
            flex-direction: column-reverse;
            align-items: center;
            text-align: center;
        }

        &__wrapper {
            width: 100%;
            flex: 0;
        }

        &__content {
            width: 100%;
        }

        &__title {
            font-size: 26px;
        }

        &__text {
            font-size: 15px;
        }
    }
}

@media only screen and (max-width: 425px) {
    .hero {
        padding: 30px 0;

        &__title {
            font-size: 22px;
        }

        &__text {
            font-size: 14px;
        }
    }
}

.hero__title {
    font-size: clamp(26px, 5vw, 48px);
    line-height: 130%;
    margin-bottom: 16px;
    font-weight: 700;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    span {
        display: inline-block;
        opacity: 0;
        transform: translateY(20px);
        animation-fill-mode: forwards;
    }

    .highlight-white {
        color: #fff;
        font-weight: 800;
    }

    .highlight-gradient {
        background: linear-gradient(90deg, #00bafc, #0066ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 800;
    }

    .highlight-outline {
        color: transparent;
        -webkit-text-stroke: 1.2px #fff;
        font-weight: 800;
    }
}

/* ANIMATSIYALAR */
@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-slide {
    animation: fadeInUp 0.9s ease forwards;
}

.animate-fade {
    animation: fadeInUp 1.2s ease forwards;
}

/* Hover effekti */
.hero__title span:hover {
    transform: scale(1.08);
    transition: transform 0.3s ease, color 0.3s ease;
}

/* Asosiy hero */
.hero {
    position: relative;
    padding: 130px 0;
    overflow: hidden;
    color: #fff;

    &-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("/img/20250801_124851.jpg");
        background-size: cover;
        background-position: center 10%;
        background-repeat: no-repeat;
        z-index: -1;
        filter: brightness(0.6);
        transition: all 0.4s ease;
    }

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 32px;
        height: 420px;
        padding-top: 140px;

        .blue-link {
            padding: 12px 35px;
        }
    }

    &__content {
        max-width: 600px;
    }

    &__title {
        font-size: clamp(36px, 3vw, 60px);
        line-height: 130%;
        margin-bottom: 16px;
    }

    &__text {
        font-size: clamp(18px, 1.2vw, 22px);
        line-height: 30px;
        margin-bottom: 25px;
    }
}

/* 1920px va undan kattaroq ekranlar uchun */
@media only screen and (min-width: 1600px) {
    .hero {
        padding: 200px 0;

        /* yuqoridan va pastdan kengroq joy */
        &__container {
            height: 600px;
            gap: 64px;
        }

        // &__title {
        //     font-size: 70px;
        //     line-height: 100%;
        // }

        // &__text {
        //     font-size: 24px;
        //     line-height: 36px;
        //     max-width: 700px;
        // }

        .blue-link {
            font-size: 22px;
            padding: 14px 40px;
        }

        &-bg {
            background-position: center top;
            /* yuqoriroq joylashtiradi */
            filter: brightness(0.65);
        }
    }
}

/* Ultra keng ekranlar (≥1920px) uchun */
@media only screen and (min-width: 1920px) {
    .hero {
        padding: 220px 0;

        &__container {
            height: 700px;
            // justify-content: space-evenly;
        }

        // &__title {
        //     font-size: 80px;
        //     line-height: 150%;
        // }

        // &__text {
        //     font-size: 26px;
        //     line-height: 40px;
        // }

        .blue-link {
            font-size: 24px;
            padding: 16px 48px;
        }

        &-bg {
            background-size: cover;
            background-position: center center;
        }
    }
}

.stats-card {
    position: relative !important;
}

@media (max-width: 1150px) {
    .stats-card {
        display: none;
    }
}

@media (max-width: 1100px) {
    .hero {
        padding: 90px 0;


        &__container {
            padding-top: 100px;
        }


        &__content {
            text-align: center;
        }
    }


    .hero__title {
        justify-content: center;
    }
}


/* Tablet — 768px ↓ */
@media (max-width: 768px) {
    .hero {
        padding: 70px 0;


        &__container {
            flex-direction: column-reverse;
            align-items: center;
            text-align: center;
            padding-top: 60px;
        }


        &__wrapper {
            width: 100%;
            flex: none;
        }
    }


    .hero__title {
        font-size: clamp(22px, 5vw, 32px);
    }

    .hero__text {
        font-size: 14px;
    }
}


/* Mobile — max 425px */
@media (max-width: 425px) {
    .hero {
        padding: 50px 0;
    }

    .hero__title {
        font-size: clamp(20px, 6vw, 26px);
    }
}


/* Large monitors — min 1600 */
@media (min-width: 1600px) {
    .hero {
        padding: 180px 0;

        &__container {
            gap: 60px;
        }
    }
}


/* Ultra-wide — min 1920 */
@media (min-width: 1920px) {
    .hero {
        padding: 220px 0;

        &-bg {
            background-position: center;
        }
    }
}


.stats-card {
    position: relative !important;
}

@media (max-width: 1150px) {
    .stats-card {
        display: none;
    }
}
</style>
