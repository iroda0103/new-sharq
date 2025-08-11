<template>
    <div>
        <Hero></Hero>
        <Ticker></Ticker>
        <About></About>
        <Testimonials></Testimonials>
        <!-- <Stats></Stats> -->
        <FAQ></FAQ>
        <Partners></Partners>

        <RecentNews></RecentNews>

    </div>
</template>

<style scoped lang="scss">
.hero {
    position: relative;
    padding: 130px 0;


    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap; // fallback
        gap: 32px;
    }

    &__content {
        // flex: 1 1 400px;
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

// Tablet (≤ 992px)
@media only screen and (max-width: 894px) {
    .header .header-bottom .nav__list {
        gap: 10px;
    }

    .hero {
        padding: 80px;

        &__title {
            font-size: 32px;
        }

        &__text {
            font-size: 16px;
            line-height: 24px;
        }

        // &__wrapper {
        //   flex: 0;
        // }
    }


}

// Mobile (≤ 768px)
@media only screen and (max-width: 768px) {
    .hero {
        padding: 40px;

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

// Very small phones (≤ 425px)
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
</style>

<script>
import Hero from '../components/Hero.vue'
import Ticker from '../components/Ticker.vue';
import About from '../components/about/About.vue';
import FAQ from '../components/FAQ.vue';
import Partners from '../components/Partners.vue';
import RecentNews from '../components/RecentNews.vue';
import Testimonials from '../components/Testimonials.vue';
import Stats from '../components/Stats.vue';

export default {
    components: {
        Hero,
        Ticker,
        About,
        FAQ,
        Partners,
        RecentNews,
        Testimonials,
        Stats
    }
}
</script>